// ============================================================================
// Services セクション（「提供サービス」の一覧）
// ============================================================================
//
// このコンポーネント自体は、public/services/index.html を
// <AutoHeightIframe> で画面に埋め込むだけの「薄いラッパー」です。
//
// 中身の見た目・文章・レイアウトを直接編集したい場合は、React/Next.jsの
// 知識は不要です。以下のファイルだけを触ってください。
//
//   public/services/index.html … HTMLの骨組み
//   public/services/style.css  … 見た目（色・余白など）
//   public/services/script.js  … サービス内容のデータを反映する処理
//   src/config/site.ts         … サービス名・説明文・箇条書きの「文章」
//
// このファイル(Services.tsx)を触る必要があるのは、iframeの埋め込み方
// そのものを変えたいとき（例: 高さの初期値を変える）くらいです。
// ============================================================================

import AutoHeightIframe from "@/components/AutoHeightIframe";

// GitHub Pagesのサブフォルダ配信(例: https://user.github.io/repo-name/)にも
// 対応できるよう、next.config.ts で公開しているbasePathを使ってiframeの
// URLを組み立てる。ローカル開発(localhost:3000)では空文字になるので
// 気にしなくてOK。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Services() {
  return (
    // id="services" はヘッダーのナビゲーションから
    // #services へスクロールするために使われている（iframeの中ではなく
    // 必ずこの外側の要素に付けること）
    <section id="services">
      <AutoHeightIframe
        src={`${basePath}/services/index.html`}
        title="提供サービス"
      />
    </section>
  );
}
