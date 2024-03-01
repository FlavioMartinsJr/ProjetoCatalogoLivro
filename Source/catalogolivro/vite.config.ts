import { defineConfig } from 'vite'
import Router from 'vite-plugin-router'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    port: 3000,
    cors:true
  },
  plugins: [react(),Router()],
})
