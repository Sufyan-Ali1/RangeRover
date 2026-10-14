import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: "MRAbYY3JV-mTrA0WP9e6O4O-WMXJ3MuxUTy5v6xSCeY",
  },
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
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WN5SDLNV');`,
          }}
        />
      </head>
      <body
        className="flex min-h-full w-full max-w-full flex-col overflow-x-clip"
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN5SDLNV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
