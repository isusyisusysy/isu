
import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Layout, Palette, Save, CheckCircle, ShoppingBag } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { config, updateConfig } = useConfig();
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form states
  const [formConfig, setFormConfig] = useState(config);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(formConfig);
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 space-y-2">
        <h2 className="text-xl font-bold mb-6 px-4">관리자 센터</h2>
        <div
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-blue-900 text-white"
          style={{ backgroundColor: config.primaryColor }}
        >
          <Palette size={18} /> 기본 정보 & 테마
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {saveSuccess && (
          <div className="bg-green-50 text-green-700 px-6 py-3 flex items-center gap-2 border-b border-green-100 sticky top-0 z-20">
            <CheckCircle size={18} /> 변경사항이 저장되었습니다.
          </div>
        )}

        <div className="p-8">
          <h3 className="text-lg font-bold mb-6 border-b pb-4">기본 정보 설정</h3>
          <form onSubmit={handleSaveSettings} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">회사명</label>
                <input 
                  type="text" 
                  value={formConfig.companyName}
                  onChange={e => setFormConfig({...formConfig, companyName: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">대표자성함</label>
                <input 
                  type="text" 
                  value={formConfig.ceoName}
                  onChange={e => setFormConfig({...formConfig, ceoName: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">기업 비전/슬로건</label>
              <textarea 
                rows={2}
                value={formConfig.vision}
                onChange={e => setFormConfig({...formConfig, vision: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">네이버 스마트스토어 URL</label>
                <div className="relative">
                  <ShoppingBag className="absolute left-3 top-1/2 -translate-y-1/2 text-[#03C75A]" size={18} />
                  <input 
                    type="url" 
                    placeholder="https://smartstore.naver.com/your-store"
                    value={formConfig.naverStoreUrl}
                    onChange={e => setFormConfig({...formConfig, naverStoreUrl: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none border-green-100" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">전화번호</label>
                <input 
                  type="text" 
                  value={formConfig.phone}
                  onChange={e => setFormConfig({...formConfig, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">주 컬러 (Primary)</label>
                <div className="flex gap-3 items-center">
                  <input 
                    type="color" 
                    value={formConfig.primaryColor}
                    onChange={e => setFormConfig({...formConfig, primaryColor: e.target.value})}
                    className="w-12 h-10 p-1 rounded border cursor-pointer" 
                  />
                  <span className="text-sm font-mono text-gray-500 uppercase">{formConfig.primaryColor}</span>
                </div>
              </div>
            </div>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition-all shadow-md"
              style={{ backgroundColor: config.primaryColor }}
            >
              <Save size={18} /> 설정 저장하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
