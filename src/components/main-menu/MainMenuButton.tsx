import { useSpring } from "@react-spring/web";
import { ReactNode } from "react";
import { mainMenuButtonStyle } from "../../styles/main-menu/mainMenuStyles";

export const MainMenuButton = (children: ReactNode) => {
	const [mainMenuButtonSpring, mainMenuButtonApi] = useSpring(
		() => ({
			color: "#ffffff",
		})
	);

	const onButtonHover = () => {

	};

	return (
		<button 
			style={mainMenuButtonStyle}
		>
			{children}
		</button>
		
	);
};