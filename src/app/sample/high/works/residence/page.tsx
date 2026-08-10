import type { Metadata } from "next";
import Link from "next/link";
import { grain } from "../../theme";

export const metadata: Metadata = {
  title: "個人邸 新築インテリア計画｜Atelier Noir（サンプル）",
};

const meta = [
  { label: "種別", value: "新築戸建て" },
  { label: "延床面積", value: "128㎡" },
  { label: "工期", value: "約5ヶ月" },
  { label: "エリア", value: "東京都内" },
];

export default function HighWorkResidencePage() {
  return (
    <article>
      <div className="px-8 pt-8">
        <Link
          href="/sample/high/works"
          className="text-[11px] tracking-[0.15em] text-[#ece7dd]/70 hover:text-[#c9a24b]"
        >
          ← 実績一覧に戻る
        </Link>
      </div>

      <header className="px-8 pb-10 pt-8 text-center sm:pt-10">
        <p className="text-[10px] tracking-[0.25em] text-[#c9a24b]">
          RESIDENCE
        </p>
        <h1 className="mx-auto mt-4 max-w-lg font-serif text-3xl leading-[1.6] sm:text-4xl">
          個人邸 新築インテリア計画
        </h1>
      </header>

      <div style={{ backgroundImage: grain }} className="aspect-[16/9] w-full" />

      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 px-8 py-10 sm:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label} className="border-t border-white/10 pt-3">
            <p className="text-[10px] tracking-wide text-[#ece7dd]/70">
              {item.label}
            </p>
            <p className="mt-1 text-sm">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl space-y-6 px-8 py-10 text-sm leading-loose text-[#ece7dd]/75">
        <p>
          共働きのご夫婦とお子様2人が暮らす、新築戸建てのインテリア計画です。
          <br />
          「収納は多く、でも生活感は出したくない」というご要望から、
          <br />
          造作家具で壁と一体化した収納計画をご提案しました。
        </p>
        <p>
          リビングの床材には経年変化を楽しめる無垢材を採用し、
          <br />
          照明は用途ごとに明るさを切り替えられる間接照明を中心に構成。
          <br />
          夜は空間全体がぐっと落ち着いた表情に変わります。
        </p>
      </div>

      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-2 px-8 pb-10">
        <div style={{ backgroundImage: grain }} className="aspect-[4/3]" />
        <div style={{ backgroundImage: grain }} className="aspect-[4/3]" />
      </div>

      <div className="border-t border-white/10 px-8 py-16 text-center">
        <span aria-hidden className="mx-auto block font-serif text-5xl text-[#c9a24b]/20">
          &ldquo;
        </span>
        <p className="mx-auto mt-2 max-w-md font-serif text-lg leading-[2]">
          収納の悩みがなくなっただけでなく、
          <br />
          帰るのが楽しみな家になりました。
        </p>
        <p className="mt-4 text-[11px] tracking-wide text-[#ece7dd]/70">
          施主様の声（40代・ご夫婦）
        </p>
      </div>

      <div className="px-8 pb-20 text-center">
        <Link
          href="/sample/high/contact"
          className="inline-block border border-[#c9a24b] px-8 py-3 text-xs tracking-[0.2em] text-[#c9a24b] transition hover:bg-[#c9a24b] hover:text-[#111015]"
        >
          似た事例について相談する
        </Link>
      </div>
    </article>
  );
}
