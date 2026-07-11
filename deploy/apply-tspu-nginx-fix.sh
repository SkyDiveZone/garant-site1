#!/usr/bin/env bash
# Apply nginx HTTP/2 + TLS1.2 fix for TSPU (RU ISP filtering).
# Run on VPS as root: bash deploy/apply-tspu-nginx-fix.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/garant-master}"
NGINX_SITE="/etc/nginx/sites-available/garant-master.conf"
CERT_DIR="/etc/letsencrypt/live/garant-master-ekb.ru"

if [[ ! -f "$CERT_DIR/fullchain.pem" ]]; then
  echo "ERROR: SSL cert not found at $CERT_DIR"
  echo "Run certbot first: certbot --nginx -d garant-master-ekb.ru -d www.garant-master-ekb.ru"
  exit 1
fi

cp "$NGINX_SITE" "${NGINX_SITE}.bak.$(date +%Y%m%d-%H%M%S)"
cp "$APP_DIR/deploy/nginx/garant-master-https.conf" "$NGINX_SITE"

nginx -t
systemctl reload nginx

echo ""
echo "==> Checking HTTP/2 and TLS..."
curl -sI --http2 -k "https://127.0.0.1/" -H "Host: garant-master-ekb.ru" | head -5 || true
echo ""
echo "Done. Test from phone WITHOUT VPN in incognito."
echo "If still broken — connect Cloudflare proxy (orange cloud) in front of VPS."
