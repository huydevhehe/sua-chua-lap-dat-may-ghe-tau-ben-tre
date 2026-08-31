import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "navy";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark",
  outline:
    "bg-white text-brand-navy border border-brand-border hover:border-brand-navy",
  navy: "bg-brand-navy text-white hover:bg-brand-navy-dark",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
