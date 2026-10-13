import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Range Rover Engine Specialist | Rebuilds & Replacements",
  description:
    "UK-wide Range Rover, Land Rover & Jaguar engine specialists. Warranty-backed rebuilds, repairs and replacements with UK collection. Get a free quote today.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Range Rover Garage",
    title: "Range Rover Engine Specialist | Rebuilds & Replacements",
    description: "Range Rover and Land Rover engine specialists in Grays, Essex. Engine rebuilds, replacements and repairs with UK-wide collection.",
    images: [{ url: "/images/share-preview.png", width: 1200, height: 630, alt: "Range Rover Garage logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Range Rover Engine Specialist | Rebuilds & Replacements",
    description: "Range Rover and Land Rover engine specialists in Grays, Essex. Engine rebuilds, replacements and repairs with UK-wide collection.",
    images: ["/images/share-preview.png"],
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
      className="h-full w-full max-w-full overflow-x-clip antialiased"
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full w-full max-w-full flex-col overflow-x-clip"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
