import Script from "next/script";

import { YANDEX_METRIKA_ID } from "@/lib/yandex-metrika";
import { YANDEX_METRIKA_INIT_JSON } from "@/lib/yandex-metrika-init";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export function Analytics() {
  return (
    <>
      {/* Счётчик в head: tag.js грузится рано, init — после CSS (см. yandex-metrika-init). */}
      <Script id="yandex-metrika-loader" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');
        `}
      </Script>
      <Script id="yandex-metrika-init" strategy="afterInteractive">
        {`
          (function () {
            var COUNTER_ID = ${YANDEX_METRIKA_ID};
            var INIT = ${YANDEX_METRIKA_INIT_JSON};

            function stylesReady() {
              var links = document.querySelectorAll('link[rel="stylesheet"]');
              if (!links.length) return Promise.resolve();

              return Promise.all(Array.prototype.map.call(links, function (link) {
                if (link.sheet) return Promise.resolve();
                return new Promise(function (resolve) {
                  link.addEventListener('load', resolve, { once: true });
                  link.addEventListener('error', resolve, { once: true });
                });
              }));
            }

            function afterPaint() {
              return new Promise(function (resolve) {
                requestAnimationFrame(function () {
                  requestAnimationFrame(resolve);
                });
              });
            }

            function bootMetrika() {
              if (window.__garantMetrikaInited) return;
              window.__garantMetrikaInited = true;

              if (typeof window.ym !== 'function') return;

              window.ym(COUNTER_ID, 'init', INIT);
              window.ym(
                COUNTER_ID,
                'hit',
                window.location.pathname + window.location.search + window.location.hash
              );
            }

            function start() {
              stylesReady()
                .then(afterPaint)
                .then(bootMetrika)
                .catch(bootMetrika);
            }

            if (document.readyState === 'complete') {
              start();
            } else {
              window.addEventListener('load', start, { once: true });
            }
          })();
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {PIXEL_ID && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
