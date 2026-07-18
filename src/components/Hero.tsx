import React, { MouseEvent } from 'react';
import { ArrowRight, Terminal, Globe, Network, Cpu } from 'lucide-react';

export default function Hero() {
  const handleCtaClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy-950 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111e35_1px,transparent_1px),linear-gradient(to_bottom,#111e35_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-60" />

      {/* Decorative Cyan Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-teal-500/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-navy-600/20 rounded-full filter blur-[90px] animate-pulse pointer-events-none" />

      {/* Modern Technology Interactive SVG Network Grid Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Animated Connecting Mesh Lines */}
          <line x1="10%" y1="15%" x2="25%" y2="35%" stroke="#1e293b" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="20%" y2="65%" stroke="#1e293b" strokeWidth="1" />
          <line x1="20%" y1="65%" x2="45%" y2="75%" stroke="#1e293b" strokeWidth="1" />
          <line x1="45%" y1="75%" x2="50%" y2="40%" stroke="#1e293b" strokeWidth="1" />
          <line x1="50%" y1="40%" x2="25%" y2="35%" stroke="#1e293b" strokeWidth="1" />
          <line x1="50%" y1="40%" x2="75%" y2="25%" stroke="#1e293b" strokeWidth="1" />
          <line x1="75%" y1="25%" x2="85%" y2="60%" stroke="#1e293b" strokeWidth="1" />
          <line x1="85%" y1="60%" x2="55%" y2="80%" stroke="#1e293b" strokeWidth="1" />
          <line x1="45%" y1="75%" x2="55%" y2="80%" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Glowing Node Points */}
          <circle cx="10%" cy="15%" r="3" fill="#14b8a6" />
          <circle cx="25%" cy="35%" r="4" fill="#38bdf8" />
          <circle cx="20%" cy="65%" r="3.5" fill="#14b8a6" />
          <circle cx="45%" cy="75%" r="4.5" fill="#14b8a6" />
          <circle cx="50%" cy="40%" r="6" fill="#0d9488" className="animate-ping" style={{ transformOrigin: '50% 40%' }} />
          <circle cx="50%" cy="40%" r="4" fill="#2dd4bf" />
          <circle cx="75%" cy="25%" r="3" fill="#38bdf8" />
          <circle cx="85%" cy="60%" r="4" fill="#14b8a6" />
          <circle cx="55%" cy="80%" r="3.5" fill="#2dd4bf" />
        </svg>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-8">
        {/* Course Header Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-900 border border-navy-800 text-xs font-semibold rounded-full text-navy-200 font-display">
          <Terminal size={12} className="text-teal-400" />
          <span>HỌC PHẦN: NHẬP MÔN CÔNG NGHỆ SỐ VÀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO</span>
        </div>

        {/* Dynamic Catchy Title */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Khám phá Năng Lực Số <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
              Chìa Khóa Quản Trị Tương Lai
            </span>
          </h1>
          <p className="text-sm sm:text-base text-navy-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Hồ sơ năng lực học thuật tích hợp các chuyên đề chuyển đổi số, tối ưu hóa dữ liệu, ứng dụng AI thông minh và đạo đức công nghệ số của sinh viên Trường Đại học Kinh tế - ĐHQGHN.
          </p>
        </div>

        {/* CTA Button and Secondary Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-7 py-3 bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-navy-950 text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(20,184,166,0.25)] transition-all uppercase tracking-wider font-display cursor-pointer"
            id="btn-hero-cta"
          >
            Trải nghiệm Portfolio <ArrowRight size={14} />
          </button>
          
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-7 py-3 bg-navy-900 hover:bg-navy-800 active:bg-navy-950 text-white text-xs font-bold border border-navy-800 rounded-lg flex items-center justify-center gap-2 transition-all uppercase tracking-wider font-display"
            id="btn-hero-secondary"
          >
            Đọc Câu Chuyện Cá Nhân
          </a>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-16 border-t border-navy-900" id="hero-metrics">
          {[
            { value: '06', label: 'Báo cáo Chuyên đề', sub: 'Interactive Labs' },
            { value: '100%', label: 'Liêm chính học thuật', sub: 'CRAAP Verified' },
            { value: 'UEB', label: 'VNU University', sub: 'QH-2025-E Class' },
            { value: '2026', label: 'Tầm nhìn Số hóa', sub: 'Digital Strategy' }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-4 bg-navy-900/30 border border-navy-900 rounded-2xl">
              <div className="text-lg sm:text-2xl font-extrabold text-teal-400 font-display">{item.value}</div>
              <div className="text-[10px] font-bold text-white uppercase tracking-wider mt-1 font-display">{item.label}</div>
              <div className="text-[9px] text-navy-400 font-mono mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
