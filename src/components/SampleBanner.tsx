import Link from "next/link";

export default function SampleBanner({
  planName,
  sticky = true,
}: {
  planName: string;
  sticky?: boolean;
}) {
  return (
    <div
      className={`${
        sticky ? "sticky top-0 z-50" : ""
      } flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-brand-900 px-4 py-2.5 text-center text-xs text-background`}
    >
      <span className="font-semibold text-gold">制作イメージサンプル</span>
      <span className="text-background/50">|</span>
      <span>
        {planName}プランで制作した場合の見本です。実在の企業ではありません。
      </span>
      <Link href="/#pricing" className="underline underline-offset-2 hover:text-gold">
        ← ポートフォリオに戻る
      </Link>
    </div>
  );
}
