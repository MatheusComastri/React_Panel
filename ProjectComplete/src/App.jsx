/* ============================================================
 * App.jsx — Componente raiz da aplicação QuantumFlow
 *
 * Orquestra todos os componentes da interface:
 *   Header    → Navegação principal
 *   Hero      → Banner de destaque com CTA
 *   Services  → Grade de cards de serviços (mín. 4)
 *   Highlights→ Seção de diferenciais / vantagens
 *   Metrics   → Indicadores e métricas da plataforma
 *   Footer    → Rodapé com informações institucionais
 *
 * Trilha escolhida: Trilha 1 – Bootstrap + React
 * Ícones: Lucide React
 * ============================================================ */

import Header from './Componentes/Header'
import Hero from './Componentes/Hero'
import Services from './Componentes/Services'
import Highlights from './Componentes/Highlights'
import Metrics from './Componentes/Metrics'
import Footer from './Componentes/Footer'

// Estilos globais personalizados (complementares ao Bootstrap)
import './Styles/Global.css'

function App() {
  return (
    <>
      {/* ===== HEADER =====
       * Menu de navegação com logo, links e botões de ação */}
      <Header />

      <main>
        {/* ===== HERO / BANNER =====
         * Área de destaque com título, subtítulo e chamada para ação */}
        <Hero />

        {/* ===== SEVIÇOS =====
         * Grade responsiva com cards de serviços/recursos da plataforma.
         * Os dados são passados via props (conteúdo dinâmico). */}
        <Services />

        {/* ===== DIFERENCIAIS =====
         * Seção de destaque com vantagens competitivas da solução.
         * Reforça a proposta de valor da plataforma. */}
        <Highlights />

        {/* ===== MÉTRICAS =====
         * Indicadores numéricos que demonstram resultados e credibilidade. */}
        <Metrics />
      </main>

      {/* ===== FOOTER =====
       * Rodapé com informações da aplicação, tecnologias e autores. */}
      <Footer />
    </>
  )
}

export default App