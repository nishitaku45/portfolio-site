import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：ライトプランの制作実績②｜Web制作工房",
  description: "ライトプランで制作した場合のサンプルホームページ（ネイルサロン）です。",
};

// ライトプランの制作実績②：架空のネイルサロン
// 実体は public/sample-light-nail/ の静的HTML/CSS/JSファイルです。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LightNailSamplePage() {
  return (
    <>
      <SampleBanner planName="ライト" />
      <AutoHeightIframe
        src={`${basePath}/sample-light-nail/index.html`}
        title="ライトプランの制作実績：ネイルサロン"
      />
    </>
  );
}
