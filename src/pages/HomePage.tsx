import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import SportsBanner from "../components/SportsBanner";
import DeviceGrid from "../components/DeviceGrid";
import Steps from "../components/Steps";
import WhyChooseUs from "../components/WhyChooseUs";
import Comparison from "../components/Comparison";
import TechnologyExplainer from "../components/TechnologyExplainer";
import Highlights from "../components/Highlights";
import Coverage from "../components/Coverage";
import CoastToCoast from "../components/CoastToCoast";
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
        <SportsBanner />
        <DeviceGrid />
        <Steps />
        <WhyChooseUs />
        <Comparison />
        <div className="cv-auto">
          <TechnologyExplainer />
        </div>
        <div className="cv-auto">
          <Highlights />
        </div>
        <div className="cv-auto">
          <Coverage />
        </div>
        <div className="cv-auto">
          <CoastToCoast />
        </div>
        <div className="cv-auto">
          <DealPromo />
        </div>
        <div className="cv-auto">
          <Guarantee />
        </div>
        <div className="cv-auto">
          <FaqSection />
        </div>
        <div className="cv-auto">
          <ReadyBanner />
        </div>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
