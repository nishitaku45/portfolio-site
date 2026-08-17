import type { ReactNode } from "react";
import { Bodoni_Moda, Zen_Old_Mincho } from "next/font/google";
import SampleBanner from "@/components/SampleBanner";
import StandardHeader from "./StandardHeader";
import PageTransition from "./PageTransition";

// ファッション誌のマストヘッドのような高コントラストの見出しフォント。
// Bodoni Modaは欧文専用（日本語グリフを含まない）ため、英数字・ロゴ
// など欧文の見出しにだけ使う。日本語の見出しにはZen Old Mincho（和文の
// エディトリアル用明朝）を組み合わせて使う。このサンプル専用の書体
// （焼肉店・居酒屋の制作例とはあえて別のフォントにしている）。
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-editorial",
});
const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-editorial-jp",
});

export default function StandardSampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className={`${bodoni.variable} ${zenOldMincho.variable} min-h-screen bg-[#f9f3ea] text-[#1c130f]`}
    >
      {/* バナー＋ヘッダーを1つのstickyコンテナにまとめる。
          バナーの文言が折り返して高さが変わっても、ヘッダーが
          固定オフセットとズレて隠れてしまわないようにするため。 */}
      <div className="sticky top-0 z-50">
        <SampleBanner planName="スタンダード" sticky={false} />
        <StandardHeader />
      </div>
      <PageTransition>{children}</PageTransition>
      <footer className="flex flex-col items-center gap-3 border-t border-[#e5d4c3] px-6 py-12 text-xs text-[#7d6a5c]">
        <span style={{ fontFamily: "var(--font-editorial)" }} className="text-sm tracking-[0.1em]">
          Sunny Side Hair
        </span>
        <span className="h-px w-10 bg-[#6b1220]/40" />
        © Sunny Side Hair（架空の店舗です）
      </footer>
    </div>
  );
}
