import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { 
  ShoppingBag, 
  ExternalLink, 
  PhoneCall, 
  TrendingUp 
} from 'lucide-react';

const ProductsIntroPage: React.FC = () => {
  const { config } = useConfig();

  return (
    <div className="pb-32 bg-gray-50/50">
      {/* Sub Hero: Focused on Store Presence */}
      <div className="relative bg-slate-900 py-32 overflow-hidden" style={{ backgroundColor: config.primaryColor }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Official Online Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
            제품은 <span className="text-[#03C75A]">네이버 스토어</span>에서 만나보세요
          </h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            이수산업의 모든 가로등기초 및 맨홀 제품 라인업은<br className="hidden md:block" />
            공식 스토어에서 상세 이미지와 규격을 직접 확인하실 수 있습니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        {/* Main Action Hub: Optimized Alignment and Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Path 1: Naver Store Card (Left) */}
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 md:p-14 pb-8 md:pb-10 flex flex-col items-center text-center transition-all hover:shadow-[#03C75A]/20 group">
            <div className="w-24 h-24 bg-[#E8F9F1] rounded-3xl flex items-center justify-center text-[#03C75A] mb-12 group-hover:rotate-6 transition-transform">
              <ShoppingBag size={48} />
            </div>
            
            <h3 className="text-sm font-bold text-[#03C75A] uppercase tracking-widest mb-4">Naver Smart Store</h3>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 tracking-tight">
              네이버 스토어로 <span className="text-[#03C75A]">바로가기</span>
            </h2>
            
            <p className="text-gray-500 mb-10 leading-relaxed font-medium max-w-sm h-12 flex items-center justify-center">
              맨홀과 가로등기초 등 모든 현장에 즉각 대응 가능한<br />
              이수산업의 검증된 제품 라인업을 지금 확인해보세요.
            </p>

            {config.naverStoreUrl && (
              <a 
                href={config.naverStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-7 bg-[#03C75A] hover:bg-[#02b351] text-white rounded-3xl font-black text-xl md:text-2xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-green-500/20 hover:scale-[1.02] active:scale-95"
              >
                네이버 스토어 연결 <ExternalLink size={24} />
              </a>
            )}
            
            <div className="mt-8 flex gap-6 text-[#03C75A]/60 font-bold text-xs uppercase tracking-tighter">
              <span className="flex items-center gap-1">100% 정품</span>
              <span className="flex items-center gap-1">안전 결제</span>
              <span className="flex items-center gap-1">빠른 배송</span>
            </div>
          </div>

          {/* Path 2: Technical Consulting Card (Right) */}
          <div className="bg-slate-800 rounded-[40px] shadow-2xl border border-white/5 p-10 md:p-14 pb-8 md:pb-10 flex flex-col items-center text-center text-white transition-all hover:shadow-blue-500/10 group overflow-hidden relative">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 w-full flex flex-col items-center flex-1">
              <div className="w-24 h-24 bg-blue-500 rounded-3xl flex items-center justify-center text-white mb-12 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/40">
                <PhoneCall size={48} />
              </div>
              
              <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-4">Direct Technical Support</h3>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
                견적 및 <span className="text-blue-400">주문 전화 상담</span>
              </h2>
              
              <div className="bg-white/5 border border-white/10 rounded-[32px] pt-10 pb-12 md:pt-12 md:pb-12 px-10 w-full backdrop-blur-sm flex flex-col items-center justify-start min-h-[220px]">
                <div className="flex items-center justify-center gap-2 text-blue-400 text-sm md:text-base font-bold uppercase tracking-tight mb-6">
                  <TrendingUp size={18} /> 대량 주문 및 특수 규격 제작 문의 가능
                </div>
                
                <div className="inline-block relative">
                  <p className="text-4xl md:text-6xl font-black tracking-tighter text-white relative z-10 leading-tight">
                    {config.phone}
                  </p>
                  <div className="absolute -bottom-7 left-0 right-0 h-1.5 md:h-2 bg-blue-400 rounded-full opacity-80"></div>
                </div>
              </div>

              <div className="mt-8 h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsIntroPage;