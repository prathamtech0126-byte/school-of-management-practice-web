import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: __dirname,
  /** Pin PostCSS so Tailwind runs even if the dev server cwd or config discovery differs. */
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.cjs'),
  },
})
