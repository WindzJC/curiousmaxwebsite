import Image from "next/image";

import { BookCard } from "@/components/book-card";
import { MailIcon, PhoneIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  about,
  books,
  contact,
  hero,
  proofPoints,
  retailers,
  siteImages,
  siteUrl,
  storyPillars,
  trailerSpotlight,
} from "@/data/site-content";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Joyce B. Whaley | Curious Maxx Book Series",
        description: hero.description,
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: "Joyce B. Whaley",
        url: siteUrl,
        jobTitle: "Author and Life Coach",
        description: about.body.join(" "),
        email: `mailto:${contact.email}`,
        telephone: contact.phone,
        image: new URL(siteImages.authorPortrait.src, siteUrl).toString(),
        sameAs: [contact.websiteHref],
      },
      ...books.map((book) => ({
        "@type": "Book",
        name: book.title,
        url: book.href,
        image: book.coverImageUrl,
        description: book.summary,
        bookFormat: `https://schema.org/${book.schemaFormat}`,
        author: {
          "@id": `${siteUrl}#person`,
        },
        isPartOf: {
          "@type": "CreativeWorkSeries",
          name: "Curious Maxx",
        },
        sameAs: [book.href, book.coverPageUrl],
      })),
    ],
  };

  return (
    <>
      <Navbar />

      <main className="page-shell overflow-hidden">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />

        <div id="top">
          <PremiumHero />
        </div>

        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="section-divider" />
            <div className="rounded-[34px] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_28px_80px_rgba(4,9,20,0.22)] backdrop-blur-xl sm:px-8 sm:py-10">
              <Reveal>
                <div className="max-w-3xl">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                    Discovery &amp; Credibility
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-none text-white sm:text-5xl">
                    A growing author platform with trusted discovery paths.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                    Clear, safe discovery language keeps the series credible while still showing readers where the books can be found.
                  </p>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {proofPoints.map((point, index) => (
                  <Reveal key={point.title} delay={0.06 * index}>
                    <div className="h-full rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 backdrop-blur-md">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f5d99c]">
                        Discovery
                      </p>
                      <h2 className="mt-3 text-xl font-semibold leading-8 text-white">
                        {point.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{point.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative scroll-mt-24 py-20 sm:py-24" id="books">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                description="A polished showcase of the Curious Maxx titles, designed to highlight the warmth, visual richness, and premium storytelling voice of the series."
                label="Featured Books"
                title="Three beautifully presented stories for wonder-filled readers."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-7">
              {books.map((book, index) => (
                <Reveal key={book.title} delay={0.08 * index}>
                  <BookCard book={book} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative scroll-mt-24 py-20 sm:py-24" id="about">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <Reveal>
                <div className="relative mx-auto max-w-[500px] overflow-hidden rounded-[36px] border border-white/10 bg-white/6 p-4 shadow-[0_40px_100px_rgba(4,9,20,0.42)] backdrop-blur-xl">
                  <div className="absolute inset-x-10 top-3 h-28 rounded-full bg-[radial-gradient(circle,rgba(217,180,99,0.22),transparent_72%)] blur-3xl" />
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10">
                    <div className="relative aspect-[4/5]">
                      <Image
                        fill
                        alt={siteImages.authorPortrait.alt}
                        className="object-cover"
                        src={siteImages.authorPortrait.src}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,20,0.04),rgba(7,11,20,0.3)_100%)]" />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <SectionHeading
                  description={about.body[0]}
                  label={about.label}
                  title={about.title}
                />
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  {about.body[1]}
                </p>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_65px_rgba(4,9,20,0.32)] backdrop-blur-md">
                  <p className="font-display text-3xl italic text-white sm:text-4xl">
                    “{about.quote}”
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                    Curious Maxx series ethos
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative scroll-mt-24 py-20 sm:py-24" id="world">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,20,38,0.9),rgba(7,17,31,0.94))] px-6 py-8 shadow-[0_40px_120px_rgba(0,0,0,0.42)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(127,195,255,0.24),transparent_70%)] blur-3xl" />
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(217,180,99,0.16),transparent_72%)] blur-3xl" />

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                  <SectionHeading
                    description="Curious Maxx is more than a book list. It is a reading atmosphere designed around imagination, faith-inspired learning, and the kind of warmth that makes family story time feel special."
                    label="Series Story World"
                    title="An immersive universe built for childlike wonder and meaningful reading moments."
                  />

                  <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                    <p className="text-sm leading-7 text-slate-300">
                      From bedtime reading to classroom inspiration, the series invites children into stories that feel expansive, hopeful, and emotionally grounded. Every visual and every line of copy on this site reinforces that sense of beauty, trust, and storybook possibility.
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-4 md:grid-cols-2">
                  {storyPillars.map((pillar, index) => (
                    <Reveal key={pillar.title} delay={0.08 * index}>
                      <div className="h-full rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-[0_20px_60px_rgba(4,9,20,0.26)] backdrop-blur-md">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                          Pillar 0{index + 1}
                        </p>
                        <h3 className="mt-4 font-display text-3xl text-white">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {pillar.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}

                  <Reveal className="md:col-span-2" delay={0.24}>
                    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(217,180,99,0.12),rgba(127,195,255,0.08),rgba(255,255,255,0.04))] p-6 backdrop-blur-md">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                        Reading Journey
                      </p>
                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {["Wonder begins with a question", "Story deepens into reflection", "Family reading becomes a shared memory"].map(
                          (step) => (
                            <div
                              key={step}
                              className="rounded-[22px] border border-white/10 bg-slate-950/30 p-4 text-sm leading-7 text-slate-200"
                            >
                              {step}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative scroll-mt-24 py-20 sm:py-24" id="trailers">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <SectionHeading
                description="A cinematic trailer is being planned to introduce Joyce B. Whaley and the Curious Maxx series through one polished, story-led author presentation."
                label="Book Trailers"
                title="A premium author trailer is on the way."
              />
            </Reveal>

            <Reveal className="mt-12" delay={0.08}>
              <div className="grid gap-6 overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,20,38,0.9),rgba(7,17,31,0.95))] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 min-h-[360px]">
                  <Image
                    fill
                    alt={siteImages.trailerPoster.alt}
                    className="object-cover"
                    src={siteImages.trailerPoster.src}
                    style={{ objectPosition: trailerSpotlight.posterPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.12),rgba(2,7,14,0.72)_100%)]" />
                  <div className="absolute inset-x-6 top-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/14 bg-slate-950/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-100">
                      {trailerSpotlight.eyebrow}
                    </span>
                    <span className="rounded-full border border-[#d9b463]/25 bg-[#d9b463]/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#f5d99c]">
                      {trailerSpotlight.status}
                    </span>
                  </div>
                  <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-slate-950/35 p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                      In the Works
                    </p>
                    <h3 className="mt-3 font-display text-4xl leading-none text-white sm:text-5xl">
                      A cinematic introduction
                      <span className="block">is taking shape.</span>
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                      A single cinematic piece is being developed to introduce the author and bring the Curious Maxx story world together in one elevated presentation.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                      Coming Soon
                    </p>
                    <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                      {trailerSpotlight.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-slate-300">
                      {trailerSpotlight.description}
                    </p>
                    <p className="mt-4 rounded-[24px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-300">
                      {trailerSpotlight.note}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3">
                    {trailerSpotlight.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-slate-200"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[38px] border border-white/10 bg-white/6 px-6 py-8 shadow-[0_32px_100px_rgba(4,9,20,0.38)] backdrop-blur-xl lg:px-10 lg:py-10">
              <Reveal>
                <div className="max-w-4xl">
                  <div className="inline-flex items-center rounded-full border border-[#d9b463]/30 bg-[#d9b463]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f5d99c]">
                    Retail &amp; Buy Anywhere
                  </div>
                  <h2 className="mt-5 max-w-3xl font-display text-4xl leading-none text-white sm:text-5xl">
                    Find the series through trusted bookseller discovery channels.
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                    Use these discovery links to find current listings and availability for Joyce B. Whaley&apos;s titles across major bookseller and ebook platforms.
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {retailers.map((retailer, index) => (
                  <Reveal key={retailer.name} delay={0.08 * index}>
                    <a
                      className="group block h-full overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                      href={retailer.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                        Retail Platform
                      </p>
                      <h3 className="mt-4 font-display text-3xl text-white">
                        {retailer.name}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {retailer.note}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative scroll-mt-24 pb-10 pt-8" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-divider" />
          <div className="grid gap-8 py-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                Contact
              </p>
              <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">
                Joyce B. Whaley
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                For reader inquiries, media requests, partnerships, or future trailer updates, use the contact information below.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="block rounded-[24px] border border-white/10 bg-white/6 p-5 transition hover:border-white/20 hover:bg-white/10"
                href={`mailto:${contact.email}`}
              >
                <MailIcon className="h-5 w-5 text-[#f5d99c]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                  Email
                </p>
                <p className="mt-2 text-sm text-white">{contact.email}</p>
              </a>

              <a
                className="block rounded-[24px] border border-white/10 bg-white/6 p-5 transition hover:border-white/20 hover:bg-white/10"
                href="tel:+13129338186"
              >
                <PhoneIcon className="h-5 w-5 text-[#f5d99c]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                  Phone
                </p>
                <p className="mt-2 text-sm text-white">{contact.phone}</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Curious Maxx author website concept for Joyce B. Whaley.</p>
            <p>Premium editorial layout. Mobile-first. Trailer-ready.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
