import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import AboutCTA from "../components/AboutCTA";
import VideoSection from "../components/VideoSection";
import AuthorityPrecision from "../components/AuthorityPrecision";
import AboutWorkshop from "../components/AboutWorkshop";
import fs from 'fs';
import path from 'path';

import { aboutPagePrecision } from "../data/about/AboutPrecision";

const siteUrl = process.env.SITE_URL || "https://rangerovergarage.co.uk";
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "About Us | Range Rover Engine Specialists in Essex",
  description:
    "Meet the JLR-trained team behind our Range Rover engine specialists workshop in Grays, Essex, and our honest, no-nonsense approach to engine care. Learn more.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const schemaJson = fs.readFileSync(path.join(process.cwd(), 'app/data/schema/about.json'), 'utf8');
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson }} />
      <Navbar />
      <AboutSection />
      <AboutWorkshop />
      <AuthorityPrecision data={aboutPagePrecision} />
      <AboutCTA />
      <VideoSection />
      <Footer />
    </div>
  );
}
