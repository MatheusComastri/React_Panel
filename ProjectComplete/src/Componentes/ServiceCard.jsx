import { ArrowRight } from "lucide-react";

function ServiceCard({ icon, title, description}) {
    return (
        <div className="service-card">
            <div className="service-icon">
                {icon}
            </div>

            <h2>{title}</h2>

            <p>{description}</p>

            <button>
                Explorar
                <ArrowRight size={18}/>
            </button>
        </div>
    )
}

export default ServiceCard