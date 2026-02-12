
import React, { useState } from 'react';
import { ConfigProvider } from './context/ConfigContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import ProductsIntroPage from './pages/ProductsIntroPage';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

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
