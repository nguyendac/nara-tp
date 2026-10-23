import type { FC } from 'hono/jsx'
import { Hero, SecHead } from '../components/Hero'
import { PATHS } from '../site'

const AGA_THUMBS = [
  { src: '/static/img/wh/aga-img4.png', alt: 'アガマリノ倉庫 第1・第2倉庫' },
  { src: '/static/img/wh/aga-img1.png', alt: 'アガマリノ倉庫 外観' },
  { src: '/static/img/wh/aga-img2.png', alt: 'アガマリノ倉庫 内部' },
  { src: '/static/img/wh/aga-img3.png', alt: 'アガマリノ倉庫 外観（道路側）' }
]

const RINKU_THUMBS = [
  { src: '/static/img/wh/rinku-00.webp', alt: 'リンクウ倉庫 外観' },
  { src: '/static/img/wh/rinku-01.webp', alt: 'リンクウ倉庫 写真1' },
  { src: '/static/img/wh/rinku-02.webp', alt: 'リンクウ倉庫 写真2' },
  { src: '/static/img/wh/rinku-03.webp', alt: 'リンクウ倉庫 写真3' },
  { src: '/static/img/wh/rinku-04.webp', alt: 'リンクウ倉庫 写真4' },
  { src: '/static/img/wh/rinku-05.webp', alt: 'リンクウ倉庫 写真5' }
]

/** ギャラリー（メイン画像＋サムネイル）。切り替えは app.js が担当 */
const Gallery: FC<{
  thumbs: { src: string; alt: string }[]
  cols: 4 | 6
  badge: string
  label: string
}> = ({ thumbs, cols, badge, label }) => (
  <div class="gallery" data-gallery>
    <div class="main">
      <img src={thumbs[0].src} alt={thumbs[0].alt} data-main />
      <span class="badge">{badge}</span>
    </div>
    <div class={`thumbs cols-${cols}`} role="group" aria-label={`${label}の写真を切り替える`}>
      {thumbs.map((thumb, i) => (
        <button type="button" class={i === 0 ? 'on' : undefined} aria-pressed={i === 0 ? 'true' : 'false'}>
          <img src={thumb.src} alt={thumb.alt} loading="lazy" />
        </button>
      ))}
    </div>
  </div>
)

export const WarehousePage: FC = () => (
  <>
    <Hero crumb="WAREHOUSE" title="WAREHOUSE" subtitle="倉 庫 保 管 業" />

    {/* ============= INTRO ============= */}
    <section class="intro">
      <div class="container">
        <p class="lead">
          重量物から精密機械まで。
          <br />
          用途で選べる、<span class="mark">2つの倉庫</span>。
        </p>
        <p class="body">
          呉市阿賀南の「アガマリノ倉庫」は、天井クレーンとフォークリフトを備えた重量物向けの倉庫です。
          三原市本郷町の「リンクウ倉庫」は、温度と湿度を24時間クラウドで管理する温調倉庫です。
          お預かりする荷物に合わせて、最適な倉庫をご提案します。
        </p>
      </div>
    </section>

    {/* ============= 倉庫を選ぶ ============= */}
    <section class="wh-pick" aria-label="倉庫を選ぶ">
      <nav class="wh-pick-inner">
        <a class="wh-card" href="#agamarino">
          <div
            class="ph"
            style="background-image:url('/static/img/wh/aga-img4.png')"
            role="img"
            aria-label="アガマリノ倉庫"
          ></div>
          <div>
            <span class="no">01 — KURE</span>
            <span class="en">AGAMARINO</span>
            <span class="jp">アガマリノ倉庫｜重量物向け</span>
            <span class="loc">広島県呉市阿賀南7丁目10-23</span>
          </div>
        </a>
        <a class="wh-card" href="#rinku">
          <div
            class="ph"
            style="background-image:url('/static/img/wh/rinku-kv.webp')"
            role="img"
            aria-label="リンクウ倉庫"
          ></div>
          <div>
            <span class="no">02 — MIHARA</span>
            <span class="en">RINKU</span>
            <span class="jp">リンクウ倉庫｜温調倉庫</span>
            <span class="loc">広島県三原市本郷町善入寺用倉山10064-191</span>
          </div>
        </a>
      </nav>
    </section>

    {/* ============= 01 アガマリノ倉庫 ============= */}
    <section class="svc-sec" id="agamarino" aria-labelledby="agamarino-title">
      <div class="container">
        <div class="sec-head">
          <div class="num en" aria-hidden="true">
            01
          </div>
          <div class="titles">
            <p class="en-title" id="agamarino-title">
              AGAMARINO
            </p>
            <p class="jp-title">ア ガ マ リ ノ 倉 庫</p>
          </div>
        </div>

        <div class="svc-row">
          <div>
            <span class="svc-tag">WAREHOUSE — 01</span>
            <h2>
              <span class="en-sub">HEAVY-DUTY STORAGE</span>
              天井クレーン完備の
              <br />
              重量物向け倉庫。
            </h2>
            <p class="catch">運び出しや運搬も、倉庫の設備で対応できます。</p>
            <div class="body">
              <p>
                呉市阿賀地区にある倉庫です。30t・10t・5tの天井クレーンと4.5tフォークリフトを備えており、重量物の運び出しや運搬にも対応できます。
                長期保管も承っていますので、お気軽にお問い合わせください。
              </p>
            </div>
            <ul class="spec-list">
              <li>
                <span class="n">01</span>
                <span>
                  <strong>天井クレーン</strong>　30t ／ 10t ／ 5t
                </span>
              </li>
              <li>
                <span class="n">02</span>
                <span>
                  <strong>フォークリフト</strong>　4.5t
                </span>
              </li>
              <li>
                <span class="n">03</span>
                <span>
                  <strong>エコ太郎</strong>常設済み（無電極ランプ）
                </span>
              </li>
            </ul>
          </div>

          <Gallery thumbs={AGA_THUMBS} cols={4} badge="AGAMARINO · 呉" label="アガマリノ倉庫" />
        </div>

        <div class="wh-table">
          <h3>
            OVERVIEW<span class="jp">アガマリノ倉庫 概要</span>
          </h3>
          <dl>
            <dt>所在地</dt>
            <dd>〒737-0004　広島県呉市阿賀南7丁目10-23</dd>
          </dl>
          <dl>
            <dt>TEL</dt>
            <dd>
              <a href="tel:0823-73-3445">0823-73-3445</a>
            </dd>
          </dl>
          <dl>
            <dt>設備</dt>
            <dd>天井クレーン（30t・10t・5t）／4.5tフォークリフト／エコ太郎（無電極ランプ）常設</dd>
          </dl>
          <dl>
            <dt>保管</dt>
            <dd>長期保管に対応</dd>
          </dl>
        </div>

        <div class="map-panel">
          <figure class="dark">
            <div class="fig">
              <img src="/static/img/wh/aga-map.png" alt="アガマリノ倉庫 配置図" loading="lazy" />
            </div>
            <figcaption>
              SITE LAYOUT<span class="jp">配置図</span>
            </figcaption>
          </figure>
          <figure>
            <div class="fig">
              <iframe
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%91%89%E5%B8%82%E9%98%BF%E8%B3%80%E5%8D%977%E4%B8%81%E7%9B%AE10-23&output=embed"
                title="アガマリノ倉庫の地図"
              ></iframe>
            </div>
            <figcaption>
              ACCESS<span class="jp">広島県呉市阿賀南7丁目10-23</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* ============= 02 リンクウ倉庫 ============= */}
    <section class="svc-sec reverse on-white" id="rinku" aria-labelledby="rinku-title">
      <div class="container">
        <div class="sec-head">
          <div class="num en" aria-hidden="true">
            02
          </div>
          <div class="titles">
            <p class="en-title" id="rinku-title">
              RINKU
            </p>
            <p class="jp-title">リ ン ク ウ 倉 庫</p>
          </div>
        </div>

        <div class="svc-row">
          <div>
            <span class="svc-tag">WAREHOUSE — 02</span>
            <h2>
              <span class="en-sub">CLIMATE-CONTROLLED</span>
              精密機械に最適な
              <br />
              温調倉庫。
            </h2>
            <p class="catch">温度と湿度を、24時間365日クラウドで管理。</p>
            <div class="body">
              <p>
                倉庫内にエアコンや除湿器などを設置しています。
                温度と湿度はWi-Fiを使って24時間365日クラウドで管理しており、温度や湿度の変化に弱い精密機械の保管に最適です。
              </p>
            </div>
            <ul class="spec-list">
              <li>
                <span class="n">01</span>
                <span>
                  <strong>温調設備</strong>　エアコン・除湿器を設置
                </span>
              </li>
              <li>
                <span class="n">02</span>
                <span>
                  <strong>クラウド管理</strong>　24時間365日 温度・湿度を管理
                </span>
              </li>
              <li>
                <span class="n">03</span>
                <span>
                  <strong>駐車場</strong>　27台
                </span>
              </li>
            </ul>
          </div>

          <Gallery thumbs={RINKU_THUMBS} cols={6} badge="RINKU · 三原" label="リンクウ倉庫" />
        </div>

        <div class="wh-table">
          <h3>
            OVERVIEW<span class="jp">リンクウ倉庫 概要</span>
          </h3>
          <dl>
            <dt>所在地</dt>
            <dd>〒729-0416　広島県三原市本郷町善入寺用倉山10064-191</dd>
          </dl>
          <dl>
            <dt>TEL</dt>
            <dd>
              <a href="tel:0848-60-8053">0848-60-8053</a>
            </dd>
          </dl>
          <dl>
            <dt>開設</dt>
            <dd>2023年</dd>
          </dl>
          <dl>
            <dt>温度帯</dt>
            <dd>
              倉庫内にエアコンと除湿器などを設置しております。
              <br />
              24時間365日温度湿度をWi-Fiを使ってクラウドで管理するシステムを導入しております。温度湿度にデリケートな精密機械に最適な温調倉庫です。
            </dd>
          </dl>
          <dl>
            <dt>駐車場</dt>
            <dd>27台</dd>
          </dl>
        </div>

        <div class="map-panel">
          <figure>
            <div class="fig">
              <img
                class="cover"
                src="/static/img/wh/rinku-area.webp"
                alt="リンクウ倉庫 エリアマップ"
                loading="lazy"
              />
            </div>
            <figcaption>
              AREA MAP<span class="jp">エリアマップ</span>
            </figcaption>
          </figure>
          <figure>
            <div class="fig">
              <iframe
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.279061163325!2d132.92183789999999!3d34.445063399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35505f005d4efcf9%3A0x9f20386e2fc39e!2z44Oq44Oz44Kv44KmU1RPUkFHRQ!5e0!3m2!1sja!2sjp!4v1746169895623!5m2!1sja!2sjp"
                title="リンクウ倉庫の地図"
              ></iframe>
            </div>
            <figcaption>
              ACCESS<span class="jp">広島県三原市本郷町善入寺用倉山10064-191</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* ============= 03 比較表 ============= */}
    <section class="compare" id="compare">
      <div class="container">
        <SecHead num="03" en="COMPARE" jp="2 つ の 倉 庫 を 比 べ る" />

        <div class="cmp-scroll">
          <table class="cmp">
            <thead>
              <tr>
                <th scope="col">
                  <span class="visually-hidden">項目</span>
                </th>
                <th scope="col">
                  AGAMARINO<span class="jp">アガマリノ倉庫</span>
                </th>
                <th scope="col">
                  RINKU<span class="jp">リンクウ倉庫</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">向いている荷物</th>
                <td>重量物・長期保管</td>
                <td>温度・湿度の変化に弱い精密機械</td>
              </tr>
              <tr>
                <th scope="row">主な設備</th>
                <td>
                  天井クレーン 30t／10t／5t
                  <br />
                  4.5tフォークリフト
                  <br />
                  エコ太郎（無電極ランプ）
                </td>
                <td>
                  エアコン・除湿器
                  <br />
                  温度・湿度のクラウド管理（24時間365日）
                </td>
              </tr>
              <tr>
                <th scope="row">所在地</th>
                <td>広島県呉市阿賀南7丁目10-23</td>
                <td>広島県三原市本郷町善入寺用倉山10064-191</td>
              </tr>
              <tr>
                <th scope="row">TEL</th>
                <td>0823-73-3445</td>
                <td>0848-60-8053</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* ============= 電話のCTA ============= */}
    <section class="tel-cta" id="contact">
      <div class="container">
        <div class="top">
          <p class="en-big">CONTACT</p>
          <p class="jp">倉 庫 の ご 相 談 は、お 気 軽 に。</p>
        </div>
        <div class="tel-grid">
          <a href="tel:0823-73-3445">
            <span class="k">01 — AGAMARINO</span>
            <span class="nm">アガマリノ倉庫（呉）</span>
            <span class="num">
              <small>TEL.</small>0823-73-3445
            </span>
          </a>
          <a href="tel:0848-60-8053">
            <span class="k">02 — RINKU</span>
            <span class="nm">リンクウ倉庫（三原）</span>
            <span class="num">
              <small>TEL.</small>0848-60-8053
            </span>
          </a>
        </div>
        <div class="btn-row">
          <a href={PATHS.contact} class="btn">
            CONTACT FORM →
          </a>
        </div>
      </div>
    </section>
  </>
)
