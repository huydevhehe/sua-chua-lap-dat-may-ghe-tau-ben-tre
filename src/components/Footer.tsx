import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { navLinks, shop, } from "@/data/shop";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <Container className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt={shop.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-base font-extrabold text-brand-navy">
              {shop.name.toUpperCase()}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Chuyên sửa chữa máy ghe tàu, cung cấp máy móc chính hãng, uy tín –
            chất lượng – trách nhiệm.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={`https://${shop.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg text-brand-navy hover:bg-brand-orange hover:text-white"
              aria-label="Facebook"
            >
              <Icon name="facebook" className="h-4 w-4" />
            </a>
            <a
              href={shop.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg text-brand-navy hover:bg-brand-orange hover:text-white"
              aria-label="Zalo"
            >
              <Icon name="zalo" className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-bg text-brand-navy hover:bg-brand-orange hover:text-white"
              aria-label="Youtube"
            >
              <Icon name="youtube" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
            Dịch vụ
          </h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/dich-vu"
                  className="text-sm text-slate-600 hover:text-brand-orange"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
            Liên kết nhanh
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
            Thông tin liên hệ
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <Icon name="mappin" className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>{shop.address}</span>
            </li>
            <li className="flex gap-2">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-orange" />
              <a href={`tel:${shop.phone}`} className="hover:text-brand-orange">
                {shop.phoneDisplay} (Gọi ngay 24/7)
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>{shop.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="bg-brand-navy py-5">
        <Container>
          <p className="text-center text-xs text-white/70">
            © {new Date().getFullYear()} {shop.name} – {shop.tagline}. All
            rights reserved.
          </p>
          <p className="mt-1.5 text-center text-xs text-white/50">
            Thiết kế & lập trình bởi Nguyễn Quốc Huy
          </p>
          <p className="mt-0.5 text-center text-xs text-white/50">
            Nếu bạn cần tư vấn làm Website liên hệ SĐT/Zalo{" "}
            <a href="tel:0397180247" className="text-brand-orange hover:text-white">
              0397 180 247
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
