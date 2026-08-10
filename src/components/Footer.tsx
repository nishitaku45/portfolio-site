import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-xs tracking-wide text-brand-600/60">
        {siteConfig.footer.copyright}
      </div>
    </footer>
  );
}
