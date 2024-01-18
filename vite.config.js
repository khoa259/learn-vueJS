import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    chainWebpack: (config) => {
        config.module.rules.delete('eslint')
    },
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
})
