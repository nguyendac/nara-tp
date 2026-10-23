import type { FC } from 'hono/jsx'

export type SvcIndexItem = {
  /** リンク先のアンカー（#を含まないID） */
  id: string
  /** 連番（01, 02, …） */
  num: string
  /** 英字ラベル */
  en: string
  /** 和文ラベル */
  jp: string
}

/**
 * ページ内目次（事業内容・サービス業で共通）
 *
 * 列数は項目数からそのまま決まるため、CSS変数 --svc-index-cols で渡す。
 * ページごとにCSSで列数を上書きする運用だと、追加したページで指定を忘れた際に
 * 1列へ崩れるため、ここで一元化している。
 */
export const SvcIndex: FC<{ items: SvcIndexItem[]; label: string }> = ({ items, label }) => (
  <section class="svc-index" aria-label={label}>
    <nav class="svc-index-inner" style={`--svc-index-cols:${items.length}`}>
      {items.map((item) => (
        <a href={`#${item.id}`}>
          <span class="no">{item.num}</span>
          <span class="en">{item.en}</span>
          <span class="jp">{item.jp}</span>
        </a>
      ))}
    </nav>
  </section>
)
