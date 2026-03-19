import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import ProductsIntroPage from './pages/ProductsIntroPage';
import AdminDashboard from './pages/AdminDashboard';
import ContactPage from './pages/ContactPage';
import { ConfigProvider, useConfig } from './context/ConfigContext';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { config } = useConfig();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'business':
        return <BusinessPage />;
      case 'products':
        return <ProductsIntroPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const showMobileFixedBar = currentPage !== 'admin';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow pb-28 md:pb-0">
        {renderPage()}
      </main>

      <Footer />

      {showMobileFixedBar && (
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
          <div className="bg-[#EAFF00] text-black text-center text-xs font-black py-2 border-t border-black">
            연중무휴 · 24시간 상담 가능
          </div>

          <div className="flex shadow-[0_-8px_24px_rgba(0,0,0,0.2)] border-t border-white/10">
            <a
              href={`tel:${config.phone}`}
              className="w-1/2 py-4 bg-[#FF3B5C] text-white text-center font-black flex items-center justify-center gap-2 active:scale-95 transition"
            >
              📞 전화 상담
            </a>

            <a
              href={`sms:${config.phone}`}
              className="w-1/2 py-4 bg-[#1F2937] text-white text-center font-black flex items-center justify-center gap-2 border-l border-white/10 active:scale-95 transition"
            >
              ✉ 문자 문의
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <AppContent />
    </ConfigProvider>
  );
};

export default App;
