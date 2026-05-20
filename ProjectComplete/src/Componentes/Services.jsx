/* ============================================================
 * Services.jsx — Seção de grade de serviços / cards
 *
 * Exibe uma grade responsiva com os cards de serviços.
 * Os dados vêm do arquivo Data/Services.js (dados exportados),
 * e são passados como props para o componente ServiceCard.
 *
 * Mínimo exigido: 4 cards (aqui temos 4 serviços)
 * Ícones: Atom, Brain, Database, Cpu + Zap (Lucide React)
 * Layout: Bootstrap row + col (grid responsivo)
 * ============================================================ */

import { Atom, Brain, Database, Cpu, Zap } from 'lucide-react'
import ServiceCard from './ServiceCard'
import { services } from '../Data/Services'


function Services() {
  // Array de serviços — cada objeto contém os dados que serão (import de services.js)
  // passados via props para o componente ServiceCard
  return (
    <section className="services-section" id="servicos">
      <div className="container">
        
        {/* Cabeçalho da seção */}
        <div className="section-header">
          <span className="section-badge">Serviços</span>
          <h2 className="section-title">Recursos Inteligentes para Pesquisa Científica</h2>
          <p className="section-subtitle">
            Ferramentas computacionais de ponta para acelerar descobertas científicas
          </p>
        </div>

        {/* Grade de cards — responsiva com Bootstrap grid
         *   sm: 1 coluna, md: 2 colunas, lg: 3 colunas
         * O .map() percorre o array "services" importado
         * do arquivo Data/Services.js.
         *
         * Cada objeto do array é transformado em um
         * componente <ServiceCard />.
         * 
         *   Dados passados via props (conteúdo dinâmico) -> icon, title, description*/}
        <div className="row g-4">
          {services.map((servico, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4"
            >
              {/* Dados do array map são enviados para o componente e enviando para ServiceCard */}
              <ServiceCard
                icon={servico.icon}
                title={servico.title}
                description={servico.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services