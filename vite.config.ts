import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  }
})