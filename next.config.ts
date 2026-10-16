import type { NextConfig } from "next";

// Import redirects from generated redirects file
import redirects from "./lib/redirects.js";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vogueimages.co.uk", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rangerovergarage.co.uk" }],
        destination: "https://rangerovergarage.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/how-engine-rebuild-specialists-extend-the-lifespan-of-your-range-rover",
        destination: "/blogs/how-engine-rebuild-specialists-extend-the-lifespan-of-your-range-rover",
        permanent: true,
      },
      {
        source: "/top-5-common-diesel-engine-issues-and-their-fixes",
        destination: "/blogs/top-5-common-diesel-engine-issues-and-their-fixes",
        permanent: true,
      },
      {
        source: "/why-is-the-reconditioned-4-4-tdv8-448dt-engine-the-best-replacement-for-range-rover-vogue-sport",
        destination: "/blogs/why-is-the-reconditioned-4-4-tdv8-448dt-engine-the-best-replacement-for-range-rover-vogue-sport",
        permanent: true,
      },
      ...redirects,
    ];
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
            value: "default-src 'self'; img-src 'self' data: blob: https:; style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://googleads.g.doubleclick.net; script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://googleads.g.doubleclick.net; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https:; frame-src 'self' https://www.google.com https://maps.google.com https://www.googletagmanager.com; frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'; upgrade-insecure-requests",
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
