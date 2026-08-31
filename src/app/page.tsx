import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { ProductCard } from "@/components/ProductCard";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { shop } from "@/data/shop";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { galleryItems } from "@/data/gallery";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        <Image
          src="/images/banner-trang-chu.png"
          alt="Máy thủy trên ghe tàu sông nước"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/55 via-brand-navy/15 to-transparent" />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-xl">
            <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
              SỬA CHỮA MÁY MÓC
              <br />
              <span className="text-brand-orange">GHE TÀU SÔNG NƯỚC</span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-white drop-shadow">
              {shop.slogan}
            </p>
            <p className="mt-4 flex items-start gap-2 text-white drop-shadow">
              <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
              <span>
                Hơn <strong className="text-white">{shop.yearsExperience} năm</strong>{" "}
                kinh nghiệm trong lĩnh vực sửa chữa máy thủy, máy ghe tàu.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href={`tel:${shop.phone}`}
                variant="primary"
                icon={<Icon name="phone" className="h-4 w-4" />}
              >
                Gọi ngay
              </Button>
              <Button
                href={shop.zaloLink}
                external
                className="!bg-white/10 !text-white border border-white/40 hover:!bg-white/20"
                icon={<Icon name="zalo" className="h-4 w-4" />}
              >
                Nhắn Zalo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Dịch vụ sửa chữa */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Chuyên nghiệp – Tận tâm" title="Dịch vụ sửa chữa" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col items-center gap-3 rounded-xl border border-brand-border bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>
                <span className="text-sm font-bold text-brand-navy">
                  {service.title}
                </span>
                <span className="text-xs leading-relaxed text-slate-500">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Máy móc đang rao bán */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Máy chính hãng – Giá hợp lý" title="Máy móc đang rao bán" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/may-moc-dang-ban" variant="outline" icon={<Icon name="chevronRight" className="h-4 w-4" />}>
              Xem tất cả máy móc
            </Button>
          </div>
        </Container>
      </section>

      {/* Hình ảnh & video công trình */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Dự án đã thực hiện" title="Hình ảnh & video công trình" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryItems.slice(0, 8).map((item) =>
              item.image ? (
                <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <PlaceholderImage key={item.id} label="Ảnh công trình" className="aspect-square rounded-xl" />
              )
            )}
          </div>
          <div className="mt-10 text-center">
            <Button href="/hinh-anh-cong-trinh" variant="outline" icon={<Icon name="chevronRight" className="h-4 w-4" />}>
              Xem thêm hình ảnh & video
            </Button>
          </div>
        </Container>
      </section>

      {/* Khách hàng nói gì */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Phản hồi thực tế" title="Khách hàng nói về chúng tôi" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-brand-border bg-white p-6 shadow-sm"
              >
                <div className="flex gap-1 text-brand-orange">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 text-sm italic leading-relaxed text-slate-600">
                  “{t.content}”
                </p>
                <p className="mt-4 text-sm font-bold text-brand-navy">
                  {t.name} – {t.location}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Liên hệ */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Kết nối với chúng tôi" title="Liên hệ với chúng tôi" />
          <div className="mt-10 grid grid-cols-1 gap-6 overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm lg:grid-cols-2">
            <iframe
              title="Bản đồ vị trí cửa hàng"
              src={shop.mapEmbedUrl}
              className="min-h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col justify-center gap-5 p-8">
              <div className="flex gap-3">
                <Icon name="mappin" className="h-6 w-6 shrink-0 text-brand-orange" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Địa chỉ</p>
                  <p className="text-sm text-slate-600">{shop.address}</p>
                  <p className="mt-1 text-xs text-slate-400">{shop.oldAddress}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="phone" className="h-6 w-6 shrink-0 text-brand-orange" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Điện thoại</p>
                  <a href={`tel:${shop.phone}`} className="text-sm text-slate-600 hover:text-brand-orange">
                    {shop.phoneDisplay} (Gọi ngay 24/7)
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="clock" className="h-6 w-6 shrink-0 text-brand-orange" />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Giờ mở cửa</p>
                  <p className="text-sm text-slate-600">{shop.hours}</p>
                </div>
              </div>
              <div className="mt-2 flex gap-3">
                <Button href={`tel:${shop.phone}`} variant="primary" icon={<Icon name="phone" className="h-4 w-4" />}>
                  Gọi ngay
                </Button>
                <Button href={shop.zaloLink} variant="navy" external icon={<Icon name="zalo" className="h-4 w-4" />}>
                  Nhắn Zalo
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
