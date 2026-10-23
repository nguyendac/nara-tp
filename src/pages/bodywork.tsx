import type { FC } from 'hono/jsx'
import { Hero, SecHead } from '../components/Hero'
import { EXTERNAL, PATHS } from '../site'

/** bbt が選ばれる理由（4つ） */
const REASONS: { no: string; icon: string; heading: FC }[] = [
  {
    no: '01',
    icon: 'fa-circle-check',
    heading: () => (
      <>
        トラック購入から
        <br />
        ワンストップで
        <br />
        オーダー可能
      </>
    )
  },
  {
    no: '02',
    icon: 'fa-stopwatch',
    heading: () => (
      <>
        架装工場と
        <br />
        塗装工場の連携で
        <br />
        スピード対応可能
      </>
    )
  },
  {
    no: '03',
    icon: 'fa-truck',
    heading: () => (
      <>
        運送会社だからできる
        <br />
        運用に合わせた
        <br />
        高品質施工
      </>
    )
  },
  {
    no: '04',
    icon: 'fa-car-burst',
    heading: () => (
      <>
        事故現場に急行します。
        <br />
        まずはお電話いただき
        <br />
        お任せください。
      </>
    )
  }
]

/** 工場ギャラリーのサムネイル */
const FACTORY_THUMBS = [
  { src: '/static/img/bbt/g0.webp', alt: 'bbt 架装工場' },
  { src: '/static/img/bbt/g1.webp', alt: '工場 写真1' },
  { src: '/static/img/bbt/g2.webp', alt: '工場 写真2' },
  { src: '/static/img/bbt/g3.webp', alt: '工場 写真3' },
  { src: '/static/img/bbt/g4.webp', alt: '工場 写真4' }
]

/** ご依頼の流れ（6ステップ） */
const STEPS: { no: string; icon: string; title: string; body: string }[] = [
  {
    no: '01',
    icon: 'fa-phone',
    title: 'お問い合わせ',
    body: '電話または専用フォームからお問い合わせが可能です。お客様のご都合の良い日に合わせて、車輌のお預かり日時を決定します。'
  },
  {
    no: '02',
    icon: 'fa-clipboard-check',
    title: '来店・車両チェック',
    body: 'お客様の要望を伺い、具体的に「こんなイメージ」など、写真等を用いて完成イメージをしっかりと擦り合わせます。'
  },
  {
    no: '03',
    icon: 'fa-calculator',
    title: 'お見積もり額算出',
    body: 'お客様のご要望に合わせ、お見積し、ご契約への流れになります。契約後、より詳しい製作内容、納車スケジュールについて、打ち合わせをさせていただきます。'
  },
  {
    no: '04',
    icon: 'fa-screwdriver-wrench',
    title: '作業開始（架装・塗装）',
    body: '工場内にある架装専用ブースにて、クレーンや荷台を取り付け施工を行い、工程ごとに確認した上で、塗装ブースにて仕上げ塗装を行います。'
  },
  {
    no: '05',
    icon: 'fa-truck-ramp-box',
    title: '完成・納品',
    body: 'お客様にご確認いただき問題がなければ、納車となります。'
  },
  {
    no: '06',
    icon: 'fa-headset',
    title: 'アフターフォロー',
    body: 'お困りのことがございましたらいつでもきめ細やかに対応いたしますので、お気軽にご相談ください。定期点検なども承りますので、いつでもご相談ください。'
  }
]

export const BodyworkPage: FC = () => (
  <>
    <Hero crumb="BODYWORK — bbt" title="BODYWORK" subtitle="架 装 業" />

    {/* ============= KV 写真 ============= */}
    <section class="kv-photo" aria-label="bbt 架装工場">
      <img
        src="/static/img/bbt/kv.webp"
        alt="bbt（big boy toy's）架装工場の外観"
        width="3840"
        height="1682"
      />
      <div class="cap">
        <div class="container">
          <p class="en">big boy toy’s</p>
          <p class="cap-h">利益が生まれる大型架装車をご提案</p>
        </div>
      </div>
    </section>

    {/* ============= 01 WHY bbt ============= */}
    <section class="reasons" id="reason">
      <div class="container">
        <SecHead num="01" en="WHY bbt" jp="b b t が 選 ば れ る 理 由" />

        <p class="lead-p">
          平ボディ、クレーン車、セルフローダー、ダンプカー、トラクター、特殊車など、さまざまな車種のトラックボディを提供しています。
          また、お客様のニーズに合わせてボディの架装をカスタマイズすることも可能です。
          お客様のご要望により、コスト重視のボディでパターンオーダー制（Aパターン、Bパターン）のご提案も可能です。
        </p>

        <div class="reason-grid">
          {REASONS.map((reason) => {
            const Heading = reason.heading
            return (
              <div class="reason">
                <span class="n" aria-hidden="true">
                  {reason.no}
                </span>
                <span class="ic" aria-hidden="true">
                  <i class={`fas ${reason.icon}`}></i>
                </span>
                <h3>
                  <Heading />
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    {/* ============= 02 FACTORY ============= */}
    <section class="facility" id="facility">
      <div class="container">
        <SecHead num="02" en="FACTORY" jp="架 装 ・ 塗 装 工 場" />

        <div class="gallery-wrap">
          <div class="gallery" data-gallery>
            <div class="main">
              <img src={FACTORY_THUMBS[0].src} alt={FACTORY_THUMBS[0].alt} data-main />
              <span class="badge">bbt · FACTORY</span>
            </div>
            <div class="thumbs" role="group" aria-label="工場の写真を切り替える">
              {FACTORY_THUMBS.map((thumb, i) => (
                <button
                  type="button"
                  class={i === 0 ? 'on' : undefined}
                  aria-pressed={i === 0 ? 'true' : 'false'}
                >
                  <img src={thumb.src} alt={thumb.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ============= 03 FLOW ============= */}
    <section class="flow" id="flow">
      <div class="container">
        <SecHead num="03" en="FLOW" jp="ご 依 頼 の 流 れ" />

        <ol class="steps">
          {STEPS.map((step) => (
            <li>
              <p class="no">
                STEP<b>{step.no}</b>
              </p>
              <div class="ic" aria-hidden="true">
                <i class={`fas ${step.icon}`}></i>
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* ============= CTA ============= */}
    <section class="act" id="contact">
      <div class="container">
        <div class="top">
          <p class="en-big">CONTACT</p>
          <p class="jp">架 装 の ご 相 談 は、お 気 軽 に。</p>
        </div>

        <div class="act-grid">
          <a href={EXTERNAL.bbtPdf} target="_blank" rel="nofollow noopener noreferrer" download>
            <span class="ic" aria-hidden="true">
              <i class="fas fa-file-arrow-down"></i>
            </span>
            <span class="k">DOWNLOAD</span>
            <span class="nm">資料ダウンロード</span>
            <span class="ds">bbt のパンフレット（PDF）</span>
          </a>
          <a href={PATHS.contact}>
            <span class="ic" aria-hidden="true">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="k">CONTACT</span>
            <span class="nm">お問い合わせ</span>
            <span class="ds">お問い合わせフォームへ</span>
          </a>
          <a href={EXTERNAL.bbtEstimate} target="_blank" rel="nofollow noopener noreferrer">
            <span class="ic" aria-hidden="true">
              <i class="fas fa-file-invoice-dollar"></i>
            </span>
            <span class="k">ESTIMATE</span>
            <span class="nm">見積り依頼</span>
            <span class="ds">専用フォームでお見積りを依頼</span>
          </a>
        </div>
      </div>
    </section>
  </>
)
