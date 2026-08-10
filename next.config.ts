import type { NextConfig } from "next";

// GitHub Pages の「プロジェクトページ」(https://<user>.github.io/<repo>/) で公開する場合、
// サブパス配信になるため basePath / assetPrefix が必要。
// リポジトリ名が `<user>.github.io` の「ユーザーページ」の場合は不要なので、
// その場合は下の GITHUB_PAGES_BASE_PATH を空にするか、このブロックごと削除してください。
const repoName = process.env.GITHUB_PAGES_BASE_PATH ?? "";
const basePath = repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  // basePath はサーバー設定のため、そのままではブラウザ側(クライアント)の
  // コードから参照できない。Services セクションが埋め込む iframe の URL
  // 組み立てに使えるよう、NEXT_PUBLIC_ 接頭辞を付けて同じ値を公開する。
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
