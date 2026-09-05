import { siteConfig, getCanonicalUrl } from "../config/site";
import { faqs } from "../data/site";
import { routes } from "../routes";
import { subscriptionPlans, subscriptionHubData } from "../data/products";
import { bestIptvAppsList, hubFaqs } from "../data/bestIptvApps";
import { deviceGuidesList } from "../data/deviceGuides";
import { troubleshootingGuidesList } from "../data/troubleshootingGuides";
import { whatIsIptvFaqs } from "../data/whatIsIptv";

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  image?: string;
  type?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * Generate Schema.org JSON-LD structured data with a single coherent @graph,
 * stable @id references, and interconnected entity relationships.
 * 
 * Complies strictly with Google Search Essentials:
 * 1. Zero fake reviews or synthetic AggregateRating schemas.
 * 2. FAQPage only where visible FAQs exist in the DOM.
 * 3. HowTo only on /setup where actual steps are documented.
 * 4. Product and Offer data strictly match visible pricing, duration, and availability.
 * 5. BreadcrumbList matches the visible breadcrumb hierarchy 1:1.
 */
export function generateStructuredData(path: string = "/") {
  const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const route = routes.find((r) => r.path === cleanPath);

  // 1. Organization (Stable entity across the entire website)
  const orgSchema = {
    "@type": "Organization",
    "@id": siteConfig.entityIds.organization,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${siteConfig.url}/#logo`,
      url: siteConfig.logoUrl,
      contentUrl: siteConfig.logoUrl,
      caption: `${siteConfig.name} Logo`,
    },
    image: {
      "@id": `${siteConfig.url}/#logo`,
    },
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

  // 2. WebSite (Parent container for all pages)
  const websiteSchema = {
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

  // For unknown routes or 404, return ONLY foundational site schemas (no entity schemas, no false breadcrumbs)
  if (!route || cleanPath === "/404") {
    return {
      "@context": "https://schema.org",
      "@graph": [orgSchema, websiteSchema],
    };
  }

  const pageUrl = getCanonicalUrl(cleanPath);
  const pageTitle = route.title || siteConfig.defaultTitle;
  const pageDesc = route.description || siteConfig.defaultDescription;

  // 3. BreadcrumbList (Matches visible DOM breadcrumbs exactly for non-root routes)
  let breadcrumbSchema: any = null;
  if (cleanPath !== "/") {
    if (cleanPath.startsWith("/iptv-subscription/")) {
      const slug = cleanPath.replace("/iptv-subscription/", "");
      const plan = subscriptionPlans[slug];
      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "IPTV Subscription",
            item: `${siteConfig.url}/iptv-subscription`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: plan ? plan.duration : "Plan",
            item: pageUrl,
          },
        ],
      };
    } else if (cleanPath.startsWith("/iptv-players/") || cleanPath.startsWith("/best-iptv/")) {
      const slug = cleanPath.replace("/iptv-players/", "").replace("/best-iptv/", "");
      const app = bestIptvAppsList.find((a) => a.slug === slug);
      const appName = app ? app.shortName : (route.breadcrumbName || "Player");
      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "IPTV Players",
            item: `${siteConfig.url}/iptv-players`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: appName,
            item: pageUrl,
          },
        ],
      };
    } else if (cleanPath.startsWith("/devices/")) {
      const slug = cleanPath.replace("/devices/", "");
      const device = deviceGuidesList.find((d) => d.slug === slug);
      const deviceName = device ? device.name : (route.breadcrumbName || "Device");
      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Supported Devices",
            item: `${siteConfig.url}/devices`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: deviceName,
            item: pageUrl,
          },
        ],
      };
    } else if (cleanPath.startsWith("/help-center/")) {
      const slug = cleanPath.replace("/help-center/", "");
      const guide = troubleshootingGuidesList.find((g) => g.slug === slug);
      const guideName = guide ? guide.name : (route.breadcrumbName || "Troubleshooting");
      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Help Center",
            item: `${siteConfig.url}/help-center`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: guideName,
            item: pageUrl,
          },
        ],
      };
    } else {
      const pageName = route.breadcrumbName || route.title?.split("|")[0].trim() || "Page";
      breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
  }

  // 4. WebPage (Current document entity)
  const webpageSchema: Record<string, any> = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDesc,
    isPartOf: {
      "@id": siteConfig.entityIds.website,
    },
    inLanguage: siteConfig.language,
    datePublished: "2026-01-01T00:00:00+00:00",
    dateModified: "2026-09-04T18:00:00+00:00",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [pageUrl],
      },
    ],
  };

  if (breadcrumbSchema) {
    webpageSchema.breadcrumb = {
      "@id": `${pageUrl}#breadcrumb`,
    };
  }

  // Canonical offers definition for product listings
  const canonicalOffers = [
    {
      name: "1 Month IPTV Subscription",
      price: "16.00",
      url: `${siteConfig.url}/iptv-subscription/1-month`,
      description: "1 Month IPTV Subscription with 25,000+ live channels, 4K sports, and VOD library.",
    },
    {
      name: "3 Months IPTV Subscription",
      price: "39.00",
      url: `${siteConfig.url}/iptv-subscription/3-months`,
      description: "3 Months IPTV Subscription (Save 19% at $13/mo) with full 4K sports coverage.",
    },
    {
      name: "6 Months IPTV Subscription",
      price: "60.00",
      url: `${siteConfig.url}/iptv-subscription/6-months`,
      description: "6 Months IPTV Subscription (Save 37.5% at $10/mo) with anti-freeze CDN streams.",
    },
    {
      name: "12 Months IPTV Subscription",
      price: "90.00",
      url: `${siteConfig.url}/iptv-subscription/12-months`,
      description: "12 Months IPTV Subscription (Best value at $7.50/mo) with dedicated server priority.",
    },
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
    seller: {
      "@id": siteConfig.entityIds.organization,
    },
  }));

  // Build route-specific graph entities
  const graphEntities: any[] = [orgSchema, websiteSchema, webpageSchema];

  if (breadcrumbSchema) {
    graphEntities.push(breadcrumbSchema);
  }

  // Route: /setup
  if (cleanPath === "/setup") {
    webpageSchema.about = { "@id": `${siteConfig.url}/setup#howto` };
    const howToSchema = {
      "@type": "HowTo",
      "@id": `${siteConfig.url}/setup#howto`,
      name: "How to Set Up Teleview IPTV Across Streaming Devices",
      description:
        "Complete technical installation guide to configuring Teleview IPTV on Amazon Firestick, Samsung and LG Smart TVs, Android TV, Apple TV, PC/Mac, and MAG receivers.",
      totalTime: "PT5M",
      tool: [
        {
          "@type": "HowToTool",
          name: "Compatible Streaming Device (Amazon Fire TV, Samsung/LG Smart TV, Android Box, Apple TV, or MAG)",
        },
        {
          "@type": "HowToTool",
          name: "IPTV Player Application (TiviMate, IPTV Smarters Pro, IBO Player, or GSE Smart IPTV)",
        },
      ],
      supply: [
        {
          "@type": "HowToSupply",
          name: "Active Teleview IPTV Subscription Credentials (Xtream Codes API Server URL, Username, and Password)",
        },
        {
          "@type": "HowToSupply",
          name: "High-Speed Internet Connection (15–25+ Mbps recommended on 5GHz Wi-Fi or Ethernet)",
        },
      ],
      step: [
        {
          "@type": "HowToStep",
          name: "Verify Network & Device Prerequisites",
          text: "Ensure your streaming device has at least 1.5 GB free storage and connects to 5GHz Wi-Fi or Ethernet with 15+ Mbps bandwidth.",
          url: `${siteConfig.url}/setup#prerequisites`,
        },
        {
          "@type": "HowToStep",
          name: "Select Your Preferred Device & Install Player App",
          text: "Install a supported player application: Downloader + TiviMate on Firestick, IBO Player on Smart TV, or IPTV Smarters Pro on Android and iOS.",
          url: `${siteConfig.url}/setup#firestick`,
        },
        {
          "@type": "HowToStep",
          name: "Configure Teleview Xtream Codes or M3U Credentials",
          text: "Input your Teleview Server URL, Username, and Password into the player app's Xtream Codes API login interface, or load your M3U playlist link.",
          url: `${siteConfig.url}/setup#xtream-codes`,
        },
        {
          "@type": "HowToStep",
          name: "Synchronize Channel Catalog & Electronic Program Guide",
          text: "Wait 15–30 seconds for the channel playlist and EPG timeline to synchronize, then start streaming live TV and 4K VOD.",
          url: `${siteConfig.url}/setup#smart-tv`,
        },
      ],
    };
    graphEntities.push(howToSchema);
  }

  // Route: /devices
  if (cleanPath === "/devices") {
    webpageSchema.about = { "@id": `${siteConfig.url}/devices#article` };
    const techArticleSchema = {
      "@type": "TechArticle",
      "@id": `${siteConfig.url}/devices#article`,
      headline: "Supported IPTV Devices, Hardware Requirements & App Compatibility Guide",
      description:
        "Comprehensive technical guide to supported streaming devices, hardware specifications, internet bandwidth requirements, and IPTV player applications for Teleview.",
      url: `${siteConfig.url}/devices`,
      inLanguage: siteConfig.language,
      author: {
        "@id": siteConfig.entityIds.organization,
      },
      publisher: {
        "@id": siteConfig.entityIds.organization,
      },
      datePublished: "2026-01-01T00:00:00+00:00",
      dateModified: "2026-09-04T18:00:00+00:00",
      proficiencyLevel: "Beginner",
      about: [
        { "@type": "Thing", name: "Streaming media device" },
        { "@type": "Thing", name: "Internet Protocol television" },
        { "@type": "Thing", name: "Hardware specifications" },
      ],
    };
    graphEntities.push(techArticleSchema);
  }

  // Route: /faq
  if (cleanPath === "/faq") {
    webpageSchema.about = { "@id": `${siteConfig.url}/faq#faq` };
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/faq#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };
    graphEntities.push(faqSchema);
  }

  // Route: /best-iptv (Hub Page)
  if (cleanPath === "/best-iptv") {
    webpageSchema["@type"] = ["WebPage", "CollectionPage"];
    webpageSchema.about = { "@id": `${siteConfig.url}/best-iptv#article` };

    const hubArticleSchema = {
      "@type": "TechArticle",
      "@id": `${siteConfig.url}/best-iptv#article`,
      headline: "Best IPTV Players & Apps in 2026: Comprehensive Comparison",
      description:
        "Detailed technical comparison of the top IPTV player applications across Firestick, Android TV, Smart TVs, Apple iOS, and desktop computers.",
      url: `${siteConfig.url}/best-iptv`,
      inLanguage: siteConfig.language,
      author: {
        "@id": siteConfig.entityIds.organization,
      },
      publisher: {
        "@id": siteConfig.entityIds.organization,
      },
      datePublished: "2026-01-01T00:00:00+00:00",
      dateModified: "2026-09-04T18:00:00+00:00",
      proficiencyLevel: "Beginner",
      about: [
        { "@type": "Thing", name: "IPTV Player" },
        { "@type": "Thing", name: "Media Streaming Applications" },
      ],
    };

    const bestIptvFaqSchema = {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/best-iptv#faq`,
      mainEntity: hubFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    graphEntities.push(hubArticleSchema, bestIptvFaqSchema);
  }

  // Route: /what-is-iptv (Pillar Page)
  if (cleanPath === "/what-is-iptv") {
    webpageSchema.about = { "@id": `${siteConfig.url}/what-is-iptv#article` };
    const whatIsArticleSchema = {
      "@type": "Article",
      "@id": `${siteConfig.url}/what-is-iptv#article`,
      headline: route.h1 || "What Is IPTV? The Complete 2026 Technology Guide",
      description: route.description,
      url: pageUrl,
      inLanguage: siteConfig.language,
      author: {
        "@id": siteConfig.entityIds.organization,
      },
      publisher: {
        "@id": siteConfig.entityIds.organization,
      },
      datePublished: "2026-01-01T00:00:00+00:00",
      dateModified: "2026-09-05T00:00:00+00:00",
      about: [
        { "@type": "Thing", name: "IPTV" },
        { "@type": "Thing", name: "Internet Protocol Television" },
        { "@type": "Thing", name: "Streaming Technology" },
      ],
    };

    const whatIsFaqSchema = {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/what-is-iptv#faq`,
      mainEntity: whatIsIptvFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    graphEntities.push(whatIsArticleSchema, whatIsFaqSchema);
  }

  // Route: /iptv-players (Directory Hub)
  if (cleanPath === "/iptv-players") {
    webpageSchema.about = { "@id": `${siteConfig.url}/iptv-players#collection` };
    const collectionSchema = {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/iptv-players#collection`,
      name: route.h1 || "IPTV Players & Streaming Apps Directory",
      description: route.description,
      url: pageUrl,
      inLanguage: siteConfig.language,
      mainEntity: {
        "@type": "ItemList",
        name: "IPTV Player Applications",
        itemListElement: bestIptvAppsList.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: app.name,
          url: `${siteConfig.url}/iptv-players/${app.slug}`,
        })),
      },
    };
    graphEntities.push(collectionSchema);
  }

  // Route: /iptv-players/:slug (Individual App Guide Pages)
  if (cleanPath.startsWith("/iptv-players/") || cleanPath.startsWith("/best-iptv/")) {
    const slug = cleanPath.replace("/iptv-players/", "").replace("/best-iptv/", "");
    const app = bestIptvAppsList.find((a) => a.slug === slug);

    if (app) {
      webpageSchema.about = { "@id": `${pageUrl}#article` };

      const appArticleSchema = {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: route.h1 || `${app.name} Technical Guide`,
        description: route.description || app.tagline,
        url: pageUrl,
        inLanguage: siteConfig.language,
        author: {
          "@id": siteConfig.entityIds.organization,
        },
        publisher: {
          "@id": siteConfig.entityIds.organization,
        },
        datePublished: "2026-01-01T00:00:00+00:00",
        dateModified: "2026-09-05T00:00:00+00:00",
        proficiencyLevel: "Beginner",
        about: [
          { "@type": "Thing", name: app.name },
          { "@type": "Thing", name: "IPTV Player" },
          { "@type": "Thing", name: "Streaming Setup" },
        ],
      };

      const appFaqSchema = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: app.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };

      graphEntities.push(appArticleSchema, appFaqSchema);
    }
  }

  // Route: /devices/:slug (Individual Device Setup Guides)
  if (cleanPath.startsWith("/devices/")) {
    const slug = cleanPath.replace("/devices/", "");
    const device = deviceGuidesList.find((d) => d.slug === slug);

    if (device) {
      webpageSchema.about = { "@id": `${pageUrl}#article` };

      const deviceArticleSchema = {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: route.h1 || `How to Set Up IPTV on ${device.name}`,
        description: route.description || device.tagline,
        url: pageUrl,
        inLanguage: siteConfig.language,
        author: {
          "@id": siteConfig.entityIds.organization,
        },
        publisher: {
          "@id": siteConfig.entityIds.organization,
        },
        datePublished: "2026-01-01T00:00:00+00:00",
        dateModified: "2026-09-05T00:00:00+00:00",
        proficiencyLevel: "Beginner",
        about: [
          { "@type": "Thing", name: device.name },
          { "@type": "Thing", name: "IPTV Device Setup" },
          { "@type": "Thing", name: device.category },
        ],
      };

      const deviceFaqSchema = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: device.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };

      graphEntities.push(deviceArticleSchema, deviceFaqSchema);
    }
  }

  // Route: /help-center/:slug (Individual Troubleshooting Guides)
  if (cleanPath.startsWith("/help-center/")) {
    const slug = cleanPath.replace("/help-center/", "");
    const guide = troubleshootingGuidesList.find((g) => g.slug === slug);

    if (guide) {
      webpageSchema.about = { "@id": `${pageUrl}#article` };

      const guideArticleSchema = {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: route.h1 || guide.name,
        description: route.description || guide.tagline,
        url: pageUrl,
        inLanguage: siteConfig.language,
        author: {
          "@id": siteConfig.entityIds.organization,
        },
        publisher: {
          "@id": siteConfig.entityIds.organization,
        },
        datePublished: "2026-01-01T00:00:00+00:00",
        dateModified: "2026-09-05T00:00:00+00:00",
        proficiencyLevel: "Intermediate",
        about: [
          { "@type": "Thing", name: guide.name },
          { "@type": "Thing", name: "IPTV Troubleshooting" },
          { "@type": "Thing", name: guide.category },
        ],
      };

      const guideFaqSchema = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };

      graphEntities.push(guideArticleSchema, guideFaqSchema);
    }
  }

  // Route: /iptv-subscription (Hub Page)
  if (cleanPath === "/iptv-subscription") {
    webpageSchema.about = { "@id": `${siteConfig.url}/iptv-subscription#product` };

    const hubProductSchema = {
      "@type": "Product",
      "@id": `${siteConfig.url}/iptv-subscription#product`,
      name: `${siteConfig.name} IPTV Subscription Plans`,
      description:
        "Compare Teleview IPTV subscription plans. Instant access to 25,000+ live TV channels, 120,000+ movies, 4K sports, and 24/7 customer support.",
      brand: {
        "@type": "Brand",
        "@id": siteConfig.entityIds.brand,
        name: siteConfig.name,
      },
      image: `${siteConfig.url}${siteConfig.socialImage}`,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "16.00",
        highPrice: "90.00",
        offerCount: canonicalOffers.length,
        offers: canonicalOffers,
      },
    };

    const hubServiceSchema = {
      "@type": "Service",
      "@id": `${siteConfig.url}/iptv-subscription#service`,
      name: `${siteConfig.name} IPTV Subscription Service`,
      serviceType: "IPTV & Video Streaming Service",
      provider: {
        "@id": siteConfig.entityIds.organization,
      },
      areaServed: "Worldwide",
    };

    const hubFaqSchema = {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/iptv-subscription#faq`,
      mainEntity: subscriptionHubData.hubFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    };

    graphEntities.push(hubProductSchema, hubServiceSchema, hubFaqSchema);
  }

  // Route: /iptv-subscription/:slug (Individual Product Pages)
  if (cleanPath.startsWith("/iptv-subscription/")) {
    const slug = cleanPath.replace("/iptv-subscription/", "");
    const plan = subscriptionPlans[slug];

    if (plan) {
      webpageSchema.about = { "@id": `${pageUrl}#product` };

      const singleProductSchema = {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: `${plan.name} - ${siteConfig.name}`,
        description: plan.metaDescription,
        brand: {
          "@type": "Brand",
          "@id": siteConfig.entityIds.brand,
          name: siteConfig.name,
        },
        image: `${siteConfig.url}${siteConfig.socialImage}`,
        offers: {
          "@type": "Offer",
          "@id": `${pageUrl}#offer`,
          name: `${siteConfig.name} - ${plan.name}`,
          price: `${plan.price}.00`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: pageUrl,
          priceValidUntil: "2027-12-31",
          seller: {
            "@id": siteConfig.entityIds.organization,
          },
        },
      };

      const productFaqSchema = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: plan.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };

      graphEntities.push(singleProductSchema, productFaqSchema);
    }
  }

  // Route: / (Homepage)
  if (cleanPath === "/") {
    webpageSchema.about = { "@id": `${siteConfig.url}/#product` };

    const homepageProductSchema = {
      "@type": "Product",
      "@id": `${siteConfig.url}/#product`,
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
        lowPrice: "16.00",
        highPrice: "90.00",
        offerCount: canonicalOffers.length,
        offers: canonicalOffers,
      },
    };

    const homepageServiceSchema = {
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
        itemListElement: canonicalOffers,
      },
    };

    graphEntities.push(homepageProductSchema, homepageServiceSchema);
  }

  // Return unified Schema.org @graph root structure
  return {
    "@context": "https://schema.org",
    "@graph": graphEntities.filter(Boolean),
  };
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
  ogTitle,
  ogDescription,
}: SEOProps) {
  const canonicalUrl = getCanonicalUrl(canonical);
  const structuredData = generateStructuredData(canonicalUrl);
  const effectiveOgTitle = ogTitle || title;
  const effectiveOgDesc = ogDescription || description;
  const isNoIndex = canonicalUrl.endsWith("/my-account");
  const effectiveRobots =
    robots !== "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      ? robots
      : isNoIndex
      ? "noindex, follow"
      : robots;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={effectiveRobots} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={effectiveOgTitle} />
      <meta property="og:description" content={effectiveOgDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="article:modified_time" content="2026-09-04T18:00:00+00:00" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={effectiveOgTitle} />
      <meta name="twitter:description" content={effectiveOgDesc} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (@graph) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
