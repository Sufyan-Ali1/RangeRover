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
  title: "About Us | Range Rover Engines",
  description:
    "Learn about Range Rover Garage — the UK's premier independent specialist for Range Rover and Land Rover engine services.",
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
