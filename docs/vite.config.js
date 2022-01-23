import path from 'path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, '../src'),
      '/@components': path.resolve(__dirname, '../src/components'),
    }
  }
})