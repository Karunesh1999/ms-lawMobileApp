import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ResourcesPage } from './pages/Resources';
import { QuoteModal } from './components/modals/QuoteModal';
import { ResponsiveDeviceWrapper } from './components/demo/Demo';

// Auto scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <ResponsiveDeviceWrapper>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white text-[#1F2937] overflow-x-hidden">
          {/* Navigation Bar (Tier 1: White Contact Bar + Tier 2: Navy Navigation Bar) */}
          <Navbar onOpenQuote={() => setIsConsultationOpen(true)} />

          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="/about" element={<AboutPage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="/about-us" element={<AboutPage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="/services" element={<ServicesPage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="/our-services" element={<ServicesPage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="/resources" element={<ResourcesPage onOpenQuote={() => setIsConsultationOpen(true)} />} />
              <Route path="*" element={<HomePage onOpenQuote={() => setIsConsultationOpen(true)} />} />
            </Routes>
          </main>

          {/* Comprehensive Professional Law Firm Footer */}
          <Footer onOpenQuote={() => setIsConsultationOpen(true)} />

          {/* Universal Free Consultation Modal */}
          <QuoteModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />
        </div>
      </Router>
    </ResponsiveDeviceWrapper>
  );
}

export default App;
