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

# Проверяем, что устаревшие формулировки не вернулись на прод
if echo "$html" | grep -qE '18 специалистов'; then
  echo "WARN: на странице остались устаревшие формулировки"
  exit 1
fi

echo "OK: сайт отдаёт HTML, CSS и актуальный контент"
