import { jsxRenderer } from 'hono/jsx-renderer'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import type { PageKey } from './site'

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: {
        /** <title> に使うページ名。会社名は自動で付与する */
        title: string
        /** meta description */
        description: string
        /** ヘッダーで .active を付けるページ */
        current: PageKey
        /** base.css に加えて読み込むページ固有CSS（/static/css/ 配下のファイル名） */
        css: string
        /** <main> に付けるクラス（ページ固有CSSのスコープ用） */
        mainClass: string
      }
    ): Response
  }
}

export const renderer = jsxRenderer(({ children, title, description, current, css, mainClass }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title} | 株式会社NARA TRANSPORT</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" href="/static/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <link rel="stylesheet" href="/static/css/base.css" />
        <link rel="stylesheet" href={`/static/css/${css}`} />
      </head>
      <body>
        <Header current={current} />
        <main class={mainClass}>{children}</main>
        <Footer />
        <script src="/static/js/app.js" defer></script>
      </body>
    </html>
  )
})
