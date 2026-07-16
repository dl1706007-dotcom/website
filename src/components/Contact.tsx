import React, { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, Github, Send, CheckCircle2, MessageSquare, Trash2, ArrowUpRight } from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Góp ý dự án học thuật');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Local submission database to make it feel extremely real and interactive
  const [logs, setLogs] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('ueb_portfolio_contact_logs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('ueb_portfolio_contact_logs', JSON.stringify(logs));
  }, [logs]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newLog: ContactMessage = {
      id: `msg-${Date.now()}`,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toLocaleString('vi-VN'),
    };

    setLogs([newLog, ...logs]);
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const deleteLog = (id: string) => {
    setLogs(prev => prev.filter(l => l.id !== id));
  };

  return (
    <section id="contact" className="py-20 bg-navy-900/40 border-t border-navy-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form Info & Social Links */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-display">KẾT NỐI HỌC THUẬT</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Đồng hành kiến tạo tương lai số
              </h2>
              <p className="text-xs sm:text-sm text-navy-300 leading-relaxed font-sans">
                Bạn quan tâm đến các đề tài nghiên cứu về Kinh tế số của sinh viên VNU-UEB? Hãy gửi lời nhắn trực tiếp hoặc liên lạc qua các kênh học thuật chính thống bên dưới.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href="mailto:25051227@vnu.edu.vn"
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-950 border border-navy-800 hover:border-teal-500/50 transition-all group"
                id="contact-email-link"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-navy-950 transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-navy-400 font-mono font-bold block uppercase tracking-wider">Hòm thư cá nhân</span>
                  <span className="text-xs text-white font-semibold font-mono">25051227@vnu.edu.vn</span>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-navy-500 group-hover:text-teal-400 transition-colors" />
              </a>

              <a
                href="tel:0367294189"
                className="flex items-center gap-4 p-4 rounded-2xl bg-navy-950 border border-navy-800 hover:border-teal-500/50 transition-all group"
                id="contact-phone-link"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-navy-950 transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-navy-400 font-mono font-bold block uppercase tracking-wider">Số điện thoại liên hệ</span>
                  <span className="text-xs text-white font-semibold font-mono">0367294189</span>
                </div>
                <ArrowUpRight size={14} className="ml-auto text-navy-500 group-hover:text-teal-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-950 p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-xl space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">Gửi lời nhắn cho em (Direct Mail)</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4" id="form-contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-navy-400 mb-1.5 uppercase font-display">Họ và tên của bạn:</label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs font-sans bg-navy-900 border border-navy-800 text-white rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-navy-400 mb-1.5 uppercase font-display">Địa chỉ Email:</label>
                    <input
                      type="email"
                      required
                      placeholder="address@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs font-sans bg-navy-900 border border-navy-800 text-white rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-navy-400 mb-1.5 uppercase font-display">Chủ đề:</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs font-sans bg-navy-900 border border-navy-800 text-white rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition-all"
                  >
                    <option value="Góp ý dự án học thuật">Góp ý dự án học thuật</option>
                    <option value="Hợp tác nghiên cứu khoa học">Hợp tác nghiên cứu khoa học</option>
                    <option value="Cơ hội thực tập/Việc làm">Cơ hội thực tập/Việc làm</option>
                    <option value="Khác">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-navy-400 mb-1.5 uppercase font-display">Nội dung lời nhắn:</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Nhập nội dung thông điệp tại đây..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs font-sans bg-navy-900 border border-navy-800 text-white rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex-1">
                    {submitted && (
                      <div className="flex items-center gap-1.5 text-xs text-teal-400 font-semibold animate-fade-in" id="submission-success-msg">
                        <CheckCircle2 size={14} /> Gửi tin thành công! Cảm ơn bạn.
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-navy-950 font-extrabold text-xs rounded-lg flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(20,184,166,0.15)] transition-all uppercase tracking-wider font-display cursor-pointer"
                    id="btn-submit-contact"
                  >
                    Gửi thư <Send size={12} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Local database submission logs (Interactive Drawer Feature) */}
        {logs.length > 0 && (
          <div className="mt-12 bg-navy-950/80 p-6 rounded-2xl border border-navy-800 space-y-4" id="submitted-logs-section">
            <div className="flex items-center justify-between pb-2 border-b border-navy-800">
              <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest font-display flex items-center gap-1.5">
                <MessageSquare size={12} /> Lịch sử thư đã gửi (Lưu cục bộ thiết bị của bạn)
              </span>
              <button
                onClick={() => {
                  if (confirm('Bạn muốn xóa toàn bộ lịch sử thư đã gửi?')) {
                    setLogs([]);
                  }
                }}
                className="text-[10px] text-navy-500 hover:text-red-400 font-mono flex items-center gap-1"
                id="btn-clear-contact-logs"
              >
                <Trash2 size={10} /> Xóa sạch lịch sử
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[220px] overflow-y-auto pr-1">
              {logs.map((log) => (
                <div key={log.id} className="bg-navy-900/60 p-4 rounded-xl border border-navy-800 space-y-2 relative group">
                  <button
                    onClick={() => deleteLog(log.id)}
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 text-navy-500 hover:text-red-400 transition-opacity p-0.5"
                    title="Xóa dòng"
                  >
                    <Trash2 size={12} />
                  </button>
                  <div className="flex justify-between text-[9px] font-mono text-navy-400">
                    <span>Người gửi: <strong className="text-navy-300">{log.name}</strong> ({log.email})</span>
                    <span>{log.timestamp}</span>
                  </div>
                  <h6 className="text-[11px] font-bold text-teal-300 font-display">Chủ đề: {log.subject}</h6>
                  <p className="text-[10px] text-navy-300 leading-relaxed font-sans italic">
                    "{log.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
