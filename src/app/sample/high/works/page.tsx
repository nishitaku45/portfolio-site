import type { Metadata } from "next";
import Link from "next/link";
import { grain } from "../theme";

export const metadata: Metadata = {
  title: "実績紹介｜Atelier Noir（サンプル）",
};

const works = [
  {
    slug: "residence",
    name: "個人邸 新築インテリア計画",
    tag: "Residence",
  },
  {
    slug: "retail",
    name: "セレクトショップ内装デザイン",
    tag: "Retail",
  },
  {
    name: "オフィスリノベーション",
    tag: "Office",
  },
  {
    name: "プライベートサロン設計",
    tag: "Salon",
  },
];

export default function HighWorksIndexPage() {
  return (
    <section className="px-8 py-20 sm:py-24">
      <p className="text-center text-xs tracking-[0.25em] text-[#c9a24b]">
        WORKS
      </p>
      <h1 className="mt-3 text-center font-serif text-2xl">実績紹介</h1>

      <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
        {works.map((work) => {
          const content = (
            <>
              <div
                aria-hidden
                style={{ backgroundImage: grain }}
                className="absolute inset-0 opacity-70 transition group-hover:opacity-90"
              />
              <span className="relative text-[10px] tracking-[0.2em] text-[#c9a24b]">
                {work.tag}
              </span>
              <p className="relative mt-2 font-serif text-lg">{work.name}</p>
              {work.slug && (
                <span className="relative mt-3 text-[11px] tracking-[0.15em] text-[#ece7dd]/60 underline-offset-4 group-hover:underline">
                  詳しく見る →
                </span>
              )}
            </>
          );

          return work.slug ? (
            <Link
              key={work.name}
              href={`/sample/high/works/${work.slug}`}
              className="group relative flex aspect-[4/3] flex-col justify-end bg-[#111015] p-6"
            >
              {content}
            </Link>
          ) : (
            <div
              key={work.name}
              className="group relative flex aspect-[4/3] flex-col justify-end bg-[#111015] p-6"
            >
              {content}
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-10 max-w-sm text-center text-[11px] leading-loose text-[#ece7dd]/70">
        上記以外の実績も多数ございます。
        <br />
        詳しくはお問い合わせください。
      </p>
    </section>
  );
}
