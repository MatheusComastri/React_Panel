/* ============================================================
 * Footer.jsx — Rodapé da aplicação
 *
 * Exibe:
 *   - Logo e nome da aplicação
 *   - Descrição da plataforma
 *   - Tecnologias utilizadas (React, Vite, Bootstrap, Lucide)
 *   - Créditos dos autores
 *
 * Layout: Bootstrap container + flex utilitários
 * Ícone: Atom (Lucide React)
 * ============================================================ */

import { Atom } from 'lucide-react'

function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="footer" id="contato">
      <div className="container">
        
        {/* Linha superior — logo + descrição + tecnologias */}
        <div className="footer-content">
          
          {/* Logo e nome */}
          <div className="footer-logo-area">
            <div className="footer-logo">
              <Atom size={28} />
              <h3 className="footer-brand">QuantumFlow</h3>
            </div>
            <p className="footer-desc">
              Plataforma moderna para IA científica e simulações moleculares.
            </p>
          </div>

          {/* Tecnologias utilizadas */}
          <div className="footer-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">Bootstrap</span>
            <span className="tech-badge">Lucide React</span>
          </div>

        </div>

        {/* Linha divisória */}
        <div className="footer-divider" />

        {/* Linha inferior — copyright + autores */}
        <div className="footer-bottom">
          <span>&copy; {anoAtual} QuantumFlow. Todos os direitos reservados.</span>
          <span className="footer-authors">
            Desenvolvido por: <strong>Matheus Comastri & Thiago Goulart</strong>
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer