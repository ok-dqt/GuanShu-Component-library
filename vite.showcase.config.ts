import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './showcase',
  base: process.env.NODE_ENV === 'production' ? '/GuanShu-Component-library/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8005,
    host: '0.0.0.0',
  },
  build: {
    outDir: '../dist-showcase',
  },
});
