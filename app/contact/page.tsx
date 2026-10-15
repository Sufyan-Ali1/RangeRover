import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import fs from 'fs';
import path from 'path';

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Our Range Rover Engine Specialist Team",
  description:
    "Contact our Range Rover engine specialist team in Grays, Essex for honest advice and a free, no-obligation quote. UK-wide collection available. Get in touch.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schemaJson = fs.readFileSync(path.join(process.cwd(), 'app/data/schema/contact.json'), 'utf8');
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
