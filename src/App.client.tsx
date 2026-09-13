import { useEffect, lazy, Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./pages/HomePage";
import { routes } from "./routes";
import { siteConfig, getCanonicalUrl } from "./config/site";

// Lightweight homepage structured data — no heavy data imports, only siteConfig
function generateHomepageStructuredData() {
  const orgSchema = {
    "@type": "Organization",
    "@id": siteConfig.entityIds.organization,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: "Teleview IPTV",
    url: `${siteConfig.url}/`,
    logo: {
      "@type": "ImageObject",
      inLanguage: siteConfig.language,
      "@id": `${siteConfig.url}/#logo`,
      url: siteConfig.logoUrl,
      contentUrl: siteConfig.logoUrl,
      caption: `${siteConfig.name} Logo`,
    },
    image: { "@id": `${siteConfig.url}/#logo` },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.whatsapp,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.whatsapp,
        availableLanguage: ["English"],
      },
    ],
  };
  const websiteSchema = {
    "@type": "WebSite",
    "@id": siteConfig.entityIds.website,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    publisher: { "@id": siteConfig.entityIds.organization },
    alternateName: "Teleview IPTV",
    inLanguage: siteConfig.language,
  };
  const pageUrl = `${siteConfig.url}/`;
  const homeRoute = routes.find((r) => r.path === "/");
  const pageUrlLastmod = homeRoute?.lastmod || siteConfig.defaultLastmod;
  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    isPartOf: { "@id": siteConfig.entityIds.website },
    about: { "@id": siteConfig.entityIds.organization },
    primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
    image: { "@id": `${pageUrl}#primaryimage` },
    thumbnailUrl: `${siteConfig.url}/images/teleview-og.jpg`,
    inLanguage: siteConfig.language,
    dateModified: `${pageUrlLastmod}T00:00:00+00:00`,
    potentialAction: [{ "@type": "ReadAction", target: [pageUrl] }],
  };
  const primaryImageSchema = {
    "@type": "ImageObject",
    "@id": `${pageUrl}#primaryimage`,
    inLanguage: siteConfig.language,
    url: `${siteConfig.url}/images/teleview-og.jpg`,
    contentUrl: `${siteConfig.url}/images/teleview-og.jpg`,
    width: 1200,
    height: 630,
    caption: siteConfig.defaultTitle,
  };
  const canonicalOffers = [
    { name: "1 Month IPTV Subscription", price: "16.00", url: `${siteConfig.url}/iptv-subscription/1-month`, description: "1 Month IPTV Subscription with 25,000+ live channels, 4K sports, and VOD library." },
    { name: "3 Months IPTV Subscription", price: "39.00", url: `${siteConfig.url}/iptv-subscription/3-months`, description: "3 Months IPTV Subscription (Save 19% at $13/mo) with full 4K sports coverage." },
    { name: "6 Months IPTV Subscription", price: "60.00", url: `${siteConfig.url}/iptv-subscription/6-months`, description: "6 Months IPTV Subscription (Save 37.5% at $10/mo) with streaming access on supported devices." },
    { name: "12 Months IPTV Subscription", price: "90.00", url: `${siteConfig.url}/iptv-subscription/12-months`, description: "12 Months IPTV Subscription (Best value at $7.50/mo) with streaming access and price protection." },
  ].map((o) => ({
    "@type": "Offer",
    name: `${siteConfig.name} - ${o.name}`,
    price: o.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: o.url,
    priceValidUntil: "2027-12-31",
    description: o.description,
    seller: { "@id": siteConfig.entityIds.organization },
  }));
  const homepageServiceSchema = {
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} IPTV Streaming Subscription`,
    serviceType: "IPTV & Video Streaming Service",
    description: siteConfig.defaultDescription,
    provider: { "@id": siteConfig.entityIds.organization },
    areaServed: "Worldwide",
    hasOfferCatalog: { "@type": "OfferCatalog", name: "IPTV Subscription Plans", itemListElement: canonicalOffers },
  };
  return { "@context": "https://schema.org", "@graph": [orgSchema, websiteSchema, webpageSchema, primaryImageSchema, homepageServiceSchema] };
}

// Lazy-load all non-homepage pages — homepage remains eager for LCP
const SetupPage = lazy(() => import("./pages/SetupPage"));
const DevicesPage = lazy(() => import("./pages/DevicesPage"));
const DeviceGuidePage = lazy(() => import("./pages/DeviceGuidePage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HelpCenterPage = lazy(() => import("./pages/HelpCenterPage"));
const TroubleshootingGuidePage = lazy(() => import("./pages/TroubleshootingGuidePage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const DmcaPage = lazy(() => import("./pages/DmcaPage"));
const SubscriptionHubPage = lazy(() => import("./pages/SubscriptionHubPage"));
const SubscriptionProductPage = lazy(() => import("./pages/SubscriptionProductPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const BestIptvHubPage = lazy(() => import("./pages/BestIptvHubPage"));
const BestIptvAppPage = lazy(() => import("./pages/BestIptvAppPage"));
const IptvPlayersHubPage = lazy(() => import("./pages/IptvPlayersHubPage"));
const WhatIsIptvPage = lazy(() => import("./pages/WhatIsIptvPage"));
const FreeTrialPage = lazy(() => import("./pages/FreeTrialPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const InformationalArticlePage = lazy(() => import("./pages/InformationalArticlePage"));
const FeatureHubPage = lazy(() => import("./pages/FeatureHubPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
          if (currentPath === "/" || currentPath === "") {
            jsonLdEl.textContent = JSON.stringify(generateHomepageStructuredData());
          } else {
            import("./components/SEO").then(({ generateStructuredData }) => {
              jsonLdEl.textContent = JSON.stringify(generateStructuredData(currentPath));
            });
          }
        }
      } else {
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
          import("./components/SEO").then(({ generateStructuredData }) => {
            jsonLdEl.textContent = JSON.stringify(generateStructuredData("/404"));
          });
        }
      }
    }
  }, [currentPath]);

  // Homepage is eager — critical for LCP, no Suspense needed
  if (currentPath === "/" || currentPath === "") {
    return (
      <>
        <HomePage />
        <SpeedInsights />
      </>
    );
  }

  // All other routes are lazy-loaded with Suspense fallback
  return (
    <>
      <Suspense fallback={<div id="root-fallback" style={{ minHeight: "100vh", background: "#070b18" }} />}>
        {(() => {
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
            return <DeviceGuidePage slug={currentPath.replace("/devices/", "").trim().toLowerCase()} />;
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
            return <TroubleshootingGuidePage slug={currentPath.replace("/help-center/", "").trim().toLowerCase()} />;
          }
          if (currentPath === "/my-account" || currentPath === "/my-subscription") {
            return <AccountPage />;
          }
          if (currentPath === "/dmca" || currentPath === "/dmca-report" || currentPath === "/dmca-notice") {
            return <DmcaPage />;
          }
          if (currentPath === "/iptv-subscription") {
            return <SubscriptionHubPage />;
          }
          if (currentPath === "/iptv-pricing") {
            return <PricingPage />;
          }
          if (currentPath === "/pricing") {
            if (typeof window !== "undefined") {
              window.location.replace("/iptv-pricing");
            }
            return <PricingPage />;
          }
          if (currentPath === "/iptv-free-trial" || currentPath === "/free-trial") {
            return <FreeTrialPage />;
          }
          if (
            currentPath === "/how-does-iptv-work" ||
            currentPath === "/is-iptv-legal" ||
            currentPath === "/is-iptv-safe" ||
            currentPath === "/iptv-cost" ||
            currentPath === "/iptv-vs-cable"
          ) {
            return <InformationalArticlePage slug={currentPath.replace(/^\//, "")} />;
          }
          if (
            currentPath === "/iptv-channels" ||
            currentPath === "/iptv-sports" ||
            currentPath === "/iptv-movies"
          ) {
            return <FeatureHubPage slug={currentPath.replace(/^\//, "")} />;
          }
          if (currentPath.startsWith("/iptv-subscription/")) {
            return <SubscriptionProductPage slug={currentPath.replace("/iptv-subscription/", "").trim().toLowerCase()} />;
          }
          if (currentPath === "/best-iptv") {
            return <BestIptvHubPage />;
          }
          if (currentPath === "/iptv-players") {
            return <IptvPlayersHubPage />;
          }
          if (currentPath.startsWith("/iptv-players/")) {
            return <BestIptvAppPage slug={currentPath.replace("/iptv-players/", "").trim().toLowerCase()} />;
          }
          if (currentPath.startsWith("/best-iptv/")) {
            const slug = currentPath.replace("/best-iptv/", "").trim().toLowerCase();
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
          if (currentPath === "/about") {
            return <AboutPage />;
          }
          if (currentPath === "/404") {
            return <NotFoundPage />;
          }
          return <NotFoundPage />;
        })()}
      </Suspense>
      <SpeedInsights />
    </>
  );
}
