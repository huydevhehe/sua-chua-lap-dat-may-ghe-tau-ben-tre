import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { shop } from "@/data/shop";

export const metadata: Metadata = {
  title: `Dịch vụ – ${shop.name}`,
  description:
    "Dịch vụ sửa chữa, bảo trì, đại tu máy thủy, máy ghe tàu uy tín, tận tâm, giá hợp lý.",
};

export default function DichVuPage() {
  return (
    <>
      <PageHero
        currentLabel="Dịch vụ"
        title="Dịch vụ sửa chữa máy ghe tàu"
        description="Chuyên sửa chữa, bảo trì, đại tu máy thủy, máy ghe tàu uy tín – tận tâm – giá hợp lý."
        image="/images/banner-dich-vu.png"
      />

      {/* Danh mục dịch vụ */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Danh mục dịch vụ" />
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Dịch vụ chi tiết */}
      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading title="Dịch vụ chi tiết" />
          <div className="mt-10 flex flex-col gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 gap-6 rounded-xl border border-brand-border bg-white p-6 shadow-sm sm:grid-cols-[220px_1fr_auto] sm:items-center"
              >
                <PlaceholderImage
                  label={service.title}
                  className="aspect-video w-full rounded-lg sm:aspect-square"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-brand-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.description}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-600">
                        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-row gap-3 sm:flex-col">
                  <Button
                    href={`tel:${shop.phone}`}
                    variant="primary"
                    className="flex-1 sm:flex-none"
                    icon={<Icon name="phone" className="h-4 w-4" />}
                  >
                    Liên hệ ngay
                  </Button>
                  <a
                    href={`tel:${shop.phone}`}
                    className="flex flex-1 items-center justify-center gap-1.5 text-sm font-semibold text-brand-navy sm:flex-none sm:justify-start"
                  >
                    <Icon name="phone" className="h-4 w-4 text-brand-orange" />
                    {shop.phoneDisplay}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quy trình làm việc */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Quy trình làm việc" />
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center gap-3 text-center">
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                  <Icon name={step.icon} className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                    {step.step}
                  </span>
                </span>
                <p className="text-sm font-bold text-brand-navy">{step.title}</p>
                <p className="text-xs leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-10">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              Cần sửa máy ghe tàu gấp?
            </p>
            <p className="mt-1 text-sm text-white/70">
              Gọi ngay cho chúng tôi để được hỗ trợ nhanh nhất!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              href={`tel:${shop.phone}`}
              variant="primary"
              icon={<Icon name="phone" className="h-4 w-4" />}
            >
              Gọi ngay: {shop.phoneDisplay}
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
        </Container>
      </section>
    </>
  );
}
