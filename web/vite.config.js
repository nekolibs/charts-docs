import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'force-optimize-charts-on-change',
      handleHotUpdate({ file, server }) {
        if (file.includes('/@neko-os/charts/')) {
          const depsCache = path.resolve(__dirname, 'node_modules/.vite')
          if (fs.existsSync(depsCache)) {
            fs.rmSync(depsCache, { recursive: true, force: true })
          }
          server.restart()
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
    },
    dedupe: ['react', 'react-dom', 'react-router', '@neko-os/ui', '@neko-os/charts', 'dayjs', 'ramda', 'tinycolor2', 'prism-react-renderer'],
  },
  optimizeDeps: {
    include: ['@neko-os/charts', 'dayjs'],
    exclude: ['@neko-os/ui'],
    force: true,
  },
  server: {
    port: 5174,
    fs: {
      allow: ['..'],
    },
    watch: {
      ignored: [
        '!**/node_modules/@neko-os/ui/**',
        '!**/node_modules/@neko-os/charts/**',
        '!**/.yalc/@neko-os/ui/**',
        '!**/.yalc/@neko-os/charts/**',
      ],
    },
  },
})
