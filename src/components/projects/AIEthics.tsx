import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search,
  Eye,
  ShieldCheck, 
  ShieldAlert, 
  Scale, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  User, 
  X, 
  CheckCircle, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  Compass, 
  Award, 
  CheckSquare, 
  BookOpenCheck,
  ChevronRight,
  Flame,
  Layout,
  Layers,
  Sparkles
} from 'lucide-react';

interface AIEthicsProps {
  onClose?: () => void;
}

export default function AIEthics({ onClose }: AIEthicsProps) {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);

  const handleOpenFullImage = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(
        `<html><head><title>Infographic Bài 06: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu khoa học</title></head><body style="margin:0; background:#010d0a; display:flex; justify-content:center; align-items:center; min-height:100vh;"><img src="${INFOGRAPHIC_B6_BASE64}" style="max-width: 100%; max-height: 100vh; object-fit: contain;" /></body></html>`
      );
      newWindow.document.close();
    } else {
      const link = document.createElement('a');
      link.href = INFOGRAPHIC_B6_BASE64;
      link.target = '_blank';
      link.click();
    }
  };

  const sections = [
    { id: 1, name: 'Chính sách UEB', desc: 'Phân tích chính sách AI của UEB' },
    { id: 2, name: 'Nhật ký tương tác', desc: 'Hành vi tiêu dùng xanh' },
    { id: 3, name: 'Đạo đức Học thuật', desc: 'Các vấn đề chuyên sâu' },
    { id: 4, name: '06 Nguyên tắc', desc: 'Bộ quy tắc ứng xử cá nhân' },
    { id: 5, name: 'Ý tưởng Infographic', desc: 'Ấn phẩm truyền thông số' },
  ];

  return (
    <div className="text-white bg-zinc-950/80 rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden font-sans" id="ai-ethics-project-root">
      {/* Student ID Header Card */}
      <div className="bg-gradient-to-r from-emerald-950/90 via-emerald-900/40 to-zinc-950 p-6 sm:p-8 border-b border-emerald-500/20 relative overflow-hidden">
        {/* Background decorative patterns */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-10 top-2 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-[10px] sm:text-xs font-bold text-emerald-400 font-mono tracking-wider">
              <ShieldCheck size={13} className="animate-pulse" /> SỬ DỤNG AI CÓ TRÁCH NHIỆM
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
              BÀI 06: SANDBOX LAB - THỰC HÀNH LIÊM CHÍNH SỐ
            </h3>
            
            {/* Student Metadata Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-emerald-500/10">
                <User size={14} className="text-emerald-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 block font-medium">Sinh viên thực hiện</span>
                  <span className="text-xs font-bold text-white">Đoàn Ngọc Linh</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-emerald-500/10">
                <FileText size={14} className="text-emerald-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 block font-medium">Mã số sinh viên</span>
                  <span className="text-xs font-mono font-bold text-emerald-300">25051227</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-emerald-500/10">
                <BookOpen size={14} className="text-emerald-400 shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] text-zinc-400 block font-medium">Học phần</span>
                  <span className="text-xs font-bold text-white">QH 2025E KTQT 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Nút Báo Cáo Full Word */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center shrink-0">
            <a
              href="https://docs.google.com/document/d/1GGSdHDrGWCI265IFQJjTi8_-K_hUPLC3/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.03] text-xs font-sans border border-emerald-400/30 cursor-pointer text-center"
              id="btn-view-full-word-report"
            >
              <FileText size={15} />
              <span>Xem báo cáo Word đầy đủ (Bài 6)</span>
              <ExternalLink size={13} className="animate-bounce" />
            </a>

            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-xl border border-zinc-800 hover:border-emerald-500/20 transition-all text-xs font-bold cursor-pointer"
                title="Quay lại danh sách"
              >
                <X size={15} />
                <span>Đóng</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Navigation Tabs */}
      <div className="bg-zinc-950 p-3 sm:p-4 border-b border-emerald-500/10 flex flex-wrap gap-2 justify-start md:justify-center overflow-x-auto scrollbar-none">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeSection === sec.id
                ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                : 'bg-zinc-900/60 border border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
            id={`tab-ethics-section-${sec.id}`}
          >
            <span className={`w-5 h-5 rounded-lg flex items-center justify-center font-mono text-[10px] ${
              activeSection === sec.id ? 'bg-emerald-500 text-black font-extrabold' : 'bg-zinc-800 text-zinc-400'
            }`}>
              0{sec.id}
            </span>
            <span>{sec.name}</span>
          </button>
        ))}
      </div>

      {/* Main Content Areas */}
      <div className="p-6 sm:p-8 bg-zinc-950/40 min-h-[400px]">
        
        {/* PART 1: PHÂN TÍCH CHÍNH SÁCH SỬ DỤNG AI TẠI UEB */}
        {activeSection === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            id="section-ethics-policy-ueb"
          >
            <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">PHẦN 1 • KIỂM ĐỊNH CHÍNH SÁCH</span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-display">
                PHÂN TÍCH CHÍNH SÁCH SỬ DỤNG AI TẠI TRƯỜNG ĐẠI HỌC KINH TẾ (UEB)
              </h4>
              <p className="text-xs text-zinc-400">
                Hiểu rõ ranh giới đạo đức học thuật để phát huy tối đa lợi thế của AI mà vẫn bảo toàn liêm chính học thuật.
              </p>
            </div>

            {/* 2-Column Behavior Boundaries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* COMPLIANT BEHAVIOR (Hợp lệ) */}
              <div className="bg-gradient-to-b from-emerald-950/30 to-zinc-950 p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-sm font-display pb-3 border-b border-emerald-500/10">
                  <div className="p-1.5 bg-emerald-500/15 rounded-lg border border-emerald-500/20">
                    <CheckCircle size={16} />
                  </div>
                  <span>Hành Vi Hợp Lệ & Khuyến Khích</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Sử dụng AI như một trợ lý đắc lực, tăng tốc hiệu quả học tập nhưng vẫn giữ vai trò trung tâm tư duy của con người:
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-400 font-sans pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5 shrink-0">✔</span>
                    <span><strong>Gợi ý ý tưởng ban đầu:</strong> Sử dụng để brainstorm, gợi ý các hướng đi mới, cấu trúc lại các câu hỏi nghiên cứu.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5 shrink-0">✔</span>
                    <span><strong>Sửa lỗi ngữ pháp & Tối ưu hóa:</strong> Hoàn thiện văn phong học thuật, kiểm tra ngữ pháp tiếng Anh, tiếng Việt, mài giũa câu từ tinh tế.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5 shrink-0">✔</span>
                    <span><strong>Xây dựng khung đề cương:</strong> Định hình dàn ý báo cáo nghiên cứu khoa học, gợi ý các khía cạnh cần phân tích.</span>
                  </li>
                </ul>
              </div>

              {/* VIOLATING BEHAVIOR (Nghiêm cấm) */}
              <div className="bg-gradient-to-b from-red-950/20 to-zinc-950 p-6 rounded-2xl border border-red-500/10 space-y-4">
                <div className="flex items-center gap-2.5 text-red-400 font-bold text-sm font-display pb-3 border-b border-red-500/10">
                  <div className="p-1.5 bg-red-500/15 rounded-lg border border-red-500/20">
                    <AlertTriangle size={16} />
                  </div>
                  <span>Hành Vi Nghiêm Cấm & Gian Lận</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Lạm dụng hoàn toàn công nghệ, đánh mất tư duy chủ động và phá hoại tính liêm chính trong học thuật:
                </p>
                <ul className="space-y-2.5 text-xs text-zinc-400 font-sans pl-1">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">✘</span>
                    <span><strong>Sao chép nguyên văn (Copy-Paste):</strong> Sử dụng nguyên si nội dung văn bản do AI tạo ra để nộp làm bài tập cá nhân, bài luận.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">✘</span>
                    <span><strong>Ngụy tạo số liệu nghiên cứu:</strong> Nhờ AI tự sáng tạo, phát sinh các số liệu khảo sát giả để làm minh chứng thực nghiệm.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">✘</span>
                    <span><strong>Lách luật kiểm tra đạo văn:</strong> Sử dụng các phần mềm tự động paraphrase, viết lại văn bản nhằm mục đích lách qua Turnitin hoặc các hệ thống kiểm duyệt.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Economic Specialization (Đặc thù ngành kinh tế) */}
            <div className="bg-emerald-950/20 p-5 rounded-2xl border border-emerald-500/10 space-y-3">
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2 font-display">
                <Scale size={14} /> ĐẶC THÙ NGÀNH KINH TẾ TẠI UEB
              </h5>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Khác biệt hoàn toàn với khối ngành kỹ thuật (tập trung quản lý mã nguồn/code) hay ngôn ngữ học (siết chặt việc dịch thuật song ngữ), <strong>ngành Kinh tế Quốc tế & Kinh tế học tại UEB</strong> đặt trọng tâm cao nhất vào việc bảo vệ tính nguyên bản của các <strong>phân tích tài chính thực tế, mô hình kinh tế toán định lượng, và các ý tưởng marketing/chiến lược kinh doanh độc lập</strong>. Mọi phân tích định tính hay giả thuyết khoa học phải xuất phát từ tư duy thực tế và được đối chiếu sâu sắc của người nghiên cứu, chứ không thể phụ thuộc vào các phán đoán rập khuôn chung chung của mô hình ngôn ngữ lớn.
              </p>
            </div>
          </motion.div>
        )}

        {/* PART 2: NHẬT KÝ THỰC HÀNH TƯƠNG TÁC AI */}
        {activeSection === 2 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            id="section-ethics-diary"
          >
            <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">PHẦN 2 • NHẬT KÝ NGHIÊN CỨU THỰC TẾ</span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-display">
                NHẬT KÝ THỰC HÀNH TƯƠNG TÁC AI (CHỦ ĐỀ: HÀNH VI TIÊU DÙNG XANH)
              </h4>
              <p className="text-xs text-zinc-400">
                Ghi chép hành trình đồng hành cùng mô hình Gemini trong một bài tập nghiên cứu thị trường thực tiễn của tôi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Process of Action */}
              <div className="lg:col-span-5 bg-zinc-900/40 p-5 rounded-2xl border border-emerald-500/10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest font-display pb-3 border-b border-emerald-500/10">
                    <TrendingUp size={15} />
                    <span>Quá Trình Thực Hiện Nghiên Cứu</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">1</span>
                      <div className="space-y-1">
                        <h6 className="text-xs font-extrabold text-white font-display">Thiết lập chuyên gia hỗ trợ</h6>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          Sử dụng mô hình AI (Gemini) đóng vai là một Chuyên gia Nghiên cứu Thị trường để tìm kiếm và định hình 3 xu hướng tiêu dùng xanh lớn của giới trẻ Việt Nam hiện nay.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">2</span>
                      <div className="space-y-1">
                        <h6 className="text-xs font-extrabold text-white font-display">Áp dụng lý thuyết hành vi</h6>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          Yêu cầu AI áp dụng hai mô hình khoa học nổi tiếng: Thuyết Hành động Hợp lý (TRA) và Thuyết Hành vi có Kế hoạch (TPB) nhằm phân tích các động cơ, rào cản tâm lý tác động trực tiếp đến quyết định tiêu dùng bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-500/10 mt-6 text-[11px] text-emerald-300 italic font-sans">
                  "Bài thực hành giúp rèn luyện cách phản biện và dẫn dắt AI để đi đúng hướng mục tiêu nghiên cứu cụ thể."
                </div>
              </div>

              {/* Assessment and Integration */}
              <div className="lg:col-span-7 bg-zinc-900/40 p-6 rounded-2xl border border-emerald-500/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest font-display pb-3 border-b border-emerald-500/10">
                  <Compass size={15} />
                  <span>Đánh Giá, Kiểm Chứng & Tích Hợp Thực Tế</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 font-mono block">KẾT QUẢ ĐẦU RA CỦA AI</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Khung phân tích lý thuyết hành vi (TRA, TPB) và các bước đề xuất của AI cực kỳ chính xác về mặt học thuật. Tuy nhiên, <strong>các số liệu thống kê cụ thể về thị trường Việt Nam bị mơ hồ, thiếu cập nhật và không có nguồn cụ thể rõ ràng</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-400 font-mono block">CÁCH TÔI GIẢI QUYẾT & HOÀN THIỆN</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Tôi đã tự thực hiện kiểm chứng độc lập thông qua việc tra cứu dữ liệu khoa học tại thư viện UEB và các báo cáo thị trường uy tín từ <strong>Kantar và Nielsen Việt Nam</strong> để cập nhật các chỉ số dữ liệu chính xác nhất. Sau đó, tôi tự tay viết lại toàn bộ nội dung bài luận theo văn phong độc lập cá nhân và chủ động bổ sung <strong>Tuyên bố trích dẫn sử dụng AI minh bạch</strong> ở trang cuối của báo cáo học thuật.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PART 3: CÁC VẤN ĐỀ ĐẠO ĐỨC HỌC THUẬT CHUYÊN SÂU */}
        {activeSection === 3 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            id="section-ethics-problems"
          >
            <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">PHẦN 3 • PHÂN TÍCH ĐẠO ĐỨC CHUYÊN SÂU</span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-display">
                CÁC VẤN ĐỀ ĐẠO ĐỨC HỌC THUẬT CHUYÊN SÂU KHI DÙNG AI
              </h4>
              <p className="text-xs text-zinc-400">
                Nhận diện những rủi ro đạo đức học thuật phức tạp và xây dựng thói quen làm chủ tri thức tự chủ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {/* Card 1: Ranh giới mong manh */}
              <div className="bg-zinc-900/40 p-5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <Scale size={18} />
                </div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">Ranh Giới Mong Manh</h5>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Sự hỗ trợ hợp lý giữ con người làm chủ tư duy (coi AI là người đồng hành phản biện, tối ưu cấu trúc bài viết). Gian lận nghiêm trọng xảy ra khi người học giao phó hoàn toàn trách nhiệm và năng lực viết bài cho máy tính, lười suy nghĩ và nộp bài được tạo ra hoàn toàn từ prompt ăn sẵn.
                </p>
              </div>

              {/* Card 2: Bản quyền & Trích dẫn */}
              <div className="bg-zinc-900/40 p-5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <BookOpenCheck size={18} />
                </div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">Bản Quyền & Trích Dẫn Thực</h5>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  AI quét dữ liệu diện rộng không xin phép tác giả dễ dẫn đến đạo văn ngầm. <strong>Tuyệt đối không bao giờ ghi nguồn tài liệu dạng "Theo AI" hay "Theo Gemini"</strong>, điều đó vô nghĩa về mặt học thuật. Thay vào đó, hãy dùng các từ khóa do AI gợi ý để truy vết ngược lại các cuốn sách, công trình nghiên cứu khoa học, bài báo gốc để trích dẫn chuẩn APA/Harvard.
                </p>
              </div>

              {/* Card 3: Hệ lụy dài hạn */}
              <div className="bg-zinc-900/40 p-5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                  <Flame size={18} />
                </div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">Hệ Lụy & Sự Phản Biện</h5>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  Sự ỷ lại thụ động làm thui chột và suy giảm khả năng lập luận, phê phán độc lập của sinh viên. Ngược lại, nếu chúng ta liên tục thách thức, phản biện hai chiều với AI sẽ giúp nâng cao đáng kể kỹ năng phân tích phản biện khoa học, xây dựng kiến thức bền vững và rèn luyện kỹ năng quản lý tri thức.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* PART 4: BỘ SÁU NGUYÊN TẮC CÁ NHÂN VỀ SỬ DỤNG AI */}
        {activeSection === 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            id="section-ethics-six-principles"
          >
            <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">PHẦN 4 • BỘ QUY TẮC CÁ NHÂN</span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-display">
                BỘ SÁU NGUYÊN TẮC VÀNG CỦA ĐOÀN NGỌC LINH KHI SỬ DỤNG AI
              </h4>
              <p className="text-xs text-zinc-400">
                Cam kết liêm chính học thuật và bảo vệ giá trị sáng tạo nguyên bản của bản thân trong suốt hành trình đại học.
              </p>
            </div>

            {/* 6 Shields grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              
              {/* Nguyên tắc 1 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">01</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">1. Nguyên Bản</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Mọi ý tưởng cốt lõi, lập luận khoa học và văn phong hoàn thiện cuối cùng phải do chính trí tuệ của bản thân viết ra và chịu trách nhiệm.
                  </p>
                </div>
              </div>

              {/* Nguyên tắc 2 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">02</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">2. Xác Minh</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Luôn luôn đối chiếu chéo, kiểm chứng nghiêm ngặt mọi thông tin, luận cứ và số liệu thống kê do AI cung cấp với các nguồn chính thống, khoa học.
                  </p>
                </div>
              </div>

              {/* Nguyên tắc 3 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">03</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">3. Minh Bạch</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Chủ động và trung thực khai báo rõ ràng, cụ thể phạm vi và vai trò hỗ trợ của các công cụ AI trong mọi bài luận hay nghiên cứu học thuật của mình.
                  </p>
                </div>
              </div>

              {/* Nguyên tắc 4 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">04</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">4. Làm Chủ</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Tuyệt đối chỉ xem AI là người trợ lý tham mưu đắc lực, bản thân người học luôn phải giữ thế chủ động và đưa ra quyết định học thuật cuối cùng.
                  </p>
                </div>
              </div>

              {/* Nguyên tắc 5 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">05</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">5. Đạo Đức</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Tuyệt đối không ngụy tạo số liệu khảo sát, giả mạo tài liệu khoa học hay dùng AI để hỗ trợ thực hiện bất kỳ hành vi gian lận thi cử nào.
                  </p>
                </div>
              </div>

              {/* Nguyên tắc 6 */}
              <div className="bg-zinc-900/60 p-4.5 rounded-2xl border border-emerald-500/15 flex gap-3.5 hover:border-emerald-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shrink-0">
                  <span className="font-mono text-xs font-bold">06</span>
                </div>
                <div className="space-y-1">
                  <h6 className="text-xs font-extrabold text-white uppercase tracking-wide font-display">6. Học Sâu</h6>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Sử dụng AI như một công cụ phản biện đa chiều để liên tục thử thách giới hạn tri thức của bản thân, chứ không dùng để trốn tránh việc tư duy sâu.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* PART 5: Ý TƯỞNG THIẾT KẾ INFOGRAPHIC TRUYỀN THÔNG */}
        {activeSection === 5 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            id="section-ethics-infographic"
          >
            <div className="border-l-4 border-emerald-500 pl-4 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">PHẦN 5 • THIẾT KẾ ĐỒ HỌA TRUYỀN THÔNG</span>
              <h4 className="text-base sm:text-lg font-black text-white tracking-tight font-display">
                Ý TƯỞNG THIẾT KẾ INFOGRAPHIC TRUYỀN THÔNG SỐ
              </h4>
              <p className="text-xs text-zinc-400">
                Ý tưởng và giải pháp thiết kế ấn phẩm đồ họa nâng cao nhận thức trách nhiệm số cho cộng đồng sinh viên UEB.
              </p>
            </div>

            {/* Interactive Infographic Container for Part 5 */}
            <div className="bg-zinc-900/40 p-6 sm:p-8 rounded-2xl border border-emerald-500/10 space-y-6 flex flex-col items-center justify-center">
              
              {/* Image Container with smooth rounded corners, elegant dark emerald border */}
              <div 
                onClick={() => setIsZoomOpen(true)}
                className="relative group rounded-2xl border border-emerald-800/80 bg-zinc-950 flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] overflow-hidden max-w-4xl w-full aspect-[1920/1080]"
              >
                <img 
                  src={INFOGRAPHIC_B6_BASE64} 
                  alt="Infographic Bài 6" 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 z-10">
                  <div className="px-4 py-2 bg-zinc-900/90 rounded-xl border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-2 shadow-lg">
                    <Search size={14} />
                    <span>Click để phóng to ấn phẩm</span>
                  </div>
                </div>
              </div>

              {/* Source/Citation info under the image */}
              <div className="text-center text-[11px] text-zinc-400 italic">
                Nguồn: Bộ nguyên tắc ứng dụng AI có trách nhiệm UEB &amp; Gemini
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl pt-2">
                <button
                  onClick={handleOpenFullImage}
                  className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-500/20 hover:border-emerald-500/40 cursor-pointer"
                >
                  <ExternalLink size={13} />
                  <span>Mở xem ảnh kích thước đầy đủ</span>
                </button>
                <button
                  onClick={() => setIsZoomOpen(true)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-emerald-400/20 cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Phóng to chi tiết</span>
                </button>
                <a
                  href="https://docs.google.com/document/d/1GGSdHDrGWCI265IFQJjTi8_-K_hUPLC3/edit?usp=sharing&ouid=114415996358320612372&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-zinc-800 hover:border-emerald-500/30 cursor-pointer text-center"
                >
                  <FileText size={13} className="text-emerald-400" />
                  <span>Xem báo cáo Word đầy đủ (Bài 6)</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}

      </div>

      {/* Responsive decorative footer of Lab */}
      <div className="p-4 bg-zinc-950 border-t border-emerald-500/10 text-center text-[10px] text-zinc-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2 px-6">
        <span>© 2026 VNU-UEB Digital Portfolio. All rights reserved.</span>
        <span className="text-emerald-400 font-semibold flex items-center gap-1">
          <ShieldCheck size={12} /> ĐOÀN NGỌC LINH • QH 2025E KTQT 10
        </span>
      </div>
      {/* ZOOM LIGHTBOX MODAL FOR INFOGRAPHIC B6 */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomOpen(false)}
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md cursor-zoom-out"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-6xl w-full bg-zinc-900 border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl p-2 z-10"
            >
              {/* Header inside zoom modal */}
              <div className="flex items-center justify-between p-3 border-b border-zinc-800">
                <span className="text-xs font-bold text-emerald-400 font-mono">Infographic Bài 06: Sử dụng AI có trách nhiệm trong học tập &amp; NCKH</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenFullImage}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ExternalLink size={10} /> Mở tab mới sắc nét
                  </button>
                  <button 
                    onClick={() => setIsZoomOpen(false)} 
                    className="p-1 rounded bg-zinc-800 hover:bg-zinc-750 text-zinc-400 hover:text-white transition-colors border border-zinc-700 cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Responsive Image content */}
              <div className="p-1 max-h-[82vh] overflow-y-auto flex justify-center items-center">
                <img 
                  src={INFOGRAPHIC_B6_BASE64} 
                  alt="Infographic Bài 6"
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


export const INFOGRAPHIC_B6_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIwIDEwODAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDwhLS0gRGVmaW5pdGlvbnMgZm9yIEdyYWRpZW50cywgU2hhZG93cywgYW5kIEZpbHRlcnMgLS0+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJnLWdyYWQtYjYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDIxMjBmIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzA0MjYxZiIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDEwZDBhIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iY2FyZC1ncmFkLWI2IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNTI4MjAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAyMTQxMCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN0ZXAtZ3JhZC1iNiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNzNiMmUiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAzMWMxNiIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImVtZXJhbGQtZ2xvdyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBiOTgxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwNTk2NjkiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJnbG93LWdyYWQtYjYiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTBiOTgxIiBzdG9wLW9wYWNpdHk9IjAuMTUiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBkOTQ4OCIgc3RvcC1vcGFjaXR5PSIwIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdy1iNiIgeD0iLTUlIiB5PSItNSUiIHdpZHRoPSIxMTAlIiBoZWlnaHQ9IjExMCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iOCIgc3RkRGV2aWF0aW9uPSI2IiBmbG9vZC1jb2xvcj0iIzAwMDAwMCIgZmxvb2Qtb3BhY2l0eT0iMC42Ii8+CiAgICA8L2ZpbHRlcj4KICAgIDxmaWx0ZXIgaWQ9Imdsb3ctZW1lcmFsZC1iNiIgeD0iLTIwJSIgeT0iLTIwJSIgd2lkdGg9IjE0MCUiIGhlaWdodD0iMTQwJSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjgiIHJlc3VsdD0iYmx1ciIgLz4KICAgICAgPGZlQ29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImJsdXIiIG9wZXJhdG9yPSJvdmVyIiAvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIGlkPSJnbG93LXNvZnQtYjYiIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIxMjAlIiBoZWlnaHQ9IjEyMCUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIiIC8+CiAgICAgIDxmZUNvbXBvc2l0ZSBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyIiBvcGVyYXRvcj0ib3ZlciIgLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KCiAgPCEtLSBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9InVybCgjYmctZ3JhZC1iNikiIC8+CiAgCiAgPCEtLSBHcmlkIFBhdHRlcm4gZm9yIFRlY2gvTE1TIEFlc3RoZXRpYyAtLT4KICA8ZyBvcGFjaXR5PSIwLjAyIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMSI+CiAgICA8cGF0aCBkPSJNIDAsNTAgTCAxOTIwLDUwIE0gMCwxMDAgTCAxOTIwLDEwMCBNIDAsMTUwIEwgMTkyMCwxNTAgTSAwLDIwMCBMIDE5MjAsMjAwIE0gMCwyNTAgTCAxOTIwLDI1MCBNIDAsMzAwIEwgMTkyMCwzMDAgTSAwLDM1MCBMIDE5MjAsMzUwIE0gMCw0MDAgTCAxOTIwLDQwMCBNIDAsNDUwIEwgMTkyMCw0NTAgTSAwLDUwMCBMIDE5MjAsNTAwIE0gMCw1NTAgTCAxOTIwLDU1MCBNIDAsNjAwIEwgMTkyMCw2MDAgTSAwLDY1MCBMIDE5MjAsNjUwIE0gMCw3MDAgTCAxOTIwLDcwMCBNIDAsNzUwIEwgMTkyMCw3NTAgTSAwLDgwMCBMIDE5MjAsODAwIE0gMCw4NTAgTCAxOTIwLDg1MCBNIDAsOTAwIEwgMTkyMCw5MDAgTSAwLDk1MCBMIDE5MjAsOTUwIE0gMCwxMDAwIEwgMTkyMCwxMDAwIE0gMCwxMDUwIEwgMTkyMCwxMDUwIiAvPgogICAgPHBhdGggZD0iTSA1MCwwIEwgNTAsMTA4MCBNIDEwMCwwIEwgMTAwLDEwODAgTSAxNTAsMCBMIDE1MCwxMDgwIE0gMjAwLDAgTCAyMDAsMTA4MCBNIDI1MCwwIEwgMjUwLDEwODAgTSAzMDAsMCBMIDMwMCwxMDgwIE0gMzUwLDAgTCAzNTAsMTA4MCBNIDQwMCwwIEwgNDAwLDEwODAgTSA0NTAsMCBMIDQ1MCwxMDgwIE0gNTAwLDAgTCA1MDAsMTA4MCBNIDU1MCwwIEwgNTUwLDEwODAgTSA2MDAsMCBMIDYwMCwxMDgwIE0gNjUwLDAgTCA2NTAsMTA4MCBNIDcwMCwwIEwgNzAwLDEwODAgTSA3NTAsMCBMIDc1MCwxMDgwIE0gODAwLDAgTCA4MDAsMTA4MCBNIDg1MCwwIEwgODUwLDEwODAgTSA5MDAsMCBMIDkwMCwxMDgwIE0gOTUwLDAgTCA5NTAsMTA4MCBNIDEwMDAsMCBMIDEwMDAsMTA4MCBNIDEwNTAsMCBMIDEwNTAsMTA4MCBNIDExMDAsMCBMIDExMDAsMTA4MCBNIDExNTAsMCBMIDExNTAsMTA4MCBNIDEyMDAsMCBMIDEyMDAsMTA4MCBNIDEyNTAsMCBMIDEyNTAsMTA4MCBNIDEzMDAsMCBMIDEzMDAsMTA4MCBNIDEzNTAsMCBMIDEzNTAsMTA4MCBNIDE0MDAsMCBMIDE0MDAsMTA4MCBNIDE0NTAsMCBMIDE0NTAsMTA4MCBNIDE1MDAsMCBMIDE1MDAsMTA4MCBNIDE1NTAsMCBMIDE1NTAsMTA4MCBNIDE2MDAsMCBMIDE2MDAsMTA4MCBNIDE2NTAsMCBMIDE2NTAsMTA4MCBNIDE3MDAsMCBMIDE3MDAsMTA4MCBNIDE3NTAsMCBMIDE3NTAsMTA4MCBNIDE4MDAsMCBMIDE4MDAsMTA4MCBNIDE4NTAsMCBMIDE4NTAsMTA4MCBNIDE5MDAsMCBMIDE5MDAsMTA4MCIgLz4KICA8L2c+CgogIDwhLS0gR2xvd2luZyBiYWNrZ3JvdW5kIGJsb2JzIC0tPgogIDxjaXJjbGUgY3g9IjM1MCIgY3k9IjMwMCIgcj0iMjAwIiBmaWxsPSJ1cmwoI2dsb3ctZ3JhZC1iNikiIGZpbHRlcj0idXJsKCNnbG93LWVtZXJhbGQtYjYpIiBvcGFjaXR5PSIwLjE1IiAvPgogIDxjaXJjbGUgY3g9IjE1NTAiIGN5PSI3NTAiIHI9IjI1MCIgZmlsbD0idXJsKCNnbG93LWdyYWQtYjYpIiBmaWx0ZXI9InVybCgjZ2xvdy1lbWVyYWxkLWI2KSIgb3BhY2l0eT0iMC4xMiIgLz4KCiAgPCEtLSBNQUlOIFRJVExFIEhFQURFUiBXSVRIIFVFQiBCUkFORElORyAtLT4KICA8ZyBmaWx0ZXI9InVybCgjc2hhZG93LWI2KSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjMDEwYTA4IiBmaWxsLW9wYWNpdHk9IjAuOSIgLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMTIwIiB4Mj0iMTkyMCIgeTI9IjEyMCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIuNSIgb3BhY2l0eT0iMC44IiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgIAogICAgPCEtLSBVRUIgU2hpZWxkIExvZ28gR3JhcGhpYyAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ1LCAyMCkiPgogICAgICA8cGF0aCBkPSJNIDAsMCBMIDYwLDAgQyA2MCwwIDYwLDQ1IDMwLDY1IEMgMCw0NSAwLDAgMCwwIFoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyLjUiIC8+CiAgICAgIDxwYXRoIGQ9Ik0gNSw1IEwgNTUsNSBDIDU1LDUgNTUsNDIgMzAsNTkgQyA1LDQyIDUsNSA1LDUgWiIgZmlsbD0iIzAxNDAyZSIgLz4KICAgICAgPHRleHQgeD0iMzAiIHk9IjMyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE2IiBsZXR0ZXItc3BhY2luZz0iMSI+VUVCPC90ZXh0PgogICAgICA8dGV4dCB4PSIzMCIgeT0iNDYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iOSIgbGV0dGVyLXNwYWNpbmc9IjEiPlZOVTwvdGV4dD4KICAgIDwvZz4KCiAgICA8dGV4dCB4PSI5ODAiIHk9IjYyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjMzIiBsZXR0ZXItc3BhY2luZz0iMS41Ij5T4busIEThu6RORyBBSSBDw5MgVFLDgUNIIE5ISeG7hk0gVFJPTkcgSOG7jEMgVOG6rFAgVsOAIE5HSEnDik4gQ+G7qFUgS0hPQSBI4buMQzwvdGV4dD4KICAgIDx0ZXh0IHg9Ijk4MCIgeT0iOTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTYiIGxldHRlci1zcGFjaW5nPSI0LjUiPkLDgU8gQ8OBTyBCw4BJIFThuqxQOiDEkE/DgE4gTkfhu4xDIExJTkggLSBNU1Y6IDI1MDUxMjI3PC90ZXh0PgogIDwvZz4KCiAgPCEtLSBDT0xVTU4gSSAoTEVGVCkgLSBTRUNUSU9OIEkgJiBJSSAtLT4KICAKICA8IS0tIFNFQ1RJT04gSTogUEjDgk4gVMONQ0ggQ0jDjU5IIFPDgUNIIEFJIFVFQiAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgMTYwKSIgZmlsdGVyPSJ1cmwoI3NoYWRvdy1iNikiPgogICAgPCEtLSBNYWluIE91dGVyIEJveCAtLT4KICAgIDxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9InVybCgjY2FyZC1ncmFkLWI2KSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQtYjYpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDM4MCwwIEEgMTAsMTAgMCAwIDEgMzkwLDEwIEwgNDAwLDQwIEEgMTYsMTYgMCAwIDEgMzg0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDUzMDI2IiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+MS4gUEjDgk4gVMONQ0ggQ0jDjU5IIFPDgUNIIEFJIFVFQjwvdGV4dD4KICAgIAogICAgPCEtLSBSQU5IIEdJ4buaSSBIw4BOSCBWSSBoZWFkZXIgaW5zaWRlIEJveCBJIC0tPgogICAgPHRleHQgeD0iMzE1IiB5PSI5NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxNCIgbGV0dGVyLXNwYWNpbmc9IjMiPlJBTkggR0nhu5pJIEjDgE5IIFZJPC90ZXh0PgogICAgPGxpbmUgeDE9IjE2NSIgeTE9IjEwNSIgeDI9IjQ2NSIgeTI9IjEwNSIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgICA8IS0tIExlZnQgU3ViLWNvbHVtbjogTkdIScOKTSBD4bqkTSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLCAxMjApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjI3MCIgaGVpZ2h0PSIxOTAiIHJ4PSIxMiIgZmlsbD0iIzE4MGEwYSIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuOCIgLz4KICAgICAgCiAgICAgIDwhLS0gU2VjdGlvbiBUYWcgSGVhZGVyIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSwgMTUpIj4KICAgICAgICA8cGF0aCBkPSJNIDEwLDAgTCAyLDE2IEwgMTgsMTYgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+CiAgICAgICAgPGxpbmUgeDE9IjEwIiB5MT0iNSIgeDI9IjEwIiB5Mj0iMTEiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjE0IiByPSIxLjIiIGZpbGw9IiNlZjQ0NDQiIC8+CiAgICAgICAgPHRleHQgeD0iMjgiIHk9IjE0IiBmaWxsPSIjZWY0NDQ0IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjEzIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5OR0hJw4pNIEPhuqRNPC90ZXh0PgogICAgICA8L2c+CgogICAgICA8IS0tIEljb25zIG9mIHZpb2xhdGlvbiAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwLCAxNSkiIG9wYWNpdHk9IjAuODUiPgogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjEyIiBmaWxsPSIjZWY0NDQ0IiBvcGFjaXR5PSIwLjE1IiAvPgogICAgICAgIDwhLS0gRXhjbGFtYXRpb24gY2lyY2xlIC0tPgogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIxNSIgeTE9IjEwIiB4Mj0iMTUiIHkyPSIxNiIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2VmNDQ0NCIgLz4KCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDApIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjEyIiBmaWxsPSIjZWY0NDQ0IiBvcGFjaXR5PSIwLjE1IiAvPgogICAgICAgICAgPCEtLSBGb3JiaWRkZW4gY29weSBkb2MgLS0+CiAgICAgICAgICA8cmVjdCB4PSI5IiB5PSI4IiB3aWR0aD0iMTIiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgICAgPGxpbmUgeDE9IjEyIiB5MT0iMTIiIHgyPSIxOCIgeTI9IjEyIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAgIDxsaW5lIHgxPSIxMiIgeTE9IjE1IiB4Mj0iMTgiIHkyPSIxNSIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIAogICAgICA8IS0tIEJ1bGxldCBsaXN0IC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSwgNjUpIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxMCkiPgogICAgICAgICAgPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiIGZpbGw9IiNlZjQ0NDQiIC8+CiAgICAgICAgICA8dGV4dCB4PSIyMCIgeT0iMTAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTQuNSI+U2FvIGNow6lwIG5ndXnDqm4gdsSDbjwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNDUpIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiBmaWxsPSIjZWY0NDQ0IiAvPgogICAgICAgICAgPHRleHQgeD0iMjAiIHk9IjEwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPk5n4buleSB04bqhbyBz4buRIGxp4buHdTwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgODApIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiBmaWxsPSIjZWY0NDQ0IiAvPgogICAgICAgICAgPHRleHQgeD0iMjAiIHk9IjEwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPkzDoWNoIMSR4bqhbyB2xINuPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDwhLS0gUmlnaHQgU3ViLWNvbHVtbjogSOG7olAgTOG7hiAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyMCwgMTIwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNzAiIGhlaWdodD0iMTkwIiByeD0iMTIiIGZpbGw9IiMwODE4MTIiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjgiIC8+CiAgICAgIAogICAgICA8IS0tIFNlY3Rpb24gVGFnIEhlYWRlciAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUsIDE1KSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iNywxMCA5LDEyIDEzLDgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+CiAgICAgICAgPHRleHQgeD0iMjgiIHk9IjE0IiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjEzIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5I4buiUCBM4buGPC90ZXh0PgogICAgICA8L2c+CgogICAgICA8IS0tIEljb25zIG9mIGNvbXBsaWFuY2UgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwMCwgMTUpIiBvcGFjaXR5PSIwLjg1Ij4KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxMiIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4xNSIgLz4KICAgICAgICA8IS0tIExpZ2h0YnVsYiAtLT4KICAgICAgICA8cGF0aCBkPSJNMTEsMTcgUTExLDEzIDEzLDExIEEzLjUsMy41IDAgMSAxIDE3LDExIFExOSwxMyAxOSwxNyBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgIDxsaW5lIHgxPSIxMyIgeTE9IjIwIiB4Mj0iMTciIHkyPSIyMCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDApIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjEyIiBmaWxsPSIjMTBiOTgxIiBvcGFjaXR5PSIwLjE1IiAvPgogICAgICAgICAgPCEtLSBEb2N1bWVudCBDaGVjayAtLT4KICAgICAgICAgIDxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNCIgcng9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIxMiwxNSAxNCwxNyAxOCwxMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICAKICAgICAgPCEtLSBCdWxsZXQgbGlzdCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUsIDY1KSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMTApIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICAgICAgPHRleHQgeD0iMjAiIHk9IjEwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPlRy4bujIGzDvSDDvSB0xrDhu59uZzwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgNDUpIj4KICAgICAgICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiBmaWxsPSIjMTBiOTgxIiAvPgogICAgICAgICAgPHRleHQgeD0iMjAiIHk9IjEwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPlPhu61hIGzhu5dpPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA4MCkiPgogICAgICAgICAgPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiIGZpbGw9IiMxMGI5ODEiIC8+CiAgICAgICAgICA8dGV4dCB4PSIyMCIgeT0iMTAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTQuNSI+S2h1bmcgYsOgaSBuZ2hpw6puIGPhu6l1PC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDwhLS0gUmlnaHQtbW9zdCBzdWItY2FyZDogxJDhurZDIFRIw5kgTkfDgE5IIEtJTkggVOG6viAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxMCwgMzApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjI2MCIgaGVpZ2h0PSIyODAiIHJ4PSIxMiIgZmlsbD0iIzA0MjAxOCIgc3Ryb2tlPSIjMDU5NjY5IiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjAiIGhlaWdodD0iNDAiIHJ4PSIxMCIgZmlsbD0iIzA1NDAzMCIgb3BhY2l0eT0iMC45IiAvPgogICAgICAKICAgICAgPHRleHQgeD0iMTMwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxMy41IiBsZXR0ZXItc3BhY2luZz0iMSI+xJDhurZDIFRIw5kgTkfDgE5IIEtJTkggVOG6vjwvdGV4dD4KICAgICAgCiAgICAgIDwhLS0gU2NhbGVzIEljb24gcmVwcmVzZW50YXRpb24gaW4gRWNvbm9taWMgYm94IC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTAsIDU1KSIgb3BhY2l0eT0iMC42Ij4KICAgICAgICA8bGluZSB4MT0iMTAiIHkxPSIzNSIgeDI9IjMwIiB5Mj0iMzUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxsaW5lIHgxPSIyMCIgeTE9IjEwIiB4Mj0iMjAiIHkyPSIzNSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGxpbmUgeDE9IjUiIHkxPSIxMCIgeDI9IjM1IiB5Mj0iMTAiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDxwYXRoIGQ9Ik0gNSwxMCBMIDAsMjUgUSAyMCwzMCA0MCwyNSBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICA8L2c+CgogICAgICA8IS0tIFBhcmFncmFwaCBDb250ZW50IC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwgMTEwKSI+CiAgICAgICAgPHRleHQgeD0iMCIgeT0iMTUiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTQuNSI+QuG6o28gduG7hyBwaOG6o24gYmnhu4duPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjAiIHk9IjQ1IiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPmThu7FhIHRyw6puIGzDvSBsdeG6rW4gdsOgPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjAiIHk9Ijc1IiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPmtpbmggbmdoaeG7h20gdGjhu7FjIHThur88L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMCIgeT0iMTA1IiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPmPhu6dhIG5nxrDhu51pIG5naGnDqm4gY+G7qXU8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMCIgeT0iMTM1IiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE0LjUiPm5nw6BuaCBraW5oIHThur8gJmFtcDsgdMOgaSBjaMOtbmg8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gU0VDVElPTiBJSTogTkjhuqxUIEvDnSBUSOG7sEMgSMOATkggVMavxqBORyBUw4FDIEFJIChMb3dlciBMZWZ0KSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MCwgNTIwKSIgZmlsdGVyPSJ1cmwoI3NoYWRvdy1iNikiPgogICAgPCEtLSBNYWluIE91dGVyIEJveCAtLT4KICAgIDxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9InVybCgjY2FyZC1ncmFkLWI2KSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgIDxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iMzQwIiByeD0iMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyLjUiIG9wYWNpdHk9IjAuMjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQtYjYpIiAvPgogICAgCiAgICA8IS0tIFRhYiBIZWFkZXIgQmFubmVyIC0tPgogICAgPHBhdGggZD0iTSAwLDE2IEEgMTYsMTYgMCAwIDEgMTYsMCBMIDQxMCwwIEEgMTAsMTAgMCAwIDEgNDIwLDEwIEwgNDMwLDQwIEEgMTYsMTYgMCAwIDEgNDE0LDU2IEwgMCw1NiBaIiBmaWxsPSIjMDUzMDI2IiAvPgogICAgPHRleHQgeD0iMzAiIHk9IjM2IiBmaWxsPSIjMTBiOTgxIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE4IiBsZXR0ZXItc3BhY2luZz0iMSI+Mi4gTkjhuqxUIEvDnSBUSOG7sEMgSMOATkggVMavxqBORyBUw4FDIEFJPC90ZXh0PgoKICAgIDwhLS0gQ29ubmVjdGVkIEFycm93IGluIG1pZGRsZSAtLT4KICAgIDxnIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjYiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQtYjYpIj4KICAgICAgPCEtLSBMaW5lIGZyb20gYm94IDEgdG8gYm94IDIgLS0+CiAgICAgIDxwYXRoIGQ9Ik0gNDEwLDIwMCBMIDQ4MCwyMDAiIC8+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iNDgwLDE5NSA0OTIsMjAwIDQ4MCwyMDUiIGZpbGw9IiMxMGI5ODEiIC8+CiAgICA8L2c+CgogICAgPCEtLSBMZWZ0IFN1Yi1Cb3g6IFFVw4EgVFLDjE5IIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMjMwIiByeD0iMTIiIGZpbGw9InVybCgjc3RlcC1ncmFkLWI2KSIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgCiAgICAgIDwhLS0gSGVhZGVyIEJhZGdlIC0tPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjQ1IiByeD0iMTAiIGZpbGw9IiMwNjRlM2IiIC8+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIyIj5RVcOBIFRSw4xOSDwvdGV4dD4KCiAgICAgIDwhLS0gQ29udGVudCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDc1KSI+CiAgICAgICAgPHRleHQgeD0iMTU1IiB5PSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM4YmRmOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxNSIgbGV0dGVyLXNwYWNpbmc9IjAuNSI+UHJvbXB0IGNodXnDqm4gZ2lhPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE1NSIgeT0iNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzOGJkZjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIwLjUiPm1hcmtldCByZXNlYXJjaDwvdGV4dD4KICAgICAgICAKICAgICAgICA8bGluZSB4MT0iMzAiIHkxPSI4MCIgeDI9IjI4MCIgeTI9IjgwIiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICAKICAgICAgICA8dGV4dCB4PSIxNTUiIHk9IjExNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjYwMCIgZm9udC1zaXplPSIxNSI+TcO0IGjDrG5oIG5nw7RuIG5n4buvIEdlbWluaTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxNTUiIHk9IjE0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2E3ZjNkMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxNC41Ij5Mw70gdGh1eeG6v3QgbmdoacOqbiBj4bupdTogVFJBLCBUUEI8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KCiAgICA8IS0tIFJpZ2h0IFN1Yi1Cb3g6IMSQw4FOSCBHScOBICYgVMONQ0ggSOG7olAgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MTAsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMjMwIiByeD0iMTIiIGZpbGw9InVybCgjc3RlcC1ncmFkLWI2KSIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgCiAgICAgIDwhLS0gSGVhZGVyIEJhZGdlIC0tPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjQ1IiByeD0iMTAiIGZpbGw9IiMwNjRlM2IiIC8+CiAgICAgIDx0ZXh0IHg9IjE4MCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTUiIGxldHRlci1zcGFjaW5nPSIyIj7EkMOBTkggR0nDgSAmYW1wOyBUw41DSCBI4buiUDwvdGV4dD4KCiAgICAgIDwhLS0gQ29udGVudCAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDc1KSI+CiAgICAgICAgPHRleHQgeD0iMTU1IiB5PSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjgwMCIgZm9udC1zaXplPSIxNSIgbGV0dGVyLXNwYWNpbmc9IjAuNSI+S2h1bmcgbMO9IHRodXnhur90IEFJIGNow61uaCB4w6FjPC90ZXh0PgogICAgICAgIAogICAgICAgIDxsaW5lIHgxPSIzMCIgeTE9IjU1IiB4Mj0iMjgwIiB5Mj0iNTUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIAogICAgICAgIDx0ZXh0IHg9IjE1NSIgeT0iOTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmNDNmNWUiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZvbnQtc2l6ZT0iMTQuNSI+SOG6oW4gY2jhur86IFPhu5EgbGnhu4d1IG3GoSBo4buTPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjE1NSIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0LjUiPkdp4bqjaSBwaMOhcDogVOG7sSBraeG7g20gY2jhu6luZyDEkeG7mWMgbOG6rXA8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTU1IiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzOGJkZjgiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTMuNSI+KE5ndeG7k24gdXkgdMOtbjogS2FudGFyIC8gTmllbHNlbik8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gQ09MVU1OIElJIChSSUdIVCkgLSBTRUNUSU9OIElJSSAmIFYgLS0+CgogIDwhLS0gU0VDVElPTiBJSUk6IFbhuqROIMSQ4buAIMSQ4bqgTyDEkOG7qEMgSOG7jEMgVEhV4bqsVCAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5ODAsIDE2MCkiIGZpbHRlcj0idXJsKCNzaGFkb3ctYjYpIj4KICAgIDwhLS0gTWFpbiBPdXRlciBCb3ggLS0+CiAgICA8cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjM0MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2NhcmQtZ3JhZC1iNikiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICA8cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjM0MCIgcng9IjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjI1IiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgIAogICAgPCEtLSBUYWIgSGVhZGVyIEJhbm5lciAtLT4KICAgIDxwYXRoIGQ9Ik0gMCwxNiBBIDE2LDE2IDAgMCAxIDE2LDAgTCA0MTAsMCBBIDEwLDEwIDAgMCAxIDQyMCwxMCBMIDQzMCw0MCBBIDE2LDE2IDAgMCAxIDQxNCw1NiBMIDAsNTYgWiIgZmlsbD0iIzA1MzAyNiIgLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNiIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCIgbGV0dGVyLXNwYWNpbmc9IjEiPjMuIFbhuqROIMSQ4buAIMSQ4bqgTyDEkOG7qEMgSOG7jEMgVEhV4bqsVDwvdGV4dD4KCiAgICA8IS0tIENvbHVtbiAxOiBSQU5IIEdJ4buaSSBNT05HIE1BTkggLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMCwgODApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjI2MCIgaGVpZ2h0PSIyMzAiIHJ4PSIxMiIgZmlsbD0iIzA0MWExNSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIC8+CiAgICAgIAogICAgICA8IS0tIEN1c3RvbSByaWJib24gdG9wIC0tPgogICAgICA8cGF0aCBkPSJNIDAsOCBBIDgsOCAwIDAgMSA4LDAgTCAyNTIsMCBBIDgsOCAwIDAgMSAyNjAsOCBMIDI2MCw0MCBMIDAsNDAgWiIgZmlsbD0iIzA2NGUzYiIgLz4KICAgICAgPHRleHQgeD0iMTMwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxMyIgbGV0dGVyLXNwYWNpbmc9IjEiPlJBTkggR0nhu5pJIE1PTkcgTUFOSDwvdGV4dD4KCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCA2NSkiPgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmYjcxODUiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTYiPkjhu5cgdHLhu6MgJmx0O+KAlCZndDsgR2lhbiBs4bqtbjwvdGV4dD4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSI1NSIgeDI9IjIxMCIgeTI9IjU1IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8dGV4dCB4PSIxMTUiIHk9IjkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+TOG6pXkgQUkgbMOgbSBn4bujaSDDvSBwaOG6o24gYmnhu4duPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMTE1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyI+Y2jhu6kga2jDtG5nIGdpYW8gcGjDsyBob8OgbiB0b8OgbjwvdGV4dD4KICAgICAgICA8dGV4dCB4PSIxMTUiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMy41IiBmb250LXN0eWxlPSJpdGFsaWMiPm7Eg25nIGzhu7FjIHZp4bq/dCBiw6BpIGNobyBtw6F5LjwvdGV4dD4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDwhLS0gQ29sdW1uIDI6IELhuqJOIFFVWeG7gE4gJiBUUsONQ0ggROG6qk4gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjAsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjAiIGhlaWdodD0iMjMwIiByeD0iMTIiIGZpbGw9IiMwNDFhMTUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC42IiAvPgogICAgICAKICAgICAgPCEtLSBDdXN0b20gcmliYm9uIHRvcCAtLT4KICAgICAgPHBhdGggZD0iTSAwLDggQSA4LDggMCAwIDEgOCwwIEwgMjUyLDAgQSA4LDggMCAwIDEgMjYwLDggTCAyNjAsNDAgTCAwLDQwIFoiIGZpbGw9IiMwNjRlM2IiIC8+CiAgICAgIDx0ZXh0IHg9IjEzMCIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTMiIGxldHRlci1zcGFjaW5nPSIxIj5C4bqiTiBRVVnhu4BOICZhbXA7IFRSw41DSCBE4bqqTjwvdGV4dD4KCiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LCA2NSkiPgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlZjQ0NDQiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTUiPktow7RuZyBnaGkgIlRoZW8gQUkiPC90ZXh0PgogICAgICAgIDxsaW5lIHgxPSIyMCIgeTE9IjQ1IiB4Mj0iMjEwIiB5Mj0iNDUiIHN0cm9rZT0iIzFlMjkzYiIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNhN2YzZDAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTQuNSI+VHJ1eSB24bq/dCBuZ3Xhu5NuIGfhu5FjIGfhu5FjPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0Ij5UcsOtY2ggZOG6q24ga2hvYSBo4buNYyBjaHXhuqluPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE0Ij5BUEEgaG/hurdjIEhhcnZhcmQ8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KCiAgICA8IS0tIENvbHVtbiAzOiBI4buGIEzhu6RZIETDgEkgSOG6oE4gLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MTAsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyNjAiIGhlaWdodD0iMjMwIiByeD0iMTIiIGZpbGw9IiMwNDFhMTUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC42IiAvPgogICAgICAKICAgICAgPCEtLSBDdXN0b20gcmliYm9uIHRvcCAtLT4KICAgICAgPHBhdGggZD0iTSAwLDggQSA4LDggMCAwIDEgOCwwIEwgMjUyLDAgQSA4LDggMCAwIDEgMjYwLDggTCAyNjAsNDAgTCAwLDQwIFoiIGZpbGw9IiMwNjRlM2IiIC8+CiAgICAgIDx0ZXh0IHg9IjEzMCIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTMiIGxldHRlci1zcGFjaW5nPSIxIj5I4buGIEzhu6RZIETDgEkgSOG6oE48L3RleHQ+CgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSwgNjUpIj4KICAgICAgICA8dGV4dCB4PSIxMTUiIHk9IjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzhiZGY4IiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iODAwIiBmb250LXNpemU9IjE1Ij5Mw6BtIGNo4bunIHTGsCBkdXkgcGjhuqNuIGJp4buHbjwvdGV4dD4KICAgICAgICA8bGluZSB4MT0iMjAiIHkxPSI0NSIgeDI9IjIxMCIgeTI9IjQ1IiBzdHJva2U9IiMxZTI5M2IiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgICA8dGV4dCB4PSIxMTUiIHk9Ijc1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZjQzZjVlIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0Ij5UcsOhbmgg4bu3IGzhuqFpIGhvw6BuIHRvw6BuPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjExNSIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNjAwIiBmb250LXNpemU9IjE0Ij5C4bqjbyB24buHIHTDrW5oIGLhu4FuIHbhu69uZyB2w6A8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iMTE1IiB5PSIxMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjYmQ1ZTEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMuNSIgZm9udC1zdHlsZT0iaXRhbGljIj5zdXkgZ2nhuqNtIGzhuq1wIGx14bqtbiBo4buNYyB0aHXhuq10LjwvdGV4dD4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KCiAgPCEtLSBTRUNUSU9OIFY6IMOdIFTGr+G7nk5HIFRISeG6vlQgS+G6viBJTkZPR1JBUEhJQyBUUlVZ4buATiBUSMOUTkcgKExvd2VyIFJpZ2h0KSAtLT4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5ODAsIDUyMCkiIGZpbHRlcj0idXJsKCNzaGFkb3ctYjYpIj4KICAgIDwhLS0gTWFpbiBPdXRlciBCb3ggLS0+CiAgICA8cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjQ2MCIgcng9IjE2IiBmaWxsPSJ1cmwoI2NhcmQtZ3JhZC1iNikiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICA8cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjQ2MCIgcng9IjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMi41IiBvcGFjaXR5PSIwLjI1IiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgIAogICAgPCEtLSBUYWIgSGVhZGVyIEJhbm5lciAtLT4KICAgIDxwYXRoIGQ9Ik0gMCwxNiBBIDE2LDE2IDAgMCAxIDE2LDAgTCA0OTAsMCBBIDEwLDEwIDAgMCAxIDUwMCwxMCBMIDUxMCw0MCBBIDE2LDE2IDAgMCAxIDQ5NCw1NiBMIDAsNTYgWiIgZmlsbD0iIzA1MzAyNiIgLz4KICAgIDx0ZXh0IHg9IjMwIiB5PSIzNiIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxOCIgbGV0dGVyLXNwYWNpbmc9IjEiPjUuIMOdIFTGr+G7nk5HIFRISeG6vlQgS+G6viBJTkZPR1JBUEhJQyBUUlVZ4buATiBUSMOUTkc8L3RleHQ+CgogICAgPCEtLSBUd28gY29sdW1ucyBvZiBndWlkZWxpbmVzIGluc2lkZSBTZWN0aW9uIDUgLS0+CiAgICA8IS0tIENvbHVtbiBSZWQ6IEPhuqJOSCBCw4FPIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDgwKSI+CiAgICAgIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjYwIiByeD0iMTIiIGZpbGw9IiMxODBhMGEiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQ1IiByeD0iMTAiIGZpbGw9IiM3ZjFkMWQiIC8+CiAgICAgIDx0ZXh0IHg9IjIwMCIgeT0iMjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTQiIGxldHRlci1zcGFjaW5nPSIyIj5D4bqiTkggQsOBTyAoSMOgbmggdmkgY+G6p24gdHLDoW5oKTwvdGV4dD4KCiAgICAgIDwhLS0gQ2hlY2tsaXN0IGl0ZW1zIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSwgNjUpIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iNzAwIiBmb250LXNpemU9IjE0LjUiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDE1KSI+CiAgICAgICAgICA8cGF0aCBkPSJNIDAsMCBMIDEwLDEwIE0gMTAsMCBMIDAsMTAiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICAgICAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxMCI+U2FvIGNow6lwIG5ndXnDqm4gdsSDbiB04burIEFJPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA1NSkiPgogICAgICAgICAgPHBhdGggZD0iTSAwLDAgTCAxMCwxMCBNIDEwLDAgTCAwLDEwIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgICA8dGV4dCB4PSIyNSIgeT0iMTAiPk5n4buleSB04bqhbyB0aMO0bmcgdGluLCBz4buRIGxp4buHdSBnaeG6ozwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgOTUpIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMCwwIEwgMTAsMTAgTSAxMCwwIEwgMCwxMCIgc3Ryb2tlPSIjZWY0NDQ0IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgogICAgICAgICAgPHRleHQgeD0iMjUiIHk9IjEwIj5Mw6FjaCBsdeG6rXQga2nhu4NtIMSR4buLbmggxJHhuqFvIHbEg248L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDEzNSkiPgogICAgICAgICAgPHBhdGggZD0iTSAwLDAgTCAxMCwxMCBNIDEwLDAgTCAwLDEwIiBzdHJva2U9IiNlZjQ0NDQiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+CiAgICAgICAgICA8dGV4dCB4PSIyNSIgeT0iMTAiPlPhu60gZOG7pW5nIEFJIGzGsOG7nWkgc3V5IG5naMSpIHRo4bulIMSR4buZbmc8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CgogICAgPCEtLSBDb2x1bW4gR3JlZW46IFTDjUNIIEPhu7BDIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDcwLCA4MCkiPgogICAgICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgcng9IjEyIiBmaWxsPSIjMDgxYzE1IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0NSIgcng9IjEwIiBmaWxsPSIjMDY1ZjQ2IiAvPgogICAgICA8dGV4dCB4PSIyMDAiIHk9IjI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE0IiBsZXR0ZXItc3BhY2luZz0iMiI+VMONQ0ggQ+G7sEMgKEjDoG5oIHZpIGtodXnhur9uIGtow61jaCk8L3RleHQ+CgogICAgICA8IS0tIENoZWNrbGlzdCBpdGVtcyAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDY1KSIgZmlsbD0iI2UyZThmMCIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxNC41Ij4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxNSkiPgogICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iMCw2IDQsMTAgMTAsMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogICAgICAgICAgPHRleHQgeD0iMjUiIHk9IjEwIj5UcuG7oyBsw70gYnJhaW5zdG9ybSDDvSB0xrDhu59uZyBiYW4gxJHhuqd1PC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA1NSkiPgogICAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iMCw2IDQsMTAgMTAsMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAvPgogICAgICAgICAgPHRleHQgeD0iMjUiIHk9IjEwIj5T4butIGThu6VuZyBo4buNYyB04bqtcCB2w6AgbmdoacOqbiBj4bupdSBBSTwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgOTUpIj4KICAgICAgICAgIDxwb2x5bGluZSBwb2ludHM9IjAsNiA0LDEwIDEwLDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KICAgICAgICAgIDx0ZXh0IHg9IjI1IiB5PSIxMCI+S2nhu4NtIHPhu61hIGzhu5dpIGNow61uaCB04bqjLCB04buRaSDGsHUgdsSDbiBwaG9uZzwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMTM1KSI+CiAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSIwLDYgNCwxMCAxMCwyIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+CiAgICAgICAgICA8dGV4dCB4PSIyNSIgeT0iMTAiPkPGoSBz4bufIMSR4buLbmggaMOsbmggZMOgbiDDvSBuZ2hpw6puIGPhu6l1PC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgPC9nPgoKICAgIDwhLS0gQm90dG9tIEFjdGlvbiBSaWJib246IDYgTkdVWcOKTiBU4bquQyBD4buQVCBMw5VJIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAsIDM2NSkiIGZpbHRlcj0idXJsKCNzaGFkb3ctYjYpIj4KICAgICAgPHJlY3Qgd2lkdGg9Ijg0MCIgaGVpZ2h0PSI2NSIgcng9IjEwIiBmaWxsPSIjMDIyYzIyIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAKICAgICAgPCEtLSBTaGllbGQgdmVjdG9yIGljb24gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCAxNykiPgogICAgICAgIDxwYXRoIGQ9Ik0gMCwwIEwgMTgsMCBDIDE4LDAgMTgsMTUgOSwyMiBDIDAsMTUgMCwwIDAsMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8cG9seWxpbmUgcG9pbnRzPSI1LDEwIDgsMTMgMTMsOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgLz4KICAgICAgPC9nPgoKICAgICAgPHRleHQgeD0iODAiIHk9IjM4IiBmaWxsPSIjYTdmM2QwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjE2IiBsZXR0ZXItc3BhY2luZz0iMyI+NiBOR1VZw4pOIFThuq5DIEPhu5BUIEzDlUkgQ+G7pkEgQ0hJ4bq+QyBLSEnDik4gTEnDik0gQ0jDjU5IIFPhu5A8L3RleHQ+CiAgICAgIAogICAgICA8IS0tIEdsb3dpbmcgZ3JlZW4gZG90cyByZXByZXNlbnRpbmcgdGhlIGNpcmNsZXMgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMCwgMjIpIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjMTBiOTgxIiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjMTBiOTgxIiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjMTBiOTgxIiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSI3MCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjMTBiOTgxIiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSI5MCIgY3k9IjEwIiByPSI2IiBmaWxsPSIjMTBiOTgxIiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMCIgcj0iNiIgZmlsbD0iIzEwYjk4MSIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdC1iNikiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gU0VDVElPTiA0OiBC4buYIFPDgVUgTkdVWcOKTiBU4bquQyBDw4EgQ8OBIE5Iw4JOIChCb3R0b20gQ2VudGVyLUxlZnQpIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCA4ODApIiBmaWx0ZXI9InVybCgjc2hhZG93LWI2KSI+CiAgICA8IS0tIE91dGVyIGJhY2tkcm9wIHJvdW5kZWQgYm94IC0tPgogICAgPHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxNiIgZmlsbD0idXJsKCNjYXJkLWdyYWQtYjYpIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuMiIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdC1iNikiIC8+CiAgICAKICAgIDwhLS0gSGVhZGVyIG9mIFNlY3Rpb24gNCAtLT4KICAgIDx0ZXh0IHg9IjM1IiB5PSIzMiIgZmlsbD0iIzEwYjk4MSIgZm9udC1mYW1pbHk9IidJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjkwMCIgZm9udC1zaXplPSIxNC41IiBsZXR0ZXItc3BhY2luZz0iMSI+NC4gQuG7mCBTw4FVIE5HVVnDik4gVOG6rkMgQ8OBIE5Iw4JOPC90ZXh0PgogICAgPGxpbmUgeDE9IjM1IiB5MT0iNDIiIHgyPSIyODUiIHkyPSI0MiIgc3Ryb2tlPSIjMDY0ZTNiIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KCiAgICA8IS0tIDYgYmFkZ2VzIHNpZGUtYnktc2lkZSAtLT4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LCA1NSkiPgogICAgICA8IS0tIDEuIE5HVVnDik4gQuG6ok4gLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxNCIgZmlsbD0iIzA0MjAxOCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdC1iNikiIC8+CiAgICAgICAgPCEtLSBMZWFmIG91dGxpbmUgLS0+CiAgICAgICAgPHBhdGggZD0iTTExLDE4IEMxMSwxMyAxNSwxMSAxOSwxMSBDMTksMTYgMTUsMTkgMTEsMTkgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8dGV4dCB4PSIzOCIgeT0iMjAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTMiIGxldHRlci1zcGFjaW5nPSIwLjUiPk5HVVnDik4gQuG6ok48L3RleHQ+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gMi4gWMOBQyBNSU5IIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDUsIDApIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxNCIgZmlsbD0iIzA0MjAxOCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdC1iNikiIC8+CiAgICAgICAgPCEtLSBTZWFyY2ggY2hlY2sgLS0+CiAgICAgICAgPGNpcmNsZSBjeD0iMTMiIGN5PSIxMyIgcj0iNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8bGluZSB4MT0iMTYiIHkxPSIxNiIgeDI9IjIwIiB5Mj0iMjAiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHRleHQgeD0iMzgiIHk9IjIwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjEzIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5Yw4FDIE1JTkg8L3RleHQ+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gMy4gTUlOSCBC4bqgQ0ggLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4NSwgMCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE0IiBmaWxsPSIjMDQyMDE4IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8IS0tIERvYyBpY29uIC0tPgogICAgICAgIDxyZWN0IHg9IjEwIiB5PSI4IiB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHJ4PSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHRleHQgeD0iMzgiIHk9IjIwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjEzIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5NSU5IIELhuqBDSDwvdGV4dD4KICAgICAgPC9nPgoKICAgICAgPCEtLSA0LiBMw4BNIENI4bumIC0tPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjUsIDApIj4KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxNCIgZmlsbD0iIzA0MjAxOCIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsdGVyPSJ1cmwoI2dsb3ctc29mdC1iNikiIC8+CiAgICAgICAgPCEtLSBQcm9maWxlIG91dGxpbmUgd2l0aCBjaGVjayAtLT4KICAgICAgICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjExIiByPSIzLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHBhdGggZD0iTTksMjAgQzksMTcgMTIsMTYgMTUsMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHRleHQgeD0iMzgiIHk9IjIwIiBmaWxsPSIjZTJlOGYwIiBmb250LWZhbWlseT0iJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iOTAwIiBmb250LXNpemU9IjEzIiBsZXR0ZXItc3BhY2luZz0iMC41Ij5Mw4BNIENI4bumPC90ZXh0PgogICAgICA8L2c+CgogICAgICA8IS0tIDUuIMSQ4bqgTyDEkOG7qEMgLS0+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU2NSwgMCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE0IiBmaWxsPSIjMDQyMDE4IiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMS41IiBmaWx0ZXI9InVybCgjZ2xvdy1zb2Z0LWI2KSIgLz4KICAgICAgICA8IS0tIEhlYXJ0IHNoYXBlIC0tPgogICAgICAgIDxwYXRoIGQ9Ik0xNSwxOSBDMTUsMTkgMTAsMTUgMTAsMTIuNSBDMTAsMTEgMTEsMTAgMTIuNSwxMCBDMTMuNSwxMCAxNC41LDExIDE1LDEyIEMxNS41LDExIDE2LjUsMTAgMTcuNSwxMCBDMTksMTAgMjAsMTEgMjAsMTIuNSBDMjAsMTUgMTUsMTkgMTUsMTkgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8dGV4dCB4PSIzOCIgeT0iMjAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTMiIGxldHRlci1zcGFjaW5nPSIwLjUiPsSQ4bqgTyDEkOG7qEM8L3RleHQ+CiAgICAgIDwvZz4KCiAgICAgIDwhLS0gNi4gSOG7jEMgU8OCVSAtLT4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzA1LCAwKSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTQiIGZpbGw9IiMwNDIwMTgiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbHRlcj0idXJsKCNnbG93LXNvZnQtYjYpIiAvPgogICAgICAgIDwhLS0gQnJhaW4gbG9naWMgY3VydmVzIC0tPgogICAgICAgIDxwYXRoIGQ9Ik0xMiwxMiBRMTAsMTUgMTMsMTggUTE2LDE1IDE1LDEyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjUiIC8+CiAgICAgICAgPHBhdGggZD0iTTE4LDEyIFEyMCwxNSAxNywxOCBRMTQsMTUgMTUsMTIgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuNSIgLz4KICAgICAgICA8dGV4dCB4PSIzOCIgeT0iMjAiIGZpbGw9IiNlMmU4ZjAiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTMiIGxldHRlci1zcGFjaW5nPSIwLjUiPkjhu4xDIFPDglU8L3RleHQ+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+CgogIDwhLS0gRk9PVEVSIFBBTkVMIC0tPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCAxMDEwKSI+CiAgICA8cmVjdCB3aWR0aD0iMTg0MCIgaGVpZ2h0PSI0NSIgcng9IjgiIGZpbGw9IiMwMTBhMDgiIGZpbGwtb3BhY2l0eT0iMC45IiBzdHJva2U9IiMwNjRlM2IiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgPHRleHQgeD0iMjUiIHk9IjI3IiBmaWxsPSIjOTRhM2I4IiBmb250LWZhbWlseT0iJ0pldEJyYWlucyBNb25vJywgbW9ub3NwYWNlIiBmb250LXNpemU9IjEyIj5OZ3Xhu5NuOiBCw6FvIGPDoW8gdGjhu7FjIGjDoG5oIGxpw6ptIGNow61uaCBraG9hIGjhu41jIHRtcHZxemh6OV9idDRfZG9hbm5nb2NsaW5oMjUwNTEyMjcuZG9jeDwvdGV4dD4KICAgIAogICAgPCEtLSBDZW50ZXJlZCBjaGVjayB0YWcgLS0+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NTAsIDE1KSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCwwIEwgMTUsMCBMIDEyLDE1IEwgLTMsMTUgWiIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4zIiAvPgogICAgICA8dGV4dCB4PSIyNSIgeT0iMTIiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMTEiIGxldHRlci1zcGFjaW5nPSIxIj5VRUIgTE1TIENPTVBMSUFOVCBQT1JURk9MSU88L3RleHQ+CiAgICA8L2c+CgogICAgPHRleHQgeD0iMTgxNSIgeT0iMjciIHRleHQtYW5jaG9yPSJlbmQiIGZpbGw9IiMxMGI5ODEiIGZvbnQtZmFtaWx5PSInSW50ZXInLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTIuNSI+U0lOSCBWScOKTiBUSOG7sEMgSEnhu4ZOOiDEkE/DgE4gTkfhu4xDIExJTkgg4oCiIE1TVjogMjUwNTEyMjcg4oCiIEzhu5pQOiBRSCAyMDI1RSBLVFFUIDEwPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg==";
