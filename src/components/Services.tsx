import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        title: "SEO Optimization",
        description: "Rank higher and drive qualified traffic with our data-driven SEO strategies.",
        icon: "🚀",
        link: "/services/seo"
    },
    {
        title: "PPC Management",
        description: "Maximize ROI with targeted paid advertising campaigns across Google and Social.",
        icon: "💎",
        link: "/services/ppc"
    },
    {
        title: "Content Marketing",
        description: "Engage your audience with compelling content that builds authority and trust.",
        icon: "📝",
        link: "/services/content"
    },
    {
        title: "Social Media",
        description: "Build a community and increase brand awareness on platforms that matter.",
        icon: "⚡",
        link: "/services/social"
    },
    {
        title: "Web Design",
        description: "Convert visitors into customers with high-performance, premium web experiences.",
        icon: "🎨",
        link: "/services/design"
    },
    {
        title: "Lead Generation",
        description: "Fill your pipeline with high-quality leads ready to convert.",
        icon: "🎯",
        link: "/services/lead-gen"
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions designed to scale your business.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="glass-card service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <Link to={service.link} className="service-link">Learn More &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
