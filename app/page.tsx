import ThreeFeatures from "@/components/3-features";
import ChallengeSection from "@/components/challenges-section";
import ClientFootprint from "@/components/client-footprint";
import CompasPlatform from "@/components/compas-platform";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewsLetter from "@/components/news-letter";
import OurServices from "@/components/our-services";
import OurSolution from "@/components/our-solution";
import WhyWe from "@/components/why-we";

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <ThreeFeatures />
      <ChallengeSection />
      <OurSolution />
      <WhyWe />
      <OurServices />
      <ClientFootprint />
      <CompasPlatform />
      <NewsLetter />
      <Footer />
    </main>
  );
}
