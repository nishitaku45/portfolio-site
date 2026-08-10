"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [openedForPathname, setOpenedForPathname] = useState(pathname);

  if (pathname !== openedForPathname) {
    setOpenedForPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      <div className="flex items-center justify-between px-6 py-6 sm:px-10">
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
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-[#ece7dd] transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-[#ece7dd] transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-[#ece7dd] transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-xs tracking-[0.2em] text-[#ece7dd]/60">
            {navLinks.map((link) => {
              const active =
                link.href === "/sample/high/works"
                  ? isWorksSection
                  : pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block transition hover:text-[#c9a24b] ${
                      active ? "text-[#c9a24b]" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
