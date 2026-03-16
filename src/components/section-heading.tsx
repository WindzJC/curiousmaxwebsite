type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center rounded-full border border-[#d9b463]/30 bg-[#d9b463]/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f5d99c]">
        {label}
      </div>
      <h2 className="mt-5 font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
