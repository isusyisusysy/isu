
import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';
import { Search, Filter } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const { config, projects } = useConfig();
  const [activeFilter, setActiveFilter] = useState('전체');

  const filters = ['전체', '토목', '건축', '플랜트', '기타'];
  const filteredProjects = activeFilter === '전체' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pb-20">
      <div className="bg-gray-900 text-white py-20 px-4 text-center mb-12" style={{ backgroundColor: config.primaryColor }}>
        <h1 className="text-4xl font-bold mb-4">공사 실적</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">전국 곳곳에서 증명된 이수산업의 탄탄한 시공 능력을 확인하세요.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === f 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300'
                }`}
                style={activeFilter === f ? { backgroundColor: config.primaryColor } : {}}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="프로젝트 검색..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">상세보기</button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold rounded-md shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  {/* Fix: Use 'as any' casting for the style object to support custom CSS properties (CSS variables) */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors" style={{ '--tw-group-hover-text-color': config.primaryColor } as any}>
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-xs text-gray-400 flex items-center gap-1 uppercase tracking-wider">
                    {project.date}
                  </span>
                  <span className="text-xs font-bold text-blue-900" style={{ color: config.primaryColor }}>Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Filter size={48} className="mx-auto mb-4 opacity-20" />
            <p>선택한 카테고리에 등록된 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
