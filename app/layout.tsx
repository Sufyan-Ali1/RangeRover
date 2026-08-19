import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://www.rangerover.co.uk";
export const metadata: Metadata = {
  title: "Range Rover Engine Specialist | Rebuilds & Replacements",
  description:
    "UK-wide Range Rover, Land Rover & Jaguar engine specialists. Warranty-backed rebuilds, repairs and replacements with UK collection. Get a free quote today.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: `${siteUrl}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full w-full max-w-full overflow-x-hidden antialiased"
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full w-full max-w-full flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
