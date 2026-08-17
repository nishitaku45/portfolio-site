import type { Metadata } from "next";
import Link from "next/link";
import { grain } from "./theme";

export const metadata: Metadata = {
  title: "サンプル：スタンダードプランの制作イメージ｜Web&LINE工房",
  description: "スタンダードプランで制作した場合のサンプルホームページです。",
};

const stats = [
  { value: "2016", label: "創業" },
  { value: "12,000+", label: "累計スタイリング数" },
  { value: "92%", label: "指名リピート率" },
];

const reasons = [
  {
    name: "上質な薬剤へのこだわり",
    description: "髪と頭皮への負担を抑えた上質な薬剤のみを使用しています。",
  },
  {
    name: "経験豊富なシニアスタイリスト",
    description: "指名制で、経験を積んだスタイリストが施術を担当します。",
  },
  {
    name: "完全プライベートな空間",
    description: "少数の完全個室制で、周りを気にせずお過ごしいただけます。",
  },
];

export default function StandardHomePage() {
  return (
    <>
      {/* HOME：非対称の編集誌レイアウト。写真パネルの縁に縦組みのタブを重ね、
          「センター揃えのeyebrow+見出し」という他ページと同じ型に頼らない構成にする。 */}
      <section className="mx-auto grid max-w-5xl gap-0 px-6 pt-16 pb-20 sm:grid-cols-[1fr_auto_1.1fr] sm:items-center sm:gap-6 sm:pt-24 sm:pb-28">
        <div className="sm:pr-4">
          <h1 className="font-[family-name:var(--font-editorial-jp)] text-4xl leading-[1.5] sm:text-5xl">
            あなたらしさを、
            <br />
            いちばん似合う形に。
          </h1>
          <p className="mt-7 max-w-sm text-sm leading-loose text-[#7d6a5c]">
            一人ひとりの髪質・骨格に合わせたカウンセリングで、
            <br />
            なりたい自分に静かに寄り添うヘアサロンです。
          </p>
          <p className="mt-8 text-[11px] tracking-[0.15em] text-[#6b1220]">
            完全予約制・完全個室 — 駅徒歩3分
          </p>
          <Link
            href="/sample/standard/access"
            className="mt-8 inline-block rounded-sm bg-[#6b1220] px-9 py-3.5 text-xs tracking-[0.15em] text-white shadow-sm transition hover:bg-[#4a0c15]"
          >
            ご予約はこちら
          </Link>
        </div>

        <div
          aria-hidden
          className="hidden py-10 text-[11px] tracking-[0.4em] text-[#6b1220] sm:block"
          style={{ writingMode: "vertical-rl" }}
        >
          HAIR SALON
        </div>

        <div
          style={{ backgroundImage: grain }}
          className="relative mt-10 aspect-[4/5] rounded-sm p-2 shadow-sm sm:mt-0"
        >
          <span
            aria-hidden
            className="absolute -left-3 top-8 text-[11px] tracking-[0.4em] text-[#6b1220] sm:hidden"
            style={{ writingMode: "vertical-rl" }}
          >
            HAIR SALON
          </span>
          <div className="flex h-full items-end rounded-[2px] border border-white/30 p-6">
            <span className="text-[11px] tracking-[0.2em] text-white/90">
              SALON INTERIOR
            </span>
          </div>
        </div>
      </section>

      {/* 実績スタット：数字で裏付けを添える帯。3項目の短いバーに留め、
          派手な演出にはしない（信頼感は数値そのもので伝える）。 */}
      <section className="border-y border-[#e5d4c3] bg-[#f9f3ea]">
        <div className="mx-auto grid max-w-3xl grid-cols-3 divide-x divide-[#e5d4c3]">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              <p className="font-[family-name:var(--font-editorial)] text-2xl text-[#6b1220] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[10px] tracking-wide text-[#7d6a5c] sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONCEPT：大きなプルクオート＋理由をアイコン無しのテキストリストで添える。
          Strengths/Flow などカード＋丸アイコンの型をここでは意図的に使わない。 */}
      <section className="border-y border-[#e5d4c3] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-3xl gap-14 sm:grid-cols-[1.3fr_1fr]">
          <p className="font-[family-name:var(--font-editorial-jp)] text-2xl leading-[2] text-[#201512] sm:text-[1.7rem]">
            「今日、髪型変えた？」と聞かれるような、
            <br />
            さりげない変化を。
            <br />
            トレンドを取り入れながらも、日々のスタイリングがしやすい
            長く愛せるヘアスタイルをご提案します。
          </p>
          <ul className="space-y-7 border-l border-[#e5d4c3] pl-8">
            {reasons.map((reason) => (
              <li key={reason.name}>
                <p className="text-sm font-semibold text-[#201512]">
                  {reason.name}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#7d6a5c]">
                  {reason.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
