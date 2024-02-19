import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    port: 3000,
    proxy:{
      '/Home': 'http://localhost:3000'
    },
    cors:true
  },
  plugins: [react()],
})
