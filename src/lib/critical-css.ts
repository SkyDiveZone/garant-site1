/** Минимальные стили в HTML — страница не выглядит «голой», даже если CSS-файл не загрузился. */
export const CRITICAL_CSS = `
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{margin:0;background:#fff;color:#0f172a;font-family:var(--font-inter,system-ui,-apple-system,sans-serif);line-height:1.5;-webkit-font-smoothing:antialiased;overflow-x:hidden}
*,*::before,*::after{box-sizing:border-box}
img,svg,video{display:block;max-width:100%;height:auto}
a{color:#0f4c81;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
h1,h2,h3,h4,p{margin:0}
button{cursor:pointer}
.container-custom{max-width:80rem;margin-left:auto;margin-right:auto}
.hidden{display:none!important}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
header{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(226,232,240,.8)}
main{padding-top:5rem}
section{padding:3rem 1rem}
@media(min-width:640px){section{padding:3.5rem 1.5rem}}
@media(min-width:1024px){section{padding:4.5rem 2rem}}
`.replace(/\s+/g, " ").trim();
