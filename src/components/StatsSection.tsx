import './StatsSection.css';

const stats = [
    { value: "$10B+", label: "Revenue Driven for Clients" },
    { value: "14.9M", label: "Qualified Leads Generated" },
    { value: "500+", label: "Subject Matter Experts" },
    { value: "1.6K", label: "Client Testimonials" }
];

const StatsSection = () => {
    return (
        <section className="stats-section section">
            <div className="container">
                <div className="stats-header text-center">
                    <h2>The Digital Marketing Agency That <span className="highlight">Drives Revenue®</span></h2>
                    <p>We've driven over $10 billion in revenue for our clients.</p>
                </div>

                <div className="stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} className="stat-card">
                            <h3 className="stat-value">{s.value}</h3>
                            <p className="stat-label">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
