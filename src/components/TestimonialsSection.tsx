import './TestimonialsSection.css';

const testimonials = [
    {
        quote: "Dibull has been an integral part of our marketing success. We have seen a significant increase in leads and revenue since partnering with them.",
        author: "Marketing Director",
        company: "Manufacturing Co.",
        stars: 5
    },
    {
        quote: "Their team is knowledgeable, responsive, and truly cares about our success. I would recommend them to anyone looking to grow their business.",
        author: "CEO",
        company: "Tech Startups Inc.",
        stars: 5
    },
    {
        quote: "The results speak for themselves. +200% organic traffic in just 6 months. They know what they are doing.",
        author: "Founder",
        company: "Service Pros",
        stars: 5
    }
];

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Don't Just Take Our Word For It</h2>
                    <p>Read what our clients have to say about their experience with Dibull.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">{'★'.repeat(t.stars)}</div>
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="testimonial-author">
                                <strong>{t.author}</strong>
                                <span>, {t.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
