import {Atom, Menu } from 'lucide-react'

function Header() {
  return(
    <header className="hedaer">
      <div className="logo-area">
        <Atom size={32} className="logo-icon"/>
        <h1>QuantumFlow</h1>
      </div>


      <nav className="nav-links">
        <a href="#">Serviços</a>
        <a href="#">Tecnologia</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>

      <div className="header-buttons">
        <button className="login-btn">Login</button>
        <button className="start-btn">Começar</button>

        <button className="menu-btn">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Header