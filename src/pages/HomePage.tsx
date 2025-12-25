import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
    return (
        <>
            <Hero />
            <StatsBar />
            <Services />
            <Technologies />
            <Testimonials />
            <CallToAction />
        </>
    );
};

export default HomePage;
