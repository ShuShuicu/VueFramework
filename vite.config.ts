import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts', // 生成路由类型声明文件
    }),
    vue(), // 确保 vue() 插件在 VueRouter 之后
    vueDevTools(),
    Components({
      dts: 'src/components.d.ts', // 生成类型声明文件
    }),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入 Vue 相关 API
      dts: 'src/auto-imports.d.ts', // 生成类型声明文件
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})