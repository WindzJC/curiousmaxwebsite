import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: RevealProps) {
  void delay;
  void y;

  return (
    <div className={className}>{children}</div>
  );
}
