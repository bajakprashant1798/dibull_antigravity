import './StatsBar.css';

const stats = [
    { label: "Revenue Driven", value: "$3B+" },
    { label: "Leads Generated", value: "7.8M+" },
    { label: "Client Mentions", value: "8M+" },
    { label: "Experts", value: "500+" }
];

const StatsBar = () => {
    return (
        <div className="stats-bar">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-value text-gradient">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
