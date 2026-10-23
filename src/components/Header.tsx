import type { FC } from 'hono/jsx'
import {
  DRAWER_NAV_LEFT,
  DRAWER_NAV_RIGHT,
  EXTERNAL,
  HEADER_NAV,
  PATHS,
  type PageKey
} from '../site'

const ext = { target: '_blank', rel: 'nofollow noopener noreferrer' } as const

/**
 * 共通ヘッダー
 *
 * 実サイト（theme_naraunso_2025）の構造をそのまま踏襲している：
 *  - `.header__main--nav` の直下に `ul` を置く（間に要素を挟まない）。
 *    ここに `<nav>` などを挟むと `.header__main--nav > ul` が効かなくなる。
 *    セマンティクスは `.header__main--nav` 自体を `<nav>` にすることで担保する。
 *  - ドロワー `.nav-bar-menu` は `<header>` の兄弟として外に置く。
 *  - ハンバーガー押下で `.hamburger` に `is-active`、
 *    `.nav-bar-menu` / `.header` / `body` に `is_active` が付く。
 *
 * 見た目（白のsticky・8項目・黄色の下線）はリデザインのデザイントークンに従う。
 */
export const Header: FC<{ current?: PageKey }> = ({ current }) => (
  <>
    <header class="header">
      <div class="header__container">
        <div class="header__main">
          <div class="logo">
            <a href={PATHS.home}>
              {/* 通常時のロゴ */}
              <picture>
                <img src="/static/img/logo.webp" alt="NARA TRANSPORT" width="120" height="40" />
              </picture>
              {/* ドロワーを開いている間だけ表示する白ロゴ */}
              <picture>
                <img
                  class="logo-w"
                  src="/static/img/logo-w.webp"
                  alt=""
                  width="120"
                  height="40"
                  aria-hidden="true"
                />
              </picture>
            </a>
          </div>

          {/* `ul` は直下に置く（CSSが直子セレクタのため） */}
          <nav class="header__main--nav" aria-label="メインナビゲーション">
            <ul>
              {HEADER_NAV.map((item) => (
                <li>
                  <a
                    href={item.href}
                    class={
                      [item.key === 'contact' ? 'contact' : '', item.key === current ? 'active' : '']
                        .filter(Boolean)
                        .join(' ') || undefined
                    }
                    aria-current={item.key === current ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              class="hamburger hamburger--squeeze"
              id="hamburger"
              aria-label="メニューを開く"
              aria-expanded="false"
              aria-controls="nav-bar-menu"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>

    {/* ドロワー：実サイトの nav.nav-bar-menu に準拠（header の外・兄弟要素） */}
    <nav class="nav-bar-menu" id="nav-bar-menu" aria-label="メニュー" aria-hidden="true">
      <div class="nav-bar-menu__inner">
        <div class="nav-left">
          {DRAWER_NAV_LEFT.map((block) => (
            <div class="nav-left__items">
              <h3>
                <a href={block.href}>{block.heading}</a>
              </h3>
              <ul>
                {block.items.map((item) => (
                  <li>
                    <a href={item.href} {...('external' in item && item.external ? ext : {})}>
                      {item.label}
                      {'external' in item && item.external ? (
                        <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div class="nav-right">
          <ul>
            {DRAWER_NAV_RIGHT.map((item) => (
              <li>
                <a href={item.href}>{item.label}</a>
                {item.children ? (
                  <ul>
                    {item.children.map((child) => (
                      <li>
                        <a href={child.href} {...('external' in child && child.external ? ext : {})}>
                          {child.label}
                          {'external' in child && child.external ? (
                            <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div class="nav-right__social">
            <a href={EXTERNAL.instagram} {...ext} aria-label="Instagram">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href={EXTERNAL.youtube} {...ext} aria-label="YouTube">
              <i class="fab fa-youtube" aria-hidden="true"></i>
            </a>
            <a href={EXTERNAL.line} {...ext} aria-label="LINE">
              <i class="fab fa-line" aria-hidden="true"></i>
            </a>
          </div>

          <div class="nav-right__banner">
            <div class="nav-right__banner--img">
              <a href={EXTERNAL.ecopark} {...ext}>
                <picture>
                  <img src="/static/img/br1.webp" alt="Ecopark" width="240" height="114" />
                </picture>
              </a>
              <a href={EXTERNAL.ecoparkLamp} {...ext}>
                <picture>
                  <img src="/static/img/br2.webp" alt="Ecopark 無電極ランプ" width="240" height="114" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
)
