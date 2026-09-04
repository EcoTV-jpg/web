import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function FloatingChat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Teleview support on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-phosphor-green/40 bg-ash text-phosphor-green shadow-lg shadow-black/40 transition-all duration-200 hover:scale-105 hover:border-phosphor-green hover:bg-forest-depth/40 focus:outline-none focus:ring-2 focus:ring-phosphor-green"
    >
      <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">Live WhatsApp Support</span>
    </a>
  );
}
