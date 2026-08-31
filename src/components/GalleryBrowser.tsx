"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { PlaceholderImage } from "./PlaceholderImage";
import { GalleryCategory, galleryItems } from "@/data/gallery";

const categories: (GalleryCategory | "Tất cả")[] = [
  "Tất cả",
  "Sửa chữa máy",
  "Lắp đặt mới",
  "Bảo trì định kỳ",
  "Sửa chữa chân vịt",
  "Hệ thống điện",
];

export function GalleryBrowser() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tất cả");

  const filtered = useMemo(() => {
    if (active === "Tất cả") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-brand-navy text-white"
                : "border border-brand-border bg-white text-slate-600 hover:border-brand-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <PlaceholderImage className="h-full w-full" />
              )}
              <span className="absolute left-3 top-3 rounded-md bg-brand-navy/90 px-2.5 py-1 text-xs font-semibold text-white">
                {item.category}
              </span>
            </div>
            <div className="p-3">
              <p className="text-sm font-bold text-brand-navy">{item.title}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                <Icon name="mappin" className="h-3.5 w-3.5" />
                {item.location} – {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-brand-border bg-white py-16 text-center text-sm text-slate-500">
          Chưa có hình ảnh cho danh mục này.
        </div>
      )}
    </div>
  );
}
