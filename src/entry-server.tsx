import { renderToString } from "react-dom/server";
import App from "./App";
import { siteConfig } from "./config/site";
import { generateStructuredData } from "./components/SEO";

export function render(url: string = "/") {
  const html = renderToString(<App url={url} />);
  const schemas = generateStructuredData(url);

  return {
    html,
    schemas,
    siteConfig,
  };
}
