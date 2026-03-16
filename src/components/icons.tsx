import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M18 3v4" strokeLinecap="round" />
      <path d="M20 5h-4" strokeLinecap="round" />
      <path d="M5 17v4" strokeLinecap="round" />
      <path d="M7 19H3" strokeLinecap="round" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8.2 5.3a1 1 0 0 1 1.54-.84l9.08 6.7a1 1 0 0 1 0 1.61l-9.08 6.7A1 1 0 0 1 8.2 18.6V5.3Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4.5 7 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6.7 3.8c.5-.5 1.2-.7 1.9-.4l2 1a1.9 1.9 0 0 1 1 2.3l-.6 2a1.7 1.7 0 0 0 .4 1.6l2.3 2.3c.4.4 1.1.6 1.6.4l2-.6a1.9 1.9 0 0 1 2.3 1l1 2c.3.7.1 1.4-.4 1.9l-1 1a3.3 3.3 0 0 1-3.2.8c-3.1-.9-6-2.7-8.6-5.2A19.1 19.1 0 0 1 3 8a3.3 3.3 0 0 1 .8-3.2l1-1Z" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17" strokeLinecap="round" />
      <path d="M3.5 15h17" strokeLinecap="round" />
      <path d="M12 3c2.4 2.2 3.8 5.4 3.8 9S14.4 18.8 12 21" strokeLinecap="round" />
      <path d="M12 3C9.6 5.2 8.2 8.4 8.2 12S9.6 18.8 12 21" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 7h16" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6 6 18 18" strokeLinecap="round" />
      <path d="M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
