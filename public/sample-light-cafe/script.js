// ライトプランの制作例③（架空の個人カフェ）用 JavaScript
// アンカーのスムーススクロール／スクロール演出／iframeの高さ自動調整
// （ライトプランのサンプル・美容クリニックLPと同じ仕組みです）

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

// 公式LINEの友だち追加ボタン: 実案件では line.me/R/ti/p/@... のURLに差し替える
document.querySelectorAll('.btn-line').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ここに公式LINEの友だち追加リンク（line.me/R/ti/p/@...）を設置します');
  });
});

function notifyHeightToParent() {
  const sendHeight = () => {
    window.parent.postMessage({ type: 'iframe-auto-height', height: document.body.scrollHeight }, '*');
  };
  sendHeight();
  window.addEventListener('resize', sendHeight);
  if ('ResizeObserver' in window) {
    new ResizeObserver(sendHeight).observe(document.body);
  }
}
notifyHeightToParent();
