import { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [activeSegment, setActiveSegment] = useState('acquisition');

    const content = {
        acquisition: {
            title: "Stay Visible & Drive Traffic",
            desc: "Get your brand in front of ready-to-buy customers in Search and AI."
        },
        pipeline: {
            title: "Accelerate Your Pipeline",
            desc: "Turn traffic into qualified leads with conversion rate optimization."
        },
        revenue: {
            title: "Close More Revenue",
            desc: "Connect marketing data to sales outcomes to prove ROI."
        },
        ai: {
            title: "Make Smarter Decisions",
            desc: "Leverage AI to predict trends and optimize ad spend automatically."
        }
    };

    return (
        <section className="flywheel-hero">
            <div className="container flywheel-container">
                <div className="flywheel-text-content">
                    <h1 className="flywheel-main-headline">
                        Your Revenue Growth Partner in the <span className="highlight">Note AI Era</span>
                    </h1>

                    <div className="dynamic-content-box">
                        <div className={`dynamic-text fade-in`}>
                            <h3>{content[activeSegment as keyof typeof content].title}</h3>
                            <p>{content[activeSegment as keyof typeof content].desc}</p>
                        </div>
                    </div>

                    <div className="flywheel-cta-group">
                        <form className="mini-proposal-form">
                            <input type="text" placeholder="Enter your website" />
                            <button type="button" className="btn btn-primary">Get My Free Proposal</button>
                        </form>
                    </div>
                </div>

                <div className="flywheel-graphic-wrapper">
                    <div className="flywheel-circle">
                        {/* Center Core */}
                        <div className="flywheel-center">
                            <span className="revenue-engine-label">Dibull Revenue Engine</span>
                            <span className="growth-stat">15% Higher Lead Growth</span>
                            <button className="play-btn">▶</button>
                        </div>

                        {/* Segments - Simplified CSS representation */}
                        <div
                            className={`segment segment-acquisition ${activeSegment === 'acquisition' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveSegment('acquisition')}
                        >
                            <span className="segment-label">Acquisition</span>
                        </div>
                        <div
                            className={`segment segment-pipeline ${activeSegment === 'pipeline' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveSegment('pipeline')}
                        >
                            <span className="segment-label">Pipeline</span>
                        </div>
                        <div
                            className={`segment segment-revenue ${activeSegment === 'revenue' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveSegment('revenue')}
                        >
                            <span className="segment-label">Revenue</span>
                        </div>
                        <div
                            className={`segment segment-ai ${activeSegment === 'ai' ? 'active' : ''}`}
                            onMouseEnter={() => setActiveSegment('ai')}
                        >
                            <span className="segment-label">AI Intelligence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
