import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import DeviceGrid from "../components/DeviceGrid";
import Steps from "../components/Steps";
import Comparison from "../components/Comparison";
import TechnologyExplainer from "../components/TechnologyExplainer";
import Highlights from "../components/Highlights";
import Coverage from "../components/Coverage";
import DealPromo from "../components/DealPromo";
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
        <Pricing />
        <DeviceGrid />
        <Steps />
        <Comparison />
        <TechnologyExplainer />
        <Highlights />
        <Coverage />
        <DealPromo />
        <Guarantee />
        <FaqSection />
        <ReadyBanner />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
