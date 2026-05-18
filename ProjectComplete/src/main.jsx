/* ============================================================
 * main.jsx — Ponto de entrada da aplicação React
 *
 * Importa:
 *   - Bootstrap CSS (via CDN no index.html)
 *   - Bootstrap JS (via CDN no index.html)
 *   - Estilos globais customizados (Global.css)
 *   - Componente raiz App
 *
 * Renderiza a aplicação dentro de StrictMode para
 * detectar potenciais problemas em desenvolvimento.
 * ============================================================ */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos globais personalizados (complementares ao Bootstrap)
import './Styles/Global.css'

// Componente raiz da aplicação
import App from './App.jsx'

// Renderiza a aplicação no elemento #root do index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)