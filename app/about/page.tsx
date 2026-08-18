import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import AboutCTA from "../components/AboutCTA";
import VideoSection from "../components/VideoSection";
import AuthorityPrecision from "../components/AuthorityPrecision";
import AuthorityNationwide from "../components/AuthorityNationwide";


import { aboutPagePrecision } from "../data/about/AboutPrecision";
import { authorityNationwide } from "../data/about/Nationwide";

export const metadata = {
  title: "About Us | Range Rover Engine Specialists in Essex",
  description:
    "Meet the JLR-trained team behind our Range Rover engine specialists workshop in Grays, Essex, and our honest, no-nonsense approach to engine care. Learn more.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <AboutCTA />
      <AuthorityNationwide data={authorityNationwide} />
      <AuthorityPrecision data={aboutPagePrecision} />
      <VideoSection />
      <Footer />
    </div>
  );
}
