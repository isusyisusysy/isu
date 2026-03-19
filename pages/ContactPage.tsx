import React from 'react';
import { useConfig } from '../context/ConfigContext';
import {
  Phone,
  MessageSquare,
  ShoppingBag,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const { config } = useConfig();

  return (
    <div className="bg-gray-50 pb-20 overflow-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[420px] flex items-start justify-center overflow-hidden text-white pt-20 pb-28"
        style={{ backgroundColor: config.primaryColor }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-black/40" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-8 py-3 bg-[#EAFF00] border-2 border-black rounded-full text-2xl md:text-3xl font-black mb-8 tracking-tighter text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            상담 · 견적문의
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
            상담 및 견적문의 안내
          </h1>

          <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">
            가로등기초, 콘크리트 맨홀, 사각맨홀, 맨홀뚜껑 등
            <br />
            필요한 규격과 수량을 알려주시면 빠르게 상담해드립니다.
          </p>
        </div>
      </section>

      {/* Top Cards */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`tel:${config.phone}`}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center block hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: config.primaryColor }}
              >
                <Phone size={26} />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900">전화 상담</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                급한 견적 문의나 납품 일정 확인이 필요하시면
                <br />
                전화로 빠르게 상담 가능합니다.
              </p>
            </a>

            <a
              href={`sms:${config.phone}`}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center block hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div
                className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white shadow-md"
                style={{ backgroundColor: config.primaryColor }}
              >
                <MessageSquare size={26} />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900">문자 문의</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                규격, 수량, 납품 지역, 일정 등을 문자로 보내주시면
                <br />
                확인 후 안내드립니다.
              </p>
            </a>

            <a
              href="https://smartstore.naver.com/isuindustry"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center block hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-white shadow-md bg-[#03C75A]">
                <ShoppingBag size={26} />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900">스토어 확인</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                제품 이미지, 규격, 상세 정보는
                <br />
                네이버 스토어에서 바로 확인하실 수 있습니다.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Clean Info */}
      <section className="px-4 pt-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50"
                  style={{ color: config.primaryColor }}
                >
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">대표 전화</h3>
                  <a href={`tel:${config.phone}`} className="text-gray-600 hover:underline">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50"
                  style={{ color: config.primaryColor }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-1">상담 가능 시간</h3>
                  <p className="text-gray-600">평일 09:00 ~ 18:00</p>
                  <p className="text-xs text-gray-400 mt-1">주말/공휴일 휴무</p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div
              className="rounded-3xl p-6 md:p-8 text-white"
              style={{ backgroundColor: config.primaryColor }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5">
                  <h3 className="font-black mb-3">주요 상담 항목</h3>
                  <ul className="space-y-2 text-sm text-blue-100/90">
                    <li>• 가로등기초 규격 및 제작 상담</li>
                    <li>• 콘크리트 맨홀 납품 문의</li>
                    <li>• 사각맨홀 및 맨홀뚜껑 상담</li>
                    <li>• 앙카 간격, 수량, 납기 확인</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-2xl p-5">
                  <h3 className="font-black mb-3">빠른 상담 팁</h3>
                  <ul className="space-y-2 text-sm text-blue-100/90">
                    <li>• 도면이 있으면 더 정확한 견적 가능</li>
                    <li>• 설치 지역과 일정도 함께 알려주세요</li>
                    <li>• 특수 규격 제작 여부도 상담 가능</li>
                    <li>• 사진 첨부 시 안내가 더 쉬워집니다</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
