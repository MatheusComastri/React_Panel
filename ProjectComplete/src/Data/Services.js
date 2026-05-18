// Importa os ícones da biblioteca Lucide React
// Cada ícone será usado em um card de serviço
import { Atom, Brain, Cpu, Database } from 'lucide-react'


// Exporta um array chamado "services"
// Esse array contém os dados dos serviços da plataforma
export const services = [

  // Primeiro objeto do array
  // Representa um serviço da aplicação
  {
    // Ícone do serviço
    // Atom representa química/simulações moleculares
    icon: <Atom size={34} />,

    // Título do card
    title: 'Simulação Molecular',

    // Descrição do serviço
    description:
      'Modelagem computacional avançada para análise estrutural.'
  },



  // Segundo serviço
  {
    // Ícone relacionado à inteligência artificial
    icon: <Brain size={34} />,

    // Nome do serviço
    title: 'IA Preditiva',

    // Descrição exibida no card
    description:
      'Algoritmos inteligentes para previsão de reações químicas.'
  },



  // Terceiro serviço
  {
    // Ícone relacionado a banco de dados
    icon: <Database size={34} />,

    // Título do serviço
    title: 'Banco de Dados Científico',

    // Explicação do recurso
    description:
      'Armazenamento seguro de simulações e estruturas moleculares.'
  },



  // Quarto serviço
  {
    // Ícone relacionado a processamento computacional
    icon: <Cpu size={34} />,

    // Nome do recurso
    title: 'Cloud Computing',

    // Texto descritivo
    description:
      'Processamento de cálculos quânticos em alta performance.'
  }
]