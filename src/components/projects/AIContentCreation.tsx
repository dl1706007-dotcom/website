import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  BookOpen, 
  ExternalLink, 
  Layers, 
  Info, 
  Compass, 
  Video, 
  AlertTriangle, 
  Check, 
  ArrowRight,
  User, 
  Clock,
  MessageSquare,
  FileText,
  Palette,
  Shield,
  Lightbulb,
  Award,
  ChevronRight,
  X,
  Tv,
  Eye,
  GitBranch,
  Search,
  UserCheck
} from 'lucide-react';

export default function AIContentCreation() {
  const [activeTab, setActiveTab] = useState<'intro' | 'process' | 'analysis' | 'ethics'>('intro');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const reportUrl = "https://Yaf0lDNDUHNrmiAodVsPA9m7N8Lyq3bF/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true";
  const realDriveLink = "https://docs.google.com/document/d/1Yaf0lDNDUHNrmiAodVsPA9m7N8Lyq3bF/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true";

  const handleOpenFullImage = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<html><head><title>Infographic Bài 05: Báo cáo dự án sáng tạo "AI & Bước ngoặt giáo dục ngoại ngữ"</title></head><body style="margin:0; background:#020b18; display:flex; justify-content:center; align-items:center; min-height:100vh;"><img src="${INFOGRAPHIC_B5_BASE64}" style="max-width: 100%; max-height: 100vh; object-fit: contain;" /></body></html>`
      );
      newWindow.document.close();
    } else {
      const link = document.createElement('a');
      link.href = INFOGRAPHIC_B5_BASE64;
      link.target = '_blank';
      link.click();
    }
  };

  return (
    <div className="space-y-6" id="ai-content-creation-project">
      {/* Top Banner Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-navy-900/60 p-5 rounded-2xl border border-navy-800/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
        <div className="space-y-1 pl-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Bài tập 5 • Mục 5.4</span>
            <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
          </div>
          <h4 className="text-base font-bold text-white font-display">
            Báo cáo dự án sáng tạo nội dung "AI & Bước ngoặt giáo dục ngoại ngữ"
          </h4>
          <p className="text-xs text-navy-300">
            Sinh viên thực hiện: <span className="text-teal-300 font-semibold">Đoàn Ngọc Linh</span> — Lớp học phần: <span className="text-teal-300 font-semibold">QH 2025E KTQT 10</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-navy-400 font-mono">Học phần:</span>
          <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded border border-teal-500/30 font-mono flex items-center gap-1">
            <CheckCircle2 size={10} /> QH 2025E KTQT 10
          </span>
        </div>
      </div>

      {/* Navigation tabs inside the Workspace */}
      <div className="flex flex-wrap gap-2 border-b border-navy-800 pb-px">
        {[
          { id: 'intro', label: 'I. Giới thiệu dự án', icon: Tv },
          { id: 'process', label: 'II. Quy trình AI', icon: Cpu },
          { id: 'analysis', label: 'III. Phân tích hiệu quả', icon: Lightbulb },
          { id: 'ethics', label: 'IV. Đạo đức & Vai trò', icon: Shield },
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-all relative flex items-center gap-1.5 cursor-pointer ${
                activeTab === tab.id ? 'text-teal-400' : 'text-navy-400 hover:text-white'
              }`}
            >
              <IconComponent size={14} />
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div layoutId="project-tab-line-5" className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Tab Area & Quick View card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Interactive detail display (8 cols) */}
        <div className="lg:col-span-8 bg-navy-950 p-5 md:p-6 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/10 transition-all duration-300 min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* TAB 1: GIỚI THIỆU DỰ ÁN */}
              {activeTab === 'intro' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Tv size={16} />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display text-white">Giới thiệu tổng quan dự án</h5>
                  </div>
                  
                  <div className="p-4 bg-navy-900/40 rounded-xl border border-navy-850 space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/5 rounded-bl-full pointer-events-none" />
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-teal-500/10 text-teal-400 rounded border border-teal-500/20 uppercase tracking-widest font-mono">Tên tác phẩm</span>
                    <h6 className="text-sm font-bold text-teal-300 font-display">Bản tin EduTech Visionaries</h6>
                    <p className="text-xs text-navy-200 leading-relaxed font-sans">
                      Dự án được thể hiện dưới hình thức một <strong className="text-white">kịch bản thời sự truyền hình đa điểm cầu</strong> sống động. Kịch bản khéo léo kết nối ý kiến từ các chuyên gia giáo dục, giảng viên UEB và người học để mang lại góc nhìn đa chiều, khách quan nhất.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-navy-900/30 rounded-xl border border-navy-850 space-y-1.5">
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest font-mono">Chủ đề nghiên cứu</span>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Phân tích sâu sắc <strong className="text-slate-200">thực trạng ứng dụng Trí tuệ nhân tạo (AI)</strong> trong học tập tiếng Anh của học sinh, sinh viên tại Việt Nam.
                      </p>
                    </div>
                    <div className="p-4 bg-navy-900/30 rounded-xl border border-navy-850 space-y-1.5">
                      <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest font-mono">Bối cảnh áp dụng</span>
                      <p className="text-xs text-navy-300 leading-relaxed font-sans">
                        Lấy thực tế từ môi trường học tập năng động tại <strong className="text-slate-200">Trường Đại học Kinh tế (UEB - ĐHQGHN)</strong> để làm chất liệu minh họa chân thực.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: QUÁ TRÌNH SỬ DỤNG AI */}
              {activeTab === 'process' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Cpu size={16} />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display text-white">Sự phối hợp giữa 3 nhóm công cụ AI</h5>
                  </div>
                  
                  <div className="space-y-3.5">
                    {/* Tool Group 1 */}
                    <div className="p-3.5 bg-navy-900/40 rounded-xl border border-navy-850 flex gap-3 items-start">
                      <div className="p-1.5 rounded bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                        <FileText size={14} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">1. AI Văn bản (Gemini & ChatGPT)</span>
                          <span className="px-1.5 py-0.2 text-[8px] bg-sky-500/10 text-sky-400 rounded font-mono">Kịch bản</span>
                        </div>
                        <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                          Sử dụng để hỗ trợ phác thảo ý tưởng, lập cấu trúc nội dung và biên tập kịch bản chi tiết đa điểm cầu, kết hợp nhuần nhuyễn các thuật ngữ học thuật và bối cảnh đặc trưng tại UEB.
                        </p>
                      </div>
                    </div>

                    {/* Tool Group 2 */}
                    <div className="p-3.5 bg-navy-900/40 rounded-xl border border-navy-850 flex gap-3 items-start">
                      <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                        <Palette size={14} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">2. AI Hình ảnh (Nano Banana 2 & DALL-E 3)</span>
                          <span className="px-1.5 py-0.2 text-[8px] bg-amber-500/10 text-amber-400 rounded font-mono">Trực quan</span>
                        </div>
                        <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                          Hỗ trợ tạo dựng hình ảnh minh họa chân thực bối cảnh lớp học tương lai, lớp học Hybrid, cũng như thiết kế chân dung nhân vật đại diện phục vụ nội dung truyền thông số.
                        </p>
                      </div>
                    </div>

                    {/* Tool Group 3 */}
                    <div className="p-3.5 bg-navy-900/40 rounded-xl border border-navy-850 flex gap-3 items-start">
                      <div className="p-1.5 rounded bg-purple-500/10 text-purple-400 shrink-0 mt-0.5">
                        <Layers size={14} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">3. AI Thiết kế & Ngôn ngữ (Canva & Grammarly)</span>
                          <span className="px-1.5 py-0.2 text-[8px] bg-purple-500/10 text-purple-400 rounded font-mono">Đồng bộ</span>
                        </div>
                        <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                          Được áp dụng để dàn trang slide báo cáo, phối trí màu sắc theo tông pastel màu nước nhẹ nhàng (Watercolor Pastel), và tối ưu chất lượng ngữ pháp, chính tả cho toàn bộ tài liệu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PHÂN TÍCH HIỆU QUẢ */}
              {activeTab === 'analysis' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Lightbulb size={16} />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display text-white">Đánh giá khách quan hiệu quả dự án</h5>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Ưu điểm */}
                    <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/10 space-y-2">
                      <span className="text-[9px] font-bold text-teal-400 uppercase tracking-widest font-mono flex items-center gap-1">
                        <CheckCircle2 size={11} /> ƯU ĐIỂM VƯỢT TRỘI
                      </span>
                      <ul className="list-disc list-inside text-xs text-navy-200 space-y-1.5 pl-1 font-sans leading-relaxed">
                        <li>Rút ngắn đáng kể thời gian phác thảo ý tưởng kịch bản (tiết kiệm 60% thời gian).</li>
                        <li>Trực quan hóa tức thì các khái niệm trừu tượng thành hình ảnh sắc nét, tăng tính thuyết phục.</li>
                      </ul>
                    </div>

                    {/* Hạn chế */}
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 space-y-2">
                      <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest font-mono flex items-center gap-1">
                        <AlertTriangle size={11} /> HẠN CHẾ CÒN TỒN TẠI
                      </span>
                      <ul className="list-disc list-inside text-xs text-navy-200 space-y-1.5 pl-1 font-sans leading-relaxed">
                        <li>AI đôi lúc gặp lỗi "ảo tưởng kiến thức" (Hallucination) về thông tin học thuật bản địa.</li>
                        <li>Gặp lỗi chèn sai ký tự chữ trên ảnh; thiếu vắng sự thấu cảm đặc thù Việt Nam.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Sự thay đổi vai trò (Tổng đạo diễn) */}
                  <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-800 flex gap-3 items-center">
                    <div className="p-2 rounded bg-teal-500/10 text-teal-400 shrink-0">
                      <GitBranch size={16} />
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-display">Sự thay đổi về vai trò của con người:</h6>
                      <p className="text-xs text-teal-300 font-sans mt-0.5 leading-relaxed italic">
                        "Vai trò sinh viên được nâng cấp từ một 'Người viết bài thủ công' trở thành một 'Tổng đạo diễn' - người định hướng, tinh chỉnh câu lệnh, kiểm soát chất lượng và tổng biên tập toàn bộ tác phẩm."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: ĐẠO ĐỨC & VAI TRÒ */}
              {activeTab === 'ethics' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Shield size={16} />
                    <h5 className="text-xs font-bold uppercase tracking-wider font-display text-white">Tính đạo đức & Vai trò cốt lõi của con người</h5>
                  </div>

                  <div className="p-4 bg-navy-900/40 rounded-xl border border-navy-850 space-y-3.5">
                    <div className="flex items-start gap-2.5">
                      <span className="p-1 rounded bg-teal-500/10 text-teal-400 shrink-0 text-xs">01</span>
                      <p className="text-xs text-navy-200 leading-relaxed font-sans">
                        <strong className="text-white">Minh bạch & Trích nguồn:</strong> Mọi thông tin, dữ liệu học thuật hay ý tưởng có sự đóng góp của AI đều được trích dẫn nguồn rành mạch, tôn trọng tuyệt đối quyền tác giả và liêm chính học thuật.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2.5 border-t border-navy-850/60 pt-3">
                      <span className="p-1 rounded bg-teal-500/10 text-teal-400 shrink-0 text-xs">02</span>
                      <p className="text-xs text-navy-200 leading-relaxed font-sans">
                        <strong className="text-white">Tránh lạm dụng:</strong> Sử dụng AI làm công cụ đồng hành tích cực thay vì sao chép thụ động toàn phần. Con người luôn là chủ thể phản biện và định đoạt kết quả.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/15 text-center">
                    <p className="text-xs text-slate-200 font-medium font-sans">
                      💡 <strong className="text-teal-400">Kết luận cốt lõi:</strong> AI chỉ đóng vai trò là cộng sự đắc lực giúp tối ưu hiệu suất, trong khi <span className="text-teal-400 font-bold">tư duy phản biện, óc sáng tạo bản địa</span> của con người mới là yếu tố quyết định giá trị thật của bài báo cáo.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 pt-3 border-t border-navy-800/40 flex items-center justify-between text-[10px] text-navy-400 font-mono">
            <span>Dự án sáng tạo nội dung số: EduTech Visionaries</span>
            <span>Phân cấp quyền: Tác giả Đoàn Ngọc Linh</span>
          </div>
        </div>

        {/* Right Column: Interactive Infographic & Detailed Popup Trigger (4 cols) */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800/80 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <Award size={14} className="text-teal-500" /> MINH CHỨNG THỰC TẾ
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-400 rounded font-mono border border-teal-500/20">
                INFOGRAPHIC
              </span>
            </div>

            {/* Clickable Image Container */}
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="relative group rounded-xl border border-teal-500/30 overflow-hidden bg-navy-900/60 aspect-[1920/1080] flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:border-teal-500/60 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]"
            >
              <img 
                src={INFOGRAPHIC_B5_BASE64} 
                alt="Infographic Bài 5" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <div className="px-3 py-1.5 bg-navy-950/90 rounded-lg border border-teal-500/30 text-[10px] font-bold text-teal-400 flex items-center gap-1">
                  <Search size={12} />
                  <span>Click để phóng to</span>
                </div>
              </div>
            </div>

            {/* Source Credit */}
            <div className="text-center text-[11px] text-navy-400 italic mt-3">
              Nguồn: Dự án sáng tạo Edutech Visionaries &amp; Đồ họa hỗ trợ bởi Gemini
            </div>
            
            <p className="text-[10px] text-navy-400 text-center italic mt-2 leading-relaxed font-sans">
              Hình 5: Infographic tóm tắt kịch bản "AI &amp; Bước ngoặt giáo dục" thực hiện bởi Linh.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800/40 space-y-3">
            {/* Open in full view tab button */}
            <button
              onClick={handleOpenFullImage}
              className="w-full py-2 bg-navy-900 hover:bg-navy-850 text-teal-400 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-teal-500/20 hover:border-teal-500/40 cursor-pointer"
            >
              <ExternalLink size={13} />
              <span>Mở xem ảnh kích thước đầy đủ</span>
            </button>

            {/* Launch Modal details */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-pointer"
            >
              <Eye size={13} />
              <span>Khám phá chi tiết Bài 5</span>
            </button>
          </div>
        </div>

      </div>

      {/* DETAILED DIALOG SUB-PAGE MODAL (UX INTERACTION FOR BÀI 5) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
            
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
                      BÀI TẬP 5 • MỤC 5.4
                    </span>
                    <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mt-1.5 text-white font-display">
                    Báo cáo dự án sáng tạo nội dung "AI & Bước ngoặt giáo dục ngoại ngữ"
                  </h2>
                  <p className="text-xs text-navy-300 mt-1 font-sans">
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
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-navy-850 flex-grow text-slate-100">
                
                {/* I. GIỚI THIỆU DỰ ÁN */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display border-b border-navy-800/60 pb-2">
                    <Tv size={16} />
                    I. Giới thiệu tổng quan dự án học thuật
                  </h3>
                  <div className="bg-navy-900/30 p-5 rounded-xl border border-navy-850 space-y-3.5 font-sans">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-teal-500/15 text-teal-400 border border-teal-500/25 uppercase font-mono">Ấn phẩm truyền thông</span>
                      <span className="text-xs font-bold text-slate-300">Bản tin EduTech Visionaries</span>
                    </div>
                    <p className="text-xs md:text-sm text-navy-200 leading-relaxed">
                      Dự án được kết cấu chuyên nghiệp theo định dạng <strong className="text-white">kịch bản thời sự đa điểm cầu</strong>. Nội dung chính tập trung phỏng vấn, khảo sát thực trạng bùng nổ và các thách thức đi kèm khi học sinh, sinh viên Việt Nam lồng ghép các mô hình ngôn ngữ lớn (LLM) để nâng cao phản xạ, ngữ pháp và phát âm tiếng Anh.
                    </p>
                    <p className="text-xs text-navy-300 leading-relaxed border-l-2 border-teal-500/40 pl-3 italic">
                      Dự án lồng ghép khéo léo bối cảnh thực tiễn giảng dạy, cơ sở vật chất và nếp sinh hoạt học thuật của sinh viên tại Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội (UEB - ĐHQGHN) làm trọng tâm nghiên cứu.
                    </p>
                  </div>
                </div>

                {/* II. QUÁ TRÌNH SỬ DỤNG AI */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display border-b border-navy-800/60 pb-2">
                    <Cpu size={16} />
                    II. Quá trình tích hợp công cụ AI tiên tiến
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Nhóm 1 */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded bg-sky-500/10 text-sky-400">
                          <FileText size={14} />
                        </span>
                        <h4 className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">1. AI Văn bản</h4>
                      </div>
                      <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                        Sử dụng <strong>Gemini & ChatGPT</strong> để tạo sườn kịch bản, phác thảo các câu hỏi phản biện, gọt giũa lời thoại phát thanh và lồng ghép hệ thuật ngữ học thuật chuyên sâu.
                      </p>
                    </div>

                    {/* Nhóm 2 */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded bg-amber-500/10 text-amber-400">
                          <Palette size={14} />
                        </span>
                        <h4 className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">2. AI Hình ảnh</h4>
                      </div>
                      <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                        Sử dụng <strong>Nano Banana 2 & DALL-E 3</strong> để tạo dựng hình ảnh bối cảnh lớp học tương lai, lớp học Hybrid đầy công nghệ, và ảnh chân dung chân thực phục vụ trình bày.
                      </p>
                    </div>

                    {/* Nhóm 3 */}
                    <div className="p-4 rounded-xl bg-navy-900/40 border border-navy-850 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                          <Layers size={14} />
                        </span>
                        <h4 className="font-bold text-xs text-slate-100 uppercase tracking-wider font-display">3. AI Thiết kế</h4>
                      </div>
                      <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                        Sử dụng <strong>Canva & Grammarly</strong> để đồng bộ phong cách hiển thị màu nước nhẹ nhàng (Watercolor Pastel), tối ưu hóa cách bố trí thông tin và rà soát lỗi từ ngữ tiếng Anh.
                      </p>
                    </div>
                  </div>
                </div>

                {/* III. PHÂN TÍCH HIỆU QUẢ */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display border-b border-navy-800/60 pb-2">
                    <Lightbulb size={16} />
                    III. Phân tích hiệu quả & Sự thay đổi quy trình
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Box 1 */}
                      <div className="p-4 rounded-xl bg-navy-900/30 border-l-4 border-teal-500 border border-y-navy-850 border-r-navy-850 space-y-2">
                        <h4 className="font-bold text-xs text-teal-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                          <CheckCircle2 size={13} /> Ưu điểm vượt trội của AI
                        </h4>
                        <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                          Đẩy nhanh tốc độ sáng tạo, rút ngắn tối đa thời gian phát triển ý tưởng trừu tượng thành kịch bản hoàn chỉnh và sản sinh hình ảnh minh họa giàu tính thẩm mỹ thị giác.
                        </p>
                      </div>

                      {/* Box 2 */}
                      <div className="p-4 rounded-xl bg-navy-900/30 border-l-4 border-amber-500 border border-y-navy-850 border-r-navy-850 space-y-2">
                        <h4 className="font-bold text-xs text-amber-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                          <AlertTriangle size={13} /> Thử thách & Hạn chế
                        </h4>
                        <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                          Sự "ảo tưởng" (Hallucination) của AI đòi hỏi phải đối soát thực tế cẩn trọng; các lỗi chèn ký tự thô trên ảnh và độ lệch pha về đặc thù văn hóa cần sự can thiệp thủ công từ con người.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/10 space-y-1.5 font-sans">
                      <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest font-mono">Thay đổi quy trình làm việc</span>
                      <p className="text-xs text-navy-200 leading-relaxed">
                        Quy trình học thuật từ bước chuẩn bị thủ công được cải tiến hoàn toàn. Vai trò của sinh viên Đoàn Ngọc Linh được chuyển đổi từ một <strong className="text-white">người thực thi thụ động</strong> sang một <strong className="text-teal-400">"Tổng đạo diễn"</strong> điều phối, phân bổ câu lệnh, rà soát tính xác thực và biên tập chất lượng đầu ra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* IV. ĐẠO ĐỨC & VAI TRÒ CON NGƯỜI */}
                <div>
                  <h3 className="text-sm font-bold text-teal-400 flex items-center gap-2 mb-4 uppercase tracking-wider font-display border-b border-navy-800/60 pb-2">
                    <Shield size={16} />
                    IV. Đạo đức sử dụng AI & Vai trò quyết định
                  </h3>
                  <div className="p-5 bg-navy-900/30 rounded-xl border border-navy-850 space-y-3 font-sans">
                    <p className="text-xs md:text-sm text-navy-200 leading-relaxed">
                      Linh luôn áp dụng chặt chẽ bộ nguyên tắc ứng xử AI có trách nhiệm: <strong className="text-white">Minh bạch hóa</strong> việc sử dụng AI, ghi nhận nguồn và công lao hỗ trợ của máy học; tuyệt đối không đạo văn hoặc lấy sản phẩm AI làm kết quả tự thân mà không biên dịch, tư duy lại.
                    </p>
                    <p className="text-xs text-teal-300 font-medium italic border-t border-navy-850/60 pt-3 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-teal-400" />
                      "Trí tuệ nhân tạo là cộng sự tuyệt vời để mở khóa tiềm năng, nhưng chỉ có bản lĩnh, tư duy phản biện và sự nhân văn của con người mới quyết định giá trị chân thực cuối cùng của tri thức."
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer Modal */}
              <div className="p-6 border-t border-navy-850 bg-navy-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <p className="text-[11px] text-navy-400 text-center sm:text-left font-sans">
                  * Nhấn vào nút bên cạnh để xem toàn bộ nội dung bản kịch bản và slide báo cáo dự án trên Drive.
                </p>
                <a
                  href={realDriveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/15 transition-all hover:-translate-y-0.5 duration-300"
                >
                  <span>Xem báo cáo Word đầy đủ (Bài 5)</span>
                  <ExternalLink size={14} />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ZOOM LIGHTBOX MODAL FOR INFOGRAPHIC B5 */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomOpen(false)}
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-md cursor-zoom-out"
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
                <span className="text-xs font-bold text-teal-400 font-mono">Infographic Bài 05: AI &amp; Bước ngoặt giáo dục ngoại ngữ</span>
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
                  src={INFOGRAPHIC_B5_BASE64} 
                  alt="Infographic Bài 5"
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


export const INFOGRAPHIC_B5_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDwhLS0gRGVmaW5pdGlvbnMgZm9yIEdyYWRpZW50cywgU2hhZG93cywgYW5kIEZpbHRlcnMgLS0+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDIwYjE4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzA0MTgyNCIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDEwODEwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2FyZC1ncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNTFjMmMiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAyMGQxNiIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN0ZXAtZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNzJiNDAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAzMTQyMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InRlYWwtZ2xvdyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMmRkNGJmIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZDk0ODgiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJnbG93LWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTRiOGE2IiBzdG9wLW9wYWNpdHk9IjAuMTUiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA2YjZkNCIgc3RvcC1vcGFjaXR5PSIwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iLTUlIiB5PSItNSUiIHdpZHRoPSIxMTAlIiBoZWlnaHQ9IjExMCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iOCIgc3RkRGV2aWF0aW9uPSI2IiBmbG9vZC1jb2xvcj0iIzAwMDAwMCIgZmxvb2Qtb3BhY2l0eT0iMC42Ii8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9Imdsb3ctdGVhbCIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjgiIHJlc3VsdD0iYmx1ciIgLz4KICAgICAgPGZlQ29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXIiIG9wZXJhdG9yPSJvdmVyIiAvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJnbG93LXNvZnQiIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIxMjAlIiBoZWlnaHQ9IjEyMCUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiIC8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIgLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KCiAgPCEtLSBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9InVybCgjYmctZ3JhZCkiIC8+CiAgCiAgPCEtLSBHcmlkIFBhdHRlcm4gZm9yIFRlY2ggQWVzdGhldGljIC0tPgogIDxnIG9wYWNpdHk9IjAuMDE1IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMSI+CiAgICA8cGF0aCBkPSJNIDAsNTAgTCAxOTIwLDUwIE0gMCwxMDAgTCAxOTIwLDEwMCBNIDAsMTUwIEwgMTkyMCwxNTAgTSAwLDIwMCBMIDE5MjAsMjAwIE0gMCwyNTAgTCAxOTIwLDI1MCBNIDAsMzAwIEwgMTkyMCwzMDAgTSAwLDM1MCBMIDE5MjAsMzUwIE0gMCw0MDAgTCAxOTIwLDQwMCBNIDAsNDUwIEwgMTkyMCw0NTAgTSAwLDUwMCBMIDE5MjAsNTAwIE0gMCw1NTAgTCAxOTIwLDU1MCBNIDAsNjAwIEwgMTkyMCw2MDAgTSAwLDY1MCBMIDE5MjAsNjUwIE0gMCw3MDAgTCAxOTIwLDcwMCBNIDAsNzUwIEwgMTkyMCw3NTAgTSAwLDgwMCBMIDE5MjAsODAwIE0gMCw4NTAgTCAxOTIwLDg1MCBNIDAsOTAwIEwgMTkyMCw5MDAgTSAwLDk1MCBMIDE5MjAsOTUwIE0gMCwxMDAwIEwgMTkyMCwxMDAwIE0gMCwxMDUwIEwgMTkyMCwxMDUwIiAvPgogICAgPHBhdGggZD0iTSA1MCwwIEwgNTAsMTA4MCBNIDEwMCwwIEwgMTAwLDEwODAgTSAxNTAsMCBMIDE1MCwxMDgwIE0gMjAwLDAgTCAyMDAsMTA4MCBNIDI1MCwwIEwgMjUwLDEwODAgTSAzMDAsMCBMIDMwMCwxMDgwIE0gMzUwLDAgTCAzNTAsMTA4MCBNIDQwMCwwIEwgNDAwLDEwODAgTSA0NTAsMCBMIDQ1MCwxMDgwIE0gNTAwLDAgTCA1MDAsMTA4MCBNIDU1MCwwIEwgNTUwLDEwODAgTSA2MDAsMCBMIDYwMCwxMDgwIE0gNjUwLDAgTCA2NTAsMTA4MCBNIDcwMCwwIEwgNzAwLDEwODAgTSA3NTAsMCBMIDc1MCwxMDgwIE0gODAwLDAgTCA4MDAsMTA4MCBNIDg1MCwwIEwgODUwLDEwODAgTSA5MDAsMCBMIDkwMCwxMDgwIE0gOTUwLDAgTCA5NTAsMTA4MCBNIDEwMDAsMCBMIDEwMDAsMTA4MCBNIDEwNTAsMCBMIDEwNTAsMTA4MCBNIDExMDAsMCBMIDExMDAsMTA4MCBNIDExNTAsMCBMIDExNTAsMTA4MCBNIDEyMDAsMCBMIDEyMDAsMTA4MCBNIDEyNTAsMCBMIDEyNTAsMTA4MCBNIDEzMDAsMCBMIDEzMDAsMTA4MCBNIDEzNTAsMCBMIDEzNTAsMTA4MCBNIDE0MDAsMCBMIDE0MDAsMTA4MCBNIDE0NTAsMCBMIDE0NTAsMTA4MCBNIDE1MDAsMCBMIDE1MDAsMTA4MCBNIDE1NTAsMCBMIDE1NTAsMTA4MCBNIDE2MDAsMCBMIDE2MDAsMTA4MCBNIDE2NTAsMCBMIDE2NTAsMTA4MCBNIDE3MDAsMCBMIDE3MDAsMTA4MCBNIDE3NTAsMCBMIDE3NTAsMTA4MCBNIDE4MDAsMCBMIDE4MDAsMTA4MCBNIDE4NTAsMCBMIDE4NTAsMTA4MCBNIDE5MDAsMCBMIDE5MDAsMTA4MCIgLz4KICA8L2c+CgogIDwhLS0gR2xvd2luZyBiYWNrZ3JvdW5kIGJsb2JzIC0tPgogIDxjaXJjbGUgY3g9IjI1MCIgY3k9IjI1MCIgcj0iMTgwIiBmaWxsPSJ1cmwoI2dsb3ctZ3JhZCkiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiBvcGFjaXR5PSIwLjEyIiAvPgogIDxjaXJjbGUgY3g9IjE2NTAiIGN5PSI4NTAiIHI9IjIyMCIgZmlsbD0idXJsKCNnbG93LWdyYWQpIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgb3BhY2l0eT0iMC4xIiAvPgoKICA8IS0tIE1BSU4gVElUTEUgSEVBREVSIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMTAiIGZpbGw9IiMwMjBiMTgiIGZpbGwtb3BhY2l0eT0iMC44NSIgLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMTEwIiB4Mj0iMTkyMCIgeTI9IjExMCIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdCkiIC8+CiAgICAKICAgIDx0ZXh0IHg9Ijk2MCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMzQiIGxldHRlci1zcGFjaW5nPSIxIj5Cw4FPIEPDgU8gROG7sCDDgU46IEFJICZhbXA7IELGr+G7mkMgTkdP4bq2VCBHScOBTyBE4bukQyBOR0/huqBJIE5H4buuPC90ZXh0PgogICAgPHRleHQgeD0iOTYwIiB5PSI5NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzJkZDRiZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxNiIgbGV0dGVyLXNwYWNpbmc9IjQiPkThu7Agw4FOIFPDgU5HIFThuqBPIE7hu5hJIERVTkcgRURVVEVDSCBWSVNJT05BUklFUzwvdGV4dD4KICA8L2c+CgogIDwhLS0gQ09MVU1OIEkgKExFRlQpIC0gU0VDVElPTiBJICYgSUlJIC0tPgogIDwhLS0gU0VDVElPTiBJOiBHSeG7mkkgVEhJ4buGVSBE4buwIMOBTiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgMTUwKSIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPCEtLSBNYWluIE91dGVyIEJveCAtLT4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9InVybCgjY2FyZC1ncmFkKSIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDMyMCwwIEEgMTAsMTAgMCAwIDEgMzMwLDEwIEwgMzQwLDQwIEEgMTYsMTYgMCAwIDEgMzI0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDcyYjQwIiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+SS4gR0nhu5pJIFRISeG7hlUgROG7sCDDgU48L3RleHQ+CiAgICAKICAgIDwhLS0gQ29udGVudCBpbnNpZGUgQm94IEkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgODApIj4KICAgICAgPCEtLSBJdGVtIDE6IFTDqm4gZOG7sSDDoW4gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDIwKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxNSIgcj0iNSIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICA8dGV4dCB4PSI0MCIgeT0iMjEiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMmRkNGJmIj5Uw6puIGThu7Egw6FuOjwvdHNwYW4+IELhuqNuIHRpbiBFZHVUZWNoIFZpc2lvbiAtIEvhu4tjaCBi4bqjbiB0aOG7nWkgc+G7sS48L3RleHQ+CiAgICAgIDwvZz4KICAgICAgCiAgICAgIDwhLS0gSXRlbSAyOiBT4bqjbiBwaOG6qW0gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDg1KSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxNSIgcj0iNSIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICA8dGV4dCB4PSI0MCIgeT0iMjEiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjx0c3BhbiBmb250LXdlaWdodD0iODAwIiBmaWxsPSIjMmRkNGJmIj5T4bqjbiBwaOG6qW06PC90c3Bhbj4gS+G7i2NoIGLhuqNuIMSRYSDEkWnhu4NtIGPhuqd1ICZhbXA7IEjDrG5oIOG6o25oIHPhu5EuPC90ZXh0PgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEl0ZW0gMzogTeG7pWMgdGnDqnUgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDE1MCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMTUiIHI9IjUiIGZpbGw9IiMyZGQ0YmYiIC8+CiAgICAgICAgPHRleHQgeD0iNDAiIHk9IjIxIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNTAwIiBmb250LXNpemU9IjE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4gZm9udC13ZWlnaHQ9IjgwMCIgZmlsbD0iIzJkZDRiZiI+TeG7pWMgdGnDqnU6PC90c3Bhbj4gUGjDom4gdMOtY2gg4bupbmcgZOG7pW5nIEFJIGjhu41jIHRp4bq/bmcgQW5oIHThuqFpIFZp4buHdCBOYW0uPC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CgogICAgPCEtLSBWaXN1YWwgSWNvbnMgb24gUmlnaHQgb2YgQm94IEkgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NjAsIDExMCkiIG9wYWNpdHk9IjAuODUiPgogICAgICA8IS0tIE1pY3JvcGhvbmUgSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgICAgIDxyZWN0IHg9IjI1IiB5PSIxMCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjI0IiByeD0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIuNSIgLz4KICAgICAgICA8cGF0aCBkPSJNIDIwLDIyIEEgMTIsMTIgMCAwIDAgNDQsMjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjMyIiB5MT0iMzQiIHgyPSIzMiIgeTI9IjQ0IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMi41IiAvPgogICAgICAgIDxsaW5lIHgxPSIyMiIgeTE9IjQ0IiB4Mj0iNDIiIHkyPSI0NCIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIuNSIgLz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBHbG9iZSBOZXR3b3JrIEljb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1LCAzMCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjIyIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMi41IiAvPgogICAgICAgIDxlbGxpcHNlIGN4PSIyNSIgY3k9IjI1IiByeD0iMjIiIHJ5PSI3IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxlbGxpcHNlIGN4PSIyNSIgY3k9IjI1IiByeD0iNyIgcnk9IjIyIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIzIiB5MT0iMjUiIHgyPSI0NyIgeTI9IjI1IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIyNSIgeTE9IjMiIHgyPSIyNSIgeTI9IjQ3IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICA8L2c+CgogICAgICA8IS0tIFRlYW0gSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAsIDg1KSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPHBhdGggZD0iTSAxMCwzNCBBIDEwLDEwIDAgMCAxIDMwLDM0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzNiIgY3k9IjI1IiByPSI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxwYXRoIGQ9Ik0gMjgsMzYgQSA4LDggMCAwIDEgNDQsMzYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElJIChSSUdIVCkgLSBTRUNUSU9OIElJIC0tPgogIDwhLS0gU0VDVElPTiBJSTogUVXDgSBUUsOMTkggU+G7rCBE4bukTkcgQUkgJiBUw41DSCBI4buiUCBTw4FORyBU4bqgTyAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MDAsIDE1MCkiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDwhLS0gTWFpbiBPdXRlciBCb3ggLS0+CiAgICA8cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI1MTAiIHJ4PSIxNiIgZmlsbD0idXJsKCNjYXJkLWdyYWQpIiBzdHJva2U9IiMxNGI4YTYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjEwODAiIGhlaWdodD0iNTEwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDUyMCwwIEEgMTAsMTAgMCAwIDEgNTMwLDEwIEwgNTQwLDQwIEEgMTYsMTYgMCAwIDEgNTI0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDcyYjQwIiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+SUkuIFFVw4EgVFLDjE5IIFPhu6wgROG7pE5HIEFJICZhbXA7IFTDjUNIIEjhu6JQIFPDgU5HIFThuqBPPC90ZXh0PgoKICAgIDwhLS0gR2xvd2luZyBDb25uZWN0ZWQgQ3VydmVzIGJlaGluZCBzdGVwcyAtLT4KICAgIDxnIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIj4KICAgICAgPHBhdGggZD0iTSAzMTAsMjgwIFEgMzYwLDM0MCA1MDAsMjgwIiAvPgogICAgICA8cGF0aCBkPSJNIDY3MCwyODAgUSA3MjAsMzQwIDg2MCwyODAiIC8+CiAgICA8L2c+CgogICAgPCEtLSBTdGVwIDEgQ2FyZCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCA5MCkiPgogICAgICA8cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjM4MCIgcng9IjEyIiBmaWxsPSJ1cmwoI3N0ZXAtZ3JhZCkiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIAogICAgICA8IS0tIFRvcCBCYWRnZSBTdGVwIE51bWJlciAtLT4KICAgICAgPHJlY3QgeD0iMTUiIHk9Ii0xNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iIzA2YjZkNCIgLz4KICAgICAgPHRleHQgeD0iMzAiIHk9IjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMjBiMTgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTYiPjE8L3RleHQ+CiAgICAgIAogICAgICA8IS0tIEljb24gKFNwZWVjaCBidWJibGVzICsgUGVuY2lsKSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwLCAzMCkiPgogICAgICAgIDxyZWN0IHg9IjAiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjYiIHJ4PSI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8cGF0aCBkPSJNIDgsMzYgTCA0LDQyIEwgMTQsMzYgWiIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxNCIgY3k9IjIzIiByPSIyIiBmaWxsPSIjMmRkNGJmIiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjMiIHI9IjIiIGZpbGw9IiMyZGQ0YmYiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjYiIGN5PSIyMyIgcj0iMiIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICAKICAgICAgICA8cGF0aCBkPSJNIDMyLDUgTCA0NSwxOCIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPHBvbHlnb24gcG9pbnRzPSI0NSwxOCA0MiwyMyAzOSwyMCIgZmlsbD0iIzM4YmRmOCIgLz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBTdGVwIENvbnRlbnQgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCAxMTApIj4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1IiBsZXR0ZXItc3BhY2luZz0iMC41Ij4qQUkgdOG6oW8gdsSDbiBi4bqjbjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1IiBsZXR0ZXItc3BhY2luZz0iMC41Ij4oR2VtaW5pL0NoYXRHUFQpOjwvdGV4dD4KICAgICAgICAKICAgICAgICA8dGV4dCB4PSIxNDAiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0LjUiPkzDqm4ga2h1bmcga+G7i2NoIGLhuqNuLDwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjExMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNC41Ij5iacOqbiB04bqtcCBu4buZaSBkdW5nLjwvdGV4dD4KICAgICAgICAKICAgICAgICA8bGluZSB4MT0iMzAiIHkxPSIxNDUiIHgyPSIyNTAiIHkyPSIxNDUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIAogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYTdmM2QwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjEzLjUiPlRpbmggY2jhu4luaDo8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtc3R5bGU9Iml0YWxpYyI+VMawIGR1eSBraW5oIHThur8sPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXN0eWxlPSJpdGFsaWMiPm5nw7RuIG5n4buvIGLDoW8gY2jDrSwgVUVCLjwvdGV4dD4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDwhLS0gU3RlcCAyIENhcmQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODAsIDkwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzgwIiByeD0iMTIiIGZpbGw9InVybCgjc3RlcC1ncmFkKSIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgCiAgICAgIDwhLS0gVG9wIEJhZGdlIFN0ZXAgTnVtYmVyIC0tPgogICAgICA8cmVjdCB4PSIxNSIgeT0iLTE1IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHJ4PSI2IiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICA8dGV4dCB4PSIzMCIgeT0iNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAyMGIxOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNiI+MjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gSWNvbiAoUGFpbnRicnVzaCArIGNhbnZhcykgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMCwgMzApIj4KICAgICAgICA8cmVjdCB4PSIxMCIgeT0iNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjMwIiByeD0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjI1IiB5MT0iMzUiIHgyPSIyMCIgeTI9IjQ1IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8bGluZSB4MT0iMzUiIHkxPSIzNSIgeDI9IjQwIiB5Mj0iNDUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0gNSwyMCBMIDIyLDUiIHN0cm9rZT0iI2VhYjMwOCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjUiIHI9IjMiIGZpbGw9IiNlYWIzMDgiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIxNSIgcj0iMiIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjIzIiByPSIzIiBmaWxsPSIjMmRkNGJmIiAvPgogICAgICA8L2c+CgogICAgICA8IS0tIFN0ZXAgQ29udGVudCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsIDExMCkiPgogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlYWIzMDgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjUiPipBSSB04bqhbyBow6xuaCDhuqNuaDwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjQyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZWFiMzA4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1IiBsZXR0ZXItc3BhY2luZz0iMC41Ij4oTmFubyBCYW5hbmEgMi9EQUxMLUUgMyk6PC90ZXh0PgogICAgICAgIAogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iODUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQuNSI+VHLhu7FjIHF1YW4gw70gdMaw4bufbmc8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQuNSI+dHLhu6t1IHTGsOG7o25nLjwvdGV4dD4KICAgICAgICAKICAgICAgICA8bGluZSB4MT0iMzAiIHkxPSIxNDUiIHgyPSIyNTAiIHkyPSIxNDUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIAogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYTdmM2QwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjEzLjUiPlRpbmggY2jhu4luaDo8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5NGEzYjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtc3R5bGU9Iml0YWxpYyI+VGjDqm0gY2jhu68gVmnhu4d0LCBuw6l0PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iMjM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXN0eWxlPSJpdGFsaWMiPm5o4bqtbiBkaeG7h24gc2luaCB2acOqbiBWTi48L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KCiAgICA8IS0tIFN0ZXAgMyBDYXJkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMwLCA5MCkiPgogICAgICA8cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjM4MCIgcng9IjEyIiBmaWxsPSJ1cmwoI3N0ZXAtZ3JhZCkiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIAogICAgICA8IS0tIFRvcCBCYWRnZSBTdGVwIE51bWJlciAtLT4KICAgICAgPHJlY3QgeD0iMTUiIHk9Ii0xNSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiByeD0iNiIgZmlsbD0iI2E4NTVmNyIgLz4KICAgICAgPHRleHQgeD0iMzAiIHk9IjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMjBiMTgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTYiPjM8L3RleHQ+CiAgICAgIAogICAgICA8IS0tIEljb24gKFBhbGV0dGUgKyBkb2N1bWVudCBjaGVjaykgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMCwgMzApIj4KICAgICAgICA8cGF0aCBkPSJNIDEyLDIwIEMgMTIsMTIgMjgsMTIgMjgsMjAgQyAyOCwyOCAxMiwyOCAxMiwyMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE4IiByPSIxLjUiIGZpbGw9IiMyZGQ0YmYiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjMiIGN5PSIxNyIgcj0iMS41IiBmaWxsPSIjMmRkNGJmIiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjIzIiBjeT0iMjMiIHI9IjEuNSIgZmlsbD0iIzJkZDRiZiIgLz4KICAgICAgICAKICAgICAgICA8cmVjdCB4PSIzMCIgeT0iMTIiIHdpZHRoPSIyMiIgaGVpZ2h0PSIyOCIgcng9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxwb2x5bGluZSBwb2ludHM9IjM1LDI2IDM5LDMwIDQ2LDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgPC9nPgoKICAgICAgPCEtLSBTdGVwIENvbnRlbnQgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLCAxMTApIj4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYzA4NGZjIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1IiBsZXR0ZXItc3BhY2luZz0iMC41Ij4qQUkgdGhp4bq/dCBr4bq/L3Bow6JuIHTDrWNoPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE0MCIgeT0iNDIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjMDg0ZmMiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjUiPihDYW52YSBBSS9HcmFtbWFybHkpOjwvdGV4dD4KICAgICAgICAKICAgICAgICA8dGV4dCB4PSIxNDAiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0LjUiPlRoaeG6v3Qga+G6vyDEkeG7k25nIGLhu5k8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQuNSI+KHdhdGVyY29sb3IgcGFzdGVsKSw8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIxMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQuNSI+a2nhu4NtIHRyYSB0aeG6v25nIEFuaC48L3RleHQ+CiAgICAgICAgCiAgICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iMTY1IiB4Mj0iMjUwIiB5Mj0iMTY1IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAKICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC1zdHlsZT0iaXRhbGljIj5C4bqjbiBiw6FvIGPDoW8gaG/DoG4gY2jhu4luaDwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC1zdHlsZT0iaXRhbGljIj5jaHV5w6puIG5naGnhu4dwIMSR4buTbmcgYuG7mS48L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIEkgKExFRlQgLSBMT1dFUikgLSBTRUNUSU9OIElJSSAtLT4KICA8IS0tIFNFQ1RJT04gSUlJOiBTTyBTw4FOSCAmIFBIw4JOIFTDjUNIIEhJ4buGVSBRVeG6oiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNTIwKSIgZmlsdGVyPSJ1cmwoI3NoYWRvdykiPgogICAgPCEtLSBNYWluIE91dGVyIEJveCAtLT4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAwIiByeD0iMTYiIGZpbGw9InVybCgjY2FyZC1ncmFkKSIgc3Ryb2tlPSIjMTRiOGE2IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxyZWN0IHdpZHRoPSI3MjAiIGhlaWdodD0iNTAwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDM3MCwwIEEgMTAsMTAgMCAwIDEgMzgwLDEwIEwgMzkwLDQwIEEgMTYsMTYgMCAwIDEgMzc0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDcyYjQwIiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+SUlJLiBTTyBTw4FOSCAmYW1wOyBQSMOCTiBUw41DSCBISeG7hlUgUVXhuqI8L3RleHQ+CgogICAgPCEtLSBDb2x1bW4gQTogxq91IMSRaeG7g20gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSwgODApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzOTAiIHJ4PSIxMCIgZmlsbD0iIzAzMWEyNiIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIC8+CiAgICAgIAogICAgICA8IS0tIENpcmNsZSBCYWRnZSBBIC0tPgogICAgICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIxNiIgZmlsbD0iIzEwYjk4MSIgLz4KICAgICAgPHRleHQgeD0iMzUiIHk9IjQxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDIwYjE4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE2Ij5BPC90ZXh0PgogICAgICAKICAgICAgPCEtLSBHcmVlbiBDaGVjayBJY29uIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NSwgODApIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIuNSIgLz4KICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIxMiwyMCAxOCwyNiAyOCwxNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBDb250ZW50IEEgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCAxNTApIj4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjUiPkEuIMavdSDEkWnhu4NtOjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPkPhuqV1IHRyw7pjIG5oYW5oLDwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPsSRYSBjaGnhu4F1LCB0cuG7sWM8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjEyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNCI+cXVhbiDDvSB0xrDhu59uZzwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0Ij50cuG7q3UgdMaw4bujbmcuPC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CgogICAgPCEtLSBDb2x1bW4gQjogSOG6oW4gY2jhur8gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTUsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyMTAiIGhlaWdodD0iMzkwIiByeD0iMTAiIGZpbGw9IiMwMzFhMjYiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC42IiAvPgogICAgICAKICAgICAgPCEtLSBDaXJjbGUgQmFkZ2UgQiAtLT4KICAgICAgPGNpcmNsZSBjeD0iMzUiIGN5PSIzNSIgcj0iMTYiIGZpbGw9IiNlZjQ0NDQiIC8+CiAgICAgIDx0ZXh0IHg9IjM1IiB5PSI0MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAyMGIxOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNiI+QjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gUmVkIFggSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODUsIDgwKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjEzIiB5MT0iMTMiIHgyPSIyNyIgeTI9IjI3IiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgIDxsaW5lIHgxPSIyNyIgeTE9IjEzIiB4Mj0iMTMiIHkyPSIyNyIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBDb250ZW50IEIgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCAxNTApIj4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlZjQ0NDQiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjUiPkIuIEjhuqFuIGNo4bq/OjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPkFJIHbEg24gYuG6o24gIuG6o288L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9Ijg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0Ij50xrDhu59uZyIsIEFJIGjDrG5oPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjkwIiB5PSIxMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPuG6o25oIGzhu5dpIGNoaSB0aeG6v3Q8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjEzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNCI+bmjhu48vY2jhu68uIFRoaeG6v3U8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNCI+dGjhuqV1IGPhuqNtIHbEg248L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjE4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNCI+aMOzYSDEkeG7i2EgcGjGsMahbmcuPC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CgogICAgPCEtLSBDb2x1bW4gQzogUXV5IHRyw6xuaCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NSwgODApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjIxMCIgaGVpZ2h0PSIzOTAiIHJ4PSIxMCIgZmlsbD0iIzAzMWEyNiIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIC8+CiAgICAgIAogICAgICA8IS0tIENpcmNsZSBCYWRnZSBDIC0tPgogICAgICA8Y2lyY2xlIGN4PSIzNSIgY3k9IjM1IiByPSIxNiIgZmlsbD0iIzM4YmRmOCIgLz4KICAgICAgPHRleHQgeD0iMzUiIHk9IjQxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDIwYjE4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE2Ij5DPC90ZXh0PgogICAgICAKICAgICAgPCEtLSBNb3ZpZS9EaXJlY3RvciBSZWVsIEljb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg1LCA4MCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMi41IiAvPgogICAgICAgIDxyZWN0IHg9IjE0IiB5PSIxNCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8bGluZSB4MT0iMTQiIHkxPSIyMCIgeDI9IjI2IiB5Mj0iMjAiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMTQiIHgyPSIyMCIgeTI9IjI2IiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIAogICAgICAgIDwhLS0gRGlyZWN0b3IgY2hhaXIgYWNjZW50IC0tPgogICAgICAgIDxsaW5lIHgxPSIxMCIgeTE9IjMyIiB4Mj0iMzAiIHkyPSIzMiIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjIuNSIgLz4KICAgICAgICA8bGluZSB4MT0iMTQiIHkxPSIzMiIgeDI9IjgiIHkyPSIzOCIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjI2IiB5MT0iMzIiIHgyPSIzMiIgeTI9IjM4IiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBDb250ZW50IEMgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCAxNTApIj4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzOGJkZjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjMiPkMuIFRoYXkgxJHhu5VpOjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iNjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPlPhu7EgdGhheSDEkeG7lWkgcXV5PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjkwIiB5PSI4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNCI+dHLDrG5oOiBU4burIHTDrG0ga2nhur9tPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjkwIiB5PSIxMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTQiPnRo4bunIGPDtG5nIHNhbmc8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjEzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzJkZDRiZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+IlThu5VuZyDEkeG6oW8gZGnhu4VuIjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI5MCIgeT0iMTY1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXN0eWxlPSJpdGFsaWMiPihQcm9tcHRpbmcgJmFtcDs8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iOTAiIHk9IjE4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC1zdHlsZT0iaXRhbGljIj5LaeG7g20gY2jhu6luZykuPC90ZXh0PgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIENPTFVNTiBJSSAoUklHSFQgLSBMT1dFUikgLSBTRUNUSU9OIElWIC0tPgogIDwhLS0gU0VDVElPTiBJVjogxJDhuqBPIMSQ4buoQyAmIFZBSSBUUsOSIENPTiBOR8av4bucSSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MDAsIDY4MCkiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDwhLS0gTWFpbiBPdXRlciBCb3ggLS0+CiAgICA8cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSIzNDAiIHJ4PSIxNiIgZmlsbD0idXJsKCNjYXJkLWdyYWQpIiBzdHJva2U9IiMxNGI4YTYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjEwODAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE0YjhhNiIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDQ1MCwwIEEgMTAsMTAgMCAwIDEgNDYwLDEwIEwgNDcwLDQwIEEgMTYsMTYgMCAwIDEgNDU0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDcyYjQwIiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+SVYuIMSQ4bqgTyDEkOG7qEMgJmFtcDsgVkFJIFRSw5IgQ09OIE5Hxq/hu5xJPC90ZXh0PgoKICAgIDwhLS0gQ29sdW1uIExlZnQ6IMSQ4bqhbyDEkeG7qWMgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgODApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIyMzAiIHJ4PSIxMiIgZmlsbD0iIzAzMWIyOCIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgIAogICAgICA8IS0tIEJhbGFuY2UgU2NhbGUgSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDQwKSI+CiAgICAgICAgPGxpbmUgeDE9IjEwIiB5MT0iNzAiIHgyPSI3MCIgeTI9IjcwIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgIDxsaW5lIHgxPSI0MCIgeTE9IjIwIiB4Mj0iNDAiIHkyPSI3MCIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjYwIiB5Mj0iMjAiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBMZWZ0IFNjYWxlIEJvd2wgLS0+CiAgICAgICAgPGxpbmUgeDE9IjIwIiB5MT0iMjAiIHgyPSIxMCIgeTI9IjQ1IiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSIyMCIgeDI9IjMwIiB5Mj0iNDUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0gNSw0NSBRIDIwLDU1IDM1LDQ1IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CgogICAgICAgIDwhLS0gUmlnaHQgU2NhbGUgQm93bCAtLT4KICAgICAgICA8bGluZSB4MT0iNjAiIHkxPSIyMCIgeDI9IjUwIiB5Mj0iNDUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSI2MCIgeTE9IjIwIiB4Mj0iNzAiIHkyPSI0NSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPHBhdGggZD0iTSA0NSw0NSBRIDYwLDU1IDc1LDQ1IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gQ29udGVudCBFdGhpY3MgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzMCwgMzApIj4KICAgICAgICA8dGV4dCB4PSIwIiB5PSIyMCIgZmlsbD0iIzJkZDRiZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxNyI+xJDhuqFvIMSR4bupYzo8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMCIgeT0iNjAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTUiIHhtbDpzcGFjZT0icHJlc2VydmUiPlRyw61jaCBuZ3Xhu5NuIOG6o25oIEFJLCB0csOhbmggbOG6oW0gZOG7pW5nLDwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIwIiB5PSI5NSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+bmfGsOG7nWkgaOG7jWMga2jDtG5nIHRo4bulIMSR4buZbmcuPC90ZXh0PgogICAgICAgIAogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjE0NSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZm9udC1zdHlsZT0iaXRhbGljIj5Uw7RuIHRy4buNbmcgbGnDqm0gY2jDrW5oIGjhu41jIHRodeG6rXQgdsOgIGLhuqNuIHF1eeG7gW4gc+G7kS48L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KCiAgICA8IS0tIENvbHVtbiBSaWdodDogVmFpIHRyw7IgY29uIG5nxrDhu51pIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUwLCA4MCkiPgogICAgICA8cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjIzMCIgcng9IjEyIiBmaWxsPSIjMDMxYjI4IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgCiAgICAgIDwhLS0gQnJhaW4vSGVhcnQgSW50ZWdyYXRpb24gSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDMwKSI+CiAgICAgICAgPCEtLSBCcmFpbiAoTGVmdCBTaWRlIG9mIEljb24pIC0tPgogICAgICAgIDxwYXRoIGQ9Ik0gMzUsMzUgUSAyNSwxMCAxNSwyMCBRIDUsMjIgOCwzMiBRIDMsMzYgMTAsNDQgUSA1LDUyIDE0LDU0IFEgMjUsNTggMzUsNTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNzljNiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0gMTUsMzAgUSAyNSwzMiAzNSwzMiIgc3Ryb2tlPSIjZmY3OWM2IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgLz4KICAgICAgICA8cGF0aCBkPSJNIDE4LDQ0IFEgMjUsNDQgMzIsNDQiIHN0cm9rZT0iI2ZmNzljNiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBIZWFydCAoUmlnaHQgU2lkZSBvZiBJY29uKSAtLT4KICAgICAgICA8cGF0aCBkPSJNIDM1LDUyIEMgMzUsNTIgNjUsMzQgNjUsMjIgQyA2NSwxNCA1NSw4IDQ4LDE2IEMgNDQsMTEgMzUsMTQgMzUsMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTU1NSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIAogICAgICAgIDwhLS0gR2xvdyBDb3JlIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjM1IiBjeT0iMzAiIHI9IjQiIGZpbGw9IiMyZGQ0YmYiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQpIiAvPgogICAgICA8L2c+CgogICAgICA8IS0tIENvbnRlbnQgSHVtYW4gUm9sZSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMwLCAzMCkiPgogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjIwIiBmaWxsPSIjZmY1NTU1IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE3Ij5WYWkgdHLDsiBjb24gbmfGsOG7nWk6PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjYwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE1IiB4bWw6c3BhY2U9InByZXNlcnZlIj5BSSBsw6AgImPhu5luZyBz4buxIiDEkeG6r2MgbOG7sWMuPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjkwIiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1IiB4bWw6c3BhY2U9InByZXNlcnZlIj5UxrAgZHV5IHBo4bqjbiBiaeG7h24gJmFtcDsgVGjhuqV1IGPhuqNtPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjEyMCIgZmlsbD0iIzJkZDRiZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Y29uIG5nxrDhu51pIHF1eeG6v3QgxJHhu4tuaCBnacOhIHRy4buLIGN14buRaSBjw7luZy48L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gRk9PVEVSIFBBTkVMIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCAxMDMwKSI+CiAgICA8cmVjdCB3aWR0aD0iMTg0MCIgaGVpZ2h0PSIzNSIgcng9IjYiIGZpbGw9IiMwMjBiMTgiIGZpbGwtb3BhY2l0eT0iMC44IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgIDx0ZXh0IHg9IjE1IiB5PSIyMSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidKZXRCcmFpbnMgTW9ubycsIG1vbm9zcGFjZSIgZm9udC1zaXplPSIxMSI+Tmd14buTbjogQsOhbyBjw6FvIGvhu4tjaCBi4bqjbiB0bXAwYW1nMmVfYnQyX2RvYW5uZ29jbGluaDI1MDUxMjI3LmRvY3g8L3RleHQ+CiAgICA8dGV4dCB4PSIxODI1IiB5PSIyMSIgdGV4dC1hbmNob3I9ImVuZCIgZmlsbD0iIzJkZDRiZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxMSI+U0lOSCBWScOKTiBUSOG7sEMgSEnhu4ZOOiDEkE/DgE4gTkfhu4xDIExJTkgg4oCiIE1TVjogMjUwNTEyMjcg4oCiIEzhu5pQOiBRSCAyMDI1RSBLVFFUIDEwPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==";
