import './TechSection.css';

const TechSection = () => {
    return (
        <section className="tech-section section">
            <div className="container tech-container">
                <div className="tech-content">
                    <h2 className="tech-title">
                        Technology That Drives Growth®
                    </h2>
                    <p className="tech-desc">
                        Our proprietary marketing platform, Dibull AI™, tracks your leads, calls, and revenue—so you know exactly what's working.
                    </p>
                    <ul className="tech-features">
                        <li>Real-time ROI Dashboard</li>
                        <li>Competitor Intelligence</li>
                        <li>Lead Tracking & Attribution</li>
                        <li>AI-Powered Insights</li>
                    </ul>
                    <a href="#" className="btn btn-primary tech-btn">Explore Our Platform</a>
                </div>

                <div className="tech-visual">
                    {/* Placeholder for platform screenshot */}
                    <div className="platform-mockup">
                        <div className="mockup-header">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <div className="mockup-body">
                            <div className="graph-placeholder"></div>
                            <div className="metrics-row">
                                <div className="metric-box"></div>
                                <div className="metric-box"></div>
                                <div className="metric-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSection;
