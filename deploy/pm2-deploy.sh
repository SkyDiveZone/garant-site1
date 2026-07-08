#!/usr/bin/env bash
set -euo pipefail

# PM2 deployment without Docker (alternative to docker compose).
# Prerequisites: Node.js 20+, PM2, nginx.
# Run after: npm ci && npm run build

APP_DIR="${APP_DIR:-/var/www/garant-master}"
cd "$APP_DIR"

echo "==> Installing dependencies..."
npm ci

echo "==> Building Next.js..."
npm run build

echo "==> Preparing standalone runtime..."
RUN_DIR="$APP_DIR/.runtime"
rm -rf "$RUN_DIR"
mkdir -p "$RUN_DIR"
cp -r .next/standalone/* "$RUN_DIR/"
cp -r .next/static "$RUN_DIR/.next/static"
cp -r public "$RUN_DIR/public"
mkdir -p "$APP_DIR/data/review-photos"
ln -sfn "$APP_DIR/data" "$RUN_DIR/data"
if [ -f "$APP_DIR/.env" ]; then
  ln -sfn "$APP_DIR/.env" "$RUN_DIR/.env"
fi

echo "==> Starting PM2..."
pm2 start deploy/ecosystem.config.cjs --update-env
pm2 save

echo "PM2 deploy complete. App listens on http://127.0.0.1:3000"
