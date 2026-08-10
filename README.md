# 副業ポートフォリオサイト

Next.js（静的エクスポート）で作った、HP制作・公式LINE構築の副業向けポートフォリオサイトです。
GitHub Pages で無料公開できるように構成しています。

## ローカルで確認する

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

## 内容の編集方法

文章・料金・リンクなどは **すべて [`src/config/site.ts`](src/config/site.ts) にまとまっています**。
コードを触らなくても、このファイルのテキストを書き換えるだけでサイト全体の内容を更新できます。

編集しておきたい主な項目：

- `brandName` … 屋号・ニックネーム（今は仮で「Web&LINE工房」になっています）
- `hero.primaryCta.href` / `contact.lineUrl` … 公式LINEのURL（`https://line.me/R/ti/p/@your-line-id` の部分を実際のURLに差し替え）
- `about.paragraphs` … 自己紹介文
- `pricing.plans` … 料金プラン・金額（仮の金額を入れています）

デザイン（配色・レイアウト）を変えたい場合は `src/components/` 内の各コンポーネント、
配色そのものは `src/app/globals.css` の `--color-brand-*` / `--color-accent` を編集してください。

## GitHub Pages に公開する手順

1. GitHub で新しいリポジトリを作成します（例: `portfolio-site`）。Public リポジトリにしてください。
2. このフォルダをそのリポジトリに push します。

   ```bash
   git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
   git branch -M main
   git push -u origin main
   ```

3. GitHub のリポジトリ画面で **Settings → Pages** を開き、「Build and deployment」の Source を
   **GitHub Actions** に設定します。
4. `main` ブランチに push すると、`.github/workflows/deploy.yml` が自動でビルド・公開まで行います
   （初回は Actions タブで進行状況を確認できます）。
5. 数分後、`https://<あなたのユーザー名>.github.io/<リポジトリ名>/` で公開されます。
   - リポジトリ名を `<あなたのユーザー名>.github.io` にした場合は、ルート
     （`https://<あなたのユーザー名>.github.io/`）で公開され、サブパスは不要になります。
     ワークフロー内で自動判定しているので、設定変更は不要です。

### ローカルで公開用ビルドを試したいとき

プロジェクトページ（`/リポジトリ名/` 配下）としてビルドしたい場合は、環境変数でサブパスを指定します。

```bash
GITHUB_PAGES_BASE_PATH=portfolio-site npm run build
```

生成された `out/` フォルダの中身が、そのまま公開される静的ファイルです。

## 技術構成

- [Next.js](https://nextjs.org)（App Router / 静的エクスポート `output: "export"`）
- [Tailwind CSS](https://tailwindcss.com)
- GitHub Actions + GitHub Pages でホスティング
