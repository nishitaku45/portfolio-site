import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：ライトプランの制作イメージ｜Web&LINE工房",
  description: "ライトプランで制作した場合のサンプルホームページです。",
};

// ライトプランのサンプル：架空の美容クリニック「○○美容クリニック」
//
// 実体は public/sample-light/ に置かれた、素のHTML/CSS/JSファイルです。
// Reactコンポーネントとしては書いておらず、下の AutoHeightIframe で
// そのHTMLファイルをそのまま画面に埋め込んでいるだけです。
//
// 文章やデザインを直接編集したい場合は、このファイルではなく
// 以下のファイルを編集してください（React／Next.jsの知識は不要です）。
//   public/sample-light/index.html
//   public/sample-light/style.css
//   public/sample-light/script.js

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function LightSamplePage() {
  return (
    <>
      <SampleBanner planName="ライト" />
      <AutoHeightIframe
        src={`${basePath}/sample-light/index.html`}
        title="ライトプランのサンプル：美容クリニックLP"
      />
    </>
  );
}
