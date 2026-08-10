import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜Atelier Noir（サンプル）",
};

const flow = [
  { name: "ヒアリング", description: "空間の使い方やご予算、好みのテイストを伺います。" },
  { name: "コンセプト提案", description: "方向性を可視化したご提案資料をお作りします。" },
  { name: "設計・デザイン", description: "詳細な図面とビジュアルを詰めていきます。" },
  { name: "施工・引き渡し", description: "現場管理を行い、完成まで伴走します。" },
];

export default function HighContactPage() {
  return (
    <>
      <section className="border-b border-white/10 px-8 py-24">
        <p className="text-center text-xs tracking-[0.25em] text-[#c9a24b]">
          FLOW
        </p>
        <h1 className="mt-3 text-center font-serif text-2xl">ご依頼の流れ</h1>
        <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-4">
          {flow.map((step, index) => (
            <div key={step.name}>
              <span className="font-serif text-2xl text-[#c9a24b]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-serif text-base">{step.name}</p>
              <p className="mt-2 text-xs leading-loose text-[#ece7dd]/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-24 text-center">
        <p className="text-xs tracking-[0.25em] text-[#c9a24b]">CONTACT</p>
        <h2 className="mt-6 font-serif text-2xl md:text-3xl">
          まずはお話をお聞かせください。
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-loose text-[#ece7dd]/60">
          初回のご相談・お見積りは無料です。
          <br />
          公式LINEからお気軽にご連絡ください。
        </p>
        <a
          href="https://line.me/R/ti/p/@your-line-id"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-block border border-[#c9a24b] px-10 py-3.5 text-xs tracking-[0.2em] text-[#c9a24b] transition hover:bg-[#c9a24b] hover:text-[#111015]"
        >
          公式LINEで相談する
        </a>
      </section>
    </>
  );
}
