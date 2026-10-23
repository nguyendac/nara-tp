import type { FC } from 'hono/jsx'
import { PATHS } from '../site'

/**
 * 下層ページ共通ヒーロー
 * 背景は写真を使わず、CSS だけで作ったマテリアル素材（深緑＋織り目＋ノイズ＋プレート）。
 */
export const Hero: FC<{
  /** パンくずの右側に出す英字（例: COMPANY PROFILE） */
  crumb: string
  /** H1 の英字（例: COMPANY） */
  title: string
  /** H1 下の和文サブ。文字間を広げるため1文字ずつ空白を入れて渡す */
  subtitle: string
}> = ({ crumb, title, subtitle }) => (
  <section class="hero" id="page-hero">
    <div class="plates" aria-hidden="true">
      <div class="plate p1"></div>
      <div class="plate p2"></div>
      <div class="plate p3"></div>
    </div>
    <div class="rivets" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>

    <div class="container">
      <nav class="crumbs en" aria-label="パンくずリスト">
        <a href={PATHS.home}>HOME</a>
        <span aria-hidden="true">/</span>
        {crumb}
      </nav>
      <h1>
        {title}
        <span class="h1-jp">{subtitle}</span>
      </h1>
    </div>

    <div class="accent-bar" aria-hidden="true"></div>
  </section>
)

/**
 * セクション見出し（大きな番号＋英字タイトル＋和文サブ）
 */
export const SecHead: FC<{ num: string; en: string; jp: string }> = ({ num, en, jp }) => (
  <div class="sec-head">
    <div class="num en" aria-hidden="true">
      {num}
    </div>
    <div class="titles">
      <h2 class="en-title">{en}</h2>
      <p class="jp-title">{jp}</p>
    </div>
  </div>
)

/**
 * 共通CTA（緑のマテリアル背景＋黄色のボタン）
 */
export const Cta: FC<{
  /** 英字の大見出し。既定は CHALLENGE NEXT. */
  heading?: string
  /** 和文のサブコピー。文字間を広げるため1文字ずつ空白を入れて渡す */
  jp: string
  /** 会社概要のみ背景に写真を敷く */
  photo?: boolean
}> = ({ heading = 'CHALLENGE NEXT.', jp, photo }) => (
  <section class={`cta${photo ? ' cta--photo' : ''}`} id="contact">
    <div class="container">
      <p class="en-big">{heading}</p>
      <p class="jp">{jp}</p>
      <a href={PATHS.contact} class="btn">
        CONTACT US
        <span class="arrow" aria-hidden="true"></span>
      </a>
    </div>
  </section>
)
