import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：プレミアムプランの制作実績②｜Web&LINE工房",
  description: "プレミアムプランで制作した場合のサンプルホームページ（割烹・寿司店）です。",
};

// プレミアムプランの制作実績②：架空の割烹・寿司店
// 実体は public/sample-premium-sushi/ の静的HTML/CSS/JSファイル
// （6ページ構成・コース詳細ページ×2）です。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PremiumSushiSamplePage() {
  return (
    <>
      <SampleBanner planName="プレミアム" />
      <AutoHeightIframe
        src={`${basePath}/sample-premium-sushi/index.html`}
        title="プレミアムプランの制作実績：割烹・寿司店"
      />
    </>
  );
}
