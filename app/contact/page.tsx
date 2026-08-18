import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Our Range Rover Engine Specialist Team",
  description:
    "Contact our Range Rover engine specialist team in Grays, Essex for honest advice and a free, no-obligation quote. UK-wide collection available. Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
