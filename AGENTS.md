# AGENTS.md

## Cursor Cloud specific instructions

### プロダクト概要

ParaSonho（パラソーニョ）は、ブラジルでのサッカー留学を紹介する Next.js 16 のマーケティングサイト（単一アプリ）です。データベースや Docker は不要です。

### 必須サービス

| サービス | コマンド | URL |
|---------|---------|-----|
| Next.js dev server | `npm run dev` | http://localhost:3000 |

### 標準コマンド

README.md を参照。主なコマンド:

- 依存関係: `npm install`
- 開発サーバー: `npm run dev`
- 本番ビルド: `npm run build`
- 本番起動: `npm run start`
- Lint: `npm run lint`

### テスト

自動テスト（Jest / Playwright / Vitest）は未設定です。

### 環境変数（任意）

- `COMING_SOON=true` — ミドルウェアが全トラフィックを `/coming-soon` にリライト
- `RESEND_API_KEY` — `/api/contact` のメール送信（未設定時はコンソールログのみ、`delivered: false` を返す）
- `CONTACT_TO` / `CONTACT_FROM` — 問い合わせメールの宛先・送信元

### 注意事項

- 問い合わせフォーム UI（`ContactForm.tsx`）は実装済みだが、現状どのページにもマウントされていない。API は `POST /api/contact` で直接テスト可能。
- `npm run lint` は警告（未使用変数など）が出ることがあるが、エラー 0 なら CI 相当として通過。
- Next.js 16 では `middleware.ts` が deprecated 警告を出す（proxy への移行推奨）。動作には影響なし。
