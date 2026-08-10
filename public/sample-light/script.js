// ====================================================================
// ライトプランのサンプルLP（架空の美容クリニック）用 JavaScript
// ====================================================================
//
// このページで動いている機能:
//   1. ヘッダー: スクロールすると影が濃くなる
//   2. モバイルメニュー: ハンバーガーボタンでナビを開閉する
//   3. 予約ボタン: 本番では外部予約システムのURLに差し替える想定
//   4. アンカーリンクのスムーススクロール
//   5. スクロールで要素がふわっと表示される演出
//   6. 日本語⇔英語の切り替え（右上のEN/JAボタン）
//   7. このページの高さを親ページ(Next.js側)に伝える処理
//      （iframeで埋め込まれているため、自動で高さを合わせる必要がある）
// ====================================================================

// 1. ヘッダー: スクロールで影を強める
const header = document.getElementById('siteHeader');
const onScrollHeader = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
};
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });

// 2. モバイルメニューの開閉（ドロワー）
const nav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// 3. 予約ボタン: 実案件では STORES予約 / Coubic 等の外部予約システムへの
// リンク or モーダル埋め込みに差し替える想定のプレースホルダー
document.getElementById('reserveBtn').addEventListener('click', (e) => {
  e.preventDefault();
  alert('ここに予約システム（STORES予約・Coubic等）を埋め込み or 連携します');
});

// 4. アンカーリンクのスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// 5. スクロールで要素をフェードイン表示（prefers-reduced-motionの場合は即表示）
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

// 6. 日本語⇔英語の切り替え（data-en属性を持つ要素のみが対象。
// 初回切り替え時に日本語原文をdata-jaへ退避してから入れ替える）
const LANG_STORAGE_KEY = 'clinic-lang';
const langToggle = document.getElementById('langToggle');
const translatable = document.querySelectorAll('[data-en]');
const pageTitles = { ja: '○○美容クリニック（ライトプランのサンプル）', en: 'XX Beauty Clinic (Light Plan Sample)' };

function applyLang(lang) {
  translatable.forEach((el) => {
    if (!el.dataset.ja) {
      el.dataset.ja = el.textContent;
    }
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ja;
  });
  document.documentElement.lang = lang;
  document.title = pageTitles[lang];
  langToggle.textContent = lang === 'en' ? 'JA' : 'EN';
  langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Japanese' : 'Switch to English');

  // 文字量が日本語⇔英語で変わり、ページの高さも変わるため、
  // 切り替えのたびに親ページへ高さを再通知する（下のnotifyHeightToParent参照）
  notifyHeightToParent.sendHeight?.();
}

applyLang(localStorage.getItem(LANG_STORAGE_KEY) || 'ja');

langToggle.addEventListener('click', () => {
  const nextLang = document.documentElement.lang === 'en' ? 'ja' : 'en';
  applyLang(nextLang);
  localStorage.setItem(LANG_STORAGE_KEY, nextLang);
});

// --------------------------------------------------------------------
// 7. iframeの高さを自動調整するための仕組み
//
// このページは <iframe> の中で表示されるため、何もしないと親ページ側で
// 決め打ちした高さになり、内容が多い/少ないときに余白が出たり
// スクロールバーが出たりしてしまいます。
// そこで「今の実際の高さ」を親ページ（sample/light/page.tsx側の
// AutoHeightIframeコンポーネント）に知らせて、iframeの高さをぴったり
// 合わせてもらうようにしています（Servicesセクションと同じ仕組みです）。
// --------------------------------------------------------------------
function notifyHeightToParent() {
  const sendHeight = () => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ type: 'iframe-auto-height', height }, '*');
  };

  // 言語切り替え時にも呼べるよう、関数の外から参照できるようにしておく
  notifyHeightToParent.sendHeight = sendHeight;

  sendHeight();

  // 画面の横幅が変わる（= レイアウトが1列⇔3列に切り替わる等）と
  // 高さも変わるため、ウィンドウのリサイズ時にも再送する
  window.addEventListener('resize', sendHeight);

  // スクロール演出(reveal)でレイアウトが変わるケースなどにも対応する
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);
  }
}

notifyHeightToParent();
