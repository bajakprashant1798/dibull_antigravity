import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ProposalPage from './pages/ProposalPage';
import SeoPage from './pages/SeoPage';
import PpcPage from './pages/PpcPage';
import AboutPage from './pages/AboutPage';
import ServicesHub from './pages/ServicesHub';
import TechnologiesPage from './pages/TechnologiesPage';
import ResultsPage from './pages/ResultsPage';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proposal" element={<ProposalPage />} />

            {/* Services Hub */}
            <Route path="/services" element={<ServicesHub />} />

            {/* Individual Services */}
            <Route path="/services/seo" element={<SeoPage />} />
            <Route path="/services/ppc" element={<PpcPage />} />

            {/* Other Pages */}
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Fallback */}
            <Route path="/services/*" element={<SeoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
