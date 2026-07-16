import { personalReflection } from '../data';
import { Quote, Award, Briefcase, GraduationCap, CheckCircle, Flame, Heart, Sparkles } from 'lucide-react';

export default function Reflection() {
  return (
    <section id="reflection" className="py-20 bg-navy-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-display">TỔNG KẾT & CHIÊM NGHIỆM</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Nhìn Nhận Bản Thân & Tầm Nhìn Kỹ Năng Số
            </h2>
            <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full mt-2" />
          </div>

          {/* Large Quote block */}
          <div className="bg-navy-900/50 border border-navy-800 hover:border-teal-500/30 hover:shadow-[0_4px_20px_rgba(45,212,191,0.03)] transition-all duration-300 p-8 rounded-3xl relative overflow-hidden shadow-xl">
            <div className="absolute top-6 left-6 text-teal-500/10 pointer-events-none">
              <Quote size={80} />
            </div>
            <p className="text-xs sm:text-sm font-medium text-teal-300 italic relative z-10 leading-relaxed font-display">
              "{personalReflection.quote}"
            </p>
            <div className="mt-4 text-right text-[10px] font-mono text-navy-400">
              — {personalReflection.studentName}, Sinh viên UEB - ĐHQGHN
            </div>
          </div>

          {/* Detailed Reflection Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Lesson learned */}
            <div className="bg-navy-900/30 p-6 rounded-2xl border border-navy-800 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(45,212,191,0.03)] transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Award size={18} />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-display">Bài học quý giá nhất</h4>
                </div>
                <p className="text-xs text-navy-300 leading-relaxed font-sans">
                  {personalReflection.valuableLesson}
                </p>
              </div>
              <div className="pt-4 border-t border-navy-800/60 flex items-center gap-2 text-[10px] text-teal-400 font-mono">
                <CheckCircle size={12} /> <span>Làm chủ tư duy, không làm nô lệ công nghệ</span>
              </div>
            </div>

            {/* Future application */}
            <div className="bg-navy-900/30 p-6 rounded-2xl border border-navy-800 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(45,212,191,0.03)] transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400">
                  <Briefcase size={18} />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-display">Ứng dụng thực tế vào Ngành học</h4>
                </div>
                <p className="text-xs text-navy-300 leading-relaxed font-sans">
                  {personalReflection.futureApplication}
                </p>
              </div>
              <div className="pt-4 border-t border-navy-800/60 flex items-center gap-2 text-[10px] text-teal-400 font-mono">
                <CheckCircle size={12} /> <span>Bệ phóng khởi nghiệp Kinh tế bền vững</span>
              </div>
            </div>
          </div>

          {/* New Horizontal Section: CẢM NHẬN VỀ HÀNH TRÌNH XÂY DỰNG PORTFOLIO SỐ */}
          <div className="bg-gradient-to-r from-navy-900/60 via-navy-900/30 to-navy-950 border border-navy-800 hover:border-teal-500/30 hover:shadow-[0_8px_30px_rgba(45,212,191,0.06)] transition-all duration-300 p-8 rounded-3xl relative overflow-hidden shadow-2xl space-y-6" id="personal-portfolio-reflection-card">
            {/* Background elements */}
            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 text-teal-400 pb-4 border-b border-navy-800/50">
              <div className="p-2 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-400 relative">
                <Flame size={20} className="relative z-10 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full pointer-events-none" />
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-teal-400/80 uppercase block">CHIÊM NGHIỆM CÁ NHÂN</span>
                <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight font-display">
                  Cảm nhận cá nhân: Bước ngoặt chuyển đổi từ trang giấy đến Không gian số
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs text-navy-200 leading-relaxed font-sans">
              <p className="relative pl-4 border-l-2 border-teal-500/30">
                "Việc tự tay thiết kế và hoàn thiện trang Portfolio số này không đơn thuần là hoàn thành một bài tập kỹ năng, mà thực sự là một bước ngoặt lớn trong tư duy của em. Trước đây, các bài tập thực hành hay báo cáo dự án thường chỉ nằm im trên các tệp Word, slide thuyết trình rời rạc. Khi chuyển hóa và hệ thống lại toàn bộ hành trình đó lên không gian số tương tác này, em học được cách nhìn nhận sản phẩm của mình dưới lăng kính của một người sáng tạo trải nghiệm."
              </p>
              <p className="relative pl-4 border-l-2 border-teal-500/30">
                "Quá trình cộng tác chặt chẽ cùng trợ lý AI để tinh chỉnh từng dòng chữ, cấu trúc lại từng chiếc Modal Popup tương tác ở bài 4, bài 5, bài 6 đã giúp em hiểu sâu sắc thế nào là 'làm chủ công nghệ'. Việc tối ưu hóa trải nghiệm người dùng (UX) và sắp xếp thông tin trực quan không chỉ giúp sản phẩm đẹp mắt hơn, mà còn rèn luyện cho em tính tỉ mỉ, tư duy hệ thống và cách định vị thương hiệu cá nhân chuyên nghiệp."
              </p>
              <p className="relative pl-4 border-l-2 border-teal-500/30">
                "Khi nhìn lại toàn bộ chặng đường học tập được trình bày ngăn nắp, hiện đại trên trang web này, em cảm thấy vô cùng tự hào. Đây không chỉ là một giao diện kỹ thuật, mà là minh chứng sống động nhất cho sự nỗ lực, tinh thần tự học nghiêm túc và bước trưởng thành vượt bậc về năng lực số của bản thân tại UEB."
              </p>
            </div>

            <div className="pt-4 border-t border-navy-800/40 flex flex-wrap items-center justify-between gap-3 text-[10px] text-teal-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Sparkles size={12} className="text-teal-400 shrink-0" />
                <span>Trải nghiệm Sáng tạo & Làm chủ Công nghệ số</span>
              </div>
              <div className="text-right text-navy-400 font-medium">
                — Đoàn Ngọc Linh (QH 2025E KTQT 10)
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
