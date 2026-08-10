import { siteConfig } from "@/config/site";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24 md:pb-28">
      <div className="bg-brand-900 px-8 py-20 text-center text-background md:px-16">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {contact.title}
          </p>
          <span className="h-px w-10 bg-gold" />
        </div>
        <h2 className="mt-5 font-serif text-3xl md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-loose text-background/70">
          {contact.description}
        </p>
        <a
          href={contact.lineUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-10 inline-block rounded-sm bg-accent px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-accent-dark"
        >
          公式LINEを友だち追加する
        </a>
      </div>
    </section>
  );
}
