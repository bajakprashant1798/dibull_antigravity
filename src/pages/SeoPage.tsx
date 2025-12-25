import ServicePage from '../layouts/ServicePage';

const SeoPage = () => {
    return (
        <ServicePage
            title="SEO Services That Drive Revenue"
            subtitle="Stop paying for rankings. Start paying for revenue. Our SEO strategies are built to convert."
        >
            <h2>Drive Traffic. Increase Revenue.</h2>
            <p>
                In today's digital landscape, visibility is everything. But not just any visibility—you need to be seen by the
                people who are actively looking for what you offer. That's where Dibull's data-driven SEO comes in.
            </p>

            <h3>Our R.O.C.K.E.T SEO Process</h3>
            <ul>
                <li><strong>Research:</strong> Deep dive into your competitors and keywords.</li>
                <li><strong>Optimize:</strong> Technical on-site improvements for speed and structure.</li>
                <li><strong>Content:</strong> Creating high-value content that answers user intent.</li>
                <li><strong>Keywords:</strong> Targeting terms with high purchase intent.</li>
                <li><strong>Earned Media:</strong> Building authority through quality backlinks.</li>
                <li><strong>Testing:</strong> Continuous A/B testing to improve conversion rates.</li>
            </ul>

            <h2>Transparent Pricing</h2>
            <table className="pricing-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Standard</th>
                        <th>Aggressive</th>
                        <th>Market Leader</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Keywords Targeted</td>
                        <td>30</td>
                        <td>80</td>
                        <td>150+</td>
                    </tr>
                    <tr>
                        <td>Pages Optimized</td>
                        <td>15</td>
                        <td>40</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Content Creation</td>
                        <td>2 Blogs/mo</td>
                        <td>6 Blogs/mo</td>
                        <td>10 Blogs/mo</td>
                    </tr>
                    <tr>
                        <td>Monthly Investment</td>
                        <td>$2,500/mo</td>
                        <td>$5,000/mo</td>
                        <td>$8,000/mo</td>
                    </tr>
                </tbody>
            </table>

            <h3>Why Choose Dibull for SEO?</h3>
            <p>
                We don't just guess. We use our proprietary AI platform, Dibull AI™, to analyze over 1 billion data points
                to predict exactly which strategies will yield the highest ROI for your specific industry.
            </p>
        </ServicePage>
    );
};

export default SeoPage;
