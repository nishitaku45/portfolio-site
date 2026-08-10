// ====================================================================
// 「ページ追加」オプションの制作例（架空の美容クリニック・9ページ構成）
// 全ページ共通 JavaScript
// ====================================================================
//
// 9つのHTMLファイル（index.html / menu.html / menu-*.html / staff.html /
// faq.html / reviews.html / access.html / reserve.html）すべてから、この
// 1つのファイルを <script src="script.js" defer></script> で読み込んで
// います。ページによって存在しない要素（例: faq.htmlにしかないアコーディ
// オン）は、該当する要素が無ければ何もしないようにしているので、
// 全ページで安全に共通利用できます。
//
// このファイルがやっていること:
//   1. ヘッダー: スクロールすると影が濃くなる
//   2. モバイルメニュー: ハンバーガーボタンでナビを開閉する
//   3. カテゴリタブ絞り込み（施術メニュー一覧・お客様の声・FAQページ）
//   4. アコーディオン開閉（よくある質問ページ）
//   5. 予約ボタン: 本番では外部予約システムのURLに差し替える想定
//   6. スクロールで要素がふわっと表示される演出
//   7. このページの高さを親ページ(Next.js側)に伝える処理
// ====================================================================

// 1. ヘッダー: スクロールで影を強める
const header = document.getElementById('siteHeader');
if (header) {
  const onScrollHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });
}

// 2. モバイルメニューの開閉（ドロワー）
const nav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');
if (nav && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// --------------------------------------------------------------------
// 3. カテゴリタブ絞り込み
//
// data-filter-group="menu" のような属性を持つタブの並び(.category-tabs)と、
// data-category="フェイス系" のような属性を持つカード群を対応づけて、
// タブをクリックしたら一致しないカードを非表示にする汎用処理。
// 「施術メニュー一覧」と「お客様の声」の2ページで同じ仕組みを使っている。
// --------------------------------------------------------------------
document.querySelectorAll('[data-filter-group]').forEach((tabGroup) => {
  const groupName = tabGroup.dataset.filterGroup;
  const cards = document.querySelectorAll(`[data-filter-target="${groupName}"]`);
  const tabs = tabGroup.querySelectorAll('.category-tab');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      const selected = tab.dataset.filter; // "all" または カテゴリ名
      cards.forEach((card) => {
        const matches = selected === 'all' || card.dataset.category === selected;
        card.hidden = !matches;
      });

      // 表示件数が変わって高さも変わるため、親ページへ再通知する
      notifyHeightToParent.sendHeight?.();
    });
  });
});

// --------------------------------------------------------------------
// 4. アコーディオン開閉（よくある質問ページ）
// .faq-item の中の .faq-question ボタンを押すと、その項目だけ開閉する
// --------------------------------------------------------------------
document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.toggle('is-open');
    question.setAttribute('aria-expanded', String(isOpen));
    // 開閉でページの高さが変わるため、アニメーション時間(0.3s)を待ってから通知
    window.setTimeout(() => notifyHeightToParent.sendHeight?.(), 320);
  });
});

// 5. 予約ボタン: 実案件では STORES予約 / Coubic 等の外部予約システムへの
// リンク or モーダル埋め込みに差し替える想定のプレースホルダー
document.querySelectorAll('[data-reserve-action]').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ここに予約システム（STORES予約・Coubic等）を埋め込み or 連携します');
  });
});

// 公式LINEの友だち追加ボタンも同様に、実案件では公式LINEの追加用URL
// （line.me/R/ti/p/@... など）に差し替える想定のプレースホルダー
document.querySelectorAll('[data-line-action]').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ここに公式LINEの友だち追加リンク（line.me/R/ti/p/@...）を設置します');
  });
});

// 6. スクロールで要素をフェードイン表示（prefers-reduced-motionの場合は即表示）
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.reveal');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((el) => revealObserver.observe(el));
}

// --------------------------------------------------------------------
// 7. iframeの高さを自動調整するための仕組み
//
// このサイトは9ページとも <iframe> の中に表示されるため、ページを
// 移動したりタブ・アコーディオンで表示内容が変わったりするたびに、
// 今の実際の高さを親ページ（Next.js側のAutoHeightIframeコンポーネント）
// に知らせて、iframeの高さを合わせ直してもらう。
// Servicesセクション・ライトプランのサンプルと同じ仕組み。
// --------------------------------------------------------------------
function notifyHeightToParent() {
  const sendHeight = () => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'iframe-auto-height', height }, '*');
  };

  notifyHeightToParent.sendHeight = sendHeight;
  sendHeight();

  window.addEventListener('resize', sendHeight);

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);
  }
}

notifyHeightToParent();
