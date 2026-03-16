import Image from "next/image";
import Link from "next/link";

import { books, hero } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

const heroBookOrder = [
  books.find((book) => book.title.includes("Beginning"))!,
  books.find((book) => book.title === "Curious Maxx")!,
  books.find((book) => book.title.includes("Jonah"))!,
];

export function PremiumHero() {
  return (
    <section className="relative overflow-hidden bg-[#071a33] pb-20 pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(133,167,255,0.22),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#5f8cff]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#d8b36a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="max-w-2xl" delay={0.05}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d8b36a]">
              {hero.eyebrow}
            </div>

            <h1 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              <span className="text-[#d8b36a]">Where faith, wonder,</span>
              <br />
              and imagination meet.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/78 sm:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#d8b36a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0a1830] transition hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(216,179,106,0.28)]"
                href={hero.primaryCta.href}
              >
                {hero.primaryCta.label}
              </Link>
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-white/50">
              {hero.subcopy}
            </p>
          </Reveal>

          <Reveal className="relative" delay={0.16}>
            <div className="relative mx-auto max-w-[560px] rounded-[32px] border border-white/12 bg-white/6 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_40%,rgba(216,179,106,0.05))]" />

              <div className="relative h-[360px] pt-4 sm:h-[420px] sm:pt-8">
                <Link
                  className="absolute left-0 top-20 w-[42%] rotate-[-8deg] transition duration-300 hover:-translate-y-2 hover:rotate-[-6deg] sm:top-24"
                  href={heroBookOrder[0].href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="overflow-hidden rounded-[20px] border border-white/12 bg-[#0d2244] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                    <Image
                      alt={heroBookOrder[0].coverAlt}
                      className="h-auto w-full object-cover"
                      height={750}
                      src={heroBookOrder[0].coverSrc}
                      width={500}
                    />
                  </div>
                </Link>

                <Link
                  className="absolute left-[29%] top-4 z-20 w-[42%] transition duration-300 hover:-translate-y-2 sm:top-2"
                  href={heroBookOrder[1].href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="overflow-hidden rounded-[20px] border border-[#d8b36a]/30 bg-[#0d2244] shadow-[0_22px_50px_rgba(0,0,0,0.45)]">
                    <Image
                      alt={heroBookOrder[1].coverAlt}
                      className="h-auto w-full object-cover"
                      height={750}
                      priority
                      src={heroBookOrder[1].coverSrc}
                      width={500}
                    />
                  </div>
                </Link>

                <Link
                  className="absolute right-0 top-20 w-[42%] rotate-[8deg] transition duration-300 hover:-translate-y-2 hover:rotate-[6deg] sm:top-24"
                  href={heroBookOrder[2].href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="overflow-hidden rounded-[20px] border border-white/12 bg-[#0d2244] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                    <Image
                      alt={heroBookOrder[2].coverAlt}
                      className="h-auto w-full object-cover"
                      height={750}
                      src={heroBookOrder[2].coverSrc}
                      width={500}
                    />
                  </div>
                </Link>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 text-center text-xs uppercase tracking-[0.22em] text-white/45">
                Wonder-filled stories for children and families
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
