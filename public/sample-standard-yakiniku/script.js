// ====================================================================
// スタンダードプランの制作例②（架空の焼肉店）全ページ共通 JavaScript
// ====================================================================
// index.html / menu.html / staff.html / voice.html / access.html の
// 5ファイルすべてから、このファイルを共通で読み込んでいます。存在しない
// 要素は判定でスキップするので、どのページでも安全に使えます。
// ====================================================================

// ページの読み込みが完了したらフェードインさせる（ページ遷移の一体感を出す）
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loaded');
});

// ヘッダー: スクロールで影を強める
const header = document.getElementById('siteHeader');
if (header) {
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScrollHeader();
  window.addEventListener('scroll', onScrollHeader, { passive: true });
}

// モバイルメニューの開閉
const nav = document.getElementById('siteNav');
const menuToggle = document.getElementById('menuToggle');
if (nav && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// カテゴリタブ絞り込み（メニューページ）
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

// お客様の声: 自動切り替えカルーセル（お客様の声ページ）
const voiceSlides = document.querySelectorAll('.voice-slide');
const voiceDotsWrap = document.getElementById('voiceDots');
if (voiceSlides.length > 1 && voiceDotsWrap) {
  let current = 0;
  const dots = [];
  voiceSlides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'voice-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', `${i + 1}件目の口コミを表示`);
    dot.addEventListener('click', () => showVoice(i));
    voiceDotsWrap.appendChild(dot);
    dots.push(dot);
  });

  function showVoice(index) {
    voiceSlides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = index;
    voiceSlides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  // 5秒ごとに自動で次の口コミへ切り替える
  let autoplay = setInterval(() => showVoice((current + 1) % voiceSlides.length), 5000);
  voiceDotsWrap.addEventListener('click', () => {
    clearInterval(autoplay);
    autoplay = setInterval(() => showVoice((current + 1) % voiceSlides.length), 5000);
  });
}

// 公式LINEの友だち追加ボタン（プレースホルダー）
document.querySelectorAll('.btn-line').forEach((button) => {
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

// iframeの高さを自動調整（ページ遷移・カルーセル切り替えのたびに再送）
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
