import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta-section section">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-content">
                        <h2>Ready to Grow Your Revenue?</h2>
                        <p>Speak with an expert to see how we can help you achieve your goals.</p>
                    </div>
                    <div className="cta-actions">
                        <a href="#" className="btn btn-primary cta-btn">Get a Proposal</a>
                        <span className="cta-or">OR</span>
                        <a href="tel:888-601-5359" className="cta-phone">888-601-5359</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
