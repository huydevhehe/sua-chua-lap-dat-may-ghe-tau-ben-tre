import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { ProductBrowser } from "@/components/ProductBrowser";
import { shop } from "@/data/shop";

export const metadata: Metadata = {
  title: `Máy móc đang bán – ${shop.name}`,
  description:
    "Cung cấp các loại máy ghe tàu chính hãng, máy bãi Nhật, máy tân trang chất lượng, giá hợp lý. Bảo hành uy tín.",
};

const trustPoints = [
  { icon: "check", title: "Máy chất lượng", desc: "Đã kiểm tra kỹ trước khi bán" },
  { icon: "gear", title: "Bảo hành uy tín", desc: "Hỗ trợ kỹ thuật tận tâm" },
  { icon: "engine", title: "Giao hàng toàn quốc", desc: "Nhanh chóng, an toàn" },
  { icon: "bolt", title: "Giá cả hợp lý", desc: "Cạnh tranh nhất thị trường" },
] as const;

export default function MayMocDangBanPage() {
  return (
    <>
      <PageHero
        currentLabel="Máy móc đang bán"
        title="Máy móc đang rao bán"
        description="Cung cấp các loại máy ghe tàu chính hãng, máy bãi Nhật, máy tân trang chất lượng, giá hợp lý. Bảo hành uy tín."
        image="/images/banner-may-moc-dang-ban.png"
      />

      <section className="border-b border-brand-border bg-white py-8">
        <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Icon name={point.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-navy">{point.title}</p>
                <p className="text-xs text-slate-500">{point.desc}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ProductBrowser />
        </Container>
      </section>

      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading title="Vì sao nên mua máy tại Chú Bình?" />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col items-center gap-2 rounded-xl border border-brand-border bg-white p-5 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy">
                  <Icon name={point.icon} className="h-6 w-6" />
                </span>
                <p className="text-sm font-bold text-brand-navy">{point.title}</p>
                <p className="text-xs text-slate-500">{point.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
