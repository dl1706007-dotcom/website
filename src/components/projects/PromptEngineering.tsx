import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  MessageSquare, 
  Settings, 
  ExternalLink, 
  Send,
  RefreshCw,
  Award,
  X,
  BookOpen,
  Check,
  Copy,
  Sliders,
  Zap,
  Info,
  Layers,
  HelpCircle,
  TrendingUp
} from 'lucide-react';

interface PromptLevel {
  id: 'basic' | 'improved' | 'advanced';
  label: string;
  badge: string;
  badgeColor: string;
  prompt: string;
  response: React.ReactNode;
  evaluation: string;
  metrics: {
    time: string;
    tokens: string;
    rating: number;
  };
}

export default function PromptEngineering() {
  const [currentLevel, setCurrentLevel] = useState<'basic' | 'improved' | 'advanced'>('advanced');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showOutput, setShowOutput] = useState<boolean>(true);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const handleOpenFullImage = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<html><head><title>Infographic Bài 03: Viết Prompt hiệu quả cho học tập</title></head><body style="margin:0; background:#020b18; display:flex; justify-content:center; align-items:center; min-height:100vh;"><img src="${INFOGRAPHIC_B3_BASE64}" style="max-width: 100%; max-height: 100vh; object-fit: contain;" /></body></html>`
      );
      newWindow.document.close();
    } else {
      const link = document.createElement('a');
      link.href = INFOGRAPHIC_B3_BASE64;
      link.target = '_blank';
      link.click();
    }
  };

  const promptLevels: Record<'basic' | 'improved' | 'advanced', PromptLevel> = {
    basic: {
      id: 'basic',
      label: 'Phiên bản A (Cơ bản)',
      badge: 'BASIC_PROMPT',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/20',
      prompt: "Giải thích Máy tính lượng tử",
      response: (
        <div className="space-y-1 text-navy-200">
          <p className="leading-relaxed">
            "Máy tính lượng tử là thiết bị tính toán sử dụng các tính chất vật lý của cơ học lượng tử như chồng chất (superposition) và vướng víu lượng tử (entanglement) để xử lý dữ liệu. Khác với máy tính cổ điển sử dụng bit (0 hoặc 1), máy tính lượng tử sử dụng qubit có thể ở trạng thái chồng chất của cả 0 và 1 cùng lúc, giúp giải quyết một số bài toán phức tạp nhanh hơn gấp nhiều lần."
          </p>
        </div>
      ),
      evaluation: "Khô khan, chứa nhiều thuật ngữ học thuật phức tạp, khó tiếp thu đối với người mới bắt đầu tiếp cận kiến thức mới.",
      metrics: { time: '180ms', tokens: '64 tokens', rating: 2 }
    },
    improved: {
      id: 'improved',
      label: 'Phiên bản B (Cải tiến)',
      badge: 'IMPROVED_PROMPT',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      prompt: "Bạn là một chuyên gia vật lý. Hãy giải thích Máy tính lượng tử cho sinh viên đại học không chuyên ngành khoa học.",
      response: (
        <div className="space-y-2 text-navy-200">
          <p className="font-semibold text-white">Chào các bạn sinh viên!</p>
          <p className="leading-relaxed">
            "Hãy tưởng tượng máy tính thông thường giống như một đồng xu chỉ có thể nằm ngửa (0) hoặc sấp (1) tại một thời điểm cố định. Máy tính lượng tử thì hoàn toàn khác, nó giống như một đồng xu đang xoay tròn trên bàn. Khi nó đang xoay, nó không hẳn là ngửa cũng không hẳn là sấp – nó là sự kết hợp của cả hai trạng thái cùng một lúc (chồng chất lượng tử)."
          </p>
          <p className="leading-relaxed">
            "Nhờ khả năng đặc biệt này, khi giải quyết một mê cung, máy tính thông thường phải thử từng con đường một, còn máy tính lượng tử có thể đi thử tất cả các con đường cùng một lúc."
          </p>
        </div>
      ),
      evaluation: "Dễ tiếp cận hơn nhờ phép ẩn dụ đồng xu xoay và định hướng đối tượng rõ ràng, tuy nhiên vẫn thiếu tư duy từng bước và ví dụ mẫu sâu sắc.",
      metrics: { time: '320ms', tokens: '142 tokens', rating: 4 }
    },
    advanced: {
      id: 'advanced',
      label: 'Phiên bản C (Nâng cao)',
      badge: 'ADVANCED_PROMPT',
      badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      prompt: "Đóng vai giảng viên MIT, giải thích Máy tính lượng tử bằng phương pháp Feynman. Nghĩ từng bước (step-by-step), dùng ví dụ trực quan như đồng xu xoay, so sánh song song máy tính thường và lượng tử. Giới hạn dưới 250 từ.",
      response: (
        <div className="space-y-3 text-navy-200">
          <div>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block font-mono">MIT Professor • Feynman Method:</span>
            <p className="mt-1 leading-relaxed">
              "Chào Linh. Với tư cách là một giáo sư tại MIT yêu thích phương pháp Feynman, tôi sẽ giải cấu trúc khái niệm phức tạp này thành 3 bước cực kỳ đơn giản để bạn dễ nắm bắt nhất nhé."
            </p>
          </div>
          
          <div className="p-3 bg-navy-950/60 rounded-xl border border-navy-850 space-y-2 leading-relaxed">
            <p>
              <strong className="text-white">1. Khác biệt về Qubit (Phép thử đồng xu)</strong><br />
              Máy tính cổ điển dùng bit giống chiếc công tắc chỉ có thể Bật (1) hoặc Tắt (0). Máy tính lượng tử dùng Qubit – như một đồng xu đang quay tròn trên bàn. Trong khi quay, nó vừa là 0 vừa là 1. Đây là <span className="text-teal-400 font-semibold">Chồng chất (Superposition)</span>.
            </p>
            <p>
              <strong className="text-white">2. Sức mạnh đồng bộ (Vướng víu lượng tử)</strong><br />
              Nếu ta có hai đồng xu quay liên kết với nhau, hành vi của đồng xu này lập tức quyết định trạng thái của đồng xu kia bất kể khoảng cách. Đây là <span className="text-teal-400 font-semibold">Vướng víu (Entanglement)</span>, cho phép xử lý siêu song song.
            </p>
            <p>
              <strong className="text-white">3. Giải mê cung trong 1 giây</strong><br />
              Thay vì thử từng lối đi rẽ trái rẽ phải một, máy tính lượng tử khám phá tất cả các lối đi cùng một lúc để tìm ra lối thoát tức thời.
            </p>
          </div>
        </div>
      ),
      evaluation: "Xuất sắc! Phương pháp Feynman giải cấu trúc kiến thức cực tốt. Thích hợp nhất cho tự học và nghiên cứu chuyên sâu, tăng khả năng tư duy logic.",
      metrics: { time: '410ms', tokens: '215 tokens', rating: 5 }
    }
  };

  const activeLevelData = promptLevels[currentLevel];

  const handleLevelChange = (level: 'basic' | 'improved' | 'advanced') => {
    setCurrentLevel(level);
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 800);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activeLevelData.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="space-y-6" id="prompt-engineering-project">
      {/* Top Banner Metadata */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-navy-900/60 p-5 rounded-2xl border border-navy-800/60 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500" />
        <div className="space-y-1 pl-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Bài tập 3 • Mục 3.4</span>
            <span className="text-xs text-navy-400 font-mono">MSV: 25051227</span>
          </div>
          <h4 className="text-base font-bold text-white font-display">
            Viết Prompt hiệu quả cho các tác vụ học tập
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cột 1: THỬ NGHIỆM 3 CẤP ĐỘ PROMPT */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3.5 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <Sliders size={14} className="text-teal-500" /> THỬ NGHIỆM 3 CẤP ĐỘ
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-teal-500/10 text-teal-400 rounded font-mono border border-teal-500/20">
                PROMPT COMPARISON
              </span>
            </div>

            {/* Level Selector Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-navy-900/60 p-1 rounded-xl border border-navy-850">
              {(['basic', 'improved', 'advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => handleLevelChange(lvl)}
                  className={`py-1.5 px-1 rounded-lg text-[9px] font-bold uppercase transition-all cursor-pointer ${
                    currentLevel === lvl 
                      ? 'bg-teal-500 text-navy-950 shadow-md' 
                      : 'text-navy-400 hover:text-white hover:bg-navy-800/40'
                  }`}
                >
                  {lvl === 'basic' ? 'Cơ bản (A)' : lvl === 'improved' ? 'Cải tiến (B)' : 'Nâng cao (C)'}
                </button>
              ))}
            </div>

            {/* Current Prompt Content */}
            <div className="p-3.5 bg-navy-900/50 rounded-xl border border-navy-800 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-teal-400 font-mono uppercase tracking-wider">Cú pháp Prompt thực hành</span>
                <button
                  onClick={handleCopyPrompt}
                  className="p-1 hover:bg-navy-800 text-navy-400 hover:text-teal-400 rounded transition-all"
                  title="Sao chép câu lệnh"
                >
                  {copiedPrompt ? <Check size={11} className="text-teal-400" /> : <Copy size={11} />}
                </button>
              </div>
              <p className="text-[11px] text-teal-300 font-mono italic leading-relaxed bg-navy-950 p-3 rounded-lg border border-navy-850 break-words select-all">
                "{activeLevelData.prompt}"
              </p>
            </div>

            {/* Simulated Specs */}
            <div className="p-3 bg-navy-900/40 rounded-xl border border-navy-850 space-y-2">
              <span className="text-[8px] font-bold text-purple-400 font-mono uppercase tracking-wider block">Kỹ thuật áp dụng</span>
              <div className="flex flex-wrap gap-1">
                {currentLevel === 'basic' && (
                  <span className="px-2 py-0.5 text-[8px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 rounded font-mono">DIRECT_ASK</span>
                )}
                {currentLevel === 'improved' && (
                  <>
                    <span className="px-2 py-0.5 text-[8px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono">ROLE_PLAY</span>
                    <span className="px-2 py-0.5 text-[8px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono">AUDIENCE_AWARE</span>
                  </>
                )}
                {currentLevel === 'advanced' && (
                  <>
                    <span className="px-2 py-0.5 text-[8px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded font-mono">FEYNMAN_METHOD</span>
                    <span className="px-2 py-0.5 text-[8px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded font-mono">CHAIN_OF_THOUGHT</span>
                    <span className="px-2 py-0.5 text-[8px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded font-mono">LIMIT_CONSTRAINT</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3.5 border-t border-navy-800/40 flex items-center justify-between text-[9px] text-navy-400 font-mono">
            <span>Đề tài: Máy tính lượng tử</span>
            <span>Phương pháp Feynman</span>
          </div>
        </div>

        {/* Cột 2: KẾT QUẢ ĐẦU RA TỪ AI & ĐÁNH GIÁ */}
        <div className="lg:col-span-4 bg-navy-950 p-5 rounded-2xl border border-navy-800 flex flex-col justify-between shadow-lg hover:border-teal-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-navy-800/80">
              <span className="text-xs font-bold text-navy-400 uppercase tracking-wider font-display flex items-center gap-1.5">
                <Cpu size={14} className="text-teal-500" /> PHẢN HỒI THỬ NGHIỆM
              </span>
              <span className="px-2 py-0.5 text-[9px] bg-purple-500/10 text-purple-400 rounded font-mono border border-purple-500/20">
                AI OUTCOMES
              </span>
            </div>

            {/* AI Response simulation loader */}
            {isRunning && (
              <div className="h-[250px] flex flex-col items-center justify-center text-center space-y-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-teal-500/30 border-t-teal-400 animate-spin" />
                  <Sparkles size={16} className="absolute inset-0 m-auto text-teal-400 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-white">Đang gửi truy vấn AI...</p>
                  <p className="text-[10px] text-navy-400 font-mono">Generating response stream...</p>
                </div>
              </div>
            )}

            {!isRunning && showOutput && (
              <div className="space-y-4 animate-fade-in">
                {/* Speech Bubble output */}
                <div className="p-4 bg-navy-900/50 rounded-xl border border-teal-500/10 relative">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-navy-800/40">
                    <MessageSquare size={13} className="text-teal-400" />
                    <span className="text-[10px] font-bold text-white font-display">Phản hồi của AI (Gemini Flash)</span>
                  </div>
                  <div className="text-[11px] leading-relaxed">
                    {activeLevelData.response}
                  </div>
                </div>

                {/* Evaluation card */}
                <div className="p-3 bg-teal-500/5 rounded-xl border border-teal-500/15 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal-400 uppercase tracking-wider font-display">
                    <Award size={13} />
                    <span>Đánh giá hiệu quả (Evaluation)</span>
                  </div>
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    {activeLevelData.evaluation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {!isRunning && showOutput && (
            <div className="mt-4 pt-3 border-t border-navy-800/40 flex items-center justify-between text-[9px] text-navy-400 font-mono">
              <span>Time: {activeLevelData.metrics.time}</span>
              <span>Length: {activeLevelData.metrics.tokens}</span>
            </div>
          )}
        </div>

        {/* Cột 3: MINH CHỨNG THỰC TẾ & KHÁM PHÁ CHI TIẾT */}
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
                  src={INFOGRAPHIC_B3_BASE64} 
                  alt="Infographic Bài 03: Viết Prompt hiệu quả cho học tập"
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
                Nguồn: Khung nguyên tắc C.R.E.A.T &amp; Minh họa bởi Gemini
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
                  href="https://docs.google.com/document/d/1tCkzCGIeoPcLsyIfuf2ibgYSmlA1_397/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-navy-900 hover:bg-navy-850 text-teal-400 font-bold rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-teal-500/20 cursor-pointer text-center"
                >
                  <BookOpen size={12} />
                  <span>Xem tài liệu minh chứng (Word)</span>
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-navy-400 text-center italic mt-4 leading-relaxed font-sans max-w-[240px] mx-auto">
              Hình 3: Sơ đồ phương pháp Feynman và mô hình C.R.E.A.T tối ưu hóa Prompt học thuật của Đoàn Ngọc Linh.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-navy-800/40 space-y-2">
            {/* Interactive button to trigger Modal details */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2.5 bg-teal-600/10 hover:bg-teal-600/20 text-teal-300 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-teal-500/20 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>Khám phá chi tiết Sandbox Bài 3</span>
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
            <h5 className="text-xs font-bold text-white mb-0.5">Kết luận chung về kỹ thuật Prompt của Linh:</h5>
            <p className="text-xs text-navy-300 leading-relaxed font-sans">
              "Việc làm chủ kỹ thuật Prompt Engineering, đặc biệt là ứng dụng mô hình C.R.E.A.T và phương pháp Feynman, biến AI từ một công cụ tra cứu thông thường thành một gia sư học thuật cá nhân hóa đắc lực, tăng 200% hiệu quả nghiên cứu và tự học khái niệm mới."
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED DIALOG MODAL (UX INTERACTION) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-3xl bg-navy-900 border border-navy-750 p-6 md:p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-navy-800 text-navy-400 hover:text-white transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 border-b border-navy-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[9px] font-bold bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 uppercase tracking-wider font-mono">Báo cáo Sandbox Lab</span>
                  <span className="text-[10px] text-navy-400 font-mono">Bài 03 • Kỹ thuật viết câu lệnh (Prompt Engineering)</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white font-display">
                  Đề tài: Viết Prompt hiệu quả cho các tác vụ học tập
                </h3>
                <p className="text-xs text-navy-300">
                  Sinh viên thực hiện: <span className="text-teal-300 font-semibold">Đoàn Ngọc Linh</span> (MSV: 25051227) • Học phần: <span className="text-teal-300 font-semibold">QH 2025E KTQT 10</span>
                </p>
              </div>

              {/* Detailed Content Divisions */}
              <div className="space-y-6">
                
                {/* PHẦN 1: PHÂN TÍCH TÁC VỤ HỌC TẬP */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-1.5">
                    <BookOpen size={14} />
                    <span>Phần 1: Phân tích các tác vụ học tập phổ biến</span>
                  </h4>
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    Tài liệu tập trung nghiên cứu phương án giải quyết triệt để rào cản và khó khăn của 3 tác vụ học tập phổ biến nhất mà sinh viên thường gặp phải:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 bg-navy-950/60 rounded-xl border border-navy-850 space-y-1">
                      <span className="w-5 h-5 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center text-[10px] font-bold font-mono">1</span>
                      <p className="text-xs font-bold text-white mt-1">Tóm tắt tài liệu học thuật</p>
                      <p className="text-[11px] text-navy-300 leading-relaxed">
                        Làm sao để chắt lọc khối lượng kiến thức cốt lõi khổng lồ mà không làm mất đi các số liệu thực nghiệm thực tế và phương pháp luận của tác giả.
                      </p>
                    </div>

                    <div className="p-3.5 bg-navy-950/60 rounded-xl border border-navy-850 space-y-1">
                      <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-[10px] font-bold font-mono">2</span>
                      <p className="text-xs font-bold text-white mt-1">Giải thích khái niệm phức tạp</p>
                      <p className="text-[11px] text-navy-300 leading-relaxed">
                        Ví dụ như <em>Máy tính lượng tử</em>. Đơn giản hóa toàn bộ các thuật ngữ kỹ thuật rườm rà nhưng vẫn giữ vững tính chính xác khoa học tuyệt đối.
                      </p>
                    </div>

                    <div className="p-3.5 bg-navy-950/60 rounded-xl border border-navy-850 space-y-1">
                      <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-[10px] font-bold font-mono">3</span>
                      <p className="text-xs font-bold text-white mt-1">Tạo câu hỏi Active Recall</p>
                      <p className="text-[11px] text-navy-300 leading-relaxed">
                        Thiết kế ngân hàng câu hỏi ôn tập dựa theo <strong>thang đo nhận thức Bloom</strong> nhằm kích thích suy luận phản biện thay vì học vẹt máy móc.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PHẦN 2: XÂY DỰNG VÀ SO SÁNH CÁC PHIÊN BẢN PROMPT */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-1.5">
                    <Layers size={14} />
                    <span>Phần 2: Xây dựng & So sánh 3 cấp độ viết Prompt</span>
                  </h4>
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    Tác giả đã thử nghiệm thực tế 3 cấp độ viết prompt để yêu cầu AI giải thích khái niệm <strong>Máy tính lượng tử</strong>, ghi nhận sự tiến hóa rõ rệt của kết quả:
                  </p>

                  <div className="space-y-2.5">
                    <div className="p-3 bg-navy-950/80 rounded-xl border border-navy-850 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="px-1.5 py-0.5 text-[8px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 rounded font-mono">Phiên bản A (Cơ bản)</span>
                        <p className="text-[11px] text-navy-200">
                          Câu lệnh trực diện, ngắn gọn (<span className="text-teal-300">"Giải thích Máy tính lượng tử"</span>).
                        </p>
                      </div>
                      <span className="text-[10px] text-red-400 font-semibold bg-red-500/5 px-2 py-1 rounded border border-red-500/10 shrink-0">
                        ➜ Kết quả khô khan, khó hiểu với người mới.
                      </span>
                    </div>

                    <div className="p-3 bg-navy-950/80 rounded-xl border border-navy-850 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="px-1.5 py-0.5 text-[8px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded font-mono">Phiên bản B (Cải tiến)</span>
                        <p className="text-[11px] text-navy-200">
                          Bổ sung vai trò (<span className="text-teal-300">chuyên gia vật lý</span>) và đối tượng hướng đến (<span className="text-teal-300">sinh viên đại học không chuyên</span>).
                        </p>
                      </div>
                      <span className="text-[10px] text-purple-400 font-semibold bg-purple-500/5 px-2 py-1 rounded border border-purple-500/10 shrink-0">
                        ➜ Kết quả dễ tiếp cận, có cấu trúc tốt hơn.
                      </span>
                    </div>

                    <div className="p-3 bg-navy-950/80 rounded-xl border border-navy-850 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <span className="px-1.5 py-0.5 text-[8px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded font-mono">Phiên bản C (Nâng cao)</span>
                        <p className="text-[11px] text-navy-200">
                          Kết hợp vai trò (<span className="text-teal-300">giảng viên MIT</span>), bối cảnh, <span className="text-teal-300">phương pháp Feynman</span>, tư duy từng bước (<span className="text-teal-300">Chain-of-Thought</span>) và giới hạn từ.
                        </p>
                      </div>
                      <span className="text-[10px] text-teal-400 font-semibold bg-teal-500/5 px-2 py-1 rounded border border-teal-500/10 shrink-0">
                        ➜ Kết quả xuất sắc, có tính ứng dụng cao nhất.
                      </span>
                    </div>
                  </div>
                </div>

                {/* PHẦN 3: TỔNG KẾT NGUYÊN TẮC VIẾT PROMPT (MÔ HÌNH C.R.E.A.T) */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono flex items-center gap-1.5">
                    <Zap size={14} />
                    <span>Phần 3: Tổng kết nguyên tắc viết Prompt (Mô hình C.R.E.A.T)</span>
                  </h4>
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    Để kiến tạo nên một prompt tối ưu phục vụ học tập và nghiên cứu học thuật sâu sắc, Linh đã đúc rút ra mô hình <strong>C.R.E.A.T</strong> với 5 chữ vàng cốt lõi:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                    <div className="p-3 bg-navy-950 rounded-xl border border-navy-850 space-y-1 hover:border-teal-500/30 transition-all text-center sm:text-left">
                      <span className="text-xs font-black text-teal-400 font-mono block">C – Context</span>
                      <span className="text-[9px] text-navy-400 font-mono uppercase block">(Bối cảnh)</span>
                      <p className="text-[10px] text-navy-200 pt-1 leading-snug">
                        Thiết lập vai trò cụ thể (Role-play) và hoàn cảnh học tập chi tiết.
                      </p>
                    </div>

                    <div className="p-3 bg-navy-950 rounded-xl border border-navy-850 space-y-1 hover:border-teal-500/30 transition-all text-center sm:text-left">
                      <span className="text-xs font-black text-purple-400 font-mono block">R – Result</span>
                      <span className="text-[9px] text-navy-400 font-mono uppercase block">(Kết quả)</span>
                      <p className="text-[10px] text-navy-200 pt-1 leading-snug">
                        Định hình rõ cấu trúc đầu ra (dạng bảng, danh sách, sơ đồ hoặc tóm tắt).
                      </p>
                    </div>

                    <div className="p-3 bg-navy-950 rounded-xl border border-navy-850 space-y-1 hover:border-teal-500/30 transition-all text-center sm:text-left">
                      <span className="text-xs font-black text-blue-400 font-mono block">E – Example</span>
                      <span className="text-[9px] text-navy-400 font-mono uppercase block">(Ví dụ)</span>
                      <p className="text-[10px] text-navy-200 pt-1 leading-snug">
                        Cung cấp 1-2 mẫu câu trả lời mong muốn (áp dụng kỹ thuật Few-shot).
                      </p>
                    </div>

                    <div className="p-3 bg-navy-950 rounded-xl border border-navy-850 space-y-1 hover:border-teal-500/30 transition-all text-center sm:text-left">
                      <span className="text-xs font-black text-amber-400 font-mono block">A – Adjust</span>
                      <span className="text-[9px] text-navy-400 font-mono uppercase block">(Điều chỉnh)</span>
                      <p className="text-[10px] text-navy-200 pt-1 leading-snug">
                        Đặt các ràng buộc giới hạn chặt chẽ (độ dài, đối tượng đọc, giọng văn).
                      </p>
                    </div>

                    <div className="p-3 bg-navy-950 rounded-xl border border-navy-850 space-y-1 hover:border-teal-500/30 transition-all text-center sm:text-left">
                      <span className="text-xs font-black text-red-400 font-mono block">T – Thought</span>
                      <span className="text-[9px] text-navy-400 font-mono uppercase block">(Tư duy)</span>
                      <p className="text-[10px] text-navy-200 pt-1 leading-snug">
                        Yêu cầu AI "suy nghĩ từng bước một" (Step-by-step) để tăng tính logic sâu.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ACTION CTA BUTTONS */}
                <div className="p-4 bg-teal-500/5 rounded-xl border border-teal-500/15 text-center space-y-3">
                  <p className="text-xs text-navy-200 font-sans">
                    Báo cáo thực hành Kỹ thuật đặt câu lệnh của Đoàn Ngọc Linh đã được hệ thống hóa đầy đủ trên tài liệu Word.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                    <a 
                      href="https://docs.google.com/document/d/1tCkzCGIeoPcLsyIfuf2ibgYSmlA1_397/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                    >
                      <span>Xem báo cáo Word đầy đủ (Bài 3)</span>
                      <ExternalLink size={12} />
                    </a>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 bg-navy-800 hover:bg-navy-750 text-navy-300 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 border border-navy-700"
                    >
                      Đóng cửa sổ
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ZOOMED INFOGRAPHIC MODAL */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomOpen(false)}
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-md cursor-zoom-out"
            />
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full bg-navy-900 p-2 rounded-2xl border border-teal-500/30 shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-navy-950/80 hover:bg-navy-900 text-white transition-all cursor-pointer border border-navy-800"
              >
                <X size={16} />
              </button>
              <div className="overflow-auto max-h-[85vh]">
                <img 
                  src={INFOGRAPHIC_B3_BASE64} 
                  alt="Infographic Bài 03 Zoomed" 
                  className="w-full h-auto block rounded-lg"
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


export const INFOGRAPHIC_B3_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDwhLS0gRGVmaW5pdGlvbnMgZm9yIEdyYWRpZW50cywgU2hhZG93cywgYW5kIEZpbHRlcnMgLS0+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDIwYjE4IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzA0MWEyNiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDIwYjE4IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iaGVhZGVyLWdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNGQ2MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiMwMDY2N2EiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwNGQ2MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImNhcmQtZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDkzMTQ1IiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNDFhMjYiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJhY2NlbnQtdGVhbCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyZGQ0YmYiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBkOTQ4OCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii01JSIgeT0iLTUlIiB3aWR0aD0iMTEwJSIgaGVpZ2h0PSIxMTAlIj4KICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMCIgZHk9IjEwIiBzdGREZXZpYXRpb249IjgiIGZsb29kLWNvbG9yPSIjMDAwMDAwIiBmbG9vZC1vcGFjaXR5PSIwLjYiLz4KICAgIDwvZmlsdGVyPgogICAgPGZpbHRlciBpZD0iZ2xvdy10ZWFsIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIgcmVzdWx0PSJibHVyIiAvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iYmx1ciIgb3BlcmF0b3I9Im92ZXIiIC8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9Imdsb3ctcHVycGxlIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIj4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIgcmVzdWx0PSJibHVyIiAvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iYmx1ciIgb3BlcmF0b3I9Im92ZXIiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDwhLS0gQmFja2dyb3VuZCAtLT4KICA8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2JnLWdyYWQpIiAvPgogIAogIDwhLS0gU3VidGxlIEhpZ2gtVGVjaCBHcmlkIFBhdHRlcm4gLS0+CiAgPGcgb3BhY2l0eT0iMC4wMyIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjEiPgogICAgPHBhdGggZD0iTSAwLDUwIEwgMTkyMCw1MCBNIDAsMTAwIEwgMTkyMCwxMDAgTSAwLDE1MCBMIDE5MjAsMTUwIE0gMCwyMDAgTCAxOTIwLDIwMCBNIDAsMjUwIEwgMTkyMCwyNTAgTSAwLDMwMCBMIDE5MjAsMzAwIE0gMCwzNTAgTCAxOTIwLDM1MCBNIDAsNDAwIEwgMTkyMCw0MDAgTSAwLDQ1MCBMIDE5MjAsNDUwIE0gMCw1MDAgTCAxOTIwLDUwMCBNIDAsNTUwIEwgMTkyMCw1NTAgTSAwLDYwMCBMIDE5MjAsNjAwIE0gMCw2NTAgTCAxOTIwLDY1MCBNIDAsNzAwIEwgMTkyMCw3MDAgTSAwLDc1MCBMIDE5MjAsNzUwIE0gMCw4MDAgTCAxOTIwLDgwMCBNIDAsODUwIEwgMTkyMCw4NTAgTSAwLDkwMCBMIDE5MjAsOTAwIE0gMCw5NTAgTCAxOTIwLDk1MCBNIDAsMTAwMCBMIDE5MjAsMTAwMCBNIDAsMTA1MCBMIDE5MjAsMTA1MCIgLz4KICAgIDxwYXRoIGQ9Ik0gNTAsMCBMIDUwLDEwODAgTSAxMDAsMCBMIDEwMCwxMDgwIE0gMTUwLDAgTCAxNTAsMTA4MCBNIDIwMCwwIEwgMjAwLDEwODAgTSAyNTAsMCBMIDI1MCwxMDgwIE0gMzAwLDAgTCAzMDAsMTA4MCBNIDM1MCwwIEwgMzUwLDEwODAgTSA0MDAsMCBMIDQwMCwxMDgwIE0gNDUwLDAgTCA0NTAsMTA4MCBNIDUwMCwwIEwgNTAwLDEwODAgTSA1NTAsMCBMIDU1MCwxMDgwIE0gNjAwLDAgTCA2MDAsMTA4MCBNIDY1MCwwIEwgNjUwLDEwODAgTSA3MDAsMCBMIDcwMCwxMDgwIE0gNzUwLDAgTCA3NTAsMTA4MCBNIDgwMCwwIEwgODAwLDEwODAgTSA4NTAsMCBMIDg1MCwxMDgwIE0gOTAwLDAgTCA5MDAsMTA4MCBNIDk1MCwwIEwgOTUwLDEwODAgTSAxMDAwLDAgTCAxMDAwLDEwODAgTSAxMDUwLDAgTCAxMDUwLDEwODAgTSAxMTAwLDAgTCAxMTAwLDEwODAgTSAxMTUwLDAgTCAxMTUwLDEwODAgTSAxMjAwLDAgTCAxMjAwLDEwODAgTSAxMjUwLDAgTCAxMjUwLDEwODAgTSAxMzAwLDAgTCAxMzAwLDEwODAgTSAxMzUwLDAgTCAxMzUwLDEwODAgTSAxNDAwLDAgTCAxNDAwLDEwODAgTSAxNDUwLDAgTCAxNDUwLDEwODAgTSAxNTAwLDAgTCAxNTAwLDEwODAgTSAxNTUwLDAgTCAxNTUwLDEwODAgTSAxNjAwLDAgTCAxNjAwLDEwODAgTSAxNjUwLDAgTCAxNjUwLDEwODAgTSAxNzAwLDAgTCAxNzAwLDEwODAgTSAxNzUwLDAgTCAxNzUwLDEwODAgTSAxODAwLDAgTCAxODAwLDEwODAgTSAxODUwLDAgTCAxODUwLDEwODAgTSAxOTAwLDAgTCAxOTAwLDEwODAiIC8+CiAgPC9nPgoKICA8IS0tIFRpdGxlIEhlYWRlciBTZWN0aW9uIC0tPgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+CiAgICA8IS0tIE1haW4gVGl0bGUgdGV4dCAtLT4KICAgIDx0ZXh0IHg9Ijk2MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNDAiIGxldHRlci1zcGFjaW5nPSIxIj5Cw4BJIDM6IFZJ4bq+VCBQUk9NUFQgSEnhu4ZVIFFV4bqiIENITyBI4buMQyBU4bqsUDwvdGV4dD4KICAgIDx0ZXh0IHg9Ijk2MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNDAiIGxldHRlci1zcGFjaW5nPSIxIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgb3BhY2l0eT0iMC42Ij5Cw4BJIDM6IFZJ4bq+VCBQUk9NUFQgSEnhu4ZVIFFV4bqiIENITyBI4buMQyBU4bqsUDwvdGV4dD4KICAgIAogICAgPCEtLSBHbG93aW5nIEFJIGJyYWluIGxvZ28gbGVmdCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MCwgMzUpIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMi41IiBmaWxsPSJub25lIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSI+CiAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjIwIiAvPgogICAgICA8cGF0aCBkPSJNMTUsMjUgUTI1LDEwIDM1LDI1IFQyNSw0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMiAyIiAvPgogICAgICA8Y2lyY2xlIGN4PSIyNSIgY3k9IjI1IiByPSI2IiBmaWxsPSIjMmRkNGJmIiAvPgogICAgPC9nPgogICAgPCEtLSBHbG93aW5nIEFJIGJyYWluIGxvZ28gcmlnaHQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzMwLCAzNSkiIHN0cm9rZT0iIzJkZDRiZiIgc3Ryb2tlLXdpZHRoPSIyLjUiIGZpbGw9Im5vbmUiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIj4KICAgICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjAiIC8+CiAgICAgIDxwYXRoIGQ9Ik0xNSwyNSBRMjUsMTAgMzUsMjUgVDI1LDQwIiBzdHJva2UtZGFzaGFycmF5PSIyIDIiIC8+CiAgICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjYiIGZpbGw9IiMyZGQ0YmYiIC8+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIENPTFVNTiBJIC0gMS4gUEjDgk4gVMONQ0ggVMOBQyBW4bukIEjhu4xDIFThuqxQIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCAxMjApIiBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIENvbnRhaW5lciBDYXJkIC0tPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI0ODAiIHJ4PSIyMCIgZmlsbD0idXJsKCNjYXJkLWdyYWQpIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjkxMCIgaGVpZ2h0PSI0ODAiIHJ4PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC4zIiBmaWx0ZXI9InVybCgjZ2xvdy10ZWFsKSIgLz4KICAgIAogICAgPCEtLSBTZWN0aW9uIFRpdGxlIEJhbm5lciAtLT4KICAgIDx0ZXh0IHg9IjQwIiB5PSI0NSIgZmlsbD0iIzM4YmRmOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyNCIgbGV0dGVyLXNwYWNpbmc9IjEiPjEuIFBIw4JOIFTDjUNIIFTDgUMgVuG7pCBI4buMQyBU4bqsUDwvdGV4dD4KCiAgICA8IS0tIFN1Yi1pdGVtIDE6IFTDs20gdOG6r3QgdMOgaSBsaeG7h3UgaOG7jWMgdGh14bqtdCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDcwKSI+CiAgICAgIDwhLS0gR3JhcGhpYyBJY29uIEZyYW1lIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAsIDgwKSI+CiAgICAgICAgPHJlY3QgeD0iLTQwIiB5PSItNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMDUiIHJ4PSI2IiBmaWxsPSIjMDQxYTI2IiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMyIgLz4KICAgICAgICA8bGluZSB4MT0iLTI1IiB5MT0iLTMwIiB4Mj0iMjUiIHkyPSItMzAiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgIDxsaW5lIHgxPSItMjUiIHkxPSItMTUiIHgyPSIyNSIgeTI9Ii0xNSIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjMiIC8+CiAgICAgICAgPGxpbmUgeDE9Ii0yNSIgeTE9IjAiIHgyPSIxMCIgeTI9IjAiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgIDxsaW5lIHgxPSItMjUiIHkxPSIxNSIgeDI9IjE1IiB5Mj0iMTUiIHN0cm9rZT0iIzM4YmRmOCIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgIAogICAgICAgIDwhLS0gTWFnbmlmeWluZyBnbGFzcyBpbnNpZGUgLS0+CiAgICAgICAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMTYiIGZpbGw9IiMwNDFhMjYiIHN0cm9rZT0iI2ZiOTIzYyIgc3Ryb2tlLXdpZHRoPSIzLjUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjM2IiB5MT0iMzYiIHgyPSI1MiIgeTI9IjUyIiBzdHJva2U9IiNmYjkyM2MiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIFR5cG9ncmFwaHkgZGVzY3JpcHRpb24gLS0+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmVmMDhhIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIyIj5Uw7NtIHThuq90IHTDoGkgbGnhu4d1PC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZlZjA4YSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMiI+aOG7jWMgdGh14bqtdDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIyOTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYuNSI+Q2jhuq90IGzhu41jIGtp4bq/biB0aOG7qWM8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMzI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNTAwIiBmb250LXNpemU9IjE2LjUiPnRo4bupYyBj4buRdCBsw7VpPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gU3ViLWl0ZW0gMjogR2nhuqNpIHRow61jaCBraMOhaSBuaeG7h20gcGjhu6ljIHThuqFwIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA1LCA3MCkiPgogICAgICA8IS0tIEdyYXBoaWMgSWNvbiBGcmFtZSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLCA4MCkiPgogICAgICAgIDwhLS0gQXRvbWljIE9yYml0cyAtLT4KICAgICAgICA8ZWxsaXBzZSBjeD0iMCIgY3k9IjAiIHJ4PSI1NSIgcnk9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMyZGQ0YmYiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoMzApIiBvcGFjaXR5PSIwLjciIC8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjAiIGN5PSIwIiByeD0iNTUiIHJ5PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmRkNGJmIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0icm90YXRlKC0zMCkiIG9wYWNpdHk9IjAuNyIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSI0NSIgY3k9IjEyIiByPSI0IiBmaWxsPSIjMDBmMmZlIiAvPgogICAgICAgIDxjaXJjbGUgY3g9Ii00NSIgY3k9Ii0xMiIgcj0iNCIgZmlsbD0iIzAwZjJmZSIgLz4KICAgICAgICAKICAgICAgICA8IS0tIENvcmUgQ1BVIENoaXAgLS0+CiAgICAgICAgPHJlY3QgeD0iLTMwIiB5PSItMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiMwOTMxNDUiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICAgIDwhLS0gQ1BVIHBpbnMgLS0+CiAgICAgICAgPGxpbmUgeDE9Ii0zOCIgeTE9Ii0xNSIgeDI9Ii0zMCIgeTI9Ii0xNSIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9Ii0zOCIgeTE9IjAiIHgyPSItMzAiIHkyPSIwIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8bGluZSB4MT0iLTM4IiB5MT0iMTUiIHgyPSItMzAiIHkyPSIxNSIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjMwIiB5MT0iLTE1IiB4Mj0iMzgiIHkyPSItMTUiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSIzOCIgeTI9IjAiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjE1IiB4Mj0iMzgiIHkyPSIxNSIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9Ii0xNSIgeTE9Ii0zOCIgeDI9Ii0xNSIgeTI9Ii0zMCIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjAiIHkxPSItMzgiIHgyPSIwIiB5Mj0iLTMwIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8bGluZSB4MT0iMTUiIHkxPSItMzgiIHgyPSIxNSIgeTI9Ii0zMCIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9Ii0xNSIgeTE9IjMwIiB4Mj0iLTE1IiB5Mj0iMzgiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIwIiB5MT0iMzAiIHgyPSIwIiB5Mj0iMzgiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIxNSIgeTE9IjMwIiB4Mj0iMTUiIHkyPSIzOCIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgCiAgICAgICAgPCEtLSBJbnNpZGUgQ1BVIHN5bWJvbCAtLT4KICAgICAgICA8cmVjdCB4PSItMTQiIHk9Ii0xNCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiByeD0iMyIgZmlsbD0iI2E4NTVmNyIgb3BhY2l0eT0iMC4zIiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjYTg1NWY3IiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIFR5cG9ncmFwaHkgZGVzY3JpcHRpb24gLS0+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmVmMDhhIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIyIj5HaeG6o2kgdGjDrWNoIGtow6FpPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZlZjA4YSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMiI+bmnhu4dtIHBo4bupYyB04bqhcDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIyOTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYuNSI+xJDGoW4gZ2nhuqNuIGjDs2EgdGh14bqtdDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTUwIiB5PSIzMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYuNSI+bmfhu68sIGNow61uaCB4w6FjIGtob2E8L3RleHQ+CiAgICA8L2c+CgogICAgPCEtLSBTdWItaXRlbSAzOiBU4bqhbyBjw6J1IGjhu49pIMO0biB04bqtcCAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxMCwgNzApIj4KICAgICAgPCEtLSBRdWVzdGlvbiBtYXJrIGFuZCBCbG9vbSdzIFRheG9ub215IHB5cmFtaWQgZ3JhcGhpYyAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLCA4MCkiPgogICAgICAgIDwhLS0gR2lhbnQgcXVlc3Rpb24gbWFyayAtLT4KICAgICAgICA8dGV4dCB4PSItNTAiIHk9IjI1IiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9Ijk1IiBvcGFjaXR5PSIwLjgiPj88L3RleHQ+CiAgICAgICAgCiAgICAgICAgPCEtLSBCbG9vbSBQeXJhbWlkIC0tPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLCAtNTApIj4KICAgICAgICAgIDwhLS0gVHJpYW5nbGUgc2VnbWVudHMgc3RhY2tlZCAtLT4KICAgICAgICAgIDwhLS0gMS4gUmVtZW1iZXIgKEJvdHRvbSkgLS0+CiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjIwLDEwMCAxMzAsMTAwIDExOCw4NSAzMiw4NSIgZmlsbD0iI2E4NTVmNyIgc3Ryb2tlPSIjMDQxYTI2IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgICA8dGV4dCB4PSI3NSIgeT0iOTYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwNDFhMjYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjgiPlRlaXN0YW5ib25hPC90ZXh0PgogICAgICAgICAgPCEtLSAyLiBVbmRlcnN0YW5kIC0tPgogICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIzMiw4NSAxMTgsODUgMTA4LDcwIDQyLDcwIiBmaWxsPSIjM2I4MmY2IiBzdHJva2U9IiMwNDFhMjYiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAgIDx0ZXh0IHg9Ijc1IiB5PSI4MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iOCI+RW9hdGFib3JvPC90ZXh0PgogICAgICAgICAgPCEtLSAzLiBBcHBseSAtLT4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iNDIsNzAgMTA4LDcwIDk4LDU1IDUyLDU1IiBmaWxsPSIjMDZiNmQ0IiBzdHJva2U9IiMwNDFhMjYiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAgIDx0ZXh0IHg9Ijc1IiB5PSI2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzA0MWEyNiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iOCI+RW1vbmFsZWlhPC90ZXh0PgogICAgICAgICAgPCEtLSA0LiBBbmFseXplIC0tPgogICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSI1Miw1NSA5OCw1NSA4OCw0MCA2Miw0MCIgZmlsbD0iIzEwYjk4MSIgc3Ryb2tlPSIjMDQxYTI2IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgICA8dGV4dCB4PSI3NSIgeT0iNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwNDFhMjYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjgiPkRpc2N4ZWVuPC90ZXh0PgogICAgICAgICAgPCEtLSA1LiBFdmFsdWF0ZSAtLT4KICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iNjIsNDAgODgsNDAgNzgsMjUgNzIsMjUiIGZpbGw9IiNmNTllMGIiIHN0cm9rZT0iIzA0MWEyNiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgICAgPHRleHQgeD0iNzUiIHk9IjM2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDQxYTI2IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI3Ij5RdWFubGFtPC90ZXh0PgogICAgICAgICAgPCEtLSA2LiBDcmVhdGUgKFRvcCkgLS0+CiAgICAgICAgICA8cG9seWdvbiBwb2ludHM9IjcyLDI1IDc4LDI1IDc1LDE1IiBmaWxsPSIjZWY0NDQ0IiBzdHJva2U9IiMwNDFhMjYiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAgIDx0ZXh0IHg9Ijc1IiB5PSIyMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNyI+UmFrPC90ZXh0PgogICAgICAgICAgCiAgICAgICAgICA8IS0tIFNpZGUgbGFiZWwgc3RhbmRhcmQgaW5kaWNhdG9yIC0tPgogICAgICAgICAgPHRleHQgeD0iMTQwIiB5PSIzMCIgZmlsbD0iI2E4NTVmNyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTAiPkJsb29tJ3M8L3RleHQ+CiAgICAgICAgICA8dGV4dCB4PSIxNDAiIHk9IjQ0IiBmaWxsPSIjYTg1NWY3IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxMCI+VGF4b25vbXk8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIFR5cG9ncmFwaHkgZGVzY3JpcHRpb24gLS0+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmVmMDhhIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIyIj5U4bqhbyBjw6J1IGjhu49pPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZlZjA4YSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMiI+w7RuIHThuq1wPC90ZXh0PgogICAgICA8dGV4dCB4PSIxNTAiIHk9IjI5NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNi41Ij5Lw61jaCB0aMOtY2ggc3V5IGx14bqtbiw8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjE1MCIgeT0iMzI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNTAwIiBmb250LXNpemU9IjE2LjUiPnRoYW5nIMSRbyBCbG9vbTwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElJIC0gMi4gU08gU8OBTkggUEhJw4pOIELhuqJOIFBST01QVCAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NzUsIDEyMCkiIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDwhLS0gQ29udGFpbmVyIENhcmQgLS0+CiAgICA8cmVjdCB3aWR0aD0iOTEwIiBoZWlnaHQ9IjQ4MCIgcng9IjIwIiBmaWxsPSJ1cmwoI2NhcmQtZ3JhZCkiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICA8cmVjdCB3aWR0aD0iOTEwIiBoZWlnaHQ9IjQ4MCIgcng9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiAvPgogICAgCiAgICA8IS0tIFNlY3Rpb24gVGl0bGUgQmFubmVyIC0tPgogICAgPHRleHQgeD0iNDAiIHk9IjQ1IiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI0IiBsZXR0ZXItc3BhY2luZz0iMSI+Mi4gU08gU8OBTkggUEhJw4pOIELhuqJOIFBST01QVDwvdGV4dD4KCiAgICA8IS0tIFZlcnNpb24gQSBDYXJkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDc1KSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjAiIGhlaWdodD0iMzc1IiByeD0iMTYiIGZpbGw9IiMwNDFhMjYiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTNjNWZkIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIwIj5QaGnDqm4gYuG6o24gQTwvdGV4dD4KICAgICAgPHRleHQgeD0iMTMwIiB5PSI2NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzkzYzVmZCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNiI+KEPGoSBi4bqjbik8L3RleHQ+CiAgICAgIAogICAgICA8IS0tIEJsdWUgU2VwYXJhdG9yIC0tPgogICAgICA8bGluZSB4MT0iMzAiIHkxPSI4NSIgeDI9IjIzMCIgeTI9Ijg1IiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS13aWR0aD0iMS41IiBvcGFjaXR5PSIwLjQiIC8+CiAgICAgIAogICAgICA8dGV4dCB4PSIxMzAiIHk9IjEyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTgiPkzhu4duaCB0cuG7sWMgZGnhu4duLDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTMwIiB5PSIxNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjE4Ij5uZ+G6r24gZ+G7jW48L3RleHQ+CiAgICAgIAogICAgICA8IS0tIEJpZyBBcnJvdyBJY29uIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAsIDE5NSkiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIj4KICAgICAgICA8bGluZSB4MT0iMCIgeTE9IjE1IiB4Mj0iMzUiIHkyPSIxNSIgLz4KICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIyMCwwIDM1LDE1IDIwLDMwIiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEJvdHRvbSBkcmF3YmFjayBkZXNjcmlwdGlvbiAtLT4KICAgICAgPHJlY3QgeD0iMjAiIHk9IjI3NSIgd2lkdGg9IjIyMCIgaGVpZ2h0PSI3NSIgcng9IjEwIiBmaWxsPSIjMWUyOTNiIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC45IiAvPgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjMwOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y4NzE3MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNi41Ij5LaMO0IGtoYW4sPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjMzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2Y4NzE3MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNi41Ij5raMOzIGhp4buDdTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIFZlcnNpb24gQiBDYXJkIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzI1LCA3NSkiPgogICAgICA8cmVjdCB3aWR0aD0iMjYwIiBoZWlnaHQ9IjM3NSIgcng9IjE2IiBmaWxsPSIjMDQxYTI2IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgPHRleHQgeD0iMTMwIiB5PSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2E3ZjNkMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMCI+UGhpw6puIGLhuqNuIEI8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjEzMCIgeT0iNjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNhN2YzZDAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTYiPihD4bqjaSB0aeG6v24pPC90ZXh0PgogICAgICAKICAgICAgPCEtLSBHcmVlbiBTZXBhcmF0b3IgLS0+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9Ijg1IiB4Mj0iMjMwIiB5Mj0iODUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgLz4KICAgICAgCiAgICAgIDx0ZXh0IHg9IjEzMCIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmVmMDhhIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxOCI+QuG7lSBzdW5nIFZhaSB0csOyPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZlZjA4YSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTgiPiZhbXA7IMSQ4buRaSB0xrDhu6NuZzwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gU3R1ZGVudCBIYXQgSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwLCAxODUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMi41Ij4KICAgICAgICA8cG9seWdvbiBwb2ludHM9IjIwLDUgMzgsMTUgMjAsMjUgMiwxNSIgZmlsbD0iIzBmMTcyYSIgLz4KICAgICAgICA8cGF0aCBkPSJNNywxOCBMNywyOCBRMjAsMzggMzMsMjggTDMzLDE4IiAvPgogICAgICAgIDxwYXRoIGQ9Ik0zMCwxNSBMMzUsMjYgTDM4LDI2IiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEJvdHRvbSBiZW5lZml0IGRlc2NyaXB0aW9uIC0tPgogICAgICA8cmVjdCB4PSIyMCIgeT0iMjc1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9Ijc1IiByeD0iMTAiIGZpbGw9IiMxMTI3MWYiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIDx0ZXh0IHg9IjEzMCIgeT0iMzA4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzRkMzk5IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE2LjUiPkThu4UgdGnhur9wIGPhuq1uLDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTMwIiB5PSIzMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNGQzOTkiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTYuNSI+Y8OzIGPhuqV1IHRyw7pjPC90ZXh0PgogICAgPC9nPgoKICAgIDwhLS0gVmVyc2lvbiBDIENhcmQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MjAsIDc1KSIgZmlsdGVyPSJ1cmwoI2dsb3ctcHVycGxlKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjAiIGhlaWdodD0iMzc1IiByeD0iMTYiIGZpbGw9IiMwNDFhMjYiIHN0cm9rZT0iI2MwODRmYyIgc3Ryb2tlLXdpZHRoPSIzIiAvPgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTg3OWY5IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIwIj5QaGnDqm4gYuG6o24gQzwvdGV4dD4KICAgICAgPHRleHQgeD0iMTMwIiB5PSI2NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2U4NzlmOSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNiI+KE7Dom5nIGNhbyk8L3RleHQ+CiAgICAgIAogICAgICA8IS0tIFB1cnBsZSBTZXBhcmF0b3IgLS0+CiAgICAgIDxsaW5lIHgxPSIzMCIgeTE9Ijg1IiB4Mj0iMjMwIiB5Mj0iODUiIHN0cm9rZT0iI2MwODRmYyIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjYiIC8+CiAgICAgIAogICAgICA8dGV4dCB4PSIxMzAiIHk9IjEyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTcuNSI+S+G7uSB0aHXhuq10IMSRw7NuZyB2YWksPC90ZXh0PgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjE1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iMTcuNSI+Q29ULCBGZXctc2hvdDwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gR2xvd2luZyBpY29ucyByZXByZXNlbnRpbmcgTUlUICYgU2NpZW5jZSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUsIDE4NSkiPgogICAgICAgIDwhLS0gTUlUIFR5cG9ncmFwaHkgbG9nbyAtLT4KICAgICAgICA8dGV4dCB4PSIwIiB5PSIyNSIgZmlsbD0iI2Y0NzJiNiIgZm9udC1mYW1pbHk9IidJbXBhY3QnLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI4IiBsZXR0ZXItc3BhY2luZz0iMSI+TUlUPC90ZXh0PgogICAgICAgIAogICAgICAgIDwhLS0gQnJhaW4gZ2VhcnMgcHJvZmlsZSAtLT4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NSwgMCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U4NzlmOSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgIDwhLS0gRmFjZSBwcm9maWxlIC0tPgogICAgICAgICAgPHBhdGggZD0iTTUsMzAgUTE1LDMwIDIwLDIwIFEyMiw1IDM1LDUgUTQ4LDUgNDgsMjIgUTQ4LDM1IDM4LDM4IEwzNSw0MiBMMjUsNDIgUTIwLDQwIDE1LDM4IFoiIC8+CiAgICAgICAgICA8IS0tIEdlYXJzIGluc2lkZSAtLT4KICAgICAgICAgIDxjaXJjbGUgY3g9IjM0IiBjeT0iMTgiIHI9IjUiIHN0cm9rZS1kYXNoYXJyYXk9IjIgMSIgLz4KICAgICAgICAgIDxjaXJjbGUgY3g9IjM0IiBjeT0iMTgiIHI9IjEuNSIgZmlsbD0iI2U4NzlmOSIgLz4KICAgICAgICA8L2c+CiAgICAgICAgCiAgICAgICAgPCEtLSBCb29rIGljb24gcmlnaHQgLS0+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1LCA1KSIgc3Ryb2tlPSIjNjBhNWZhIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPgogICAgICAgICAgPHBhdGggZD0iTTAsMjUgUTEyLDE4IDI0LDI1IEwyNCw1IFExMiwwIDAsNSBaIiAvPgogICAgICAgICAgPHBhdGggZD0iTTI0LDI1IFEzNiwxOCA0OCwyNSBMNDgsNSBRMzYsMCAyNCw1IFoiIC8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEJvdHRvbSBzdGVsbGFyIGRlc2NyaXB0aW9uIC0tPgogICAgICA8cmVjdCB4PSIyMCIgeT0iMjc1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9Ijc1IiByeD0iMTAiIGZpbGw9IiMzMDE1NGUiIHN0cm9rZT0iI2MwODRmYyIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICA8dGV4dCB4PSIxMzAiIHk9IjMwOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2U4NzlmOSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNi41Ij5YdeG6pXQgc+G6r2MsIGThu4UgaGnhu4N1LDwvdGV4dD4KICAgICAgPHRleHQgeD0iMTMwIiB5PSIzMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlODc5ZjkiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTYuNSI+4bupbmcgZOG7pW5nIGNhbzwvdGV4dD4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElJSSAtIDMuIE5HVVnDik4gVOG6rkMgQy5SLkUuQS5UIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCA2MjApIiBmaWx0ZXI9InVybCgjc2hhZG93KSI+CiAgICA8IS0tIENvbnRhaW5lciBDYXJkIC0tPgogICAgPHJlY3Qgd2lkdGg9IjE4NTAiIGhlaWdodD0iNDAwIiByeD0iMjAiIGZpbGw9InVybCgjY2FyZC1ncmFkKSIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxyZWN0IHdpZHRoPSIxODUwIiBoZWlnaHQ9IjQwMCIgcng9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzOGJkZjgiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjMiIGZpbHRlcj0idXJsKCNnbG93LXRlYWwpIiAvPgogICAgCiAgICA8IS0tIFNlY3Rpb24gVGl0bGUgQmFubmVyIC0tPgogICAgPHRleHQgeD0iNDAiIHk9IjQ1IiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjI0IiBsZXR0ZXItc3BhY2luZz0iMSI+My4gTkdVWcOKTiBU4bquQyBDLlIuRS5BLlQ8L3RleHQ+CgogICAgPCEtLSA1IENvbHVtbnMgcmVwcmVzZW50aW5nIEMsIFIsIEUsIEEsIFQgLS0+CiAgICAKICAgIDwhLS0gQyAtIENPTlRFWFQgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAsIDE5NSkiPgogICAgICA8IS0tIENpcmNsZSBGcmFtZSB3aXRoIEljb24gLS0+CiAgICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4NSIgZmlsbD0iIzFlM2E4YSIgc3Ryb2tlPSIjM2I4MmY2IiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOSIgLz4KICAgICAgPCEtLSBTcG90bGlnaHQgSWNvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMwLCAtNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MGE1ZmEiIHN0cm9rZS13aWR0aD0iMi41Ij4KICAgICAgICA8cGF0aCBkPSJNMTAsNDAgTDUwLDQwIEw1NSw1NSBMNSw1NSBaIiBmaWxsPSIjNjBhNWZhIiBvcGFjaXR5PSIwLjMiIC8+CiAgICAgICAgPCEtLSBMaWdodCByYXlzIC0tPgogICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMzAsNTUgMCw5MCA2MCw5MCIgZmlsbD0iIzYwYTVmYSIgb3BhY2l0eT0iMC4yNSIgc3Ryb2tlPSJub25lIiAvPgogICAgICAgIDwhLS0gU3RhbmQgLS0+CiAgICAgICAgPHBhdGggZD0iTTMwLDE1IEwzMCw0MCBNMTUsMTUgTDQ1LDE1IiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIFRleHQgZGV0YWlscyBiZW5lYXRoIC0tPgogICAgICA8dGV4dCB4PSIwIiB5PSIxMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2MGE1ZmEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjEiPkMg4oCTIENPTlRFWFQ8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzkzYzVmZCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxOCI+KELhu5FpIGPhuqNuaCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNS41Ij5UaGnhur90IGzhuq1wIHZhaSB0csOyICZhbXA7PC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjYmQ1ZTEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTUuNSI+SG/DoG4gY+G6o25oIGPhu6UgdGjhu4M8L3RleHQ+CiAgICA8L2c+CgogICAgPCEtLSBSIC0gUkVTVUxUIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTUwLCAxOTUpIj4KICAgICAgPCEtLSBDaXJjbGUgRnJhbWUgd2l0aCBJY29uIC0tPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iODUiIGZpbGw9IiMwYzRhNmUiIHN0cm9rZT0iIzBlYTVlOSIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjkiIC8+CiAgICAgIDwhLS0gQ2hlY2tsaXN0IERvY3VtZW50IEljb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMiwgLTM1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzhiZGY4IiBzdHJva2Utd2lkdGg9IjIuNSI+CiAgICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjYwIiByeD0iNCIgZmlsbD0iIzA0MWEyNiIgLz4KICAgICAgICA8IS0tIGJ1bGxldCBwb2ludHMgLS0+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxNSIgcj0iMyIgZmlsbD0iIzM4YmRmOCIgc3Ryb2tlPSJub25lIiAvPgogICAgICAgIDxsaW5lIHgxPSIxOCIgeTE9IjE1IiB4Mj0iMzUiIHkyPSIxNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMzAiIHI9IjMiIGZpbGw9IiMzOGJkZjgiIHN0cm9rZT0ibm9uZSIgLz4KICAgICAgICA8bGluZSB4MT0iMTgiIHkxPSIzMCIgeDI9IjM1IiB5Mj0iMzAiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjQ1IiByPSIzIiBmaWxsPSIjMzhiZGY4IiBzdHJva2U9Im5vbmUiIC8+CiAgICAgICAgPGxpbmUgeDE9IjE4IiB5MT0iNDUiIHgyPSIzNSIgeTI9IjQ1IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgIDwvZz4KICAgICAgCiAgICAgIDwhLS0gVGV4dCBkZXRhaWxzIGJlbmVhdGggLS0+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjExNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM4YmRmOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMSI+UiDigJMgUkVTVUxUPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIxNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM3ZGQzZmMiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTgiPihL4bq/dCBxdeG6oyk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNS41Ij7EkOG7i25oIGjDrG5oIGPhuqV1IHRyw7pjIMSR4bqndSByYTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjY2JkNWUxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNTAwIiBmb250LXNpemU9IjE1LjUiPihk4bqhbmcgYuG6o25nLCBkYW5oIHPDoWNoKTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIEUgLSBFWEFNUExFIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTI1LCAxOTUpIj4KICAgICAgPCEtLSBDaXJjbGUgRnJhbWUgd2l0aCBJY29uIC0tPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iODUiIGZpbGw9IiMwNjRlM2IiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjkiIC8+CiAgICAgIDwhLS0gQm9vayBJY29uIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAsIC0yNSkiIHN0cm9rZT0iIzM0ZDM5OSIgc3Ryb2tlLXdpZHRoPSIyLjUiIGZpbGw9Im5vbmUiPgogICAgICAgIDxwYXRoIGQ9Ik0wLDM1IFExNSwyNSAzMCwzNSBMMzAsNSBRMTUsLTUgMCw1IFoiIGZpbGw9IiMwNDFhMjYiIC8+CiAgICAgICAgPHBhdGggZD0iTTMwLDM1IFE0NSwyNSA2MCwzNSBMNjAsNSBRNDUsLTUgMzAsNSBaIiBmaWxsPSIjMDQxYTI2IiAvPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIFRleHQgZGV0YWlscyBiZW5lYXRoIC0tPgogICAgICA8dGV4dCB4PSIwIiB5PSIxMTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjEiPkUg4oCTIEVYQU1QTEU8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzZlZTdiNyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxOCI+KFbDrSBk4bulKTwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTg1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjY2JkNWUxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNTAwIiBmb250LXNpemU9IjE1LjUiPkN1bmcgY+G6pXAgMS0yIG3huqt1PC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjYmQ1ZTEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTUuNSI+Y8OidSB0cuG6oyBs4budaSBtb25nIG114buRbjwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIEEgLSBBREpVU1QgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzAwLCAxOTUpIj4KICAgICAgPCEtLSBDaXJjbGUgRnJhbWUgd2l0aCBJY29uIC0tPgogICAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iODUiIGZpbGw9IiM3ODM1MGYiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIzIiBvcGFjaXR5PSIwLjkiIC8+CiAgICAgIDwhLS0gTGVnYWwgU2NhbGVzIEljb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMCwgLTMyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjAiIHgyPSIzMCIgeTI9IjQ1IiBzdHJva2Utd2lkdGg9IjMiIC8+CiAgICAgICAgPGxpbmUgeDE9IjEwIiB5MT0iMTIiIHgyPSI1MCIgeTI9IjEyIiBzdHJva2Utd2lkdGg9IjMiIC8+CiAgICAgICAgPCEtLSBMZWZ0IHNjYWxlIHBhbiAtLT4KICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIxMCwxMiAyLDMwIDE4LDMwIFoiIC8+CiAgICAgICAgPHRleHQgeD0iMTAiIHk9IjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjU5ZTBiIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI2Ij5T4buQPC90ZXh0PgogICAgICAgIDwhLS0gUmlnaHQgc2NhbGUgcGFuIC0tPgogICAgICAgIDxwb2x5bGluZSBwb2ludHM9IjUwLDEyIDQyLDMwIDU4LDMwIFoiIC8+CiAgICAgICAgPHRleHQgeD0iNTAiIHk9IjI2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjU5ZTBiIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI2Ij5IRFc8L3RleHQ+CiAgICAgICAgPCEtLSBTdGFuZCBiYXNlIC0tPgogICAgICAgIDxwYXRoIGQ9Ik0xNSw0NSBMNDUsNDUiIHN0cm9rZS13aWR0aD0iMyIgLz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBUZXh0IGRldGFpbHMgYmVuZWF0aCAtLT4KICAgICAgPHRleHQgeD0iMCIgeT0iMTE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmJiZjI0IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjIxIj5BIOKAkyBBREpVU1Q8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZkZTA0NyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxOCI+KMSQaeG7gXUgY2jhu4luaCk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNS41Ij5Sw6BuZyBideG7mWMgZ2nhu5tpIGjhuqFuPC90ZXh0PgogICAgICA8dGV4dCB4PSIwIiB5PSIyMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjYmQ1ZTEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIGZvbnQtc2l6ZT0iMTUuNSI+KHPhu5EgdOG7qywgxJHhu5kgcGjhu6ljIHThuqFwKTwvdGV4dD4KICAgIDwvZz4KCiAgICA8IS0tIFQgLSBUSE9VR0hUIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY3MCwgMTk1KSI+CiAgICAgIDwhLS0gQ2lyY2xlIEZyYW1lIHdpdGggSWNvbiAtLT4KICAgICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9Ijg1IiBmaWxsPSIjNTgxYzg3IiBzdHJva2U9IiNjMDg0ZmMiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC45IiAvPgogICAgICA8IS0tIEJyYWluIENvVCBsb2dpYyBub2RlcyBJY29uIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUsIC0zNSkiPgogICAgICAgIDwhLS0gQnJhaW4gZHJhd2luZyBvdXRsaW5lIC0tPgogICAgICAgIDxwYXRoIGQ9Ik01LDE1IFEtNSwyNSA1LDM1IFExNSw0MiAyNSwzNSBRMzUsNDIgNDUsMzUgUTU1LDI1IDQ1LDE1IFE0MCw1IDI1LDEyIFExMCw1IDUsMTUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTg3OWY5IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIyNSIgcj0iMyIgZmlsbD0iI2U4NzlmOSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyNSIgY3k9IjIyIiByPSIzIiBmaWxsPSIjZTg3OWY5IiAvPgogICAgICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iMjUiIHI9IjMiIGZpbGw9IiNlODc5ZjkiIC8+CiAgICAgICAgPHBhdGggZD0iTTEwLDI1IEwyNSwyMiBMNDAsMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U4NzlmOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgIDwvZz4KICAgICAgCiAgICAgIDwhLS0gVGV4dCBkZXRhaWxzIGJlbmVhdGggLS0+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjExNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2MwODRmYyIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIyMSI+VCDigJMgVEhPVUdIVDwvdGV4dD4KICAgICAgPHRleHQgeD0iMCIgeT0iMTQ1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjNlOGZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE4Ij4oVMawIGR1eSk8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjE4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNS41Ij5BSSBzdXkgbmdoxKkgdOG7q25nIGLGsOG7m2M8L3RleHQ+CiAgICAgIDx0ZXh0IHg9IjAiIHk9IjIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2NiZDVlMSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgZm9udC1zaXplPSIxNS41Ij4oQ2hhaW4gb2YgVGhvdWdodCk8L3RleHQ+CiAgICA8L2c+CiAgPC9nPgoKICA8IS0tIEZvb3RlciBNZXRhZGF0YSBTZWN0aW9uIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCAxMDMwKSI+CiAgICA8cmVjdCB3aWR0aD0iMTg1MCIgaGVpZ2h0PSI0MCIgcng9IjgiIGZpbGw9InJnYmEoMCwgNzcsIDk3LCAwLjE1KSIgc3Ryb2tlPSJyZ2JhKDQ1LCAyMTIsIDE5MSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgPHRleHQgeD0iMjAiIHk9IjI0IiBmaWxsPSIjYTVmM2ZjIiBmb250LWZhbWlseT0iJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5OZ3Xhu5NuOiBUw7NtIHThuq90IHRtcDFxdDNnal9idDJfMjAwNTEyMjdkb2FubmdvY2xpbmguZG9jeDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE4MzAiIHk9IjI0IiB0ZXh0LWFuY2hvcj0iZW5kIiBmaWxsPSIjMmRkNGJmIiBmb250LWZhbWlseT0iJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCI+REVTSUdOIEJZIERPQU4gTkdPQyBMSU5IIOKAoiBM4buaUDogUUggMjAyNUUgS1RRVCAxMCDigKIgTVNWOiAyNTA1MTIyNzwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo=";
