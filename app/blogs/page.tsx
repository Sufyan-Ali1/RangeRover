import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import blogsData from "../data/blogs.json";
import { getBlogs } from "../../lib/blogApi";

export const metadata = {
  title: "Range Rover Engine Advice Blog | Expert Guides & Tips",
  description:
    "Explore our Range Rover engine advice blog for expert guides on rebuilds, common faults, reconditioned engines and maintenance. Read the latest articles.",
};

interface Blog {
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
}

interface Props {
  searchParams: Promise<{ page?: string }>;
}

const PER_PAGE = 18;
const localBlogs = blogsData as Blog[];

export default async function BlogsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const apiBlogs = await getBlogs().catch(() => []);
  const blogs: Blog[] = [...apiBlogs, ...localBlogs];
  const totalPages = Math.ceil(blogs.length / PER_PAGE);

  const current = Math.min(
    Math.max(1, parseInt(page ?? "1", 10)),
    totalPages || 1,
  );
  const start = (current - 1) * PER_PAGE;
  const paginated = blogs.slice(start, start + PER_PAGE);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <section className="w-full bg-white pt-32 pb-14 xl:pb-20">
        <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
          <h1 className="mb-10 text-center text-[32px] font-black uppercase tracking-wide text-gray-900 sm:text-[40px]">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#c8e6d0] bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-[#ECFFF3]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4CA66B]">
                    {blog.date}
                  </p>
                  <h2 className="mb-3 line-clamp-2 text-[16px] font-bold leading-snug text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="mb-5 flex-1 line-clamp-3 text-[13px] leading-relaxed text-gray-600">
                    {blog.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#11633A]">
                    Read More <span>&gt;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2">
              {current > 1 && (
                <Link
                  href={`/blogs?page=${current - 1}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c8e6d0] text-[13px] font-semibold text-[#11633A] transition hover:bg-[#ECFFF3]"
                >
                  ←
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blogs?page=${p}`}
                  className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-[13px] font-semibold transition ${
                    p === current
                      ? "bg-[#11633A] text-white"
                      : "border border-[#c8e6d0] text-[#11633A] hover:bg-[#ECFFF3]"
                  }`}
                >
                  {p}
                </Link>
              ))}
              {current < totalPages && (
                <Link
                  href={`/blogs?page=${current + 1}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#c8e6d0] text-[13px] font-semibold text-[#11633A] transition hover:bg-[#ECFFF3]"
                >
                  →
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
