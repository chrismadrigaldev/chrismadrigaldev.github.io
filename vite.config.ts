// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react', 
            'react-dom', 
            'three', 
            '@react-three/fiber', 
            '@react-three/drei'
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600, 
  },
});
