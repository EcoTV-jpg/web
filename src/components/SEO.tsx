import { siteConfig } from "../config/site";
import { plans, faqs } from "../data/site";
import { routes } from "../routes";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  image?: string;
  type?: "website" | "article";
}

/**
 * Generate Schema.org JSON-LD structured data with stable @id references
 * and interconnected entity relationships for any route
 */
export function generateStructuredData(path: string = "/") {
  const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const route = routes.find((r) => r.path === cleanPath) || routes[0];
  const pageUrl = cleanPath === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${cleanPath}`;
  const pageTitle = route.title || siteConfig.defaultTitle;
  const pageDesc = route.description || siteConfig.defaultDescription;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": siteConfig.entityIds.organization,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    logo: siteConfig.logoUrl,
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
    sameAs: siteConfig.socialProfiles,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteConfig.entityIds.website,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    publisher: {
      "@id": siteConfig.entityIds.organization,
    },
    inLanguage: siteConfig.language,
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: pageTitle,
    url: pageUrl,
    description: pageDesc,
    isPartOf: {
      "@id": siteConfig.entityIds.website,
    },
    about: {
      "@id": siteConfig.entityIds.product,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: `${siteConfig.url}${siteConfig.socialImage}`,
      contentUrl: `${siteConfig.url}${siteConfig.socialImage}`,
      width: 1200,
      height: 630,
    },
    datePublished: "2026-01-01T00:00:00+00:00",
    dateModified: "2026-09-03T18:00:00+00:00",
    inLanguage: siteConfig.language,
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [pageUrl],
      },
    ],
    mentions: [
      {
        "@type": "Thing",
        name: "Internet Protocol television",
        description: "Delivery of television content over Internet Protocol (IP) networks.",
        sameAs: [
          "https://en.wikipedia.org/wiki/Internet_Protocol_television",
          "https://www.wikidata.org/wiki/Q11153",
        ],
      },
      {
        "@type": "Thing",
        name: "Streaming media",
        description: "Multimedia that is constantly received by and presented to an end-user while being delivered by a provider.",
        sameAs: [
          "https://en.wikipedia.org/wiki/Streaming_media",
          "https://www.wikidata.org/wiki/Q11379",
        ],
      },
      {
        "@type": "Thing",
        name: "4K resolution",
        description: "Display resolution of approximately 4,000 pixels for ultra-high-definition television.",
        sameAs: [
          "https://en.wikipedia.org/wiki/4K_resolution",
          "https://www.wikidata.org/wiki/Q2816438",
        ],
      },
      {
        "@type": "Thing",
        name: "High-definition television",
        description: "Television system providing substantially higher image resolution than previous generations.",
        sameAs: [
          "https://en.wikipedia.org/wiki/High-definition_television",
          "https://www.wikidata.org/wiki/Q131346",
        ],
      },
      {
        "@type": "Thing",
        name: "Video on demand",
        description: "Media distribution system allowing users to access videos without a traditional broadcasting schedule.",
        sameAs: [
          "https://en.wikipedia.org/wiki/Video_on_demand",
          "https://www.wikidata.org/wiki/Q192271",
        ],
      },
      {
        "@type": "Thing",
        name: "Android TV",
        description: "Smart TV operating system based on Android and developed by Google.",
        sameAs: [
          "https://en.wikipedia.org/wiki/Android_TV",
          "https://www.wikidata.org/wiki/Q17284414",
        ],
      },
      {
        "@type": "Thing",
        name: "tvOS",
        description: "Operating system developed by Apple Inc. for the Apple TV digital media player.",
        sameAs: [
          "https://en.wikipedia.org/wiki/TvOS",
          "https://www.wikidata.org/wiki/Q20963388",
        ],
      },
      {
        "@type": "Thing",
        name: "Fire TV",
        description: "Line of digital media players and microconsoles developed by Amazon.",
        sameAs: [
          "https://en.wikipedia.org/wiki/Amazon_Fire_TV",
          "https://www.wikidata.org/wiki/Q16156220",
        ],
      },
    ],
  };

  // Breadcrumb schema for non-root routes
  let breadcrumbSchema = null;
  if (cleanPath !== "/") {
    const pageName =
      cleanPath === "/setup"
        ? "Setup & Installation"
        : cleanPath === "/devices"
        ? "Supported Devices"
        : cleanPath === "/faq"
        ? "FAQ & Support"
        : "Page";

    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageName,
          item: pageUrl,
        },
      ],
    };
  }

  // Route-specific schemas
  if (cleanPath === "/setup") {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${siteConfig.url}/setup#howto`,
      name: "How to Set Up Teleview IPTV",
      description: "Complete visual guide to installing and activating Teleview IPTV on Firestick, Smart TV, Android, and iOS devices.",
      step: [
        {
          "@type": "HowToStep",
          name: "Select Your Preferred Device & App",
          text: "Choose your streaming platform (Amazon Firestick, Samsung/LG Smart TV, Android Box, iOS/Apple TV).",
          url: `${siteConfig.url}/setup#firestick`,
        },
        {
          "@type": "HowToStep",
          name: "Download Player Application",
          text: "Install a supported IPTV player (TiviMate, IPTV Smarters Pro, IBO Player) from the official app store.",
          url: `${siteConfig.url}/setup#smart-tv`,
        },
        {
          "@type": "HowToStep",
          name: "Configure Teleview Credentials",
          text: "Enter your server URL, username, and password (Xtream API) or load your M3U playlist link to start streaming.",
          url: `${siteConfig.url}/setup#xtream-codes`,
        },
      ],
    };
    return [orgSchema, websiteSchema, webpageSchema, breadcrumbSchema, howToSchema].filter(Boolean);
  }

  if (cleanPath === "/faq") {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };
    return [orgSchema, websiteSchema, webpageSchema, breadcrumbSchema, faqSchema].filter(Boolean);
  }

  // Convert plans to valid Offer schemas for product page
  const numericPrices = plans.map((p) => parseFloat(p.price.replace(/[^0-9.]/g, "")));
  const minPrice = Math.min(...numericPrices).toFixed(2);
  const maxPrice = Math.max(...numericPrices).toFixed(2);

  const offerItems = plans.map((p) => {
    const rawPrice = p.price.replace(/[^0-9.]/g, "");
    return {
      "@type": "Offer",
      name: `${siteConfig.name} - ${p.name}`,
      price: `${parseFloat(rawPrice).toFixed(2)}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#pricing`,
      priceValidUntil: "2027-12-31",
      description: `IPTV Subscription - ${p.name} with ${p.features.join(", ")}`,
      seller: {
        "@id": siteConfig.entityIds.organization,
      },
    };
  });

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": siteConfig.entityIds.product,
    name: `${siteConfig.name} IPTV Subscription`,
    description:
      "Premium IPTV subscription offering thousands of live channels, extensive on-demand library, 4K UHD streaming, and 24/7 customer support.",
    brand: {
      "@type": "Brand",
      "@id": siteConfig.entityIds.brand,
      name: siteConfig.name,
    },
    manufacturer: {
      "@id": siteConfig.entityIds.organization,
    },
    image: `${siteConfig.url}${siteConfig.socialImage}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: offerItems.length,
      offers: offerItems,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#service`,
    name: `${siteConfig.name} IPTV Streaming Subscription`,
    serviceType: "IPTV & Video Streaming Service",
    provider: {
      "@id": siteConfig.entityIds.organization,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IPTV Subscription Plans",
      itemListElement: offerItems,
    },
  };

  return [orgSchema, websiteSchema, webpageSchema, breadcrumbSchema, productSchema, serviceSchema].filter(Boolean);
}

/**
 * SEO Component for client-side and server-side head management
 */
export default function SEO({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  canonical = `${siteConfig.url}/`,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  image = `${siteConfig.url}${siteConfig.socialImage}`,
  type = "website",
}: SEOProps) {
  const schemas = generateStructuredData(canonical.replace(siteConfig.url, ""));

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Open Graph (Search Engine Land spec) */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="article:modified_time" content="2026-09-03T18:00:00+00:00" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </>
  );
}
