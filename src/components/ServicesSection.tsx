import './ServicesSection.css';

const services = [
    {
        title: "SEO & Lead Gen",
        desc: "Drive qualified traffic and revenue",
        icon: "https://www.webfx.com/wp-content/themes/fx/assets/img/icons/icon-seo.svg"
    },
    {
        title: "PPC Management",
        desc: "Immediate visibility and ROI",
        icon: "https://www.webfx.com/wp-content/themes/fx/assets/img/icons/icon-ppc.svg"
    },
    {
        title: "Content Marketing",
        desc: "Engage and convert your audience",
        icon: "https://www.webfx.com/wp-content/themes/fx/assets/img/icons/icon-content.svg"
    },
    {
        title: "Web Design",
        desc: "Custom sites built for performance",
        icon: "https://www.webfx.com/wp-content/themes/fx/assets/img/icons/icon-design.svg"
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section section">
            <div className="container">
                <div className="services-header text-center">
                    <h2>Digital Marketing Services</h2>
                    <p>From SEO to web design, we offer full-service solutions to grow your business.</p>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <img src={s.icon} alt={s.title} className="service-icon" width="60" />
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <a href="#" className="service-link">Learn More &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
