import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadGenSection from './components/LeadGenSection'; // Formerly the old Hero
import AwardsBar from './components/AwardsBar';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechSection from './components/TechSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const HomePage = () => (
    <>
        <Hero />
        <LeadGenSection />
        <AwardsBar />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <TechSection />
        <CallToAction />
    </>
);

const App = () => {
    return (
        <Router>
            <div className="app-wrapper">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
