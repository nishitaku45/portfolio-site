import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Maintenance() {
  const { maintenance } = siteConfig;

  return (
    <section
      id="maintenance"
      className="bg-brand-50/70 py-24 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={maintenance.title}
          heading={maintenance.heading}
        />
        <p className="mt-5 max-w-2xl text-sm leading-loose text-brand-600">
          {maintenance.note}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {maintenance.plans.map((plan) => (
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
              <p className="mt-5 font-serif text-3xl">{plan.price}</p>
              <p
                className={`mt-4 text-sm leading-loose ${
                  plan.featured ? "text-background/70" : "text-brand-600"
                }`}
              >
                {plan.description}
              </p>

              <ul
                className={`mt-6 space-y-2 border-t pt-5 ${
                  plan.featured ? "border-background/20" : "border-brand-100"
                }`}
              >
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
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 border border-dashed border-gold/60 bg-background p-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
              + オプション
            </span>
            <h3 className="mt-2 font-serif text-xl text-brand-900">
              {maintenance.option.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-loose text-brand-600">
              {maintenance.option.description}
            </p>
            <ul className="mt-4 space-y-2">
              {maintenance.option.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-brand-600"
                >
                  <span className="mt-1.5 h-px w-3 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="shrink-0 font-serif text-2xl text-brand-900">
            {maintenance.option.price}
          </p>
        </div>

        <div className="mt-6 border border-brand-100 bg-background p-8">
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
            保守プランに含まれないもの
          </h3>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {maintenance.exclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed text-brand-600"
              >
                <span className="mt-2 h-px w-3 shrink-0 bg-brand-600/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
