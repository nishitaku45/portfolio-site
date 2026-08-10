// ====================================================================
// Services セクション（「提供サービス」の一覧）用 JavaScript
// ====================================================================
//
// このファイルがやっていることは大きく2つだけです。
//
//   1. サービス内容のデータ（サービス名・説明文・箇条書き）を
//      JSONとして取得し、index.html の中にカードとして組み立てる
//   2. このページは Next.js 側から <iframe> で埋め込まれているため、
//      ページの高さを親ページに伝えて、iframeの高さを自動調整する
//
// データの取得元 "../api/services" は、Next.js側の
// src/app/api/services/route.ts が src/config/site.ts の内容を
// そのままJSONとして書き出しているものです。
// つまり「文章を変えたいときは site.ts を編集する」→「ビルドすると
// このJSONにも反映される」→「このscript.jsがそれを読み込んで表示する」
// という流れになっています。
// ====================================================================

// ページの読み込みが終わったら実行を開始する
document.addEventListener("DOMContentLoaded", init);

async function init() {
  const gridEl = document.getElementById("services-grid");
  const eyebrowEl = document.getElementById("services-eyebrow");
  const headingEl = document.getElementById("services-heading");

  try {
    // 1. サービス内容のデータをJSONで取得する
    //    相対パス "../api/services" は、このファイルの1つ上の階層
    //    （サイトのトップ直下）にある /api/services を指しています。
    //    相対パスにしているので、GitHub Pagesなどサブフォルダ配信に
    //    なった場合でも書き換え不要で動きます。
    const response = await fetch("../api/services");

    if (!response.ok) {
      throw new Error(`データの取得に失敗しました (status: ${response.status})`);
    }

    // 期待するデータの形（src/config/site.ts の services と同じ形）:
    // {
    //   title: "Services",
    //   heading: "提供サービス",
    //   items: [
    //     { name: "...", description: "...", bullets: ["...", "..."] },
    //     ...
    //   ]
    // }
    const data = await response.json();

    // 2. 見出し部分（ラベルとタイトル）を差し替える
    eyebrowEl.textContent = data.title;
    headingEl.textContent = data.heading;

    // 3. サービスカードを1つずつ組み立てて画面に追加する
    gridEl.innerHTML = ""; // 「読み込み中…」の表示を消す
    data.items.forEach((service) => {
      gridEl.appendChild(buildServiceCard(service));
    });
  } catch (error) {
    // データが取得できなかったときは、エラーメッセージを表示して
    // ページが真っ白になるのを防ぐ
    console.error("[services] データの読み込みに失敗しました:", error);
    gridEl.innerHTML = "";
    const errorEl = document.createElement("p");
    errorEl.className = "services-loading";
    errorEl.textContent = "サービス内容の読み込みに失敗しました。時間をおいて再度お試しください。";
    gridEl.appendChild(errorEl);
  }

  // 表示内容が確定したら、iframeの高さを親ページに伝える
  notifyHeightToParent();
}

// --------------------------------------------------------------------
// 1件分のサービスカード（例:「ホームページ制作」のカード）を
// HTML要素として組み立てる関数
//
// service の中身の例:
//   {
//     name: "ホームページ制作",
//     description: "お店・会社・個人事業の紹介サイトを制作します。...",
//     bullets: ["ヒアリング・構成案の作成", "デザイン制作（スマホ／PC対応）", ...]
//   }
// --------------------------------------------------------------------
function buildServiceCard(service) {
  const card = document.createElement("div");
  card.className = "service-card";

  const title = document.createElement("h3");
  title.className = "service-card-title";
  title.textContent = service.name;
  card.appendChild(title);

  const description = document.createElement("p");
  description.className = "service-card-description";
  description.textContent = service.description;
  card.appendChild(description);

  const bulletList = document.createElement("ul");
  bulletList.className = "service-card-bullets";

  service.bullets.forEach((bulletText) => {
    const bulletItem = document.createElement("li");
    bulletItem.className = "service-card-bullet";

    // 箇条書きの先頭にある短い金色の線（「・」の代わりの装飾）
    const mark = document.createElement("span");
    mark.className = "service-card-bullet-mark";
    bulletItem.appendChild(mark);

    const text = document.createTextNode(bulletText);
    bulletItem.appendChild(text);

    bulletList.appendChild(bulletItem);
  });

  card.appendChild(bulletList);

  return card;
}

// --------------------------------------------------------------------
// iframeの高さを自動調整するための仕組み
//
// このページは <iframe> の中で表示されるため、何もしないと親ページ側で
// 決め打ちした高さになり、内容が多い/少ないときに余白が出たり
// スクロールバーが出たりしてしまいます。
// そこで「今の実際の高さ」を親ページ（Services.tsx側の
// AutoHeightIframeコンポーネント）に知らせて、iframeの高さをぴったり
// 合わせてもらうようにしています。type名は他の埋め込みページ
// （例: public/sample-light/script.js）と共通の "iframe-auto-height"
// にしています。
// --------------------------------------------------------------------
function notifyHeightToParent() {
  const sendHeight = () => {
    const height = document.body.scrollHeight;
    // postMessage の第2引数 "*" は「どのオリジン(サイト)に対しても送る」
    // という意味。今回は自分自身のサイトに埋め込まれる想定のみなので
    // 問題ありませんが、type名を独自の文字列にして誤認識を防いでいます。
    window.parent.postMessage({ type: "iframe-auto-height", height }, "*");
  };

  sendHeight();

  // 画面の横幅が変わる（= レイアウトが1列⇔2列に切り替わる等）と
  // 高さも変わるため、ウィンドウのリサイズ時にも再送する
  window.addEventListener("resize", sendHeight);

  // フォントの読み込み完了など、後から高さが変わるケースにも対応する
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);
  }
}
