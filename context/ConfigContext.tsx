
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, Project, NewsPost } from '../types';

interface ConfigContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  projects: Project[];
  addProject: (project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
}

const defaultConfig: SiteConfig = {
  companyName: "이수산업",
  primaryColor: "#0f172a", // slate-900 (진한 네이비)
  secondaryColor: "#334155", // slate-700
  ceoName: "이상엽",
  address: "경기도 안양시 동안구 엘에스로 92, 안양국제유통단지 27동 2층 207호",
  phone: "010-3970-3338",
  email: "isusy@naver.com",
  vision: "가장 탄탄한 기초 위에 빛나는 도시를 설계합니다",
  naverStoreUrl: "https://smartstore.naver.com/isuindustry"
};

const initialProjects: Project[] = [
  { id: '1', title: '한강 메디컬 센터 신축공사', category: '건축', imageUrl: 'https://picsum.photos/800/600?random=1', description: '지상 15층 규모의 최첨단 의료 시설 건립', date: '2023-12' },
  { id: '2', title: '남부 순환로 터널 보강공사', category: '토목', imageUrl: 'https://picsum.photos/800/600?random=2', description: '안전 진단 및 특수 공법 적용 보강', date: '2024-01' },
  { id: '3', title: '그린스마트 오피스 타워', category: '건축', imageUrl: 'https://picsum.photos/800/600?random=3', description: '친환경 제로 에너지 빌딩 구현', date: '2023-10' },
];

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('isu_config');
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('isu_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  useEffect(() => {
    localStorage.setItem('isu_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('isu_projects', JSON.stringify(projects));
  }, [projects]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects(prev => [{ ...project, id: Date.now().toString() }, ...prev]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig, projects, addProject, deleteProject }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within a ConfigProvider');
  return context;
};
