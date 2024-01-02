import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve,extname } from 'path'
import { globSync } from 'glob'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      }
    },
  },

})
