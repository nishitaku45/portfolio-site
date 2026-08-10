"use client";

// ============================================================================
// AutoHeightIframe
// ============================================================================
//
// 「素のHTML/CSS/JS」で作られたページ（public/ 配下）を <iframe> で
// 画面に埋め込むための共通部品です。
//
// iframeは中身の高さを自動では教えてくれないため、何もしないと
// 決め打ちの高さになり、内容量によって余白が出たりスクロールバーが
// 出たりしてしまいます。そこで、埋め込まれる側のHTML(script.js)から
//   window.parent.postMessage({ type: "iframe-auto-height", height }, "*")
// という形でメッセージを送ってもらい、それを受け取ってiframeの高さを
// ぴったり合わせています。
//
// このコンポーネントを使っている場所:
//   - Services.tsx      … public/services/index.html を埋め込み
//   - sample/light/page.tsx … public/sample-light/index.html を埋め込み
//
// 新しく「素のHTML/CSS/JSページを埋め込みたい」場合は、埋め込み先の
// script.js側にも同じ形式でpostMessageを送る処理を追加してください
// （既存の public/services/script.js や public/sample-light/script.js の
// notifyHeightToParent() 関数がそのままお手本になります）。
// ============================================================================

import { useEffect, useRef, useState } from "react";

export default function AutoHeightIframe({
  src,
  title,
  initialHeight = 640,
}: {
  src: string;
  title: string;
  /** iframeの中身が読み込まれる前に一瞬表示される仮の高さ(px) */
  initialHeight?: number;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // 自分が埋め込んでいるiframe以外から来たメッセージは無視する（安全のため）
      if (event.source !== iframeRef.current?.contentWindow) return;

      const data = event.data as { type?: string; height?: number };
      if (data?.type === "iframe-auto-height" && typeof data.height === "number") {
        setHeight(data.height);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      style={{
        display: "block",
        width: "100%",
        border: "none",
        height,
      }}
    />
  );
}
