import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { $, argv } from 'bun';
import {
	BUN_DEFAULT_ARGS_LENGTH,
	DEFAULT_EXTENSIONS,
	UNFOUND_INDEX
} from '../src/constants';

// Flags:
// -d, --dir:      Specify the source directory
// -e, --ext:      Specify file extensions as a comma-separated list
// -o, --out:      Specify the output file or directory
// -p, --pattern:  Specify a custom search pattern
const args = argv.slice(BUN_DEFAULT_ARGS_LENGTH); // Skip the first two args: node path and script path
let srcDir = './src';
let extensions = DEFAULT_EXTENSIONS;
let outFile = 'TODO.md';
let searchPattern = 'TODO\\s*:';

for (let index = 0; index < args.length; index++) {
	const arg = args[index];
	if (arg === '-d') {
		const [nextArg] = args.slice(index + 1);
		if (nextArg) {
			srcDir = nextArg;
			index++;
		}
	} else if (arg.startsWith('--dir=')) {
		const [, dir] = arg.split('=');
		srcDir = dir;
	} else if (arg === '-e') {
		const [nextArg] = args.slice(index + 1);
		if (nextArg) {
			extensions = nextArg
				.split(',')
				.map((ext) => (ext.startsWith('.') ? ext : `.${ext}`));
			index++;
		}
	} else if (arg.startsWith('--ext=')) {
		const [, exts] = arg.split('=');
		extensions = exts
			.split(',')
			.map((ext) => (ext.startsWith('.') ? ext : `.${ext}`));
	} else if (arg === '-o') {
		const [nextArg] = args.slice(index + 1);
		if (nextArg) {
			outFile = nextArg;
			index++;
		}
	} else if (arg.startsWith('--out=')) {
		const [, out] = arg.split('=');
		outFile = out;
	} else if (arg === '-p') {
		const [nextArg] = args.slice(index + 1);
		if (nextArg) {
			searchPattern = nextArg;
			index++;
		}
	} else if (arg.startsWith('--pattern=')) {
		const [, pattern] = arg.split('=');
		searchPattern = pattern;
	}
}

if (outFile.endsWith(path.sep)) {
	await mkdir(outFile, { recursive: true });
	outFile = path.join(outFile, 'TODO.md');
} else {
	const parentDir = path.dirname(outFile);
	await mkdir(parentDir, { recursive: true });
}

const conditions = extensions
	.map((ext, index) =>
		index === 0 ? `-name "*${ext}"` : `-o -name "*${ext}"`
	)
	.join(' ');

const fileList =
	await $`find ${srcDir} -type f \( ${{ raw: conditions }} \)`.text();
const trimmedFileList = fileList.trim();
const files = trimmedFileList ? trimmedFileList.split('\n') : [];

console.log(
	`Scanning ${files.length} files in ${srcDir} for pattern "${searchPattern}"...`
);

const todos = [];

const grepPromises = files.map(async (file) => {
	try {
		const grepResult = await $`grep -En "${searchPattern}" ${file}`.text();

		return { file, grepResult };
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('Failed with exit code 1')
		) {
			return { file, grepResult: '' };
		}
		/* eslint-disable custom/max-depth-extended */
		if (error instanceof Error) {
			console.error(`Error grepping ${file}: ${error.message}`);
		} else {
			console.error(`Unknown error grepping ${file}: ${error}`);
		}

		return { file, grepResult: '' };
		/* eslint-enable custom/max-depth-extended */
	}
});

const grepResults = await Promise.all(grepPromises);

for (const { file, grepResult } of grepResults) {
	if (grepResult) {
		const lines = grepResult.trim().split('\n');
		for (const line of lines) {
			const colonIndex = line.indexOf(':');
			if (colonIndex !== UNFOUND_INDEX) {
				const lineNumber = line.substring(0, colonIndex).trim();
				let comment = line.substring(colonIndex + 1).trim();
				// Remove any leading comment markers and the matched search pattern.
				comment = comment
					.replace(
						new RegExp(
							`^(\\/\\/|\\/\\*|\\#)?\\s*(?:${searchPattern})\\s*`
						),
						''
					)
					.trim();
				todos.push({ comment, file, line: lineNumber });
			}
		}
	}
}

const now = new Date();
let markdown = `**Generated on:** ${now.toLocaleString()}\n\n`;
markdown += `**Total TODO items:** ${todos.length}\n\n`;
markdown += '---\n\n';

if (todos.length === 0) {
	markdown += 'No TODO items found.\n';
} else {
	markdown += `| File | Line | Comment |\n`;
	markdown += `| ---- | ---- | ------- |\n`;
	for (const item of todos) {
		markdown += `| ${item.file} | ${item.line} | ${item.comment} |\n`;
	}
}

await writeFile(outFile, markdown);
console.log(`TODOs written to ${outFile}`);