import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：スタンダードプランの制作実績②｜Web制作工房",
  description: "スタンダードプランで制作した場合のサンプルホームページ（焼肉店）です。",
};

// スタンダードプランの制作実績②：架空の焼肉店
// 実体は public/sample-standard-yakiniku/ の静的HTML/CSS/JSファイル
// （5ページ構成）です。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function StandardYakinikuSamplePage() {
  return (
    <>
      <SampleBanner planName="スタンダード" />
      <AutoHeightIframe
        src={`${basePath}/sample-standard-yakiniku/index.html`}
        title="スタンダードプランの制作実績：焼肉店"
      />
    </>
  );
}
