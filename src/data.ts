import { FileNode, SearchOperator, EvaluationSource, PromptImprovement, KanbanTask, AISpotlight, EthicsRule } from './types';

// BÀI 1: QUẢN LÝ TỆP
export const unoptimizedFileTree: FileNode[] = [
  {
    id: 'un-1',
    name: 'New Folder',
    type: 'folder',
    isOpen: true,
    children: [
      { id: 'un-1-1', name: 'bai 1.docx', type: 'file', size: '2.4 MB', updatedAt: '2026-03-12' },
      { id: 'un-1-2', name: 'bai 1 ban sua.docx', type: 'file', size: '2.5 MB', updatedAt: '2026-03-14' },
      { id: 'un-1-3', name: 'bai1_final_cuoicung.docx', type: 'file', size: '2.8 MB', updatedAt: '2026-03-15' },
    ]
  },
  {
    id: 'un-2',
    name: 'Tai lieu hoc tap',
    type: 'folder',
    children: [
      { id: 'un-2-1', name: 'slide thuyet trinh mon cong nghe.pptx', type: 'file', size: '12.1 MB', updatedAt: '2026-04-01' },
      { id: 'un-2-2', name: 'hinh_anh_1.jpg', type: 'file', size: '1.2 MB', updatedAt: '2026-04-05' },
      { id: 'un-2-3', name: 'pdf_cuaso.pdf', type: 'file', size: '4.5 MB', updatedAt: '2026-04-10' },
    ]
  },
  { id: 'un-3', name: 'note_nhap.txt', type: 'file', size: '15 KB', updatedAt: '2026-05-20' }
];

export const optimizedFileTree: FileNode[] = [
  {
    id: 'opt-root-1',
    name: '2026_HKII_Mon-CongNgheSo_UEB',
    type: 'folder',
    isOpen: true,
    children: [
      {
        id: 'opt-sub-1',
        name: '01_LyThuyet_NangLucSo',
        type: 'folder',
        children: [
          { id: 'opt-f1', name: '20260220_GiaoTrinh_TongQuanCongNgheSo_V1.pdf', type: 'file', size: '8.4 MB', updatedAt: '2026-02-20' },
          { id: 'opt-f2', name: '20260305_BaiGiang_AnToanThongTin_V2.pdf', type: 'file', size: '3.1 MB', updatedAt: '2026-03-05' }
        ]
      },
      {
        id: 'opt-sub-2',
        name: '02_BaiTap_CaNhan',
        type: 'folder',
        isOpen: true,
        children: [
          { id: 'opt-f3', name: '20260315_CNS_BaiTap1-QuanLyTep_V1.docx', type: 'file', size: '2.8 MB', updatedAt: '2026-03-15' },
          { id: 'opt-f4', name: '20260410_CNS_BaiTap2-TimKiemThongTin_V1.pdf', type: 'file', size: '4.5 MB', updatedAt: '2026-04-10' },
          { id: 'opt-f5', name: '20260515_CNS_BaiTap3-PromptEngineering_V3.pdf', type: 'file', size: '1.9 MB', updatedAt: '2026-05-15' }
        ]
      },
      {
        id: 'opt-sub-3',
        name: '03_BaiTap_Nhom_Kanban',
        type: 'folder',
        children: [
          { id: 'opt-f6', name: '20260525_CNS_KeHoachKanban_Nhom4_V1.xlsx', type: 'file', size: '420 KB', updatedAt: '2026-05-25' },
          { id: 'opt-f7', name: '20260610_CNS_BaoCaoCuoiKy-KinhTeSo_V2.docx', type: 'file', size: '5.2 MB', updatedAt: '2026-06-10' }
        ]
      },
      {
        id: 'opt-sub-4',
        name: '04_Anh_MinhHoa_SángTao',
        type: 'folder',
        children: [
          { id: 'opt-f8', name: '20260601_CNS_LogoDigital_UEB_HighRes.png', type: 'file', size: '1.2 MB', updatedAt: '2026-06-01' }
        ]
      }
    ]
  }
];

export const fileNamingRules = [
  { rule: 'Tiền tố thời gian (ISO 8601)', desc: 'Luôn bắt đầu tên tệp bằng YYYYMMDD để sắp xếp theo trình tự thời gian tối ưu.', example: '20260715_BaoCao_MonCNS.pdf' },
  { rule: 'Ký tự không dấu tiếng Việt', desc: 'Sử dụng tiếng Việt không dấu để tránh lỗi hệ thống, tương thích mọi nền tảng đám mây.', example: 'Bao_Cao_Nhom_Kinh_Te_So' },
  { rule: 'Phân tách bằng dấu gạch dưới', desc: 'Dùng dấu gạch dưới (_) hoặc gạch ngang (-) thay cho khoảng trắng để định dạng tệp chuẩn xác.', example: '20260715_KinhTeSo_VNU.pdf' },
  { rule: 'Ghi chú phiên bản rõ ràng', desc: 'Thêm hậu tố _V1, _V2, _Final thay vì các từ vô nghĩa như "cuoicung", "banmoi" để theo dõi lịch sử chỉnh sửa.', example: '20260715_TieuLuan_V3.docx' },
  { rule: 'Cấu trúc thư mục tối đa 3 cấp', desc: 'Hạn chế tạo quá nhiều thư mục con sâu để truy xuất nhanh chóng dưới 3 giây.', example: 'Học kỳ -> Môn học -> Loại tài liệu' }
];


// BÀI 2: TÌM KIẾM THÔNG TIN
export const searchOperatorsData: SearchOperator[] = [
  {
    operator: 'Ngoặc kép ""',
    syntax: '"Kinh tế số Việt Nam"',
    purpose: 'Tìm kiếm chính xác cụm từ khóa theo đúng thứ tự, loại bỏ các kết quả bị phân tách.',
    example: '"Kinh tế số Việt Nam" báo cáo 2026',
    result: 'Chỉ hiển thị các tài liệu chứa nguyên văn cụm từ "Kinh tế số Việt Nam", loại bỏ kết quả chứa lẻ tẻ từ "kinh tế" hoặc "Việt Nam".'
  },
  {
    operator: 'Toán tử site:',
    syntax: 'site:ueb.vnu.edu.vn',
    purpose: 'Giới hạn phạm vi tìm kiếm chỉ nằm trong một tên miền hoặc trang web cụ thể.',
    example: '"năng lực số" site:ueb.vnu.edu.vn',
    result: 'Toàn bộ kết quả trả về bắt buộc phải xuất phát từ tên miền chính thức của Trường Đại học Kinh tế - ĐHQGHN.'
  },
  {
    operator: 'Toán tử filetype:',
    syntax: 'filetype:pdf',
    purpose: 'Lọc kết quả tìm kiếm theo định dạng tệp mong muốn (pdf, docx, pptx, xlsx).',
    example: '"đạo đức AI" filetype:pdf',
    result: 'Google chỉ hiển thị các tệp tài liệu PDF, thường là các báo cáo khoa học hoặc giáo trình chuyên sâu về đạo đức AI.'
  },
  {
    operator: 'Toán tử trừ (-)',
    syntax: '-"quảng cáo"',
    purpose: 'Loại trừ hoàn toàn các trang web chứa từ khóa không mong muốn khỏi kết quả tìm kiếm.',
    example: 'xu hướng fintech 2026 -quảng cáo -PR',
    result: 'Các kết quả về xu hướng Fintech chất lượng cao, loại bỏ các trang thông tin thương mại, quảng bá dịch vụ.'
  }
];

export const craapEvaluationData: EvaluationSource[] = [
  {
    id: 'src-1',
    title: 'Báo cáo Thường niên Kinh tế Việt Nam 2025: Thúc đẩy Chuyển đổi số trong Liên kết Vùng',
    url: 'https://ueb.vnu.edu.vn/TepKem/VNU-UEB-BaoCaoThuongNien2025.pdf',
    currency: { score: 5, comment: 'Xuất bản năm 2025, cập nhật số liệu mới nhất trong vòng 1 năm.' },
    relevance: { score: 5, comment: 'Trực tiếp phân tích sâu về kinh tế số và năng lực số vùng kinh tế.' },
    authority: { score: 5, comment: 'Được nghiên cứu bởi Viện Nghiên cứu Kinh tế và Chính sách (VEPR) thuộc VNU-UEB.' },
    accuracy: { score: 5, comment: 'Dữ liệu có nguồn gốc đối chiếu rõ ràng từ Tổng cục Thống kê, có phản biện khoa học.' },
    purpose: { score: 5, comment: 'Mục đích học thuật và tư vấn chính sách phi lợi nhuận, hoàn toàn khách quan.' },
    totalScore: 25,
    isReliable: true
  },
  {
    id: 'src-2',
    title: 'Cẩm nang Kiếm 100 Triệu Mỗi Tháng Nhờ Ứng Dụng AI ChatGPT thần tốc',
    url: 'https://blogkiemtienso-vietnam-247.blogspot.com/cam-nang-chatgpt',
    currency: { score: 4, comment: 'Thông tin viết gần đây nhưng thiếu ngày tháng phát hành cụ thể.' },
    relevance: { score: 3, comment: 'Có liên quan đến AI nhưng mang tính giật gân, thiếu chiều sâu học thuật.' },
    authority: { score: 1, comment: 'Tác giả ẩn danh, đăng trên nền tảng Blogspot cá nhân không kiểm duyệt.' },
    accuracy: { score: 1, comment: 'Nội dung phóng đại, không có nghiên cứu kiểm chứng, chứa nhiều liên kết rác.' },
    purpose: { score: 1, comment: 'Mục đích quảng bá khóa học và thu thập thông tin email người đọc.' },
    totalScore: 10,
    isReliable: false
  },
  {
    id: 'src-3',
    title: 'Tổng quan về Đạo đức Trí tuệ Nhân tạo và Xu hướng Luật pháp Quốc tế',
    url: 'https://vi.wikipedia.org/wiki/Đạo_đức_trí_tuệ_nhân_tạo',
    currency: { score: 4, comment: 'Nội dung liên tục được cộng đồng chỉnh sửa cập nhật theo các diễn biến mới.' },
    relevance: { score: 4, comment: 'Cung cấp nền tảng lý thuyết rộng về Đạo đức AI.' },
    authority: { score: 3, comment: 'Bách khoa toàn thư mở, tuy nhiên không được xem là nguồn trích dẫn học thuật chính thống.' },
    accuracy: { score: 4, comment: 'Thông tin có hệ thống nguồn tham khảo phong phú ở cuối trang để kiểm chứng chéo.' },
    purpose: { score: 5, comment: 'Chia sẻ tri thức cộng đồng phi lợi nhuận, tương đối trung lập.' },
    totalScore: 20,
    isReliable: true
  }
];


// BÀI 3: PROMPT ENGINEERING
export const promptImprovements: PromptImprovement[] = [
  {
    id: 'pr-1',
    context: 'Phân tích ứng dụng của Trí tuệ nhân tạo trong Quản trị doanh nghiệp.',
    before: 'Hãy viết một bài về AI trong quản lý doanh nghiệp.',
    after: 'Với vai trò là Chuyên gia Tư vấn Chuyển đổi số doanh nghiệp, hãy viết một bài phân tích chuyên sâu (khoảng 800 từ) dành cho các CEO doanh nghiệp vừa và nhỏ (SME) tại Việt Nam. \n\nYêu cầu cấu trúc bài viết:\n1. Đặt vấn đề: Thách thức trong quản trị SME hiện nay.\n2. Thực trạng & Giải pháp: Nêu rõ 3 ứng dụng cụ thể của AI (Ví dụ: tự động hóa quy trình khách hàng, dự báo doanh thu bằng Machine Learning, và tối ưu hóa chuỗi cung ứng).\n3. Lộ trình triển khai: 3 bước tinh gọn để SME ứng dụng AI với chi phí thấp.\n4. Kết luận.\n\nVăn phong chuyên nghiệp, thuyết phục, sử dụng các thuật ngữ quản trị đúng chuẩn quốc tế.',
    explanation: 'Prompt cải tiến áp dụng khung cấu trúc chuyên nghiệp: Phân vai (Role) rõ ràng, xác định đối tượng độc giả (SMEs tại VN), phân bổ cấu trúc cụ thể (4 phần), đưa ra ràng buộc định dạng và độ dài, định hình văn phong học thuật cao cấp.',
    techniques: ['Phân vai (Role-playing)', 'Ràng buộc đầu ra (Constraints)', 'Bối cảnh hóa (Contextualization)', 'Hướng dẫn từng bước (Step-by-step Structure)']
  },
  {
    id: 'pr-2',
    context: 'Tóm tắt báo cáo nghiên cứu khoa học phức tạp.',
    before: 'Tóm tắt file nghiên cứu này cho tôi.',
    after: 'Bạn là một Trợ lý Nghiên cứu Khoa học cao cấp. Hãy đọc kỹ phần tóm tắt dự án nghiên cứu đính kèm và trích xuất thông tin thành một bảng so sánh gồm các cột sau:\n- Mục tiêu nghiên cứu chính\n- Phương pháp luận áp dụng\n- Kết quả cốt lõi\n- Hạn chế của đề tài\n\nCuối cùng, hãy đưa ra 3 đề xuất định hướng nghiên cứu tiếp theo phù hợp cho sinh viên chuyên ngành Kinh tế số của Trường Đại học Kinh tế - ĐHQGHN. Trình bày ngắn gọn, súc tích bằng bullet-points.',
    explanation: 'Prompt cải tiến chuyển đổi yêu cầu tóm tắt chung chung thành cấu trúc dạng bảng có mục tiêu rõ ràng, định hướng ứng dụng thực tế cho chuyên ngành Kinh tế số, giúp LLM tập trung vào các thông số cốt lõi và loại bỏ thông tin rác.',
    techniques: ['Định dạng đầu ra mong muốn (Structured Output)', 'Đối tượng cụ thể (Tailored Audience)', 'Khơi gợi đề xuất (Actionable Insights)']
  }
];

export const llmExplanationSteps = [
  {
    title: 'Tokenization (Mã hóa văn bản)',
    desc: 'LLMs không đọc trực tiếp từ ngữ như con người. Đầu vào được phân tách thành các mảnh nhỏ gọi là "token" (khoảng 4 ký tự hoặc 0.75 từ). Mỗi token được gán một mã số duy nhất trong không gian vector đa chiều.',
    tech: 'BPE Tokenizer, WordPiece'
  },
  {
    title: 'Cơ chế Chú ý tự động (Self-Attention)',
    desc: 'Bản chất của kiến trúc Transformer. Cơ chế này tính toán mức độ liên kết giữa mỗi từ với tất cả các từ khác trong câu. Ví dụ: từ "ngân hàng" trong bối cảnh "ngân hàng dữ liệu" sẽ được gán vector ý nghĩa khác hoàn toàn với "ngân hàng tài chính".',
    tech: 'Multi-head Attention, QKV Matrices'
  },
  {
    title: 'Dự đoán phân phối xác suất',
    desc: 'LLM là một mạng nơ-ron sâu tính toán xác suất từ tiếp theo dựa trên tất cả các token đi trước. Mô hình KHÔNG thực sự suy nghĩ hay có nhận thức, mà liên tục chọn từ tiếp theo có xác suất logic cao nhất dựa trên hàng nghìn tỷ văn bản đã được huấn luyện.',
    tech: 'Softmax Activation, Temperature parameters'
  }
];


// BÀI 4: HỢP TÁC TRỰC TUYẾN
export const defaultKanbanTasks: KanbanTask[] = [
  {
    id: 'task-1',
    title: 'Nghiên cứu & Thiết lập Đề cương chi tiết',
    description: 'Xác định câu hỏi nghiên cứu, phạm vi đề tài "Tác động của Thương mại điện tử xuyên biên giới tới doanh nghiệp SME tại Hà Nội" cho bài tiểu luận cuối kỳ môn Công nghệ số.',
    assignee: 'Nguyễn Văn Minh (Trưởng nhóm)',
    priority: 'high',
    dueDate: '2026-07-20',
    status: 'done'
  },
  {
    id: 'task-2',
    title: 'Xây dựng Bảng câu hỏi Khảo sát trực tuyến',
    description: 'Sử dụng Google Forms thiết kế bộ câu hỏi thu thập dữ liệu về mức độ ứng dụng AI và TMĐT trong vận hành của 50 doanh nghiệp SME.',
    assignee: 'Trần Thị Thu Thảo',
    priority: 'high',
    dueDate: '2026-07-25',
    status: 'review'
  },
  {
    id: 'task-3',
    title: 'Phân tích dữ liệu & Vẽ biểu đồ trực quan',
    description: 'Sử dụng công cụ phân tích dữ liệu số (Excel/Python) xử lý kết quả khảo sát, trực quan hóa bằng Recharts/D3 để đưa vào báo cáo.',
    assignee: 'Lê Hoàng Nam',
    priority: 'medium',
    dueDate: '2026-08-02',
    status: 'in_progress'
  },
  {
    id: 'task-4',
    title: 'Viết nội dung Chương 2 & Chương 3',
    description: 'Mô tả thực trạng ứng dụng công nghệ và đề xuất các giải pháp nâng cao năng lực số cho các SME dựa trên kết quả phân tích dữ liệu.',
    assignee: 'Phạm Đức Anh',
    priority: 'medium',
    dueDate: '2026-08-05',
    status: 'todo'
  },
  {
    id: 'task-5',
    title: 'Thiết kế Slide báo cáo đa phương tiện',
    description: 'Sử dụng Canva và AI hỗ trợ tạo slide báo cáo trực quan, chèn infographic và video thuyết trình nhóm chuyên nghiệp.',
    assignee: 'Trần Thị Thu Thảo',
    priority: 'low',
    dueDate: '2026-08-10',
    status: 'todo'
  },
  {
    id: 'task-6',
    title: 'Đánh giá chéo và Duyệt báo cáo Word cuối cùng',
    description: 'Tất cả các thành viên rà soát lỗi chính tả, chuẩn hóa danh mục tài liệu tham khảo theo chuẩn APA 7th và nộp lên hệ thống quản lý học tập (LMS).',
    assignee: 'Cả nhóm',
    priority: 'high',
    dueDate: '2026-08-15',
    status: 'backlog'
  }
];


// BÀI 5: SÁNG TẠO NỘI DUNG VỚI AI
export const aiSpotlightsData: AISpotlight[] = [
  {
    id: 'ai-1',
    title: 'E-Book "Cẩm nang Năng lực số thế hệ Z UEB"',
    category: 'Xuất bản & Biên soạn nội dung',
    description: 'Sản phẩm số toàn diện hướng dẫn sinh viên Kinh tế làm chủ các công cụ chuyển đổi số cá nhân, quản trị dữ liệu học tập và bảo mật thông tin.',
    aiTools: ['ChatGPT (Dựng đề cương & Viết nội dung)', 'Midjourney (Vẽ bìa nghệ thuật)', 'Canva (Dàn trang & Đồ họa)'],
    workflow: [
      'Sử dụng ChatGPT-4o lập đề cương chi tiết gồm 5 chương theo cấu trúc bậc thang nhận thức Bloom.',
      'Sử dụng Midjourney tạo ảnh bìa nghệ thuật 3D trừu tượng thể hiện sự kết hợp giữa con người và mạng lưới thần kinh số.',
      'Đưa nội dung và ảnh bìa vào Canva để định dạng bố cục lưới (grid), tạo hệ thống phối màu Navy-Teal nhất quán.'
    ],
    promptUsed: 'Prompt vẽ bìa (Midjourney): "A conceptual minimalist 3D rendering of a human silhouette connected with glowing neon cyan network lines inside a deep navy blue background, tech, academic vibe, high contrast, clean, cinematic lighting --ar 3:4 --v 6.0"',
    outcome: 'Sản phẩm hoàn thiện dài 45 trang được định dạng PDF tiêu chuẩn cao, đạt giải Nhì Cuộc thi Sáng tạo Số UEB 2026.'
  },
  {
    id: 'ai-2',
    title: 'Bộ nhận diện thương hiệu "UEB Digital Club"',
    category: 'Thiết kế đồ họa & Định vị thương hiệu',
    description: 'Thiết kế biểu trưng, áp phích tuyển thành viên và ấn phẩm truyền thông mạng xã hội cho Câu lạc bộ Công nghệ số Trường Đại học Kinh tế.',
    aiTools: ['DALL-E 3 (Thiết kế logo sơ thảo)', 'Vectorizer.ai (Chuyển đổi vector gốc)', 'Adobe Illustrator (Tinh chỉnh chi tiết)'],
    workflow: [
      'Tạo 15 ý tưởng logo biểu trưng kết hợp chữ "D" (Digital) và ngọn đuốc học thuật UEB bằng DALL-E 3.',
      'Chọn phương án xuất sắc nhất, sử dụng công cụ AI Vectorizer chuyển đổi sang định dạng SVG không giảm chất lượng.',
      'Cân chỉnh tỷ lệ vàng (Golden Ratio) và áp dụng bảng màu quy chuẩn của Đại học Kinh tế (Navy & Gold).'
    ],
    promptUsed: 'Prompt tạo logo: "A modern minimalist flat vector logo design featuring the stylized letter D intertwined with a sleek academic torch, navy blue and teal accent colors, white background, precise geometry, professional branding --no shading --v 6.0"',
    outcome: 'Bộ nhận diện gồm Logo vector, 5 mẫu Slide Master và 3 Poster truyền thông chuẩn kích thước, đang được ứng dụng thực tế tại CLB.'
  }
];


// BÀI 6: ĐẠO ĐỨC AI
export const ethicsRulesData: EthicsRule[] = [
  {
    id: 1,
    title: 'Tôn trọng Bản quyền & Trung thực học thuật',
    subTitle: 'Học tập liêm chính',
    principle: 'Sử dụng AI như một người trợ lý phản biện, cố vấn tư duy và phân tích dữ liệu, tuyệt đối KHÔNG sao chép nguyên văn (copy-paste) kết quả đầu ra của AI làm sản phẩm học thuật cá nhân.',
    practicalAction: 'Luôn viết lại bằng ngôn từ và tư duy phản biện của bản thân. Trích dẫn rõ ràng nguồn tài liệu gốc và ghi chú đầy đủ các phần có sự trợ giúp định dạng hoặc gợi ý ý tưởng từ AI (ví dụ: "Báo cáo có sử dụng ChatGPT-4o để hỗ trợ tối ưu cấu trúc bài viết").'
  },
  {
    id: 2,
    title: 'Bảo mật thông tin & Quyền riêng tư tuyệt đối',
    subTitle: 'An toàn dữ liệu số',
    principle: 'Tuyệt đối không đăng tải, chia sẻ các dữ liệu nội bộ nhạy cảm, thông tin cá nhân của bản thân, của giảng viên, bạn bè hoặc dữ liệu bảo mật của nhà trường lên các nền tảng AI công cộng.',
    practicalAction: 'Khi phân tích dữ liệu nghiên cứu bằng AI, bắt buộc phải mã hóa hoặc ẩn danh hóa toàn bộ thông tin định danh (tên tuổi, email, địa chỉ cụ thể) trước khi đưa dữ liệu vào các công cụ LLM.'
  },
  {
    id: 3,
    title: 'Kiểm chứng tri thức & Hoài nghi khoa học',
    subTitle: 'Chống "ảo giác AI" (Hallucination)',
    principle: 'Ý thức sâu sắc rằng LLMs hoạt động dựa trên mô hình xác suất từ ngữ nên hoàn toàn có thể tạo ra các thông tin sai lệch, nguồn tham khảo giả hoặc trích dẫn không có thật (ảo giác AI).',
    practicalAction: 'Bắt buộc kiểm chứng chéo (double-check) mọi số liệu, trích dẫn pháp luật, công thức toán học hoặc mốc lịch sử từ AI bằng các nguồn tin chính thống (Báo chí chính thống, Google Scholar, Website Chính phủ hoặc giáo trình UEB) trước khi công bố.'
  },
  {
    id: 4,
    title: 'Trách nhiệm giải trình cá nhân',
    subTitle: 'Làm chủ quyết định',
    principle: 'Bản thân sinh viên là người chịu trách nhiệm pháp lý và đạo đức cao nhất đối với toàn bộ nội dung, dữ liệu, hoặc quyết định kinh tế được đưa ra trong bài học tập, bất kể nội dung đó có được hỗ trợ bởi AI hay không.',
    practicalAction: 'Không bao giờ đổ lỗi cho AI ("Do AI viết sai") khi phát hiện lỗi sai trong bài báo cáo. Luôn rà soát kỹ lưỡng sản phẩm đầu ra trước khi nộp.'
  },
  {
    id: 5,
    title: 'Thúc đẩy bình đẳng & Tránh thiên kiến',
    subTitle: 'Nhận thức khách quan',
    principle: 'Nhận diện và chủ động loại bỏ các thiên kiến xã hội, định kiến giới tính, chủng tộc hoặc tôn giáo có sẵn trong dữ liệu huấn luyện của AI khi viết báo cáo hoặc phân tích hành vi người tiêu dùng.',
    practicalAction: 'Đặt câu hỏi phản biện cho AI từ nhiều góc độ khác nhau (Multi-perspective Prompting) để nhận diện thiên lệch trong câu trả lời và cân bằng lập luận trong bài tiểu luận.'
  }
];

export const personalReflection = {
  quote: "Năng lực số không đơn thuần là việc biết sử dụng các công cụ công nghệ mới nhất; đó là tư duy hệ thống giúp biến đổi dữ liệu thành tri thức và ứng dụng nó một cách có đạo đức để giải quyết các bài toán kinh tế thực tiễn.",
  valuableLesson: "Bài học quý giá nhất trong hành trình tiếp thu môn Công nghệ số chính là khả năng làm chủ tư duy hệ thống thông qua kỹ nghệ Prompting và Phân tích thông tin. Thay vì là một người thụ động thụ hưởng công nghệ, em đã hiểu được bản chất vận hành của các mô hình ngôn ngữ lớn, từ đó biết cách giao tiếp, thiết lập mục tiêu và kiểm soát tính xác thực của tri thức số. Điều này giúp em tự tin tối ưu hóa hiệu suất nghiên cứu khoa học và cộng tác nhóm lên một tầm cao mới.",
  futureApplication: "Đối với chuyên ngành Kinh tế Quốc tế tại VNU-UEB, năng lực số sẽ là bệ phóng quyết định. Em định hướng ứng dụng kỹ năng quản lý tệp tối ưu để xây dựng kho dữ liệu nghiên cứu doanh nghiệp khoa học; ứng dụng các kỹ năng tìm kiếm nâng cao và đánh giá CRAAP để thu thập dữ liệu thị trường quốc tế chuẩn xác; đồng thời ứng dụng Kanban để quản trị dự án khởi nghiệp hoặc đề tài nghiên cứu khoa học sinh viên một cách chuyên nghiệp. Sự kết hợp giữa tư duy kinh tế sắc sảo và năng lực số nhạy bén sẽ là vũ khí cạnh tranh vượt trội giúp em hội nhập quốc tế.",
  studentName: "Đoàn Ngọc Linh",
  studentId: "25051227",
  studentClass: "QH 2025E KTQT 10",
  studentUni: "Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội (VNU-UEB)"
};
