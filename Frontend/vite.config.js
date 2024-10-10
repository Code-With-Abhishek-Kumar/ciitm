import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Use Proxy if You are Using backend
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/admin': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      
    },
  },
})



