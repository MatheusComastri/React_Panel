/* ============================================================
 * Hero.jsx — Banner principal / Seção de destaque (Hero Section)
 *
 * Exibe:
 *   - Badge com ícone de destaque (FlaskConical)
 *   - Título principal com a proposta de valor
 *   - Subtítulo descritivo
 *   - Dois botões de ação (CTA principal + secundário)
 *   - Cards laterais com indicadores (precisão 98%, cloud 24/7)
 *
 * Props: nenhuma (componente estático/autocontido)
 * Ícones: FlaskConical, ArrowRight (Lucide React)
 * Layout: Bootstrap grid + classes responsivas
 * ============================================================ */

import { ArrowRight, FlaskConical } from 'lucide-react'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* ===== COLUNA ESQUERDA — CONTEÚDO PRINCIPAL ===== */}
          <div className="col-lg-7 hero-left">
            
            {/* Badge de destaque */}
            <div className="hero-badge">
              <FlaskConical size={18} />
              <span>IA Científica Avançada</span>
            </div>

            {/* Título principal */}
            <h1 className="hero-title">
              Simulações Moleculares com <span className="text-gradient">Inteligência Artificial</span>
            </h1>

            {/* Subtítulo */}
            <p className="hero-subtitle">
              Plataforma moderna para cálculos quânticos, análise espectral
              e modelagem computacional em nuvem.
            </p>

            {/* Botões de ação */}
            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg">
                Explorar Plataforma
                <ArrowRight size={18} className="ms-2" />
              </button>
              <button className="btn btn-outline-light btn-lg ms-3">
                Ver demonstração
              </button>
            </div>
          </div>

          {/* ===== COLUNA DIREITA — CARDS DE INDICADORES ===== */}
          <div className="col-lg-5 hero-right">
            <div className="hero-card hero-card-large">
              <h2 className="hero-card-number">98%</h2>
              <p className="hero-card-label">Precisão Preditiva</p>
            </div>
            <div className="hero-card">
              <h2 className="hero-card-number">24/7</h2>
              <p className="hero-card-label">Cloud Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero