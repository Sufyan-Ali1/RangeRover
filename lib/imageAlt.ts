function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Supply article context when a CMS image has no useful alternative text. */
export function withBlogImageAlts(html: string, articleTitle: string): string {
  const fallback = escapeAttribute(articleTitle);

  return html.replace(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi, (tag) => {
    const alt = /\s+alt\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag);
    const value = (alt?.[1] ?? alt?.[2] ?? alt?.[3] ?? "").trim();
    const decorative = /\s+(?:aria-hidden\s*=\s*["']?true\b|role\s*=\s*["']?(?:presentation|none)\b)/i.test(tag);
    if (decorative) return alt ? tag : tag.replace(/\s*\/?\s*>$/, ' alt="" />');
    if (value && !/\.(?:jpe?g|png|webp|svg|gif|avif)\b/i.test(value)) return tag;
    if (alt) return tag.replace(alt[0], ` alt="${fallback}"`);
    return tag.replace(/\s*\/?\s*>$/, ` alt="${fallback}" />`);
  });
}
