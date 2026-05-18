/* ============================================================
 * Metrics.jsx — Seção de métricas / indicadores
 *
 * Exibe estatísticas e números que demonstram a credibilidade
 * e os resultados da plataforma QuantumFlow.
 *
 * Layout: Bootstrap grid responsivo com cards estilizados
 * Ícones: nenhum direto (uso de números grandes como destaque)
 * ============================================================ */

import { Database, TestTube, Globe, Users } from 'lucide-react'

function Metrics() {
  // Array de métricas — cada objeto contém valor e rótulo
  const metricas = [
    {
      icon: <Database size={28} />,
      value: '1200+',
      label: 'Simulações Executadas'
    },
    {
      icon: <TestTube size={28} />,
      value: '98%',
      label: 'Precisão Preditiva'
    },
    {
      icon: <Globe size={28} />,
      value: '24/7',
      label: 'Cloud Processing'
    },
    {
      icon: <Users size={28} />,
      value: '500+',
      label: 'Pesquisadores Ativos'
    }
  ]

  return (
    <section className="metrics-section" id="metricas">
      <div className="container">
        
        {/* Cabeçalho da seção */}
        <div className="section-header">
          <span className="section-badge">Resultados</span>
          <h2 className="section-title">Números que Comprovam</h2>
          <p className="section-subtitle">
            Resultados concretos entregues para a comunidade científica
          </p>
        </div>

        {/* Grade de métricas — 4 cards lado a lado
         *   xs: 1 col, sm: 2 col, lg: 4 col */}
        <div className="row g-4">
          {metricas.map((metrica, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3"
            >
              <div className="metric-card">
                <div className="metric-icon">{metrica.icon}</div>
                <h3 className="metric-value">{metrica.value}</h3>
                <p className="metric-label">{metrica.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metrics