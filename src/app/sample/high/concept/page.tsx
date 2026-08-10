import type { Metadata } from "next";
import { grain } from "../theme";

export const metadata: Metadata = {
  title: "コンセプト｜Atelier Noir（サンプル）",
};

export default function HighConceptPage() {
  return (
    <>
      <section className="px-8 pb-6 pt-20 text-center sm:pt-24">
        <p className="text-xs tracking-[0.3em] text-[#c9a24b]">CONCEPT</p>
        <h1 className="mx-auto mt-6 max-w-lg font-serif text-3xl leading-[1.8] sm:text-4xl">
          「足す」のではなく、
          <br />
          「削る」設計を。
        </h1>
      </section>

      <section className="mx-auto grid max-w-4xl gap-10 px-8 py-16 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:py-20">
        <div
          style={{ backgroundImage: grain }}
          className="aspect-[4/5] w-full"
        />
        <div className="space-y-6 text-sm leading-loose text-[#ece7dd]/75">
          <p>
            住まいや店舗の設計というと、
            <br />
            機能や設備を「足していく」作業だと考えられがちです。
            <br />
            私たちはその逆で、まず本当に必要なものだけを見極め、
            <br />
            不要なものを削ぎ落とすところから空間づくりを始めます。
          </p>
          <p>
            素材の質感、光の入り方、家具と余白のバランス。
            <br />
            一つひとつの判断に理由を持たせることで、
            <br />
            10年後も色褪せない空間をお届けします。
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-8 py-20 text-center">
        <span
          aria-hidden
          className="mx-auto block font-serif text-6xl text-[#c9a24b]/20"
        >
          &ldquo;
        </span>
        <p className="mx-auto mt-2 max-w-lg font-serif text-xl leading-[2] sm:text-2xl">
          本当に必要なものだけを残した空間には、
          <br />
          使う人の暮らしがそのまま映し出されます。
        </p>
      </section>
    </>
  );
}
