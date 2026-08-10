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
};

export default nextConfig;
