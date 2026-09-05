/* ------------------------------------------------------------------
   Verified Technical Specifications: What Is IPTV Guide (2026)
   Covers IPTV protocol architecture, network delivery, comparison with
   cable/satellite/OTT, formats, hardware specs, and legal landscape.
------------------------------------------------------------------- */

export interface IptvComparisonRow {
  aspect: string;
  iptv: string;
  traditionalCable: string;
  satelliteTv: string;
  ottStreaming: string;
}

export interface IptvProtocol {
  name: string;
  fullName: string;
  type: "Live Streaming" | "Playlist / Index" | "Authentication" | "Program Guide";
  description: string;
  standardUse: string;
}

export interface WhatIsIptvFaq {
  question: string;
  answer: string;
}

export const iptvArchitectureLayers = [
  {
    step: 1,
    title: "Broadcast Ingestion & Encoders",
    description:
      "Live television feeds from satellite, terrestrial, and fiber origins are captured by commercial ingest receivers and encoded in real-time into compressed digital video streams using modern codecs such as H.264 (AVC) and H.265 (HEVC).",
  },
  {
    step: 2,
    title: "Segment Packaging & Middleware",
    description:
      "Encoders output continuous video chunks packaged into transport formats like MPEG-TS or HLS (HTTP Live Streaming). Middleware software indexes channel streams, manages subscriber access rights, and compiles metadata (channel logos, category IDs, stream URLs).",
  },
  {
    step: 3,
    title: "Global Content Delivery Network (CDN)",
    description:
      "To prevent stream freezing during high-concurrency sporting events, the packaged chunks are cached and distributed across edge server nodes geographically positioned near subscribers, drastically reducing round-trip latency.",
  },
  {
    step: 4,
    title: "Client-Side Media Player Rendering",
    description:
      "The subscriber's streaming device (Firestick, Smart TV, Android Box, Apple TV) connects to the server via Xtream Codes API or M3U playlist, buffers incoming packet chunks, and utilizes hardware decoders to render continuous 60 FPS video on screen.",
  },
];

export const iptvVsTraditionalComparison: IptvComparisonRow[] = [
  {
    aspect: "Delivery Mechanism",
    iptv: "Unicast IP packets via internet (TCP/UDP)",
    traditionalCable: "Dedicated coaxial / QAM RF cables",
    satelliteTv: "Direct-to-Home (DTH) Ku/Ka-band radio waves",
    ottStreaming: "Unicast public web video over HTTP/HTTPS",
  },
  {
    aspect: "Transmission Type",
    iptv: "Two-way interactive client-server request",
    traditionalCable: "One-way broadcast (all channels sent constantly)",
    satelliteTv: "One-way broadcast from geostationary orbit",
    ottStreaming: "On-demand client pull architecture",
  },
  {
    aspect: "Hardware Requirement",
    iptv: "Any streaming device (Fire TV, Android, Apple TV, PC)",
    traditionalCable: "Proprietary cable set-top box & physical cabling",
    satelliteTv: "External satellite dish dish, LNB & receiver box",
    ottStreaming: "Smart TV or mobile device app",
  },
  {
    aspect: "Content Diversity",
    iptv: "Global live channels + VOD movies & series in one app",
    traditionalCable: "Regional channel bundles with strict carrier limits",
    satelliteTv: "Regional channel transponders subject to line-of-sight",
    ottStreaming: "Standalone isolated catalogs per platform",
  },
  {
    aspect: "Weather Resilience",
    iptv: "Unaffected by rain/clouds (relies solely on internet speed)",
    traditionalCable: "High physical resilience unless lines are severed",
    satelliteTv: "Subject to 'rain fade' during heavy cloud cover",
    ottStreaming: "Unaffected by weather (relies on broadband)",
  },
  {
    aspect: "Cost & Flexibility",
    iptv: "Low-cost monthly/annual plans; no hardware rental fees",
    traditionalCable: "High monthly bills, equipment leases & annual contracts",
    satelliteTv: "High installation fees & multi-year lock-in contracts",
    ottStreaming: "Multiple individual subscriptions add up quickly",
  },
];

export const iptvProtocolsList: IptvProtocol[] = [
  {
    name: "HLS",
    fullName: "HTTP Live Streaming",
    type: "Live Streaming",
    description:
      "An adaptive bitrate protocol developed by Apple. Video is divided into short TS or MP4 chunks (2–6 seconds) described in an M3U8 manifest. The player dynamically switches resolutions based on current bandwidth.",
    standardUse: "Mobile devices, Apple TV, modern Smart TV web browsers, and CDN distribution.",
  },
  {
    name: "MPEG-TS",
    fullName: "MPEG Transport Stream",
    type: "Live Streaming",
    description:
      "A digital container format that encapsulates packetized elementary streams with error correction. Delivers lower latency than standard HLS for real-time sports broadcasting.",
    standardUse: "Dedicated television media players like TiviMate, Formuler MYTVOnline, and VLC.",
  },
  {
    name: "Xtream Codes API",
    fullName: "Xtream Codes REST Protocol",
    type: "Authentication",
    description:
      "A structured JSON-based client-server API that securely delivers channel categories, live streams, VOD libraries, and EPG schedules using a Server URL, Username, and Password.",
    standardUse: "The standard authentication method for TiviMate, IPTV Smarters Pro, and OTT Navigator.",
  },
  {
    name: "M3U / M3U8",
    fullName: "Moving Picture Experts Group Audio Layer 3 Uniform Resource Locator",
    type: "Playlist / Index",
    description:
      "A plain text playlist file that lists channel names, group titles, logo URLs, and direct media stream URLs line by line. Can be imported directly or hosted via remote web link.",
    standardUse: "Universal fallback playlist format supported by virtually every media player on earth.",
  },
  {
    name: "XMLTV",
    fullName: "XML TV Electronic Program Guide",
    type: "Program Guide",
    description:
      "An XML-based file format used to describe television schedules. Media players parse XMLTV data to show what program is currently airing, upcoming show times, episode descriptions, and cast info.",
    standardUse: "Electronic Program Guide (EPG) synchronization in advanced players.",
  },
];

export const whatIsIptvFaqs: WhatIsIptvFaq[] = [
  {
    question: "What does IPTV stand for?",
    answer:
      "IPTV stands for Internet Protocol Television. It refers to the delivery of television programming and video content using the Internet Protocol (IP) suite over a packet-switched network such as a broadband internet connection, rather than being delivered through traditional terrestrial, satellite signal, or cable television formats.",
  },
  {
    question: "How does IPTV differ from streaming services like Netflix or YouTube?",
    answer:
      "While both deliver video over the internet, traditional streaming services (OTT) focus predominantly on pre-recorded on-demand content hosted in static file repositories. IPTV is specifically engineered to deliver scheduled linear broadcast television (live sports, 24/7 news channels, scheduled series) alongside Video on Demand (VOD), complete with channel zapping, Electronic Program Guides (EPG), and live stream continuity.",
  },
  {
    question: "Is IPTV technology legal?",
    answer:
      "Yes, IPTV is an established, completely legal transmission technology standard used globally by telecommunications giants (such as AT&T U-verse, Verizon Fios, and British Telecom) as well as independent service operators. Legality depends entirely on whether the service provider possesses the appropriate transmission rights and distribution licenses for the specific content transmitted.",
  },
  {
    question: "What minimum internet download speed do I need for IPTV?",
    answer:
      "For standard definition (SD) streams, 8 Mbps is sufficient. For 1080p High Definition (HD) channels, a minimum stable connection of 15 Mbps is recommended. For 4K Ultra HD and 60 FPS live sports feeds, 30+ Mbps of dedicated broadband bandwidth ensures seamless playback without buffering.",
  },
  {
    question: "What is the difference between an IPTV provider and an IPTV player app?",
    answer:
      "An IPTV provider (like Teleview) supplies the actual video streams, cloud servers, channel lineups, and access credentials. An IPTV player (such as TiviMate, IPTV Smarters Pro, or IBO Player) is an application software interface that you install on your device to enter your provider credentials and watch the streams. A player app contains no video content on its own.",
  },
  {
    question: "Can I use an IPTV subscription while traveling or abroad?",
    answer:
      "Yes. Because IPTV operates over standard internet protocols, you can connect to your subscription from any location worldwide using a compatible mobile device, laptop, or portable streaming stick connected to Wi-Fi or mobile data.",
  },
];
