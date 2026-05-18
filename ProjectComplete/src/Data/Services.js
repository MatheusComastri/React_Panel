/* ============================================================
 * Services.js — Dados dos serviços da plataforma
 *
 * Este arquivo exporta os dados que alimentam os cards
 * de serviço da aplicação. Os componentes consomem esses
 * dados via props (conteúdo dinâmico).
 *
 * Ícones: Atom, Brain, Database, Cpu, Zap (Lucide React)
 * ============================================================ */

import { Atom, Brain, Database, Cpu, Zap } from 'lucide-react'

/**
 * Array de objetos representando cada serviço oferecido
 * pela plataforma QuantumFlow.
 *
 * @property {JSX.Element} icon        - Ícone Lucide React do serviço
 * @property {string}      title       - Nome do serviço
 * @property {string}      description - Descrição detalhada do recurso
 */
export const services = [
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
      'Armazenamento seguro e organizado de simulações e estruturas moleculares acessíveis globalmente.'
  },
  {
    icon: <Cpu size={34} />,
    title: 'Cloud Computing',
    description:
      'Processamento de cálculos quânticos em alta performance com infraestrutura escalável em nuvem.'
  },
  {
    icon: <Zap size={34} />,
    title: 'Análise Espectral',
    description:
      'Ferramentas avançadas para interpretação e visualização de dados espectroscópicos em tempo real.'
  }
]