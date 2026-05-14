"use client";

const periodOptions = ["1週間", "1ヶ月", "3ヶ月", "半年", "1年", "未定"];
const to = "parasonho.jp@outlook.jp";
const subject = "Para Sonho 無料相談";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : "";
    });

    const fields: Array<[string, string]> = [
      ["お名前", payload.name || ""],
      ["フリガナ", payload.furigana || ""],
      ["年齢", payload.age || ""],
      ["メールアドレス", payload.email || ""],
      ["電話番号", payload.phone || ""],
      ["LINE ID", payload.line || ""],
      ["サッカー歴", payload.soccerHistory || ""],
      ["現在の所属チーム", payload.currentTeam || ""],
      ["留学希望期間", payload.period || ""],
      ["留学希望時期", payload.schedule || ""],
      ["ポジション", payload.position || ""],
      ["ポルトガル語経験", payload.portuguese || ""],
      ["パスポート所持", payload.passport || ""],
      ["相談内容", payload.message || ""],
    ];

    const body = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  }

  const inputClass =
    "w-full rounded-xl border border-[#d4e7c8] bg-white px-4 py-3 text-sm text-[#123524] placeholder:text-[#9ab59f] focus:border-[#0d6938] focus:outline-none focus:ring-2 focus:ring-[#0d6938]/30";
  const labelClass = "mb-2 block text-sm font-semibold text-[#123524]";
  const requiredBadge = (
    <span className="ml-1 rounded bg-[#0d6938] px-1.5 py-0.5 text-[10px] font-bold text-white align-middle">
      必須
    </span>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl sm:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            お名前{requiredBadge}
          </label>
          <input id="name" name="name" type="text" required className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="furigana">
            フリガナ
          </label>
          <input id="furigana" name="furigana" type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="age">
            年齢
          </label>
          <input id="age" name="age" type="text" inputMode="numeric" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            メールアドレス{requiredBadge}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} autoComplete="email" />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            電話番号
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </div>
        <div>
          <label className={labelClass} htmlFor="line">
            LINE ID
          </label>
          <input id="line" name="line" type="text" className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="soccerHistory">
            サッカー歴
          </label>
          <input
            id="soccerHistory"
            name="soccerHistory"
            type="text"
            placeholder="例：小学校1年生から / 9年"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="currentTeam">
            現在の所属チーム
          </label>
          <input id="currentTeam" name="currentTeam" type="text" className={inputClass} />
        </div>

        <div>
          <label className={labelClass} htmlFor="period">
            留学希望期間
          </label>
          <select id="period" name="period" defaultValue="" className={inputClass}>
            <option value="" disabled>
              選択してください
            </option>
            {periodOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="schedule">
            留学希望時期
          </label>
          <input
            id="schedule"
            name="schedule"
            type="text"
            placeholder="例：2026年4月頃 / 高校卒業後"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="position">
            ポジション
          </label>
          <input id="position" name="position" type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="portuguese">
            ポルトガル語経験
          </label>
          <select id="portuguese" name="portuguese" defaultValue="" className={inputClass}>
            <option value="" disabled>
              選択してください
            </option>
            <option value="未経験">未経験</option>
            <option value="少し話せる">少し話せる</option>
            <option value="日常会話レベル">日常会話レベル</option>
            <option value="ビジネスレベル">ビジネスレベル</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="passport">
            パスポート所持
          </label>
          <div className="flex gap-6 pt-1 text-sm text-[#123524]">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="passport" value="所持している" className="accent-[#0d6938]" />
              所持している
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="passport" value="所持していない" className="accent-[#0d6938]" />
              所持していない
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="passport" value="申請中" className="accent-[#0d6938]" />
              申請中
            </label>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="message">
            相談内容{requiredBadge}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="留学の目的、不安な点、聞いてみたいことなどご自由にご記入ください。"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          className="w-full rounded-full bg-[#ffcd00] px-8 py-4 text-base font-extrabold text-[#0e512e] shadow-md transition hover:bg-[#ffd735] sm:w-auto sm:min-w-[280px]"
        >
          無料相談する
        </button>
        <p className="text-xs text-[#4f735f]">
          ご入力いただいた内容は、ご相談対応のみに使用いたします。
        </p>
      </div>
    </form>
  );
}
