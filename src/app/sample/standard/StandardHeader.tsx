"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [openedForPathname, setOpenedForPathname] = useState(pathname);

  if (pathname !== openedForPathname) {
    setOpenedForPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="border-b border-[#e5d4c3] bg-[#f9f3ea]/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/sample/standard" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d9a86a,#6b1220)] font-[family-name:var(--font-editorial)] text-xs text-white">
            S
          </span>
          <span className="font-[family-name:var(--font-editorial)] text-sm tracking-[0.1em]">
            Sunny Side Hair
          </span>
        </Link>
        <nav className="hidden gap-8 text-[11px] tracking-[0.2em] text-[#7d6a5c] md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b pb-0.5 transition hover:border-[#6b1220] hover:text-[#6b1220] ${
                pathname === link.href
                  ? "border-[#6b1220] text-[#6b1220]"
                  : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/sample/standard/access"
            className="hidden rounded-sm border border-[#6b1220] px-5 py-2 text-[11px] tracking-[0.15em] text-[#6b1220] transition hover:bg-[#6b1220] hover:text-white sm:inline-block"
          >
            ご予約
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-px w-5 bg-[#201512] transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-[#201512] transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-[#201512] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[#e5d4c3] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-[11px] tracking-[0.2em] text-[#7d6a5c]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block transition hover:text-[#6b1220] ${
                    pathname === link.href ? "text-[#6b1220]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/sample/standard/access"
                className="block text-[#6b1220]"
              >
                ご予約
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
