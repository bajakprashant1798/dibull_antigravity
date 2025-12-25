import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css';

interface ServicePageProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

const ServicePage = ({ title, subtitle, children }: ServicePageProps) => {
    return (
        <div className="service-page">
            <div className="section service-header">
                <div className="container">
                    <h1 className="service-hero-title">{title}</h1>
                    <p className="service-hero-subtitle">{subtitle}</p>
                    <Link to="/proposal" className="btn btn-primary">Get a free proposal</Link>
                </div>
            </div>

            <div className="container service-container">
                <div className="service-content">
                    {children}
                </div>

                <aside className="service-sidebar">
                    <div className="glass-card sidebar-nav">
                        <h4 className="sidebar-title">Our Services</h4>
                        <ul className="sidebar-links">
                            <li><Link to="/services/seo">SEO Services</Link></li>
                            <li><Link to="/services/ppc">PPC Management</Link></li>
                            <li><Link to="/services/social">Social Media</Link></li>
                            <li><Link to="/services/content">Content Marketing</Link></li>
                            <li><Link to="/services/design">Web Design</Link></li>
                        </ul>
                    </div>

                    <div className="glass-card sidebar-cta">
                        <h4>Ready to grow?</h4>
                        <p>Speak with an expert strategist today.</p>
                        <Link to="/proposal" className="btn btn-primary btn-full">Get Proposal</Link>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ServicePage;
