
import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Menu, X, Settings, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const { config } = useConfig();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: '홈', id: 'home' },
    { name: '회사소개', id: 'about' },
    { name: '사업영역', id: 'business' },
    { name: '제품소개', id: 'products' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="flex-shrink-0 flex items-center gap-2"
            >

              <img 
  src="/logo2.png" 
  alt="이수산업 로고"
  className="h-10 w-auto"
/>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  currentPage === item.id ? 'text-blue-700 font-bold' : 'text-gray-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {config.naverStoreUrl && (
              <a 
                href={config.naverStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#03C75A] text-white text-sm font-bold rounded-full hover:bg-[#02b351] transition-all"
              >
                <ShoppingBag size={16} />
                네이버 스토어
              </a>
            )}

            <button
              onClick={() => onNavigate('admin')}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              title="관리자 모드"
            >
              <Settings size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-medium rounded-md ${
                  currentPage === item.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {config.naverStoreUrl && (
              <a 
                href={config.naverStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-4 text-base font-bold text-[#03C75A] hover:bg-green-50 rounded-md"
              >
                <ShoppingBag size={20} />
                네이버 스토어 바로가기
              </a>
            )}

            <button
              onClick={() => {
                onNavigate('admin');
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              관리자 설정
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
