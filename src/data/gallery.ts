export type GalleryCategory =
  | "Sửa chữa máy"
  | "Lắp đặt mới"
  | "Bảo trì định kỳ"
  | "Sửa chữa chân vịt"
  | "Hệ thống điện";

export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  category: GalleryCategory;
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Sửa chữa đại tu máy Yanmar 6LY3", location: "Cần Thơ", date: "05/2024", category: "Sửa chữa máy", image: "/images/gallery/g1.jpg" },
  { id: "g2", title: "Lắp đặt máy mới Mitsubishi S6S", location: "Vĩnh Long", date: "04/2024", category: "Lắp đặt mới", image: "/images/gallery/g2.jpg" },
  { id: "g3", title: "Bảo trì định kỳ máy Cummins", location: "Cần Thơ", date: "04/2024", category: "Bảo trì định kỳ", image: "/images/gallery/g3.jpg" },
  { id: "g4", title: "Sửa chữa, căn chỉnh chân vịt", location: "An Giang", date: "03/2024", category: "Sửa chữa chân vịt", image: "/images/gallery/g4.jpg" },
  { id: "g5", title: "Sửa chữa hệ thống điện tàu", location: "Kiên Giang", date: "02/2024", category: "Hệ thống điện", image: "/images/gallery/g5.jpg" },
  { id: "g6", title: "Đại tu máy Cummins NTA855", location: "Cà Mau", date: "02/2024", category: "Sửa chữa máy", image: "/images/gallery/g6.jpg" },
  { id: "g7", title: "Lắp đặt máy Yanmar 6LF-UT", location: "Bến Tre", date: "01/2024", category: "Lắp đặt mới", image: "/images/gallery/g7.jpg" },
  { id: "g8", title: "Bảo trì máy định kỳ Yanmar 4JH2", location: "Trà Vinh", date: "01/2024", category: "Bảo trì định kỳ", image: "/images/gallery/g8.jpg" },
  { id: "g9", title: "Lắp đặt máy Cummins 6BT5.9", location: "Sóc Trăng", date: "12/2023", category: "Lắp đặt mới", image: "/images/gallery/g9.jpg" },
  { id: "g10", title: "Sửa chữa máy Mitsubishi S6S", location: "Hậu Giang", date: "11/2023", category: "Sửa chữa máy", image: "/images/gallery/g10.jpg" },
  { id: "g11", title: "Căn chỉnh, thay bạc chân vịt", location: "Tiền Giang", date: "11/2023", category: "Sửa chữa chân vịt", image: "/images/gallery/g11.jpg" },
  { id: "g12", title: "Thi công hệ thống điện mới", location: "Bạc Liêu", date: "10/2023", category: "Hệ thống điện", image: "/images/gallery/g12.jpg" },
];

export type GalleryVideo = {
  id: string;
  title: string;
  image?: string;
};

export const galleryVideos: GalleryVideo[] = [
  { id: "v1", title: "Đại tu máy Yanmar 6LYA-STP", image: "/images/gallery/video-v1.jpg" },
  { id: "v2", title: "Lắp đặt máy mới Mitsubishi S6S", image: "/images/gallery/video-v2.jpg" },
  { id: "v3", title: "Sửa chữa, căn chỉnh chân vịt", image: "/images/gallery/video-v3.jpg" },
];
