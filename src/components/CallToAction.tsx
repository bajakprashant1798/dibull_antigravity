import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section id="contact" className="section cta-section">
            <div className="container">
                <div className="cta-content glass-card">
                    <h2 className="cta-title">
                        Ready to <span className="text-gradient">Dominate Your Market?</span>
                    </h2>
                    <p className="cta-subtitle">
                        Join the agency that treats your budget like it’s their own. Get a free proposal and ROI projection today.
                    </p>
                    <div className="cta-actions">
                        <Link to="/proposal" className="btn btn-primary btn-lg">Get My Free Proposal</Link>
                        <Link to="/proposal" className="btn btn-outline btn-lg">Speak with an Expert</Link>
                    </div>
                    <p className="cta-note">No commitment required. 100% free consultation.</p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
