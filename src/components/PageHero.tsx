import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { PlaceholderImage } from "./PlaceholderImage";
import { shop } from "@/data/shop";

export function PageHero({
  currentLabel,
  title,
  description,
  image,
  children,
}: {
  currentLabel: string;
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-brand-navy">
      <Container className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-2 lg:py-14">
        <div>
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="underline-offset-2 hover:text-white hover:underline">
              Trang chủ
            </Link>
            <Icon name="chevronRight" className="h-3.5 w-3.5" />
            <span className="text-white/90">{currentLabel}</span>
          </nav>
          <h1 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
        {image ? (
          <div className="relative hidden aspect-[4/3] w-full overflow-hidden rounded-2xl lg:block">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        ) : (
          <PlaceholderImage
            label="Ảnh minh họa"
            className="hidden aspect-[4/3] w-full rounded-2xl lg:flex"
          />
        )}
      </Container>
      {children}
    </section>
  );
}
