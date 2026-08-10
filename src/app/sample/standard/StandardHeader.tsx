"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/sample/standard" },
  { label: "MENU", href: "/sample/standard/menu" },
  { label: "STAFF", href: "/sample/standard/staff" },
  { label: "VOICE", href: "/sample/standard/voice" },
  { label: "ACCESS", href: "/sample/standard/access" },
];

export default function StandardHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-[#e8d9d2] bg-[#faf8f4]/95 px-6 py-4 backdrop-blur sm:px-10">
      <Link href="/sample/standard" className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d8b9ae,#9c5a56)] font-serif text-xs text-white">
          S
        </span>
        <span className="font-serif text-sm tracking-[0.1em]">
          Sunny Side Hair
        </span>
      </Link>
      <nav className="hidden gap-8 text-[11px] tracking-[0.2em] text-[#6b5d54] md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`border-b pb-0.5 transition hover:border-[#9c5a56] hover:text-[#9c5a56] ${
              pathname === link.href
                ? "border-[#9c5a56] text-[#9c5a56]"
                : "border-transparent"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/sample/standard/access"
        className="rounded-sm border border-[#9c5a56] px-5 py-2 text-[11px] tracking-[0.15em] text-[#9c5a56] transition hover:bg-[#9c5a56] hover:text-white"
      >
        ご予約
      </Link>
    </header>
  );
}
