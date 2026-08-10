import type { ReactNode } from "react";
import SampleBanner from "@/components/SampleBanner";
import StandardHeader from "./StandardHeader";
import PageTransition from "./PageTransition";

export default function StandardSampleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#2a2420]">
      {/* バナー＋ヘッダーを1つのstickyコンテナにまとめる。
          バナーの文言が折り返して高さが変わっても、ヘッダーが
          固定オフセットとズレて隠れてしまわないようにするため。 */}
      <div className="sticky top-0 z-50">
        <SampleBanner planName="スタンダード" sticky={false} />
        <StandardHeader />
      </div>
      <PageTransition>{children}</PageTransition>
      <footer className="flex flex-col items-center gap-3 border-t border-[#e8d9d2] px-6 py-12 text-xs text-[#6b5d54]">
        <span className="font-serif text-sm tracking-[0.1em]">
          Sunny Side Hair
        </span>
        <span className="h-px w-10 bg-gold/50" />
        © Sunny Side Hair（架空の店舗です）
      </footer>
    </div>
  );
}
