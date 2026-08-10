import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-36">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            {hero.eyebrow}
          </p>
        </div>
        <h1 className="mt-6 whitespace-pre-line font-serif text-4xl leading-[1.4] text-brand-900 md:text-6xl md:leading-[1.35]">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-2xl whitespace-pre-line text-base leading-loose text-brand-600 md:text-lg">
          {hero.description}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-accent-dark"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-sm border border-brand-900/20 px-8 py-3.5 text-sm font-semibold tracking-wide text-brand-900 transition hover:border-brand-900 hover:bg-brand-900 hover:text-background"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
