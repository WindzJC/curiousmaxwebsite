import Image from "next/image";

import type { Book } from "@/data/site-content";
import { ButtonLink } from "@/components/button-link";

type BookCardProps = {
  book: Book;
  index: number;
};

export function BookCard({ book, index }: BookCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 p-5 shadow-[0_28px_80px_rgba(4,9,20,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/9 ${index === 1 ? "lg:translate-y-10" : ""}`}
    >
      <div className={`pointer-events-none absolute inset-x-6 top-0 h-40 rounded-full bg-radial ${book.accent} blur-3xl`} />

      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-slate-950/65 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-200">
            {book.tagline}
          </span>
          <span className="rounded-full border border-[#d9b463]/20 bg-[#d9b463]/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#f7dfa4]">
            Book {index + 1}
          </span>
        </div>
        <div className="relative aspect-square bg-[radial-gradient(circle_at_top,rgba(127,195,255,0.1),transparent_55%),linear-gradient(180deg,rgba(7,14,26,0.96),rgba(4,9,18,0.98))]">
          <Image
            fill
            alt={book.coverAlt}
            className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
            priority={index === 1}
            src={book.coverSrc}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,20,0.02),rgba(6,10,20,0.18)_55%,rgba(2,6,12,0.34)_100%)]" />
        </div>
      </div>

      <div className="relative mt-6">
        <h3 className="font-display text-3xl leading-tight text-white">{book.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{book.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {book.formats.map((format) => (
            <span
              key={format}
              className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-slate-200"
            >
              {format}
            </span>
          ))}
        </div>
        <ButtonLink className="mt-8 w-full sm:w-auto" href={book.href}>
          View on Amazon
        </ButtonLink>
      </div>
    </article>
  );
}
