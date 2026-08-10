import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス・ご予約｜Sunny Side Hair（サンプル）",
};

// ACCESS：ここは実用ページなので、他ページのような大きな明朝体の見出しや
// 装飾は使わず、情報を素早く拾えることを優先したレイアウトにする。
export default function StandardAccessPage() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[#3a332c]">
          Sunny Side Hair
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="flex h-40 items-center justify-center rounded-sm border border-[#9c5a56]/30 bg-white text-[11px] tracking-[0.2em] text-[#9c5a56]">
            MAP
          </div>
          <dl className="space-y-4 text-sm text-[#6b5d54]">
            <div>
              <dt className="text-[11px] tracking-wide text-[#6b5d54]">
                住所
              </dt>
              <dd className="mt-1">東京都〇〇区〇〇 2-3-4 サニービル2F</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-wide text-[#6b5d54]">
                営業時間
              </dt>
              <dd className="mt-1">10:00-20:00（火曜定休）</dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-wide text-[#6b5d54]">
                アクセス
              </dt>
              <dd className="mt-1">最寄り駅から徒歩3分</dd>
            </div>
          </dl>
        </div>
        <a
          href="https://line.me/R/ti/p/@your-line-id"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-8 inline-block rounded-sm bg-[#9c5a56] px-7 py-3 text-xs tracking-[0.15em] text-white shadow-sm transition hover:bg-[#7c4844]"
        >
          LINEでご予約はこちら
        </a>
      </div>
    </section>
  );
}
