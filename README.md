# ParaSonho / パラソーニョ

ブラジルでのサッカー留学を紹介する1ページLPです。  
目的は「無料相談」への導線づくりです。

## 使用技術

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## ローカル起動

```bash
npm install
npm run dev
```

http://localhost:3000 で表示できます。

## ビルド確認

```bash
npm run build
```

## GitHubへアップ

```bash
git add .
git commit -m "feat: ParaSonho LP"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Vercelで公開

1. Vercelにログイン
2. 「Add New Project」でこのGitHubリポジトリを選択
3. Framework Preset は `Next.js` のままDeploy

以上で公開できます。
