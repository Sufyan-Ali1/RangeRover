import blogsData from "@/app/data/blogs.json";
import { fetchBlog, getBlogs, normaliseBlog, type Blog } from "./blogApi";

export const localBlogs = blogsData.map(normaliseBlog);

export function mergeBlogs(apiBlogs: Blog[], local: Blog[] = localBlogs): Blog[] {
  const combined = new Map<string, Blog>();
  for (const blog of [...apiBlogs, ...local]) {
    if (blog.slug && !combined.has(blog.slug)) combined.set(blog.slug, blog);
  }
  return [...combined.values()];
}

export async function getAllBlogs(): Promise<Blog[]> {
  return mergeBlogs(await getBlogs());
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const local = localBlogs.find(blog => blog.slug === slug);
  if (process.env.NEXT_PHASE === "phase-production-build" && local) {
    const apiBlogs = await getBlogs();
    if (apiBlogs.length && !apiBlogs.some(blog => blog.slug === slug)) return local;
  }
  try {
    return await fetchBlog(slug) ?? local ?? null;
  } catch (error) {
    if (local) return local;
    // A CMS outage must not turn an existing API-only article into a cached 404.
    throw error;
  }
}

export function formatBlogDate(value: string): string {
  if (!value.includes("T")) return value;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
