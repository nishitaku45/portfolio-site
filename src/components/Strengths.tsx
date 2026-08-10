import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Strengths() {
  const { strengths } = siteConfig;

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow={strengths.title} heading={strengths.heading} />
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {strengths.items.map((item, index) => (
          <div key={item.name} className="border-l border-brand-100 pl-6">
            <span className="font-serif text-3xl text-gold-dark">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-bold text-brand-900">
              {item.name}
            </h3>
            <p className="mt-2 text-sm leading-loose text-brand-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
