export function getConfig() {
  const base = (process.env.BLOG_API_BASE ?? "").replace(/\/$/, "");
  const user = process.env.BLOG_API_USERNAME ?? "";
  const pass = process.env.BLOG_API_PASSWORD ?? "";

  const auth =
    user && pass
      ? `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`
      : "";

  return { base, auth };
}

export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  html_content: string;
  image: string;
  date: string;
  author: string;
};

function normalise(raw: any): Blog {
  return {
    slug: String(raw?.slug ?? raw?.id ?? ""),
    title: String(raw?.title ?? ""),
    excerpt: String(raw?.excerpt ?? raw?.description ?? ""),
    html_content: String(raw?.content ?? raw?.html_content ?? raw?.body ?? ""),
    image: Array.isArray(raw?.image)
      ? String(raw.image[0] ?? "")
      : String(raw?.image ?? ""),
    date: String(raw?.created_at ?? raw?.date ?? ""),
    author: raw?.author ? String(raw.author) : "Range Rover Garage",
  };
}

export async function getBlogs(): Promise<Blog[]> {
  const { base, auth } = getConfig();

  if (!base) return [];

  try {
    const res = await fetch(`${base}/blogs/`, {
      method: "GET",
      headers: auth ? { Authorization: auth } : {},
      cache: "no-store",
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Blog API error:", res.status, err);
      return [];
    }

    const data = await res.json();
    const blogsArray = Array.isArray(data) ? data : [];

    return blogsArray.map(normalise);
  } catch (error: any) {
    console.error("getBlogs error:", error.message);
    return [];
  }
}

export async function fetchBlog(slug: string): Promise<Blog | null> {
  const { base, auth } = getConfig();

  if (!base) return null;

  try {
    const res = await fetch(`${base}/blogs/${slug}/`, {
      headers: auth ? { Authorization: auth } : {},
      next: { revalidate: 300 },
    });

    if (res.status === 404) return null;
    if (!res.ok) return null;

    const data = await res.json();
    const raw =
      data && typeof data === "object" && (data as any).data
        ? (data as any).data
        : data;

    return normalise(raw);
  } catch (error: any) {
    console.error("fetchBlog error:", error.message);
    return null;
  }
}
