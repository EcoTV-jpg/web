export interface FreeTrialStep {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

export interface FreeTrialFaq {
  question: string;
  answer: string;
}

export interface TestingChecklistItem {
  category: string;
  title: string;
  desc: string;
  guidance: string;
  helpLink?: { text: string; href: string };
}

export const freeTrialData = {
  hero: {
    kicker: "Test Drive Before You Subscribe",
    title: "IPTV Free Trial",
    subtitle:
      "Experience Teleview streaming performance risk-free. Test live TV channels, on-demand movies, EPG accuracy, and device compatibility directly on your television or mobile screen.",
    primaryCtaText: "Start Your IPTV Free Trial",
    secondaryCtaText: "View Subscription Plans",
    durationBadge: "24-Hour Free Access",
  },

  testPoints: [
    {
      title: "Live Sports & Broadcast Quality",
      desc: "Test available live sports channels including football, basketball, and racing in HD and 4K where supported by your stream and device.",
      icon: "Tv",
    },
    {
      title: "Channel Zapping & Switching Speed",
      desc: "Measure connection response when switching between channels. Connection times can vary depending on your device, network, and stream source.",
      icon: "Zap",
    },
    {
      title: "Electronic Program Guide (EPG)",
      desc: "Verify that TV guide timelines, upcoming show schedules, and channel metadata populate smoothly in your IPTV player.",
      icon: "Calendar",
    },
    {
      title: "VOD Movies & Series Catalog",
      desc: "Browse and sample the on-demand library with multi-language audio tracks, crisp subtitles, and fast seeking.",
      icon: "Film",
    },
    {
      title: "Device & Hardware Compatibility",
      desc: "Confirm flawless playback on your Amazon Firestick, Smart TV, Android box, Apple TV, phone, or computer before paying.",
      icon: "Smartphone",
    },
    {
      title: "ISP & Network Stability",
      desc: "Test stream continuity during peak evening hours to ensure your Internet Service Provider does not throttle IPTV traffic.",
      icon: "Activity",
    },
  ],

  howItWorks: [
    {
      number: "01",
      title: "Request Your Free Trial Credentials",
      desc: "Connect with our 24/7 support team via WhatsApp to receive your complimentary 24-hour test line. No credit card required.",
      detail: "You receive your unique Xtream Codes API server URL, port, username, password, and complete M3U link.",
    },
    {
      number: "02",
      title: "Install Your Preferred IPTV Player",
      desc: "Download an IPTV application suited to your hardware: TiviMate for Android/Fire TV, IBO Player for Samsung/LG, or Smarters for Apple.",
      detail: "All industry-standard players are compatible. Check our setup guides for quick 5-minute configuration walkthroughs.",
    },
    {
      number: "03",
      title: "Input Credentials & Sync Catalog",
      desc: "Select Xtream Codes API inside your player, enter your server URL and login, then allow the channel guide and VOD catalog to synchronize.",
      detail: "Full channel lists and initial EPG data typically download within 30 to 60 seconds over broadband.",
    },
    {
      number: "04",
      title: "Evaluate Playback & Choose a Plan",
      desc: "Test channel stability across peak hours. When your trial concludes, upgrade smoothly to any 1, 3, 6, or 12-month subscription without reconfiguring.",
      detail: "Your account credentials remain identical upon activating a paid plan—zero reset or re-installation needed.",
    },
  ] as FreeTrialStep[],

  testingChecklist: [
    {
      category: "Live Television",
      title: "High-Bitrate 4K Sports Streaming",
      desc: "Tune into available live sports channels to evaluate playback smoothness across supported HD and 4K streams.",
      guidance: "If you experience minor stutter, switch buffer size to Large (2-3 seconds) in player settings.",
      helpLink: { text: "Fix Buffering Guide", href: "/help-center/buffering" },
    },
    {
      category: "Channel Switching",
      title: "Rapid Channel Surfing & Response",
      desc: "Test switching between 10-15 consecutive channels to measure server response times and decoder initialization.",
      guidance: "Xtream Codes API provides faster zapping response than large monolithic raw M3U files.",
      helpLink: { text: "Channels Loading Guide", href: "/help-center/channels-not-loading" },
    },
    {
      category: "Program Schedule",
      title: "EPG Timeline & Catch-Up Navigation",
      desc: "Confirm channel listings, program names, and time zones align accurately with your local broadcast schedule.",
      guidance: "Ensure your player timezone offset matches your local UTC offset if guide times are misaligned.",
      helpLink: { text: "Fix EPG Not Loading", href: "/help-center/epg-not-working" },
    },
    {
      category: "Network Verification",
      title: "Peak-Hour Bandwidth & ISP Routing",
      desc: "Stream between 8:00 PM and 10:00 PM when residential internet traffic peaks to verify anti-freeze performance.",
      guidance: "We recommend 15 Mbps for Full HD streams and 35+ Mbps for uninterrupted 4K Ultra HD viewing.",
      helpLink: { text: "Internet Speed Benchmarks", href: "/help-center/internet-speed" },
    },
    {
      category: "Error Resolution",
      title: "Connection Handshake & DNS Verification",
      desc: "Confirm your home router connects cleanly to our edge CDN nodes without requiring complex firewall adjustments.",
      guidance: "If your player reports a connection timeout, changing router DNS to Cloudflare (1.1.1.1) may help resolve DNS-related connection issues in some networks.",
      helpLink: { text: "Connection Problems Guide", href: "/help-center/connection-problems" },
    },
  ] as TestingChecklistItem[],

  faqs: [
    {
      question: "What is an IPTV free trial?",
      answer:
        "An IPTV free trial is a temporary test pass (typically 24 hours) providing full access to Teleview streaming servers. It enables you to evaluate live channel lineups, video streaming quality, EPG accuracy, and app compatibility on your home devices before purchasing a subscription.",
    },
    {
      question: "Do I need to enter credit card details for the IPTV trial?",
      answer:
        "No. Teleview IPTV free trials are 100% complimentary and require zero payment details or credit card authorization. Simply message our 24/7 support desk to receive test line credentials.",
    },
    {
      question: "How long does the free trial last?",
      answer:
        "Teleview provides a comprehensive 24-hour trial period from the moment your credentials are generated. This allows you sufficient time to test morning, afternoon, and peak evening streaming performance across sports and entertainment channels.",
    },
    {
      question: "Which devices can I use during my IPTV free trial?",
      answer:
        "You can test Teleview on any supported device, including Amazon Firestick, Samsung Smart TV (Tizen), LG Smart TV (webOS), Android TV boxes (Nvidia Shield, Mi Box), Apple TV 4K, iPhone, iPad, Google TV, Roku (via screen casting), and Windows/Mac computers.",
    },
    {
      question: "Which IPTV player app should I install for the trial?",
      answer:
        "For Android TV and Firestick, we recommend TiviMate or IPTV Smarters Pro. For Samsung and LG Smart TVs, IBO Player or SmartOne IPTV are native app store options. For Apple TV and iOS, IPTV Smarters Lite or GSE Smart IPTV perform excellently. On PC/Mac, VLC Media Player or Smarters Desktop work seamlessly.",
    },
    {
      question: "Can I test 4K sports and VOD on the free trial?",
      answer:
        "Yes. Teleview free trials allow you to test our channel catalog: live sports channels available in the trial, supported HD/4K streams where available, local and international television, and our on-demand movie and series catalog.",
    },
    {
      question: "What internet speed is required to stream the free trial smoothly?",
      answer:
        "We recommend a minimum stable download speed of 15 Mbps for Full HD 1080p channels, and 35+ Mbps for high-bitrate 4K Ultra HD sports broadcasts. A wired Ethernet connection or 5 GHz Wi-Fi band delivers optimal stream stability.",
    },
    {
      question: "What happens after my 24-hour trial period expires?",
      answer:
        "When your test period concludes, the trial line automatically turns off. There is no automatic renewal, recurring billing, or obligation. If satisfied with performance, select a 1, 3, 6, or 12-month plan on our Subscription page and our team will activate your line permanently.",
    },
  ] as FreeTrialFaq[],
};
