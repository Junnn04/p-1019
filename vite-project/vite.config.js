import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss'; // WindiCSS 插件用於 Vite

export default defineConfig({
  base: "/PROJECT-practice/",
  plugins: [
    WindiCSS(),
  ],
});