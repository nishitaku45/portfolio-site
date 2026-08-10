"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/sample/high" },
  { label: "CONCEPT", href: "/sample/high/concept" },
  { label: "WORKS", href: "/sample/high/works" },
  { label: "CONTACT", href: "/sample/high/contact" },
];

export default function HighHeader() {
  const pathname = usePathname();
  const isWorksSection =
    pathname === "/sample/high/works" || pathname.startsWith("/sample/high/works/");

  return (
    <header className="flex items-center justify-between px-6 py-6 sm:px-10">
      <Link href="/sample/high" className="font-serif text-base tracking-[0.15em]">
        ATELIER NOIR
      </Link>
      <nav className="hidden gap-8 text-xs tracking-[0.2em] text-[#ece7dd]/60 md:flex">
        {navLinks.map((link) => {
          const active =
            link.href === "/sample/high/works"
              ? isWorksSection
              : pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b pb-0.5 transition hover:border-[#c9a24b] hover:text-[#c9a24b] ${
                active ? "border-[#c9a24b] text-[#c9a24b]" : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
