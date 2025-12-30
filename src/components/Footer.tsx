import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/seo">SEO Services</Link></li>
                            <li><Link to="/ppc">PPC Management</Link></li>
                            <li><Link to="/content">Content Marketing</Link></li>
                            <li><Link to="/social">Social Media</Link></li>
                            <li><Link to="/web-design">Web Design</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Knowledgebase</h4>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/guides">Guides</Link></li>
                            <li><Link to="/tools">Marketing Tools</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column footer-brand-col">
                        <h2 className="footer-logo">Dibull</h2>
                        <p>Ready to speak with a marketing expert? Give us a ring</p>
                        <a href="tel:888-601-5359" className="footer-phone">888-601-5359</a>
                        <div className="footer-socials">
                            <a href="#" className="social-icon">TW</a>
                            <a href="#" className="social-icon">IG</a>
                            <a href="#" className="social-icon">LI</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dibull. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
