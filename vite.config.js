// vite.config.js

import { join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: join(import.meta.dirname, 'src/quasar-variables.sass')
    })
  ],

  // La base por defecto es '/' (Render, dominio propio).
  // Para GitHub Pages se pasa con: npm run deploy (usa --base=/SERVICIOS_SENA/)
})