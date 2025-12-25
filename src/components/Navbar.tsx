import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <header className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    Dibull<span className="dot">.</span>
                </Link>

                <nav className="nav-links">
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/technologies" className="nav-link">Technologies</Link>
                    <Link to="/results" className="nav-link">Results</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </nav>

                <div className="nav-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <Link to="/proposal" className="btn btn-primary btn-sm">Get Proposal</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
