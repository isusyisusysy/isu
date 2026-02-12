import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { ArrowRight, Shield, Award, HardHat, Zap, CircleDot, Construction, CheckCircle2 } from 'lucide-react';

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { config } = useConfig();

  return (
    <div className="space-y-0 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative h-[800px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: config.primaryColor }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/40"></div>
        
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="inline-block px-8 py-3 bg-[#EAFF00] border-2 border-black rounded-full text-3xl font-black mb-10 tracking-tighter uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
            가로등기초 · 맨홀 전문
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-14 tracking-tighter leading-tight drop-shadow-2xl">
            <span className="block mb-2">이수산업과 함께</span>
            <span className="text-blue-400 block">안전한 인프라를</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100/80 font-light max-w-3xl mx-auto leading-relaxed">
            최고의 품질과 풍부한 경험으로<br />
            안전한 미래를 건설하는 파트너, 이수산업입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => onNavigate('business')}
              className="px-10 py-5 bg-white hover:bg-gray-100 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
              style={{ color: config.primaryColor }}
            >
              전문 사업분야 보기 <ArrowRight size={24} />
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-black text-lg transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              회사소개
            </button>
          </div>
        </div>
      </section>

      {/* Specialty Highlights - 핵심 기술 섹션 */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <span className="text-[200px] font-black leading-none">TECH</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter">이수산업의 핵심 기술</h2>
            <div className="w-12 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" style={{ backgroundColor: config.primaryColor }}></div>
            <p className="text-gray-500 font-medium text-lg">수만 건의 시공 경험으로 증명된 가로등기초 및 맨홀 전문성</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap />, 
                title: "가로등기초 시공", 
                desc: "국내 최고 수준의 정밀도를 자랑하는 가로등 기초 시공 시스템. 지반 상태에 최적화된 공법으로 흔들림 없는 안전을 보장합니다." 
              },
              { 
                icon: <CircleDot />, 
                title: "맨홀 제조 및 설치", 
                desc: "전기, 통신, 상하수도 등 모든 인프라를 위한 고강도 프리캐스트 솔루션. 자체 생산 설비로 정밀한 품질과 납기를 실현합니다." 
              },
              { 
                icon: <Construction />, 
                title: "맞춤 규격 제작", 
                desc: "현장의 특수한 요구사항과 도면에 맞춘 최적의 맞춤 제작 서비스를 제공합니다. 까다로운 규격도 완벽하게 대응합니다." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 flex flex-col items-start text-left">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Isu Sanyup - 자연스러운 그라데이션 전이 */}
      <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 border-t border-gray-50">
        <div className="absolute bottom-0 left-0 p-20 opacity-[0.03] select-none pointer-events-none hidden lg:block">
          <span className="text-[200px] font-black leading-none">ISU</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block" style={{ color: config.primaryColor }}>Selection Criteria</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              왜 <span className="text-blue-600" style={{ color: config.primaryColor }}>이수산업</span>을 선택해야 하는가?
            </h2>
            <div className="w-12 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full" style={{ backgroundColor: config.primaryColor }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Shield />, 
                title: "완벽한 안전 관리", 
                desc: "기초 공사는 보이지 않는 곳의 안전입니다. 1cm의 오차도 허용하지 않는 정밀 시공으로 가장 탄탄한 토대를 약속합니다." 
              },
              { 
                icon: <Award />, 
                title: "독보적 기술력", 
                desc: "전용 고정구 및 맨홀 체결 공법 등 다수의 특허와 지식재산권을 보유하여 기술의 초격차를 유지합니다." 
              },
              { 
                icon: <HardHat />, 
                title: "전국 시공 네트워크", 
                desc: "전국 어디든 신속한 현장 대응과 체계적인 사후 관리가 가능한 최적의 인프라를 구축하고 있습니다." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm p-12 rounded-[40px] shadow-lg border border-white hover:border-blue-200 hover:shadow-2xl transition-all group relative overflow-hidden">
                {/* 배경 체크마크 장식 */}
                <div className="absolute top-8 right-8 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 size={120} />
                </div>
                
                <div className="relative z-10">
                  <div 
                    className="inline-flex p-4 rounded-2xl mb-8 shadow-inner" 
                    style={{ backgroundColor: `${config.primaryColor}10`, color: config.primaryColor }}
                  >
                    {React.cloneElement(item.icon, { size: 40 })}
                  </div>
                  <h3 className="text-2xl font-black mb-5 tracking-tight text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-900 rounded-[50px] p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl border border-white/5 relative overflow-hidden" style={{ backgroundColor: config.primaryColor }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"></div>
          
          <div className="max-w-md text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-blue-300 text-[10px] font-bold mb-6 uppercase tracking-widest">Performance Stats</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">신뢰의 결과는<br />숫자로 증명됩니다</h2>
            <p className="text-blue-200/60 font-medium text-lg">최고의 품질과 독보적인 기술력으로<br/>안전한 내일을 건설합니다.</p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-16 relative z-10">
            {[
              { label: "시공 가로등 수", value: "50,000+" },
              { label: "시공 맨홀 수", value: "30,000+" },
              { label: "고객 만족도", value: "100%" },
              { label: "전국 협력사", value: "200+" }
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-blue-500 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
                <span className="block text-4xl md:text-5xl font-black mb-2 tracking-tighter text-white">{stat.value}</span>
                <span className="text-blue-300/80 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
