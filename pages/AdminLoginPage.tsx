// src/pages/AdminLoginPage.tsx
import React, { useState } from 'react';

const AdminLoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0824') { // 원하는 비밀번호로 변경 가능
      onLogin();
    } else {
      setError('비밀번호가 올바르지 않습니다.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 bg-gray-50/30">
      <div className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">관리자 인증</h2>
          <p className="text-gray-500 text-sm mt-3 font-medium">관리자 대시보드 접속을 위해<br/>비밀번호를 입력해주세요.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all text-center text-2xl tracking-[0.5em] font-black"
            placeholder="••••"
            autoFocus
          />
          {error && <p className="text-red-500 text-sm text-center font-bold animate-bounce">{error}</p>}
          <button
            type="submit"
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98]"
          >
            확인 및 접속
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;

