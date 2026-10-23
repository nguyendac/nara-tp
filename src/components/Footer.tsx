import type { FC } from 'hono/jsx'
import { EXTERNAL, FOOTER_NAV_LEFT, FOOTER_NAV_RIGHT, OFFICES } from '../site'

const ext = { target: '_blank', rel: 'nofollow noopener noreferrer' } as const

/**
 * 共通フッター
 * 実サイトのテーマCSS（--background-footer #282828 ほか）の値を再現している。
 */
export const Footer: FC = () => (
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__main">
        {/* 左：ロゴと拠点情報 */}
        <div class="footer__main--info">
          <div class="logo">
            <img src="/static/img/logo-footer.webp" alt="NARA TRANSPORT 拠点マップ" width="500" height="418" />
          </div>
          <div class="info">
            {OFFICES.map((office) => (
              <div class="info__items">
                <div class="info__items--labels">
                  <a href={office.map} {...ext}>
                    <img src="/static/img/icon-map.png" width="20" height="27" alt="" />
                    {office.name}
                  </a>
                </div>
                <div class="info__items--info">
                  {office.lines.map((line, i) => (
                    <>
                      {i > 0 ? <br /> : null}
                      {line}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右：ナビゲーション・SNS・バナー */}
        <div class="footer__main--nav">
          <div class="nav-left">
            {FOOTER_NAV_LEFT.map((block) => (
              <div class="nav-left__items">
                <h3>{block.heading}</h3>
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
              {FOOTER_NAV_RIGHT.map((item) => (
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
                  <img src="/static/img/br1.webp" alt="Ecopark" width="240" height="114" />
                </a>
                <a href={EXTERNAL.ecoparkLamp} {...ext}>
                  <img src="/static/img/br2.webp" alt="Ecopark 無電極ランプ" width="240" height="114" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="copyright">©︎ Nara Transport inc. All rights reserved.</p>
    </div>
  </footer>
)
