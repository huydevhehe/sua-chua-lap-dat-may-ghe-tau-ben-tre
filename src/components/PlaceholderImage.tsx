import { Icon } from "./Icon";

export function PlaceholderImage({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white/70 ${className}`}
    >
      <Icon name="engine" className="h-9 w-9" />
      {label && <span className="text-xs font-medium">{label}</span>}
    </div>
  );
}
