export function blogImageIdentity(source: string): string {
  try {
    const url = new URL(source.replace(/&amp;/g, "&"), "https://rangerovergarage.co.uk");
    // The blog API uses a thumbnail folder for the same original article photo.
    const pathname = decodeURIComponent(url.pathname).replace(
      /^\/storage\/images\/\d+\//,
      "/storage/images/",
    );
    return `${url.host}${pathname}`;
  } catch {
    return source.trim();
  }
}

export function originalBlogImage(source: string, html: string): string {
  const matches = html.matchAll(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi);
  for (const [tag] of matches) {
    const attribute = /\s+src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag);
    const candidate = attribute?.[1] ?? attribute?.[2] ?? attribute?.[3];
    if (candidate && blogImageIdentity(candidate) === blogImageIdentity(source) && !/\/storage\/images\/\d+\//.test(candidate)) return candidate;
  }
  return source;
}

export function additionalBlogImages(images: string[], featuredImage: string, html: string): string[] {
  const seen = new Set(featuredImage ? [blogImageIdentity(featuredImage)] : []);
  for (const [tag] of html.matchAll(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    const source = /\s+src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag);
    const value = source?.[1] ?? source?.[2] ?? source?.[3];
    if (value) seen.add(blogImageIdentity(value));
  }
  return images.filter(image => {
    const identity = blogImageIdentity(image);
    if (seen.has(identity)) return false;
    seen.add(identity);
    return true;
  });
}

/** Keep each article photo once, accounting for the featured photo above it. */
export function uniqueBlogImages(html: string, featuredImage: string): string {
  const seen = new Set<string>();
  if (featuredImage.trim()) seen.add(blogImageIdentity(featuredImage));

  const content = html.replace(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi, (tag) => {
    const source = /\s+src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag);
    const value = source?.[1] ?? source?.[2] ?? source?.[3];
    if (!value) return tag;

    const identity = blogImageIdentity(value);
    if (seen.has(identity)) return "";
    seen.add(identity);
    return tag;
  });

  // Remove empty photo wrappers and their orphaned captions after deduplication.
  return content.replace(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi, (figure, body: string) => {
    if (/<(?:img|video|iframe|svg)\b/i.test(body)) return figure;
    const remaining = body.replace(/<figcaption\b[^>]*>[\s\S]*?<\/figcaption>/gi, "");
    return remaining.replace(/<[^>]*>/g, "").trim() ? figure : "";
  });
}
