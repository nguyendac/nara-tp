# NARA TRANSPORT — コーポレート下層ページ

## プロジェクト概要
- **名称**: 株式会社NARA TRANSPORT コーポレートサイト 下層ページ（6ページ）
- **目的**: 実サイト（https://nara-tp.co.jp/）の下層ページを、トップページのトンマナ（ブランドグリーン × 山吹イエロー、Noto Sans JP + Roboto、英大文字見出し＋和文サブ）に合わせてリデザイン・実装する
- **出典**: Genspark Design ハンドオフ `designer2-ea23b6cc-3e03-460d-9c7b-bc7da4647156`（High-fidelity）
- **構成**: Hono + Cloudflare Pages。サーバーサイドJSXでHTMLを生成する静的サイト

## 完成済みの機能

### ページ（6ページ）
| パス | ページ | 主なセクション |
|---|---|---|
| `/company/` | 会社概要 | Hero / 01 MESSAGE / 02 PROFILE / STATS / 03 HISTORY / 04 LOCATIONS / CTA |
| `/business/` | 物流業（事業内容） | Hero / Intro / 5列目次 / 01〜05の事業 / Bridge帯 / 06 OUR COMMITMENT / CTA |
| `/service/` | サービス業 | Hero / Intro / 4列目次 / 01〜04のサービス（02・04はdark） / CTA |
| `/bbt/` | 架装業（bbt） | Hero / KV写真 / 01 WHY bbt / 02 FACTORY / 03 FLOW / CTA（3列カード） |
| `/agamarino/` | 倉庫保管業 | Hero / Intro / 倉庫選択 / 01 アガマリノ / 02 リンクウ / 03 比較表 / 電話CTA |
| `/transporter/` | 車両紹介 | Hero / Intro / 01 LINE UP（13車種・タブ絞り込み） / 紺の帯 / 02 IN-HOUSE PIT / CTA |

`/` は `/company/` へ 302 リダイレクト（トップページは本件の対象外のため）。

### 共通コンポーネント
- **Header**（`src/components/Header.tsx`）— sticky・高さ80px・`backdrop-filter`、8項目のナビ、hover時の黄色2pxライン（`scaleX`）、現在ページに `.active` と `aria-current="page"`、「お問い合わせ」は緑ボタン。
  実サイトのテーマ（`theme_naraunso_2025`）のDOM構造を踏襲している：
  - `.header__main--nav` の**直下**に `ul` を置く（CSSが `.header__main--nav > ul` の直子セレクタのため、間に要素を挟めない）。セマンティクスは `.header__main--nav` 自体を `<nav>` にして担保
  - ロゴは `picture` 2枚構成（通常ロゴ／ドロワー展開時の白ロゴ `logo-w.webp`）
  - ハンバーガーは `hamburger--squeeze`（`.hamburger-box > .hamburger-inner` + 疑似要素の3本線）
- **Drawer**（`.nav-bar-menu`）— 実サイトに準拠し、`<header>` の**兄弟**として配置。右から `translateX(100%)→0` でスライドイン。PCは2列（左は装飾画像 `nav-bg.webp`）、780px以下は1列。項目はフッターと共有（`DRAWER_NAV_LEFT` / `DRAWER_NAV_RIGHT`）
- **Footer**（`src/components/Footer.tsx`）— 実サイトのテーマCSS値を再現（`#282828` / 罫線 `#404040` / サブ文字 `#999`）。拠点5件・3ブロックのナビ・SNS・Ecoparkバナー
- **SvcIndex**（`src/components/SvcIndex.tsx`）— ページ内目次（事業内容5列／サービス4列）。列数は項目数から算出し、CSS変数 `--svc-index-cols` で渡す。ページ側CSSで列数を指定する運用は指定漏れで1列に崩れるため廃止した
- **Hero / SecHead / Cta**（`src/components/Hero.tsx`）— ヒーローは写真を使わずCSSのみでマテリアル素材を構成（深緑グラデ＋織り目＋`feTurbulence`ノイズ＋`skewX`プレート＋リベット＋ヴィネット＋下端アクセントバー）

### インタラクション（`public/static/js/app.js`、素のJS）
1. **ハンバーガー + ドロワー** — 960px以下。実サイトの `custom.js`（jQuery）と同じクラス運用を素のJSで再現：`.hamburger→is-active` / `.nav-bar-menu→is_active` / `.header→is_active` / `body→is_active`。`aria-expanded` / `aria-hidden` 連動、リンククリック／Escape／961px以上へのリサイズで閉じる
2. **ギャラリー切替** — 倉庫保管業・架装業。サムネイルクリックで .16s のフェード切替、`aria-pressed` 更新
3. **車両タブ絞り込み** — `data-c` による絞り込みと件数表示の更新、`aria-selected` 連動

### デザイン忠実度
- 色・タイポ・余白・ホバーはハンドオフの最終値をそのまま採用（`border-radius` なし、影なし）
- コンテナ：`max-width:1240px; padding:0 40px`（フッターのみ `1230px / 15px`）
- ブレークポイント：960px（1列化・ハンバーガー）、780px（フッター）、600px（車両グリッド1列）
- `prefers-reduced-motion` に対応

## URL
- **ローカル**: http://localhost:3000/company/
- **サンドボックス**: https://3000-i6xln4nlpgujovg94k90u-ecea8f22.sandbox.novita.ai/company/
- **本番**: 未デプロイ

## データ構成
- **ストレージ**: なし（完全な静的サイト。D1 / KV / R2 は未使用）
- **データ定義**: `src/site.ts` にナビゲーション・拠点情報・外部リンクを集約。各ページの本文データは該当する `src/pages/*.tsx` 内の配列定数
- **画像**: `public/static/img/` に48点（実サイト由来・クライアント提供・AI生成）

## ディレクトリ構成
```
webapp/
├── src/
│   ├── index.tsx              # ルーティング（6ページ + リダイレクト）
│   ├── renderer.tsx           # 共通レイアウト（head / Header / main / Footer）
│   ├── site.ts                # ナビ・拠点・外部リンクの定義
│   ├── components/
│   │   ├── Header.tsx         # ヘッダー + ドロワー（nav-bar-menu）
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx           # Hero / SecHead / Cta
│   │   └── SvcIndex.tsx       # ページ内目次（列数は項目数から自動）
│   └── pages/
│       ├── company.tsx  business.tsx  service.tsx
│       └── bodywork.tsx warehouse.tsx transporter.tsx
└── public/static/
    ├── css/  base.css（共通）+ 各ページ固有CSS 6本
    ├── js/   app.js
    └── img/  画像48点
```

CSSは共通部分（トークン・ヘッダー・ヒーロー・セクション見出し・Intro・目次・Service Row・ギャラリー・CTA・フッター）を `base.css` に集約し、各ページには固有スタイルのみを置いている。

## 利用方法（開発）
```bash
cd /home/user/webapp
npm run build                      # ビルド
pm2 start ecosystem.config.cjs     # 起動（ポート3000）
curl http://localhost:3000/company/
pm2 logs webapp --nostream         # ログ確認
```

## 未実装・申し送り事項

### ページ
- **トップページ**（`/`）— 本件の対象外。現状は `/company/` へリダイレクト
- **採用情報**（`/recruit/`）・**お問い合わせ**（`/contact/`）— ヘッダー／フッターからリンクしているが、ページ自体は未実装

### ハンドオフからの変更点
- **STATS の数値** — ハンドオフでは仮値（車両180台、倉庫32k㎡など）だったため、確定値のみ（創業1952年／資本金5,000万円／5拠点／13車種）に差し替えた
- **沿革** — ハンドオフの1972年以降は仮の内容だったため削除し、確定している創業（1952）・設立（1963）・リンクウ倉庫開設（2023）の3件のみを掲載
- **認証・取り組み（CERTIFICATIONS）** — 全4項目が仮の内容だったためセクションごと削除
- **許認可** — 未確認だった「倉庫業登録／産業廃棄物収集運搬業許可」を削除し、確定している「一般区域貨物自動車運送業（広陸自免第484号）」のみ掲載
- **主要取引先** — 実サイトに18社の掲載があるが、社名リストがハンドオフに含まれていないため未実装（フッターの `#clients` リンクは現状リンク切れ）
- **ページ内ID** — 事業内容のアンカーを、実サイトのフッターリンクに合わせて `#s01〜05` から `#cell01〜05` に統一
- **YouTube** — `@naratrans` から実サイトの `/@ナラトランスポート`（URLエンコード）に戻した
- **採用情報のURL** — ハンドオフの `/recruit/` は実サイトでは404。実URLの日本語スラッグ `/リクルートトップ/`（URLエンコード）に修正
- **フッターのナビ** — nav-right に「架装業」を追加（ヘッダーとの整合）。nav-left の見出しは実サイトどおり「事業内容」「サービス」のまま

### 要確認（クライアント確認が必要）
- **AI生成画像** — `biz-heavy-gen2.jpg` / `biz-install-gen.jpg` / `biz-general-gen2.jpg` / `svc-01.jpg` / `svc-02.jpg` / `svc-04-nomask.jpg`。公開前に確認が必要（クレーン・フォークリフトの文字崩れ、実物と異なるNARAロゴ、HINOのマーク等の既知の問題あり）
- **`svc-03-office.jpg`** — 自社写真をAIで加工したもの。写っている方の顔をご本人に確認いただく必要あり
- **`heavy-truck.jpg`** — 中国新聞の記事写真を会社概要のCTA背景に使用。自社写真への差し替えを推奨
- **車両の分類タグ**（TRAILER / LARGE / MEDIUM / SMALL / SPECIAL）— 車名から仮に設定したもの
- **画像の解像度** — `bbt/g1〜g4.webp`（456×305）、`tr/pit1-2.jpg`（410×270）は小さいため、大きいデータがあれば差し替えを推奨

## 推奨する次のステップ
1. 上記「要確認」項目のクライアント確認と、確認後の画像差し替え
2. 主要取引先18社の社名リストを受領し、会社概要にセクションを追加（`#clients`）
3. トップページ・採用情報・お問い合わせページの実装
4. 画像の最適化（WebF変換・リサイズ・`srcset` 対応）とパフォーマンス計測
5. 実サイト（WordPress テーマ `theme_naraunso_2025`）への移植、または本プロジェクトのままデプロイするかの方針決定
6. OGP画像・構造化データ（Organization / LocalBusiness）の追加

## デプロイ
- **プラットフォーム**: Cloudflare Pages（未デプロイ）
- **ステータス**: ❌ 未デプロイ（ローカル動作確認済み）
- **技術スタック**: Hono 4 + TypeScript（hono/jsx）+ Vite 8 + Wrangler 4。CSSは自前（CSSフレームワーク不使用）、アイコンは Font Awesome 6.4（CDN）、フォントは Google Fonts
- **最終更新**: 2026-10-21
