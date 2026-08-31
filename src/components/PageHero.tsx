import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Button } from "./Button";
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
    <section className="relative overflow-hidden bg-brand-navy">
      {image && (
        <>
          <Image src={image} alt={title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/55 via-brand-navy/15 to-transparent" />
        </>
      )}
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-xl">
          <nav className="drop-shadow flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="underline-offset-2 hover:text-white hover:underline">
              Trang chủ
            </Link>
            <Icon name="chevronRight" className="h-3.5 w-3.5" />
            <span className="text-white">{currentLabel}</span>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white drop-shadow">
            {description}
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
      {children}
    </section>
  );
}
