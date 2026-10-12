import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllBlogs, formatBlogDate } from "../../lib/blogs";

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Range Rover Engine Advice Blog | Expert Guides & Tips",
  description: "Explore our Range Rover engine advice blog for expert guides on rebuilds, common faults, reconditioned engines and maintenance. Read the latest articles.",
  alternates: { canonical: "/blogs" },
};
interface Props { searchParams: Promise<{ page?: string }> }
const PER_PAGE = 18;

export default async function BlogsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const blogs = await getAllBlogs();
  const totalPages = Math.max(1, Math.ceil(blogs.length / PER_PAGE));
  const parsed = Number(page);
  const current = Math.min(totalPages, Number.isFinite(parsed) ? Math.max(1, Math.floor(parsed)) : 1);
  const paginated = blogs.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || Math.abs(p - current) <= 1);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pb-20 pt-32">
        <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-500"><Link href="/" className="hover:text-[#11633A]">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#11633A]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#11633A]">Latest News</span>
            <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">Our Blogs</h1>
            <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-slate-600">Stay updated with the latest news, expert advice, and maintenance tips for your Range Rover or Land Rover engine.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map(blog => <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#11633A]">
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                {blog.image ? <Image src={blog.image} alt={blog.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center text-sm text-slate-400">Range Rover Garage</div>}
              </div>
              <div className="flex flex-1 flex-col p-5">
                {blog.date && <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{formatBlogDate(blog.date)}</p>}
                <h2 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#11633A]">{blog.title}</h2>
                <p className="mb-5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{blog.excerpt}</p>
                <span className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-wider text-[#11633A] transition-transform group-hover:translate-x-1">Read Article <span aria-hidden="true">→</span></span>
              </div>
            </Link>)}
          </div>
          {!paginated.length && <p className="py-10 text-center text-slate-500">No articles found.</p>}
          {totalPages > 1 && <nav aria-label="Blog pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {current > 1 ? <Link href={`/blogs?page=${current - 1}`} aria-label="Previous page" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:border-[#11633A] hover:text-[#11633A]">← Prev</Link> : <span aria-disabled="true" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-300">← Prev</span>}
            {visiblePages.map((p, index) => <span key={p} className="flex items-center gap-2">
              {index > 0 && p - visiblePages[index - 1] > 1 && <span className="text-slate-400">…</span>}
              <Link href={`/blogs?page=${p}`} aria-label={`Page ${p}`} aria-current={p === current ? "page" : undefined} className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${p === current ? "border-[#11633A] bg-[#11633A] text-white" : "border-slate-300 text-slate-600 hover:border-[#11633A] hover:text-[#11633A]"}`}>{p}</Link>
            </span>)}
            {current < totalPages ? <Link href={`/blogs?page=${current + 1}`} aria-label="Next page" className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:border-[#11633A] hover:text-[#11633A]">Next →</Link> : <span aria-disabled="true" className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-300">Next →</span>}
          </nav>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
