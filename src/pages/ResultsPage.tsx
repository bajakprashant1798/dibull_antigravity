import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer } from '../components/Animations';
import { motion } from 'framer-motion';
import './ResultsPage.css';

const caseStudies = [
    {
        client: "TechFlow Systems",
        metric: "+240%",
        label: "Organic Traffic",
        desc: "We restructured their site architecture and implemented a content cluster strategy.",
        tags: ["SEO", "Content"]
    },
    {
        client: "Luxury Home Co.",
        metric: "-45%",
        label: "Cost Per Lead",
        desc: "Optimized Google Ads bidding strategies and redesigned landing pages for conversion.",
        tags: ["PPC", "Web Design"]
    },
    {
        client: "SaaSify",
        metric: "$2.4M",
        label: "Pipeline Generated",
        desc: "Integrated LinkedIn Ads with HubSpot for a full-funnel ABM strategy.",
        tags: ["Social Ads", "B2B"]
    },
    {
        client: "GreenEnergy",
        metric: "+150%",
        label: "Qualified Leads",
        desc: "Complete rebrand and website overhaul focused on user journey optimization.",
        tags: ["Web Design", "SEO"]
    }
];

const ResultsPage = () => {
    return (
        <div className="page-wrapper">
            <div className="section page-header">
                <div className="container">
                    <FadeIn>
                        <h1 className="page-title">Real Results. <span className="text-gradient">Real Revenue.</span></h1>
                        <p className="page-subtitle">
                            We don't hide behind vanity metrics. Here is the impact we've made for our partners.
                        </p>
                    </FadeIn>
                </div>
            </div>

            <div className="container">
                <StaggerContainer className="results-grid">
                    {caseStudies.map((study, index) => (
                        <motion.div key={index} variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}>
                            <div className="glass-card result-card">
                                <div className="result-metric">{study.metric}</div>
                                <div className="result-label">{study.label}</div>
                                <h3 className="result-client">{study.client}</h3>
                                <p className="result-desc">{study.desc}</p>
                                <div className="result-tags">
                                    {study.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>

            <div className="section cta-section-results">
                <div className="container center-text">
                    <FadeIn>
                        <h2>Ready to be our next success story?</h2>
                        <Link to="/proposal" className="btn btn-primary btn-lg mt-4">Start Your Growth</Link>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
