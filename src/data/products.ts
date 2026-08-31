export type ProductCondition = "Mới 100%" | "Đã tân trang" | "Cũ, còn tốt";

export type ProductBrand =
  | "Yanmar"
  | "Cummins"
  | "Mitsubishi"
  | "Honda"
  | "Isuzu"
  | "Khác";

export type Product = {
  slug: string;
  name: string;
  brand: ProductBrand;
  condition: ProductCondition;
  power: string;
  price: number | null;
  description: string;
  image?: string;
};

export const brands: ProductBrand[] = [
  "Yanmar",
  "Cummins",
  "Mitsubishi",
  "Honda",
  "Isuzu",
  "Khác",
];

export const conditions: ProductCondition[] = [
  "Mới 100%",
  "Đã tân trang",
  "Cũ, còn tốt",
];

export const products: Product[] = [
  {
    slug: "yanmar-6ly3-stp",
    name: "Máy Yanmar 6LY3-STP",
    brand: "Yanmar",
    condition: "Đã tân trang",
    power: "320 HP – 240 KW",
    price: 85000000,
    description: "Máy đẹp, hoạt động tốt, bảo hành 3 tháng. Phù hợp ghe tải, tàu cá.",
    image: "/images/products/yanmar-6ly3-stp.jpg",
  },
  {
    slug: "cummins-6bta5-9",
    name: "Máy Cummins 6BTA5.9",
    brand: "Cummins",
    condition: "Cũ, còn tốt",
    power: "180 HP – 134 KW",
    price: 65000000,
    description: "Máy zin, chạy êm, tiết kiệm nhiên liệu. Bao test tại xưởng.",
    image: "/images/products/cummins-6bta5-9.jpg",
  },
  {
    slug: "mitsubishi-s6s",
    name: "Máy Mitsubishi S6S",
    brand: "Mitsubishi",
    condition: "Đã tân trang",
    power: "225 HP – 168 KW",
    price: 75000000,
    description: "Máy đã đại tu toàn bộ, sơn mới, bảo hành 3 tháng.",
    image: "/images/products/mitsubishi-s6s.jpg",
  },
  {
    slug: "honda-gx390",
    name: "Máy Honda GX390",
    brand: "Honda",
    condition: "Mới 100%",
    power: "13 HP – 9.6 KW",
    price: null,
    description: "Máy mới 100%, chính hãng Honda. Bảo hành 6 tháng.",
    image: "/images/products/honda-gx390.jpg",
  },
  {
    slug: "yanmar-4jh2",
    name: "Máy Yanmar 4JH2",
    brand: "Yanmar",
    condition: "Đã tân trang",
    power: "75 HP – 56 KW",
    price: 42000000,
    description: "Máy tân trang, chạy êm, bốc. Thích hợp ghe nhỏ.",
    image: "/images/products/yanmar-4jh2.jpg",
  },
  {
    slug: "isuzu-6bg1",
    name: "Máy Isuzu 6BG1",
    brand: "Isuzu",
    condition: "Cũ, còn tốt",
    power: "190 HP – 141 KW",
    price: 60000000,
    description: "Máy nguyên zin, còn rất đẹp. Chạy tốt, ít hao dầu.",
    image: "/images/products/isuzu-6bg1.jpg",
  },
  {
    slug: "cummins-nta855",
    name: "Máy Cummins NTA855",
    brand: "Cummins",
    condition: "Đã tân trang",
    power: "300 HP – 224 KW",
    price: 95000000,
    description: "Máy đại tu, thay thế phụ tùng chính hãng. Bảo hành 3 tháng.",
    image: "/images/products/cummins-nta855.jpg",
  },
  {
    slug: "yanmar-6kfl-ut",
    name: "Máy Yanmar 6KFL-UT",
    brand: "Yanmar",
    condition: "Cũ, còn tốt",
    power: "160 HP – 119 KW",
    price: 55000000,
    description: "Máy zin, hoạt động ổn định. Tiết kiệm nhiên liệu.",
    image: "/images/products/yanmar-6kfl-ut.jpg",
  },
];

export function formatPrice(price: number | null) {
  if (price === null) return "Liên hệ giá";
  return `${price.toLocaleString("vi-VN")} đ`;
}
