import {Brain, Atom, Database, Cpu } from 'lucide-react'

import ServiceCard from './ServiceCard'

function Services()  {
    return(
        <section className="services-section">
            <div className="sectin-tittle">
                <span>Serviços</span>

                <h1>Recursos Inteligentes para pesquisa Científica</h1>
            </div>

            <div className="services-grid">
                <ServiceCard
                    icon={<Atom size={34}/>}
                    title="Simulação Molecular"
                    description="Modelagem computacional avaçada para análise estruturas químicas"/>

                <ServiceCard
                    icon={<Brain size={34}/>}
                    title="IA Predetiva"
                    description="Armazenamento seguro de simulações e estruturas moleculares."/>
            
                <ServiceCard
                    icon={<Cpu size={34}/>}
                    title="Cloud Computing"
                    description="Processamento de cálculos quânticos em alta perfomances."/>
            </div>
        </section>
    )
}

export default Services