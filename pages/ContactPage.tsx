
import React from 'react';
import { useConfig } from '../context/ConfigContext';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { config } = useConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 성공적으로 접수되었습니다. 곧 담당자가 연락드리겠습니다.');
  };

  return (
    <div className="pb-20">
      <div className="bg-gray-900 text-white py-20 px-4 text-center mb-12" style={{ backgroundColor: config.primaryColor }}>
        <h1 className="text-4xl font-bold mb-4">고객 문의</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">이수산업의 서비스에 대해 궁금한 점이 있으시면 언제든 문의해주세요.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">본사 주소</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{config.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">대표 전화</h4>
                  <p className="text-gray-600 text-sm">{config.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">이메일 문의</h4>
                  <p className="text-gray-600 text-sm">{config.email}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-50 text-blue-900 rounded-lg shrink-0" style={{ color: config.primaryColor }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">상담 가능 시간</h4>
                  <p className="text-gray-600 text-sm">월-금 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="font-bold mb-4">찾아오시는 길</h3>
            <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
              <img src="https://picsum.photos/400/300?map" className="w-full h-full object-cover grayscale" alt="Map Placeholder" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button className="px-4 py-2 bg-white rounded shadow-md text-sm font-bold flex items-center gap-2">
                  <MapPin size={16} /> 지도에서 보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8">온라인 문의하기</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">이름/기업명</label>
                <input 
                  type="text" 
                  required
                  placeholder="홍길동"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">연락처</label>
                <input 
                  type="tel" 
                  required
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">이메일</label>
              <input 
                type="email" 
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">문의 내용</label>
              <textarea 
                rows={6}
                required
                placeholder="공사 의뢰나 견적 문의 내용을 자세히 남겨주세요."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="privacy" required className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="privacy" className="text-xs text-gray-500">개인정보 수집 및 이용에 동의합니다. (필수)</label>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg"
              style={{ backgroundColor: config.primaryColor }}
            >
              <Send size={18} /> 문의 내용 보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
