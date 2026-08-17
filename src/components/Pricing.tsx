import Link from "next/link";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow={pricing.title} heading={pricing.heading} />
      <p className="mt-5 max-w-2xl text-sm leading-loose text-brand-600">
        {pricing.note}
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-10 ${
              plan.featured
                ? "bg-brand-900 text-background"
                : "border border-brand-100 bg-background text-brand-900"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-10 bg-gold px-3 py-1 text-xs font-semibold tracking-wide text-brand-900">
                おすすめ
              </span>
            )}
            <h3
              className={`text-sm font-semibold uppercase tracking-[0.15em] ${
                plan.featured ? "text-gold" : "text-gold-dark"
              }`}
            >
              {plan.name}
            </h3>
            <Link
              href={plan.sampleHref}
              className="group mt-5 inline-block"
            >
              <span className="font-serif text-3xl underline decoration-gold/50 decoration-1 underline-offset-4 transition group-hover:decoration-gold">
                {plan.price}
              </span>
              <span
                className={`block text-xs ${
                  plan.featured ? "text-gold" : "text-gold-dark"
                }`}
              >
                サンプルを見る →
              </span>
            </Link>
            {plan.monitorPrice && (
              <p
                className={`mt-3 text-xs font-semibold ${
                  plan.featured ? "text-gold" : "text-gold-dark"
                }`}
              >
                モニター価格 {plan.monitorPrice}（先着3名様）
              </p>
            )}
            <p
              className={`mt-4 text-sm leading-loose ${
                plan.featured ? "text-background/70" : "text-brand-600"
              }`}
            >
              {plan.description}
            </p>

            <div
              className={`mt-6 border-t pt-5 ${
                plan.featured ? "border-background/20" : "border-brand-100"
              }`}
            >
              <p
                className={`text-xs font-semibold tracking-wide ${
                  plan.featured ? "text-background/90" : "text-brand-700"
                }`}
              >
                {plan.pages}
              </p>
              <ul className="mt-3 space-y-2">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-2 text-xs leading-relaxed ${
                      plan.featured ? "text-background/70" : "text-brand-600"
                    }`}
                  >
                    <span className="mt-1.5 h-px w-3 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {pricing.monitorNote && (
        <div className="mt-6 border border-dashed border-gold/60 bg-background p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
            モニター価格について
          </span>
          <p className="mt-2 max-w-2xl text-sm leading-loose text-brand-600">
            {pricing.monitorNote}
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {pricing.options.map((option) => (
          <div
            key={option.name}
            className="flex flex-col gap-4 border border-dashed border-gold/60 p-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                + オプション
              </span>
              <h3 className="mt-2 font-serif text-xl text-brand-900">
                {option.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-loose text-brand-600">
                {option.description}
              </p>
              {option.sampleHref && (
                <Link
                  href={option.sampleHref}
                  className="mt-2 inline-block text-xs font-semibold text-gold-dark underline underline-offset-4 hover:text-gold"
                >
                  制作例を見る →
                </Link>
              )}
              {option.monitorPrice && (
                <p className="mt-2 text-xs font-semibold text-gold-dark">
                  モニター価格 {option.monitorPrice}（先着3名様）
                </p>
              )}
            </div>
            <p className="shrink-0 font-serif text-2xl text-brand-900">
              {option.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
