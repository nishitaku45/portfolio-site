"use client";

import { useEffect, useState } from "react";

const voices = [
  {
    lines: ["スタッフさんの提案が的確で、", "いつも安心して任せられます。"],
    meta: "40代・女性",
  },
  {
    lines: ["希望をしっかり聞いてもらえて、", "仕上がりも大満足でした。"],
    meta: "20代・女性",
  },
  {
    lines: ["お店の雰囲気が明るくて、", "通うのが楽しみになりました。"],
    meta: "30代・女性",
  },
  {
    lines: ["個室でゆっくり過ごせるので、", "毎回リフレッシュできます。"],
    meta: "50代・女性",
  },
];

export default function VoiceCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % voices.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="relative mx-auto h-64 max-w-2xl sm:h-56">
        {voices.map((voice, i) => (
          <div
            key={voice.lines[0]}
            aria-hidden={i !== index}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-700 ease-out ${
              i === index
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <p className="font-serif text-2xl leading-[1.9] text-[#f2e8e2] sm:text-3xl">
              {voice.lines.map((line, lineIndex) => (
                <span key={line}>
                  {lineIndex > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-6 text-[11px] tracking-[0.25em] text-[#e8d5ce]/60">
              {voice.meta}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {voices.map((voice, i) => (
          <button
            key={voice.lines[0]}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}件目の声を表示`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-[#e8d5ce]/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
