# 写真の入れ方ガイド（トップページ）

トップページは「写真が主役」のデザインです。
現在は**ブラジルカラーのプレースホルダー**が表示されており、
このフォルダに写真を置いて `app/page.tsx` の `src: undefined` を
`src: "/images/..."` に変えるだけで、本番に反映されます。

> 画像形式は `.jpg` / `.webp` 推奨。容量は1枚あたり 300KB〜1.5MB 程度が目安です。
> 縦長・横長は下記の推奨比率に合わせると、レイアウトが一番きれいに見えます。

---

## 1. ヒーロー（最上部の大写真）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| メイン写真 | `/images/hero/hero.jpg` | 横長 16:9（大きく印象的な1枚） |

`app/page.tsx` のヒーロー `<Photo src={undefined} ...>` を
`src="/images/hero/hero.jpg"` に変更してください。

## 2. 世界レベルを体験（3枚）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| 現地クラブの練習 | `/images/experience/training.jpg` | 縦長 3:4 |
| 公式戦・試合 | `/images/experience/match.jpg` | 縦長 3:4 |
| 遠征・スタジアム | `/images/experience/stadium.jpg` | 縦長 3:4 |

→ `experiencePhotos` 配列の `src` に設定。

## 3. 選ばれる理由（4枚）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| 世界レベルの環境 | `/images/reasons/reason-01.jpg` | 横長 16:10 |
| 現地クラブネットワーク | `/images/reasons/reason-02.jpg` | 横長 16:10 |
| 挑戦する機会 | `/images/reasons/reason-03.jpg` | 横長 16:10 |
| 安心サポート | `/images/reasons/reason-04.jpg` | 横長 16:10 |

→ `reasons` 配列の `src` に設定。

## 4. 留学生活（5枚）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| 寮・滞在 | `/images/life/dorm.jpg` | 横長（大）16:10 |
| 食事 | `/images/life/food.jpg` | 正方形 1:1 |
| 学校・語学 | `/images/life/school.jpg` | 正方形 1:1 |
| 移動 | `/images/life/transport.jpg` | 正方形 1:1 |
| 日常生活 | `/images/life/daily.jpg` | 正方形 1:1 |

→ `lifeItems` 配列の `src` に設定。

## 5. 参加選手・卒業生（3枚〜）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| 参加選手 A | `/images/players/player-01.jpg` | 縦長 4:5 |
| 参加選手 B | `/images/players/player-02.jpg` | 縦長 4:5 |
| 参加選手 C | `/images/players/player-03.jpg` | 縦長 4:5 |

→ `players` 配列の `src`・`name`・`meta`・`comment` を実際の選手情報に更新。

## 6. ギャラリー（12枚以上）

`/images/gallery/01.jpg` 〜 `/images/gallery/12.jpg`

→ `galleryPhotos` 配列の `src` に設定。縦横バラバラでもOK（Pinterest風に自動配置されます）。

## 7. CTA（最下部・スタジアム背景）

| 用途 | 推奨パス | 推奨比率 |
|------|----------|----------|
| スタジアム | `/images/cta/stadium.jpg` | 横長 16:9（観客やピッチが映える1枚） |

---

### 反映手順まとめ
1. 上記パスに写真を保存
2. `app/page.tsx` の該当する `src: undefined` を `src: "/images/..."` に変更
3. 保存すれば自動で写真に差し替わります（プレースホルダーは消えます）
