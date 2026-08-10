// ------------------------------------------------------------------
// これは「サービス内容」データの橋渡し役です。
//
// サイトの文章は src/config/site.ts に集約されていますが、Services
// セクション（トップページの「提供サービス」の部分）だけは、あえて
// Reactを使わない「普通のHTML/CSS/JavaScript」で書かれています
// （public/services/ フォルダの中身）。
//
// でも文章の管理場所は今まで通り site.ts のままにしたいので、この
// ファイルが「site.ts の中身をJSONという単純なデータ形式に変換して
// 渡す」役目を果たしています。
//
//   site.ts (文章の管理)
//     → このファイル (JSONに変換)
//       → public/services/script.js (JSONを読み込んでHTMLに反映)
//
// `next build` を実行すると、このファイルの中身があらかじめ計算されて
// 静的なファイルとして書き出されるので、サーバーを動かし続けなくても
// GitHub Pages のような静的ホスティングで正しく動きます。
//
// 【文章を編集したい場合】 このファイルではなく src/config/site.ts の
// services の部分を編集してください。
// ------------------------------------------------------------------

import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

// ビルド時に一度だけ実行され、結果が静的ファイルとして書き出される
// （毎回サーバーで計算される「動的」な処理ではない、という宣言）
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(siteConfig.services);
}
