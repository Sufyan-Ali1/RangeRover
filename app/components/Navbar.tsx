"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { engineServices } from "../data/services";
import { brands } from "../data/brands";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: "services" as const },
  { label: "Engines", href: "/engines", dropdown: "engines" as const },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blogs", href: "/blogs" },
];

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = scrolled || open || !transparent;

  const handleEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        active ? "bg-[#11633A] shadow-[0_2px_12px_rgba(0,0,0,0.18)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1728px] items-center justify-between px-6 py-3 sm:px-10 sm:py-3.5 xl:px-[101px]">
        <Image
          src="/logo.svg"
          alt="Range Rover Engines"
          width={130}
          height={47}
          priority
          className="h-8 w-auto md:h-9"
        />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-5 text-[13.5px] font-medium lg:flex xl:gap-7">
          {navLinks.map(({ label, href, dropdown }) => (
            <li
              key={label}
              className="relative"
              onMouseEnter={dropdown ? () => handleEnter(dropdown) : undefined}
              onMouseLeave={dropdown ? handleLeave : undefined}
            >
              <Link
                href={href}
                className="flex items-center gap-1 text-white transition hover:text-[#A6F0C6]"
              >
                {label}
                {dropdown && (
                  <svg
                    width="9"
                    height="5"
                    viewBox="0 0 10 6"
                    fill="currentColor"
                    className={`mt-0.5 transition-transform duration-200 ${openDropdown === dropdown ? "rotate-180" : ""}`}
                  >
                    <path d="M0 0l5 6 5-6H0z" />
                  </svg>
                )}
              </Link>

              {/* Services dropdown */}
              {dropdown === "services" && openDropdown === "services" && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[240px] rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                    <div className="flex flex-col gap-0.5">
                      {engineServices.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-gray-800 transition hover:bg-[#ECFFF3] hover:text-[#11633A]"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Engines dropdown */}
              {dropdown === "engines" && openDropdown === "engines" && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-[220px] rounded-xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                    <div className="flex flex-col gap-0.5">
                      {brands.map((b) => (
                        <Link
                          key={b.slug}
                          href={`/engines/${b.slug}`}
                          className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-gray-800 transition hover:bg-[#ECFFF3] hover:text-[#11633A]"
                        >
                          {b.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-[#4CA66B] px-4 py-1.5 text-[13px] font-semibold text-white transition hover:bg-[#3D9258] lg:block lg:px-5 lg:py-2"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex flex-col justify-center gap-[5px] lg:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="bg-[#11633A] px-6 pb-6 sm:px-10 lg:hidden">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map(({ label, href, dropdown }) => (
              <li key={label}>
                {dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-white transition hover:text-[#A6F0C6]"
                      onClick={() => setMobileExpanded(mobileExpanded === dropdown ? null : dropdown)}
                    >
                      {label}
                      <svg
                        width="9"
                        height="5"
                        viewBox="0 0 10 6"
                        fill="currentColor"
                        className={`transition-transform duration-200 ${mobileExpanded === dropdown ? "rotate-180" : ""}`}
                      >
                        <path d="M0 0l5 6 5-6H0z" />
                      </svg>
                    </button>
                    {mobileExpanded === dropdown && (
                      <div className="mb-2 ml-2 flex flex-col border-l border-white/20 pl-4">
                        {dropdown === "services" &&
                          engineServices.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="py-2 text-[13px] text-white/80 transition hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {s.title}
                            </Link>
                          ))}
                        {dropdown === "engines" &&
                          brands.map((b) => (
                            <Link
                              key={b.slug}
                              href={`/engines/${b.slug}`}
                              className="py-2 text-[13px] text-white/80 transition hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {b.name}
                            </Link>
                          ))}
                        <Link
                          href={href}
                          className="mt-1 py-2 text-[12px] font-semibold text-[#A6F0C6] hover:underline"
                          onClick={() => setOpen(false)}
                        >
                          View all →
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={href}
                    className="block py-2.5 text-sm font-medium text-white transition hover:text-[#A6F0C6]"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-white/20 pt-5">
            <Link
              href="/contact"
              className="block w-full rounded-md bg-[#4CA66B] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#3D9258]"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
