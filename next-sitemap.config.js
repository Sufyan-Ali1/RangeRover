/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

const serviceSlugsPaths = [
  "engine-rebuild",
  "timing-chain-replacement",
  "turbo-replacement",
  "head-gasket-replacement",
  "engine-repair",
  "engine-replacement",
  "engine-swap",
  "timing-belt-replacement",
];

const brandSlugs = [
  "range-rover",
  "land-rover",
  "jaguar",
];

const modelsBrand = {
  "range-rover": ["evoque", "sport", "vogue-old-mk-3", "vogue-new-mk-4", "velar", "sport-svr"],
  "land-rover": ["discovery-1", "discovery-2", "discovery-3", "discovery-4", "discovery-5", "discovery-sport", "freelander-1", "freelander-2"],
  jaguar: ["xe", "xf", "xj", "f-pace", "e-pace", "f-type"],
};

const engineSizeSlugs = {
  "range-rover": ["2.0", "2.2", "3.0", "4.4", "5.0"],
  "land-rover": ["2.0", "2.2", "3.0", "4.4", "5.0"],
};

function field(loc, priority = 0.7, changefreq = "weekly") {
  return { loc, lastmod: new Date().toISOString(), changefreq, priority };
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const paths = [];

    // /services/[slug]
    for (const slug of serviceSlugsPaths) {
      paths.push(field(`/services/${slug}`, 0.8));
    }

    // /engines/[brand]
    for (const brand of brandSlugs) {
      paths.push(field(`/engines/${brand}`, 0.8));
    }

    // /engines/[brand-size]
    for (const [brand, sizes] of Object.entries(engineSizeSlugs)) {
      for (const size of sizes) {
        paths.push(field(`/engines/${brand}-${size}`, 0.8));
      }
    }

    // /engines/[brand]/[model]
    for (const [brand, models] of Object.entries(modelsBrand)) {
      for (const model of models) {
        paths.push(field(`/engines/${brand}/${model}`, 0.7));
      }
    }

    return paths;
  },
};
