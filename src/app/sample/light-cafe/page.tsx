import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：ライトプランの制作実績③｜Web&LINE工房",
  description: "ライトプランで制作した場合のサンプルホームページ（個人カフェ）です。",
};

// ライトプランの制作実績③：架空の個人カフェ
// 実体は public/sample-light-cafe/ の静的HTML/CSS/JSファイルです。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LightCafeSamplePage() {
  return (
    <>
      <SampleBanner planName="ライト" />
      <AutoHeightIframe
        src={`${basePath}/sample-light-cafe/index.html`}
        title="ライトプランの制作実績：個人カフェ"
      />
    </>
  );
}
