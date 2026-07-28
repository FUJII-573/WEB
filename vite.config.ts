import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: './client', // 👈 ชี้ root ไปที่ client
  build: {
    outDir: '../dist', // 👈 ให้ build ออกไปที่โฟลเดอร์ dist ด้านนอก
    emptyOutDir: true,
  },
});
