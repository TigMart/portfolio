/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.ts', '.tsx'],
  },
  plugins: [react()],
});
