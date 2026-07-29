import { ELEKTRIK_LEGACY_REDIRECTS, SANTEHNIK_LEGACY_REDIRECTS } from "./src/lib/service-catalog/slug-map";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/_next/static/css/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/_next/static/chunks/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    const legacyElektrikRedirects = Object.entries(ELEKTRIK_LEGACY_REDIRECTS).map(
      ([source, slug]) => ({
        source: `/${source}`,
        destination: `/elektrik/${slug}`,
        permanent: true,
      })
    );

    const legacySantehnikRedirects = Object.entries(SANTEHNIK_LEGACY_REDIRECTS).map(
      ([source, slug]) => ({
        source: `/${source}`,
        destination: `/santehnik/${slug}`,
        permanent: true,
      })
    );

    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/terms", destination: "/user-agreement", permanent: true },
      { source: "/reviews", destination: "/otzyvy", permanent: true },
      ...legacyElektrikRedirects,
      ...legacySantehnikRedirects,
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
