import { NextResponse, type NextRequest } from "next/server";

/**
 * 「準備中（Coming Soon）」モードの判定。
 *
 * 切り替え方法:
 *  - Vercel の環境変数 `COMING_SOON` で制御します。
 *      COMING_SOON = "true"  → 強制的に準備中ページを表示
 *      COMING_SOON = "false" → 通常サイトを公開
 *  - 環境変数を設定していない場合は「本番環境のみ準備中」になります。
 *    （ローカル開発・プレビューでは通常サイトが表示されます）
 *
 * ▼ 公開するとき
 *    Vercel のプロジェクト設定 → Environment Variables で
 *    `COMING_SOON` を `false` にして再デプロイしてください。
 */
function isComingSoon(): boolean {
  const explicit = process.env.COMING_SOON;
  if (explicit === "true") return true;
  if (explicit === "false") return false;
  // 環境変数が未設定なら、本番環境だけ準備中にする
  return process.env.VERCEL_ENV === "production";
}

export function middleware(request: NextRequest) {
  if (!isComingSoon()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // 準備中でもアクセスを許可するパス
  //  - /coming-soon 自体
  //  - 検索エンジン所有権確認用の Google 認証ファイル
  if (
    pathname === "/coming-soon" ||
    pathname.startsWith("/google") // google5c68ac54ffba0d27.html など
  ) {
    return NextResponse.next();
  }

  // それ以外はすべて準備中ページを表示（URL は変えずに中身だけ差し替え）
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  // 静的アセット・画像・各種ファイルは対象外にする
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|txt|xml|json|html|woff|woff2|ttf)$).*)",
  ],
};
