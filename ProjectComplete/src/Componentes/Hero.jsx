import { ArrowRight, FlaskConical } from 'lucide-react'

function Hero() {
    return(
        <Section className="hero">
            <div className="hero-left">
                <div className="hero-badge">
                    <FlaskConical size ={18}/>
                    <span>IA Científica avaçada</span>
                </div>

                <h1>Simulações Moleculares com Inteligência artificial</h1>

                <p>Plataforma moderna para cálculos quânticos, análise espectral e modelagem computacional em nuvem</p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Explorar Plataforma
                        <ArrowRight size={18}/>
                    </button>

                    <button className="secondary-btn">
                        Ver demonstração
                    </button>
                </div>
            </div>



            <div className="hero-right">
                <div className="hero-card large-card">
                    <h2>98%</h2>
                    <p>Precisão Preditiva</p>
                </div>

                <div className="hero-card">
                    <h2>24/7</h2>
                    <p>cloud Processing</p>
                </div>
            </div>
        </Section>
    )
}