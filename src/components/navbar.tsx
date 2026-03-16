"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { navItems } from "@/data/site-content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition duration-300 ${
          isScrolled
            ? "border-white/12 bg-[#071525]/86 shadow-[0_18px_65px_rgba(1,6,15,0.45)] backdrop-blur-xl"
            : "border-white/8 bg-white/6 backdrop-blur-md"
        }`}
      >
        <Link className="min-w-0" href="#top">
          <div className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[#f5d99c]">
            Joyce B. Whaley
          </div>
          <div className="truncate font-display text-2xl leading-none text-white">
            Curious Maxx
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-slate-200/90 transition hover:text-white"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/7 text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[#071525]/95 p-5 shadow-[0_18px_65px_rgba(1,6,15,0.45)] backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-100 transition hover:bg-white/8"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
