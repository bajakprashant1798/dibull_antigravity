import ServicePage from '../layouts/ServicePage';

const PpcPage = () => {
    return (
        <ServicePage
            title="PPC Management Services"
            subtitle="Maximize your ROI with targeted paid advertising campaigns across Google, Facebook, and LinkedIn."
        >
            <h2>Instant Traffic, Measurable Results.</h2>
            <p>
                Pay-Per-Click (PPC) advertising gives you the opportunity to appear at the top of search results immediately.
                However, without expert management, it can quickly become a money pit.
            </p>

            <h3>Our PPC Capabilities</h3>
            <ul>
                <li><strong>Google Ads:</strong> Capture intent exactly when customers are searching.</li>
                <li><strong>Facebook/Instagram Ads:</strong> Build brand awareness and retarget visitors.</li>
                <li><strong>LinkedIn Ads:</strong> Reach decision-makers in B2B markets.</li>
                <li><strong>Shopping Feeds:</strong> showcase your products directly in search results.</li>
            </ul>

            <h2>The Dibull Difference</h2>
            <p>
                Most agencies set it and forget it. We don't. Our team checks your accounts daily, optimizing bids,
                testing ad copy, and refining audience targeting to lower your Cost Per Lead (CPL) and increase your Return on Ad Spend (ROAS).
            </p>

            <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginTop: 0 }}>Case Study: TechSaaS Inc.</h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#22c55e', margin: '1rem 0' }}>-42% CPL</div>
                <p>Within 3 months, we reduced their Cost Per Lead while doubling lead volume.</p>
            </div>

        </ServicePage>
    );
};

export default PpcPage;
