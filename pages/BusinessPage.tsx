
import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Landmark, Building2, Trees, Droplets, HardHat, Construction, Shovel, Zap, CircleDot, Cable } from 'lucide-react';

const BusinessPage: React.FC = () => {
  const { config } = useConfig();

  const businessAreas = [
    {
      title: "가로등기초 공사",
      icon: <Zap size={48} />,
      isSpecial: true,
      desc: "지상 구조물의 수평과 하중을 완벽하게 지지하는 이수산업의 핵심 공정입니다. 고강도 콘크리트 및 특수 고정 공법을 사용하여 태풍 및 진동에도 변형 없는 영구적 기초를 제공합니다."
    },
    {
      title: "맨홀 제조 및 설치",
      icon: <CircleDot size={48} />,
      isSpecial: true,
      desc: "전기, 통신, 소방, 상하수도 등 모든 지하 인프라의 거점이 되는 맨홀을 직접 생산하고 설치합니다. 방수 처리가 완벽한 프리캐스트 공법으로 시공 기간을 획기적으로 단축합니다."
    },
    {
      title: "전기·통신 토공",
      icon: <Cable size={48} />,
      desc: "관로 터파기 및 관로 포설 등 전기·통신 시설을 위한 정밀 토공사를 수행합니다. 매설물의 위치를 정확히 확보하여 향후 유지보수가 용이하도록 설계 및 시공합니다."
    },
    {
      title: "기초 지반 보강",
      icon: <Shovel size={48} />,
      desc: "연약 지반이나 경사면 등 취약한 현장의 지내력을 확보하기 위한 보강 공사를 수행합니다. 구조물의 안정성을 최우선으로 하여 지질 상태에 맞는 보강재를 적용합니다."
    },
    {
      title: "토목공사업",
      icon: <Landmark size={48} />,
      desc: "도로 부대시설물 설치, 보도블록 포장, 옹벽 설치 등 일반 토목 공사를 포함한 폭넓은 시공 능력을 보유하고 있습니다."
    },
    {
      title: "상하수도설비",
      icon: <Droplets size={48} />,
      desc: "깨끗한 물의 원활한 흐름을 위해 관로를 정비하고 대형 맨홀 펌프장 시설을 시공하여 도시의 위생 인프라를 책임집니다."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-gray-900 text-white py-24 px-4 text-center mb-16" style={{ backgroundColor: config.primaryColor }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">전문 사업분야</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">가로등기초와 맨홀 시공 분야에서 독보적인 기술력으로 건설 인프라의 기준을 세웁니다.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Specialties (Highlighted) */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-gray-900">핵심 주력 사업</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessAreas.filter(a => a.isSpecial).map((area, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:border-blue-400 transition-all group">
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-8 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-6 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base px-2">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* General Business Areas */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-gray-900">일반 사업 영역</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.filter(a => !a.isSpecial).map((area, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-md transition-all">
                <div 
                  className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ borderColor: config.primaryColor, color: config.primaryColor }}
                >
                  {/* Fix: Cast area.icon to React.ReactElement<any> to allow additional props like 'size' in React.cloneElement */}
                  {React.cloneElement(area.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-lg font-bold mb-4 text-gray-900">{area.title}</h3>
                <p className="text-gray-500 leading-relaxed text-xs">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 p-12 rounded-3xl bg-gray-900 text-white flex flex-col items-center text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://picsum.photos/1200/400?pattern')] pointer-events-none"></div>
          <h2 className="text-2xl font-bold mb-6 relative z-10">이수산업만의 차별화된 시공 노하우</h2>
          <p className="text-blue-200 max-w-3xl mb-10 leading-relaxed relative z-10">
            당사는 가로등 기초 전용 고정구 및 맨홀 체결 시스템에 관한 다수의 특허를 보유하고 있습니다. 
            현장의 조건에 구애받지 않는 표준화된 시공 시스템으로 품질의 균일성을 보장합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">고강도 특수 콘크리트 적용</span>
            <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">자체 맨홀 생산 라인 가동</span>
            <span className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold border border-white/20">전용 지반 드릴링 장비 보유</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
