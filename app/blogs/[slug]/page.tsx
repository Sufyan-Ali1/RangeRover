import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogContactForm from "../../components/BlogContactForm";
import { getBlogBySlug, localBlogs, formatBlogDate } from "../../../lib/blogs";
import { withBlogImageAlts } from "../../../lib/imageAlt";
import styles from "./blogDetail.module.css";

interface Props { params: Promise<{ slug: string }> }
const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";

export function generateStaticParams() {
  return localBlogs.map(blog => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.meta_title || blog.title} | Range Rover Garage`,
    description: blog.meta_description || blog.excerpt,
    alternates: { canonical: `/blogs/${slug}` },
    metadataBase: new URL(siteUrl),
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();
  const articleContent = withBlogImageAlts(blog.html_content, blog.title);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pb-16 pt-32">
        <div className="mx-auto w-full max-w-[1728px] px-6 sm:px-10 xl:px-[101px]">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#11633A]">Home</Link><span aria-hidden="true">/</span>
            <Link href="/blogs" className="hover:text-[#11633A]">Blog</Link><span aria-hidden="true">/</span>
            <span aria-current="page" className="text-slate-700">{blog.title}</span>
          </nav>
          <Link href="/blogs" className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#11633A] transition-transform hover:-translate-x-1"><span aria-hidden="true">←</span> Back to Blog</Link>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
            <article className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {blog.date && <span>{formatBlogDate(blog.date)}</span>}
                <span>{blog.author}</span>
              </div>
              <h1 className="mb-8 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{blog.title}</h1>
              <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: articleContent }} />
            </article>
            <aside aria-label="Enquiry form" className="min-w-0 lg:h-full">
              <div className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
                <BlogContactForm />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
