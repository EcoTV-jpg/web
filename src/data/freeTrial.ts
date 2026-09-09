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

export interface WhatToTestRow {
  aspect: string;
  whatToCheck: string;
  evaluationTip: string;
}

export interface TestingChecklistItem {
  category: string;
  title: string;
  desc: string;
  guidance: string;
  helpLink?: { text: string; href: string };
}

export interface FreeTrialLimitation {
  title: string;
  desc: string;
  tag: string;
}

export interface DeviceCompatibilityRow {
  device: string;
  recommendedApp: string;
  connectionMethod: string;
  setupTime: string;
  guideUrl: string;
}

export interface CredentialField {
  label: string;
  field: string;
  description: string;
  example: string;
}

export interface TestingScheduleStep {
  number: string;
  title: string;
  focus: string;
  instructions: string;
  checklist: string[];
}

export interface PreRequestCheckItem {
  title: string;
  desc: string;
}

export interface TroubleshootingQuickLink {
  issue: string;
  symptom: string;
  linkText: string;
  href: string;
}

export const freeTrialData = {
  hero: {
    kicker: "Risk-Free Service Evaluation",
    title: "IPTV Free Trial: Test Before You Subscribe",
    subtitle:
      "Test Teleview streaming performance on your own television, phone, or streaming stick before purchasing. Evaluate live sports, channel switching response, EPG accuracy, and on-demand movies with a 24-hour test pass.",
    primaryCtaText: "Start Your IPTV Free Trial",
    secondaryCtaText: "View Subscription Plans",
    durationBadge: "24-Hour Free Pass • No Credit Card Required",
  },

  trialAtAGlance: {
    duration: "24 hours from credential generation",
    paymentRequired: "Zero — no credit card, bank details, or payment info collected",
    autoRenewal: "None — trial line terminates automatically after 24 hours",
    activeStreams: "1 concurrent stream connection",
    credentialsDelivered: "Xtream Codes API (Server, Port, User, Pass) + M3U Playlist link (MAC portal on request)",
    deliveryMethod: "Direct WhatsApp support desk dispatch (typically 5–15 minutes)",
    compatibleHardware: "Firestick, Android TV, Google TV, Samsung Smart TV, LG Smart TV, Apple TV, PC/Mac, Formuler, Roku (via casting)",
    contentIncluded: "Live TV channels, available live sports feeds, on-demand movies & series, EPG guide",
  },

  preRequestChecklist: [
    {
      title: "Confirm Your Hardware",
      desc: "Decide which television, streaming stick, or mobile device you intend to use primarily after subscribing.",
    },
    {
      title: "Install a Player in Advance",
      desc: "Download a compatible IPTV player application (such as TiviMate, IPTV Smarters Pro, or IBO Player) on your device before requesting credentials.",
    },
    {
      title: "Check Your Internet Connection",
      desc: "A stable download speed of 15+ Mbps for HD and 35+ Mbps for 4K is recommended. Use 5 GHz Wi-Fi or wired Ethernet where available.",
    },
    {
      title: "Plan Your Testing Time",
      desc: "Request your trial during an evening or weekend when you have time to actively watch live channels and live sporting events.",
    },
  ] as PreRequestCheckItem[],

  whatToTestTable: [
    {
      aspect: "Live TV Channels",
      whatToCheck: "Channel loading response, stream stability, and audio/video synchronization across general broadcast channels.",
      evaluationTip: "Switch between standard definition and high-definition channels to evaluate playback continuity.",
    },
    {
      aspect: "Channel Switching",
      whatToCheck: "How quickly your player application tunes into new streams when zapping through channels.",
      evaluationTip: "Xtream Codes API generally provides faster channel switching than large raw M3U files.",
    },
    {
      aspect: "Live Sports",
      whatToCheck: "Stream stability during sustained live sports broadcasts with fast on-screen motion.",
      evaluationTip: "Test during an active live match when server load and ISP traffic are highest.",
    },
    {
      aspect: "Electronic Program Guide (EPG)",
      whatToCheck: "Whether channel timelines, show titles, and schedule descriptions populate accurately.",
      evaluationTip: "Verify your player's timezone offset matches your local time if guide hours are shifted.",
    },
    {
      aspect: "Video on Demand (VOD)",
      whatToCheck: "Movie and series playback, seeking forward/backward, and subtitle/audio track availability.",
      evaluationTip: "Ensure your player decoder supports the required audio codecs (such as AAC or AC3).",
    },
    {
      aspect: "4K / Ultra HD Feeds",
      whatToCheck: "Whether your display hardware, player app, and home broadband can smoothly decode 4K streams.",
      evaluationTip: "4K streams require higher bandwidth headroom and hardware HEVC decoding capability.",
    },
    {
      aspect: "Catch-Up TV",
      whatToCheck: "Archive playback availability on supported channels where past broadcasts are indexed.",
      evaluationTip: "Look for the clock or calendar icon next to eligible channels in your player guide.",
    },
    {
      aspect: "Network / Device Conditions",
      whatToCheck: "Compare performance between 5 GHz Wi-Fi and wired Ethernet to isolate any local network bottlenecks.",
      evaluationTip: "If Wi-Fi buffers occasionally, testing wired Ethernet or adjusting buffer size often stabilizes playback.",
    },
  ] as WhatToTestRow[],

  testingScheduleSteps: [
    {
      number: "01",
      title: "Initial Setup & Catalog Synchronization",
      focus: "Credential Handshake & Category Verification",
      instructions:
        "Input your Xtream Codes API credentials into your installed player app. Allow the full live TV channel directory, VOD library, and EPG guide to download.",
      checklist: [
        "Verify server URL, username, and password connect without authentication errors.",
        "Confirm all primary channel categories (Sports, Movies, News, Entertainment) load.",
        "Check that EPG timelines display program listings for current broadcasts.",
        "Add 5 to 10 essential channels to your favorites list for easy access.",
      ],
    },
    {
      number: "02",
      title: "Live TV Playback & Surfing Responsiveness",
      focus: "Channel Surfing & Stream Synchronization",
      instructions:
        "Spend time surfing through diverse channel bouquets to test server response times, audio sync, and display fluidity.",
      checklist: [
        "Zap through 10–15 consecutive channels to measure switching response.",
        "Check audio and video synchronization across international and regional feeds.",
        "Verify that streams hold steady without intermittent audio dropouts.",
        "Test both 720p/1080p channels and available 4K streams.",
      ],
    },
    {
      number: "03",
      title: "Peak-Hour Live Sports Stress Test",
      focus: "ISP Peering & Sustained Live Performance",
      instructions:
        "Stream a live sporting event during prime-time evening hours (8:00 PM to 11:00 PM) when residential internet usage peaks.",
      checklist: [
        "Observe whether playback remains stable throughout live match action.",
        "Test high-motion camera pans for smooth frame rendering.",
        "If you encounter occasional micro-buffering, increase buffer size to 2–3 seconds in your player settings.",
        "If your ISP throttles streaming traffic during major games, test with a VPN enabled.",
      ],
    },
    {
      number: "04",
      title: "On-Demand Movies & Series Exploration",
      focus: "VOD Seeking & Subtitle Alignment",
      instructions:
        "Sample titles from the on-demand library to test server seeking performance, audio formats, and subtitle support.",
      checklist: [
        "Play a movie or series episode and jump forward/backward by 5 minutes.",
        "Check available subtitle tracks and multi-language audio streams.",
        "Verify that resume playback works when returning to a previously watched title.",
        "Confirm video aspect ratios display correctly on your television.",
      ],
    },
    {
      number: "05",
      title: "EPG Schedule & Timezone Accuracy",
      focus: "Guide Synchronization & Catch-Up Features",
      instructions:
        "Examine the Electronic Program Guide to verify that upcoming program schedules align with your actual clock.",
      checklist: [
        "Compare EPG program start times with your current local time.",
        "If schedules appear shifted by 1 or 2 hours, adjust your player's EPG time offset.",
        "Test catch-up TV on supported channels to review broadcasts aired earlier in the day.",
        "Confirm guide refresh frequency is set to daily in player preferences.",
      ],
    },
    {
      number: "06",
      title: "Hardware Versatility & Subscription Decision",
      focus: "Secondary Screen Check & Transition",
      instructions:
        "Test your trial credentials on a secondary device (one active stream at a time) and decide which subscription tier fits your household.",
      checklist: [
        "Test playback on a mobile phone or secondary bedroom TV.",
        "Confirm your household's preferred channels and leagues stream reliably.",
        "Review standard subscription packages (1, 3, 6, or 12 months) based on your budget.",
        "Contact support to transition your trial line to a paid plan with zero reconfiguration.",
      ],
    },
  ] as TestingScheduleStep[],

  credentialFields: [
    {
      label: "Server URL",
      field: "http://line.teleview.me (or assigned host IP)",
      description:
        "The host server address entered into your IPTV player's Xtream Codes server portal field. This directs your player to our edge streaming CDN.",
      example: "http://tv.example.com:8080",
    },
    {
      label: "Port",
      field: "80 / 8080 / 2095",
      description:
        "The communication port specified alongside the server URL. Most modern players parse the port automatically if included in the server address.",
      example: "8080",
    },
    {
      label: "Username",
      field: "Unique 8-character string",
      description:
        "Your unique trial authentication username generated by our automated provisioning system upon your WhatsApp request.",
      example: "trial_849204",
    },
    {
      label: "Password",
      field: "Alphanumeric security token",
      description:
        "Your temporary access password. Valid for exactly 24 hours from line creation and deactivates automatically when expired.",
      example: "k8F3m9X2",
    },
    {
      label: "M3U Playlist URL",
      field: "Direct .m3u_plus download link",
      description:
        "Complete playlist link for applications (such as VLC, Kodi, or SS IPTV) that accept a raw URL instead of Xtream Codes API login.",
      example: "http://tv.example.com:8080/get.php?username=...&type=m3u_plus",
    },
    {
      label: "MAG / Stalker Portal",
      field: "Custom portal URL for MAC activation",
      description:
        "Dedicated Stalker portal address for Formuler MYTVOnline or MAG set-top boxes connecting via device MAC address.",
      example: "http://mag.teleview.me/c/",
    },
  ] as CredentialField[],

  howItWorksFiveSteps: [
    {
      number: "01",
      title: "Request Your Free Trial",
      desc: "Message our 24/7 support team on WhatsApp to request your complimentary 24-hour test pass. No credit card or payment details are collected.",
      detail: "Requests are processed by our support desk within 5 to 15 minutes during active support hours.",
    },
    {
      number: "02",
      title: "Receive Your Access Details",
      desc: "You will receive your unique Xtream Codes API server URL, port, username, password, and direct M3U playlist link directly in chat.",
      detail: "If you stream on a Formuler or MAG device, provide your MAC address for dedicated Stalker portal activation.",
    },
    {
      number: "03",
      title: "Add Service to a Compatible Player",
      desc: "Install a recommended player app suited to your hardware and enter your credentials. Remember: the IPTV service and IPTV player app are independent.",
      detail: "Teleview provides the streaming credentials; player apps like TiviMate or IBO Player are separate software applications.",
    },
    {
      number: "04",
      title: "Test the Service Systematically",
      desc: "Follow our testing checklist to evaluate channel switching, peak-hour sports stability, EPG accuracy, and VOD on your primary home devices.",
      detail: "Test during peak evening hours (8 PM – 11 PM) to evaluate real-world streaming performance under network load.",
    },
    {
      number: "05",
      title: "Decide Whether to Subscribe",
      desc: "When your 24 hours conclude, your test pass terminates automatically. If satisfied, choose a subscription tier and our team activates your line permanently.",
      detail: "Your account credentials remain identical upon subscribing—zero re-installation or playlist reconfiguration required.",
    },
  ] as FreeTrialStep[],

  m3uVsXtreamComparison: {
    xtreamCodes: {
      title: "Xtream Codes API (Recommended)",
      summary: "Connects via Server URL, Username, and Password.",
      pros: [
        "Loads channel categories separately without downloading a massive monolithic file.",
        "Enables faster channel switching and rapid catalog navigation.",
        "Downloads EPG guide data automatically through dedicated API endpoints.",
        "Organizes VOD movies and TV series into clean poster-view categories.",
      ],
      bestFor: "TiviMate, IPTV Smarters Pro, IBO Player, OTT Navigator, and SmartOne.",
    },
    m3uPlaylist: {
      title: "M3U Playlist URL",
      summary: "Connects via a single web URL containing complete playlist references.",
      pros: [
        "Universally supported by basic media players and older software.",
        "Can be downloaded as a text file and imported into offline software.",
        "Requires only pasting a single URL into player settings.",
      ],
      bestFor: "VLC Media Player, Kodi, GSE Smart IPTV, or players lacking Xtream API fields.",
    },
  },

  deviceCompatibilityRows: [
    {
      device: "Amazon Firestick (4K / Max / Lite)",
      recommendedApp: "TiviMate / IPTV Smarters Pro",
      connectionMethod: "Xtream Codes API",
      setupTime: "3 – 5 minutes",
      guideUrl: "/devices/firestick",
    },
    {
      device: "Samsung Smart TV (Tizen OS)",
      recommendedApp: "IBO Player / SmartOne IPTV",
      connectionMethod: "MAC Address / M3U Playlist",
      setupTime: "4 – 6 minutes",
      guideUrl: "/devices/samsung-smart-tv",
    },
    {
      device: "LG Smart TV (webOS)",
      recommendedApp: "IBO Player / SmartOne IPTV",
      connectionMethod: "MAC Address / M3U Playlist",
      setupTime: "4 – 6 minutes",
      guideUrl: "/devices/lg-smart-tv",
    },
    {
      device: "Android TV & Google TV Box",
      recommendedApp: "TiviMate / OTT Navigator",
      connectionMethod: "Xtream Codes API",
      setupTime: "3 – 5 minutes",
      guideUrl: "/devices/android-tv",
    },
    {
      device: "Apple TV 4K (tvOS)",
      recommendedApp: "IPTV Smarters Lite / GSE Smart",
      connectionMethod: "Xtream Codes API",
      setupTime: "3 – 5 minutes",
      guideUrl: "/devices/apple-tv",
    },
    {
      device: "Formuler Box (Z11 / Z10)",
      recommendedApp: "MYTVOnline 2 / 3",
      connectionMethod: "MAC / Stalker Portal or Xtream",
      setupTime: "2 – 4 minutes",
      guideUrl: "/devices/formuler",
    },
    {
      device: "Roku Device",
      recommendedApp: "Screen Mirroring / Web Video Caster",
      connectionMethod: "Casting from Phone or PC",
      setupTime: "5 – 8 minutes",
      guideUrl: "/devices/roku",
    },
    {
      device: "Windows PC & Mac Computer",
      recommendedApp: "VLC Media Player / Smarters Desktop",
      connectionMethod: "M3U Playlist / Xtream Codes",
      setupTime: "2 – 4 minutes",
      guideUrl: "/setup",
    },
  ] as DeviceCompatibilityRow[],

  troubleshootingLinks: [
    {
      issue: "Buffering or Freezing During Live TV",
      symptom: "Stream pauses, stutters, or loops during high-traffic sporting events.",
      linkText: "How to Stop IPTV Buffering Guide",
      href: "/help-center/buffering",
    },
    {
      issue: "Service Not Connecting or Handshake Error",
      symptom: "Player displays 'Server connection failed', 'Authorization failed', or timeout.",
      linkText: "IPTV Not Working Troubleshooting",
      href: "/help-center/not-working",
    },
    {
      issue: "EPG TV Guide Not Loading or Time Shifted",
      symptom: "Channel listings show 'No Information' or program schedule is off by hours.",
      linkText: "Fix IPTV EPG Issues Guide",
      href: "/help-center/epg-not-working",
    },
    {
      issue: "Channels Missing or Not Loading",
      symptom: "Specific channel groups fail to populate or display black screen.",
      linkText: "Channels Not Loading Fixes",
      href: "/help-center/channels-not-loading",
    },
    {
      issue: "Connection Problems & HTTP Error Codes",
      symptom: "Error 401 Unauthorized, Error 403 Forbidden, or DNS lookup failure.",
      linkText: "Connection Problems & Errors Explained",
      href: "/help-center/connection-problems",
    },
    {
      issue: "Internet Speed & Bandwidth Requirements",
      symptom: "Determining whether your local connection speed meets HD and 4K thresholds.",
      linkText: "Internet Speed for IPTV Requirements",
      href: "/help-center/internet-speed",
    },
  ] as TroubleshootingQuickLink[],

  limitations: [
    {
      title: "Single Concurrent Connection",
      desc: "Each 24-hour test pass includes 1 active stream connection. You may configure credentials across multiple devices, but only one screen can stream simultaneously.",
      tag: "1 Connection",
    },
    {
      title: "One Test Pass Per Household",
      desc: "To preserve edge server bandwidth and protect streaming quality for active subscribers, complimentary trials are limited to one test line per user or household.",
      tag: "Fair Use Policy",
    },
    {
      title: "Third-Party Player Independence",
      desc: "Teleview provides your streaming credentials (Xtream Codes API and M3U). Independent application licenses (such as TiviMate Premium or IBO Player activations) are separate from Teleview service.",
      tag: "App Licenses",
    },
    {
      title: "Zero Automatic Billing",
      desc: "Your test line automatically terminates after 24 hours. There are no recurring charges, no stored payment data, and no automatic rollover into a paid plan.",
      tag: "Expires in 24h",
    },
    {
      title: "Live Event Bandwidth Fair-Use",
      desc: "During select global live sporting finals and pay-per-view events, trial requests may be temporarily queued to guarantee prioritized bandwidth for active paying subscribers.",
      tag: "Live Event Policy",
    },
  ] as FreeTrialLimitation[],

  faqs: [
    {
      question: "What is an IPTV free trial?",
      answer:
        "An IPTV free trial is a temporary test pass (typically 24 hours) providing access to live television channels, sports broadcasts, on-demand movies, and EPG data. It allows you to test streaming stability, channel switching response, and device compatibility on your home internet connection before choosing a paid subscription.",
    },
    {
      question: "How long does the Teleview IPTV trial last?",
      answer:
        "The trial provides 24 consecutive hours of streaming access from the moment your credentials are generated by our support team. This gives you ample opportunity to evaluate morning, daytime, and peak evening live streaming.",
    },
    {
      question: "Do I need a credit card to request the trial?",
      answer:
        "No. Teleview IPTV free trials are 100% complimentary and require zero payment details, credit card numbers, or automated billing authorizations. Simply message our WhatsApp support desk to receive test credentials.",
    },
    {
      question: "How do I receive the trial credentials?",
      answer:
        "Trial credentials are dispatched directly through WhatsApp by our 24/7 support team. You will receive your Xtream Codes API server URL, port, username, password, and M3U playlist link within 5 to 15 minutes during active support hours.",
    },
    {
      question: "Can I use Xtream Codes API for the trial?",
      answer:
        "Yes. We recommend Xtream Codes API for most modern IPTV players (such as TiviMate, IPTV Smarters Pro, and IBO Player). It allows you to log in easily with your server URL, username, and password rather than entering a long playlist address.",
    },
    {
      question: "Can I use an M3U playlist URL?",
      answer:
        "Yes. Teleview provides a complete M3U Plus playlist URL with every trial. This is ideal if you use VLC Media Player, Kodi, or an older player application that accepts playlist URLs rather than API logins.",
    },
    {
      question: "Can I test the IPTV trial on an Amazon Firestick?",
      answer:
        "Yes. Amazon Firestick is one of the most popular devices for IPTV streaming. We recommend installing TiviMate or IPTV Smarters Pro on your Firestick and logging in using the Xtream Codes credentials provided.",
    },
    {
      question: "Can I test the trial on a Samsung or LG Smart TV?",
      answer:
        "Yes. On Samsung Smart TVs (Tizen OS) and LG Smart TVs (webOS), you can install native player apps such as IBO Player or SmartOne IPTV directly from the television app store and activate your trial using the app MAC address or M3U playlist.",
    },
    {
      question: "Can I test live sports during the free trial?",
      answer:
        "Yes. The free trial includes access to live sports channels in standard definition, HD, and supported 4K feeds. We recommend testing during live matches to evaluate stream stability during peak broadcast moments.",
    },
    {
      question: "Can I test on-demand movies and series (VOD)?",
      answer:
        "Yes. The trial includes access to our on-demand movie and series catalog. You can test video playback, forward and rewind seeking, and available subtitle tracks directly in your player.",
    },
    {
      question: "What should I test during my 24-hour trial?",
      answer:
        "We recommend testing six core areas: 1) Channel loading and switching response; 2) Live sports stream stability during peak evening hours (8 PM – 11 PM); 3) EPG schedule accuracy; 4) VOD playback and subtitle sync; 5) Performance across your primary and secondary devices; 6) Wi-Fi versus wired Ethernet stability.",
    },
    {
      question: "Can I use a VPN during my IPTV free trial?",
      answer:
        "Yes. Teleview trial connections are compatible with reputable VPN services. If your internet service provider restricts or throttles video streaming traffic during peak sporting events, enabling a VPN can help maintain steady playback.",
    },
    {
      question: "How many devices can stream simultaneously during the trial?",
      answer:
        "Each complimentary trial includes 1 active stream connection. You can enter your credentials on multiple household devices (such as a living room TV and a smartphone), but only one device can stream at any given time. Multi-connection options are available on paid subscription plans.",
    },
    {
      question: "What happens when my 24-hour trial expires?",
      answer:
        "When your 24 hours conclude, the trial line deactivates automatically. There is no automatic charge, no recurring subscription, and no cancellation procedure required. If satisfied, you can choose a 1, 3, 6, or 12-month paid plan on our Subscription page.",
    },
    {
      question: "Do my customized channel favorites carry over if I subscribe?",
      answer:
        "Yes. If you choose to upgrade to a paid subscription, our team activates your existing line permanently. Your username, password, custom favorite channel groups, and player settings remain completely intact.",
    },
  ] as FreeTrialFaq[],
};
