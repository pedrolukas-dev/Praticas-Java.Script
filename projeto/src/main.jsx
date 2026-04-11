import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Importa os estilos do Tailwind que você acabou de criar
import App from './App.jsx' // Importa o componente das rotas/jogadores

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)