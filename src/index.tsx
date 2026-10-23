import { Hono } from 'hono'
import { renderer } from './renderer'
import { PATHS } from './site'
import { CompanyPage } from './pages/company'
import { BusinessPage } from './pages/business'
import { ServicePage } from './pages/service'
import { BodyworkPage } from './pages/bodywork'
import { WarehousePage } from './pages/warehouse'
import { TransporterPage } from './pages/transporter'

const app = new Hono()

app.use(renderer)

/** 会社概要 */
app.get(PATHS.company, (c) =>
  c.render(<CompanyPage />, {
    title: '会社概要',
    description:
      '株式会社NARA TRANSPORTの会社概要。代表メッセージ、会社情報、沿革、全国5拠点のご案内。広島県呉市で昭和27年創業、危険物・重量物輸送を得意とする総合物流企業です。',
    current: 'company',
    css: 'company.css',
    mainClass: 'company-main'
  })
)

/** 物流業（事業内容） */
app.get(PATHS.business, (c) =>
  c.render(<BusinessPage />, {
    title: '物流業',
    description:
      '株式会社NARA TRANSPORTの事業内容。危険物輸送・重量物輸送・重量物機械据付・一般貨物・倉庫保管の5事業を、呉市で培った70年以上のノウハウでご提供します。',
    current: 'business',
    css: 'business.css',
    mainClass: 'business-main'
  })
)

/** サービス業 */
app.get(PATHS.service, (c) =>
  c.render(<ServicePage />, {
    title: 'サービス業',
    description:
      '株式会社NARA TRANSPORTのサービス。ロジスティック、付加価値物流（3PL）、情報化（SCM）、保険代理サービスで、お客様の経営戦略の一歩先を見据えた物流をご提案します。',
    current: 'service',
    css: 'service.css',
    mainClass: 'service-main'
  })
)

/** 架装業（bbt / big boy toy's） */
app.get(PATHS.bodywork, (c) =>
  c.render(<BodyworkPage />, {
    title: '架装業 bbt',
    description:
      'bbt（big boy toy’s）は、株式会社NARA TRANSPORTの架装事業です。トラック購入から架装・塗装までワンストップで対応。利益が生まれる大型架装車をご提案します。',
    current: 'bodywork',
    css: 'bodywork.css',
    mainClass: 'bodywork-main'
  })
)

/** 倉庫保管業（アガマリノ倉庫・リンクウ倉庫） */
app.get(PATHS.warehouse, (c) =>
  c.render(<WarehousePage />, {
    title: '倉庫保管業',
    description:
      '株式会社NARA TRANSPORTの倉庫保管業。天井クレーン完備の重量物向け「アガマリノ倉庫」（呉市）と、温度・湿度を24時間クラウド管理する温調倉庫「リンクウ倉庫」（三原市）をご用意しています。',
    current: 'warehouse',
    css: 'warehouse.css',
    mainClass: 'warehouse-main'
  })
)

/** 車両紹介 */
app.get(PATHS.transporter, (c) =>
  c.render(<TransporterPage />, {
    title: '車両紹介',
    description:
      '株式会社NARA TRANSPORTの保有車両13車種をご紹介。16輪低床トレーラーから2t幌車、原木車・木材チップ車まで。すべての車両は自社ピットで整備しています。',
    current: 'transporter',
    css: 'transporter.css',
    mainClass: 'transporter-main'
  })
)

/** トップページは未実装のため、今回の対象である会社概要へ誘導する */
app.get('/', (c) => c.redirect(PATHS.company, 302))

export default app
