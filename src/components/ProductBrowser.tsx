"use client";

import { useMemo, useState } from "react";
import { Icon } from "./Icon";
import { ProductCard } from "./ProductCard";
import { brands, conditions, products } from "@/data/products";

export function ProductBrowser() {
  const [brand, setBrand] = useState<string>("Tất cả máy");
  const [condition, setCondition] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand !== "Tất cả máy" && p.brand !== brand) return false;
      if (condition && p.condition !== condition) return false;
      if (search.trim() && !p.name.toLowerCase().includes(search.trim().toLowerCase()))
        return false;
      return true;
    });
  }, [brand, condition, search]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="flex flex-col gap-6">
        <div className="rounded-xl border border-brand-border bg-white p-5">
          <h3 className="rounded-lg bg-brand-navy px-3 py-2 text-sm font-bold text-white">
            Danh mục máy
          </h3>
          <ul className="mt-3 flex flex-col gap-1">
            {["Tất cả máy", ...brands].map((b) => (
              <li key={b}>
                <button
                  type="button"
                  onClick={() => setBrand(b)}
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    brand === b
                      ? "bg-brand-orange/10 text-brand-orange"
                      : "text-slate-600 hover:bg-brand-bg"
                  }`}
                >
                  {b === "Tất cả máy" ? b : `Máy ${b}`}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-brand-border bg-white p-5">
          <h3 className="text-sm font-bold text-brand-navy">Lọc theo tình trạng</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {conditions.map((c) => (
              <li key={c}>
                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={condition === c}
                    onChange={() => setCondition(condition === c ? null : c)}
                    className="h-4 w-4 rounded border-brand-border accent-brand-orange"
                  />
                  {c}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-brand-border bg-brand-navy p-5 text-center">
          <p className="text-sm font-bold text-white">Cần tư vấn?</p>
          <p className="mt-1 text-xs text-white/70">
            Gọi ngay để được tư vấn và báo giá nhanh nhất!
          </p>
          <a
            href="tel:0945123456"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Icon name="phone" className="h-4 w-4" />
            Gọi ngay
          </a>
        </div>
      </aside>

      {/* Main */}
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm tên máy, model..."
              className="w-full rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-navy"
            />
          </div>
          <span className="shrink-0 text-sm text-slate-500">
            {filtered.length} sản phẩm
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-brand-border bg-white py-16 text-center text-sm text-slate-500">
            Không tìm thấy máy phù hợp. Vui lòng thử bộ lọc khác.
          </div>
        )}
      </div>
    </div>
  );
}
