"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const periodOptions = ["1週間", "1ヶ月", "3ヶ月", "半年", "1年", "未定"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = typeof value === "string" ? value : "";
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "送信に失敗しました。");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0d6938] text-2xl text-white">
          ✓
        </div>
        <h3 className="text-xl font-extrabold text-[#0d6938] sm:text-2xl">
          送信ありがとうございます。
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#2d5d43] sm:text-base">
          内容を確認後、担当者よりご連絡いたします。
        </p>
      </div>
    );
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
      noValidate
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

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage || "送信に失敗しました。時間をおいて再度お試しください。"}
        </p>
      )}

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-[#ffcd00] px-8 py-4 text-base font-extrabold text-[#0e512e] shadow-md transition hover:bg-[#ffd735] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[280px]"
        >
          {status === "submitting" ? "送信中..." : "無料相談する"}
        </button>
        <p className="text-xs text-[#4f735f]">
          ご入力いただいた内容は、ご相談対応のみに使用いたします。
        </p>
      </div>
    </form>
  );
}
