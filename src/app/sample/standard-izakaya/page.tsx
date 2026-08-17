import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：スタンダードプランの制作実績③｜Web&LINE工房",
  description: "スタンダードプランで制作した場合のサンプルホームページ（和食居酒屋）です。",
};

// スタンダードプランの制作実績③：架空の和食居酒屋
// 実体は public/sample-standard-izakaya/ の静的HTML/CSS/JSファイル
// （5ページ構成）です。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function StandardIzakayaSamplePage() {
  return (
    <>
      <SampleBanner planName="スタンダード" />
      <AutoHeightIframe
        src={`${basePath}/sample-standard-izakaya/index.html`}
        title="スタンダードプランの制作実績：和食居酒屋"
      />
    </>
  );
}
