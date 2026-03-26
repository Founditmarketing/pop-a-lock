import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ContactPage } from './components/ContactPage';
import { AutoLockoutsPage } from './components/AutoLockoutsPage';
import { HomeLockoutPage } from './components/HomeLockoutPage';
import { CommercialAutoPage } from './components/CommercialAutoPage';
import { CommercialLockoutPage } from './components/CommercialLockoutPage';
import { SmartKeyPage } from './components/SmartKeyPage';
import { RepairInstallPage } from './components/RepairInstallPage';
import { HomeRekeyPage } from './components/HomeRekeyPage';
import { PalSavesKidsPage } from './components/PalSavesKidsPage';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
      <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-pop-orange selection:text-white flex flex-col">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/auto-lockout" element={<AutoLockoutsPage />} />
            <Route path="/services/home-lockout" element={<HomeLockoutPage />} />
            <Route path="/services/commercial-auto" element={<CommercialAutoPage />} />
            <Route path="/services/commercial-lockout" element={<CommercialLockoutPage />} />
            <Route path="/services/smart-key" element={<SmartKeyPage />} />
            <Route path="/services/repair-install" element={<RepairInstallPage />} />
            <Route path="/services/home-rekey" element={<HomeRekeyPage />} />
            <Route path="/services/palsaveskids" element={<PalSavesKidsPage />} />
          </Routes>
        </main>

        {!isContactPage && <Footer />}
        <ChatWidget />
      </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;