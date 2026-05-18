/* ============================================================
 * ServiceCard.jsx — Card de serviço reutilizável
 *
 * Este componente RECEBE DADOS VIA PROPS (conteúdo dinâmico —
 * requisito obrigatório do projeto).
 *
 * Props:
 *   - icon       (JSX)     → Ícone Lucide React do serviço
 *   - title      (string)  → Nome do serviço/recurso
 *   - description (string) → Descrição do serviço
 *
 * Uso de Bootstrap: card, botão, classes de espaçamento
 * Ícone: ArrowRight (Lucide React) no botão de ação
 * ============================================================ */

import { ArrowRight } from 'lucide-react'

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      {/* Círculo com ícone do serviço */}
      <div className="service-icon">
        {icon}
      </div>

      {/* Título do serviço */}
      <h3 className="service-card-title">{title}</h3>

      {/* Descrição do serviço */}
      <p className="service-card-desc">{description}</p>

      {/* Botão de ação com seta */}
      <button className="service-card-btn">
        Explorar
        <ArrowRight size={18} className="ms-1" />
      </button>
    </div>
  )
}

export default ServiceCard