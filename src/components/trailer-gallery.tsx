"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CloseIcon, PlayIcon } from "@/components/icons";
import type { Trailer } from "@/data/site-content";

type TrailerGalleryProps = {
  trailers: Trailer[];
};

export function TrailerGallery({ trailers }: TrailerGalleryProps) {
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeTrailer ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeTrailer]);

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-3">
        {trailers.map((trailer, index) => (
          <motion.div
            key={trailer.title}
            aria-label={trailer.comingSoon ? undefined : `Open ${trailer.title}`}
            className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 text-left shadow-[0_28px_80px_rgba(4,9,20,0.45)] backdrop-blur-xl transition ${trailer.comingSoon ? "" : "cursor-pointer hover:-translate-y-2 hover:border-white/20"} ${index === 0 ? "lg:col-span-2 lg:min-h-[470px]" : "lg:min-h-[470px]"}`}
            initial={{ opacity: 0, y: 24 }}
            onClick={trailer.comingSoon ? undefined : () => setActiveTrailer(trailer)}
            onKeyDown={
              trailer.comingSoon
                ? undefined
                : (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveTrailer(trailer);
                    }
                  }
            }
            role={trailer.comingSoon ? undefined : "button"}
            tabIndex={trailer.comingSoon ? undefined : 0}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="absolute inset-0">
              <Image
                fill
                alt={trailer.title}
                className="object-cover transition duration-700 group-hover:scale-105"
                src="/images/joyce-poster.png"
                style={{ objectPosition: trailer.posterPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.08),rgba(5,10,18,0.36)_50%,rgba(2,7,14,0.88)_100%)]" />
            </div>

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/14 bg-slate-950/50 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-slate-100">
                  {trailer.label}
                </span>
                {trailer.runtime ? (
                  <span className="rounded-full border border-[#d9b463]/20 bg-[#d9b463]/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#f5d99c]">
                    {trailer.runtime}
                  </span>
                ) : null}
              </div>

              <div className="flex items-center justify-center py-10">
                {trailer.comingSoon ? (
                  <div className="rounded-full border border-[#d9b463]/25 bg-[#d9b463]/12 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5d99c] shadow-[0_0_65px_rgba(217,180,99,0.12)] backdrop-blur-md">
                    Coming Soon
                  </div>
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/12 shadow-[0_0_65px_rgba(146,188,255,0.18)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-white/16">
                    <PlayIcon className="ml-1 h-8 w-8 text-white" />
                  </div>
                )}
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                  {trailer.status}
                </p>
                <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  {trailer.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  {trailer.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeTrailer ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setActiveTrailer(null)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[36px] border border-white/12 bg-[#081426] shadow-[0_30px_120px_rgba(0,0,0,0.5)]"
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Close trailer"
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-slate-950/55 text-white backdrop-blur-md"
                onClick={() => setActiveTrailer(null)}
                type="button"
              >
                <CloseIcon className="h-5 w-5" />
              </button>

              {activeTrailer.embedUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                    referrerPolicy="strict-origin-when-cross-origin"
                    src={activeTrailer.embedUrl}
                    title={activeTrailer.title}
                  />
                </div>
              ) : (
                <div className="grid items-center gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10">
                    <div className="relative aspect-[16/10]">
                      <Image
                        fill
                        alt={activeTrailer.title}
                        className="object-cover"
                        src="/images/joyce-poster.png"
                        style={{ objectPosition: activeTrailer.posterPosition }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.08),rgba(2,7,14,0.58)_100%)]" />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f5d99c]">
                      Trailer Placeholder
                    </p>
                    <h3 className="mt-4 font-display text-4xl text-white">
                      {activeTrailer.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">
                      {activeTrailer.description}
                    </p>
                    <div className="mt-6 rounded-[24px] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-slate-300">
                      Add a YouTube, Vimeo, or hosted embed URL in
                      {" "}
                      <span className="font-semibold text-white">
                        src/data/site-content.ts
                      </span>
                      {" "}
                      to switch this card from preview mode to live playback.
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
