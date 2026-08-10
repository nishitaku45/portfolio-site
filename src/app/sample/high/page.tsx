import type { Metadata } from "next";
import Link from "next/link";
import { grain } from "./theme";

export const metadata: Metadata = {
  title: "サンプル：ハイプランの制作イメージ｜Web&LINE工房",
  description: "ハイプランで制作した場合のサンプルホームページです。",
};

const stats = [
  { value: "2007", label: "設立" },
  { value: "150+", label: "手がけた空間" },
  { value: "4ヶ月", label: "平均設計期間" },
];

const worksPreview = [
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
];

export default function HighSamplePage() {
  return (
    <>
      {/* HOME：全面デュオトーンを背景に敷いた没入型のヒーロー。
          スタンダードの「額装した写真パネル」に対し、こちらは断ち落としの
          フルブリードで、上位プランらしいスケール感を出す。 */}
      <section
        style={{ backgroundImage: grain }}
        className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-28 text-center sm:min-h-[85vh]"
      >
        <p className="text-xs tracking-[0.3em] text-[#c9a24b]">
          INTERIOR &amp; SPACE DESIGN
        </p>
        <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-[1.6] md:text-6xl">
          余白が語る、
          <br />
          静かな贅沢。
        </h1>
        <p className="mx-auto mt-8 max-w-md text-sm leading-loose text-[#ece7dd]/70">
          住まいから商業空間まで、
          <br />
          素材と光にこだわった空間デザインを一つひとつ手がけています。
        </p>
      </section>

      <section className="border-b border-white/10 px-6">
        <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-10 text-center">
              <p className="font-serif text-2xl text-[#c9a24b] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] tracking-wide text-[#ece7dd]/60 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 px-8 py-24">
        <p className="text-center text-xs tracking-[0.25em] text-[#c9a24b]">
          CONCEPT
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-center font-serif text-xl leading-[2] md:text-2xl">
          「足す」のではなく「削る」。
          <br />
          本当に必要なものだけを残した空間には、
          <br />
          使う人の暮らしがそのまま映し出されます。
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/sample/high/concept"
            className="text-xs tracking-[0.2em] text-[#c9a24b] underline underline-offset-4 hover:text-[#e0bb6a]"
          >
            私たちの考え方を読む →
          </Link>
        </div>
      </section>

      <section className="px-8 py-24">
        <p className="text-center text-xs tracking-[0.25em] text-[#c9a24b]">
          SELECTED WORKS
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-px overflow-hidden bg-white/10 sm:grid-cols-2">
          {worksPreview.map((work) => (
            <Link
              key={work.slug}
              href={`/sample/high/works/${work.slug}`}
              className="group relative flex aspect-[4/3] flex-col justify-end bg-[#111015] p-6"
            >
              <div
                aria-hidden
                style={{ backgroundImage: grain }}
                className="absolute inset-0 opacity-70 transition group-hover:opacity-90"
              />
              <span className="relative text-[10px] tracking-[0.2em] text-[#c9a24b]">
                {work.tag}
              </span>
              <p className="relative mt-2 font-serif text-lg">{work.name}</p>
              <span className="relative mt-3 text-[11px] tracking-[0.15em] text-[#ece7dd]/60 underline-offset-4 group-hover:underline">
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/sample/high/works"
            className="text-xs tracking-[0.2em] text-[#c9a24b] underline underline-offset-4 hover:text-[#e0bb6a]"
          >
            すべての実績を見る →
          </Link>
        </div>
      </section>
    </>
  );
}
