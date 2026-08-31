export type Testimonial = {
  name: string;
  location: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Anh Ba",
    location: "Cần Thơ",
    content: "Thợ làm rất có tâm, sửa máy nhanh, giá hợp lý. Máy chạy êm, ghe ra khơi yên tâm hơn nhiều.",
    rating: 5,
  },
  {
    name: "Anh Tư",
    location: "Tiền Giang",
    content: "Đã mua máy ở đây 2 lần, máy chất lượng, bảo hành rõ ràng. Sẽ ủng hộ lâu dài.",
    rating: 5,
  },
  {
    name: "Anh Năm",
    location: "Bến Tre",
    content: "Bảo trì định kỳ ở đây rất ok, nhắc lịch đúng hẹn, phục vụ nhanh gọn.",
    rating: 5,
  },
];
