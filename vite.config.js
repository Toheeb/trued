import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        netlify: resolve(__dirname, 'netlify/index.html'),
      }
    }
  }
})
