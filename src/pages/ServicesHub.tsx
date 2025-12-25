import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer } from '../components/Animations';
import './ServicesHub.css';

const servicesList = [
    {
        title: "SEO Optimization",
        desc: "Dominate search results and drive organic revenue.",
        icon: "🚀",
        link: "/services/seo"
    },
    {
        title: "PPC Management",
        desc: "High-intent traffic that converts immediately.",
        icon: "💎",
        link: "/services/ppc"
    },
    {
        title: "Social Media Advertising",
        desc: "Scale your brand on Facebook, Instagram, and LinkedIn.",
        icon: "⚡",
        link: "/services/social"
    },
    {
        title: "Content Marketing",
        desc: "Authority-building content that earns trust and backlinks.",
        icon: "📝",
        link: "/services/content"
    },
    {
        title: "Web Design & Dev",
        desc: "Premium, high-performance websites built for conversion.",
        icon: "🎨",
        link: "/services/design"
    },
    {
        title: "Email Marketing",
        desc: "Nurture leads and maximize customer lifetime value.",
        icon: "📧",
        link: "/services/email"
    },
    {
        title: "Conversion Optimization",
        desc: "Turn more visitors into customers with data-driven testing.",
        icon: "📈",
        link: "/services/cro"
    },
    {
        title: "Amazon Marketing",
        desc: "Scale your eCommerce sales on the world's largest marketplace.",
        icon: "🛒",
        link: "/services/amazon"
    },
    {
        title: "Video Production",
        desc: "Captivate your audience with studio-quality video assets.",
        icon: "🎥",
        link: "/services/video"
    }
];

const ServicesHub = () => {
    return (
        <div className="services-hub-page">
            <div className="hub-hero">
                <div className="container">
                    <FadeIn>
                        <h1 className="hub-title">Digital Marketing Services</h1>
                        <p className="hub-subtitle">
                            Everything you need to grow your business, all in one place.
                            We combine data, creativity, and technology to drive revenue.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container section-spacing">
                <StaggerContainer className="services-hub-grid">
                    {servicesList.map((service, index) => (
                        <motion.div key={index} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                            <Link to={service.link} className="glass-card hub-card">
                                <div className="hub-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <span className="hub-link-text">Explore Service &rarr;</span>
                            </Link>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>

            <div className="cta-banner section">
                <div className="container">
                    <FadeIn className="glass-card cta-content-hub">
                        <h2>Not sure what you need?</h2>
                        <p>Our strategists can audit your current presence and recommend the perfect mix.</p>
                        <Link to="/proposal" className="btn btn-primary">Get a Free Audit</Link>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

import { motion } from 'framer-motion';
export default ServicesHub;
