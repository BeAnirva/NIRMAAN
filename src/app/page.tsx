import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNirmaan from "@/components/WhyNirmaan";
import Paths from "@/components/Paths";
import HowItWorks from "@/components/HowItWorks";
import Learning from "@/components/Learning";
import Mentorship from "@/components/Mentorship";
import Career from "@/components/Career";
import Ventures from "@/components/Ventures";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">

      {/* Navigation */}
      <Navbar />

      {/* Main Hero */}
      <Hero />

      {/* Why Nirmaan */}
      <WhyNirmaan />

      {/* Choose Your Path */}
      <Paths />

      {/* Nirmaan Journey */}
      <HowItWorks />

      {/* Learning & Upskilling */}
      <Learning />

      {/* Mentorship */}
      <Mentorship />

      {/* Career Readiness */}
      <Career />

      {/* Entrepreneurship */}
      <Ventures />

      {/* Participant Stories */}
      <Stories />

      {/* Final Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}
