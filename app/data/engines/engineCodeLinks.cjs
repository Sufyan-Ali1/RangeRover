// Shared by Next.js pages and the Node.js sitemap generator.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const engineCodesData = require("../engineCodesData.json");

/** @param {string} value */
function normalise(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** @param {{ make: string, model: string, engineCode: string }} row */
function getEngineCodeHref(row) {
  let brand = row.make.toLowerCase().replace(/\s+/g, "-");
  let model = row.model;
  if (/^range rover /i.test(model)) {
    brand = "range-rover";
    model = model.replace(/^range rover /i, "");
  }
  const name = normalise(model);
  /** @type {Record<string, string[]>} */
  const aliases = {
    vogue: ["vogue-new-mk-4", "vogue-old-mk-3"],
    voguenewmk4: ["vogue-new-mk-4"],
    vogueoldmk3: ["vogue-old-mk-3"],
    svr50v8: ["sport-svr"],
    sportsvr: ["sport-svr"],
  };
  const candidates = aliases[name] ?? [model.toLowerCase().replace(/\s+/g, "-")];
  const slug = candidates.find((candidate) => {
    const key = `${brand}-${candidate}-engines`;
    return engineCodesData[key]?.rows.some(
      (engine) => engine.engineCode.toUpperCase() === row.engineCode.toUpperCase(),
    );
  }) ?? candidates[0];

  return `/engines/${brand}/${slug}/${encodeURIComponent(row.engineCode.toUpperCase())}`;
}

module.exports = { getEngineCodeHref };
