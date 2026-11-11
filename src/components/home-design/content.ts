export const HOME_DESIGN_CSS = `@scope (.home-design) {

    :scope {
      --bg: #f4f8fc;
      --blue: #2f6bff;
      --blue-dark: #1d5af0;
      --ink: #172033;
      --muted: #5c6b80;
      --line: #e6edf5;
      --card: #fff;
      --shadow: 0 10px 30px rgba(36, 72, 128, 0.06);
      --radius: 20px;
    }

    * { box-sizing: border-box; }
    [hidden] { display: none !important; }
    :scope { scroll-behavior: smooth; }
    :scope {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: Manrope, "Segoe UI", sans-serif;
      font-size: 16px;
      line-height: 1.45;
    }
    img { max-width: 100%; display: block; }
    button, input, select, textarea { font: inherit; color: inherit; }
    button { cursor: pointer; }
    h1, h2, h3 { text-wrap: balance; }
    a { color: var(--blue); text-decoration: none; }
    :focus-visible { outline: 2px solid var(--blue); outline-offset: 2px; }
    ::selection { background: #d7e5ff; }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .skip {
      position: absolute;
      left: 12px;
      top: -48px;
      background: #fff;
      color: var(--ink);
      padding: 8px 12px;
      border-radius: 10px;
      z-index: 80;
    }
    .skip:focus { top: 12px; }

    .wrap {
      width: min(1240px, calc(100% - 40px));
      margin-inline: auto;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: #fff;
      box-shadow: 0 1px 0 rgba(22, 40, 70, 0.06);
    }
    .header-inner {
      min-height: 76px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      color: inherit;
      flex: none;
    }
    .logo strong {
      display: block;
      font-size: 16px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #162033;
      line-height: 1.15;
    }
    .logo small {
      display: block;
      margin-top: 2px;
      font-size: 11px;
      font-weight: 600;
      color: #8b97a8;
    }

    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-left: 6px;
      flex-shrink: 0;
    }
    .desktop-nav > a,
    .nav-drop > a {
      color: #314056;
      font-weight: 700;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .desktop-nav a:hover,
    .desktop-nav a.is-active { color: var(--blue); }

    .nav-drop { position: relative; }
    .dropdown {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      left: -12px;
      min-width: 220px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(20, 40, 80, 0.12);
      padding: 8px;
      z-index: 5;
    }
    .nav-drop:hover .dropdown,
    .nav-drop:focus-within .dropdown { display: grid; }
    .dropdown a {
      padding: 10px 12px;
      border-radius: 10px;
      color: #243044;
      font-weight: 700;
      font-size: 14px;
    }
    .dropdown a:hover { background: #f4f8fc; color: var(--blue); }

    .header-tools {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 14px;
      flex-shrink: 0;
    }
    .city { position: relative; }
    .city-btn, .header-phone {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: none;
      border: 0;
      padding: 6px 0;
      color: #243044;
    }
    .city-btn { font-weight: 700; font-size: 14px; }
    .header-phone { color: inherit; text-align: left; white-space: nowrap; }
    .header-phone strong {
      display: block;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.15;
      white-space: nowrap;
    }
    .header-phone small, .city-pop {
      color: #8b97a8;
      font-size: 12px;
      font-weight: 600;
    }
    .header-phone:hover strong { color: var(--blue); }
    .city-pop {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: 260px;
      background: #fff;
      color: #314056;
      border-radius: 16px;
      box-shadow: 0 16px 40px rgba(20, 40, 80, 0.12);
      padding: 14px 16px;
      line-height: 1.4;
    }
    .city.is-open .city-pop { display: block; }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      border-radius: 12px;
      padding: 13px 18px;
      font-weight: 800;
      font-size: 15px;
      border: 1px solid transparent;
      background: #fff;
      color: var(--ink);
      text-decoration: none;
      line-height: 1.1;
    }
    .btn-primary { background: var(--blue); color: #fff; }
    .btn-primary:hover { background: var(--blue-dark); }
    .btn-ghost { background: #fff; border-color: #d7e0ec; color: #1b2838; }
    .btn-ghost:hover { border-color: var(--blue); color: var(--blue); }
    .header-cta { padding: 12px 16px; font-size: 14.5px; white-space: nowrap; }

    .burger {
      display: none;
      width: 44px;
      height: 44px;
      border: 0;
      background: #f4f8fc;
      border-radius: 12px;
      padding: 0;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 5px;
    }
    .burger span {
      display: block;
      width: 18px;
      height: 2px;
      background: #172033;
      border-radius: 2px;
    }
    .mobile-nav {
      display: none;
      padding: 4px 0 16px;
      background: #fff;
      border-top: 1px solid #eef2f6;
    }
    .mobile-nav.is-open { display: grid; }
    .mobile-nav a, .mobile-nav .menu-phone {
      padding: 12px 0;
      font-weight: 800;
      font-size: 16px;
      color: #1b2838;
    }
    .mobile-nav .btn { margin-top: 8px; min-height: 52px; }

    .hero { margin-top: 20px; }
    .hero-card {
      background: #fff;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 28px 28px 26px;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.22fr) minmax(340px, 1fr) minmax(250px, 0.78fr);
      gap: 22px;
      align-items: center;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin: 0 0 14px;
      color: #1c8d4e;
      font-weight: 800;
      font-size: 14px;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.16);
    }
    h1 {
      margin: 0 0 12px;
      max-width: 11.6em;
      font-size: 38px;
      line-height: 1.12;
      letter-spacing: -0.035em;
      font-weight: 800;
      color: #141c2b;
    }
    .lead {
      margin: 0 0 18px;
      max-width: 460px;
      color: var(--muted);
      font-size: 16px;
      font-weight: 600;
    }
    .perks {
      display: flex;
      flex-wrap: wrap;
      gap: 16px 18px;
      list-style: none;
      margin: 0 0 22px;
      padding: 0;
    }
    .perks li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: #46556b;
      line-height: 1.25;
      max-width: 168px;
    }
    .perk-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f3f7fb;
      display: grid;
      place-items: center;
      flex: none;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 10px; }
    .hero-actions .btn { min-height: 48px; padding-inline: 18px; }

    .scene { position: relative; width: min(100%, 430px); margin-inline: auto; }
    .house-art { width: 100%; height: auto; }
    .callout {
      position: absolute;
      top: 8px;
      left: 4%;
      z-index: 1;
      margin: 0;
      font-size: 14.5px;
      font-weight: 800;
      color: #1b2838;
      transform: rotate(-8deg);
      transform-origin: left center;
    }
    .callout-arrow {
      position: absolute;
      left: 92%;
      top: 12px;
      width: 74px;
      height: 40px;
    }

    .search {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      background: #fff;
      border: 1px solid #e5edf6;
      border-radius: 14px;
      padding: 6px 6px 6px 12px;
      box-shadow: 0 8px 22px rgba(40, 80, 140, 0.05);
    }
    .search:focus-within {
      border-color: var(--blue);
      box-shadow: 0 0 0 4px rgba(47, 107, 255, 0.12);
    }
    .search input {
      flex: 1;
      min-width: 0;
      border: 0;
      background: transparent;
      padding: 8px 0;
      outline: none;
      font-weight: 600;
    }
    .search input::placeholder { color: #9aa6b5; font-weight: 600; }
    .search .btn { padding: 10px 16px; border-radius: 10px; }
    .search-note {
      min-height: 0;
      margin: 8px 0 0;
      font-size: 13px;
      font-weight: 700;
      color: #314056;
    }
    .search-note:empty { display: none; }
    .checks {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      gap: 8px 12px;
      list-style: none;
      margin: 12px 0 0;
      padding: 0;
      font-size: 12.5px;
      font-weight: 700;
      color: #3c4c62;
    }
    .checks li { display: inline-flex; align-items: center; gap: 6px; }

    .side-stack { display: flex; flex-direction: column; gap: 12px; }
    .mini-card {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
      background: #fff;
      border: 1px solid #e8eef6;
      border-radius: 16px;
      padding: 14px;
      box-shadow: 0 6px 18px rgba(36, 72, 128, 0.04);
    }
    .mini-card:hover { border-color: #d5e4fb; }
    .mini-card strong { display: block; font-size: 14.5px; font-weight: 800; line-height: 1.25; }
    .mini-card small { display: block; margin-top: 3px; color: var(--muted); font-weight: 600; font-size: 13px; }
    .mini-icon, .go {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: #f3f7ff;
      display: grid;
      place-items: center;
      flex: none;
    }
    .go {
      width: 28px;
      height: 28px;
      margin-left: auto;
      border-radius: 50%;
      background: transparent;
      color: #90a0b4;
    }
    .mini-card:hover .go { transform: translateX(3px); color: var(--blue); }

    .cats {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    .cat {
      display: flex;
      align-items: center;
      gap: 14px;
      min-height: 108px;
      padding: 16px 16px 16px 18px;
      border-radius: var(--radius);
      color: inherit;
    }
    .cat:hover { transform: translateY(-2px); }
    .cat h2 { margin: 0 0 4px; font-size: 18px; font-weight: 800; letter-spacing: -0.02em; }
    .cat p { margin: 0; color: #5c6b80; font-size: 13.5px; font-weight: 600; line-height: 1.35; }
    .cat-icon { width: 54px; height: 54px; flex: none; display: grid; place-items: center; }
    .cat-arrow {
      margin-left: auto;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.72);
      display: grid;
      place-items: center;
      color: #7e8da3;
      flex: none;
    }
    .cat:hover .cat-arrow { transform: translateX(3px); color: var(--blue); }
    .cat-plumber { background: #e7f3ff; }
    .cat-electric { background: #fff4e3; }
    .cat-handyman { background: #e5f8ec; }
    .cat-repair { background: #f2eaff; }
    .all-services-link { display: grid; justify-items: end; gap: 2px; text-align: right; }
    .all-services-link span { max-width: 260px; color: var(--muted); font-size: 13px; font-weight: 700; line-height: 1.35; }
    #order-dialog { width: min(860px, calc(100% - 28px)); }
    .price-layout { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(220px, 0.8fr); gap: 18px; align-items: start; }
    .price-contacts {
      background: #f4f8fc;
      border-radius: 16px;
      padding: 16px;
      display: grid;
      gap: 10px;
    }
    .price-contacts p { margin: 0 0 4px; font-weight: 800; }
    .msg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      min-height: 52px;
      padding: 12px 14px;
      border-radius: 14px;
      font-weight: 800;
      color: #fff;
    }
    .msg small { display: block; font-weight: 700; font-size: 12px; opacity: 0.9; }
    .msg-phone { background: var(--blue); flex-wrap: wrap; }
    .msg-phone > span:last-child { white-space: nowrap; }
    .msg-max { background: #5b4dff; }
    .msg-tg { background: #2aabee; }
    .msg:hover { filter: brightness(0.95); }

    .trust {
      margin-top: 16px;
      background: #fff;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      padding: 8px;
      scroll-margin-top: 90px;
    }
    .trust li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      font-size: 13px;
      font-weight: 800;
      line-height: 1.3;
      color: #243044;
    }
    .trust-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #f2f7ff;
      display: grid;
      place-items: center;
      flex: none;
    }

    .section-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 16px;
      margin: 28px 0 14px;
    }
    .section-head h2, .block-title {
      margin: 0;
      font-size: 32px;
      letter-spacing: -0.03em;
      font-weight: 800;
    }
    .section-head a { font-weight: 800; }
    .section-head a:hover { color: var(--blue-dark); }
    .lead-sm { margin: -4px 0 14px; color: var(--muted); font-weight: 600; }

    .popular-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
    }
    .service-card {
      background: #fff;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 12px 12px 14px;
      scroll-margin-top: 96px;
    }
    .service-card.is-hit { outline: 2px solid var(--blue); outline-offset: 3px; }
    .service-card img {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      border-radius: 14px;
      background: #eef3f8;
    }
    .photo-faucet { object-position: center 42%; }
    .photo-shower { object-position: center 28%; }
    .photo-toilet { object-position: center 62%; }
    .service-card h3 {
      margin: 12px 4px 12px;
      font-size: 16px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .price {
      margin: 0 4px 12px;
      color: var(--blue);
      font-weight: 800;
      font-size: 15px;
    }
    .card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px; }
    .card-actions .btn { padding: 10px 8px; font-size: 14px; }

    .catalog-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 0 0 14px;
    }
    .catalog-tabs button {
      border: 1px solid #d7e0ec;
      background: #fff;
      color: #243044;
      border-radius: 999px;
      padding: 10px 16px;
      font-weight: 800;
      min-height: 44px;
    }
    .catalog-tabs button.is-on {
      background: var(--blue);
      border-color: var(--blue);
      color: #fff;
    }
    .catalog-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    .catalog-card {
      background: #fff;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 8px 18px 10px;
      scroll-margin-top: 90px;
    }
    .catalog-card h3 {
      margin: 14px 0 4px;
      font-size: 20px;
      font-weight: 800;
    }
    .catalog-card ul { list-style: none; margin: 0; padding: 0; }
    .catalog-card li {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 12px;
      align-items: center;
      padding: 12px 0;
      border-top: 1px solid #eef2f7;
      font-weight: 700;
      line-height: 1.3;
    }
    .catalog-card .btn { padding: 8px 12px; font-size: 14px; }

    .steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    .step, .review, .contact-card {
      background: #fff;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
    .step { padding: 18px 18px 20px; }
    .step-num {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #eaf1ff;
      color: var(--blue);
      display: grid;
      place-items: center;
      font-weight: 800;
      margin-bottom: 12px;
    }
    .step h3, .review h3 { margin: 0 0 6px; font-size: 18px; }
    .step p, .review p { margin: 0; color: var(--muted); font-weight: 600; }

    .reviews {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .review { padding: 20px; }
    .review p { color: #243044; font-size: 15.5px; line-height: 1.45; }
    .home-review { padding: 12px 12px 16px; display: flex; flex-direction: column; }
    .home-review-shot { border-radius: 14px; overflow: hidden; margin-bottom: 12px; background: #eef3f8; }
    .home-review-shot button[aria-label="Открыть фотографию"] { height: auto; aspect-ratio: 16 / 10; }
    .home-review-text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .home-review.is-open .home-review-text {
      display: block;
      -webkit-line-clamp: unset;
      overflow: visible;
    }
    .home-review-shot video { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; display: block; background: #101820; }
    .home-review-reply {
      margin-top: 12px;
      padding: 12px;
      border-radius: 12px;
      background: #f4f7ff;
    }
    .home-review-reply strong { display: block; margin-bottom: 4px; color: var(--blue); font-size: 13px; }
    .home-review-reply p { margin: 0; color: #243044; font-size: 13px; font-weight: 600; line-height: 1.45; }
    .section-head .review-more {
      border: 0;
      background: none;
      padding: 0;
      color: var(--blue);
      font: inherit;
      font-weight: 800;
      cursor: pointer;
    }
    .section-head .review-more:hover { color: var(--blue-dark); }
    .home-review .who { margin-top: auto; padding-top: 14px; }
    .home-review .who small { display: block; color: var(--muted); font-weight: 700; font-size: 12px; }
    .review-stars { color: #f5b400; letter-spacing: 1px; font-size: 14px; }
    .review-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
    .review-actions .btn { min-height: 44px; }
    .who { display: flex; align-items: center; gap: 10px; margin-top: 16px; }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #eaf1ff;
      color: var(--blue);
      display: grid;
      place-items: center;
      font-weight: 800;
      flex: none;
    }
    .who strong { display: block; font-size: 14px; }
    .who span { color: var(--muted); font-size: 13px; font-weight: 700; }
    .tag {
      display: inline-block;
      margin-top: 12px;
      background: #f3f7ff;
      color: #2a4f9a;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 12px;
      font-weight: 800;
    }

    .contact-card {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 28px;
      padding: 28px;
      scroll-margin-top: 90px;
    }
    .contact-card h2 { margin: 0 0 8px; font-size: 32px; letter-spacing: -0.03em; }
    .contact-list { list-style: none; margin: 18px 0 0; padding: 0; display: grid; gap: 12px; }
    .contact-list li { display: flex; gap: 10px; align-items: flex-start; font-weight: 700; }
    .contact-list a { color: inherit; }
    .contact-list a:hover { color: var(--blue); }
    .big-phone {
      display: inline-block;
      margin-top: 16px;
      font-size: 28px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--ink);
    }
    .big-phone:hover { color: var(--blue); }
    form { display: grid; gap: 12px; }
    label { display: grid; gap: 6px; font-size: 13px; font-weight: 800; color: #314056; }
    input, select, textarea {
      width: 100%;
      border: 1px solid #e1e8f0;
      border-radius: 12px;
      padding: 12px 14px;
      background: #fff;
      font-weight: 600;
    }
    textarea { min-height: 90px; resize: vertical; }
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--blue);
      box-shadow: 0 0 0 4px rgba(47, 107, 255, 0.12);
    }
    .form-success {
      background: #f3fbf6;
      border-radius: 16px;
      padding: 16px;
    }
    .form-success strong { display: block; margin-bottom: 6px; }
    .form-success p { margin: 0 0 12px; color: #314056; font-weight: 600; }
    .form-actions { display: flex; flex-wrap: wrap; gap: 8px; }

    .footer { padding: 28px 0 36px; color: #7d8b9e; font-weight: 700; font-size: 14px; }
    .footer-inner { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .footer a { color: #314056; }

    dialog {
      position: fixed;
      inset: 0;
      margin: auto;
      height: fit-content;
      max-height: calc(100dvh - 28px);
      overflow: auto;
      border: 0;
      padding: 0;
      width: min(520px, calc(100% - 28px));
      border-radius: 20px;
      box-shadow: 0 24px 70px rgba(20, 40, 80, 0.2);
      background: #fff;
    }
    dialog::backdrop { background: rgba(18, 32, 58, 0.38); }
    .dialog-body { padding: 22px; position: relative; }
    .dialog-close {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 10px;
      background: #f4f8fc;
      font-size: 22px;
      line-height: 1;
      color: #314056;
    }
    .dialog-body h3 { margin: 0 28px 6px 0; font-size: 24px; letter-spacing: -0.03em; }
    .muted { margin: 0 0 14px; color: var(--muted); font-weight: 600; }
    #detail-photo {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      border-radius: 14px;
      margin-bottom: 14px;
    }
    #detail-text { margin: 0 0 16px; color: #314056; font-weight: 600; }

    @media (max-width: 1280px) {
      .desktop-nav { display: none; }
      .burger { display: inline-flex; }
    }
    @media (max-width: 1080px) {
      .hero-grid { grid-template-columns: 1fr; }
      .side-stack { display: grid; grid-template-columns: repeat(3, 1fr); }
      .popular-grid { grid-template-columns: repeat(3, 1fr); }
      .trust { grid-template-columns: repeat(3, 1fr); }
      .steps { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 860px) {
      .city, .header-cta { display: none; }
      .cats { grid-template-columns: 1fr 1fr; }
      .reviews, .catalog-grid, .contact-card { grid-template-columns: 1fr; }
    }
    @media (max-width: 720px) {
      .price-layout { grid-template-columns: 1fr; }
      .all-services-link { justify-items: start; text-align: left; }
      .wrap { width: min(1240px, calc(100% - 28px)); }
      h1 { font-size: 32px; max-width: none; }
      .checks { flex-wrap: wrap; justify-content: flex-start; }
      .section-head h2, .block-title, .contact-card h2 { font-size: 26px; }
      .hero-card { padding: 18px 16px 16px; }
      .perks { flex-direction: column; align-items: flex-start; }
      .perks li { max-width: none; }
      .hero-actions, .card-actions { flex-direction: column; }
      .hero-actions .btn, .card-actions .btn, .catalog-card .btn { width: 100%; min-height: 52px; }
      .side-stack, .cats, .trust, .popular-grid, .steps { grid-template-columns: 1fr; }
      .catalog-card li { grid-template-columns: 1fr; gap: 8px; }
      .callout { font-size: 13px; }
      .big-phone { font-size: 24px; }
      .header-phone small { display: none; }
    }
    @media (max-width: 520px) {
      .header-inner, .header-tools { gap: 8px; }
      .logo small { max-width: 112px; line-height: 1.2; }
      .header-phone strong { font-size: 13px; }
      .logo strong { font-size: 14px; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        transition: none !important;
        animation: none !important;
      }
    }
  
    .consent {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
      color: #5c6b80;
    }
    .consent input {
      width: 18px;
      height: 18px;
      margin-top: 2px;
      padding: 0;
      flex: none;
    }
    .consent a { font-weight: 800; }
    .form-error {
      margin: 0;
      color: #b42318;
      font-size: 13px;
      font-weight: 700;
    }
    .contact-list a { color: inherit; font-weight: 700; }

}
`;

export const HOME_DESIGN_BODY = `
  <a class="skip" href="#main">К содержанию</a>
  <header class="header">
    <div class="wrap header-inner">
      <a class="logo" href="#top">
        <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
          <path fill="#2f6bff" d="M16 3.5 4 13.2h3.2V27h6.6v-6.4h4.4V27H25V13.2H28.2L16 3.5z"/>
        </svg>
        <span>
          <strong>Гарант Мастер</strong>
          <small>Бытовые услуги в Екатеринбурге</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Разделы страницы">
        <div class="nav-drop">
          <a href="#services">Услуги
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.2 6 8l4-3.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </a>
          <div class="dropdown">
            <a href="#catalog" data-tab="plumber">Сантехник</a>
            <a href="#catalog" data-tab="handyman">Мастер на час</a>
            <a href="#catalog" data-tab="electric">Электрик</a>
            <a href="#catalog" data-tab="repair">Ремонт квартир</a>
            <a href="#popular">Популярные услуги</a>
          </div>
        </div>
        <a href="#benefits">Преимущества</a>
        <a href="#process">Как мы работаем</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <div class="header-tools">
        <div class="city">
          <button class="city-btn" type="button" aria-expanded="false" aria-controls="city-pop">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="#2f6bff" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
            Екатеринбург
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.2 6 8l4-3.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
          <div class="city-pop" id="city-pop">Выезжаем по всем районам Екатеринбурга — от Академического до Уралмаша.</div>
        </div>
        <a class="header-phone" href="tel:+79229385788">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#2f6bff" d="M7.2 3.5h2.2l1.3 3.3-1.6 1.1a12.6 12.6 0 0 0 5.9 5.9l1.1-1.6 3.4 1.3v2.2c0 .8-.6 1.5-1.4 1.6A15.2 15.2 0 0 1 5.6 4.9c.1-.8.8-1.4 1.6-1.4z"/></svg>
          <span>
            <strong>8 (922) 938-57-88</strong>
            <small>Круглосуточно</small>
          </span>
        </a>
        <button class="btn btn-primary header-cta" type="button" data-order="Обратный звонок" data-mode="call">Заказать звонок</button>
        <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Открыть меню">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="wrap mobile-nav" id="mobile-nav">
      <a href="#services">Услуги</a>
      <a href="#benefits">Преимущества</a>
      <a href="#process">Как мы работаем</a>
      <a href="#reviews">Отзывы</a>
      <a href="#contacts">Контакты</a>
      <p class="menu-phone">Екатеринбург · круглосуточно</p>
      <button class="btn btn-primary" type="button" data-order="Обратный звонок" data-mode="call">Заказать звонок</button>
    </div>
  </header>

  <main id="main">
    <div class="wrap">
      <section class="hero" id="top">
        <div class="hero-card">
          <div class="hero-grid">
            <div>
              <p class="status"><span class="dot" aria-hidden="true"></span> Работаем 24/7</p>
              <h1>Профессиональный ремонт и обслуживание в Екатеринбурге</h1>
              <p class="lead">Сантехник, электрик, мастер на час и ремонт квартир в одной службе. Быстро, честно, с гарантией.</p>
              <ul class="perks">
                <li>
                  <span class="perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2" stroke-linecap="round"/></svg>
                  </span>
                  Выезд в течение 60 минут
                </li>
                <li>
                  <span class="perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><path d="M12 3 5 6v6c0 4.5 3 7.2 7 8.5 4-1.3 7-4 7-8.5V6l-7-3z"/><path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                  Гарантия на все работы
                </li>
                <li>
                  <span class="perk-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>
                  </span>
                  Наличный и безналичный расчет
                </li>
              </ul>
              <div class="hero-actions">
                <button class="btn btn-primary" type="button" data-order="Вызов мастера">
                  Вызвать мастера
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <a class="btn btn-ghost" href="tel:+79229385788">
                  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.2 3.5h2.2l1.3 3.3-1.6 1.1a12.6 12.6 0 0 0 5.9 5.9l1.1-1.6 3.4 1.3v2.2c0 .8-.6 1.5-1.4 1.6A15.2 15.2 0 0 1 5.6 4.9c.1-.8.8-1.4 1.6-1.4z"/></svg>
                  Позвонить
                </a>
              </div>
            </div>

            <div>
              <div class="scene">
                <p class="callout">Ваш мастер уже в пути!
                  <svg class="callout-arrow" viewBox="0 0 80 42" aria-hidden="true">
                    <path d="M4 8c16 1 24 16 46 20" fill="none" stroke="#1d2838" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M42 22l10 7-11 3" fill="none" stroke="#1d2838" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
                <svg class="house-art" viewBox="0 0 520 390" role="img" aria-label="Белый дом с синей крышей, зелёными кустами и голубым небом">
                  <ellipse cx="268" cy="206" rx="168" ry="126" fill="#e5f2ff"/>
                  <ellipse cx="268" cy="328" rx="178" ry="22" fill="#ffffff"/>
                  <ellipse cx="268" cy="334" rx="132" ry="11" fill="#e5f6e4"/>
                  <rect x="92" y="246" width="9" height="50" rx="3" fill="#e4c7a2"/>
                  <circle cx="96" cy="228" r="26" fill="#74d15a"/>
                  <circle cx="78" cy="244" r="17" fill="#5ec44a"/>
                  <circle cx="116" cy="246" r="15" fill="#8ad96c"/>
                  <rect x="418" y="250" width="8" height="44" rx="3" fill="#e4c7a2"/>
                  <circle cx="422" cy="232" r="22" fill="#6dcf4e"/>
                  <circle cx="406" cy="246" r="14" fill="#8fe06c"/>
                  <circle cx="438" cy="248" r="13" fill="#57bf42"/>
                  <ellipse cx="268" cy="312" rx="108" ry="10" fill="#d7e6f6"/>
                  <rect x="176" y="168" width="168" height="136" rx="4" fill="#ffffff" stroke="#e7eef6"/>
                  <polygon points="154,180 260,96 260,180" fill="#6aa6ff"/>
                  <polygon points="260,96 366,180 260,180" fill="#3f7cf2"/>
                  <rect x="306" y="108" width="18" height="42" rx="2" fill="#f7fbff" stroke="#d5e2f0"/>
                  <rect x="302" y="102" width="26" height="10" rx="2" fill="#ffffff" stroke="#d5e2f0"/>
                  <rect x="198" y="196" width="44" height="38" rx="3" fill="#2f6bff"/>
                  <rect x="202" y="200" width="36" height="30" fill="#d9eeff"/>
                  <path d="M220 200v30M202 215h36" stroke="#2f6bff" stroke-width="2"/>
                  <rect x="278" y="196" width="44" height="38" rx="3" fill="#2f6bff"/>
                  <rect x="282" y="200" width="36" height="30" fill="#d9eeff"/>
                  <path d="M300 200v30M282 215h36" stroke="#2f6bff" stroke-width="2"/>
                  <rect x="242" y="250" width="38" height="54" rx="3" fill="#2f6bff"/>
                  <circle cx="272" cy="278" r="2.4" fill="#ffffff"/>
                  <rect x="230" y="300" width="62" height="7" rx="2" fill="#e6eef6"/>
                  <circle cx="164" cy="304" r="16" fill="#73d25c"/>
                  <circle cx="184" cy="312" r="13" fill="#5abf48"/>
                  <circle cx="148" cy="312" r="11" fill="#8bde72"/>
                  <circle cx="336" cy="306" r="15" fill="#68cc50"/>
                  <circle cx="356" cy="312" r="17" fill="#7ed864"/>
                  <circle cx="376" cy="304" r="12" fill="#56b844"/>
                </svg>
              </div>
              <form class="search" id="search-form" role="search">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" fill="none" stroke="#9aa6b5" stroke-width="1.8"/><path d="m16 16 4 4" stroke="#9aa6b5" stroke-width="1.8" stroke-linecap="round"/></svg>
                <label class="sr-only" for="query">Что вам нужно сделать?</label>
                <input id="query" name="query" type="search" placeholder="Что вам нужно сделать?" autocomplete="off">
                <button class="btn btn-primary" type="submit">Найти</button>
              </form>
              <p class="search-note" id="search-note" role="status"></p>
              <ul class="checks">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="#2f6bff"/><path d="M4.5 8.2 7 10.5 11.5 5.8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Проверенные мастера
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="#2f6bff"/><path d="M4.5 8.2 7 10.5 11.5 5.8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  Честные цены
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="#2f6bff"/><path d="M4.5 8.2 7 10.5 11.5 5.8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  С гарантией
                </li>
              </ul>
            </div>

            <div class="side-stack">
              <button class="mini-card" type="button" data-detail="materials">
                <span class="mini-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 40 40">
                    <rect x="9" y="16" width="22" height="15" rx="3" fill="#2f6bff"/>
                    <path d="M14 16h12l-1.2-4h-9.6L14 16z" fill="#8eb4ff"/>
                    <rect x="18" y="8" width="3" height="8" rx="1" fill="#ffb020"/>
                    <path d="M15 22h10" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
                  </svg>
                </span>
                <span>
                  <strong>Материалы привозим сами</strong>
                  <small>Не нужно искать магазин</small>
                </span>
                <span class="go" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </button>
              <button class="mini-card" type="button" data-detail="docs">
                <span class="mini-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 40 40">
                    <path d="M20 7 31 12v8c0 6.2-4.4 10.4-11 12-6.6-1.6-11-5.8-11-12v-8l11-5z" fill="#2f6bff"/>
                    <path d="m15.5 20 3 3 6.5-7" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span>
                  <strong>Чек и гарантия в тот же день</strong>
                  <small>Прозрачные цены и документы</small>
                </span>
                <span class="go" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </button>
              <button class="mini-card" type="button" data-detail="pay">
                <span class="mini-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 40 40">
                    <rect x="7" y="12" width="26" height="16" rx="3" fill="#2f6bff"/>
                    <rect x="7" y="17" width="26" height="4" fill="#1d4ed0"/>
                    <rect x="11" y="23" width="9" height="2" rx="1" fill="#fff"/>
                  </svg>
                </span>
                <span>
                  <strong>Безопасная оплата</strong>
                  <small>100% безопасные расчеты</small>
                </span>
                <span class="go" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="cats" id="services" aria-label="Направления">
        <a class="cat cat-plumber" href="#catalog" data-tab="plumber">
          <span class="cat-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 64 64" aria-hidden="true">
              <path d="M18 50h10v-4H22c0-8 6-14 14-14h12v-8H36C24 24 18 32 18 44v6z" fill="#2f6bff"/>
              <rect x="16" y="18" width="8" height="8" rx="2" fill="#2f6bff"/>
              <path d="M48 28c1.5 5 1.2 9 0 13" stroke="#8eb7ff" stroke-width="3" stroke-linecap="round"/>
              <rect x="14" y="50" width="16" height="4" rx="2" fill="#2f6bff"/>
            </svg>
          </span>
          <span>
            <h2>Сантехник</h2>
            <p>Установка, ремонт и замена сантехники</p>
          </span>
          <span class="cat-arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>
        </a>
        <a class="cat cat-electric" href="#catalog" data-tab="electric">
          <span class="cat-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 56 56" aria-hidden="true">
              <rect x="6" y="14" width="44" height="30" rx="6" fill="#fff" stroke="#c9b48a" stroke-width="1.5"/>
              <circle cx="22" cy="29" r="6.5" fill="none" stroke="#d7c7a8"/>
              <circle cx="34" cy="29" r="6.5" fill="none" stroke="#d7c7a8"/>
              <circle cx="20.2" cy="27.2" r="1.3" fill="#6a6258"/>
              <circle cx="23.8" cy="27.2" r="1.3" fill="#6a6258"/>
              <circle cx="32.2" cy="27.2" r="1.3" fill="#6a6258"/>
              <circle cx="35.8" cy="27.2" r="1.3" fill="#6a6258"/>
              <rect x="21.2" cy="31.2" width="1.6" height="2.4" rx=".4" fill="#8a8174"/>
              <rect x="33.2" cy="31.2" width="1.6" height="2.4" rx=".4" fill="#8a8174"/>
            </svg>
          </span>
          <span>
            <h2>Электрик</h2>
            <p>Монтаж и ремонт электрики в доме</p>
          </span>
          <span class="cat-arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>
        </a>
        <a class="cat cat-handyman" href="#catalog" data-tab="handyman">
          <span class="cat-icon" aria-hidden="true">
            <svg width="50" height="50" viewBox="0 0 56 56" aria-hidden="true">
              <rect x="6" y="18" width="26" height="15" rx="5" fill="#ffcc00"/>
              <rect x="10" y="18" width="8" height="15" rx="3" fill="#ffe14d"/>
              <rect x="30" y="21" width="9" height="9" rx="2" fill="#2a2a2a"/>
              <path d="M39 23.5h12l2 2.5-2 2.5H39z" fill="#cfd5dc"/>
              <path d="M14 33h12c0 6-3 10-8 10h-2c-4 0-6-3-6-7v-3h4z" fill="#242424"/>
            </svg>
          </span>
          <span>
            <h2>Мастер на час</h2>
            <p>Мелкий ремонт, сборка мебели и др.</p>
          </span>
          <span class="cat-arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>
        </a>
        <a class="cat cat-repair" href="#catalog" data-tab="repair">
          <span class="cat-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 56 56">
              <rect x="8" y="12" width="30" height="12" rx="3" fill="#6d5ef0"/>
              <rect x="10" y="24" width="26" height="4" rx="1" fill="#cfc6ff"/>
              <rect x="21" y="28" width="4" height="12" rx="1" fill="#4c3ec4"/>
              <path d="M12 44h24" stroke="#4c3ec4" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </span>
          <span>
            <h2>Ремонт квартир</h2>
            <p>Косметический и капитальный ремонт квартир</p>
          </span>
          <span class="cat-arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 3.5 11 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg></span>
        </a>
      </section>

      <section aria-labelledby="benefits-title">
        <h2 id="benefits-title" class="sr-only">Преимущества</h2>
        <ul class="trust" id="benefits">
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><path d="M7 4h3l1 3-2 1a10 10 0 0 0 5 5l1-2 3 1v3a2 2 0 0 1-2 2A13 13 0 0 1 5 6a2 2 0 0 1 2-2z" stroke-linejoin="round"/></svg></span>Один номер на все услуги</li>
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg></span>Работаем по Екатеринбургу</li>
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4" stroke-linecap="round"/></svg></span>Смета до начала работ</li>
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2" stroke-linecap="round"/></svg></span>Опоздание предупреждаем</li>
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8" stroke-linejoin="round"><path d="M8 11V7a2 2 0 0 1 2-2h1V4"/><path d="M8 11H5.5A1.5 1.5 0 0 0 4 12.5v2A5.5 5.5 0 0 0 9.5 20H14a5 5 0 0 0 5-5v-2.5a1.5 1.5 0 0 0-1.5-1.5H14"/><path d="M14 8V6.5A1.5 1.5 0 0 0 12.5 5H11v6"/></svg></span>Повторный выезд по нашей ошибке — бесплатно</li>
          <li><span class="trust-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6M8 13h8M8 17h6" stroke-linecap="round"/></svg></span>Закрывающие документы для юрлиц</li>
        </ul>
      </section>

      <section id="popular" aria-labelledby="popular-title">
        <div class="section-head">
          <h2 id="popular-title">Популярные услуги</h2>
          <div class="all-services-link">
            <a href="#catalog">Все услуги →</a>
          </div>
        </div>
        <div class="popular-grid">
          <article class="service-card" id="card-mixer" data-keys="смесител кран сантех">
            <img class="photo-faucet" src="/design/faucet.jpg" alt="Хромированный смеситель, из которого течёт вода в белую раковину">
            <h3>Установка смесителя</h3>
            <div class="card-actions">
              <button class="btn btn-primary" type="button" data-order="Установка смесителя">Цена</button>
              <button class="btn btn-ghost" type="button" data-detail="mixer">Подробнее</button>
            </div>
          </article>
          <article class="service-card" id="card-toilet" data-keys="унитаз туалет">
            <img class="photo-toilet" src="/design/toilet.jpg" alt="Белый унитаз в светлой ванной комнате">
            <h3>Установка унитаза</h3>
            <div class="card-actions">
              <button class="btn btn-primary" type="button" data-order="Установка унитаза">Цена</button>
              <button class="btn btn-ghost" type="button" data-detail="toilet">Подробнее</button>
            </div>
          </article>
          <article class="service-card" id="card-outlet" data-keys="розетк электр">
            <img class="photo-outlet" src="/design/outlet.jpg" alt="Белая двойная розетка на светлой стене">
            <h3>Замена розетки</h3>
            <div class="card-actions">
              <button class="btn btn-primary" type="button" data-order="Замена розетки">Цена</button>
              <button class="btn btn-ghost" type="button" data-detail="outlet">Подробнее</button>
            </div>
          </article>
          <article class="service-card" id="card-clog" data-keys="засор душ лейк прочист канализа">
            <img class="photo-shower" src="/design/shower.jpg" alt="Хромированная душевая лейка, из которой идёт вода">
            <h3>Устранение засора</h3>
            <div class="card-actions">
              <button class="btn btn-primary" type="button" data-order="Устранение засора">Цена</button>
              <button class="btn btn-ghost" type="button" data-detail="clog">Подробнее</button>
            </div>
          </article>
          <article class="service-card" id="card-wiring" data-keys="проводк щит автомат кабель электр">
            <img class="photo-panel" src="/design/panel.jpg" alt="Открытый электрощит с автоматами и цветными проводами">
            <h3>Замена проводки</h3>
            <div class="card-actions">
              <button class="btn btn-primary" type="button" data-order="Замена проводки">Цена</button>
              <button class="btn btn-ghost" type="button" data-detail="wiring">Подробнее</button>
            </div>
          </article>
        </div>
      </section>

      <section id="catalog" aria-labelledby="catalog-title">
        <div class="section-head">
          <h2 id="catalog-title">Все услуги</h2>
        </div>
        <p class="lead-sm">Если вашей задачи нет в списке — опишите её, подскажем, кто поедет.</p>
        <div class="catalog-tabs" role="tablist" aria-label="Направления услуг">
          <button type="button" class="is-on" role="tab" aria-selected="true" data-tab="plumber">Сантехник</button>
          <button type="button" role="tab" aria-selected="false" data-tab="handyman">Мастер на час</button>
          <button type="button" role="tab" aria-selected="false" data-tab="electric">Электрик</button>
          <button type="button" role="tab" aria-selected="false" data-tab="repair">Ремонт квартир</button>
        </div>
        <div class="catalog-grid" data-panel="plumber">
          <article class="catalog-card" id="cat-mixers">
            <h3>Смесители</h3>
            <ul>
              <li><span>Установка смесителя</span><button class="btn btn-primary" type="button" data-order="Установка смесителя">Цена</button></li>
              <li><span>Замена картриджа смесителя</span><button class="btn btn-primary" type="button" data-order="Замена картриджа смесителя">Цена</button></li>
              <li><span>Установка гигиенического душа</span><button class="btn btn-primary" type="button" data-order="Установка гигиенического душа">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-toilets">
            <h3>Унитазы и биде</h3>
            <ul>
              <li><span>Установка унитаза</span><button class="btn btn-primary" type="button" data-order="Установка унитаза">Цена</button></li>
              <li><span>Установка инсталляции</span><button class="btn btn-primary" type="button" data-order="Установка инсталляции">Цена</button></li>
              <li><span>Замена арматуры унитаза</span><button class="btn btn-primary" type="button" data-order="Замена арматуры унитаза">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-bath">
            <h3>Ванны и душевые</h3>
            <ul>
              <li><span>Установка ванны</span><button class="btn btn-primary" type="button" data-order="Установка ванны">Цена</button></li>
              <li><span>Установка душевой кабины</span><button class="btn btn-primary" type="button" data-order="Установка душевой кабины">Цена</button></li>
              <li><span>Герметизация ванны и душа</span><button class="btn btn-primary" type="button" data-order="Герметизация ванны и душа">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-sinks">
            <h3>Раковины</h3>
            <ul>
              <li><span>Установка раковины</span><button class="btn btn-primary" type="button" data-order="Установка раковины">Цена</button></li>
              <li><span>Замена сифона</span><button class="btn btn-primary" type="button" data-order="Замена сифона">Цена</button></li>
              <li><span>Демонтаж раковины</span><button class="btn btn-primary" type="button" data-order="Демонтаж раковины">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-clogs">
            <h3>Засоры и протечки</h3>
            <ul>
              <li><span>Устранение засора</span><button class="btn btn-primary" type="button" data-order="Устранение засора">Цена</button></li>
              <li><span>Прочистка труб тросом</span><button class="btn btn-primary" type="button" data-order="Прочистка труб тросом">Цена</button></li>
              <li><span>Устранение течи</span><button class="btn btn-primary" type="button" data-order="Устранение течи">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-pipes">
            <h3>Трубы</h3>
            <ul>
              <li><span>Разводка труб</span><button class="btn btn-primary" type="button" data-order="Разводка труб">Цена</button></li>
              <li><span>Замена крана</span><button class="btn btn-primary" type="button" data-order="Замена крана">Цена</button></li>
              <li><span>Установка счётчика воды</span><button class="btn btn-primary" type="button" data-order="Установка счётчика воды">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-boilers">
            <h3>Бойлеры и фильтры</h3>
            <ul>
              <li><span>Установка бойлера до 50 л</span><button class="btn btn-primary" type="button" data-order="Установка бойлера до 50 л">Цена</button></li>
              <li><span>Установка проточного водонагревателя</span><button class="btn btn-primary" type="button" data-order="Установка проточного водонагревателя">Цена</button></li>
              <li><span>Установка фильтра для воды</span><button class="btn btn-primary" type="button" data-order="Установка фильтра для воды">Цена</button></li>
            </ul>
          </article>
        </div>
        <div class="catalog-grid" data-panel="handyman" hidden>
          <article class="catalog-card" id="cat-furniture">
            <h3>Мебель</h3>
            <ul>
              <li><span>Сборка кухонного гарнитура и шкафа</span><button class="btn btn-primary" type="button" data-order="Сборка кухонного гарнитура и шкафа">Цена</button></li>
              <li><span>Установка полок</span><button class="btn btn-primary" type="button" data-order="Установка полок">Цена</button></li>
              <li><span>Установка карниза</span><button class="btn btn-primary" type="button" data-order="Установка карниза">Цена</button></li>
              <li><span>Навеска зеркала</span><button class="btn btn-primary" type="button" data-order="Навеска зеркала">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-doors">
            <h3>Двери</h3>
            <ul>
              <li><span>Установка дверного замка</span><button class="btn btn-primary" type="button" data-order="Установка дверного замка">Цена</button></li>
              <li><span>Установка дверной ручки</span><button class="btn btn-primary" type="button" data-order="Установка дверной ручки">Цена</button></li>
              <li><span>Регулировка двери</span><button class="btn btn-primary" type="button" data-order="Регулировка двери">Цена</button></li>
              <li><span>Установка доводчика</span><button class="btn btn-primary" type="button" data-order="Установка доводчика">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-kitchen">
            <h3>Кухня</h3>
            <ul>
              <li><span>Установка варочной панели</span><button class="btn btn-primary" type="button" data-order="Установка варочной панели">Цена</button></li>
              <li><span>Установка духового шкафа</span><button class="btn btn-primary" type="button" data-order="Установка духового шкафа">Цена</button></li>
              <li><span>Установка вытяжки</span><button class="btn btn-primary" type="button" data-order="Установка вытяжки">Цена</button></li>
              <li><span>Подключение посудомоечной машины</span><button class="btn btn-primary" type="button" data-order="Подключение посудомоечной машины">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-appliances">
            <h3>Техника</h3>
            <ul>
              <li><span>Установка телевизора на стену</span><button class="btn btn-primary" type="button" data-order="Установка телевизора на стену">Цена</button></li>
              <li><span>Подключение стиральной машины</span><button class="btn btn-primary" type="button" data-order="Подключение стиральной машины">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-heat">
            <h3>Отопление</h3>
            <ul>
              <li><span>Установка полотенцесушителя</span><button class="btn btn-primary" type="button" data-order="Установка полотенцесушителя">Цена</button></li>
              <li><span>Установка радиатора отопления</span><button class="btn btn-primary" type="button" data-order="Установка радиатора отопления">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-small">
            <h3>Мелкий ремонт</h3>
            <ul>
              <li><span>Сверление отверстий</span><button class="btn btn-primary" type="button" data-order="Сверление отверстий">Цена</button></li>
              <li><span>Заделка швов</span><button class="btn btn-primary" type="button" data-order="Заделка швов">Цена</button></li>
            </ul>
          </article>
        </div>
        <div class="catalog-grid" data-panel="electric" hidden>
          <article class="catalog-card" id="cat-sockets">
            <h3>Розетки и выключатели</h3>
            <ul>
              <li><span>Установка розетки и выключателя</span><button class="btn btn-primary" type="button" data-order="Установка розетки и выключателя">Цена</button></li>
              <li><span>Установка проходного выключателя</span><button class="btn btn-primary" type="button" data-order="Установка проходного выключателя">Цена</button></li>
              <li><span>Установка блока розеток на кухне</span><button class="btn btn-primary" type="button" data-order="Установка блока розеток на кухне">Цена</button></li>
              <li><span>Установка дверного звонка</span><button class="btn btn-primary" type="button" data-order="Установка дверного звонка">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-light">
            <h3>Освещение</h3>
            <ul>
              <li><span>Установка люстры</span><button class="btn btn-primary" type="button" data-order="Установка люстры">Цена</button></li>
              <li><span>Установка бра</span><button class="btn btn-primary" type="button" data-order="Установка бра">Цена</button></li>
              <li><span>Установка точечных светильников</span><button class="btn btn-primary" type="button" data-order="Установка точечных светильников">Цена</button></li>
              <li><span>Монтаж светодиодной ленты</span><button class="btn btn-primary" type="button" data-order="Монтаж светодиодной ленты">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-panel">
            <h3>Щит и автоматы</h3>
            <ul>
              <li><span>Установка автоматического выключателя</span><button class="btn btn-primary" type="button" data-order="Установка автоматического выключателя">Цена</button></li>
              <li><span>Установка УЗО</span><button class="btn btn-primary" type="button" data-order="Установка УЗО">Цена</button></li>
              <li><span>Сборка электрощита</span><button class="btn btn-primary" type="button" data-order="Сборка электрощита">Цена</button></li>
              <li><span>Замена электросчётчика</span><button class="btn btn-primary" type="button" data-order="Замена электросчётчика">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-wire">
            <h3>Проводка</h3>
            <ul>
              <li><span>Прокладка кабеля</span><button class="btn btn-primary" type="button" data-order="Прокладка кабеля">Цена</button></li>
              <li><span>Прокладка кабеля в гофре</span><button class="btn btn-primary" type="button" data-order="Прокладка кабеля в гофре">Цена</button></li>
              <li><span>Монтаж кабель-канала</span><button class="btn btn-primary" type="button" data-order="Монтаж кабель-канала">Цена</button></li>
              <li><span>Штробление стен</span><button class="btn btn-primary" type="button" data-order="Штробление стен">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-diag">
            <h3>Диагностика</h3>
            <ul>
              <li><span>Поиск неисправности электропроводки</span><button class="btn btn-primary" type="button" data-order="Поиск неисправности электропроводки">Цена</button></li>
              <li><span>Диагностика тёплого пола</span><button class="btn btn-primary" type="button" data-order="Диагностика тёплого пола">Цена</button></li>
            </ul>
          </article>
        </div>
        <div class="catalog-grid" data-panel="repair" hidden>
          <article class="catalog-card" id="cat-repair-type">
            <h3>Вид ремонта</h3>
            <ul>
              <li><span>Косметический ремонт</span><button class="btn btn-primary" type="button" data-order="Косметический ремонт">Цена</button></li>
              <li><span>Капитальный ремонт</span><button class="btn btn-primary" type="button" data-order="Капитальный ремонт">Цена</button></li>
              <li><span>Ремонт под ключ</span><button class="btn btn-primary" type="button" data-order="Ремонт под ключ">Цена</button></li>
              <li><span>Ремонт в новостройке</span><button class="btn btn-primary" type="button" data-order="Ремонт в новостройке">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-rooms">
            <h3>Комнаты</h3>
            <ul>
              <li><span>Ремонт ванной</span><button class="btn btn-primary" type="button" data-order="Ремонт ванной">Цена</button></li>
              <li><span>Ремонт кухни</span><button class="btn btn-primary" type="button" data-order="Ремонт кухни">Цена</button></li>
              <li><span>Ремонт гостиной</span><button class="btn btn-primary" type="button" data-order="Ремонт гостиной">Цена</button></li>
              <li><span>Ремонт спальни</span><button class="btn btn-primary" type="button" data-order="Ремонт спальни">Цена</button></li>
              <li><span>Ремонт прихожей</span><button class="btn btn-primary" type="button" data-order="Ремонт прихожей">Цена</button></li>
              <li><span>Ремонт балкона</span><button class="btn btn-primary" type="button" data-order="Ремонт балкона">Цена</button></li>
            </ul>
          </article>
          <article class="catalog-card" id="cat-whole">
            <h3>Квартира целиком</h3>
            <ul>
              <li><span>Ремонт комнаты</span><button class="btn btn-primary" type="button" data-order="Ремонт комнаты">Цена</button></li>
              <li><span>Ремонт однокомнатной квартиры</span><button class="btn btn-primary" type="button" data-order="Ремонт однокомнатной квартиры">Цена</button></li>
            </ul>
          </article>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title">
        <div class="section-head">
          <h2 id="process-title">Как мы работаем</h2>
        </div>
        <ol class="steps">
          <li class="step">
            <div class="step-num">1</div>
            <h3>Заявка</h3>
            <p>Звоните или оставляете номер. Диспетчер уточняет задачу и район Екатеринбурга.</p>
          </li>
          <li class="step">
            <div class="step-num">2</div>
            <h3>Выезд</h3>
            <p>Мастер выезжает в течение 60 минут. Если опаздывает — предупреждаем заранее.</p>
          </li>
          <li class="step">
            <div class="step-num">3</div>
            <h3>Смета</h3>
            <p>Цену называем до начала работ. Пока сумма не согласована, к работе не приступаем.</p>
          </li>
          <li class="step">
            <div class="step-num">4</div>
            <h3>Сдача</h3>
            <p>Показываем результат, отдаём чек и гарантию в тот же день. Для юрлиц — закрывающие документы.</p>
          </li>
        </ol>
      </section>

      <section id="reviews" aria-labelledby="reviews-title">
        <div id="home-reviews-slot"></div>
      </section>

      <section aria-labelledby="contacts-title" style="margin-top: 28px;">
        <div class="contact-card" id="contacts">
          <div>
            <h2 id="contacts-title">Контакты</h2>
            <p class="lead">Один номер на сантехника, электрика, мастера на час и ремонт квартир. Диспетчер отвечает круглосуточно.</p>
            <a class="big-phone" href="tel:+79229385788">8 (922) 938-57-88</a>
            <ul class="contact-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#2f6bff" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                <span>Екатеринбург, выезд по всему городу</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2" stroke-linecap="round"/></svg>
                <span>Круглосуточно, без выходных</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8" aria-hidden="true"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v6h6" stroke-linecap="round"/></svg>
                <span>Для юрлиц готовим закрывающие документы</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2f6bff" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6" stroke-linecap="round"/></svg>
                <a href="mailto:STESER-OFFICIAL@yandex.ru">STESER-OFFICIAL@yandex.ru</a>
              </li>
            </ul>
          </div>
          <form id="contact-form">
            <label>Имя
              <input name="name" autocomplete="name" required placeholder="Как к вам обращаться">
            </label>
            <label>Телефон
              <input name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="+7">
            </label>
            <label>Что сделать
              <input name="task" required placeholder="Например, течёт смеситель на кухне">
            </label>
            
            <label class="consent">
              <input name="consent" type="checkbox" required>
              <span>Соглашаюсь с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a> и <a href="/user-agreement" target="_blank" rel="noopener noreferrer">пользовательским соглашением</a> и даю согласие на обработку персональных данных.</span>
            </label>
            <p class="form-error" id="contact-error" hidden></p>
            <button class="btn btn-primary" type="submit">Заказать звонок</button>
          </form>
          <div class="form-success" id="contact-success" hidden>
            <strong>Заявку приняли</strong>
            <p>Перезвоним в течение 5 минут. Если срочно — позвоните, работаем круглосуточно.</p>
            <div class="form-actions">
              <a class="btn btn-primary" href="tel:+79229385788">Позвонить</a>
              <button class="btn btn-ghost" type="button" id="contact-again">Новая заявка</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <span>Гарант Мастер · бытовые услуги в Екатеринбурге</span>
      <a href="tel:+79229385788">8 (922) 938-57-88</a>
      <a href="mailto:STESER-OFFICIAL@yandex.ru">STESER-OFFICIAL@yandex.ru</a>
      <a href="/privacy-policy">Политика конфиденциальности</a>
      <a href="/user-agreement">Пользовательское соглашение</a>
      <span>Работаем круглосуточно</span>
    </div>
  </footer>

  <dialog id="order-dialog" aria-labelledby="order-title">
    <div class="dialog-body">
      <button class="dialog-close" type="button" data-close aria-label="Закрыть">×</button>
      <div class="price-layout">
        <div>
          <h3 id="order-title">Узнать цену</h3>
          <p class="muted" id="order-lead">Напишите, что нужно сделать. Точную сумму назовём до начала работ.</p>
          <form id="order-form">
            <label>Имя
              <input name="name" autocomplete="name" required placeholder="Как к вам обращаться">
            </label>
            <label>Телефон
              <input name="phone" type="tel" inputmode="tel" autocomplete="tel" required placeholder="+7">
            </label>
            <label>Услуга
              <select name="service" id="order-service" required>
                <option value="Обратный звонок">Обратный звонок</option>
                <option value="Вызов мастера">Вызов мастера</option>
                <option value="Ремонт квартир">Ремонт квартир</option>
                <option value="Замена розетки">Замена розетки</option>
                <option value="Замена проводки">Замена проводки</option>
                <option value="Другая задача">Другая задача</option>
                <optgroup label="Смесители">
                  <option>Установка смесителя</option>
                  <option>Замена картриджа смесителя</option>
                  <option>Установка гигиенического душа</option>
                </optgroup>
                <optgroup label="Унитазы и биде">
                  <option>Установка унитаза</option>
                  <option>Установка инсталляции</option>
                  <option>Замена арматуры унитаза</option>
                </optgroup>
                <optgroup label="Ванны и душевые">
                  <option>Установка ванны</option>
                  <option>Установка душевой кабины</option>
                  <option>Герметизация ванны и душа</option>
                </optgroup>
                <optgroup label="Раковины">
                  <option>Установка раковины</option>
                  <option>Замена сифона</option>
                  <option>Демонтаж раковины</option>
                </optgroup>
                <optgroup label="Засоры и протечки">
                  <option>Устранение засора</option>
                  <option>Прочистка труб тросом</option>
                  <option>Устранение течи</option>
                </optgroup>
                <optgroup label="Трубы">
                  <option>Разводка труб</option>
                  <option>Замена крана</option>
                  <option>Установка счётчика воды</option>
                </optgroup>
                <optgroup label="Бойлеры и фильтры">
                  <option>Установка бойлера до 50 л</option>
                  <option>Установка проточного водонагревателя</option>
                  <option>Установка фильтра для воды</option>
                </optgroup>
                <optgroup label="Мебель">
                  <option>Сборка кухонного гарнитура и шкафа</option>
                  <option>Установка полок</option>
                  <option>Установка карниза</option>
                  <option>Навеска зеркала</option>
                </optgroup>
                <optgroup label="Двери">
                  <option>Установка дверного замка</option>
                  <option>Установка дверной ручки</option>
                  <option>Регулировка двери</option>
                  <option>Установка доводчика</option>
                </optgroup>
                <optgroup label="Кухня">
                  <option>Установка варочной панели</option>
                  <option>Установка духового шкафа</option>
                  <option>Установка вытяжки</option>
                  <option>Подключение посудомоечной машины</option>
                </optgroup>
                <optgroup label="Техника">
                  <option>Установка телевизора на стену</option>
                  <option>Подключение стиральной машины</option>
                </optgroup>
                <optgroup label="Отопление">
                  <option>Установка полотенцесушителя</option>
                  <option>Установка радиатора отопления</option>
                </optgroup>
                <optgroup label="Мелкий ремонт">
                  <option>Сверление отверстий</option>
                  <option>Заделка швов</option>
                </optgroup>
                <optgroup label="Розетки и выключатели">
                  <option>Установка розетки и выключателя</option>
                  <option>Установка проходного выключателя</option>
                  <option>Установка блока розеток на кухне</option>
                  <option>Установка дверного звонка</option>
                </optgroup>
                <optgroup label="Освещение">
                  <option>Установка люстры</option>
                  <option>Установка бра</option>
                  <option>Установка точечных светильников</option>
                  <option>Монтаж светодиодной ленты</option>
                </optgroup>
                <optgroup label="Щит и автоматы">
                  <option>Установка автоматического выключателя</option>
                  <option>Установка УЗО</option>
                  <option>Сборка электрощита</option>
                  <option>Замена электросчётчика</option>
                </optgroup>
                <optgroup label="Проводка">
                  <option>Прокладка кабеля</option>
                  <option>Прокладка кабеля в гофре</option>
                  <option>Монтаж кабель-канала</option>
                  <option>Штробление стен</option>
                </optgroup>
                <optgroup label="Диагностика">
                  <option>Поиск неисправности электропроводки</option>
                  <option>Диагностика тёплого пола</option>
                </optgroup>
                <optgroup label="Ремонт квартир">
                  <option>Косметический ремонт</option>
                  <option>Капитальный ремонт</option>
                  <option>Ремонт под ключ</option>
                  <option>Ремонт в новостройке</option>
                  <option>Ремонт ванной</option>
                  <option>Ремонт кухни</option>
                  <option>Ремонт гостиной</option>
                  <option>Ремонт спальни</option>
                  <option>Ремонт прихожей</option>
                  <option>Ремонт балкона</option>
                  <option>Ремонт комнаты</option>
                  <option>Ремонт однокомнатной квартиры</option>
                </optgroup>
              </select>
            </label>
            <label>Комментарий
              <textarea name="comment" placeholder="Адрес, подъезд, что уже пробовали"></textarea>
            </label>
            
            <label class="consent">
              <input name="consent" type="checkbox" required>
              <span>Соглашаюсь с <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a> и <a href="/user-agreement" target="_blank" rel="noopener noreferrer">пользовательским соглашением</a> и даю согласие на обработку персональных данных.</span>
            </label>
            <p class="form-error" id="order-error" hidden></p>
            <button class="btn btn-primary" type="submit">Отправить</button>
          </form>
          <div class="form-success" id="order-success" hidden>
            <strong>Заявка осталась в браузере</strong>
            <p id="order-success-text"></p>
            <button class="btn btn-ghost" type="button" id="order-again">Новая заявка</button>
          </div>
        </div>
        <aside class="price-contacts" aria-label="Связаться сразу">
          <p>Или напишите сразу</p>
          <a class="msg msg-phone" href="tel:+79229385788">
            <span>Телефон<small>Круглосуточно</small></span>
            <span>8 (922) 938-57-88</span>
          </a>
          <a class="msg msg-max" href="https://web.max.ru/456683052" target="_blank" rel="noopener noreferrer">
            <span>MAX<small>8 (922) 938-57-88</small></span>
            <span>Открыть</span>
          </a>
          <a class="msg msg-tg" href="https://t.me/garant_master_zayavki" target="_blank" rel="noopener noreferrer">
            <span>Telegram<small>@garant_master_zayavki</small></span>
            <span>Открыть</span>
          </a>
        </aside>
      </div>
    </div>
  </dialog>

  <dialog id="detail-dialog" aria-labelledby="detail-title">
    <div class="dialog-body">
      <button class="dialog-close" type="button" data-close aria-label="Закрыть">×</button>
      <img id="detail-photo" alt="" hidden>
      <h3 id="detail-title"></h3>
      <p class="price" id="detail-price"></p>
      <p id="detail-text"></p>
      <button class="btn btn-primary" type="button" id="detail-order">Цена</button>
    </div>
  </dialog>

  `;

export const HOME_DESIGN_SCRIPT = `
    async function submitLead(form, error, problem) {
      const data = new FormData(form);
      if (!data.get("consent")) {
        error.hidden = false;
        error.textContent = "Нужно согласие на обработку персональных данных.";
        return false;
      }
      error.hidden = true;
      const button = form.querySelector("[type=submit]");
      button.disabled = true;
      try {
        const response = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(data.get("name") || ""),
            phone: String(data.get("phone") || ""),
            problem: String(problem || ""),
            schedule: "asap",
            pageUrl: location.pathname + location.search
          })
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok) {
          error.hidden = false;
          error.textContent = payload.error || "Заявка не отправлена. Позвоните 8 (922) 938-57-88.";
          return false;
        }
        trackFormSubmit();
        return true;
      } catch (err) {
        error.hidden = false;
        error.textContent = "Нет связи с сервером. Позвоните 8 (922) 938-57-88.";
        return false;
      } finally {
        button.disabled = false;
      }
    }


    const details = {
      mixer: {
        title: "Установка смесителя",
        photo: "/design/faucet.jpg",
        alt: "Хромированный смеситель",
        text: "Снимаем старый смеситель, ставим новый и проверяем соединения. Если смесителя ещё нет — мастер привезёт его с собой, магазин искать не нужно."
      },
      toilet: {
        title: "Установка унитаза",
        photo: "/design/toilet.jpg",
        alt: "Белый унитаз",
        text: "Демонтаж старого унитаза, установка нового, подключение к воде и канализации, герметизация стыка с полом. Цену называем до начала работ."
      },
      outlet: {
        title: "Замена розетки",
        photo: "/design/outlet.jpg",
        alt: "Белая розетка",
        text: "Обесточиваем линию, меняем механизм и рамку, проверяем крепление. Напряжение включаем только после проверки."
      },
      clog: {
        title: "Устранение засора",
        photo: "/design/shower.jpg",
        alt: "Душевая лейка",
        text: "Смотрим, где стоит засор: сифон, труба или стояк. Прочищаем и проверяем, что вода уходит. Если нужен доступ к общему стояку — скажем об этом до начала."
      },
      wiring: {
        title: "Замена проводки",
        photo: "/design/panel.jpg",
        alt: "Электрощит",
        text: "Сначала осмотр и смета. Меняем участок проводки, проверяем автоматы и контакты. Итог зависит от длины линии и состояния стен — сумму фиксируем до работ."
      },
      materials: {
        title: "Материалы привозим сами",
        text: "На выезде с собой лен, герметик, дюбели и ходовые автоматы. Крупную позицию — смеситель, унитаз, кабель — привезём, если скажете об этом в заявке."
      },
      docs: {
        title: "Чек и гарантия в тот же день",
        text: "После работы отдаём чек и гарантию на выполненные работы. В гарантии написано, на что она действует. Для юрлиц готовим закрывающие документы."
      },
      pay: {
        title: "Безопасная оплата",
        text: "Наличный и безналичный расчет. Сумму фиксируем в смете до начала. Доплат, которых не было в смете, не добавляем по ходу работы."
      }
    };

    const orderDialog = document.getElementById("order-dialog");
    const detailDialog = document.getElementById("detail-dialog");
    const orderForm = document.getElementById("order-form");
    const orderSuccess = document.getElementById("order-success");
    const orderTitle = document.getElementById("order-title");
    const orderService = document.getElementById("order-service");
    const detailPhoto = document.getElementById("detail-photo");
    const detailOrder = document.getElementById("detail-order");
    let detailService = "";

    function openOrder(service, mode) {
      orderForm.hidden = false;
      orderSuccess.hidden = true;
      orderForm.reset();
      orderTitle.textContent = mode === "call" ? "Заказать звонок" : (service === "Вызов мастера" ? "Вызвать мастера" : "Узнать цену");
      const hasOption = [...orderService.options].some((option) => option.value === service);
      if (hasOption) {
        orderService.value = service;
      } else {
        orderService.value = mode === "call" ? "Обратный звонок" : "Другая задача";
        if (service && !hasOption) orderForm.elements.comment.value = service;
      }
      orderDialog.showModal();
    }

    function openDetail(key) {
      const item = details[key];
      if (!item) return;
      document.getElementById("detail-title").textContent = item.title;
      document.getElementById("detail-price").hidden = true;
      document.getElementById("detail-text").textContent = item.text;
      if (item.photo) {
        detailPhoto.src = item.photo;
        detailPhoto.alt = item.alt;
        detailPhoto.hidden = false;
      } else {
        detailPhoto.hidden = true;
        detailPhoto.removeAttribute("src");
      }
      detailService = item.title;
      detailDialog.showModal();
    }

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link) trackContactHref(link.getAttribute("href"));
      const closer = event.target.closest("[data-close]");
      if (closer) {
        closer.closest("dialog").close();
        return;
      }
      const orderButton = event.target.closest("[data-order]");
      if (orderButton) {
        openOrder(orderButton.dataset.order, orderButton.dataset.mode);
        return;
      }
      const tabButton = event.target.closest("[data-tab]");
      if (tabButton) showTab(tabButton.dataset.tab);
      const detailButton = event.target.closest("[data-detail]");
      if (detailButton) openDetail(detailButton.dataset.detail);
    });

    detailOrder.addEventListener("click", () => {
      detailDialog.close();
      openOrder(detailService);
    });

    [orderDialog, detailDialog].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        const rect = dialog.getBoundingClientRect();
        const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
        if (!inside) dialog.close();
      });
    });

    orderForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(orderForm);
      const error = document.getElementById("order-error");
      submitLead(orderForm, error, [
        "Услуга: " + data.get("service"),
        data.get("comment")
      ].filter(Boolean).join(". ")).then((ok) => {
        if (!ok) return;
        document.getElementById("order-success-text").textContent =
          data.get("name") + ", заявку на «" + data.get("service") + "» приняли. Перезвоним в течение 5 минут.";
        orderForm.hidden = true;
        orderSuccess.hidden = false;
      });
    });

    document.getElementById("order-again").addEventListener("click", () => {
      orderSuccess.hidden = true;
      orderForm.hidden = false;
    });

    const contactForm = document.getElementById("contact-form");
    const contactSuccess = document.getElementById("contact-success");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const error = document.getElementById("contact-error");
      submitLead(contactForm, error, data.get("task")).then((ok) => {
        if (!ok) return;
        contactForm.hidden = true;
        contactSuccess.hidden = false;
      });
    });
    document.getElementById("contact-again").addEventListener("click", () => {
      contactSuccess.hidden = true;
      contactForm.hidden = false;
      contactForm.reset();
    });

    const searchForm = document.getElementById("search-form");
    const searchNote = document.getElementById("search-note");
    function showTab(name) {
      document.querySelectorAll(".catalog-tabs [data-tab]").forEach((button) => {
        const on = button.dataset.tab === name;
        button.classList.toggle("is-on", on);
        button.setAttribute("aria-selected", String(on));
      });
      document.querySelectorAll("[data-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.panel !== name;
      });
    }

    const extraTargets = [
      { keys: ["ремонт квартир", "косметическ", "капитальн", "новострой", "под ключ"], id: "cat-repair-type", panel: "repair", label: "Вид ремонта" },
      { keys: ["гостиная", "спальн", "прихож", "балкон", "кухн"], id: "cat-rooms", panel: "repair", label: "Комнаты" },
      { keys: ["однокомнат", "квартира целиком"], id: "cat-whole", panel: "repair", label: "Квартира целиком" },
      { keys: ["мебел", "шкаф", "полк", "карниз", "зеркал"], id: "cat-furniture", panel: "handyman", label: "Мебель" },
      { keys: ["замок", "доводчик", "двер"], id: "cat-doors", panel: "handyman", label: "Двери" },
      { keys: ["варочн", "духов", "вытяж", "посудомой"], id: "cat-kitchen", panel: "handyman", label: "Кухня" },
      { keys: ["телевизор", "стирал"], id: "cat-appliances", panel: "handyman", label: "Техника" },
      { keys: ["полотенце", "радиатор"], id: "cat-heat", panel: "handyman", label: "Отопление" },
      { keys: ["сверлен", "швы"], id: "cat-small", panel: "handyman", label: "Мелкий ремонт" },
      { keys: ["проходн", "звонок", "выключател"], id: "cat-sockets", panel: "electric", label: "Розетки и выключатели" },
      { keys: ["бра", "точечн", "лента", "освещен", "люстр"], id: "cat-light", panel: "electric", label: "Освещение" },
      { keys: ["узо", "электрощит", "автомат"], id: "cat-panel", panel: "electric", label: "Щит и автоматы" },
      { keys: ["гофра", "штроб", "кабель"], id: "cat-wire", panel: "electric", label: "Проводка" },
      { keys: ["тепл", "неисправ"], id: "cat-diag", panel: "electric", label: "Диагностика" },
      { keys: ["сифон", "раковин", "демонтаж"], id: "cat-sinks", panel: "plumber", label: "Раковины" },
      { keys: ["ванн", "кабин", "гермет"], id: "cat-bath", panel: "plumber", label: "Ванны и душевые" },
      { keys: ["труб", "развод", "счетчик"], id: "cat-pipes", panel: "plumber", label: "Трубы" },
      { keys: ["бойлер", "фильтр", "проточн"], id: "cat-boilers", panel: "plumber", label: "Бойлеры и фильтры" },
      { keys: ["картридж", "гигиенич"], id: "cat-mixers", panel: "plumber", label: "Смесители" },
      { keys: ["унитаз", "биде", "инсталляц", "арматур"], id: "cat-toilets", panel: "plumber", label: "Унитазы и биде" }
    ];

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = searchForm.query.value.trim().toLowerCase().replaceAll("ё", "е");
      document.querySelectorAll(".service-card").forEach((card) => card.classList.remove("is-hit"));
      if (!query) {
        searchNote.textContent = "Напишите задачу: смеситель, розетка, засор, проводка.";
        return;
      }
      const hits = [...document.querySelectorAll(".service-card")].filter((card) =>
        card.dataset.keys.split(" ").some((key) => query.includes(key) || key.includes(query))
      );
      if (hits.length) {
        hits.forEach((card) => card.classList.add("is-hit"));
        searchNote.textContent = "Нашли: " + hits.map((card) => card.querySelector("h3").textContent).join(", ") + ".";
        hits[0].scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      const extra = extraTargets.find((item) => item.keys.some((key) => query.includes(key)));
      if (extra) {
        if (extra.panel) showTab(extra.panel);
        searchNote.textContent = "Смотрите раздел «" + extra.label + "».";
        document.getElementById(extra.id).scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      searchNote.textContent = "Точного названия нет в списке. Опишите задачу диспетчеру — подскажем, кто поедет.";
    });

    const burger = document.querySelector(".burger");
    const mobileNav = document.getElementById("mobile-nav");
    burger.addEventListener("click", () => {
      const open = !mobileNav.classList.contains("is-open");
      mobileNav.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    });
    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) {
        mobileNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    const city = document.querySelector(".city");
    const cityBtn = city.querySelector(".city-btn");
    cityBtn.addEventListener("click", () => {
      const open = city.classList.toggle("is-open");
      cityBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (event) => {
      if (!city.contains(event.target)) {
        city.classList.remove("is-open");
        cityBtn.setAttribute("aria-expanded", "false");
      }
    });

    const navLinks = [...document.querySelectorAll(".desktop-nav a[href^='#']")];
    const observed = [...new Set(navLinks.map((link) => document.querySelector(link.getAttribute("href"))))].filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    observed.forEach((section) => spy.observe(section));

    const tab = new URLSearchParams(location.search).get("tab");
    if (tab === "plumber" || tab === "electric" || tab === "handyman" || tab === "repair") {
      showTab(tab);
    }
  `;
