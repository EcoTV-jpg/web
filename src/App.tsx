import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import SetupPage from "./pages/SetupPage";
import DevicesPage from "./pages/DevicesPage";
import FaqPage from "./pages/FaqPage";
import { routes } from "./routes";
import { siteConfig } from "./config/site";

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
        const canonicalUrl = currentPath === "/" ? `${siteConfig.url}/` : `${siteConfig.url}${currentPath}`;
        canonicalEl.setAttribute("href", canonicalUrl);
      }
    }
  }, [currentPath]);

  if (currentPath === "/setup") {
    return <SetupPage />;
  }
  if (currentPath === "/devices") {
    return <DevicesPage />;
  }
  if (currentPath === "/faq") {
    return <FaqPage />;
  }

  return <HomePage />;
}
