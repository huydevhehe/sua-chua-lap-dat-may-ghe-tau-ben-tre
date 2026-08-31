import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
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
      <PageHero
        currentLabel="Liên hệ"
        title="Liên hệ với chúng tôi"
        description={`${shop.name} luôn sẵn sàng hỗ trợ, tư vấn và giải đáp mọi thắc mắc về dịch vụ sửa chữa máy ghe tàu và các sản phẩm máy móc.`}
        image="/images/banner-lien-he.png"
      />

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
          <iframe
            title="Bản đồ vị trí cửa hàng"
            src={shop.mapEmbedUrl}
            className="min-h-[320px] w-full rounded-xl border border-brand-border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </section>
    </>
  );
}
