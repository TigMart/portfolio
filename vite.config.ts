/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@documents': path.resolve(__dirname, './src/assets/documents'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@service': path.resolve(__dirname, './src/service'),
      '@validations': path.resolve(__dirname, './src/validations'),
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.ts', '.tsx'],
  },
  plugins: [react()],
});
