# OrangeStudio HP

OrangeStudio のオフィシャルランディングページ。Next.js (App Router) + Tailwind CSS + Notion API。

## 構成

- フレームワーク: Next.js 16 (App Router, src ディレクトリ構成)
- スタイル: Tailwind CSS v4
- フォント: Noto Sans JP (next/font/google 経由)
- CMS: Notion API（プラン / 声 / お知らせ / FAQ の4データソース）
- レンダリング: Server Component + ISR (`revalidate = 60`)

## セットアップ

```powershell
npm.cmd install
```

## 環境変数

`.env.local` を作成し、Notion インテグレーションの API キーを設定します。

```
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Notion API キーの取得手順

1. <https://www.notion.so/my-integrations> にアクセスし、新しいインテグレーションを作成
2. 「内部インテグレーション」で作成し、`Internal Integration Token` をコピー
3. 連携対象の Notion データベース 4 つ（Plans / Voices / News / FAQs）の各ページで、右上「…」→「コネクションを追加」から作成したインテグレーションを接続
4. コピーしたトークンを `.env.local` の `NOTION_API_KEY` に貼り付け

> 環境変数が未設定でも、ビルド・起動は通ります。Notion 由来のセクションは「準備中」表示または非表示になります。

### Notion データソース ID

`src/lib/notion.ts` 内に定数として保持しています。

| セクション | data_source_id |
| --- | --- |
| Plans | `c855d9fc-886c-411f-9bba-8efab40349bf` |
| Voices | `8425fa6a-0109-452e-97b1-a16fd4ac3fbf` |
| News | `7057519a-bc2a-4ffb-b02d-cf6eadaaa2bf` |
| FAQs | `d8dbc408-473f-40ef-930f-c7b0b752ec2c` |

## 開発サーバー

```powershell
npm.cmd run dev
```

<http://localhost:3000> を開きます。

## ビルド

```powershell
npm.cmd run build
npm.cmd run start
```

## デプロイ（Vercel）

1. このリポジトリを GitHub にプッシュ
2. [Vercel](https://vercel.com/new) で「New Project」→ リポジトリを選択
3. 「Environment Variables」に `NOTION_API_KEY` を設定
4. デプロイを実行

設定変更後の再デプロイは Vercel ダッシュボードから「Redeploy」を実行します。

## ファイル構成

```
src/
  app/
    layout.tsx       # Noto Sans JP・lang="ja"
    page.tsx         # 全セクション統合（ISR: revalidate=60）
    globals.css      # デザイントークン
  components/
    sections/        # Hero/About/Approach/Plans/Flow/Voice/News/Faq/Contact/Footer
    ui/              # Reveal（フェードイン）/SectionHeader
  lib/notion.ts      # Notion API クライアント・4関数
  types/cms.ts       # Plan/Voice/News/FAQ
```

## Notion DB スキーマ

- **Plans**: `Name`(title) / `Price`(number, yen) / `PriceUnit`(select) / `Description`(rich_text) / `Target`(rich_text) / `Order`(number) / `Published`(checkbox)
- **Voices**: `Quote`(title) / `Author`(rich_text) / `Category`(select) / `Order`(number) / `Published`(checkbox)
- **News**: `Title`(title) / `Date`(date) / `Body`(rich_text) / `Published`(checkbox)
- **FAQs**: `Question`(title) / `Answer`(rich_text) / `Category`(select) / `Order`(number) / `Published`(checkbox)

`Published = true` のレコードのみ表示されます。
