#!/usr/bin/env bash
# Копирует CSS/JS из контейнера на диск — nginx отдаёт их напрямую, без Node.
set -euo pipefail

APP_DIR="${APP_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
STATIC_ROOT="${STATIC_ROOT:-$APP_DIR/.nginx-static}"
CONTAINER="${CONTAINER:-garant-master}"

echo "==> Sync static assets from container..."
mkdir -p "$STATIC_ROOT/_next"

docker cp "$CONTAINER:/app/.next/static/." "$STATIC_ROOT/_next/static/"

css_count="$(find "$STATIC_ROOT/_next/static/css" -name '*.css' 2>/dev/null | wc -l | tr -d ' ')"
if [[ "$css_count" == "0" ]]; then
  echo "FAIL: no CSS files in $STATIC_ROOT/_next/static/css"
  exit 1
fi

echo "OK: synced CSS/JS to $STATIC_ROOT ($css_count css file(s))"
