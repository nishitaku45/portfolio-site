import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function Scope() {
  const { scope } = siteConfig;

  return (
    <section id="scope" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow={scope.title} heading={scope.heading} />
      <p className="mt-5 max-w-2xl text-sm leading-loose text-brand-600">
        {scope.note}
      </p>

      <ul className="mt-8 max-w-2xl space-y-3 border-t border-brand-100 pt-6">
        {scope.exclusions.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-brand-600"
          >
            <span className="mt-2 h-px w-3 shrink-0 bg-brand-600/40" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
