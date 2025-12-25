import './Technologies.css';

const Technologies = () => {
    return (
        <section id="technologies" className="section tech-section">
            <div className="container">
                <div className="tech-container">
                    <div className="tech-content">
                        <h2 className="tech-title">
                            Powered by <span className="text-gradient">Dibull AI™</span>
                        </h2>
                        <p className="tech-desc">
                            Don't guess. Know. Our proprietary AI engine analyzes millions of data points to predict the most profitable moves for your campaigns before we even spend a dollar.
                        </p>
                        <ul className="tech-features">
                            <li>
                                <span className="check">✓</span>
                                <span>Predictive ROI Modeling</span>
                            </li>
                            <li>
                                <span className="check">✓</span>
                                <span>Competitor Intelligence</span>
                            </li>
                            <li>
                                <span className="check">✓</span>
                                <span>Automated Bid Management</span>
                            </li>
                            <li>
                                <span className="check">✓</span>
                                <span>Real-time Revenue Tracking</span>
                            </li>
                        </ul>
                        <button className="btn btn-primary">See How It Works</button>
                    </div>

                    <div className="tech-visual">
                        <div className="glass-card tech-card-main">
                            <div className="tech-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="tech-graph">
                                {/* CSS based graph bars */}
                                <div className="graph-bar" style={{ height: '40%' }}></div>
                                <div className="graph-bar" style={{ height: '60%' }}></div>
                                <div className="graph-bar" style={{ height: '35%' }}></div>
                                <div className="graph-bar" style={{ height: '75%' }}></div>
                                <div className="graph-bar" style={{ height: '50%' }}></div>
                                <div className="graph-bar active" style={{ height: '90%' }}></div>
                            </div>
                            <div className="tech-stat">
                                <span>Projected Revenue</span>
                                <span className="tech-value">+142%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
