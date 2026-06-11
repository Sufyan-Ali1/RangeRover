import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Range Rover Engines",
  description: "Used and Reconditioned Range Rover engines - Tested and Reliable.",
  icons: {
    icon: "/favicon.svg",
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
      <body className="flex min-h-full w-full max-w-full flex-col overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
