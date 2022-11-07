import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import rules from './unocss.rules'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    Components(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.js'
    }),
    vue(),
    Unocss({
      // presets: [
      //   presetAttributify({ /* preset options */}),
      //   presetUno(),
      // ],
      rules: rules,
      theme: {
        colors: {
          primary1: '#52C4CC',
          primary2: '#6633FF',
          primary3: '#FF7A00',
          secondary1: '#FBBF00',
          black: '#131415'
        },
      },
    })
  ]
})
