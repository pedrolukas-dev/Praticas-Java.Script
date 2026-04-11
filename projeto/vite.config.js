import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Este arquivo diz ao servidor como rodar o seu site
export default defineConfig({
  plugins: [react()],
})