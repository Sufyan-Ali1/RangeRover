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
  "audi",
  "mercedes",
  "ford",
  "bmw",
  "jaguar",
  "volkswagen",
];

const modelsBrand = {
  "range-rover": ["evoque", "sport", "vogue", "velar", "autobiography", "defender"],
  "land-rover": ["defender", "discovery", "freelander", "discovery-sport", "range-rover-sport", "velar"],
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

    // /engines/[brand]/[model]
    for (const [brand, models] of Object.entries(modelsBrand)) {
      for (const model of models) {
        paths.push(field(`/engines/${brand}/${model}`, 0.7));
      }
    }

    return paths;
  },
};
