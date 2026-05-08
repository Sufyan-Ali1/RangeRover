import type { NextConfig } from "next";

// Import redirects from generated redirects file
const redirects = require('./lib/redirects.js');

const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
