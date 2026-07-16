import React, { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FileManagement from './projects/FileManagement';
import InformationRetrieval from './projects/InformationRetrieval';
import PromptEngineering from './projects/PromptEngineering';
import OnlineCollaboration from './projects/OnlineCollaboration';
import AIContentCreation from './projects/AIContentCreation';
import AIEthics from './projects/AIEthics';
import { FolderGit2, Search, Sparkles, Kanban, Wand2, Scale, ExternalLink, GraduationCap, ChevronRight, X } from 'lucide-react';

interface ProjectCard {
  id: number;
  num: string;
  title: string;
  desc: string;
  icon: ComponentType<any>;
  tag: string;
  docUrl?: string;
}

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<number>(1);
  const [isSandboxOpen, setIsSandboxOpen] = useState<boolean>(false);

  const projectCards: ProjectCard[] = [
    {
      id: 1,
      num: 'BÀI 01',
      title: 'Thao tác cơ bản với tệp tin và thư mục',
      desc: 'Bài tập 1 của mục 1.4: Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.',
      icon: FolderGit2,
      tag: 'Cấu trúc & Lưu trữ',
      docUrl: 'https://docs.google.com/document/d/1VzA4Lvswkc_Pr4yr3C69IwiBnGKfHShP/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    },
    {
      id: 2,
      num: 'BÀI 02',
      title: 'Tìm kiếm và đánh giá thông tin học thuật',
      desc: 'Bài tập 2 của mục 2.4: Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.',
      icon: Search,
      tag: 'Thu thập & Đánh giá',
      docUrl: 'https://docs.google.com/document/d/1c-iLsjCQa5c4jEZPSjpMdbMYG_a6I2Hr/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    },
    {
      id: 3,
      num: 'BÀI 03',
      title: 'Viết Prompt hiệu quả cho các tác vụ học tập',
      desc: 'Bài tập 2 của mục 3.4: Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.',
      icon: Sparkles,
      tag: 'Prompt Engineering',
      docUrl: 'https://docs.google.com/document/d/1tCkzCGIeoPcLsyIfuf2ibgYSmlA1_397/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    },
    {
      id: 4,
      num: 'BÀI 04',
      title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
      desc: 'Bài tập 3 của mục 4.4: Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.',
      icon: Kanban,
      tag: 'Kanban & Collaboration',
      docUrl: 'https://docs.google.com/document/d/1ivV-PUyW-yG1Ao9wGaw_Vwd-L3PfVcaQ/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    },
    {
      id: 5,
      num: 'BÀI 05',
      title: 'Báo cáo dự án sáng tạo nội dung "AI & Bước ngoặt giáo dục ngoại ngữ"',
      desc: 'Bài tập 2 của mục 5.4: Trưng bày sản phẩm báo cáo dự án sáng tạo nội dung học thuật kết hợp các công cụ Trí tuệ nhân tạo.',
      icon: Wand2,
      tag: 'AI & Sáng tạo nội dung',
      docUrl: 'https://docs.google.com/document/d/1Yaf0lDNDUHNrmiAodVsPA9m7N8Lyq3bF/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    },
    {
      id: 6,
      num: 'BÀI 06',
      title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu khoa học',
      desc: 'Bài tập 4 của mục 6.4: Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.',
      icon: Scale,
      tag: 'Trách nhiệm số & Đạo đức',
      docUrl: 'https://docs.google.com/document/d/1GGSdHDrGWCI265IFQJjTi8_-K_hUPLC3/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true'
    }
  ];

  const renderActiveProject = () => {
    switch (activeProjectId) {
      case 1: return <FileManagement />;
      case 2: return <InformationRetrieval />;
      case 3: return <PromptEngineering />;
      case 4: return <OnlineCollaboration />;
      case 5: return <AIContentCreation />;
      case 6: return <AIEthics onClose={() => setIsSandboxOpen(false)} />;
      default: return <FileManagement />;
    }
  };

  const activeProjectInfo = projectCards.find(p => p.id === activeProjectId);

  return (
    <section id="projects" className="py-20 bg-navy-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Title */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-xs font-bold text-teal-400 font-display">
            <GraduationCap size={13} /> SẢN PHẨM NĂNG LỰC SỐ (PORTFOLIO LABS)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
            Hệ thống 06 Chuyên đề Thực hành Năng lực số
          </h2>
          <p className="text-sm text-navy-300 leading-relaxed">
            Các học phần thực hành cốt lõi được nghiên cứu và thiết kế tỉ mỉ, đáp ứng chuẩn kỹ năng số quốc tế tại Trường Đại học Kinh tế - ĐHQGHN (VNU-UEB). Click vào từng thẻ để trải nghiệm mô phỏng thực tế.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          {projectCards.map((p) => {
            const Icon = p.icon;
            const isCurrentlySelected = activeProjectId === p.id && isSandboxOpen;
            return (
              <div
                key={p.id}
                onClick={() => {
                  setActiveProjectId(p.id);
                  setIsSandboxOpen(true);
                }}
                className={`cursor-pointer group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isCurrentlySelected
                    ? 'bg-navy-900 border-teal-500 shadow-[0_8px_30px_rgba(20,184,166,0.15)] scale-[1.01]'
                    : 'bg-navy-900/40 border-navy-800/80 hover:border-teal-500/50 hover:bg-navy-900/60 hover:shadow-[0_4px_20px_rgba(45,212,191,0.05)]'
                }`}
                id={`project-card-trigger-${p.id}`}
              >
                {/* Decorative tech gradient light */}
                {isCurrentlySelected && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/10 rounded-bl-full blur-xl pointer-events-none" />
                )}

                <div className="space-y-4">
                  {/* Top line metadata */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-teal-400 tracking-wider">
                      {p.num}
                    </span>
                    <span className="text-[10px] font-semibold text-navy-400 font-display">
                      {p.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl transition-all ${
                      isCurrentlySelected ? 'bg-teal-500 text-navy-950' : 'bg-navy-800 text-navy-300 group-hover:bg-navy-750 group-hover:text-teal-400'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white group-hover:text-teal-300 transition-colors font-display">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-navy-400 mt-1">
                        Học phần kiểm định xuất sắc
                      </p>
                    </div>
                  </div>

                  {/* Desc */}
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>

                {/* Bottom interactive action */}
                <div className="mt-6 pt-4 border-t border-navy-800/60 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
                      {isCurrentlySelected ? 'Đang mở Sandbox' : 'Mở trải nghiệm'}
                    </span>
                    <ChevronRight size={14} className={`transition-transform duration-300 ${
                      isCurrentlySelected ? 'translate-x-1 text-teal-400' : 'text-navy-500 group-hover:translate-x-1 group-hover:text-teal-400'
                    }`} />
                  </div>

                  {p.docUrl && (
                    <a
                      href={p.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 hover:text-teal-300 rounded-lg border border-teal-500/20 hover:border-teal-500/40 hover:scale-[1.03] transition-all duration-300 font-medium font-sans cursor-pointer"
                    >
                      <span>Báo cáo bài tập</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Sandbox Modal */}
        <AnimatePresence>
          {isSandboxOpen && activeProjectInfo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSandboxOpen(false)}
                className="absolute inset-0 bg-navy-950/90 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative w-full max-w-6xl bg-navy-900 border border-teal-500/20 rounded-3xl shadow-[0_20px_50px_rgba(20,184,166,0.15)] overflow-hidden flex flex-col max-h-[90vh] md:max-h-[94vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsSandboxOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-navy-950/85 hover:bg-navy-800 text-navy-400 hover:text-white transition-all cursor-pointer border border-navy-800 hover:border-teal-500/30 z-30"
                  title="Đóng Sandbox"
                >
                  <X size={18} />
                </button>

                {/* Header Control Bar */}
                <div className="bg-navy-950 px-6 py-5 border-b border-navy-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 pr-14">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
                        <span>{activeProjectInfo.num}: Sandbox Lab</span>
                        <span className="text-[10px] sm:text-xs text-navy-400 font-normal normal-case font-sans hidden sm:inline">• Thực hành tương tác</span>
                      </h4>
                      <p className="text-[10px] sm:text-xs text-navy-400 font-sans mt-0.5">
                        Môi trường giả lập trực quan năng lực số của sinh viên Đoàn Ngọc Linh
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800 self-start sm:self-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="font-mono text-[10px] text-teal-300 uppercase tracking-widest font-semibold">
                      {activeProjectInfo.tag}
                    </span>
                  </div>
                </div>

                {/* Sandbox Body Content */}
                <div className="p-6 md:p-8 overflow-y-auto bg-navy-950/20 flex-grow scrollbar-thin scrollbar-thumb-navy-800">
                  {renderActiveProject()}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
