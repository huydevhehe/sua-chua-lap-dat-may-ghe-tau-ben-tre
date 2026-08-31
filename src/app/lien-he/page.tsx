import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
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
      <section className="relative overflow-hidden bg-brand-navy py-12 sm:py-16">
        <Image
          src="/images/banner-lien-he.png"
          alt="Liên hệ Chú Bình"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-transparent" />
        <Container className="relative">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Liên hệ với chúng tôi
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {shop.name} luôn sẵn sàng hỗ trợ, tư vấn và giải đáp mọi thắc mắc về
            dịch vụ sửa chữa máy ghe tàu và các sản phẩm máy móc.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
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
        </Container>
      </section>

      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <div className="flex min-h-[320px] items-center justify-center rounded-xl border border-brand-border bg-white text-slate-400">
            <span className="text-sm">Bản đồ Google Maps</span>
          </div>
        </Container>
      </section>
    </>
  );
}
