import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// This __dirname is generated as typescript couldnot find name __dirname directly mentioned in alias
const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteCompression()],
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, 'src/components'),
      '#constants': path.resolve(__dirname, 'src/constants'),
      '#types': path.resolve(__dirname, 'src/types'),
      '#utils': path.resolve(__dirname, 'src/utils'),
      '#hooks': path.resolve(__dirname, 'src/hooks'),
      '#assets': path.resolve(__dirname, 'src/assets'),
      '#views': path.resolve(__dirname, 'src/views'),
      '#contexts': path.resolve(__dirname, 'src/contexts'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
