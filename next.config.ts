import type { NextConfig } from "next";

// Import redirects from generated redirects file
const redirects = require('./lib/redirects.js');

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; upgrade-insecure-requests",
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
