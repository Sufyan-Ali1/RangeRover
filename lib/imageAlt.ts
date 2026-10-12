function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function cleanBlogImageAlt(value: string, articleTitle: string): string {
  let text = value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  const filename = /\.(?:jpe?g|png|webp|svg|gif|avif)\b/i.test(text);
  if (filename) {
    text = text
      .replace(/\.(?:jpe?g|png|webp|svg|gif|avif)\b/gi, "")
      .replace(/[-_][A-Za-z0-9]{10}$/, "")
      .replace(/\s*\(\d+\)/g, "")
      .replace(/[-_]+/g, " ");
  }
  text = text.replace(/\s+/g, " ").trim();
  if (!text || /^(?:artboard|screenshot|image\b|rrg\b|\d{4} \d{2} \d{2}|range rover garage(?:\s|$))/i.test(text)) {
    text = articleTitle;
  }
  text = text
    .replace(/range rover/gi, "Range Rover")
    .replace(/land rover/gi, "Land Rover")
    .replace(/\bjaguar\b/gi, "Jaguar")
    .replace(/\baudi\b/gi, "Audi")
    .replace(/\buk\b/gi, "UK")
    .replace(/\bebgine\b/gi, "engine")
    .replace(/\bspcialist\b/gi, "specialist")
    .replace(/\bmaintance\b/gi, "maintenance");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Clean filename-based alts and supply article context for missing alts. */
export function withBlogImageAlts(html: string, articleTitle: string): string {

  return html.replace(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi, (tag) => {
    const alt = /\s+alt\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag);
    const value = (alt?.[1] ?? alt?.[2] ?? alt?.[3] ?? "").trim();
    const decorative = /\s+(?:aria-hidden\s*=\s*["']?true\b|role\s*=\s*["']?(?:presentation|none)\b)/i.test(tag);
    if (decorative) return alt ? tag : tag.replace(/\s*\/?\s*>$/, ' alt="" />');
    const fallback = escapeAttribute(cleanBlogImageAlt(value, articleTitle));
    if (alt) return tag.replace(alt[0], ` alt="${fallback}"`);
    return tag.replace(/\s*\/?\s*>$/, ` alt="${fallback}" />`);
  });
}
