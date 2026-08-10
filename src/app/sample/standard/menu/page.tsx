import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "料金表｜Sunny Side Hair（サンプル）",
};

const menu = [
  {
    category: "CUT",
    items: [
      { name: "カット", price: "4,400" },
      { name: "カウンセリング＋カット", price: "6,600" },
    ],
  },
  {
    category: "COLOR / PERM",
    items: [
      { name: "カット＋カラー", price: "9,900", popular: true },
      { name: "カット＋パーマ", price: "11,000" },
      { name: "ホームカラー（リタッチ）", price: "6,600" },
    ],
  },
  {
    category: "HEAD SPA / CARE",
    items: [
      { name: "トリートメント", price: "3,300" },
      { name: "ヘッドスパ（30分）", price: "4,400" },
      { name: "炭酸クレンジング", price: "2,200" },
    ],
  },
];

// MENU：他ページとは打って変わってダークトーンの一枚板。老舗レストランの
// メニュー表を思わせる「名称 ‥‥‥ 価格」のリーダー罫で統一し、光沢のある
// 情報ページとしての格を出す（eyebrow・カード・アイコンの型は使わない）。
export default function StandardMenuPage() {
  return (
    <section className="bg-[#241713] px-6 py-24 text-[#ece3dc] sm:py-28">
      <p className="text-center font-serif text-3xl tracking-[0.05em] text-[#e8d5ce] sm:text-4xl">
        Menu
      </p>
      <span className="mx-auto mt-6 block h-px w-16 bg-gold" />

      <div className="mx-auto mt-16 max-w-lg space-y-14">
        {menu.map((group) => (
          <div key={group.category}>
            <p className="text-[11px] tracking-[0.3em] text-gold">
              {group.category}
            </p>
            <ul className="mt-5 space-y-5">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline gap-3">
                  <span className="whitespace-nowrap text-sm">
                    {item.name}
                    {item.popular && (
                      <span className="ml-2 text-[10px] italic text-gold">
                        人気
                      </span>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className="mb-1 flex-1 border-b border-dotted border-[#ece3dc]/25"
                  />
                  <span className="font-serif tabular-nums text-[#e8d5ce]">
                    ¥{item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-16 max-w-sm text-center text-[11px] leading-loose text-[#ece3dc]/75">
        表示価格は税込です。髪の長さ・状態により、
        <br />
        別途料金を頂戴する場合がございます。
      </p>

      <div className="mt-10 text-center">
        <Link
          href="/sample/standard/access"
          className="inline-block border border-gold px-8 py-3 text-xs tracking-[0.2em] text-gold transition hover:bg-gold hover:text-[#241713]"
        >
          ご予約はこちら
        </Link>
      </div>
    </section>
  );
}
