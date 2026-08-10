import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 md:py-28">
      <SectionHeading eyebrow={about.title} heading={about.heading} />
      <div className="mt-8 max-w-2xl space-y-5 text-base leading-loose text-brand-600">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
