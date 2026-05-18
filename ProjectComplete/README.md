# QuantumFlow — Painel de Serviços Digitais

**Dupla:** Matheus Comastri & Thiago Goulart

---

## 📋 Descrição do Projeto

**QuantumFlow** é uma plataforma moderna de simulações moleculares com Inteligência Artificial, desenvolvida como parte da atividade acadêmica de **React com Vite**, aplicando conceitos de componentização, Design System e responsividade.

O projeto representa um **Painel de Serviços Digitais** focado em pesquisa científica computacional, oferecendo:

- Simulação molecular com IA preditiva
- Banco de dados científico seguro
- Cloud computing para cálculos quânticos
- Análise espectral avançada

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| **React 19** | Biblioteca principal para construção da interface |
| **Vite** | Ferramenta de build e desenvolvimento |
| **Bootstrap 5** | Design System — grid, layout e componentes visuais |
| **Lucide React** | Biblioteca de ícones moderna |
| **CSS3** | Estilização complementar e personalização visual |

**Trilha escolhida:** Trilha 1 — Bootstrap + React

---

## 🧩 Estrutura de Componentes

```
src/
├── main.jsx                 # Ponto de entrada
├── App.jsx                  # Componente raiz (orquestrador)
├── Componentes/
│   ├── Header.jsx           # Navegação principal
│   ├── Hero.jsx             # Banner de destaque (Hero Section)
│   ├── Services.jsx         # Grade de serviços (usa dados dinâmicos via props)
│   ├── ServiceCard.jsx      # Card de serviço reutilizável (recebe props)
│   ├── Highlights.jsx       # Seção de diferenciais
│   ├── Metrics.jsx          # Indicadores e métricas
│   └── Footer.jsx           # Rodapé institucional
├── Styles/
│   └── Global.css           # Estilos personalizados (complementar ao Bootstrap)
├── Data/
│   └── Services.js          # Dados dos serviços (exportados)
└── assets/
    ├── hero.png
    ├── react.svg
    └── vite.svg
```

### Fluxo de dados

```
App.jsx
 ├── Header        (estático)
 ├── Hero          (estático)
 ├── Services      (dados internos → ServiceCard via props)
 │    └── ServiceCard  ← recebe { icon, title, description } via props
 ├── Highlights    (dados internos)
 ├── Metrics       (dados internos)
 └── Footer        (estático)
```

---

## 🎨 Design System — Decisões de Design

- **Paleta escura (dark mode)** com gradientes roxos/azuis para transmitir tecnologia e inovação
- **Componentes Bootstrap** utilizados para grid (`row`, `col`), botões, e espaçamento (`g-4`, `ms-2`)
- **Personalização visual** via CSS customizado (Global.css) com:
  - Glassmorphism no Header (backdrop-filter)
  - Cards com hover animado
  - Gradientes nos botões primários
  - Ícones com efeitos de glow e escala
- **Tipografia**: sistema Inter (sans-serif) com pesos variados para hierarquia clara
- **Responsividade**: 4 breakpoints (lg, md, sm, xs) com ajustes de layout e elementos

---

## 📱 Funcionalidades

- ✅ Header sticky com navegação e botões de ação
- ✅ Hero Section com chamada para ação e indicadores
- ✅ 5 cards de serviços com dados passados via props
- ✅ Seção de diferenciais (4 vantagens competitivas)
- ✅ Métricas/indicadores de resultados
- ✅ Footer com informações institucionais e autorais
- ✅ Responsivo para desktop, tablet e mobile
- ✅ Ícones Lucide React em toda a interface
- ✅ Estilização complementar ao Bootstrap

---

## ⚙️ Instruções de Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm 9+ instalado

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/React_Panel
cd ProjectComplete

# 2. Instale as dependências
npm install

# 3. Execute em modo de desenvolvimento
npm run dev

# 4. Acesse no navegador
http://localhost:5173
```

### Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa verificação de lint |

---

## ✅ Critérios Atendidos

| Critério | Status |
|---|---|
| Estrutura React + Vite | ✅ |
| Componentes próprios (Header, Hero, ServiceCard, Footer + extra) | ✅ |
| Dados por props (ServiceCard) | ✅ |
| Design System (Bootstrap 5) | ✅ |
| Ícones (Lucide React) | ✅ |
| Responsividade | ✅ |
| Estilização complementar (Global.css) | ✅ |
| Header com navegação | ✅ |
| Banner principal com CTA | ✅ |
| Mínimo 4 cards de serviços | ✅ (5 cards) |
| Seção de destaque (diferenciais) | ✅ |
| Seção de métricas | ✅ |
| Footer com autores | ✅ |
| README completo | ✅ |

---

> Projeto desenvolvido para fins acadêmicos — Disciplina de Desenvolvimento Front-End com React