import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import TrustStrip from '../components/TrustStrip.jsx'
import Services from '../components/Services.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import PlansBanner from '../components/PlansBanner.jsx'
import Testimonial from '../components/Testimonial.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Footer from '../components/Footer.jsx'

// This page is just the sections stacked in order.
// To reorder the homepage, move lines around here —
// you don't need to touch any component file to do that.
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <AboutPreview />
      <PlansBanner />
      <Testimonial />
      <CtaBand />
      <Footer />
    </>
  )
}

export default Home
