import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import Services from "../components/Services.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import Testimonial from "../components/Testimonial.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Footer from "../components/Footer.jsx";
import PricingCards from "../components/PricingCards.jsx";
import ContactSection from "../components/ContactSection.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <AboutPreview />
      <PricingCards />
      <Testimonial />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
