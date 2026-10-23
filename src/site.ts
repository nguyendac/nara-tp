/**
 * サイト共通のデータ定義
 * ヘッダー／フッターのナビゲーション、拠点情報、外部リンクをここに集約する。
 */

export type PageKey =
  | 'company'
  | 'business'
  | 'service'
  | 'bodywork'
  | 'warehouse'
  | 'transporter'

/** 実サイトのURL構成に合わせたパス */
export const PATHS = {
  home: '/',
  company: '/company/',
  business: '/business/',
  service: '/service/',
  bodywork: '/bbt/',
  warehouse: '/agamarino/',
  transporter: '/transporter/',
  // 実サイトは日本語スラッグ（/リクルートトップ/）。/recruit/ は 404 のため実URLに合わせる
  recruit: '/%E3%83%AA%E3%82%AF%E3%83%AB%E3%83%BC%E3%83%88%E3%83%88%E3%83%83%E3%83%97/',
  contact: '/contact/'
} as const

/** 外部リンク（実サイトの値） */
export const EXTERNAL = {
  instagram: 'https://www.instagram.com/naratrans/',
  // 実サイトは /@ナラトランスポート（URLエンコード）
  youtube: 'https://www.youtube.com/@%E3%83%8A%E3%83%A9%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88',
  line: 'https://lin.ee/AspQyBw',
  ecopark: 'https://rapidjapan.myshopify.com/',
  ecoparkLamp: 'https://rapidjapan.myshopify.com/pages/lamp',
  bbtPdf: 'http://nara-tp.co.jp/wp-content/uploads/2025/05/NaraTrans_bbt.pdf',
  bbtEstimate: 'https://forms.gle/zBa5oH4BANDSpPK68'
} as const

/** ヘッダーのナビゲーション（8項目） */
export const HEADER_NAV: { key: PageKey | 'recruit' | 'contact'; label: string; href: string }[] = [
  { key: 'company', label: '会社案内', href: PATHS.company },
  { key: 'business', label: '物流業', href: PATHS.business },
  { key: 'service', label: 'サービス業', href: PATHS.service },
  { key: 'bodywork', label: '架装業', href: PATHS.bodywork },
  { key: 'warehouse', label: '倉庫保管業', href: PATHS.warehouse },
  { key: 'transporter', label: '車両紹介', href: PATHS.transporter },
  { key: 'recruit', label: '採用情報', href: PATHS.recruit },
  { key: 'contact', label: 'お問い合わせ', href: PATHS.contact }
]

/** フッター左の拠点情報 */
export const OFFICES = [
  {
    name: '本社',
    map: 'https://maps.app.goo.gl/Q2wiLbHqzagQSMpR8',
    lines: [
      '〒737-0134 広島県呉市広多賀谷2-6-20',
      'TEL. 0823-73-3355 (業務部) /',
      '0823-73-3445 (営業企画部・総務部)',
      'FAX. 0823-73-4446'
    ]
  },
  {
    name: '東京営業所',
    map: 'https://maps.app.goo.gl/EGshJAJ5GHq47PwF7',
    lines: ['〒144-0034 東京都大田区西糀谷3丁目8-15-101', 'TEL. 03-6423-7171 / FAX. 03-6423-7131']
  },
  {
    name: '横浜営業所',
    map: 'https://maps.app.goo.gl/UuqwpLHDNsBVsp728',
    lines: ['〒237-0062 神奈川県横須賀市浦郷町5目2931-90', 'TEL. 04-6845-6417 / FAX. 04-6845-6418']
  },
  {
    name: '大阪営業所',
    map: 'https://maps.app.goo.gl/ZwghGf8DUYDe2ZKB9',
    lines: ['〒559-0032 大阪府大阪市住之江区南港南5丁目4-152', 'TEL.06-6115-8067 / FAX.06-6115-8102']
  },
  {
    name: '福岡営業所',
    map: 'https://maps.app.goo.gl/tkGi8F3dk6i4uuHy9',
    lines: ['〒811-2405 福岡県糟屋郡篠栗町篠栗3757番1', 'TEL. 092-692-8161 / FAX. 092-692-8079']
  }
]

/**
 * フッター右・nav-left の3ブロック
 * 実サイトではドロワー（nav.nav-bar-menu）とフッターが同じ構造・同じ項目を共有しており、
 * ドロワー側だけ見出し h3 がリンクになっている（href を併記しているのはそのため）。
 */
export const FOOTER_NAV_LEFT = [
  {
    heading: '会社案内',
    href: PATHS.company,
    items: [
      { label: 'ご挨拶', href: `${PATHS.company}#message` },
      { label: '会社概要', href: `${PATHS.company}#profile` },
      { label: '主要取引先', href: `${PATHS.company}#clients` }
    ]
  },
  {
    heading: '事業内容',
    href: PATHS.business,
    items: [
      { label: '危険物輸送', href: `${PATHS.business}#cell01` },
      { label: '重量物輸送', href: `${PATHS.business}#cell02` },
      { label: '重量物機械据付', href: `${PATHS.business}#cell03` },
      { label: '一般貨物', href: `${PATHS.business}#cell04` },
      { label: '倉庫保管', href: `${PATHS.business}#cell05` }
    ]
  },
  {
    heading: 'サービス',
    href: PATHS.service,
    items: [
      { label: 'ロジスティック', href: `${PATHS.service}#cell01` },
      { label: '付加価値物流', href: `${PATHS.service}#cell02` },
      { label: '情報化', href: `${PATHS.service}#cell03` },
      { label: '保険代理サービス', href: `${PATHS.service}#cell04` },
      { label: 'Ecopark', href: EXTERNAL.ecopark, external: true }
    ]
  }
]

/** フッター右・nav-right */
export const FOOTER_NAV_RIGHT = [
  { label: '架装業', href: PATHS.bodywork },
  { label: '倉庫保管業', href: PATHS.warehouse },
  { label: '車両紹介', href: PATHS.transporter },
  { label: '採用情報', href: PATHS.recruit },
  {
    label: 'お問い合わせ',
    href: PATHS.contact,
    children: [
      { label: 'LINEでお問い合わせ', href: EXTERNAL.line, external: true },
      { label: 'お問い合わせフォーム', href: PATHS.contact }
    ]
  }
]

/**
 * ドロワー（nav.nav-bar-menu）のナビゲーション
 * 実サイトではフッターと同じ項目を共有するため、定義を再利用する。
 * ドロワー側は実サイトどおり「架装業」を含まない（ヘッダーのみに存在）。
 */
export const DRAWER_NAV_LEFT = FOOTER_NAV_LEFT

export const DRAWER_NAV_RIGHT = FOOTER_NAV_RIGHT.filter((item) => item.href !== PATHS.bodywork)
