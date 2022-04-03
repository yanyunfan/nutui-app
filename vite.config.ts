import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {createStyleImportPlugin, NutuiResolve} from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [
        NutuiResolve(),
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: ` @import "./src/assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
  resolve: {
    // Vite 设置别名路径
    alias: {
      "@": path.resolve("./src"),  // @ 代替 src
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
