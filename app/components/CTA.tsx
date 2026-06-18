import Link from "next/link";

export default function CTA() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/rangerovergarage/",
      label: "Facebook",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#388358">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      href: "https://www.youtube.com/@RangeroverGarage",
      label: "YouTube",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#388358">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
        </svg>
      ),
    },
    {
      href: "https://uk.pinterest.com/rangerovergaragegrays/",
      label: "Pinterest",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#388358">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.13 2.5 7.66 6.07 9.19-.03-.78-.01-1.72.2-2.57l1.3-5.5s-.32-.65-.32-1.6c0-1.49.86-2.6 1.93-2.6.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.93 1.58 1.93 1.9 0 3.36-2.01 3.36-4.91 0-2.57-1.85-4.37-4.49-4.37-3.06 0-4.85 2.29-4.85 4.66 0 .92.35 1.91.78 2.45.09.11.1.2.07.31l-.29 1.18c-.05.19-.15.23-.33.14-1.24-.58-2.01-2.41-2.01-3.88 0-3.16 2.29-6.05 6.6-6.05 3.46 0 6.15 2.46 6.15 5.76 0 3.44-2.17 6.21-5.19 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.22.85-.81 1.91-1.2 2.56.9.28 1.86.43 2.86.43 5.52 0 10-4.48 10-10S17.52 2 12 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(94.78deg, #388358 50%, #11633A 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1728px] flex-col items-start justify-between gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-center xl:px-[101px] xl:py-14">

        {/* Left: heading + subtitle + button */}
        <div className="flex-1">
          <h2 className="mb-3 text-xl font-black text-white sm:text-2xl">
            Are You Looking For A Consultation?
          </h2>
          <p className="mb-8 max-w-lg text-[14px] leading-relaxed text-white/80">
            You can book an appointment by calling us. Our friendly &amp; professional staff is
            always willing to help!
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center justify-center border-2 border-white px-10 py-3.5 text-[14px] font-bold text-white transition hover:bg-white/10"
            style={{ borderRadius: "12px" }}
          >
            Get Free Advice
          </Link>
        </div>

        {/* Right: Follow us on + social icons */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-[14px] font-semibold text-white">Follow us on</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-white/80"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
