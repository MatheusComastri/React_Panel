import { Atom } from 'lucide-react'

function Footer()   {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <Atom size={28}/>
                <h2>QuantumFlow</h2>
            </div>

            <p>Plataforma moderna para IA científica e simulações moleculares</p>
        
            <span>
                React • Vite • Lucide React
            </span>
        </footer>
    )
}

export default Footer

