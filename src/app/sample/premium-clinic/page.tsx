import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：プレミアムプランの制作実績①｜Web&LINE工房",
  description: "プレミアムプランで制作した場合のサンプルホームページ（医療美容クリニック）です。",
};

// プレミアムプランの制作実績①：架空の医療美容クリニック
// 実体は public/sample-premium-clinic/ の静的HTML/CSS/JSファイル
// （6ページ構成・施術詳細ページ×2）です。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PremiumClinicSamplePage() {
  return (
    <>
      <SampleBanner planName="プレミアム" />
      <AutoHeightIframe
        src={`${basePath}/sample-premium-clinic/index.html`}
        title="プレミアムプランの制作実績：医療美容クリニック"
      />
    </>
  );
}
