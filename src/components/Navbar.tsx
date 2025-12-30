import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <img
                        src="https://www.webfx.com/wp-content/uploads/2023/10/webfx-logo.svg"
                        alt="WebFX Logo"
                        height="40"
                    />
                </Link>

                <nav className="nav-menu">
                    <ul className="nav-links">
                        <li><Link to="/services">SEO & Lead Generation</Link></li>
                        <li><Link to="/revenue">Revenue Marketing</Link></li>
                        <li><Link to="/technology">Technology</Link></li>
                        <li><Link to="/team">Who We Are</Link></li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <a href="tel:888-601-5359" className="nav-phone">888-601-5359</a>
                    <Link to="/proposal" className="btn btn-primary nav-cta">Get a Proposal</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
