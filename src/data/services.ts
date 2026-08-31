export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "engine" | "gear" | "wrench" | "propeller" | "plug" | "bolt";
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "sua-may-yanmar",
    title: "Sửa máy Yanmar",
    description: "Sửa chữa, đại tu tất cả các dòng máy Yanmar chính hãng.",
    icon: "engine",
    bullets: [
      "Sửa chữa lỗi khó nổ, khói đen, hao dầu",
      "Kiểm tra, căn chỉnh toàn bộ hệ thống",
      "Thay thế phụ tùng chính hãng",
    ],
  },
  {
    slug: "thay-bac-bien-dai-tu-may",
    title: "Thay bạc biên, đại tu máy",
    description: "Thay bạc biên, bạc lót, phục hồi máy, tăng hiệu suất.",
    icon: "gear",
    bullets: [
      "Sử dụng bạc chất lượng cao",
      "Đo kiểm, căn chỉnh chính xác",
      "Bảo hành kỹ thuật sau khi thay",
    ],
  },
  {
    slug: "bao-tri-dinh-ky",
    title: "Bảo trì định kỳ",
    description: "Bảo dưỡng định kỳ, kiểm tra tổng quát, giúp máy vận hành bền bỉ.",
    icon: "wrench",
    bullets: [
      "Kiểm tra tổng thể máy",
      "Vệ sinh, thay nhớt, lọc dầu, lọc gió",
      "Tư vấn sử dụng, vận hành hiệu quả",
    ],
  },
  {
    slug: "sua-chan-vit-he-thong-lai",
    title: "Sửa chân vịt, hệ thống lái",
    description: "Sửa chữa, căn chỉnh chân vịt, hệ thống lái thủy lực, điện.",
    icon: "propeller",
    bullets: [
      "Hàn phục hồi chân vịt",
      "Căn chỉnh bằng máy chuyên dụng",
      "Đánh bóng chống bám hà",
    ],
  },
  {
    slug: "sua-he-thong-nhien-lieu",
    title: "Sửa hệ thống nhiên liệu",
    description: "Sửa bơm, kim phun, hệ sinh nhiên liệu, tiết kiệm nhiên liệu.",
    icon: "plug",
    bullets: [
      "Kiểm tra áp suất bơm",
      "Vệ sinh, hiệu chỉnh kim phun",
      "Phục hồi turbo tăng áp",
    ],
  },
  {
    slug: "sua-dien-may-tau",
    title: "Sửa điện máy tàu",
    description: "Sửa chữa hệ thống điện 12V – 24V, máy phát, đề, sạc...",
    icon: "bolt",
    bullets: [
      "Kiểm tra, đo chẩn đoán chính xác",
      "Sửa chữa, thay thế linh kiện",
      "Đảm bảo an toàn điện",
    ],
  },
];
