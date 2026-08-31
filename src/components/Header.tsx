import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { navLinks, shop } from "@/data/shop";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt={`${shop.name} - ${shop.tagline}`}
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-extrabold tracking-tight text-brand-navy">
              {shop.name.toUpperCase()}
            </span>
            <span className="text-[11px] font-semibold uppercase text-brand-orange">
              {shop.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${shop.phone}`}
            className="flex items-center gap-2 text-brand-navy"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
              <Icon name="phone" className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">{shop.phoneDisplay}</span>
              <span className="block text-xs text-slate-500">Gọi ngay 24/7</span>
            </span>
          </a>
          <Button href={shop.zaloLink} variant="navy" external icon={<Icon name="zalo" className="h-4 w-4" />}>
            Zalo
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${shop.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange"
            aria-label="Gọi ngay"
          >
            <Icon name="phone" className="h-4.5 w-4.5" />
          </a>
          <a
            href={shop.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white"
            aria-label="Nhắn Zalo"
          >
            <Icon name="zalo" className="h-4.5 w-4.5" />
          </a>
        </div>
      </Container>

      <div className="border-t border-brand-border bg-white lg:hidden">
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-brand-border px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap text-slate-700 hover:border-brand-orange hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
