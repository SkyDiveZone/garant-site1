#!/usr/bin/env bash
# Проверка после деплоя: HTML + CSS + JS должны отдавать 200.
# Запуск: bash deploy/verify.sh [base_url]
set -euo pipefail

BASE="${1:-http://127.0.0.1:3000}"

echo "==> Проверка $BASE"

html="$(curl -fsS "$BASE/master-na-chas")"

css_path="$(echo "$html" | grep -oE '/_next/static/css/[a-zA-Z0-9._-]+\.css' | head -1)"
js_path="$(echo "$html" | grep -oE '/_next/static/chunks/webpack-[a-zA-Z0-9._-]+\.js' | head -1)"

if [[ -z "$css_path" ]]; then
  echo "FAIL: в HTML нет ссылки на CSS — сайт будет без стилей"
  exit 1
fi

echo "CSS: $css_path"
curl -fsS -o /dev/null -w "  HTTP %{http_code}\n" "$BASE$css_path"

if [[ -n "$js_path" ]]; then
  echo "JS:  $js_path"
  curl -fsS -o /dev/null -w "  HTTP %{http_code}\n" "$BASE$js_path"
fi

# Старые маркеры — не должны быть на проде
if echo "$html" | grep -qE 'от [0-9]+ ₽|₽|руб\.|рублей|Прозрачные цены|18 специалистов|стоимость|Стоимость|цена|Цена'; then
  echo "WARN: на странице остался контент с ценами или устаревшими формулировками"
  exit 1
fi

echo "OK: сайт отдаёт HTML, CSS и актуальный контент"
