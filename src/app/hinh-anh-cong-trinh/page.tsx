import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon } from "@/components/Icon";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { galleryVideos } from "@/data/gallery";
import { shop } from "@/data/shop";

export const metadata: Metadata = {
  title: `Hình ảnh công trình – ${shop.name}`,
  description:
    "Những dự án, công trình sửa chữa, bảo trì, lắp đặt máy ghe tàu mà chúng tôi đã thực hiện.",
};

export default function HinhAnhCongTrinhPage() {
  return (
    <>
      <PageHero
        currentLabel="Hình ảnh công trình"
        title="Hình ảnh công trình"
        description="Những dự án, công trình sửa chữa, bảo trì, lắp đặt máy ghe tàu mà chúng tôi đã thực hiện."
        image="/images/banner-hinh-anh-cong-trinh.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Hình ảnh công trình" />
          <div className="mt-10">
            <GalleryBrowser />
          </div>
        </Container>
      </section>

      <section className="bg-brand-bg py-16 sm:py-20">
        <Container>
          <SectionHeading title="Video công trình tiêu biểu" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm"
              >
                <div className="relative aspect-video w-full">
                  {video.image ? (
                    <Image
                      src={video.image}
                      alt={video.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <PlaceholderImage className="h-full w-full" />
                  )}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
                      <Icon name="chevronRight" className="h-5 w-5" />
                    </span>
                  </span>
                </div>
                <p className="p-3 text-sm font-bold text-brand-navy">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
