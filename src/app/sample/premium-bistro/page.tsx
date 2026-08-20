import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：プレミアムプランの制作実績③｜Web制作工房",
  description: "プレミアムプランで制作した場合のサンプルホームページ（フレンチ/イタリアンレストラン）です。",
};

// プレミアムプランの制作実績③：架空のフレンチ/イタリアンレストラン
// 実体は public/sample-premium-bistro/ の静的HTML/CSS/JSファイル
// （6ページ構成・コース詳細ページ×2）です。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PremiumBistroSamplePage() {
  return (
    <>
      <SampleBanner planName="プレミアム" />
      <AutoHeightIframe
        src={`${basePath}/sample-premium-bistro/index.html`}
        title="プレミアムプランの制作実績：フレンチ/イタリアンレストラン"
      />
    </>
  );
}
