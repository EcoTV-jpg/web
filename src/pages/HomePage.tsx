import Header from "../components/Header";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Coverage from "../components/Coverage";
import Pricing from "../components/Pricing";
import DealPromo from "../components/DealPromo";
import Steps from "../components/Steps";
import Guarantee from "../components/Guarantee";
import FaqSection from "../components/FaqSection";
import ReadyBanner from "../components/ReadyBanner";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Coverage />
        <Pricing />
        <DealPromo />
        <Steps />
        <Guarantee />
        <FaqSection />
        <ReadyBanner />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
