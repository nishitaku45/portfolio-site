import type { ReactNode } from "react";
import SampleBanner from "@/components/SampleBanner";
import HighHeader from "./HighHeader";
import PageTransition from "./PageTransition";

export default function HighSampleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111015] text-[#ece7dd]">
      {/* バナー＋ヘッダーを1つのstickyコンテナにまとめ、折り返しで高さが
          変わってもヘッダーと重ならないようにする。 */}
      <div className="sticky top-0 z-50">
        <SampleBanner planName="プレミアム" sticky={false} />
        <header className="border-b border-white/10 bg-[#111015]/95 backdrop-blur">
          <HighHeader />
        </header>
      </div>
      <PageTransition>{children}</PageTransition>
      <footer className="border-t border-white/10 px-8 py-8 text-center text-[10px] tracking-widest text-[#ece7dd]/60">
        © ATELIER NOIR（架空の事務所です）
      </footer>
    </div>
  );
}
