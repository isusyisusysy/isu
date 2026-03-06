
import React, { useState, useEffect } from 'react';
import { ConfigProvider } from './text/figtext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import ProductsIntroPage from './pages/ProductsIntroPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
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
    <ConfigProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;
