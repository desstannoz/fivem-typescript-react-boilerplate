import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    emptyOutDir: true,
    minify: 'esbuild',
  },
  resolve: {
    alias: [
      //   { find: '@shared', replacement: path.resolve(__dirname, '../src/shared') },
      //   { find: '@webview', replacement: path.resolve(__dirname, './src') },
      //   { find: '@data', replacement: path.resolve(__dirname, '../src/data') },
    ],
  },
})
