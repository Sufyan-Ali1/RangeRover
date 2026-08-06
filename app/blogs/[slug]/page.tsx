import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import blogsData from "../../data/blogs.json";
import { notFound } from "next/navigation";
import { fetchBlog, getBlogs, type Blog } from "../../../lib/blogApi";

interface Props {
  params: Promise<{ slug: string }>;
}

const localBlogs = blogsData as Blog[];

async function getSingleBlog(slug: string): Promise<Blog | null> {
  const apiBlog = await fetchBlog(slug).catch(() => null);
  if (apiBlog) return apiBlog;

  return localBlogs.find((b) => b.slug === slug) ?? null;
}

export async function generateStaticParams() {
  const apiBlogs = await getBlogs().catch(() => []);
  const apiPaths = apiBlogs.map((blog) => ({ slug: blog.slug }));
  const localPaths = localBlogs.map((blog) => ({ slug: blog.slug }));
  return [...apiPaths, ...localPaths];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Range Rover Engines`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  if (!blog) notFound();

  const apiBlogs = await getBlogs().catch(() => []);
  const allBlogs = [...apiBlogs, ...localBlogs];
  const idx = allBlogs.findIndex((b) => b.slug === slug);
  const sibling = idx !== -1 ? allBlogs[(idx + 1) % allBlogs.length] : blog;
  const image2 = sibling.image || blog.image;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">

          {/* ── 1. Image left + Title/Excerpt right ── */}
          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-start">
            <div className="overflow-hidden rounded-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover min-h-[400px]"
              />
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4CA66B]">
                {blog.date}
              </p>
              <h1 className="mb-4 text-[28px] font-black leading-tight tracking-wide text-gray-900 sm:text-[36px]">
                {blog.title}
              </h1>
              <p className="text-[14px] leading-[1.4] text-gray-600" style={{ textAlign: "justify" }}>
                {blog.excerpt}
              </p>
            </div>
          </div>

          {/* ── 2. Full-width blog content ── */}
          <div
            className="blog-content mb-10"
            dangerouslySetInnerHTML={{ __html: blog.html_content }}
          />

          {/* ── 3. Full-width Image 2 ── */}
          <div className="mb-10 overflow-hidden rounded-xl">
            <img
              src={image2}
              alt={sibling.title}
              className="w-full object-cover max-h-[500px]"
            />
          </div>

          {/* ── 4. Excerpt text ── */}
          <p className="mb-10 text-[14px] leading-[1.4] text-gray-600" style={{ textAlign: "justify" }}>
            {blog.excerpt}
          </p>

          {/* ── Back link ── */}
          <div className="border-t border-gray-100 pt-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#11633A] hover:underline"
            >
              ← Back to Blogs
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
