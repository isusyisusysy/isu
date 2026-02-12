
import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Instagram, Youtube, ShoppingBag, MapPin, Phone, Mail, User } from 'lucide-react';

const Footer: React.FC = () => {
  const { config } = useConfig();
  
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* 1. 회사명 및 대표자/이메일 정보 */}
          <div className="space-y-6">
            <div className="mb-4">
              <span className="text-2xl font-black text-white tracking-tighter">{config.companyName}</span>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <User size={18} className="text-blue-500 shrink-0" />
                <span className="text-sm">대표이사: <span className="text-white font-medium">{config.ceoName}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span className="text-sm">이메일: <span className="text-white font-medium">{config.email}</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span className="text-sm">대표전화: <span className="text-white font-medium">{config.phone}</span></span>
              </div>
            </div>
          </div>

          {/* 2. 주소 정보 (본사 및 공장 통합) - 요청에 따라 md 이상에서 이전보다 아주 살짝 오른쪽으로 복귀 */}
          <div className="space-y-6 md:-ml-12 lg:-ml-24 transition-all duration-300">
            <h4 className="text-white font-bold text-lg mb-2">Locations</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">[본사]</p>
                  <p className="text-sm leading-relaxed">
                    {config.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm mb-1">[안성공장]</p>
                  <p className="text-sm leading-relaxed">경기도 안성시 삼죽면 진촌리 421-12</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 소셜 미디어 및 퀵 링크 */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-2">Connect</h4>
            <p className="text-sm leading-relaxed mb-6">
              이수산업의 최신 시공 소식과 다양한 제품 정보를<br/>
              공식 채널을 통해 확인하실 수 있습니다.
            </p>
            <div className="flex gap-4 pt-2 justify-center lg:justify-start">
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-xl hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1 border border-white/5"
                title="인스타그램"
              >
                <Instagram size={22} />
              </a>
              {config.naverStoreUrl && (
                <a 
                  href={config.naverStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-xl hover:bg-[#03C75A] hover:text-white transition-all transform hover:-translate-y-1 border border-white/5"
                  title="네이버 스마트스토어"
                >
                  <ShoppingBag size={22} />
                </a>
              )}
              <a 
                href="#" 
                className="p-3 bg-white/5 rounded-xl hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 border border-white/5"
                title="유튜브"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-600">
          <p>© 2026 {config.companyName}. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">이용약관</a>
            <a href="#" className="hover:text-white font-bold transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-400 transition-colors">이메일무단수집거부</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
