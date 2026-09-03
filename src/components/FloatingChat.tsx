import { MessageCircle } from "lucide-react";
import { site } from "../data/site";

export default function FloatingChat() {
  return (
    <a
      href={site.emailHref}
      aria-label="Chat with Teleview support"
      className="fixed bottom-5 right-5 z-50 grid size-10 place-items-center rounded-full border border-charcoal bg-ash text-phosphor-green transition-colors duration-200 hover:border-graphite"
    >
      <MessageCircle className="size-[18px]" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
