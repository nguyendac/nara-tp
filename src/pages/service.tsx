import type { FC } from 'hono/jsx'
import { Cta, Hero } from '../components/Hero'
import { SvcIndex } from '../components/SvcIndex'

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
  dark?: boolean
}

/** 4サービス。IDは実サイトと同じ #cell01〜04 */
const SERVICES: Svc[] = [
  {
    id: 'cell01',
    num: '01',
    en: 'LOGISTICS',
    jpTitle: 'ロ ジ ス テ ィ ッ ク',
    enSub: 'STRATEGIC LOGISTICS',
    heading: () => (
      <>
        お客さまの経営戦略の
        <br />
        一歩先を見据えた提案を。
      </>
    ),
    catch: '戦略的物流システムをご提案します。',
    body: [
      '「モノを運ぶだけでなく、お取引先の経営を"モノの流れ"という視点から見つめ、業務の効率化やコスト削減をご提案する」──それが、私たちの物流サービスの基本理念です。',
      '現在、製品の積み卸しや工場間移送などの構内作業も一括して請負って行っているほか、商品の市場ユーザーへのダイレクト配送も実施。中間流通コストの削減、ひいては商品の販売拡大の一翼を担っています。',
      '商品、サービスとそれに関連する情報の発生地点から消費地点に至るまでの効率的なフローと保管を、計画・実施・統制すること。生産地から消費地までの全体最適化をお取引先とともに目指し、相互発展していくサービスをご提案していきます。'
    ],
    img: '/static/img/svc-01.jpg',
    badge: 'LOGISTICS · 戦略物流',
    alt: '輸送中のトラック'
  },
  {
    id: 'cell02',
    num: '02',
    en: 'VALUE-ADDED',
    jpTitle: '付 加 価 値 物 流',
    enSub: '3PL SOLUTIONS',
    heading: () => (
      <>
        価値を創造する
        <br />
        物流システムへ。
      </>
    ),
    catch: '物流に関する悩み、課題は、何でもご相談ください。',
    body: [
      '次代の物流戦略を司る、「3PL」。お取引先のビジネスに深く入り込み、「お客様の物流部門」として求められる製品をロスなく、正確かつ効率的に届ける──それが私たちの付加価値物流サービスです。',
      '拠点間輸送や入出庫、配送業務に加え、受発注や保管、在庫管理、流通加工まで業務の幅を拡大し、あらゆる業種・製品の物流ニーズに対応できる総合物流サービス企業を目指します。',
      '物流とその周辺業務に関することなら"こんな悩みがある""こんなことは出来ないだろうか"等々…何でもご相談ください。私たちが解決策をご提案し、物流部門からお客様をバックアップいたします。'
    ],
    img: '/static/img/svc-02.jpg',
    badge: '3PL · 付加価値',
    alt: '倉庫内での在庫管理作業',
    dark: true
  },
  {
    id: 'cell03',
    num: '03',
    en: 'IT SOLUTIONS',
    jpTitle: '情 報 化',
    enSub: 'SCM · DIGITAL LOGISTICS',
    heading: () => (
      <>
        最新IT機器導入で
        <br />
        情報を強化。
      </>
    ),
    catch: '物流企業にとって不可欠な情報システムを構築。',
    body: [
      '物流業界はITによる高度情報化の時代を迎えています。会社全体を通じて営業、経理、経営層など部門ごとに情報を分断させず、また取引先や社内外を問わず、データや情報を物流システムとして共通基盤の上で共有・統合化する「SCM（Supply Chain Management）」の構築が、物流における競争優位の確保に大きく成果をあげています。',
      '私たちは、在庫情報や出荷情報などを重要な経営データとしてリアルタイムに提供し、独自の物流情報システムにより最適な混載方法、配送ルートをシミュレーションしてから運搬するなど、物流企業にとって不可欠な情報システムを構築しています。',
      'お客様の最適物流を実現する戦略パートナーとして、企業の経営戦略をフレキシブルに支えます。'
    ],
    img: '/static/img/svc-03-office.jpg',
    imgPos: '50% 60%',
    badge: 'IT · 情報化',
    alt: '事務所での運行管理業務'
  },
  {
    id: 'cell04',
    num: '04',
    en: 'INSURANCE',
    jpTitle: '保 険 代 理 サ ー ビ ス',
    enSub: 'LIFE PARTNER',
    heading: () => (
      <>
        安心に満ちた生活の
        <br />
        お役に立てるように。
      </>
    ),
    catch: '保険についての疑問・悩みなど、専門家がご相談を承ります。',
    body: [
      '皆様の安心に満ちた生活のお役に立てるよう、私たち保険の専門家（ライフパートナー）が、最新の保険情報提供やコンサルティングをさせていただいており、保険についての疑問・悩みなどのご相談を承ります。',
      '企業や個人を取り巻くリスクが多様化している時代、企業活動・個人の暮らしにおける「リスク」に対して、経済的な損失を最小限に留めるための様々な種類の損害補償を、お客様1人ひとりに合わせてコンサルティングいたします。',
      '保険事故発生の場合も、当社が代理業務を行い、お客様に安心をお届けし、速やかに対応いたします。'
    ],
    img: '/static/img/svc-04-nomask.jpg',
    badge: 'INSURANCE · 保険',
    alt: '保険のご相談の様子',
    dark: true
  }
]

export const ServicePage: FC = () => (
  <>
    <Hero crumb="OUR SERVICES" title="SERVICE" subtitle="サ ー ビ ス 案 内" />

    {/* ============= INTRO ============= */}
    <section class="intro">
      <div class="container">
        <p class="lead">
          「モノを運ぶ」だけではない、
          <br />
          <span class="mark">戦略パートナー</span>としての物流。
        </p>
        <p class="body">
          製品の積み卸しや工場間移送などの構内作業から、市場ユーザーへのダイレクト配送、
          在庫管理・流通加工、IT による情報化、そして保険代理まで──。
          お客様の経営戦略の一歩先を見据え、"モノの流れ"をトータルでご提案します。
        </p>
      </div>
    </section>

    {/* ============= SERVICE INDEX ============= */}
    <SvcIndex
      label="サービスの目次"
      items={SERVICES.map((svc) => ({
        id: svc.id,
        num: svc.num,
        en: svc.en,
        jp: svc.jpTitle.replace(/\s/g, '')
      }))}
    />

    {/* ============= 01〜04 ============= */}
    {SERVICES.map((svc) => {
      const Heading = svc.heading
      return (
        <section
          class={`svc-sec${svc.dark ? ' dark reverse' : ''}`}
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
    })}

    <Cta jp="最 適 な 物 流 を、と も に 描 く。" />
  </>
)
