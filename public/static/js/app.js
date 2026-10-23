/**
 * NARA TRANSPORT — 下層ページ共通スクリプト
 * 状態を持つのは次の3つだけ:
 *   1. ハンバーガーの開閉
 *   2. 倉庫・架装ギャラリーで選んでいる画像
 *   3. 車両タブの選択中の分類
 */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. ハンバーガー + ドロワー
        実サイト（theme_naraunso_2025 の custom.js）と同じクラス運用:
          .hamburger      → is-active
          .nav-bar-menu   → is_active
          .header         → is_active
          body            → is_active
        実サイトは jQuery だが、ここでは素のJSで同じ振る舞いを再現する。
     ------------------------------------------------------------------ */
  function initDrawer() {
    var btn = document.getElementById('hamburger');
    var drawer = document.getElementById('nav-bar-menu');
    var header = document.querySelector('.header');
    if (!btn || !drawer || !header) return;

    function setOpen(open) {
      btn.classList.toggle('is-active', open);
      drawer.classList.toggle('is_active', open);
      header.classList.toggle('is_active', open);
      document.body.classList.toggle('is_active', open);

      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    function isOpen() {
      return btn.getAttribute('aria-expanded') === 'true';
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(!isOpen());
    });

    // ドロワー内のリンクを踏んだら閉じる
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Escape で閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        setOpen(false);
        btn.focus();
      }
    });

    // 960px超へリサイズしたら閉じる（ナビが通常表示に戻るため）
    var mq = window.matchMedia('(min-width:961px)');
    var onChange = function (e) {
      if (e.matches && isOpen()) setOpen(false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* ------------------------------------------------------------------
     2. ギャラリー（倉庫保管業・架装業）
        サムネイルをクリックするとメイン画像が .16s のフェードで切り替わる
     ------------------------------------------------------------------ */
  function initGalleries() {
    document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
      var main = gallery.querySelector('[data-main]');
      var buttons = gallery.querySelectorAll('.thumbs button');
      if (!main || !buttons.length) return;

      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          var thumb = button.querySelector('img');
          if (!thumb) return;

          var src = button.getAttribute('data-full') || thumb.src;
          if (main.getAttribute('src') === src) return;

          main.style.opacity = '0';
          window.setTimeout(function () {
            main.src = src;
            main.alt = thumb.alt;
            main.style.opacity = '1';
          }, 160);

          buttons.forEach(function (other) {
            other.classList.remove('on');
            other.setAttribute('aria-pressed', 'false');
          });
          button.classList.add('on');
          button.setAttribute('aria-pressed', 'true');
        });
      });
    });
  }

  /* ------------------------------------------------------------------
     3. 車両タブ（data-c による絞り込みと件数表示の更新）
     ------------------------------------------------------------------ */
  function initFleetTabs() {
    var tabs = document.querySelectorAll('.fleet-tabs button');
    var cards = document.querySelectorAll('.v-card');
    var counter = document.getElementById('fleetNum');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var filter = tab.getAttribute('data-f');
        var shown = 0;

        tabs.forEach(function (other) {
          other.setAttribute('aria-selected', other === tab ? 'true' : 'false');
        });

        cards.forEach(function (card) {
          var match = filter === 'all' || card.getAttribute('data-c') === filter;
          card.hidden = !match;
          if (match) shown++;
        });

        if (counter) counter.textContent = String(shown);
      });
    });
  }

  function init() {
    initDrawer();
    initGalleries();
    initFleetTabs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
