import ServicePage from '../layouts/ServicePage';

const AboutPage = () => {
    return (
        <ServicePage
            title="About Dibull"
            subtitle="We are a team of data scientists, creatives, and strategists obsessed with your growth."
        >
            <h2>Our Story</h2>
            <p>
                Founded in 2020, Dibull started with a simple belief: Digital marketing shouldn't be a black box.
                Clients deserve to know exactly where their money is going and what return they are getting.
            </p>
            <p>
                We built our own technology stack to track the complete customer journey, from the first click to the closed deal.
                Today, we manage over $50M in ad spend and drive billions in revenue for our clients.
            </p>

            <h3>Our Values</h3>
            <ul>
                <li><strong>Transparency:</strong> We share the data, even when it's ugly.</li>
                <li><strong>Ownership:</strong> We treat your business like it's our own.</li>
                <li><strong>Innovation:</strong> We never settle for "good enough".</li>
            </ul>

            <h2>Meet The Team</h2>
            <p>
                We are 500+ experts strong, distributed across the globe but united by a single mission: driving your revenue.
            </p>

        </ServicePage>
    );
};

export default AboutPage;
