import type { FC } from 'hono/jsx'
import { Cta, Hero, SecHead } from '../components/Hero'

/** 会社情報（クライアント確定値） */
const PROFILE: { en: string; jp: string; body: FC }[] = [
  { en: 'NAME', jp: '商 号', body: () => <>株式会社NARA TRANSPORT</> },
  { en: 'ESTABLISHED', jp: '創 業', body: () => <>昭和27年10月6日</> },
  { en: 'FOUNDED', jp: '設 立', body: () => <>昭和38年7月25日</> },
  { en: 'CAPITAL', jp: '資本金', body: () => <>5,000万円</> },
  { en: 'REPRESENTATIVE', jp: '代表者', body: () => <>代表取締役社長　奈良至晏</> },
  {
    en: 'BUSINESS',
    jp: '事業内容',
    body: () => (
      <ul>
        <li>
          一般区域貨物自動車運送業<span class="note">（広陸自免第484号）</span>
        </li>
        <li>損害保険代理業</li>
      </ul>
    )
  },
  {
    en: 'LICENSE',
    jp: '許認可',
    body: () => <>一般区域貨物自動車運送業（広陸自免第484号）</>
  }
]

/** 沿革 */
const HISTORY: { year: string; month: string; milestone?: boolean; event: FC }[] = [
  {
    year: '1952',
    month: 'OCT',
    milestone: true,
    event: () => (
      <>
        昭和27年10月6日、広島県呉市にて<strong>創業</strong>。
      </>
    )
  },
  {
    year: '1963',
    month: 'JUL',
    milestone: true,
    event: () => (
      <>
        昭和38年7月25日、<strong>会社設立</strong>。
      </>
    )
  },
  {
    year: '2023',
    month: '—',
    event: () => (
      <>
        広島県三原市本郷町に<strong>リンクウ倉庫</strong>を開設。温度・湿度を24時間365日クラウドで管理する温調倉庫として稼働開始。
      </>
    )
  }
]

/** 拠点一覧（本社以外） */
const BRANCHES = [
  {
    index: '02',
    en: 'TOKYO',
    jp: '東京営業所',
    addr: '〒144-0034　東京都大田区西糀谷 3-8-15-101',
    tel: '03-6423-7171',
    fax: '03-6423-7131',
    map: 'https://maps.app.goo.gl/EGshJAJ5GHq47PwF7'
  },
  {
    index: '03',
    en: 'YOKOHAMA',
    jp: '横浜営業所',
    addr: '〒237-0062　神奈川県横須賀市浦郷町 5丁目2931-90',
    tel: '04-6845-6417',
    fax: '04-6845-6418',
    map: 'https://maps.app.goo.gl/UuqwpLHDNsBVsp728'
  },
  {
    index: '04',
    en: 'OSAKA',
    jp: '大阪営業所',
    addr: '〒559-0032　大阪府大阪市住之江区南港南 5丁目4-152',
    tel: '06-6115-8067',
    fax: '06-6115-8102',
    map: 'https://maps.app.goo.gl/ZwghGf8DUYDe2ZKB9'
  },
  {
    index: '05',
    en: 'FUKUOKA',
    jp: '福岡営業所',
    addr: '〒811-2405　福岡県糟屋郡篠栗町篠栗 3757番1',
    tel: '092-692-8161',
    fax: '092-692-8079',
    map: 'https://maps.app.goo.gl/tkGi8F3dk6i4uuHy9'
  }
]

const PinIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
    <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

export const CompanyPage: FC = () => (
  <>
    <Hero crumb="COMPANY PROFILE" title="COMPANY" subtitle="会 社 概 要" />

    {/* ============= 01 MESSAGE ============= */}
    <section class="message" id="message">
      <div class="container">
        <SecHead num="01" en="MESSAGE" jp="代表メッセージ" />

        <div class="message-grid">
          <div>
            <p class="lead">
              私たちの道は、
              <br />
              <span class="mark">お客様の未来</span>へと
              <br />
              続いています。
            </p>
            <div class="body">
              <p>
                物流業界との関わりの中で築き上げられた経験とノウハウをもとに、培った高品質輸送、現場のニーズから開発した輸送品質はもちろんのこと、新しい物流に挑戦することで皆様のお役に立てるよう、さらに努力してまいります。
              </p>
              <p>
                「運ぶ」を超えて、業務の効率化・コスト削減・そしてお客様のブランド価値創出まで──。私たちは、地域と産業のインフラを支える存在として、次の時代へと歩みを進めます。
              </p>
            </div>
            <p class="sign">
              <span class="title">代表取締役</span>
              <span class="name">奈良至晏</span>
            </p>
          </div>

          <div class="portrait" role="img" aria-label="代表取締役社長 奈良至晏">
            <span class="tag">PRESIDENT</span>
          </div>
        </div>
      </div>
    </section>

    {/* ============= 02 PROFILE ============= */}
    <section class="profile" id="profile">
      <div class="container">
        <SecHead num="02" en="PROFILE" jp="会社情報" />

        <div class="profile-table">
          {PROFILE.map((row) => {
            const Body = row.body
            return (
              <dl>
                <dt>
                  {row.en}
                  <span class="jp">{row.jp}</span>
                </dt>
                <dd>
                  <Body />
                </dd>
              </dl>
            )
          })}
        </div>
      </div>
    </section>

    {/* ============= STATS ============= */}
    <section class="stats" aria-label="数字で見る NARA TRANSPORT">
      <div class="container">
        <div class="stats-grid">
          <div class="stat">
            <p class="k en">FOUNDED</p>
            <p class="v">
              1952
              <span class="unit">年</span>
            </p>
            <p class="desc en">70+ YEARS OF EXPERIENCE</p>
          </div>
          <div class="stat">
            <p class="k en">CAPITAL</p>
            <p class="v">
              5,000
              <span class="unit">万円</span>
            </p>
            <p class="desc en">PAID-IN CAPITAL</p>
          </div>
          <div class="stat">
            <p class="k en">LOCATIONS</p>
            <p class="v">
              5<span class="unit">拠点</span>
            </p>
            <p class="desc en">HIROSHIMA · TOKYO · YOKOHAMA · OSAKA · FUKUOKA</p>
          </div>
          <div class="stat">
            <p class="k en">FLEET</p>
            <p class="v">
              13
              <span class="plus">+</span>
              <span class="unit">車種</span>
            </p>
            <p class="desc en">TRUCKS &amp; TRAILERS</p>
          </div>
        </div>
      </div>
    </section>

    {/* ============= 04 HISTORY ============= */}
    <section class="history" id="history">
      <div class="container">
        <SecHead num="03" en="HISTORY" jp="沿 革" />

        <ol class="timeline">
          {HISTORY.map((row) => {
            const Event = row.event
            return (
              <li class={`tl-row${row.milestone ? ' milestone' : ''}`}>
                <div>
                  <span class="year">{row.year}</span>
                  <span class="month">{row.month}</span>
                </div>
                <p class="event">
                  <Event />
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>

    {/* ============= 05 LOCATIONS ============= */}
    <section class="locations" id="locations">
      <div class="container">
        <SecHead num="04" en="LOCATIONS" jp="拠 点 一 覧" />

        <div class="loc-grid">
          <div class="loc hq">
            <div>
              <p class="badge en">HEAD OFFICE</p>
              <h3>
                HIROSHIMA
                <span class="jp">本社／広島県呉市</span>
              </h3>
            </div>
            <div>
              <p class="addr">〒737-0134　広島県呉市広多賀谷 2-6-20</p>
              <p class="tel">
                TEL. 0823-73-3355（業務部）　／　0823-73-3445（営業企画部・総務部）　／　FAX. 0823-73-4446
              </p>
            </div>
            <a
              class="map-cta en"
              href="https://maps.app.goo.gl/Q2wiLbHqzagQSMpR8"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              VIEW ON MAP →
            </a>
          </div>

          {BRANCHES.map((branch) => (
            <div class="loc">
              <p class="index">{branch.index} — BRANCH</p>
              <h4>
                {branch.en}
                <span class="jp">{branch.jp}</span>
              </h4>
              <p class="addr">{branch.addr}</p>
              <p class="contact">
                <span>
                  <strong>TEL</strong>
                  {branch.tel}
                </span>
                <span>
                  <strong>FAX</strong>
                  {branch.fax}
                </span>
              </p>
              <a
                class="map-link"
                href={branch.map}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={`${branch.jp}の地図を見る`}
              >
                <PinIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Cta jp="未 来 を 動 か す 物 流 を、一 緒 に。" photo />
  </>
)
