import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { shop } from "@/data/shop";

export const metadata: Metadata = {
  title: `Liên hệ – ${shop.name}`,
  description:
    "Liên hệ với chúng tôi để được tư vấn, sửa chữa, báo giá máy ghe tàu nhanh nhất.",
};

const contactInfo = [
  { icon: "phone" as const, label: "Gọi ngay (24/7)", value: shop.phoneDisplay, href: `tel:${shop.phone}` },
  { icon: "zalo" as const, label: "Nhắn Zalo", value: shop.phoneDisplay, href: shop.zaloLink },
  { icon: "mappin" as const, label: "Địa chỉ", value: shop.address },
  { icon: "clock" as const, label: "Giờ mở cửa", value: shop.hours },
  { icon: "facebook" as const, label: "Facebook", value: shop.facebook, href: `https://${shop.facebook}` },
];

export default function LienHePage() {
  return (
    <>
      <PageHero
        currentLabel="Liên hệ"
        title="Liên hệ với chúng tôi"
        description={`${shop.name} luôn sẵn sàng hỗ trợ, tư vấn và giải đáp mọi thắc mắc về dịch vụ sửa chữa máy ghe tàu và các sản phẩm máy móc.`}
        image="/images/banner-lien-he.png"
      />

      {/* Danh sách liên hệ + form */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <ul className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-base font-bold text-brand-navy hover:text-brand-orange"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-bold text-brand-navy">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Map + quick contact */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <iframe
            title="Bản đồ vị trí cửa hàng"
            src={shop.mapEmbedUrl}
            className="min-h-[320px] w-full rounded-xl border border-brand-border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="rounded-xl border border-brand-border bg-white p-6">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-navy">
              Thông tin liên hệ nhanh
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Gọi ngay (24/7)</p>
                  <a href={`tel:${shop.phone}`} className="text-sm font-bold text-brand-navy hover:text-brand-orange">
                    {shop.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon name="zalo" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Nhắn Zalo</p>
                  <a href={shop.zaloLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-navy hover:text-brand-orange">
                    {shop.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Icon name="facebook" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Facebook</p>
                  <a href={`https://${shop.facebook}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-navy hover:text-brand-orange">
                    {shop.facebook}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Liên hệ thiết kế website (giữ bố cục mockup, nội dung placeholder) */}
      <section className="py-16 sm:py-20">
        <Container>
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-extrabold text-blue-600 sm:text-2xl">
              Liên hệ thiết kế website
            </h2>
            <p className="mt-1 text-sm font-semibold text-blue-500 sm:text-base">
              Thiết kế website chuyên nghiệp – Chuẩn SEO – Tối ưu chuyển đổi
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                "Thiết kế website chuẩn SEO, tương thích mọi thiết bị",
                "Giao diện đẹp, hiện đại, chuẩn thương hiệu",
                "Tối ưu tốc độ, bảo mật và trải nghiệm người dùng",
                "Hỗ trợ đăng ký tên miền, hosting, bảo trì website",
                "Nhận thiết kế theo yêu cầu, giá hợp lý",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="tel:0397180247" variant="primary" icon={<Icon name="phone" className="h-4 w-4" />}>
                Gọi ngay: 0397 180 247
              </Button>
              <Button href={shop.zaloLink} variant="outline" external icon={<Icon name="zalo" className="h-4 w-4" />}>
                Nhắn Zalo
              </Button>
            </div>
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/thiet-ke-website-mockup.png"
                alt="Thiết kế website chuyên nghiệp"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ContactForm
            title="Gửi yêu cầu thiết kế website"
            submitLabel="Gửi yêu cầu ngay"
            showWebsiteTypeField
            buttonVariant="navy"
          />
        </div>
        </Container>
      </section>
    </>
  );
}
