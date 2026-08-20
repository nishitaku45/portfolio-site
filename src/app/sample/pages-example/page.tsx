import type { Metadata } from "next";
import SampleBanner from "@/components/SampleBanner";
import AutoHeightIframe from "@/components/AutoHeightIframe";

export const metadata: Metadata = {
  title: "サンプル：「ページ追加」オプションの制作例（9ページ構成）｜Web制作工房",
  description:
    "「ページ追加」オプションを使って9ページ構成にした場合の制作例です。架空の美容クリニックを題材にしたサンプルサイトです。",
};

// 「ページ追加」オプション（料金セクション）の制作例：
// 架空の美容クリニック「○○美容クリニック」の9ページ構成サイト
//
// 実体は public/sample-pages-example/ に置かれた、素のHTML/CSS/JSファイル
// 9枚（index.html・menu.html・menu-*.html・staff.html・faq.html・
// reviews.html・access.html・reserve.html）です。ページ間の移動は
// すべてこの中で普通の<a href>によるページ遷移として完結しており、
// Next.js側はエントリーポイント(index.html)をiframeで表示しているだけです。
//
// 文章やデザインを直接編集したい場合は、このファイルではなく
// public/sample-pages-example/ 配下のHTML/CSS/JSファイルを編集して
// ください（React／Next.jsの知識は不要です）。

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PagesExampleSamplePage() {
  return (
    <>
      <SampleBanner description="「ページ追加」オプションを使って9ページ構成にした場合の制作例です。実在の企業ではありません。" />
      <AutoHeightIframe
        src={`${basePath}/sample-pages-example/index.html`}
        title="「ページ追加」オプションの制作例：美容クリニック9ページサイト"
      />
    </>
  );
}
