import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Faq() {
  const { faq } = siteConfig;

  return (
    <section id="faq" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow={faq.title} heading={faq.heading} />
      <div className="mt-10 divide-y divide-brand-100 border-t border-brand-100">
        {faq.items.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg text-brand-900">
              {item.question}
              <span className="shrink-0 text-xl font-light text-gold-dark transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl text-sm leading-loose text-brand-600">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
