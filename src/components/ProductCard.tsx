import Image from "next/image";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { PlaceholderImage } from "./PlaceholderImage";
import { Product, formatPrice } from "@/data/products";
import { shop } from "@/data/shop";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-44 w-full">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <PlaceholderImage label="Ảnh sản phẩm" className="h-full w-full" />
        )}
        <span className="absolute left-3 top-3 rounded-md bg-brand-navy px-2.5 py-1 text-xs font-semibold text-white">
          {product.condition}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold text-brand-navy">{product.name}</h3>
        <p className="mt-1 text-xs text-slate-500">{product.power}</p>
        <p className="mt-2 text-lg font-extrabold text-brand-orange">
          {formatPrice(product.price)}
        </p>
        <p className="mt-1 line-clamp-2 text-xs text-slate-500">
          {product.description}
        </p>
        <div className="mt-4 flex gap-2">
          <Button
            href={`/may-moc-dang-ban/${product.slug}`}
            variant="outline"
            className="flex-1 !px-3 !py-2 text-xs"
          >
            Xem chi tiết
          </Button>
          <Button
            href={`tel:${shop.phone}`}
            variant="primary"
            className="flex-1 !px-3 !py-2 text-xs"
            icon={<Icon name="phone" className="h-3.5 w-3.5" />}
          >
            Liên hệ mua
          </Button>
        </div>
      </div>
    </div>
  );
}
