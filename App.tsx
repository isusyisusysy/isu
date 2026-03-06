import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import ProductsIntroPage from './pages/ProductsIntroPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // 페이지가 바뀔 때마다 상단으로 스크롤 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'business': return <BusinessPage />;
      case 'products': return <ProductsIntroPage />;
      case 'admin': return <AdminDashboard />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
