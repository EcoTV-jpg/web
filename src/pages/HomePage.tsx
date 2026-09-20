import Header from "../components/Header";
import Hero from "../components/Hero";
import UserProblems from "../components/UserProblems";
import WhatIsIncluded from "../components/WhatIsIncluded";
import FreeTrialSection from "../components/FreeTrialSection";
import DeviceGrid from "../components/DeviceGrid";
import SportsBanner from "../components/SportsBanner";
import EntertainmentSection from "../components/EntertainmentSection";
import Pricing from "../components/Pricing";
import PostPurchaseProcess from "../components/PostPurchaseProcess";
import BuyerChecklist from "../components/BuyerChecklist";
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
        <UserProblems />
        <WhatIsIncluded />
        <div className="cv-auto">
          <FreeTrialSection />
        </div>
        <div className="cv-auto">
          <DeviceGrid />
        </div>
        <div className="cv-auto">
          <SportsBanner />
        </div>
        <div className="cv-auto">
          <EntertainmentSection />
        </div>
        <Pricing />
        <div className="cv-auto">
          <PostPurchaseProcess />
        </div>
        <div className="cv-auto">
          <BuyerChecklist />
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

