import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import SetupPage from "./pages/SetupPage";
import DevicesPage from "./pages/DevicesPage";
import DeviceGuidePage from "./pages/DeviceGuidePage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import TroubleshootingGuidePage from "./pages/TroubleshootingGuidePage";
import AccountPage from "./pages/AccountPage";
import DmcaPage from "./pages/DmcaPage";
import SubscriptionHubPage from "./pages/SubscriptionHubPage";
import SubscriptionProductPage from "./pages/SubscriptionProductPage";
import LegalPage from "./pages/LegalPage";
import BestIptvHubPage from "./pages/BestIptvHubPage";
import BestIptvAppPage from "./pages/BestIptvAppPage";
import IptvPlayersHubPage from "./pages/IptvPlayersHubPage";
import WhatIsIptvPage from "./pages/WhatIsIptvPage";
import FreeTrialPage from "./pages/FreeTrialPage";
import NotFoundPage from "./pages/NotFoundPage";
import { routes } from "./routes";
import { siteConfig, getCanonicalUrl } from "./config/site";
import { generateStructuredData } from "./components/SEO";
import { deviceGuidesList } from "./data/deviceGuides";
import { troubleshootingGuidesList } from "./data/troubleshootingGuides";
import { bestIptvAppsList } from "./data/bestIptvApps";
import { getProductPlan } from "./data/products";

export default function App({ url }: { url?: string }) {
  const rawPath = url || (typeof window !== "undefined" ? window.location.pathname : "/");
  const currentPath = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const route = routes.find((r) => r.path === currentPath);
      if (route) {
        if (route.title) {
          document.title = route.title;
        }
        const canonicalEl = document.querySelector('link[rel="canonical"]');
        if (canonicalEl) {
          canonicalEl.setAttribute("href", getCanonicalUrl(currentPath));
        }
        const robotsEl = document.querySelector('meta[name="robots"]');
        if (robotsEl) {
          const robotsContent =
            route.indexable === false
              ? "noindex, follow"
              : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
          robotsEl.setAttribute("content", robotsContent);
        }
        const jsonLdEl = document.querySelector('script[type="application/ld+json"]');
        if (jsonLdEl) {
          jsonLdEl.textContent = JSON.stringify(generateStructuredData(currentPath));
        }
      } else {
        // Unknown dynamic slug or non-existent path
        document.title = "404 Not Found | Teleview";
        const canonicalEl = document.querySelector('link[rel="canonical"]');
        if (canonicalEl) {
          canonicalEl.setAttribute("href", getCanonicalUrl("/404"));
        }
        const robotsEl = document.querySelector('meta[name="robots"]');
        if (robotsEl) {
          robotsEl.setAttribute("content", "noindex, follow");
        }
        const jsonLdEl = document.querySelector('script[type="application/ld+json"]');
        if (jsonLdEl) {
          jsonLdEl.textContent = JSON.stringify(generateStructuredData("/404"));
        }
      }
    }
  }, [currentPath]);

  if (currentPath === "/setup" || currentPath === "/tutorial" || currentPath === "/installation-guide") {
    return <SetupPage />;
  }
  if (currentPath === "/what-is-iptv") {
    return <WhatIsIptvPage />;
  }
  if (currentPath === "/devices") {
    return <DevicesPage />;
  }
  if (currentPath.startsWith("/devices/")) {
    const slug = currentPath.replace("/devices/", "").trim().toLowerCase();
    const exists = deviceGuidesList.some((d) => d.slug.toLowerCase() === slug);
    if (!exists) {
      return <NotFoundPage />;
    }
    return <DeviceGuidePage slug={slug} />;
  }
  if (currentPath === "/faq") {
    return <FaqPage />;
  }
  if (currentPath === "/contact" || currentPath === "/contact-us") {
    return <ContactPage />;
  }
  if (currentPath === "/help-center" || currentPath === "/help") {
    return <HelpCenterPage />;
  }
  if (currentPath.startsWith("/help-center/")) {
    const slug = currentPath.replace("/help-center/", "").trim().toLowerCase();
    const exists = troubleshootingGuidesList.some((g) => g.slug.toLowerCase() === slug);
    if (!exists) {
      return <NotFoundPage />;
    }
    return <TroubleshootingGuidePage slug={slug} />;
  }
  if (currentPath === "/my-account" || currentPath === "/my-subscription") {
    return <AccountPage />;
  }
  if (currentPath === "/dmca" || currentPath === "/dmca-report" || currentPath === "/dmca-notice") {
    return <DmcaPage />;
  }
  if (currentPath === "/iptv-subscription" || currentPath === "/pricing") {
    return <SubscriptionHubPage />;
  }
  if (currentPath === "/iptv-free-trial" || currentPath === "/free-trial") {
    return <FreeTrialPage />;
  }
  if (currentPath.startsWith("/iptv-subscription/")) {
    const slug = currentPath.replace("/iptv-subscription/", "").trim().toLowerCase();
    const plan = getProductPlan(slug);
    if (!plan) {
      return <NotFoundPage />;
    }
    return <SubscriptionProductPage slug={slug} />;
  }
  if (currentPath === "/best-iptv") {
    return <BestIptvHubPage />;
  }
  if (currentPath === "/iptv-players") {
    return <IptvPlayersHubPage />;
  }
  if (currentPath.startsWith("/iptv-players/")) {
    const slug = currentPath.replace("/iptv-players/", "").trim().toLowerCase();
    const exists = bestIptvAppsList.some((a) => a.slug.toLowerCase() === slug);
    if (!exists) {
      return <NotFoundPage />;
    }
    return <BestIptvAppPage slug={slug} />;
  }
  if (currentPath.startsWith("/best-iptv/")) {
    const slug = currentPath.replace("/best-iptv/", "").trim().toLowerCase();
    const exists = bestIptvAppsList.some((a) => a.slug.toLowerCase() === slug);
    if (!exists) {
      return <NotFoundPage />;
    }
    if (typeof window !== "undefined") {
      window.location.replace(`/iptv-players/${slug}`);
    }
    return <BestIptvAppPage slug={slug} />;
  }
  if (currentPath === "/terms-conditions" || currentPath === "/terms" || currentPath === "/legal") {
    return <LegalPage type="terms" />;
  }
  if (currentPath === "/privacy-policy" || currentPath === "/privacy") {
    return <LegalPage type="privacy" />;
  }
  if (currentPath === "/refund-policy" || currentPath === "/refund") {
    return <LegalPage type="refund" />;
  }
  if (currentPath === "/disclaimer") {
    return <LegalPage type="disclaimer" />;
  }
  if (currentPath === "/404") {
    return <NotFoundPage />;
  }

  if (currentPath === "/" || currentPath === "") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}
