import { FadeIn } from '../components/Animations';
import './TechnologiesPage.css';

const TechnologiesPage = () => {
    return (
        <div className="page-wrapper">
            <div className="section page-header">
                <div className="container">
                    <FadeIn>
                        <h1 className="page-title">Powered by <span className="text-gradient">Dibull AI™</span></h1>
                        <p className="page-subtitle">
                            The marketing industry's first revenue-focused artificial intelligence platform.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="section tech-details">
                <div className="container">
                    <FadeIn delay={0.2} className="tech-hero-img-container">
                        {/* Abstract representation of AI - replace with real image locally if desired or generated */}
                        <div className="tech-viz-placeholder glass-card">
                            <div className="viz-node node-1"></div>
                            <div className="viz-node node-2"></div>
                            <div className="viz-node node-3"></div>
                            <div className="viz-line line-1"></div>
                        </div>
                    </FadeIn>

                    <div className="tech-features-grid">
                        <FadeIn delay={0.3} className="glass-card feature-card">
                            <h3>Predictive ROI</h3>
                            <p>Our algorithms analyze 1B+ data points to predict campaign outcomes before we spend a dollar.</p>
                        </FadeIn>
                        <FadeIn delay={0.4} className="glass-card feature-card">
                            <h3>Competitor Intelligence</h3>
                            <p>See exactly what your competitors are doing, what they are spending, and how to beat them.</p>
                        </FadeIn>
                        <FadeIn delay={0.5} className="glass-card feature-card">
                            <h3>Automated Bidding</h3>
                            <p>Real-time bid adjustments 24/7 ensure you never overpay for a lead again.</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesPage;
