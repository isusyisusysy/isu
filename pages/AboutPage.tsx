import React, { useState, useEffect, useRef } from 'react';
import { useConfig } from '../context/ConfigContext';
import { 
  ShieldCheck, 
  History, 
  Landmark,
  Users2,
  TrendingUp,
  Construction
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const { config } = useConfig();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // 스크롤 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const competencies = [
    { icon: <ShieldCheck />, title: "품질 보증", tag: "Quality", desc: "엄격한 기준의 품질 관리 시스템" },
    { icon: <Construction />, title: "기술 혁신", tag: "Tech", desc: "특허 기반의 독자적 시공 공법" },
    { icon: <Landmark />, title: "직접 생산", tag: "Factory", desc: "안성 자체 공장을 통한 정밀 제조" },
    { icon: <TrendingUp />, title: "가치 혁신", tag: "Value", desc: "현장 효율을 극대화하는 신공법" },
    { icon: <History />, title: "풍부한 경험", tag: "History", desc: "수만 건의 인프라 구축 데이터" },
    { icon: <Users2 />, title: "고객 신뢰", tag: "Trust", desc: "기대를 뛰어넘는 현장 대응력" }
  ];

  return (
    <div className="pb-32 bg-white overflow-hidden">
      {/* Sub Hero */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden" style={{ backgroundColor: config.primaryColor }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-6">About Isu Sanyup</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">회사소개</h1>
          <p className="text-blue-100/70 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            건설의 기초를 바로 세우고,<br className="md:hidden" /> 안전한 인프라로 내일을 연결합니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        {/* CEO Message Section */}
        <section className="bg-white rounded-[40px] shadow-2xl border border-gray-100 p-10 md:p-24 text-center mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-black text-blue-700 tracking-[0.3em] uppercase mb-8" style={{ color: config.primaryColor }}>CEO Message</h2>
            
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tighter">
              "안녕하십니까,
              <div className="mt-3 md:mt-4"> 
                <strong className="font-black" style={{ color: config.primaryColor }}>이수산업 홈페이지를</strong><br className="md:hidden" /> 방문해주셔서 감사합니다."
              </div>
            </h3>
            
            <div className="w-16 h-1 bg-blue-600 mx-auto my-14 rounded-full" style={{ backgroundColor: config.primaryColor }}></div>
            
            <div className="space-y-10 text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-6">
              <p>
                저희 이수산업은 창립 이래 <strong>'품질 경영'</strong>과 <strong>'인간 존중'</strong>의 정신을 바탕으로 대한민국 건설 산업의 보이지 않는 뿌리를 지탱해왔습니다.
              </p>
              <p>
                단순히 구조물을 설치하는 것에 그치지 않고, 그 위에 세워질 인프라와 그 공간을 누릴 사람들의 안전을 최우선으로 생각합니다. 가로등기초와 맨홀은 도시 인프라의 시작입니다.
              </p>
              <p>
                끊임없는 기술 개발과 자체 공장을 통한 정밀한 제조 공정으로, 고객 여러분의 현장에 가장 튼튼하고 믿음직한 기초를 제공할 것을 약속드립니다.
              </p>
            </div>

            <div className="mt-2 flex flex-col items-center">
              <div className="w-px h-6 bg-gray-100 mb-2"></div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] mb-1">Representative Director</span>
              <span className="text-2xl font-black text-gray-900 tracking-tight">이수산업 대표이사 <span className="ml-1 text-blue-900" style={{ color: config.primaryColor }}>{config.ceoName}</span></span>
            </div>
          </div>
        </section>

        {/* Core Business Competencies - 역동적 그리드 레이아웃 */}
        <section ref={sectionRef} className="mb-40">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-black mb-4 tracking-tight text-gray-900">핵심 비즈니스 역량</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full" style={{ backgroundColor: config.primaryColor }}></div>
            <p className="text-gray-400 font-bold text-xs tracking-widest uppercase">6 Core Competencies of Isu Sanyup</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {competencies.map((item, i) => (
              <div 
                key={i}
                className={`bg-white rounded-[32px] p-10 border border-gray-100 shadow-xl transition-all duration-1000 group hover:border-blue-500 hover:-translate-y-4 hover:shadow-2xl cursor-default overflow-hidden relative ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-32 rotate-6'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${i * 150}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // 통통 튀는 탄성 효과
                }}
              >
                {/* 배경 장식 원 */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500 -z-0"></div>
                
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: config.primaryColor }}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full mb-4 tracking-widest uppercase" style={{ color: config.primaryColor }}>
                    {item.tag}
                  </span>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 font-medium text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                </div>

                {/* 하단 화살표 장식 */}
                <div className="absolute bottom-6 right-8 text-gray-100 group-hover:text-blue-100 transition-colors">
                   <div className="w-12 h-1 bg-current rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 강조 문구 */}
          <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-gray-400 font-medium italic">
              "우리는 보이지 않는 곳의 가치를 믿으며, 가장 탄탄한 기초를 제공하기 위해 혁신합니다."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
