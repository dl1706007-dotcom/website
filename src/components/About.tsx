import { personalReflection } from '../data';
import { Shield, BookOpen, Compass, Trophy, Library } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-navy-900/40 border-y border-navy-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Academic Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-950 border border-navy-800 hover:border-teal-500/40 transition-all duration-300 p-6 rounded-3xl relative overflow-hidden shadow-2xl">
              {/* Technical glowing lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-sky-500" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Library size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest font-display">Sinh viên Nghiên cứu</span>
                    <h3 className="text-sm font-extrabold text-white font-display mt-0.5">{personalReflection.studentName}</h3>
                  </div>
                </div>

                <div className="border-t border-navy-800/80 pt-4 space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-navy-400">Mã sinh viên:</span>
                    <span className="font-mono text-white font-medium">{personalReflection.studentId}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-navy-400">Lớp học phần:</span>
                    <span className="font-mono text-white font-medium">{personalReflection.studentClass}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-navy-400">Học viện:</span>
                    <span className="text-white text-right font-medium max-w-[200px] truncate">{personalReflection.studentUni.split(',')[0]}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-navy-800/40">
                  <span className="text-[9px] font-bold text-navy-400 uppercase font-display block mb-1">Mục tiêu đào tạo bản thân</span>
                  <p className="text-[11px] text-navy-300 leading-relaxed font-sans">
                    Nghiên cứu liên ngành Kinh tế học ứng dụng và Công nghệ thông tin để xây dựng giải pháp hỗ trợ chuyển đổi số toàn diện cho doanh nghiệp Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Personal Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-display">CÂU CHUYỆN CÁ NHÂN & SỨ MỆNH</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Đại học Kinh tế, ĐHQGHN — Nơi Khởi Nguồn Tư Duy Kinh Tế Số
              </h2>
              <p className="text-xs sm:text-sm text-navy-300 leading-relaxed font-sans">
                Là sinh viên Chuyên ngành Kinh tế Quốc tế tại <span className="text-white font-semibold">VNU-UEB</span>, em nhận thấy sự bùng nổ của các mô hình kinh doanh số không còn là xu hướng xa vời mà đã trở thành năng lực sinh tồn cốt lõi. Học phần <span className="text-white font-semibold">Công nghệ số</span> cung cấp cho em không chỉ những công cụ phần mềm thô, mà chính là thế giới quan khoa học về cách số hóa dữ liệu, khai phóng hiệu năng thông tin và tương tác có đạo đức với Trí tuệ nhân tạo.
              </p>
            </div>

            {/* Objectives / Goals Bento Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Goal 1 */}
              <div className="p-5 bg-navy-950 rounded-2xl border border-navy-850 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(45,212,191,0.03)] transition-all duration-300 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <BookOpen size={16} />
                </div>
                <h4 className="text-xs font-bold text-white font-display">Quản trị Tri thức số học thuật</h4>
                <p className="text-[11px] text-navy-300 leading-relaxed">
                  Thiết lập hệ thống thông tin khoa học cá nhân, nâng cao kỹ năng xử lý và truy tìm tài nguyên chuẩn quốc tế.
                </p>
              </div>

              {/* Goal 2 */}
              <div className="p-5 bg-navy-950 rounded-2xl border border-navy-850 hover:border-teal-500/40 hover:shadow-[0_4px_20px_rgba(45,212,191,0.03)] transition-all duration-300 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Compass size={16} />
                </div>
                <h4 className="text-xs font-bold text-white font-display">Tư duy Kỹ thuật & Đồng sáng tạo</h4>
                <p className="text-[11px] text-navy-300 leading-relaxed">
                  Làm chủ phương pháp cộng tác Kanban từ xa và đồng sáng tạo cùng AI nhằm đột phá 200% năng suất làm việc.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
