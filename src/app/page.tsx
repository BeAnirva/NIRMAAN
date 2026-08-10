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
    <main className="min-h-screen bg-[#F8F6F1] text-[#1D1D1B]">

      <Navbar />

      <Hero />

      <WhyNirmaan />

      <Paths />

      <HowItWorks />

      <Learning />

      <Mentorship />

      <Career />

      <Ventures />

      <Stories />

      <CTA />

      <Footer />

    </main>
  );
}
