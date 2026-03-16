import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRightIcon } from "@/components/icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition duration-300";
  const variantClasses =
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#f2d89a_0%,#d9b463_45%,#fff0c4_100%)] text-slate-950 shadow-[0_18px_45px_rgba(217,180,99,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(217,180,99,0.32)]"
      : "border border-white/15 bg-white/7 text-white hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/12";

  return (
    <Link
      className={`${baseClasses} ${variantClasses} ${className}`}
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <span>{children}</span>
      <ArrowRightIcon className="h-4 w-4" />
    </Link>
  );
}
