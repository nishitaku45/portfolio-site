import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";

export const metadata: Metadata = {
  title: "サンプル：ライトプランの制作イメージ｜Web&LINE工房",
  description: "ライトプランで制作した場合のサンプルホームページです。",
};

// ライトプランのサンプル：架空の個人経営コーヒースタンド「Green Leaf Coffee」
//
// 「ライトでも手を抜かない」を体現するサンプル。1ページ・実質の制作時間は
// 1時間程度を想定した情報量（見出し・短い説明文・メニュー・アクセスのみ）に
// 抑えつつ、配色のトーン設計・タイポグラフィのメリハリ・ホバー等の細部を
// 作り込むことで「軽いプランでも安っぽく見えない」デザインを目指しています。
const commitments = [
  { mark: "豆", title: "厳選した豆", description: "農園から直接仕入れる自家焙煎の豆のみ使用" },
  { mark: "一", title: "一杯ずつ", description: "オーダーが入ってからハンドドリップで抽出" },
  { mark: "刻", title: "その日の一杯", description: "焙煎日を明記し、鮮度にこだわっています" },
];

const menu = [
  { name: "ハンドドリップコーヒー", price: "500円", popular: true },
  { name: "カフェラテ", price: "550円", popular: false },
  { name: "本日の豆のホットサンド", price: "650円", popular: false },
  { name: "自家製シフォンケーキ", price: "450円", popular: false },
];

export default function LightSamplePage() {
  return (
    <>
      <SampleBanner planName="ライト" />
      <div className="min-h-screen bg-[#faf7f2] text-[#3a352c]">
        <header className="flex items-center justify-between px-6 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6b8f71] font-serif text-xs text-white">
              GL
            </span>
            <span className="font-serif text-sm tracking-wide">
              グリーンリーフ珈琲店
            </span>
          </div>
          <nav className="flex gap-5 text-xs tracking-widest text-[#8a8375]">
            <a href="#menu" className="transition hover:text-[#6b8f71]">
              MENU
            </a>
            <a href="#access" className="transition hover:text-[#6b8f71]">
              ACCESS
            </a>
          </nav>
        </header>

        <section className="relative overflow-hidden px-6 py-20 text-center sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#6b8f71]/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 right-[-4rem] h-64 w-64 rounded-full bg-[#e0a458]/15 blur-3xl"
          />
          <div className="relative">
            <p className="text-xs tracking-[0.3em] text-[#6b8f71]">
              GREEN LEAF COFFEE
            </p>
            <h1 className="mx-auto mt-5 max-w-sm font-serif text-3xl leading-[1.7] sm:text-4xl">
              一杯の珈琲に、
              <br />
              小さな丁寧を込めて。
            </h1>
            <p className="mx-auto mt-6 max-w-xs text-sm leading-loose text-[#6b6459]">
              焙煎したての豆を、注文の数だけ一杯ずつ。
              近所にひっそり佇む珈琲スタンドです。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-[11px] tracking-wide text-[#6b8f71]">
              <span className="rounded-full border border-[#6b8f71]/30 bg-white px-3 py-1">
                自家焙煎
              </span>
              <span className="rounded-full border border-[#6b8f71]/30 bg-white px-3 py-1">
                8:00-18:00
              </span>
              <span className="rounded-full border border-[#6b8f71]/30 bg-white px-3 py-1">
                水曜定休
              </span>
            </div>
          </div>
        </section>

        <section className="border-y border-[#e6ddc7] bg-white px-6 py-14">
          <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-3">
            {commitments.map((item) => (
              <div key={item.title} className="text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#6b8f71]/40 font-serif text-sm text-[#6b8f71]">
                  {item.mark}
                </span>
                <p className="mt-3 text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#8a8375]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-md px-6 py-20">
          <p className="text-center text-xs tracking-[0.3em] text-[#6b8f71]">
            MENU
          </p>
          <h2 className="mt-2 text-center font-serif text-xl">お品書き</h2>
          <ul className="mt-8 space-y-1">
            {menu.map((item) => (
              <li
                key={item.name}
                className="group flex items-baseline justify-between border-b border-dashed border-[#e6ddc7] px-1 py-3 transition hover:border-[#6b8f71]"
              >
                <span className="flex items-center gap-2 text-sm">
                  {item.name}
                  {item.popular && (
                    <span className="rounded-full bg-[#e0a458]/20 px-2 py-0.5 text-[10px] font-semibold text-[#a8722f]">
                      人気
                    </span>
                  )}
                </span>
                <span className="tabular-nums text-[#8a8375] transition group-hover:text-[#6b8f71]">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="relative px-6 py-16 text-center">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 font-serif text-7xl text-[#6b8f71]/10"
          >
            &ldquo;
          </span>
          <p className="relative mx-auto max-w-sm font-serif text-lg leading-[2] text-[#4a4539]">
            忙しい毎日の中の、
            <br />
            ひと呼吸のための一杯を。
          </p>
        </section>

        <section
          id="access"
          className="bg-[#eef2ea] px-6 py-16"
        >
          <div className="mx-auto flex max-w-2xl flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-32 flex-1 items-center justify-center rounded-lg border border-dashed border-[#6b8f71]/40 bg-white/60 text-xs tracking-widest text-[#8a9c8b]">
              MAP
            </div>
            <div className="flex-1 text-sm leading-loose text-[#6b6459]">
              <p className="font-semibold text-[#3a352c]">ACCESS</p>
              <p className="mt-2">東京都〇〇区〇〇 1-2-3</p>
              <p>最寄り駅から徒歩5分</p>
              <p className="mt-2 text-xs text-[#8a8375]">
                営業時間 8:00-18:00（水曜定休）
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-2 px-6 py-10 text-xs text-[#8a8375]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6b8f71] font-serif text-[10px] text-white">
            GL
          </span>
          © Green Leaf Coffee（架空の店舗です）
        </footer>
      </div>
    </>
  );
}
