import type { FC } from 'hono/jsx'
import { Cta, Hero, SecHead } from '../components/Hero'

type Category = 'trailer' | 'large' | 'medium' | 'special'

/** 13車種。分類は車名から仮に設定（公開前に要確認） */
const VEHICLES: { no: string; name: string; img: string; cat: Category; tag: string }[] = [
  { no: '01', name: '16輪低床トレーラー', img: 'a', cat: 'trailer', tag: 'TRAILER' },
  { no: '02', name: '8輪低床トレーラー', img: 'b', cat: 'trailer', tag: 'TRAILER' },
  { no: '03', name: '高床平トレーラー', img: 'c', cat: 'trailer', tag: 'TRAILER' },
  { no: '04', name: '15t増トン平総輪エアサス車', img: 'd', cat: 'large', tag: 'LARGE' },
  { no: '05', name: '15t増トン低床総輪エアサス車', img: 'e', cat: 'large', tag: 'LARGE' },
  { no: '06', name: '4tエアサス車', img: 'f', cat: 'medium', tag: 'MEDIUM' },
  { no: '07', name: '4t平車', img: 'g', cat: 'medium', tag: 'MEDIUM' },
  { no: '08', name: '15tウィング総輪エアサス車', img: 'h', cat: 'large', tag: 'LARGE' },
  { no: '09', name: '原木車', img: 'i', cat: 'special', tag: 'SPECIAL' },
  { no: '10', name: '4tフルワイドウィング車', img: 'j', cat: 'medium', tag: 'MEDIUM' },
  { no: '11', name: '7tユニック車', img: 'k', cat: 'special', tag: 'SPECIAL' },
  { no: '12', name: '2t幌車', img: 'l', cat: 'medium', tag: 'SMALL' },
  { no: '13', name: '木材チップ車', img: 'm', cat: 'special', tag: 'SPECIAL' }
]

const TABS: { filter: 'all' | Category; label: string }[] = [
  { filter: 'all', label: 'すべて' },
  { filter: 'trailer', label: 'トレーラー' },
  { filter: 'large', label: '大型' },
  { filter: 'medium', label: '中型・小型' },
  { filter: 'special', label: '特装車' }
]

const count = (filter: 'all' | Category) =>
  filter === 'all' ? VEHICLES.length : VEHICLES.filter((v) => v.cat === filter).length

export const TransporterPage: FC = () => (
  <>
    <Hero crumb="OUR FLEET" title="FLEET" subtitle="車 両 紹 介" />

    {/* ============= INTRO ============= */}
    <section class="intro">
      <div class="container">
        <p class="lead">
          物流を支える、
          <br />
          <span class="mark">当社の主力車両</span>をご紹介します。
        </p>
        <p class="body">
          16輪低床トレーラーから2t幌車、原木車・木材チップ車まで。
          重量物・長尺物・木材・精密機械など、運ぶ荷物に合わせた車両を自社で保有しています。
          すべての車両は、自社ピットで整備しています。
        </p>
      </div>
    </section>

    {/* ============= LINE UP ============= */}
    <section class="fleet" id="fleet">
      <div class="container">
        <SecHead num="01" en="LINE UP" jp="車 両 一 覧" />

        <div class="fleet-bar">
          <div class="fleet-tabs" role="tablist" aria-label="車両の分類で絞り込む">
            {TABS.map((tab, i) => (
              <button
                type="button"
                role="tab"
                aria-selected={i === 0 ? 'true' : 'false'}
                data-f={tab.filter}
              >
                {tab.label}
                <span class="c">{count(tab.filter)}</span>
              </button>
            ))}
          </div>
          <p class="fleet-count" aria-live="polite">
            <b id="fleetNum">{VEHICLES.length}</b>
            TYPES
          </p>
        </div>

        <div class="fleet-grid">
          {VEHICLES.map((v) => (
            <article class="v-card" data-c={v.cat}>
              <span class="no" aria-hidden="true">
                {v.no}
              </span>
              <div class="ph">
                <img src={`/static/img/tr/${v.img}.png`} alt={v.name} loading="lazy" />
              </div>
              <div class="meta">
                <h3>{v.name}</h3>
                <span class="tag">{v.tag}</span>
              </div>
            </article>
          ))}
        </div>

        <p class="fleet-note">※ 掲載車両のほか、ご依頼内容に応じて最適な車両をご用意します。</p>
      </div>
    </section>

    {/* ============= 紺の帯 ============= */}
    <section class="pit-band" aria-hidden="true">
      <div class="inner">
        <span class="k">MAINTENANCE</span>
        <p>車両管理　自社ピットによる車両整備で、責任あるメンテナンス体制を。</p>
      </div>
    </section>

    {/* ============= IN-HOUSE PIT ============= */}
    <section class="pit" id="maintenance">
      <div class="container">
        <SecHead num="02" en="IN-HOUSE PIT" jp="自 社 ピ ッ ト に よ る 車 両 整 備" />

        <div class="pit-row">
          <div>
            <span class="svc-tag">MAINTENANCE</span>
            <h2>
              <span class="en-sub">SAFETY · SPEED · RELIABILITY</span>
              ディーラー任せにしない、
              <br />
              責任ある車両管理。
            </h2>
            <div class="body">
              <p>
                安全・迅速・確実な運行を行うためには、私達のシステムを稼働させる車両が不可欠であり、お客様の大切な品物とその運び手の命を守るため、責任ある車両管理が重要。そうした考えのもとに当社は、自社ピットによる車両整備を行っています。ディーラー任せではなく、整備士とドライバーが一緒にメンテナンスを行うことで、車両に対する愛着やいたわりや労いの気持ちも一層深まります。
              </p>
              <p>
                また一方で、日頃からドライバーも車両整備にしっかりと携わることで万が一の車両トラブルにもその場で迅速に対応する能力を身につけることができます。自社ピット導入は、車両を単なる仕事道具として捉えずに、お客様の大切な品物を運ぶ担い手として、また、自分達の命も運ぶパートナーとして大切に扱うことは従業員の意識改革にも効果を発揮しています。
              </p>
            </div>
            <div class="pit-points">
              <div>
                <p class="n">01</p>
                <p class="t">
                  自社ピットで
                  <br />
                  車両を整備
                </p>
              </div>
              <div>
                <p class="n">02</p>
                <p class="t">
                  整備士とドライバーが
                  <br />
                  一緒にメンテナンス
                </p>
              </div>
              <div>
                <p class="n">03</p>
                <p class="t">
                  車両トラブルに
                  <br />
                  その場で対応
                </p>
              </div>
            </div>
          </div>

          <div class="pit-photos">
            <span class="badge">IN-HOUSE PIT</span>
            <figure>
              <img src="/static/img/tr/pit1.jpg" alt="自社ピットでの整備作業" loading="lazy" />
            </figure>
            <figure>
              <img src="/static/img/tr/pit2.jpg" alt="車両点検の様子" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <Cta jp="運 ぶ モ ノ に、最 適 な 一 台 を。" />
  </>
)
