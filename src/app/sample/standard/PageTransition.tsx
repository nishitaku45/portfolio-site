"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// ページ遷移のたびに軽くフェード＋わずかに沈み込む程度の控えめな演出。
// 以前の「カーテンが上がる」演出は毎回1秒以上ブロックしてしまい過剰だったため、
// クリックした瞬間に中身が切り替わり、動きは装飾程度に留める方針に変更。
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="sample-content-fade">
      {children}
    </div>
  );
}
