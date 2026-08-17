import type { Metadata } from "next";
import { grain } from "../theme";

export const metadata: Metadata = {
  title: "スタッフ紹介｜Sunny Side Hair（サンプル）",
};

const staff = [
  {
    name: "佐藤 美咲",
    role: "店長 / シニアスタイリスト",
    quoteLines: [
      "髪の悩みは十人十色。",
      "「なんとなく」ではなく、理由を説明できる提案を大切にしています。",
    ],
  },
  {
    name: "田中 陸",
    role: "スタイリスト",
    quoteLines: [
      "メンズのショートスタイルが得意です。",
      "朝のセットが楽になる骨格に合わせたカットを。",
    ],
  },
  {
    name: "鈴木 陽菜",
    role: "アシスタント / ヘッドスパ担当",
    quoteLines: [
      "頭皮のコンディションから整える施術が得意です。",
      "リラックスできる時間をお届けします。",
    ],
  },
];

const looks = [{ label: "Natural Bob" }, { label: "Airy Perm" }];

// STAFF：写真パネルに白い余白で額装したHOMEに対し、こちらは断ち落とし
// （フルブリード）の写真＋左右交互レイアウトの雑誌インタビュー風に。
// 同じ「額装フォトパネル」を繰り返さないための意図的な使い分け。
export default function StandardStaffPage() {
  return (
    <>
      <section className="px-6 py-20 sm:py-24">
        <p className="text-center text-[11px] tracking-[0.3em] text-[#6b1220]">
          STAFF
        </p>
        <div className="mx-auto mt-14 max-w-3xl space-y-20">
          {staff.map((member, index) => (
            <div
              key={member.name}
              className="grid items-center gap-8 sm:grid-cols-2"
            >
              <div
                style={{ backgroundImage: grain }}
                className={`aspect-[4/3] w-full ${
                  index % 2 === 1 ? "sm:order-2" : ""
                }`}
              />
              <div>
                <p className="font-[family-name:var(--font-editorial-jp)] text-2xl">{member.name}</p>
                <p className="mt-1 text-xs tracking-wide text-[#7d6a5c]">
                  {member.role}
                </p>
                <p className="mt-5 border-l border-gold/50 pl-4 text-sm leading-loose text-[#7d6a5c]">
                  {member.quoteLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e5d4c3]">
        <p className="pt-16 text-center text-[11px] tracking-[0.3em] text-[#6b1220]">
          SIGNATURE LOOK
        </p>
        <div className="mt-8 grid sm:grid-cols-2">
          {looks.map((look) => (
            <div
              key={look.label}
              style={{ backgroundImage: grain }}
              className="flex aspect-[16/10] items-end p-8"
            >
              <span className="font-[family-name:var(--font-editorial)] text-xl text-white drop-shadow">
                {look.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
