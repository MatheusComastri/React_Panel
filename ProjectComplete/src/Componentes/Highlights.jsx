/* ============================================================
 * Highlights.jsx — Seção de destaque / diferenciais
 *
 * Seção extra obrigatória que apresenta as vantagens
 * competitivas da plataforma, com cards de destaque.
 *
 * Cada card contém:
 *   - Ícone representativo (Lucide React)
 *   - Título do diferencial
 *   - Descrição resumida
 *
 * Layout: Bootstrap grid responsivo
 * Ícones: Shield, Rocket, Layers, BarChart (Lucide React)
 * ============================================================ */

import { Shield, Rocket, Layers, BarChart3 } from 'lucide-react'

function Highlights() {
  // Array de diferenciais — poderia vir de um arquivo de dados
  // para ser ainda mais reutilizável
  const diferenciais = [
    {
      icon: <Shield size={28} />,
      title: 'Segurança de Dados',
      description:
        'Criptografia de ponta a ponta e conformidade com LGPD para proteger suas pesquisas.'
    },
    {
      icon: <Rocket size={28} />,
      title: 'Alta Performance',
      description:
        'Infraestrutura otimizada com GPUs dedicadas para processamento paralelo em larga escala.'
    },
    {
      icon: <Layers size={28} />,
      title: 'Integração Contínua',
      description:
        'API aberta para integração com ferramentas de laboratório e sistemas legados.'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Relatórios Avançados',
      description:
        'Dashboards interativos com visualização de dados em tempo real.'
    }
  ]

  return (
    <section className="highlights-section" id="diferenciais">
      <div className="container">
        
        {/* Cabeçalho da seção */}
        <div className="section-header">
          <span className="section-badge">Diferenciais</span>
          <h2 className="section-title">Por que escolher a QuantumFlow?</h2>
          <p className="section-subtitle">
            Combinamos ciência de ponta com tecnologia moderna para transformar pesquisa
          </p>
        </div>

        {/* Grade de diferenciais — 4 cards lado a lado
         *   xs: 1 col, sm: 2 col, lg: 4 col */}
        <div className="row g-4">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3"
            >
              <div className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights