import { blogImageIdentity, originalBlogImage } from "./blogImages";

export function getConfig() {
  const base = (process.env.BLOG_API_BASE ?? "").replace(/\/$/, "");
  const user = process.env.BLOG_API_USERNAME ?? "";
  const pass = process.env.BLOG_API_PASSWORD ?? "";
  return { base, auth: user && pass ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}` : "" };
}

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  html_content: string;
  image: string;
  images: string[];
  date: string;
  author: string;
  meta_title: string;
  meta_description: string;
};

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

function imageUrl(value: unknown): string {
  if (typeof value === "string") return value;
  const item = record(value);
  return String(item.image ?? item.url ?? item.src ?? "");
}

export function normaliseBlog(value: unknown): Blog {
  const raw = record(value);
  const content = String(raw.content ?? raw.html_content ?? raw.body ?? "");
  const configuredImages = [
    ...(Array.isArray(raw.image) ? raw.image : [raw.image]),
    ...(Array.isArray(raw.images) ? raw.images : []),
  ].map(imageUrl).filter(Boolean).map(image => originalBlogImage(image, content));
  const images = [...new Map(configuredImages.map(image => [blogImageIdentity(image), image])).values()];
  return {
    slug: String(raw.slug ?? raw.id ?? ""),
    title: String(raw.title ?? ""),
    excerpt: String(raw.excerpt ?? raw.description ?? ""),
    html_content: content,
    image: images[0] ?? "",
    images,
    date: String(raw.created_at ?? raw.date ?? ""),
    author: String(raw.author || "Range Rover Garage"),
    meta_title: String(raw.meta_title ?? raw.title ?? ""),
    meta_description: String(raw.meta_description ?? raw.excerpt ?? raw.description ?? ""),
  };
}

async function cmsFetch(url: string, auth: string, revalidate: number): Promise<Response> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(url, {
        headers: auth ? { Authorization: auth } : {},
        next: { revalidate },
        signal: AbortSignal.timeout(10000),
      });
      if (response.status < 500 || attempt === 1) return response;
    } catch {
      if (attempt === 1) throw new Error("Blog service is temporarily unavailable.");
    }
  }
  throw new Error("Blog service is temporarily unavailable.");
}

export async function getBlogs(): Promise<Blog[]> {
  const { base, auth } = getConfig();
  if (!base) return [];
  try {
    const response = await cmsFetch(`${base}/blogs/`, auth, 60);
    if (!response.ok) return [];
    const json: unknown = await response.json();
    const envelope = record(json);
    const items = Array.isArray(json) ? json : envelope.data ?? envelope.results ?? envelope.blogs;
    return Array.isArray(items) ? items.map(normaliseBlog).filter(blog => blog.slug) : [];
  } catch {
    return [];
  }
}

export async function fetchBlog(slug: string): Promise<Blog | null> {
  const { base, auth } = getConfig();
  if (!base) return null;
  const response = await cmsFetch(`${base}/blogs/${encodeURIComponent(slug)}/`, auth, 300);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Blog service returned HTTP ${response.status}.`);
  const json: unknown = await response.json();
  const blog = normaliseBlog(record(json).data ?? json);
  if (!blog.slug || !blog.title) throw new Error("Blog service returned an invalid article.");
  return blog;
}
