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
        ...Object.fromEntries(globSync('nested/**/*.html').map(file => [file.slice(0, file.length - (extname(file).length +6)),file])),
      }
    },
  },

})
