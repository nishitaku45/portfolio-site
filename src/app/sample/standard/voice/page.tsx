import type { Metadata } from "next";
import VoiceCarousel from "./VoiceCarousel";

export const metadata: Metadata = {
  title: "お客様の声｜Sunny Side Hair（サンプル）",
};

// VOICE：MENUと呼応するダークトーンで、大きな引用符を背景に敷いた
// 「テスティモニアル・ステージ」として独立させる。小さなカード3枚を
// 並べる型（他サイトで多用しがちなパターン）はここでは採らない。
export default function StandardVoicePage() {
  return (
    <section className="relative overflow-hidden bg-[#241713] px-6 py-24 text-center sm:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 font-serif text-[12rem] leading-none text-white/[0.04]"
      >
        &ldquo;
      </span>
      <p className="relative text-[11px] tracking-[0.3em] text-gold">
        VOICE
      </p>
      <div className="relative mt-12">
        <VoiceCarousel />
      </div>
    </section>
  );
}
