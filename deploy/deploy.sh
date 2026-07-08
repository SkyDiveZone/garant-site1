#!/usr/bin/env bash
set -euo pipefail

# Update production deployment on VPS.
# Run from project root: bash deploy/deploy.sh

APP_DIR="${APP_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
cd "$APP_DIR"

echo "==> Pulling latest changes..."
git pull --ff-only origin main

echo "==> Rebuilding container..."
docker compose build --no-cache
docker compose up -d

echo "==> Cleaning old images..."
docker image prune -f

echo "==> Health check..."
sleep 5
curl -fsS -o /dev/null http://127.0.0.1:3000/ && echo "OK: app responds on port 3000"

echo "Deploy complete."
