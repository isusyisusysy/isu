import React from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShoppingBag,
  FileText,
  CheckCircle2,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const { config } = useConfig();

  return (
    <div className="pb-20 bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[620px] flex items-center justify-center overflow-hidden text-white"
        style={{ backgroundColor: config.primaryColor }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/40" />

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-8 py-3 bg-[#EAFF00] border-2 border-black rounded-full text-2xl md:text-3xl font-black mb-8 tracking-tighter text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            상담 · 견적문의
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight drop-shadow-2xl">
            <span className="block mb-2">가로등기초 · 콘크리트 맨홀 상담</span>
            <span className="block text-blue-400">전화와 문자로 빠르게 안내해드립니다</span>
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-blue-100/85 font-light max-w-3xl mx-auto leading-relaxed">
            가로등기초, 콘크리트 맨홀, 사각맨홀, 맨홀뚜껑 등
            <br />
            현장 조건에 맞춘 제작 및 전국 납품 상담이 가능합니다.
          </p>

          <p className="mb-8 text-sm md:text-base text-gray-300">
            ✔ 규격 상담 가능 &nbsp;&nbsp; ✔ 앙카 간격 확인 가능 &nbsp;&nbsp; ✔ 수량·납기 문의 가능
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${config.phone}`}
              className="px-8 py-4 bg-white hover:bg-gray-100 rounded-xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95 min-w-[220px]"
              style={{ color: config.primaryColor }}
            >
              <Phone size={20} />
              전화로 바로 상담하기
            </a>

            <a
              href={`sms:${config.phone}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95 min-w-[220px]"
            >
              <MessageSquare size={20} />
              문자로 문의하기
            </a>

            <a
              href="https://smartstore.naver.com/isuindustry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#03C75A] hover:bg-[#02b350] text-white rounded-xl font-black text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 active:scale-95 min-w-[220px]"
            >
              <ShoppingBag size={20} />
              네이버 스토어 보기
            </a>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone size={26} />,
                title: '전화 상담',
                desc: '급한 견적 문의나 납품 일정 확인이 필요하시면 전화로 빠르게 상담 가능합니다.',
              },
              {
                icon: <MessageSquare size={26} />,
                title: '문자 문의',
                desc: '규격, 수량, 납품 지역, 일정 등을 문자로 보내주시면 확인 후 안내드립니다.',
              },
              {
                icon: <ShoppingBag size={26} />,
                title: '스토어 확인',
                desc: '제품 이미지, 규격, 상세 정보는 네이버 스토어에서 바로 확인하실 수 있습니다.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white shadow-md"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-black mb-6 text-slate-900 tracking-tight">연락처 정보</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="p-3 bg-blue-50 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black mb-1 text-slate-900">본사 주소</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{config.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="p-3 bg-blue-50 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black mb-1 text-slate-900">대표 전화</h4>
                  <a href={`tel:${config.phone}`} className="text-gray-600 text-sm hover:underline">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="p-3 bg-blue-50 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-black mb-1 text-slate-900">상담 가능 시간</h4>
                  <p className="text-gray-600 text-sm">월-금 09:00 ~ 18:00</p>
                  <p className="text-gray-500 text-xs mt-1">주말/공휴일 휴무</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="font-black mb-4 text-slate-900">상담 전에 알려주시면 좋아요</h3>

            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: config.primaryColor }} />
                <span>제품 종류: 가로등기초 / 맨홀 / 사각맨홀 등</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: config.primaryColor }} />
                <span>규격 또는 사이즈</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: config.primaryColor }} />
                <span>수량, 납품 지역, 희망 일정</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: config.primaryColor }} />
                <span>도면이나 현장 사진이 있으면 더 정확한 상담 가능</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-black mb-4 text-slate-900">찾아오시는 길</h3>
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="https://picsum.photos/400/300?map"
                className="w-full h-full object-cover grayscale"
                alt="Map Placeholder"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="px-4 py-2 bg-white rounded shadow-md text-sm font-bold flex items-center gap-2">
                  <MapPin size={16} /> 지도에서 보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-black mb-3 text-slate-900 tracking-tight">빠른 상담 방법</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              온라인 문의폼 대신 전화, 문자, 네이버 스토어를 통해
              <br />
              더 빠르고 편하게 상담 및 견적 문의하실 수 있습니다.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={`tel:${config.phone}`}
                className="rounded-2xl bg-slate-900 text-white p-6 text-center font-black hover:opacity-95 transition shadow-lg"
                style={{ backgroundColor: config.primaryColor }}
              >
                <Phone size={28} className="mx-auto mb-3" />
                <div className="text-lg">전화 상담</div>
                <div className="text-sm text-blue-100/80 mt-2">모바일에서 바로 연결</div>
              </a>

              <a
                href={`sms:${config.phone}`}
                className="rounded-2xl bg-gray-100 text-gray-900 p-6 text-center font-black hover:bg-gray-200 transition shadow-sm border border-gray-200"
              >
                <MessageSquare size={28} className="mx-auto mb-3" />
                <div className="text-lg">문자 문의</div>
                <div className="text-sm text-gray-500 mt-2">규격·수량 문자 전송</div>
              </a>

              <a
                href="https://smartstore.naver.com/isuindustry"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#03C75A] text-white p-6 text-center font-black hover:bg-[#02b350] transition shadow-lg"
              >
                <ShoppingBag size={28} className="mx-auto mb-3" />
                <div className="text-lg">스토어 보기</div>
                <div className="text-sm text-green-100 mt-2">제품 이미지·규격 확인</div>
              </a>
            </div>
          </div>

          <div
            className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl"
            style={{ backgroundColor: config.primaryColor }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">상담 및 견적문의 안내</h3>

            <p className="text-blue-100/85 leading-relaxed mb-6">
              이수산업은 가로등기초, 콘크리트 맨홀, 사각맨홀, 맨홀뚜껑 등
              다양한 구조물 제작 및 전국 납품 상담을 진행하고 있습니다.
              현장 조건에 맞춘 맞춤 제작 상담이 가능하며, 대량 주문과 특수 규격 제작도 문의하실 수 있습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div className="bg-white/5 rounded-2xl p-5">
                <h4 className="font-black text-white mb-3">주요 상담 항목</h4>
                <ul className="space-y-2 text-blue-100/85">
                  <li>• 가로등기초 규격 및 제작 상담</li>
                  <li>• 콘크리트 맨홀 납품 문의</li>
                  <li>• 사각맨홀 및 맨홀뚜껑 상담</li>
                  <li>• 앙카 간격, 수량, 납기 확인</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-5">
                <h4 className="font-black text-white mb-3">빠른 상담 팁</h4>
                <ul className="space-y-2 text-blue-100/85">
                  <li>• 도면이 있으면 더 정확한 견적이 가능합니다</li>
                  <li>• 설치 지역과 일정도 함께 알려주세요</li>
                  <li>• 특수 규격 제작 여부도 상담 가능합니다</li>
                  <li>• 사진 첨부 시 제품 안내가 더 쉬워집니다</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight text-slate-900">
              상담이 필요한 제품 예시
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              가로등기초 제작, 콘크리트 맨홀 제작, 사각맨홀 납품, 맨홀뚜껑 상담 등
              다양한 구조물 관련 문의가 가능합니다. 제품 규격, 수량, 설치 환경, 납품 일정에 따라
              보다 적합한 제품 안내가 가능합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h4 className="font-black mb-2 text-slate-900">가로등기초 상담</h4>
                <p>규격, 앙카 간격, 수량, 설치 위치, 납기 일정 등</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h4 className="font-black mb-2 text-slate-900">콘크리트 맨홀 상담</h4>
                <p>사이즈, 용도, 납품 지역, 제작 방식 등</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h4 className="font-black mb-2 text-slate-900">사각맨홀 / 맨홀뚜껑</h4>
                <p>현장 적용 규격, 수량, 특수 규격 여부 등</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h4 className="font-black mb-2 text-slate-900">전국 납품 문의</h4>
                <p>희망 일정, 납품 지역, 차량 진입 여부 등</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
