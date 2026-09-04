import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import SetupPage from "./pages/SetupPage";
import DevicesPage from "./pages/DevicesPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import AccountPage from "./pages/AccountPage";
import DmcaPage from "./pages/DmcaPage";
import SubscriptionHubPage from "./pages/SubscriptionHubPage";
import SubscriptionProductPage from "./pages/SubscriptionProductPage";
import LegalPage from "./pages/LegalPage";
import BestIptvHubPage from "./pages/BestIptvHubPage";
import BestIptvAppPage from "./pages/BestIptvAppPage";
import { routes } from "./routes";
import { siteConfig, getCanonicalUrl } from "./config/site";
import { generateStructuredData } from "./components/SEO";

export default function App({ url }: { url?: string }) {
  const rawPath = url || (typeof window !== "undefined" ? window.location.pathname : "/");
  const currentPath = rawPath === "/" ? "/" : rawPath.replace(/\/$/, "");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const route = routes.find((r) => r.path === currentPath) || routes[0];
      if (route.title) {
        document.title = route.title;
      }
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalEl.setAttribute("href", getCanonicalUrl(currentPath));
      }
      const jsonLdEl = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdEl) {
        jsonLdEl.textContent = JSON.stringify(generateStructuredData(currentPath));
      }
    }
  }, [currentPath]);

  if (currentPath === "/setup" || currentPath === "/tutorial" || currentPath === "/installation-guide") {
    return <SetupPage />;
  }
  if (currentPath === "/devices") {
    return <DevicesPage />;
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
  if (currentPath === "/my-account" || currentPath === "/my-subscription") {
    return <AccountPage />;
  }
  if (currentPath === "/dmca" || currentPath === "/dmca-report" || currentPath === "/dmca-notice") {
    return <DmcaPage />;
  }
  if (currentPath === "/iptv-subscription" || currentPath === "/pricing") {
    return <SubscriptionHubPage />;
  }
  if (currentPath.startsWith("/iptv-subscription/")) {
    const slug = currentPath.replace("/iptv-subscription/", "");
    return <SubscriptionProductPage slug={slug} />;
  }
  if (currentPath === "/best-iptv") {
    return <BestIptvHubPage />;
  }
  if (currentPath.startsWith("/best-iptv/")) {
    const slug = currentPath.replace("/best-iptv/", "");
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

  return <HomePage />;
}
