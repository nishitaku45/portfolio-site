import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="bg-brand-50/70 py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={services.title} heading={services.heading} />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.items.map((service) => (
            <div
              key={service.name}
              className="border-t-2 border-gold bg-background p-10"
            >
              <h3 className="font-serif text-2xl text-brand-900">
                {service.name}
              </h3>
              <p className="mt-4 text-sm leading-loose text-brand-600">
                {service.description}
              </p>
              <ul className="mt-8 space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-brand-700"
                  >
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
