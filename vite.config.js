import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Force esbuild à traiter les fichiers .js comme des fichiers JSX
  },
  server: {
    port: 3000, // Port du serveur de développement
  },
});