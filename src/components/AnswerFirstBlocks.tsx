import { HelpCircle, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";

interface DirectAnswer {
  question: string;
  answer: string;
  linkText: string;
  href: string;
}

const directAnswers: DirectAnswer[] = [
  {
    question: "What is Teleview?",
    answer: "Teleview is an IPTV subscription service providing access to live television channels and on-demand movies and series streamed over high-speed internet to supported devices.",
    linkText: "Explore Teleview plans",
    href: "/iptv-subscription",
  },
  {
    question: "What is IPTV?",
    answer: "IPTV (Internet Protocol Television) delivers television programming and video content over internet protocol networks rather than through traditional satellite, cable, or terrestrial antenna signals.",
    linkText: "Learn what is IPTV",
    href: "/what-is-iptv",
  },
  {
    question: "How does Teleview IPTV work?",
    answer: "Teleview delivers streaming playlists and EPG data through M3U URLs or Xtream Codes credentials, which you load into compatible IPTV player applications on your preferred streaming device.",
    linkText: "View setup instructions",
    href: "/setup",
  },
  {
    question: "How much does Teleview IPTV cost?",
    answer: "Teleview IPTV subscription plans start at $16.00 for 1 month, $39.00 for 3 months, $60.00 for 6 months, and $90.00 for a 12-month plan ($7.50/month effective rate).",
    linkText: "Compare subscription pricing",
    href: "/iptv-subscription",
  },
  {
    question: "What devices does Teleview support?",
    answer: "Teleview supports Amazon Firestick and Fire TV, Android TV boxes, Samsung and LG Smart TVs, Apple TV, iOS, Android mobile devices, Windows PC, and macOS computers.",
    linkText: "Check device compatibility",
    href: "/devices",
  },
  {
    question: "How many simultaneous connections are supported?",
    answer: "Teleview plans include 1 standard connection, with options to configure multi-screen streaming for up to 4 simultaneous connections during checkout.",
    linkText: "View multi-connection plans",
    href: "/iptv-subscription",
  },
  {
    question: "Does Teleview offer a free trial?",
    answer: "Yes. Teleview provides a 24-hour IPTV trial for prospective subscribers to test channel performance, VOD selection, and device compatibility before purchasing a paid plan.",
    linkText: "Request 24-hour trial",
    href: "/iptv-free-trial",
  },
  {
    question: "What refund policy does Teleview offer?",
    answer: "All paid Teleview subscriptions include a 14-day money-back guarantee if you experience technical issues that our support team cannot resolve.",
    linkText: "Read refund policy",
    href: "/refund-policy",
  },
  {
    question: "What internet speed is recommended for IPTV?",
    answer: "A minimum download speed of 15 Mbps is recommended for standard HD streams, and 25 to 30 Mbps or higher for FHD and 4K Ultra HD video playback without buffering.",
    linkText: "Review speed guide",
    href: "/help-center/internet-speed",
  },
  {
    question: "Is a VPN required to use Teleview?",
    answer: "A VPN is not required to stream with Teleview. However, subscribers may use a compatible VPN if their internet service provider throttles video streaming traffic during peak hours.",
    linkText: "Read troubleshooting guide",
    href: "/help-center/buffering",
  },
  {
    question: "What content categories are available on Teleview?",
    answer: "Teleview includes live sports, news, entertainment, documentary, kids, international programming across multiple languages, and a library of 120,000+ movies and series.",
    linkText: "Explore channel guide",
    href: "/what-is-iptv",
  },
];

export default function AnswerFirstBlocks() {
  return (
    <section id="quick-answers" className="section-y scroll-mt-16 bg-ash/20 border-y border-charcoal/40" aria-labelledby="quick-answers-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Quick Reference
          </p>
          <h2 id="quick-answers-heading" className="t-h2 mt-4 text-balance">
            Frequently Asked Questions &amp; <Accent>Direct Answers</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[660px] text-silver-mist leading-relaxed">
            Direct, factual answers to core questions about Teleview IPTV subscriptions, supported hardware, streaming speeds, and policies.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {directAnswers.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.03} className="h-full">
              <article className="card card-hover h-full p-6 flex flex-col border-charcoal bg-ash/40">
                <div className="flex items-center gap-2.5 text-phosphor-green mb-3">
                  <HelpCircle className="size-4 shrink-0" aria-hidden="true" />
                  <h3 className="text-sm sm:text-base font-bold text-snow leading-snug">
                    {item.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-silver-mist leading-relaxed flex-1">
                  {item.answer}
                </p>
                <div className="mt-4 pt-3 border-t border-charcoal/50">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-phosphor-green hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
