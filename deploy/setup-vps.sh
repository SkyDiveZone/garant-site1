#!/usr/bin/env bash
set -euo pipefail

# First-time VPS setup for Ubuntu 22.04/24.04 (Timeweb Cloud VPS).
# Run as root: bash deploy/setup-vps.sh

APP_DIR="/var/www/garant-master"
REPO_URL="${REPO_URL:-https://github.com/SkyDiveZone/garant-site1.git}"
DOMAIN="${DOMAIN:-garant-master-ekb.ru}"

echo "==> Installing system packages..."
apt-get update
apt-get install -y ca-certificates curl git nginx certbot python3-certbot-nginx

if ! command -v docker >/dev/null 2>&1; then
  echo "==> Installing Docker..."
  curl -fsSL https://get.docker.com | sh
  systemctl enable docker
  systemctl start docker
fi

echo "==> Cloning project..."
mkdir -p "$(dirname "$APP_DIR")"
if [ ! -d "$APP_DIR/.git" ]; then
  git clone "$REPO_URL" "$APP_DIR"
else
  echo "Repository already exists at $APP_DIR"
fi

cd "$APP_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
  echo
  echo "!!! Fill in .env before starting: nano $APP_DIR/.env"
  echo "Required: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ADMIN_PASSWORD"
  echo
fi

echo "==> Configuring nginx..."
cp deploy/nginx/garant-master.conf /etc/nginx/sites-available/garant-master.conf
ln -sf /etc/nginx/sites-available/garant-master.conf /etc/nginx/sites-enabled/garant-master.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl reload nginx

echo "==> Building and starting Docker container..."
docker compose build
docker compose up -d

echo "==> SSL certificate (optional, requires DNS A-record to this server)..."
echo "Run manually when DNS is ready:"
echo "  certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect --agree-tos -m admin@$DOMAIN"

echo
echo "Done. Check: curl -I http://127.0.0.1:3000"
echo "After DNS switch: https://$DOMAIN"
