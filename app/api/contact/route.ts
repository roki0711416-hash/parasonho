import { NextResponse } from "next/server";

export const runtime = "nodejs";

const FIELD_LABELS: Record<string, string> = {
  name: "お名前",
  furigana: "フリガナ",
  age: "年齢",
  email: "メールアドレス",
  phone: "電話番号",
  line: "LINE ID",
  soccerHistory: "サッカー歴",
  currentTeam: "現在の所属チーム",
  period: "留学希望期間",
  schedule: "留学希望時期",
  position: "ポジション",
  portuguese: "ポルトガル語経験",
  passport: "パスポート所持",
  message: "相談内容",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "不正なリクエストです。" }, { status: 400 });
  }

  const get = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  const name = get("name");
  const email = get("email");
  const message = get("message");

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "お名前・メールアドレス・相談内容は必須です。" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO || "parasonho.jp@outlook.jp";
  const fromEmail = process.env.CONTACT_FROM || "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => {
      const value = get(key) || "（未入力）";
      return `<tr><th align="left" style="padding:8px;border-bottom:1px solid #e7f2dd;background:#f3faed;color:#0d6938;">${label}</th><td style="padding:8px;border-bottom:1px solid #e7f2dd;white-space:pre-wrap;">${escapeHtml(value)}</td></tr>`;
    })
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#123524;">
      <h2 style="color:#0d6938;">Para Sonho 無料相談フォーム送信</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${rows}</table>
    </div>
  `;

  const text = Object.entries(FIELD_LABELS)
    .map(([key, label]) => `${label}: ${get(key) || "（未入力）"}`)
    .join("\n");

  if (!apiKey) {
    // 開発時や未設定時はログ出力にとどめ、200で返す（フロントは成功扱い）
    console.warn("[contact] RESEND_API_KEY が未設定のため、送信内容をログに出力します。");
    console.log("[contact] To:", toEmail);
    console.log(text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Para Sonho <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `【Para Sonho】無料相談フォーム：${name} 様`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Resend error:", res.status, detail);
      return NextResponse.json(
        { message: "メール送信に失敗しました。時間をおいて再度お試しください。" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return NextResponse.json(
      { message: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
