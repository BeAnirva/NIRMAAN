import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Paths from "@/components/Paths";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* What you can do with Nirmaan */}
      <Paths />

      {/* How Nirmaan works */}
      <HowItWorks />

      {/* Final emotional CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}
