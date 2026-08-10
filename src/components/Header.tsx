import Link from "next/link";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Scope", href: "#scope" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Flow", href: "#flow" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="#top"
          className="font-serif text-lg tracking-wide text-brand-900"
        >
          {siteConfig.brandName}
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-brand-600 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={siteConfig.hero.primaryCta.href}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-sm bg-accent px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition hover:bg-accent-dark"
        >
          公式LINE
        </a>
      </div>
    </header>
  );
}
