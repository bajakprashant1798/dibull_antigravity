import './Testimonials.css';

const testimonials = [
    {
        quote: "Dibull completely transformed our digital presence. Traffic increased by 300% in just 6 months.",
        author: "Sarah J.",
        role: "CMO, TechFlow",
        result: "+300% Traffic"
    },
    {
        quote: "The ROI we've seen with Dibull is unmatched. Their AI-driven approach actually works.",
        author: "Michael R.",
        role: "Founder, ScaleUp",
        result: "10x ROI"
    },
    {
        quote: "Professional, data-focused, and incredibly creative. They are partners, not just vendors.",
        author: "Jessica L.",
        role: "Director, FutureCorp",
        result: "-40% CPL"
    }
];

const Testimonials = () => {
    return (
        <section id="portfolio" className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Client <span className="text-gradient">Success</span></h2>
                    <p className="section-subtitle">Real results for real businesses.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="glass-card testimonial-card">
                            <div className="testimonial-result text-gradient">{item.result}</div>
                            <p className="testimonial-quote">"{item.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.author[0]}</div>
                                <div>
                                    <div className="author-name">{item.author}</div>
                                    <div className="author-role">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
