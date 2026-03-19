import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import ProductsIntroPage from './pages/ProductsIntroPage';
import AdminDashboard from './pages/AdminDashboard';
import ContactPage from './pages/ContactPage';

// 환경설정 보내미(Provider) 불러오기
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

      {/* 하단 고정 버튼 때문에 모바일에서 내용 안 가려지게 여백 추가 */}
      <main className="flex-grow pb-20 md:pb-0">
        {renderPage()}
      </main>

      <Footer />

      {/* 모바일 하단 고정 전화/문자 버튼 */}
      {showMobileFixedBar && (
        <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden shadow-2xl">
          <a
            href={`tel:${config.phone}`}
            className="w-1/2 py-4 text-white text-center font-black flex items-center justify-center gap-2"
            style={{ backgroundColor: config.primaryColor }}
          >
            📞 전화 상담
          </a>

          <a
            href={`sms:${config.phone}`}
            className="w-1/2 py-4 bg-gray-800 text-white text-center font-black flex items-center justify-center gap-2"
          >
            ✉ 문자 문의
          </a>
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
