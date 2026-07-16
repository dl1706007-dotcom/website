import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  X, 
  BookOpen, 
  ExternalLink, 
  Layers, 
  Zap, 
  Info, 
  Trello, 
  HardDrive, 
  FileText, 
  Video, 
  AlertTriangle, 
  Check, 
  Calendar, 
  User, 
  Clock,
  Briefcase,
  Share2,
  Users,
  Folder,
  MessageSquare,
  CheckCircle,
  Star
} from 'lucide-react';

interface KanbanTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tool: string;
}

export default function OnlineCollaboration() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'tools' | 'challenges'>('tools');

  const handleOpenFullImage = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<html><head><title>Infographic Bài 04: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm</title></head><body style="margin:0; background:#020b18; display:flex; justify-content:center; align-items:center; min-height:100vh;"><img src="${INFOGRAPHIC_B4_BASE64}" style="max-width: 100%; max-height: 100vh; object-fit: contain;" /></body></html>`
      );
      newWindow.document.close();
    } else {
      const link = document.createElement('a');
      link.href = INFOGRAPHIC_B4_BASE64;
      link.target = '_blank';
      link.click();
    }
  };

  // Realistic collaborative tasks matching their workspace
  const mockTasks: Record<string, KanbanTask[]> = {
    todo: [
      {
        id: 'task-1',
        title: 'Tóm tắt bài thuyết trình',
        description: 'Tổng hợp tài liệu thảo luận nhóm thành kịch bản thuyết trình chung.',
        assignee: 'Đoàn Ngọc Linh',
        priority: 'medium',
        dueDate: '2026-07-22',
        tool: 'Google Docs'
      },
      {
        id: 'task-2',
        title: 'Thiết kế slide báo cáo',
        description: 'Tạo mẫu slide thuyết trình đồng bộ tone màu Teal/Navy.',
        assignee: 'Thành viên 2',
        priority: 'low',
        dueDate: '2026-07-25',
        tool: 'Google Slides'
      }
    ],
    doing: [
      {
        id: 'task-3',
        title: 'Bản thảo kịch bản nhóm',
        description: 'Cùng biên soạn nội dung trên tệp Docs chung, phân vai phản biện.',
        assignee: 'Cả nhóm',
        priority: 'high',
        dueDate: '2026-07-18',
        tool: 'Google Docs'
      }
    ],
    review: [
      {
        id: 'task-4',
        title: 'Biên bản họp tuần 3',
        description: 'Ghim biên bản cuộc họp thống nhất đề tài lên kênh thông tin nhóm.',
        assignee: 'Đoàn Ngọc Linh',
        priority: 'high',
        dueDate: '2026-07-16',
        tool: 'Google Docs'
      }
    ],
    done: [
      {
        id: 'task-5',
        title: 'Khởi tạo thư mục dự án',
        description: 'Tạo cây thư mục trên Google Drive và phân quyền cho các thành viên.',
        assignee: 'Đoàn Ngọc Linh',
        priority: 'high',
        dueDate: '2026-07-10',
        tool: 'Google Drive'
      },
      {
        id: 'task-6',
        title: 'Lập bảng nhiệm vụ Trello',
        description: 'Thiết lập danh sách đầu việc, nhãn dán độ ưu tiên và phân công nhân sự.',
        assignee: 'Đoàn Ngọc Linh',
        priority: 'medium',
        dueDate: '2026-07-11',
        tool: 'Trello'
      }
    ]
  };

  const getPriorityBadgeColor = (p: 'low' | 'medium' | 'high') => {
    switch (p) {
      case 'high': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'low': return 'bg-teal-500/10 text-teal-400 border-teal-500/20';
    }
  };

  const getToolIcon = (tool: string) => {
    switch (tool) {
      case 'Trello': return <Trello size={11} className="text-blue-400" />;
      case 'Google Drive': return <HardDrive size={11} className="text-amber-400" />;
      case 'Google Docs': return <FileText size={11} className="text-sky-400" />;
      default: return <Video size={11} className="text-teal-400" />;
    }
  };

  return (
    <div className="space-y-6" id="online-collaboration-project">
      {/* Top Banner Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-navy-900/60 p-5 rounded-2xl border border-navy-800/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
        <div className="space-y-1 pl-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Bài tập 4 • Mục 4.4</span>
            <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
          </div>
          <h4 className="text-base font-bold text-white font-display">
            Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm
          </h4>
          <p className="text-xs text-navy-300">
            Sinh viên thực hiện: <span className="text-teal-300 font-semibold">Đoàn Ngọc Linh</span> — Lớp học phần: <span className="text-teal-300 font-semibold">QH 2025E KTQT 10</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-navy-400 font-mono">Trạng thái:</span>
          <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded border border-teal-500/30 font-mono flex items-center gap-1">
            <CheckCircle2 size={10} /> COMPLIANT
          </span>
        </div>
      </div>

      {/* Main Grid: Visual Simulated Kanban & Info Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Area: Kanban board representation (8 columns on large screens) */}
        <div className="lg:col-span-8 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/10 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <Trello size={14} className="text-teal-500" /> BẢNG CÔNG VIỆC NHÓM GIẢ LẬP (TRELLO SIMULATOR)
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-400 rounded font-mono border border-teal-500/20">
                ACTIVE WORKSPACE
              </span>
            </div>

            {/* Simulated Trello columns */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              
              {/* To Do Column */}
              <div className="bg-navy-900/40 p-3 rounded-xl border border-navy-850 space-y-3">
                <div className="flex items-center justify-between border-b border-navy-800 pb-1.5 mb-1">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider font-display">To Do</span>
                  <span className="text-[10px] bg-navy-950 px-1.5 py-0.5 rounded font-mono text-navy-400">{mockTasks.todo.length}</span>
                </div>
                <div className="space-y-2">
                  {mockTasks.todo.map(t => (
                    <div key={t.id} className="p-2.5 bg-navy-950 rounded-lg border border-navy-800/60 hover:border-sky-500/20 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${getPriorityBadgeColor(t.priority)}`}>
                          {t.priority.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[9px] text-navy-400">
                          {getToolIcon(t.tool)}
                          <span className="font-mono text-[8px]">{t.tool}</span>
                        </div>
                      </div>
                      <h6 className="text-[11px] font-bold text-white font-display leading-snug">{t.title}</h6>
                      <p className="text-[10px] text-navy-400 leading-relaxed line-clamp-2">{t.description}</p>
                      <div className="flex items-center justify-between text-[8px] text-navy-500 pt-1.5 border-t border-navy-900 font-mono">
                        <span className="text-teal-400/80">👤 {t.assignee}</span>
                        <span>📅 {t.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Doing Column */}
              <div className="bg-navy-900/40 p-3 rounded-xl border border-navy-850 space-y-3">
                <div className="flex items-center justify-between border-b border-navy-800 pb-1.5 mb-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider font-display">Doing</span>
                  <span className="text-[10px] bg-navy-950 px-1.5 py-0.5 rounded font-mono text-navy-400">{mockTasks.doing.length}</span>
                </div>
                <div className="space-y-2">
                  {mockTasks.doing.map(t => (
                    <div key={t.id} className="p-2.5 bg-navy-950 rounded-lg border border-amber-500/20 space-y-2 shadow-[0_0_10px_rgba(245,158,11,0.05)] animate-pulse">
                      <div className="flex items-center justify-between">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${getPriorityBadgeColor(t.priority)}`}>
                          {t.priority.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[9px] text-navy-400">
                          {getToolIcon(t.tool)}
                          <span className="font-mono text-[8px]">{t.tool}</span>
                        </div>
                      </div>
                      <h6 className="text-[11px] font-bold text-white font-display leading-snug">{t.title}</h6>
                      <p className="text-[10px] text-navy-400 leading-relaxed line-clamp-2">{t.description}</p>
                      <div className="flex items-center justify-between text-[8px] text-navy-500 pt-1.5 border-t border-navy-900 font-mono">
                        <span className="text-teal-400/80">👤 {t.assignee}</span>
                        <span>📅 {t.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Column */}
              <div className="bg-navy-900/40 p-3 rounded-xl border border-navy-850 space-y-3">
                <div className="flex items-center justify-between border-b border-navy-800 pb-1.5 mb-1">
                  <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider font-display">Review</span>
                  <span className="text-[10px] bg-navy-950 px-1.5 py-0.5 rounded font-mono text-navy-400">{mockTasks.review.length}</span>
                </div>
                <div className="space-y-2">
                  {mockTasks.review.map(t => (
                    <div key={t.id} className="p-2.5 bg-navy-950 rounded-lg border border-navy-800/60 hover:border-purple-500/20 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${getPriorityBadgeColor(t.priority)}`}>
                          {t.priority.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[9px] text-navy-400">
                          {getToolIcon(t.tool)}
                          <span className="font-mono text-[8px]">{t.tool}</span>
                        </div>
                      </div>
                      <h6 className="text-[11px] font-bold text-white font-display leading-snug">{t.title}</h6>
                      <p className="text-[10px] text-navy-400 leading-relaxed line-clamp-2">{t.description}</p>
                      <div className="flex items-center justify-between text-[8px] text-navy-500 pt-1.5 border-t border-navy-900 font-mono">
                        <span className="text-teal-400/80">👤 {t.assignee}</span>
                        <span>📅 {t.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Done Column */}
              <div className="bg-navy-900/40 p-3 rounded-xl border border-navy-850 space-y-3">
                <div className="flex items-center justify-between border-b border-navy-800 pb-1.5 mb-1">
                  <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider font-display">Done</span>
                  <span className="text-[10px] bg-navy-950 px-1.5 py-0.5 rounded font-mono text-navy-400">{mockTasks.done.length}</span>
                </div>
                <div className="space-y-2">
                  {mockTasks.done.map(t => (
                    <div key={t.id} className="p-2.5 bg-navy-950 rounded-lg border border-teal-500/10 hover:border-teal-500/30 transition-all space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-teal-500 rounded-bl" />
                      <div className="flex items-center justify-between">
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border ${getPriorityBadgeColor(t.priority)}`}>
                          {t.priority.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[9px] text-navy-400">
                          {getToolIcon(t.tool)}
                          <span className="font-mono text-[8px]">{t.tool}</span>
                        </div>
                      </div>
                      <h6 className="text-[11px] font-bold text-white/80 line-through font-display leading-snug">{t.title}</h6>
                      <p className="text-[10px] text-navy-500 leading-relaxed line-clamp-2">{t.description}</p>
                      <div className="flex items-center justify-between text-[8px] text-navy-500 pt-1.5 border-t border-navy-900/40 font-mono">
                        <span className="text-teal-500/70">👤 {t.assignee}</span>
                        <span className="flex items-center gap-0.5 text-teal-400"><Check size={10} /> {t.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-navy-800/40 flex items-center justify-between text-[10px] text-navy-400 font-mono">
            <span>Dự án: Đề tài học tập nhóm - Công nghệ số</span>
            <span>Phân quyền Trello: Thành viên nhóm</span>
          </div>
        </div>

        {/* Right Area: Minh chứng thực tế & Interactive Trigger button */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-teal-500" /> MINH CHỨNG THỰC TẾ
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-300 rounded font-mono border border-teal-500/20">
                INFOGRAPHIC
              </span>
            </div>

            {/* Infographic Image Container */}
            <div className="my-5 space-y-4">
              <div 
                className="relative overflow-hidden rounded-xl border border-teal-500/30 bg-navy-900/60 shadow-[0_0_20px_rgba(20,184,166,0.1)] group cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
              >
                <img 
                  src={INFOGRAPHIC_B4_BASE64} 
                  alt="Infographic Bài 04: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-teal-500 text-navy-950 font-bold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={11} /> Phóng to ảnh
                  </span>
                </div>
              </div>

              {/* Source Credit */}
              <div className="text-center text-[11px] text-navy-400 italic">
                Nguồn: Sơ đồ hóa quy trình hợp tác nhóm thực tế &amp; Gemini
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleOpenFullImage}
                  className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-pointer"
                >
                  <ExternalLink size={12} />
                  <span>Mở xem ảnh kích thước đầy đủ</span>
                </button>

                <a
                  href="https://docs.google.com/document/d/1ivV-PUyW-yG1Ao9wGaw_Vwd-L3PfVcaQ/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-navy-900 hover:bg-navy-850 text-teal-400 font-bold rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-teal-500/20 cursor-pointer text-center"
                >
                  <BookOpen size={12} />
                  <span>Xem báo cáo Word đầy đủ (Bài 4)</span>
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-navy-400 text-center italic mt-4 leading-relaxed font-sans max-w-[240px] mx-auto">
              Hình 4: Sơ đồ hệ thống công cụ và các thách thức cộng tác nhóm của Đoàn Ngọc Linh.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800/40 space-y-2">
            {/* Interactive button to trigger Modal details */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 bg-teal-600/10 hover:bg-teal-600/20 text-teal-300 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-teal-500/20 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Khám phá chi tiết Sandbox Bài 4</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Full-Width General Conclusion */}
      <div className="bg-navy-950/60 p-4 rounded-xl border border-navy-800 shadow-md">
        <div className="flex gap-3">
          <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 h-fit">
            <Info size={16} />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white mb-0.5">Kết luận về giải pháp cộng tác nhóm của Linh:</h5>
            <p className="text-xs text-navy-300 leading-relaxed font-sans">
              "Làm chủ hệ thống công cụ cộng tác trực tuyến đám mây (Trello, Drive, Docs, Meet) và áp dụng quy tắc điều hành khoa học giúp xóa tan 100% rào cản địa lý, tối ưu hóa năng suất làm việc nhóm và bảo đảm tiến độ dự án học tập xuất sắc."
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED DIALOG SUB-PAGE MODAL (UX INTERACTION) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-navy-950 border border-navy-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100 z-10"
            >
              {/* Header Modal */}
              <div className="flex items-center justify-between p-6 border-b border-navy-850 bg-navy-900/50">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 uppercase tracking-wider font-mono">
                      BÀI TẬP 4 • MỤC 4.4
                    </span>
                    <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mt-1.5 text-white font-display">
                    Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm
                  </h2>
                  <p className="text-xs text-navy-300 mt-1">
                    Sinh viên thực hiện: <span className="text-teal-400 font-medium">Đoàn Ngọc Linh</span> — Lớp học phần: <span className="text-slate-300">QH 2025E KTQT 10</span>
                  </p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-navy-400 hover:text-white transition-colors cursor-pointer border border-navy-700"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-navy-850 flex-grow">
                
                {/* PHẦN 1: HỆ THỐNG CÔNG CỤ */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display">
                    <Users size={16} />
                    Phần 1: Hệ thống công cụ sử dụng & Cách thiết lập
                  </h3>
                  <p className="text-xs md:text-sm text-navy-200 mb-4 font-sans leading-relaxed">
                    Dự án được quản lý và vận hành trực tuyến thông qua sự phối hợp khoa học giữa 4 công cụ cốt lõi:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Trello */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 hover:border-teal-500/20 transition-all space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                          <Star size={14} />
                        </span>
                        <h4 className="font-bold text-xs md:text-sm text-slate-100 uppercase tracking-wider font-display">Trello (Quản lý nhiệm vụ)</h4>
                      </div>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Thiết lập bảng công việc với các cột trạng thái (To Do, Doing, Review, Done). Sử dụng nhãn dán (Labels) màu sắc để phân loại độ ưu tiên và cài đặt hạn chót (Due date).
                      </p>
                    </div>

                    {/* Google Drive */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 hover:border-teal-500/20 transition-all space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                          <Folder size={14} />
                        </span>
                        <h4 className="font-bold text-xs md:text-sm text-slate-100 uppercase tracking-wider font-display">Google Drive (Lưu trữ)</h4>
                      </div>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Xây dựng hệ thống thư mục khoa học bao gồm: Tài liệu tham khảo, Tài liệu hình ảnh, Bản thảo nhóm, Bản hoàn thiện. Phân quyền truy cập (Chỉ xem/Được chỉnh sửa) rõ ràng cho từng thành viên.
                      </p>
                    </div>

                    {/* Google Docs */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 hover:border-teal-500/20 transition-all space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                          <MessageSquare size={14} />
                        </span>
                        <h4 className="font-bold text-xs md:text-sm text-slate-100 uppercase tracking-wider font-display">Google Docs (Soạn thảo nội dung)</h4>
                      </div>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Dùng để viết kịch bản chung. Tận dụng tính năng Comment để thảo luận trực tiếp và theo dõi Version History để kiểm soát các bản cập nhật.
                      </p>
                    </div>

                    {/* Google Meet */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 hover:border-teal-500/20 transition-all space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                          <Video size={14} />
                        </span>
                        <h4 className="font-bold text-xs md:text-sm text-slate-100 uppercase tracking-wider font-display">Google Meet (Họp trực tuyến)</h4>
                      </div>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Lên lịch họp định kỳ qua Google Calendar, trình bày màn hình và chia sẻ nhanh tài liệu qua khung chat.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PHẦN 2: THÁCH THỨC & GIẢI PHÁP */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display">
                    <AlertTriangle size={16} />
                    Phần 2: Thách thức và Giải pháp quản lý
                  </h3>
                  <p className="text-xs md:text-sm text-navy-200 mb-4 font-sans leading-relaxed">
                    Tài liệu chỉ ra 3 thách thức lớn khi làm việc nhóm và đưa ra hướng giải quyết:
                  </p>
                  
                  <div className="space-y-3.5">
                    {/* Thách thức 1 */}
                    <div className="flex flex-col md:flex-row gap-3 p-4 rounded-xl bg-navy-900/30 border-l-4 border-amber-500 border border-y-navy-850 border-r-navy-850">
                      <div className="md:w-1/3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 font-mono">Thách thức 01</span>
                        <h4 className="font-bold text-xs text-slate-200 mt-0.5 uppercase tracking-wider font-display">Trôi tin nhắn thảo luận</h4>
                      </div>
                      <div className="md:w-2/3 text-xs text-navy-300 leading-relaxed flex items-start gap-2 font-sans">
                        <CheckCircle size={14} className="text-teal-400 mt-0.5 shrink-0" />
                        <span><strong>Giải pháp:</strong> Chủ động tổng hợp ý chính vào file Google Docs "Biên bản họp" và ghim lên kênh chung.</span>
                      </div>
                    </div>

                    {/* Thách thức 2 */}
                    <div className="flex flex-col md:flex-row gap-3 p-4 rounded-xl bg-navy-900/30 border-l-4 border-amber-500 border border-y-navy-850 border-r-navy-850">
                      <div className="md:w-1/3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 font-mono">Thách thức 02</span>
                        <h4 className="font-bold text-xs text-slate-200 mt-0.5 uppercase tracking-wider font-display">Quên hạn chót (Deadline)</h4>
                      </div>
                      <div className="md:w-2/3 text-xs text-navy-300 leading-relaxed flex items-start gap-2 font-sans">
                        <CheckCircle size={14} className="text-teal-400 mt-0.5 shrink-0" />
                        <span><strong>Giải pháp:</strong> Thiết lập Trello tự động gửi email nhắc hẹn hoặc nhắc nhở trực tiếp trước 1 ngày.</span>
                      </div>
                    </div>

                    {/* Thách thức 3 */}
                    <div className="flex flex-col md:flex-row gap-3 p-4 rounded-xl bg-navy-900/30 border-l-4 border-amber-500 border border-y-navy-850 border-r-navy-850">
                      <div className="md:w-1/3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 font-mono">Thách thức 03</span>
                        <h4 className="font-bold text-xs text-slate-200 mt-0.5 uppercase tracking-wider font-display">Xung đột nội dung</h4>
                      </div>
                      <div className="md:w-2/3 text-xs text-navy-300 leading-relaxed flex items-start gap-2 font-sans">
                        <CheckCircle size={14} className="text-teal-400 mt-0.5 shrink-0" />
                        <span><strong>Giải pháp:</strong> Thống nhất quy trình để lại nhận xét (Comment) trước khi trực tiếp thay đổi văn bản.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer Modal */}
              <div className="p-6 border-t border-navy-850 bg-navy-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <p className="text-[11px] text-navy-400 text-center sm:text-left font-sans">
                  * Nhấp vào nút bên cạnh để xem toàn bộ minh chứng quy trình cộng tác của bài 4.
                </p>
                <a
                  href="https://docs.google.com/document/d/1ivV-PUyW-yG1Ao9wGaw_Vwd-L3PfVcaQ/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/15 transition-all hover:-translate-y-0.5 duration-300"
                >
                  <span>Xem báo cáo Word đầy đủ (Bài 4)</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ZOOMED INFOGRAPHIC LIGHTBOX MODAL */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomOpen(false)}
              className="absolute inset-0 cursor-zoom-out"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-6xl w-full bg-navy-900 border border-teal-500/30 rounded-2xl overflow-hidden shadow-2xl p-2 z-10"
            >
              {/* Header inside zoom modal */}
              <div className="flex items-center justify-between p-3 border-b border-navy-850">
                <span className="text-xs font-bold text-teal-400 font-mono">Infographic Bài 04: Sử dụng công cụ hợp tác trực tuyến</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenFullImage}
                    className="px-3 py-1.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ExternalLink size={10} /> Mở tab mới sắc nét
                  </button>
                  <button 
                    onClick={() => setIsZoomOpen(false)} 
                    className="p-1 rounded bg-navy-800 hover:bg-navy-750 text-navy-400 hover:text-white transition-colors border border-navy-700 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Responsive Image content */}
              <div className="p-1 max-h-[82vh] overflow-y-auto flex justify-center items-center">
                <img 
                  src={INFOGRAPHIC_B4_BASE64} 
                  alt="Infographic Bài 4"
                  className="max-w-full max-h-[78vh] object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}


export const INFOGRAPHIC_B4_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDwhLS0gRGVmaW5pdGlvbnMgZm9yIEdyYWRpZW50cywgU2hhZG93cywgYW5kIEZpbHRlcnMgLS0+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDIwYjE4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzA0MWYyZSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDEwZTFhIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2FyZC1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwODJhM2QiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAzMTYyMiIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InRyZWxsby1jYXJkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFlM2E4YSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGYxNzJhIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWNjZW50LXRlYWwiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzJkZDRiZiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMGQ5NDg4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ2xvdy1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzE0YjhhNiIgc3RvcC1vcGFjaXR5PSIwLjMiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2YjZkNCIgc3RvcC1vcGFjaXR5PSIwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iLTUlIiB5PSItNSUiIHdpZHRoPSIxMTAlIiBoZWlnaHQ9IjExMCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iOCIgc3RkRGV2aWF0aW9uPSI2IiBmbG9vZC1jb2xvcj0iIzAwMDAwMCIgZmxvb2Qtb3BhY2l0eT0iMC41Ii8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9Imdsb3ctdGVhbCIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjYiIHJlc3VsdD0iYmx1ciIgLz4KICAgICAgPGZlQ29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXIiIG9wZXJhdG9yPSJvdmVyIiAvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJnbG93LWVtZXJhbGQiIHg9Ii0yMCUiIHk9Ii0yMCUiIHdpZHRoPSIxNDAlIiBoZWlnaHQ9IjE0MCUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1IiByZXN1bHQ9ImJsdXIiIC8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIgLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KCiAgPCEtLSBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9InVybCgjYmctZ3JhZCkiIC8+CiAgCiAgPCEtLSBTdWJ0bGUgR3JpZCBQYXR0ZXJuIGZvciBIaS1UZWNoIFN0eWxlIC0tPgogIDxnIG9wYWNpdHk9IjAuMDIiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgIDxwYXRoIGQ9Ik0gMCw1MCBMIDE5MjAsNTAgTSAwLDEwMCBMIDE5MjAsMTAwIE0gMCwxNTAgTCAxOTIwLDE1MCBNIDAsMjAwIEwgMTkyMCwyMDAgTSAwLDI1MCBMIDE5MjAsMjUwIE0gMCwzMDAgTCAxOTIwLDMwMCBNIDAsMzUwIEwgMTkyMCwzNTAgTSAwLDQwMCBMIDE5MjAsNDAwIE0gMCw0NTAgTCAxOTIwLDQ1MCBNIDAsNTAwIEwgMTkyMCw1MDAgTSAwLDU1MCBMIDE5MjAsNTUwIE0gMCw2MDAgTCAxOTIwLDYwMCBNIDAsNjUwIEwgMTkyMCw2NTAgTSAwLDcwMCBMIDE5MjAsNzAwIE0gMCw3NTAgTCAxOTIwLDc1MCBNIDAsODAwIEwgMTkyMCw4MDAgTSAwLDg1MCBMIDE5MjAsODUwIE0gMCw5MDAgTCAxOTIwLDkwMCBNIDAsOTUwIEwgMTkyMCw5NTAgTSAwLDEwMDAgTCAxOTIwLDEwMDAgTSAwLDEwNTAgTCAxOTIwLDEwNTAiIC8+CiAgICA8cGF0aCBkPSJNIDUwLDAgTCA1MCwxMDgwIE0gMTAwLDAgTCAxMDAsMTA4MCBNIDE1MCwwIEwgMTUwLDEwODAgTSAyMDAsMCBMIDIwMCwxMDgwIE0gMjUwLDAgTCAyNTAsMTA4MCBNIDMwMCwwIEwgMzAwLDEwODAgTSAzNTAsMCBMIDM1MCwxMDgwIE0gNDAwLDAgTCA0MDAsMTA4MCBNIDQ1MCwwIEwgNDUwLDEwODAgTSA1MDAsMCBMIDUwMCwxMDgwIE0gNTUwLDAgTCA1NTAsMTA4MCBNIDYwMCwwIEwgNjAwLDEwODAgTSA2NTAsMCBMIDY1MCwxMDgwIE0gNzAwLDAgTCA3MDAsMTA4MCBNIDc1MCwwIEwgNzUwLDEwODAgTSA4MDAsMCBMIDgwMCwxMDgwIE0gODUwLDAgTCA4NTAsMTA4MCBNIDkwMCwwIEwgOTAwLDEwODAgTSA5NTAsMCBMIDk1MCwxMDgwIE0gMTAwMCwwIEwgMTAwMCwxMDgwIE0gMTA1MCwwIEwgMTA1MCwxMDgwIE0gMTEwMCwwIEwgMTEwMCwxMDgwIE0gMTE1MCwwIEwgMTE1MCwxMDgwIE0gMTIwMCwwIEwgMTIwMCwxMDgwIE0gMTI1MCwwIEwgMTI1MCwxMDgwIE0gMTMwMCwwIEwgMTMwMCwxMDgwIE0gMTM1MCwwIEwgMTM1MCwxMDgwIE0gMTQwMCwwIEwgMTQwMCwxMDgwIE0gMTQ1MCwwIEwgMTQ1MCwxMDgwIE0gMTUwMCwwIEwgMTUwMCwxMDgwIE0gMTU1MCwwIEwgMTU1MCwxMDgwIE0gMTYwMCwwIEwgMTYwMCwxMDgwIE0gMTY1MCwwIEwgMTY1MCwxMDgwIE0gMTcwMCwwIEwgMTcwMCwxMDgwIE0gMTc1MCwwIEwgMTc1MCwxMDgwIE0gMTgwMCwwIEwgMTgwMCwxMDgwIE0gMTg1MCwwIEwgMTg1MCwxMDgwIE0gMTkwMCwwIEwgMTkwMCwxMDgwIiAvPgogIDwvZz4KCiAgPCEtLSBHbG93aW5nIGJhY2tncm91bmQgYmxvYnMgLS0+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIxNTAiIGZpbGw9InVybCgjZ2xvdy1ncmFkKSIgb3BhY2l0eT0iMC4zIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgLz4KICA8Y2lyY2xlIGN4PSIxNzAwIiBjeT0iODAwIiByPSIyMDAiIGZpbGw9InVybCgjZ2xvdy1ncmFkKSIgb3BhY2l0eT0iMC4yIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgLz4KCiAgPCEtLSBNQUlOIFRJVExFIEhFQURFUiAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93KSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iOTUiIGZpbGw9InJnYmEoMiwgMTEsIDI0LCAwLjgpIiAvPgogICAgPGxpbmUgeDE9IjAiIHkxPSI5NSIgeDI9IjE5MjAiIHkyPSI5NSIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC42IiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgLz4KICAgIAogICAgPHRleHQgeD0iOTYwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgbGV0dGVyLXNwYWNpbmc9IjEiPlPhu6wgROG7pE5HIEPDlE5HIEPhu6QgSOG7olAgVMOBQyBUUuG7sEMgVFVZ4bq+TiBDSE8gROG7sCDDgU4gTkjDk008L3RleHQ+CiAgICA8dGV4dCB4PSI5NjAiIHk9IjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIzNiIgbGV0dGVyLXNwYWNpbmc9IjEiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiBvcGFjaXR5PSIwLjUiPlPhu6wgROG7pE5HIEPDlE5HIEPhu6QgSOG7olAgVMOBQyBUUuG7sEMgVFVZ4bq+TiBDSE8gROG7sCDDgU4gTkjDk008L3RleHQ+CiAgPC9nPgoKICA8IS0tIENPTFVNTiBJIC0gMS4gSOG7hiBUSOG7kE5HIEPDlE5HIEPhu6QgJiBDw4FDSCBUSEnhur5UIEzhuqxQIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCAxMjApIiBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIE1haW4gT3V0ZXIgQm94IC0tPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI4OTAiIHJ4PSIyMCIgZmlsbD0idXJsKCNjYXJkLWdyYWQpIiBzdHJva2U9IiMxNGI4YTYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI4OTAiIHJ4PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC4yNSIgZmlsdGVyPSJ1cmwoI2dsb3ctdGVhbCkiIC8+CiAgICAKICAgIDwhLS0gVGl0bGUgU2VjdGlvbiBIZWFkZXIgLS0+CiAgICA8dGV4dCB4PSI0MCIgeT0iNDUiIGZpbGw9IiMyZGQ0YmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjQiIGxldHRlci1zcGFjaW5nPSIxIj4xLiBI4buGIFRI4buQTkcgQ8OUTkcgQ+G7pCAmYW1wOyBDw4FDSCBUSEnhur5UIEzhuqxQPC90ZXh0PgogICAgPGxpbmUgeDE9IjQwIiB5MT0iNTgiIHgyPSI0NTAiIHkyPSI1OCIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNSIgLz4KCiAgICA8IS0tIDEuMSBUUkVMTE8gKFRvcCBMZWZ0KSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCA4NSkiPgogICAgICA8cmVjdCB3aWR0aD0iNDEwIiBoZWlnaHQ9IjM2MCIgcng9IjE2IiBmaWxsPSIjMDQxNTIyIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICA8cmVjdCB3aWR0aD0iNDEwIiBoZWlnaHQ9IjQyIiByeD0iMTYiIGZpbGw9IiMxZTNhOGEiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgPHRleHQgeD0iMjAiIHk9IjI4IiBmaWxsPSIjOTNjNWZkIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4Ij5UUkVMTE8gPHRzcGFuIGZvbnQtd2VpZ2h0PSI1MDAiIGZpbGw9IiNjYmQ1ZTEiIGZvbnQtc2l6ZT0iMTUiPihRdeG6o24gbMO9IG5oaeG7h20gduG7pSk8L3RzcGFuPjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gSW5zaWRlIEthbmJhbiBTaW11bGF0aW9uIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSwgNjApIj4KICAgICAgICA8IS0tIDQgQ29sdW1ucyAtLT4KICAgICAgICA8IS0tIFRvIERvIC0tPgogICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI4NSIgaGVpZ2h0PSIyMzAiIHJ4PSI2IiBmaWxsPSIjMGIxZTJkIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8dGV4dCB4PSI0MiIgeT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjExIj5D4bqnbiBsw6BtPC90ZXh0PgogICAgICAgIDxyZWN0IHg9IjYiIHk9IjI4IiB3aWR0aD0iNzMiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjMGYxNzJhIiAvPgogICAgICAgIDxyZWN0IHg9IjEyIiB5PSIzNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjQiIHJ4PSIxIiBmaWxsPSIjZWY0NDQ0IiAvPgogICAgICAgIDxyZWN0IHg9IjEyIiB5PSI0MiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjIiIGZpbGw9IiM0NzU1NjkiIC8+CiAgICAgICAgPHJlY3QgeD0iMTIiIHk9IjQ4IiB3aWR0aD0iMzUiIGhlaWdodD0iMiIgZmlsbD0iIzQ3NTU2OSIgLz4KICAgICAgICAKICAgICAgICA8IS0tIERvaW5nIC0tPgogICAgICAgIDxyZWN0IHg9Ijk1IiB5PSIwIiB3aWR0aD0iODUiIGhlaWdodD0iMjMwIiByeD0iNiIgZmlsbD0iIzBiMWUyZCIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgPHRleHQgeD0iMTM3IiB5PSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y1OWUwYiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTEiPsSQYW5nIGzDoG08L3RleHQ+CiAgICAgICAgPHJlY3QgeD0iMTAxIiB5PSIyOCIgd2lkdGg9IjczIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzBmMTcyYSIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjAuNSIgLz4KICAgICAgICA8cmVjdCB4PSIxMDciIHk9IjM0IiB3aWR0aD0iMjAiIGhlaWdodD0iNCIgcng9IjEiIGZpbGw9IiMzYjgyZjYiIC8+CiAgICAgICAgPHJlY3QgeD0iMTA3IiB5PSI0MiIgd2lkdGg9IjU1IiBoZWlnaHQ9IjIiIGZpbGw9IiM0NzU1NjkiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYwIiBjeT0iNTYiIHI9IjQiIGZpbGw9IiNmNTllMGIiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBSZXZpZXcgLS0+CiAgICAgICAgPHJlY3QgeD0iMTkwIiB5PSIwIiB3aWR0aD0iODUiIGhlaWdodD0iMjMwIiByeD0iNiIgZmlsbD0iIzBiMWUyZCIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgPHRleHQgeD0iMjMyIiB5PSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2E4NTVmNyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTEiPlhlbSB4w6l0PC90ZXh0PgogICAgICAgIDxyZWN0IHg9IjE5NiIgeT0iMjgiIHdpZHRoPSI3MyIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiMwZjE3MmEiIC8+CiAgICAgICAgPHJlY3QgeD0iMjAyIiB5PSIzNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjQiIHJ4PSIxIiBmaWxsPSIjYTg1NWY3IiAvPgogICAgICAgIDxyZWN0IHg9IjIwMiIgeT0iNDIiIHdpZHRoPSI1NSIgaGVpZ2h0PSIyIiBmaWxsPSIjNDc1NTY5IiAvPgoKICAgICAgICA8IS0tIERvbmUgLS0+CiAgICAgICAgPHJlY3QgeD0iMjg1IiB5PSIwIiB3aWR0aD0iODUiIGhlaWdodD0iMjMwIiByeD0iNiIgZmlsbD0iIzBiMWUyZCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgPHRleHQgeD0iMzI3IiB5PSIxOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTEiPkhvw6BuIHRow6BuaDwvdGV4dD4KICAgICAgICA8cmVjdCB4PSIyOTEiIHk9IjI4IiB3aWR0aD0iNzMiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjMGYxNzJhIiAvPgogICAgICAgIDxyZWN0IHg9IjI5NyIgeT0iMzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSI0IiByeD0iMSIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICA8cmVjdCB4PSIyOTciIHk9IjQyIiB3aWR0aD0iNTUiIGhlaWdodD0iMiIgZmlsbD0iIzQ3NTU2OSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjAuNSIgLz4KICAgICAgICA8cGF0aCBkPSJNMzQ2LDUyIEwzNTAsNTYgTDM1Niw1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgICAgICAgPCEtLSBQcmlvcml0eSBpbmRpY2F0b3IgZ3JhcGhpYyBib3R0b20gbGVmdCBvZiBUcmVsbG8gYmxvY2sgLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDE4MCkiPgogICAgICAgICAgPCEtLSBwcmlvcml0eSBsYWJlbCB0YWcgLS0+CiAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIxMiIgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2VmNDQ0NCIgb3BhY2l0eT0iMC44IiAvPgogICAgICAgICAgPHRleHQgeD0iNDAiIHk9IjI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMSI+xJDhu5kgxrB1IHRpw6puPC90ZXh0PgogICAgICAgICAgPHBhdGggZD0iTS04LDI0IEwwLDE2IEwwLDMyIFoiIGZpbGw9IiNlZjQ0NDQiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgICAgIDxjaXJjbGUgY3g9Ii0xMiIgY3k9IjI0IiByPSIyIiBmaWxsPSIjZWY0NDQ0IiAvPgogICAgICAgIDwvZz4KCiAgICAgICAgPCEtLSBEZWFkbGluZSBpbmRpY2F0b3IgZ3JhcGhpYyBib3R0b20gcmlnaHQgb2YgVHJlbGxvIGJsb2NrIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4MCwgMTgwKSI+CiAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIxMiIgd2lkdGg9IjgwIiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiMxZTI5M2IiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgICA8dGV4dCB4PSI0MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmNTllMGIiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJibGFjayIgZm9udC1zaXplPSIxMCI+SOG6oW4gY2jDs3Q8L3RleHQ+CiAgICAgICAgICA8IS0tIHNtYWxsIGNsb2NrIGljb24gLS0+CiAgICAgICAgICA8Y2lyY2xlIGN4PSItMTAiIGN5PSIyNCIgcj0iOCIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9Ii0xMCwyNCAtMTAsMjAgLTcsMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEJvdHRvbSBkZXNjcmlwdGlvbiAtLT4KICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMzE1IiB4Mj0iMzk1IiB5Mj0iMzE1IiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPHRleHQgeD0iMjAiIHk9IjM0MCIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyI+QuG6o25nIHBow6JuIGPDtG5nLCBwaMOibiBj4bqlcCDEkeG7mSDGsHUgdGnDqm4gJmFtcDsgdGjhu51pIGdpYW4gaG/DoG4gdGjDoG5oPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMS4yIEdPT0dMRSBEUklWRSAoVG9wIFJpZ2h0KSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3MCwgODUpIj4KICAgICAgPHJlY3Qgd2lkdGg9IjQxMCIgaGVpZ2h0PSIzNjAiIHJ4PSIxNiIgZmlsbD0iIzA0MTUyMiIgc3Ryb2tlPSIjZWFiMzA4IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgPHJlY3Qgd2lkdGg9IjQxMCIgaGVpZ2h0PSI0MiIgcng9IjE2IiBmaWxsPSIjNzEzZjEyIiBzdHJva2U9IiNlYWIzMDgiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIyOCIgZmlsbD0iI2ZlZjA4YSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+R09PR0xFIERSSVZFIDx0c3BhbiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjY2JkNWUxIiBmb250LXNpemU9IjE1Ij4oTMawdSB0cuG7ryk8L3RzcGFuPjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gQmlnIENsb3VkIE91dGxpbmUgd2l0aCBmb2xkZXJzIGluc2lkZSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUsIDYwKSI+CiAgICAgICAgPHBhdGggZD0iTTUwLDE1MCBBNDAsNDAgMCAwLDEgODAsODAgQTU1LDU1IDAgMCwxIDE4MCw2MCBBNDUsNDUgMCAwLDEgMjMwLDEwMCBBNDAsNDAgMCAwLDEgMjYwLDE1MCBaIiBmaWxsPSIjMGYyYjNlIiBzdHJva2U9IiMwZWE1ZTkiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjYiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiAvPgogICAgICAgIDxwYXRoIGQ9Ik01MCwxNTAgTDI2MCwxNTAiIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuNiIgLz4KICAgICAgICAKICAgICAgICA8IS0tIEZvbGRlciAxOiBUw6BpIGxp4buHdSB0aGFtIGto4bqjbyAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NSwgOTUpIj4KICAgICAgICAgIDxyZWN0IHg9Ii0zMCIgeT0iLTE4IiB3aWR0aD0iNjAiIGhlaWdodD0iMzYiIHJ4PSI0IiBmaWxsPSIjZWFiMzA4IiBvcGFjaXR5PSIwLjkiIC8+CiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9Ii0zMCwtMTggLTE1LC0yNSA1LC0yNSAxMCwtMTgiIGZpbGw9IiNjYThhMDQiIC8+CiAgICAgICAgICA8dGV4dCB4PSIwIiB5PSIzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTAiPlTDoGkgbGnhu4d1IHRoYW0ga2jhuqNvPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICAKICAgICAgICA8IS0tIEZvbGRlciAyOiBUw6BpIGxp4buHdSBow6xuaCDhuqNuaCAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTUsIDk1KSI+CiAgICAgICAgICA8cmVjdCB4PSItMzAiIHk9Ii0xOCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjM2IiByeD0iNCIgZmlsbD0iI2VhYjMwOCIgb3BhY2l0eT0iMC45IiAvPgogICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSItMzAsLTE4IC0xNSwtMjUgNSwtMjUgMTAsLTE4IiBmaWxsPSIjY2E4YTA0IiAvPgogICAgICAgICAgPHRleHQgeD0iMCIgeT0iMzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjEwIj5Uw6BpIGxp4buHdSBow6xuaCDhuqNuaDwvdGV4dD4KICAgICAgICA8L2c+CgogICAgICAgIDwhLS0gRm9sZGVyIDM6IELhuqNuIHRo4bqjbyBuaMOzbSAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAsIDE4NSkiPgogICAgICAgICAgPHJlY3QgeD0iLTMwIiB5PSItMTgiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzNiIgcng9IjQiIGZpbGw9IiMxMGI5ODEiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iLTMwLC0xOCAtMTUsLTI1IDUsLTI1IDEwLC0xOCIgZmlsbD0iIzA1OTY2OSIgLz4KICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9IjMyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMCI+QuG6o24gdGjhuqNvIG5ow7NtPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICAKICAgICAgICA8IS0tIEZvbGRlciA0OiBC4bqjbiBob8OgbiB0aGnhu4duIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMCwgMTg1KSI+CiAgICAgICAgICA8cmVjdCB4PSItMzAiIHk9Ii0xOCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjM2IiByeD0iNCIgZmlsbD0iI2VmNDQ0NCIgb3BhY2l0eT0iMC44IiAvPgogICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSItMzAsLTE4IC0xNSwtMjUgNSwtMjUgMTAsLTE4IiBmaWxsPSIjZGMyNjI2IiAvPgogICAgICAgICAgPHRleHQgeD0iMCIgeT0iMzIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjEwIj5C4bqjbiBob8OgbiB0aGnhu4duPC90ZXh0PgogICAgICAgIDwvZz4KCiAgICAgICAgPCEtLSBQZXJtaXNzaW9ucyBrZXkvbG9jayAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjAsIDI0MCkiPgogICAgICAgICAgPHJlY3QgeD0iLTcwIiB5PSItMTUiIHdpZHRoPSIxNDAiIGhlaWdodD0iMzAiIHJ4PSIxNSIgZmlsbD0iIzAyMGIxOCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICAgIDxjaXJjbGUgY3g9Ii00NSIgY3k9IjAiIHI9IjgiIGZpbGw9IiMxMGI5ODEiIC8+CiAgICAgICAgICA8cGF0aCBkPSItNDUsLTQgTC00NSwtMSBBMywzIDAgMCwxIC00MiwyIEwtNDIsMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDIwYjE4IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICAgIDx0ZXh0IHg9IjEyIiB5PSI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMSI+UGjDom4gcXV54buBbiB0cnV5IGPhuq1wPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBCb3R0b20gZGVzY3JpcHRpb24gLS0+CiAgICAgIDxsaW5lIHgxPSIxNSIgeTE9IjMxNSIgeDI9IjM5NSIgeTI9IjMxNSIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzNDAiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiPkjhu4cgdGjhu5FuZyBow7NhIGThu68gbGnhu4d1LCBsxrB1IHRy4buvIHThuq1wIHRydW5nICZhbXA7IHBow6JuIGNoaWEgdmFpIHRyw7IgcsO1IHLDoG5nPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gMS4zIEdPT0dMRSBET0NTIChCb3R0b20gTGVmdCkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgNDc1KSI+CiAgICAgIDxyZWN0IHdpZHRoPSI0MTAiIGhlaWdodD0iMzgwIiByeD0iMTYiIGZpbGw9IiMwNDE1MjIiIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIDxyZWN0IHdpZHRoPSI0MTAiIGhlaWdodD0iNDIiIHJ4PSIxNiIgZmlsbD0iIzAzNjlhMSIgc3Ryb2tlPSIjMGVhNWU5IiBzdHJva2Utd2lkdGg9IjEuNSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMjgiIGZpbGw9IiM3ZGQzZmMiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTgiPkdPT0dMRSBET0NTIDx0c3BhbiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjY2JkNWUxIiBmb250LXNpemU9IjE1Ij4oU2/huqFuIHRo4bqjbyk8L3RzcGFuPjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gRG9jcyBEb2N1bWVudCBJbGx1c3RyYXRpb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLCA2NSkiPgogICAgICAgIDwhLS0gRG9jdW1lbnQgcGFnZSBiYWNrZ3JvdW5kIHNoZWV0IC0tPgogICAgICAgIDxyZWN0IHg9IjAiIHk9IjEwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIxMCIgcng9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIAogICAgICAgIDwhLS0gVGV4dCBsaW5lcyBpbnNpZGUgZG9jdW1lbnQgLS0+CiAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iNDAiIHgyPSIxNDAiIHkyPSI0MCIgc3Ryb2tlPSIjMGVhNWU5IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSI2NSIgeDI9IjEyMCIgeTI9IjY1IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgIDxsaW5lIHgxPSIyMCIgeTE9Ijg1IiB4Mj0iMTQwIiB5Mj0iODUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMTA1IiB4Mj0iMTEwIiB5Mj0iMTA1IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgIDxsaW5lIHgxPSIyMCIgeTE9IjEyNSIgeDI9IjEzNSIgeTI9IjEyNSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSIxNDUiIHgyPSIxNDAiIHkyPSIxNDUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMTY1IiB4Mj0iOTAiIHkyPSIxNjUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBDb21tZW50IGJ1YmJsZSBwb2ludGluZyB0byB0ZXh0IC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NSwgNzUpIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwtMTUgTDEwMCwtMTUgQTgsOCAwIDAsMSAxMDgsLTcgTDEwOCwzNSBBOCw4IDAgMCwxIDEwMCw0MyBMMzUsNDMgTDE1LDU4IEwxNSw0MyBMMTAsNDMgQTgsOCAwIDAsMSAyLDM1IEwyLC03IEE4LDggMCAwLDEgMTAsLTE1IFoiIGZpbGw9IiNmOTczMTYiIHN0cm9rZT0iI2VhNTgwYyIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgICAgPHRleHQgeD0iNTUiIHk9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjExIj5Db21tZW50PC90ZXh0PgogICAgICAgICAgPHRleHQgeD0iNTUiIHk9IjI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZlZGQ1IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMCI+xJHhu4MgdGjhuqNvIGx14bqtbjwvdGV4dD4KICAgICAgICA8L2c+CgogICAgICAgIDwhLS0gRHluYW1pYyBlZGl0cy9wZW4gaWxsdXN0cmF0aW9uIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LCAxNzUpIiBzdHJva2U9IiNmYjkyM2MiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSI+CiAgICAgICAgICA8bGluZSB4MT0iMCIgeTE9IjM1IiB4Mj0iNDUiIHkyPSIwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjQ1LDAgNDIsNiAzOCwyIiBmaWxsPSIjZmI5MjNjIiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBIaXN0b3J5IGNoZWNrIGJveCBib3R0b20gb2YgY2FyZCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwLCAyOTApIj4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwIiByeD0iMTUiIGZpbGw9IiMwZjE3MmEiIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPCEtLSBDbG9jayBpY29uIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjciIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iMjAsMTUgMjAsMTAgMjQsMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHRleHQgeD0iMTEwIiB5PSIxOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM4YmRmOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJsYWNrIiBmb250LXNpemU9IjEwIj5WZXJzaW9uIEhpc3RvcnkgxJHhu4Mga2nhu4NtIHNvw6F0IGLhuqNuIGPhuq1wIG5o4bqtdDwvdGV4dD4KICAgICAgPC9nPgoKICAgICAgPCEtLSBCb3R0b20gZGVzY3JpcHRpb24gLS0+CiAgICAgIDxsaW5lIHgxPSIxNSIgeTE9IjMzNSIgeDI9IjM5NSIgeTI9IjMzNSIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgIDx0ZXh0IHg9IjIwIiB5PSIzNjAiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiPkJpw6puIHThuq1wIGvhu4tjaCBi4bqjbiDEkeG7k25nIHRo4budaSwgbMawdSBnaeG7ryBs4buLY2ggc+G7rSBz4butYSDEkeG7lWk8L3RleHQ+CiAgICA8L2c+CgogICAgPCEtLSAxLjQgR09PR0xFIE1FRVQgKEJvdHRvbSBSaWdodCkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzAsIDQ3NSkiPgogICAgICA8cmVjdCB3aWR0aD0iNDEwIiBoZWlnaHQ9IjM4MCIgcng9IjE2IiBmaWxsPSIjMDQxNTIyIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICA8cmVjdCB3aWR0aD0iNDEwIiBoZWlnaHQ9IjQyIiByeD0iMTYiIGZpbGw9IiMwNjRlM2IiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgPHRleHQgeD0iMjAiIHk9IjI4IiBmaWxsPSIjNmVlN2I3IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4Ij5HT09HTEUgTUVFVCA8dHNwYW4gZm9udC13ZWlnaHQ9IjUwMCIgZmlsbD0iI2NiZDVlMSIgZm9udC1zaXplPSIxNSI+KEjhu41wIHRy4buxYyB0dXnhur9uKTwvdHNwYW4+PC90ZXh0PgogICAgICAKICAgICAgPCEtLSBWaWRlbyBjb25mZXJlbmNlIGxheW91dCBkZXNpZ24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLCA3MCkiPgogICAgICAgIDwhLS0gU2NyZWVuIGludGVyZmFjZSAtLT4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzEwIiBoZWlnaHQ9IjE3MCIgcng9IjgiIGZpbGw9IiMwMjBiMTgiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIAogICAgICAgIDwhLS0gVmlkZW8gR3JpZDogNCBib3hlcyAtLT4KICAgICAgICA8IS0tIGJveCAxIC0tPgogICAgICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI3MCIgcng9IjQiIGZpbGw9IiMwZjE3MmEiIC8+CiAgICAgICAgPCEtLSBQZXJzb24gaWNvbiAtLT4KICAgICAgICA8Y2lyY2xlIGN4PSI4MCIgY3k9IjM4IiByPSIxMiIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC43IiAvPgogICAgICAgIDxwYXRoIGQ9Ik02Miw2MCBRODAsNDggOTgsNjAgWiIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC43IiAvPgogICAgICAgIDwhLS0gUGFydGljaXBhbnQgbmFtZSAtLT4KICAgICAgICA8dGV4dCB4PSIyMCIgeT0iNzIiIGZpbGw9IiM2NDc0OGIiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCI+TGluaCAoSG9zdCk8L3RleHQ+CgogICAgICAgIDwhLS0gYm94IDIgLS0+CiAgICAgICAgPHJlY3QgeD0iMTYwIiB5PSIxMCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI3MCIgcng9IjQiIGZpbGw9IiMwZjE3MmEiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjMwIiBjeT0iMzgiIHI9IjEyIiBmaWxsPSIjM2I4MmY2IiBvcGFjaXR5PSIwLjciIC8+CiAgICAgICAgPHBhdGggZD0iTTIxMiw2MCBRMjMwLDQ4IDI0OCw2MCBaIiBmaWxsPSIjM2I4MmY2IiBvcGFjaXR5PSIwLjciIC8+CiAgICAgICAgPHRleHQgeD0iMTcwIiB5PSI3MiIgZmlsbD0iIzY0NzQ4YiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI4Ij5UaMOgbmggdmnDqm4gMjwvdGV4dD4KCiAgICAgICAgPCEtLSBib3ggMyAtLT4KICAgICAgICA8cmVjdCB4PSIxMCIgeT0iOTAiIHdpZHRoPSIxNDAiIGhlaWdodD0iNzAiIHJ4PSI0IiBmaWxsPSIjMGYxNzJhIiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjgwIiBjeT0iMTE4IiByPSIxMiIgZmlsbD0iI2VhYjMwOCIgb3BhY2l0eT0iMC43IiAvPgogICAgICAgIDxwYXRoIGQ9Ik02MiwxNDAgUTgwLDEyOCA5OCwxNDAgWiIgZmlsbD0iI2VhYjMwOCIgb3BhY2l0eT0iMC43IiAvPgogICAgICAgIDx0ZXh0IHg9IjIwIiB5PSIxNTIiIGZpbGw9IiM2NDc0OGIiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iOCI+VGjDoG5oIHZpw6puIDM8L3RleHQ+CgogICAgICAgIDwhLS0gYm94IDQgKFNjcmVlbiBzaGFyaW5nIHN5bWJvbCkgLS0+CiAgICAgICAgPHJlY3QgeD0iMTYwIiB5PSI5MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSI3MCIgcng9IjQiIGZpbGw9IiMwMzE2MjIiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIDxsaW5lIHgxPSIxODAiIHkxPSIxMjUiIHgyPSIyODAiIHkyPSIxMjUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIxOTAiIHkxPSIxMTAiIHgyPSIyNzAiIHkyPSIxMTAiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiIC8+CiAgICAgICAgPHBhdGggZD0iTTIyMCwxMzUgTDIzMCwxMjUgTDI0MCwxMzUgWiIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICA8dGV4dCB4PSIyMTIiIHk9IjE1MiIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iOCI+VHLDrG5oIGLDoHkgbcOgbiBow6xuaDwvdGV4dD4KICAgICAgPC9nPgoKICAgICAgPCEtLSBGZWF0dXJlcyBvdmVybGF5IGJhZGdlcyAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDI1NSkiPgogICAgICAgIDxyZWN0IHg9IjEwIiB5PSIwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiMwNjRlM2IiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIDx0ZXh0IHg9IjEwMCIgeT0iMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2ZWU3YjciIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjkuNSI+Q2hpYSBz4bq7IHTDoGkgbGnhu4d1IHF1YSBraHVuZyBjaGF0PC90ZXh0PgogICAgICAgIAogICAgICAgIDxyZWN0IHg9IjIwMCIgeT0iMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyNCIgcng9IjEyIiBmaWxsPSIjMWUyOTNiIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8IS0tIHRpbnkgY2FsZW5kYXIgaWNvbiAtLT4KICAgICAgICA8cmVjdCB4PSIyMTAiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjIiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjIxNCIgeTE9IjQiIHgyPSIyMTQiIHkyPSI3IiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIyMTgiIHkxPSI0IiB4Mj0iMjE4IiB5Mj0iNyIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8dGV4dCB4PSIyOTUiIHk9IjE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTNjNWZkIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI5LjUiPkzDqm4gbOG7i2NoIHF1YSBHb29nbGUgQ2FsZW5kYXI8L3RleHQ+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gQm90dG9tIGRlc2NyaXB0aW9uIC0tPgogICAgICA8bGluZSB4MT0iMTUiIHkxPSIzMzUiIHgyPSIzOTUiIHkyPSIzMzUiIHN0cm9rZT0iIzMzNDE1NSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICA8dGV4dCB4PSIyMCIgeT0iMzYwIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIj5H4bq3cCBt4bq3dCB0cuG7sWMgdHV54bq/biwgdGjhuqNvIGx14bqtbiBuaGFuaCAmYW1wOyB0aOG7kW5nIG5o4bqldCDEkeG7i25oIGjGsOG7m25nPC90ZXh0PgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBDT0xVTU4gSUkgLSAyLiBUSMOBQ0ggVEjhu6hDICYgR0nhuqJJIFBIw4FQIFFV4bqiTiBMw50gLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc1LCAxMjApIiBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIE1haW4gT3V0ZXIgQm94IC0tPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI4OTAiIHJ4PSIyMCIgZmlsbD0idXJsKCNjYXJkLWdyYWQpIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI4OTAiIHJ4PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC4yNSIgZmlsdGVyPSJ1cmwoI2dsb3ctZW1lcmFsZCkiIC8+CiAgICAKICAgIDwhLS0gVGl0bGUgU2VjdGlvbiBIZWFkZXIgLS0+CiAgICA8dGV4dCB4PSI0MCIgeT0iNDUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjQiIGxldHRlci1zcGFjaW5nPSIxIj4yLiBUSMOBQ0ggVEjhu6hDICZhbXA7IEdJ4bqiSSBQSMOBUCBRVeG6ok4gTMOdPC90ZXh0PgogICAgPGxpbmUgeDE9IjQwIiB5MT0iNTgiIHgyPSI0ODAiIHkyPSI1OCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNSIgLz4KCiAgICA8IS0tIFRBQkxFIFNUUlVDVFVSRSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCA4NSkiPgogICAgICA8IS0tIFRhYmxlIEhlYWRlciBsaW5lcyAtLT4KICAgICAgPHJlY3Qgd2lkdGg9Ijg1MCIgaGVpZ2h0PSI0MiIgcng9IjgiIGZpbGw9IiMwNDIwMTciIHN0cm9rZT0iIzA0Nzg1NyIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIDx0ZXh0IHg9IjQwIiB5PSIyNyIgZmlsbD0iIzZlZTdiNyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNSI+U1RUPC90ZXh0PgogICAgICA8dGV4dCB4PSIxODAiIHk9IjI3IiBmaWxsPSIjNmVlN2I3IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE1Ij5USMOBQ0ggVEjhu6hDPC90ZXh0PgogICAgICA8dGV4dCB4PSI1NjAiIHk9IjI3IiBmaWxsPSIjNmVlN2I3IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE1Ij7DnSBHSeG6okkgKEdJ4bqiSSBQSMOBUCBRVeG6ok4gVFLhu4opPC90ZXh0PgogICAgICAKICAgICAgPCEtLSBUYWJsZSByb3dzIHNlcGFyYXRvciB2ZXJ0aWNhbCBsaW5lcyAtLT4KICAgICAgPGxpbmUgeDE9IjgwIiB5MT0iMCIgeDI9IjgwIiB5Mj0iNzYwIiBzdHJva2U9IiMwNDc4NTciIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC40IiAvPgogICAgICA8bGluZSB4MT0iNDAwIiB5MT0iMCIgeDI9IjQwMCIgeTI9Ijc2MCIgc3Ryb2tlPSIjMDQ3ODU3IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNCIgLz4KCiAgICAgIDwhLS0gUk9XIDEgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDQyKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9Ijg1MCIgaGVpZ2h0PSIxODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA0Nzg1NyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBTVFQgQ29sdW1uIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iOTAiIHI9IjE4IiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICAgIDx0ZXh0IHg9IjQwIiB5PSI5NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzA0MTUyMiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+MTwvdGV4dD4KICAgICAgICAKICAgICAgICA8IS0tIENoYWxsZW5nZSBDb2x1bW4gLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLCAzMCkiPgogICAgICAgICAgPCEtLSBTcGVlY2ggYnViYmxlcyBncmFwaGljIHJlcHJlc2VudGluZyBub2lzeS9sb3N0IGNoYXRzIC0tPgogICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDMwKSI+CiAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9IiNlYTU4MGMiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIyMCw0MCAzMCw1MCAzNSw0MCIgZmlsbD0iI2VhNTgwYyIgb3BhY2l0eT0iMC44IiAvPgogICAgICAgICAgICA8bGluZSB4MT0iMTUiIHkxPSIxNSIgeDI9IjY1IiB5Mj0iMTUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMjUiIHgyPSI1MCIgeTI9IjI1IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgICAgIAogICAgICAgICAgICA8cmVjdCB4PSI2MCIgeT0iLTE1IiB3aWR0aD0iODAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjMTBiOTgxIiBvcGFjaXR5PSIwLjciIC8+CiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMTIwLDI1IDEyNSwzNSAxMzUsMjUiIGZpbGw9IiMxMGI5ODEiIG9wYWNpdHk9IjAuNyIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmY4YTRjIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE3Ij5UcsO0aSB0aW4gbmjhuq9uIHRo4bqjbyBsdeG6rW48L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIAogICAgICAgIDwhLS0gU29sdXRpb24gQ29sdW1uIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQyMCwgMjUpIj4KICAgICAgICAgIDwhLS0gRG9jdW1lbnQgSWNvbiByZXByZXNlbnRpbmcgR29vZ2xlIERvY3MgIkjhu41wIiAtLT4KICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCAyMCkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iODUiIHJ4PSI2IiBmaWxsPSIjMDI4NGM3IiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMjAiIHgyPSI0NSIgeTI9IjIwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgLz4KICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMzUiIHgyPSI0NSIgeTI9IjM1IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgLz4KICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iNTAiIHgyPSIzNSIgeTI9IjUwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgLz4KICAgICAgICAgICAgPCEtLSBzbWFsbCB0ZXh0IGJveCAiSOG7jXAiIC0tPgogICAgICAgICAgICA8cmVjdCB4PSIyNSIgeT0iNjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxNSIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIC8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjQwIiB5PSI3MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAyODRjNyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iOSI+SOG7jXA8L3RleHQ+CiAgICAgICAgICA8L2c+CiAgICAgICAgICAKICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMCwgNDApIj4KICAgICAgICAgICAgPHRleHQgeD0iMCIgeT0iMjAiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTgiPlThu5VuZyBo4bujcCDDvSBjaMOtbmggdsOgbzwvdGV4dD4KICAgICAgICAgICAgPHRleHQgeD0iMCIgeT0iNTAiIGZpbGw9IiMzNGQzOTkiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTgiPkdvb2dsZSBEb2NzICJI4buNcCI8L3RleHQ+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9Ijc1IiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiPkdoaSBjaMOpcCBuaGFuaCBjw6FjIMO9IGtp4bq/biB0aOG6o28gbHXhuq1uIHThu6ljIHRo4budaTwvdGV4dD4KICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gUk9XIDIgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDIyMikiPgogICAgICAgIDxyZWN0IHdpZHRoPSI4NTAiIGhlaWdodD0iMTgwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNDc4NTciIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC40IiAvPgogICAgICAgIAogICAgICAgIDwhLS0gU1RUIENvbHVtbiAtLT4KICAgICAgICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjkwIiByPSIxOCIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICA8dGV4dCB4PSI0MCIgeT0iOTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwNDE1MjIiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTgiPjE8L3RleHQ+CiAgICAgICAgCiAgICAgICAgPCEtLSBDaGFsbGVuZ2UgQ29sdW1uIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMCwgMzApIj4KICAgICAgICAgIDwhLS0gU3BlZWNoIGJ1YmJsZXMgZ3JhcGhpYyByZXByZXNlbnRpbmcgbm9pc3kvbG9zdCBjaGF0cyByZXBlYXQgLS0+CiAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgMjUpIj4KICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjM1IiByeD0iOCIgZmlsbD0iIzk0YTNiOCIgb3BhY2l0eT0iMC41IiAvPgogICAgICAgICAgICA8cmVjdCB4PSI1MCIgeT0iMTUiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzNSIgcng9IjgiIGZpbGw9IiNlZjQ0NDQiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIxMDAsNTAgMTEwLDU4IDExMiw1MCIgZmlsbD0iI2VmNDQ0NCIgb3BhY2l0eT0iMC44IiAvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZjhhNGMiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTciPlRyw7RpIHRpbiBuaOG6r24gdGjhuqNvIGx14bqtbjwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgCiAgICAgICAgPCEtLSBTb2x1dGlvbiBDb2x1bW4gLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLCAyNSkiPgogICAgICAgICAgPCEtLSBEb2N1bWVudCBJY29uIHJlcHJlc2VudGluZyBHb29nbGUgRG9jcyAiQmnDqm4gYuG6o24gaOG7jXAiIC0tPgogICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDIwKSI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI4NSIgcng9IjYiIGZpbGw9IiMzYjgyZjYiIHN0cm9rZT0iIzkzYzVmZCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSIyMCIgeDI9IjQ4IiB5Mj0iMjAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSIzNSIgeDI9IjQ4IiB5Mj0iMzUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgICAgICA8bGluZSB4MT0iMTIiIHkxPSI1MCIgeDI9IjQ4IiB5Mj0iNTAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgICAgICA8IS0tIHJlZCBzdGFtcCB0ZXh0IC0tPgogICAgICAgICAgICA8cmVjdCB4PSIxNSIgeT0iNjIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNSIgcng9IjIiIGZpbGw9IiNlZjQ0NDQiIC8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjM1IiB5PSI3MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJsYWNrIiBmb250LXNpemU9IjciPkJJw4pOIELhuqJOPC90ZXh0PgogICAgICAgICAgPC9nPgogICAgICAgICAgCiAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAsIDM1KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9IjIwIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4Ij5U4buVbmcgaOG7o3Agw70gY2jDrW5oIHbDoG88L3RleHQ+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9IjUwIiBmaWxsPSIjMzRkMzk5IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4Ij5Hb29nbGUgRG9jcyAiQmnDqm4gYuG6o24gaOG7jXAiPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIwIiB5PSI3NSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41Ij5DaOG7kXQgcGjDom4gY8O0bmcgJmFtcDsgxJHDs25nIGLEg25nIHRow7RuZyB0aW4gcXVhbiB0cuG7jW5nPC90ZXh0PgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBST1cgMyAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNDAyKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9Ijg1MCIgaGVpZ2h0PSIxODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA0Nzg1NyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBTVFQgQ29sdW1uIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iOTAiIHI9IjE4IiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICAgIDx0ZXh0IHg9IjQwIiB5PSI5NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzA0MTUyMiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+MjwvdGV4dD4KICAgICAgICAKICAgICAgICA8IS0tIENoYWxsZW5nZSBDb2x1bW4gLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLCAzMCkiPgogICAgICAgICAgPCEtLSBDYWxlbmRhciBhbmQgQ2xvY2sgcmVwcmVzZW50aW5nIGZvcmdvdHRlbiBkZWFkbGluZXMgLS0+CiAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCwgMTApIj4KICAgICAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iIzFlMjkzYiIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIxNSIgcng9IjIiIGZpbGw9IiNmNTllMGIiIC8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iNy41IiByPSIyIiBmaWxsPSIjZmZmZmZmIiAvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI1NSIgY3k9IjcuNSIgcj0iMiIgZmlsbD0iI2ZmZmZmZiIgLz4KICAgICAgICAgICAgPHRleHQgeD0iMzUiIHk9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZWY0NDQ0IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYmxhY2siIGZvbnQtc2l6ZT0iMjIiPiE8L3RleHQ+CiAgICAgICAgICAgIAogICAgICAgICAgICA8IS0tIGdsb3dpbmcgZXhjbGFtYXRpb24gbWFyayAtLT4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI0NSIgcj0iMTIiIGZpbGw9IiNlZjQ0NDQiIG9wYWNpdHk9IjAuMyIgZmlsdGVyPSJ1cmwoI2dsb3ctdGVhbCkiIC8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTYiPj88L3RleHQ+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjExNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmOGE0YyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNyI+UXXDqm4gaOG6oW4gY2jDs3QgKERlYWRsaW5lKTwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgCiAgICAgICAgPCEtLSBTb2x1dGlvbiBDb2x1bW4gLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDIwLCAyNSkiPgogICAgICAgICAgPCEtLSBUcmVsbG8gJiBFbWFpbCBHcmFwaGljIC0tPgogICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDIwKSI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI1MCIgcng9IjYiIGZpbGw9IiMwZWE1ZTkiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgICAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIzMCIgcng9IjMiIGZpbGw9IiNmZmZmZmYiIC8+CiAgICAgICAgICAgIDxyZWN0IHg9IjQ1IiB5PSIxMCIgd2lkdGg9IjI1IiBoZWlnaHQ9IjIwIiByeD0iMyIgZmlsbD0iI2ZmZmZmZiIgLz4KICAgICAgICAgICAgCiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCAzMCkiPgogICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI1NSIgaGVpZ2h0PSIzNSIgcng9IjQiIGZpbGw9IiNmNTllMGIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMCBMMjcuNSwxOCBMNTUsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgPC9nPgogICAgICAgICAgCiAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAsIDM1KSI+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9IjIwIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4Ij5UcmVsbG8gdOG7sSDEkeG7mW5nIGfhu61pIGVtYWlsPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIwIiB5PSI1MCIgZmlsbD0iIzM0ZDM5OSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+bmjhuq9jIGjhurluIDEgbmfDoHkgdHLGsOG7m2M8L3RleHQ+CiAgICAgICAgICAgIDx0ZXh0IHg9IjAiIHk9Ijc1IiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiPkjhuqFuIGNo4bq/IHRy4buFIGjhuqFuIGNow7N0IGLhurFuZyB0aMO0bmcgYsOhbyB04buxIMSR4buZbmcgKEF1dG9tYXRpb24pPC90ZXh0PgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBST1cgNCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNTgyKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9Ijg1MCIgaGVpZ2h0PSIxNzgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA0Nzg1NyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBTVFQgQ29sdW1uIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iOTAiIHI9IjE4IiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICAgIDx0ZXh0IHg9IjQwIiB5PSI5NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzA0MTUyMiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCI+MzwvdGV4dD4KICAgICAgICAKICAgICAgICA8IS0tIENoYWxsZW5nZSBDb2x1bW4gLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLCAzMCkiPgogICAgICAgICAgPCEtLSBDbGFzaGluZyBjb250ZW50IHJlcHJlc2VudGluZyBjb25mbGljdHMgLS0+CiAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NSwgMTApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTAsMzAgTDMwLDEwIEwzMCw1MCBaIiBmaWxsPSIjZWY0NDQ0IiBvcGFjaXR5PSIwLjgiIC8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03MCwzMCBMNDAsMTAgTDQwLDUwIFoiIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMzUiIGN5PSIzMCIgcj0iMTUiIGZpbGw9IiNmNTllMGIiIG9wYWNpdHk9IjAuOSIgZmlsdGVyPSJ1cmwoI2dsb3ctdGVhbCkiIC8+CiAgICAgICAgICAgIDx0ZXh0IHg9IjM1IiB5PSIzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJsYWNrIiBmb250LXNpemU9IjE0Ij5WUzwvdGV4dD4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmY4YTRjIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE3Ij5YdW5nIMSR4buZdCBu4buZaSBkdW5nPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICAKICAgICAgICA8IS0tIFNvbHV0aW9uIENvbHVtbiAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAsIDI1KSI+CiAgICAgICAgICA8IS0tIENvbW1lbnRzIGlsbHVzdHJhdGlvbiAtLT4KICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCAyNSkiPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNzAiIGhlaWdodD0iNTAiIHJ4PSI4IiBmaWxsPSIjMGYxNzJhIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMzUiIGN5PSIyMCIgcj0iMyIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iNTAiIGN5PSIyMCIgcj0iMyIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgICAgICAgPGxpbmUgeDE9IjE1IiB5MT0iMzUiIHgyPSI1NSIgeTI9IjM1IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIAogICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLCAzNSkiPgogICAgICAgICAgICA8dGV4dCB4PSIwIiB5PSIxOCIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNy41Ij5UaOG7kW5nIG5o4bqldCBxdXkgdHLDrG5oIMSR4buDIGzhuqFpPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIwIiB5PSI0NiIgZmlsbD0iIzM0ZDM5OSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNy41Ij5uaOG6rW4geMOpdCAoQ29tbWVudCkgdHLGsOG7m2Mga2hpIHPhu61hPC90ZXh0PgogICAgICAgICAgICA8dGV4dCB4PSIwIiB5PSI3MSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyI+QuG6o28gduG7hyBj4bqldSB0csO6YyB2xINuIGLhuqNuIGfhu5FjIHbDoCB0w7RuIHRy4buNbmcgxJHDs25nIGfDs3AgbmjDs208L3RleHQ+CiAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICA8L2c+CgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBGT09URVIgUEFORUwgTUVUQURBVEEgLS0+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzUsIDEwMzApIj4KICAgIDxyZWN0IHdpZHRoPSIxODUwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0icmdiYSg0LCAzMSwgNDYsIDAuOCkiIHN0cm9rZT0icmdiYSg0NSwgMjEyLCAxOTEsIDAuMikiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHRleHQgeD0iMjAiIHk9IjI0IiBmaWxsPSIjYTVmM2ZjIiBmb250LWZhbWlseT0iJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5OZ3Xhu5NuOiBUw7NtIHThuq90IHRtcGdpaXBtNl9idDNfMjUwNTEyMjdkb2FubmdvY2xpbmguZG9jeDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE4MzAiIHk9IjI0IiB0ZXh0LWFuY2hvcj0iZW5kIiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCI+REVTSUdOIEJZIERPQU4gTkdPQyBMSU5IIOKAoiBM4buaUDogUUggMjAyNUUgS1RRVCAxMCDigKIgTVNWOiAyNTA1MTIyNzwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=";
