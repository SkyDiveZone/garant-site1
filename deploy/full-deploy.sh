#!/usr/bin/env bash
# Деплой + обновление nginx (TSPU).
# Run on VPS: bash deploy/full-deploy.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/garant-master}"
cd "$APP_DIR"

bash deploy/deploy.sh

if [[ -f "$APP_DIR/deploy/nginx/garant-master-https.conf" ]]; then
  echo "==> Applying nginx config..."
  bash deploy/apply-tspu-nginx-fix.sh
fi

echo "==> External check..."
bash deploy/verify.sh https://garant-master-ekb.ru

echo "Full deploy complete."
