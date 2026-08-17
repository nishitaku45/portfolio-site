// ====================================================================
// プレミアムプランの制作例①（架空の医療美容クリニック）全ページ共通 JS
// ====================================================================
// index.html / menu.html / detail-*.html / staff.html / reserve.html の
// 6ファイルすべてから、このファイルを共通で読み込んでいます。
// ====================================================================

window.addEventListener('DOMContentLoaded', () => document.body.classList.add('is-loaded'));

const header = document.getElementById('siteHeader');
if (header) {
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });
}

const nav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');
if (nav && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// カテゴリタブ絞り込み（メニュー・コース一覧ページ）
document.querySelectorAll('[data-filter-group]').forEach((tabGroup) => {
  const groupName = tabGroup.dataset.filterGroup;
  const cards = document.querySelectorAll(`[data-filter-target="${groupName}"]`);
  const tabs = tabGroup.querySelectorAll('.category-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const selected = tab.dataset.filter;
      cards.forEach((card) => {
        card.hidden = !(selected === 'all' || card.dataset.category === selected);
      });
      notifyHeightToParent.sendHeight?.();
    });
  });
});

// 予約ボタン: 実案件では外部予約システムのURLに差し替える想定のプレースホルダー
document.querySelectorAll('[data-reserve-action]').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ここに予約システム（STORES予約・Coubic等）を埋め込み or 連携します');
  });
});

// 公式LINEの友だち追加ボタン（プレースホルダー）
document.querySelectorAll('[data-line-action]').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ここに公式LINEの友だち追加リンク（line.me/R/ti/p/@...）を設置します');
  });
});

// スクロールで要素をフェードイン表示
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

// iframeの高さを自動調整
function notifyHeightToParent() {
  const sendHeight = () => {
    window.parent.postMessage({ type: 'iframe-auto-height', height: document.body.scrollHeight }, '*');
  };
  notifyHeightToParent.sendHeight = sendHeight;
  sendHeight();
  window.addEventListener('resize', sendHeight);
  if ('ResizeObserver' in window) new ResizeObserver(sendHeight).observe(document.body);
}
notifyHeightToParent();
