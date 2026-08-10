export default function SectionHeading({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-gold" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 font-serif text-3xl text-brand-900 md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}
