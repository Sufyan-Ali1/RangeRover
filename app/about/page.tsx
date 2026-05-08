import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import AboutCTA from "../components/AboutCTA";
import VideoSection from "../components/VideoSection";
import AuthorityPrecision from "../components/AuthorityPrecision";
import { authorityNationwide, authorityPrecision } from "../data/authority";
import AuthorityNationwide from "../components/AuthorityNationwide";

export const metadata = {
  title: "About Us | Range Rover Engines",
  description: "Learn about Range Rover Garage — the UK's premier independent specialist for Range Rover and Land Rover engine services.",
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
      <AuthorityPrecision data={authorityPrecision} />
      <VideoSection />
      <Footer />
    </div>
  );
}
