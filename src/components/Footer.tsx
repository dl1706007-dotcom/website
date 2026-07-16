import React, { MouseEvent } from 'react';
import { ArrowUp, GraduationCap } from 'lucide-react';
import { personalReflection } from '../data';

export default function Footer() {
  const handleScrollTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-900 py-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-navy-900">
          
          {/* Brand block */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <GraduationCap size={16} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xs text-white tracking-wider font-display uppercase">UEB PORTFOLIO</span>
              <span className="text-[8px] text-teal-400 tracking-widest font-semibold font-mono">{personalReflection.studentClass}</span>
            </div>
          </div>

          {/* Academic Info */}
          <p className="text-[10px] text-navy-400 text-center md:text-right max-w-md leading-relaxed font-sans">
            Sản phẩm thực hành môn học <span className="text-white font-semibold">Công nghệ số</span> • Bản quyền học thuật thuộc về sinh viên <span className="text-teal-400 font-semibold">{personalReflection.studentName}</span>, {personalReflection.studentClass} {personalReflection.studentUni}.
          </p>

          {/* Back to top */}
          <button
            onClick={handleScrollTop}
            className="p-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 border border-navy-800 text-teal-400 hover:text-teal-300 transition-colors flex items-center justify-center cursor-pointer"
            title="Cuộn lên đầu trang"
            id="btn-scroll-top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[10px] text-navy-500 font-mono">
          <span>© 2026 {personalReflection.studentName} (UEB). All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-teal-400 transition-colors">Giới thiệu</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Dự án</a>
            <a href="#reflection" className="hover:text-teal-400 transition-colors">Chiêm nghiệm</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
