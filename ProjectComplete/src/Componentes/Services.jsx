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

function Services() {
  // Array de serviços — cada objeto contém os dados que serão
  // passados via props para o componente ServiceCard
  const servicos = [
    {
      icon: <Atom size={34} />,
      title: 'Simulação Molecular',
      description:
        'Modelagem computacional avançada para análise de estruturas químicas e moleculares complexas.'
    },
    {
      icon: <Brain size={34} />,
      title: 'IA Preditiva',
      description:
        'Algoritmos inteligentes para previsão de reações químicas e propriedades moleculares.'
    },
    {
      icon: <Database size={34} />,
      title: 'Banco de Dados Científico',
      description:
        'Armazenamento seguro e organizado de simulações e estruturas moleculares.'
    },
    {
      icon: <Cpu size={34} />,
      title: 'Cloud Computing',
      description:
        'Processamento de cálculos quânticos em alta performance com infraestrutura em nuvem.'
    },
    {
      icon: <Zap size={34} />,
      title: 'Análise Espectral',
      description:
        'Ferramentas avançadas para interpretação e visualização de dados espectroscópicos.'
    }
  ]

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
         *   Dados passados via props (conteúdo dinâmico) */}
        <div className="row g-4">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4"
            >
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