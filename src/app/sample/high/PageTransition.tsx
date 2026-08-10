"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// クリックした瞬間に中身は切り替わり、ごく短いフェードだけを添える控えめな演出。
// ナビゲーションをブロックする派手な演出は避ける。
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="sample-content-fade">
      {children}
    </div>
  );
}
