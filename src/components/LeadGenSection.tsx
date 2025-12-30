import './LeadGenSection.css';

const LeadGenSection = () => {
    return (
        <section className="hero-section lead-gen-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <h2 className="hero-headline">
                        Digital Marketing That Drives <span className="highlight">Revenue®</span>
                    </h2>
                    <p className="hero-subhead">
                        Move from marketing that reports clicks to marketing that reports revenue.
                    </p>

                    <div className="hero-form-wrapper">
                        <form className="hero-proposal-form">
                            <input type="text" placeholder="Enter your website" className="hero-input" />
                            <button type="button" className="btn btn-primary hero-btn">Get My Free Proposal</button>
                        </form>
                    </div>

                    <div className="hero-trust-bar">
                        <span>Trusted by:</span>
                        <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-google-premier.png" alt="Google Partner" height="30" />
                        <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/footer/partner-meta.png" alt="Meta Partner" height="30" />
                    </div>
                </div>

                <div className="hero-visual">
                    <img
                        src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/funnel-slider-module/funnel-after.webp"
                        alt="Revenue Funnel"
                        className="hero-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default LeadGenSection;
