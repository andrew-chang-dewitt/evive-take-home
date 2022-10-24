import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Menu ordering system',
      fileName: 'menu-ordering-system',
    },
  },
})
