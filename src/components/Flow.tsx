import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Flow() {
  const { flow } = siteConfig;

  return (
    <section id="flow" className="bg-brand-50/70 py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow={flow.title} heading={flow.heading} />
        <ol className="mt-12 space-y-8">
          {flow.steps.map((step, index) => (
            <li key={step.name} className="flex gap-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-sm text-gold-dark">
                {index + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-brand-900">
                  {step.name}
                </h3>
                <p className="mt-1 text-sm leading-loose text-brand-600">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
