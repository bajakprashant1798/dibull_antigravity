import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Dibull<span className="dot">.</span></h2>
                        <p className="footer-desc">
                            Revenue-driven digital marketing agency. We help businesses grow through data, design, and technology.
                        </p>
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-heading">Services</h4>
                        <ul className="footer-list">
                            <li><Link to="/services/seo">SEO Optimization</Link></li>
                            <li><Link to="/services/ppc">PPC Management</Link></li>
                            <li><Link to="/services/content">Content Marketing</Link></li>
                            <li><Link to="/services/social">Social Media</Link></li>
                            <li><Link to="/services/design">Web Design</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-list">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/proposal">Careers</Link></li>
                            <li><Link to="/results">Case Studies</Link></li>
                            <li><Link to="/about">Blog</Link></li>
                            <li><Link to="/proposal">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-cta">
                        <h4 className="footer-heading">Ready to grow?</h4>
                        <p className="footer-cta-text">Speak with a strategist today.</p>
                        <Link to="/proposal" className="btn btn-primary">Get a Proposal</Link>
                        <p className="footer-phone">1-888-DIBULL-0</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dibull. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
