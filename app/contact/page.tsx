import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Range Rover Engines",
  description: "Get in touch with Range Rover Garage — Unit 1 Hedley Ave, Grays RM20 4EL.",
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
