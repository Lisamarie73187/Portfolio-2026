import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteApiPlugin } from './scripts/viteApiPlugin';

export default defineConfig({
  // `viteApiPlugin` serves the /api Vercel Functions in-process during dev,
  // so `npm run dev` runs the full app (frontend + database API) on one server.
  plugins: [react(), tailwindcss(), viteApiPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
