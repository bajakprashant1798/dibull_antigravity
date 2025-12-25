import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="gradient-blob blob-1"></div>
                <div className="gradient-blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    Digital Marketing That <br />
                    <span className="text-gradient">Drives Revenue.</span>
                </h1>

                <p className="hero-subtitle">
                    Stop reporting clicks. Start reporting revenue. We combine proprietary technology with expert strategy to build your brand and your bottom line.
                </p>

                <div className="hero-actions">
                    <Link to="/proposal" className="btn btn-primary">Send Me a Proposal</Link>
                    <Link to="/results" className="btn btn-outline">View Our Work</Link>
                </div>

                <div className="hero-trust">
                    <p className="trust-label">Trusted by industry leaders</p>
                    <div className="trust-logos">
                        {/* Simple text placeholders for logos for now, or could use basic svgs */}
                        <span className="trust-logo">GOOGL</span>
                        <span className="trust-logo">AMZN</span>
                        <span className="trust-logo">MSFT</span>
                        <span className="trust-logo">META</span>
                        <span className="trust-logo">TSLA</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
