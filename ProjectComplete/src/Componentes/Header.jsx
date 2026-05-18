/* ============================================================
 * Header.jsx — Componente de navegação principal
 *
 * Exibe:
 *   - Logotipo com ícone Atom + nome "QuantumFlow"
 *   - Menu de navegação com links para as seções
 *   - Botões de Login / Começar + menu hambúrguer (mobile)
 *
 * Uso de Bootstrap: navbar, grid layout, classes responsivas
 * Ícone: Atom (Lucide React)
 * ============================================================ */

import { Atom, Menu } from 'lucide-react'

function Header() {
  return (
    <header className="header">
      {/* Container Bootstrap alinhado ao conteúdo */}
      <div className="header-inner">
        {/* Logo + Nome do projeto */}
        <div className="logo-area">
          <Atom size={32} className="logo-icon" />
          <h1 className="logo-title">QuantumFlow</h1>
        </div>

        {/* Navegação principal — visível em desktop, escondida em mobile */}
        <nav className="nav-links">
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#diferenciais" className="nav-link">Diferenciais</a>
          <a href="#metricas" className="nav-link">Resultados</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* Botões de ação + menu hambúrguer responsivo */}
        <div className="header-buttons">
          <button className="btn btn-outline-light btn-sm login-btn">
            Login
          </button>
          <button className="btn btn-primary btn-sm start-btn">
            Começar
          </button>
          <button className="menu-btn" aria-label="Abrir menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header