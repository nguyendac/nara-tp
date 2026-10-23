import type { FC } from 'hono/jsx'
import { Cta, Hero, SecHead } from '../components/Hero'
import { SvcIndex } from '../components/SvcIndex'
import { PATHS } from '../site'

type Svc = {
  id: string
  num: string
  en: string
  jpTitle: string
  enSub: string
  heading: FC
  catch: string
  body: string[]
  img: string
  imgPos?: string
  badge: string
  alt: string
  reverse?: boolean
}

/** 5事業。IDは実サイトのフッターリンクに合わせて #cell01〜05 */
const SERVICES: Svc[] = [
  {
    id: 'cell01',
    num: '01',
    en: 'HAZARDOUS',
    jpTitle: '危 険 物 輸 送',
    enSub: 'SAFETY FIRST',
    heading: () => <>保安第一の火薬・砲弾輸送</>,
    catch: '50年以上の実績が、当社の信頼の証です。',
    body: [
      '各種火薬類や防衛省向けの砲弾類の輸送で約50年以上の実績を有します。運行計画の作成から、運搬証明などの各種手続き、輸送ルートの各官公庁への事前届け出、そして運行確認・報告までを、自社一括管理のもと責任を持って行っており、多くのお客様から信頼をいただいています。',
      '「危険物取扱主任者」の資格を有した社員と、実績・経験ともに豊富なドライバーによる、高品質の保管・輸送サービス。「安全は社員教育から」という理念のもと、独自の乗務員教育カリキュラムで、目まぐるしく変わる環境変化にも対応できるハイレベルな安全教育を実施しています。'
    ],
    img: '/static/img/biz-hazard.jpg',
    badge: 'HAZARDOUS · 火薬類',
    alt: '火薬類輸送の様子'
  },
  {
    id: 'cell02',
    num: '02',
    en: 'HEAVY CARGO',
    jpTitle: '重 量 物 輸 送',
    enSub: '40 YEARS OF EXPERTISE',
    heading: () => (
      <>
        木材製品から
        <br />
        プラント構造物まで
      </>
    ),
    catch: '大型重量物の輸送で40年以上の実績。',
    body: [
      '鉄鋼や重機、プラント、製材業など製造業の町として発展してきた呉市に生まれ育った当社は、地元企業様とのお取引を通じて、鋼材や原木、木材製品等の重量物輸送を数多く手がけてきました。',
      '木材等の資材から精密機械まで、重量物の特性に合わせた車両を保有し、通常の輸送方法では対処できない特殊貨物の輸送を行います。産業用プラントや防衛省向けの特殊貨物など、長年にわたる豊富な経験と、日頃より厳しい訓練や社員教育を受けた有資格作業員が、荷物の形状・重量・特性から、最適な輸送方法を選択し、安全かつ確実に移設・輸送を行います。'
    ],
    img: '/static/img/biz-heavy-gen2.jpg',
    imgPos: '60% 50%',
    badge: 'HEAVY · 重量物',
    alt: '重量物輸送の様子',
    reverse: true
  },
  {
    id: 'cell03',
    num: '03',
    en: 'INSTALLATION',
    jpTitle: '重 量 物 機 械 据 付',
    enSub: 'MACHINE INSTALLATION',
    heading: () => (
      <>
        設置・据付・移設まで、
        <br />
        ワンストップで。
      </>
    ),
    catch: '建設機械輸送・据付に強い運送会社をお探しなら。',
    body: [
      '重量機械設備や大型特殊機械・工作機の設置、据付、移設など、特殊車両を含めた豊富な車両を自社で保有。多くの実績がございますので、緊急のご依頼やクレーン作業が付随するご依頼にも幅広くお応えします。',
      '重量物の搬入・据付作業は、人命・機器等に重大な影響を及ぼす危険があるため、作業にあたっては安全規則を遵守し、細心の注意を払い事故防止の徹底を図ります。工場・現場の規則にも必ず従い、常に「安全第一」で作業を行います。'
    ],
    img: '/static/img/biz-install-gen.jpg',
    badge: 'INSTALLATION · 据付',
    alt: 'クレーンによる機械据付作業'
  },
  {
    id: 'cell04',
    num: '04',
    en: 'GENERAL FREIGHT',
    jpTitle: '一 般 貨 物',
    enSub: 'NATIONWIDE NETWORK',
    heading: () => (
      <>
        保管・輸送・廃棄まで、
        <br />
        一 貫 委 託 で。
      </>
    ),
    catch: '全国どこにでも配送可能なネットワーク。',
    body: [
      '主に危険物製品・工業用製品（毒物も含む）の輸送を実施しています。大手一流メーカーの工場製造ライン・専用タンク等の特殊輸送も実績豊富です。',
      '各地の自社倉庫での製品保管・荷役も承っています。また、産業廃棄物の収集運搬も広範囲で実施しているため、危険物製品の保管・輸送・廃棄までを一貫して委託いただけます。軽作業をともなう輸送も経験豊富ですので、お気軽にご相談ください。'
    ],
    img: '/static/img/biz-general-gen2.jpg',
    imgPos: '35% 50%',
    badge: 'GENERAL · 一般貨物',
    alt: '一般貨物の荷役作業',
    reverse: true
  },
  {
    id: 'cell05',
    num: '05',
    en: 'WAREHOUSE',
    jpTitle: '倉 庫 保 管',
    enSub: 'KURE — AGA AREA',
    heading: () => (
      <>
        天井クレーン完備の
        <br />
        重量物対応倉庫。
      </>
    ),
    catch: '30t / 10t / 5t 天井クレーン、4.5t フォークリフト。',
    body: [
      '呉市阿賀地区に30t、10t、5tの天井クレーン、4.5tフォークリフトも備え、運び出し・運搬も容易に対応できます。長期保管も対応しておりますので、お気軽にお問い合わせください。',
      '倉庫単体でのご利用はもちろん、輸送・据付・産廃までを含むワンストップサービスとしてご活用いただけます。'
    ],
    img: '/static/img/biz-warehouse-own.jpg',
    imgPos: '50% 55%',
    badge: 'WAREHOUSE · 阿賀',
    alt: 'アガマリノ倉庫の外観'
  }
]

export const BusinessPage: FC = () => (
  <>
    <Hero crumb="OUR BUSINESS" title="BUSINESS" subtitle="事 業 案 内" />

    {/* ============= INTRO ============= */}
    <section class="intro">
      <div class="container">
        <p class="lead">
          「運ぶ」を超えて、
          <br />
          <span class="mark">安全と品質</span>を届ける。
        </p>
        <p class="body">
          危険物・重量物といった、高度な知識と経験が求められる輸送を得意領域とし、
          倉庫保管・据付・一般貨物までを一貫して担う総合物流企業です。
          呉市で培った 70 年以上のノウハウを、全国 5 拠点のネットワークとともに、 お客様の現場へお届けします。
        </p>
      </div>
    </section>

    {/* ============= SERVICE INDEX ============= */}
    <SvcIndex
      label="事業内容の目次"
      items={SERVICES.map((svc) => ({
        id: svc.id,
        num: svc.num,
        en: svc.en,
        jp: svc.jpTitle.replace(/\s/g, '')
      }))}
    />

    {/* ============= 01 危険物輸送 ============= */}
    {(() => {
      const svc = SERVICES[0]
      return <SvcSection svc={svc} />
    })()}

    {/* ============= BRIDGE ============= */}
    <section class="bridge" aria-label="お問い合わせへのご案内">
      <div class="bridge-inner">
        <h2>
          CHALLENGE NEXT.
          <span class="jp">次 の 物 流 の あ た り ま え を、私 た ち か ら。</span>
        </h2>
        <a href={PATHS.contact} class="arrow-btn">
          CONTACT US
        </a>
      </div>
    </section>

    {/* ============= 02〜05 ============= */}
    {SERVICES.slice(1).map((svc) => (
      <SvcSection svc={svc} />
    ))}

    {/* ============= OUR COMMITMENT ============= */}
    <section class="support" id="commitment">
      <div class="container">
        <SecHead num="06" en="OUR COMMITMENT" jp="私 た ち の 取 り 組 み" />

        <div class="support-grid">
          <div class="pillar">
            <p class="no en">01 — OPTIMISATION</p>
            <h3>
              <span class="en-sub">SMART LOGISTICS</span>
              徹底した運行管理と
              <br />
              配送ルートの最適化
            </h3>
            <div class="body">
              <p>
                物流事業の課題の中でも悩みの多いひとつが輸配送コストです。しかし、コスト削減ばかりでなく、環境課題も含め、輸送事業者・荷主様共に環境に配慮した取り組みが求められています。
              </p>
              <p>
                株式会社NARA
                TRANSPORTでは、輸配送機能を最大限に高めた上で環境にも優しく、お客様の配送に関するご要望や課題設定を踏まえたシミュレーションを実施。配送ルートの最適化により、効率性の向上とコスト削減を実現します。
              </p>
            </div>
            <ul>
              <li>配送ルート・車種・積載量のシミュレーション</li>
              <li>荷主様との運送データの完全共有</li>
              <li>環境負荷を考慮したモーダル選定</li>
            </ul>
          </div>

          <div class="pillar">
            <p class="no en">02 — EDUCATION</p>
            <h3>
              <span class="en-sub">SAFETY EDUCATION</span>
              従業員教育。
              <br />
              徹底した安全管理のために。
            </h3>
            <div class="body">
              <p>
                当社のほとんどの社員が「危険物取扱主任者」の資格を有し、高品質の保管・運送サービスを安心してご利用いただけます。
              </p>
              <p>
                輸送の安全は、お客様の財産を守ること。徹底した安全管理を進めるため、「安全性優良事業所（Gマーク）」の認定を受け、運輸安全マネジメントの導入を行っています。
              </p>
            </div>
            <ul>
              <li>新人教育・外部講師講習・ベテランのリフレッシュ教育</li>
              <li>危険物取扱主任者の有資格者を全社に配置</li>
              <li>安全性優良事業所（Gマーク）認定</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Cta jp="運 ぶ を、次 の あ た り ま え へ。" />
  </>
)

/** 1事業ぶんのセクション */
const SvcSection: FC<{ svc: Svc }> = ({ svc }) => {
  const Heading = svc.heading
  return (
    <section
      class={`svc-sec${svc.reverse ? ' alt reverse' : ''}`}
      id={svc.id}
      aria-labelledby={`${svc.id}-title`}
    >
      <div class="container">
        <div class="sec-head">
          <div class="num en" aria-hidden="true">
            {svc.num}
          </div>
          <div class="titles">
            <p class="en-title" id={`${svc.id}-title`}>
              {svc.en}
            </p>
            <p class="jp-title">{svc.jpTitle}</p>
          </div>
        </div>

        <div class="svc-row">
          <div>
            <span class="svc-tag">SERVICE — {svc.num}</span>
            <h2>
              <span class="en-sub">{svc.enSub}</span>
              <Heading />
            </h2>
            <p class="catch">{svc.catch}</p>
            <div class="body">
              {svc.body.map((text) => (
                <p>{text}</p>
              ))}
            </div>
          </div>

          <div class="svc-visual">
            <div
              class="img"
              style={`background-image:url('${svc.img}')${svc.imgPos ? `;background-position:${svc.imgPos}` : ''}`}
              role="img"
              aria-label={svc.alt}
            ></div>
            <span class="badge">{svc.badge}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
