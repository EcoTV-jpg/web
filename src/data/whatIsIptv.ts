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

export interface IptvCoreType {
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
}

export interface WhatIsIptvFaq {
  question: string;
  answer: string;
}

export const iptvCoreTypes: IptvCoreType[] = [
  {
    title: "Live Television (Linear IPTV)",
    subtitle: "Real-time broadcast networks",
    description:
      "Direct streaming of scheduled television programming over IP broadband networks. Similar to legacy cable or satellite broadcasting, channels stream continuously in real time with synchronized audio and video.",
    examples: [
      "Live domestic and international sports",
      "24/7 breaking news channels",
      "Live network entertainment broadcasts",
    ],
  },
  {
    title: "Time-Shifted Media (Catch-Up TV)",
    subtitle: "Replaying previously aired shows",
    description:
      "Allows subscribers to watch television programs hours or days after their original broadcast. Includes start-over TV (replaying an in-progress show from the beginning) and network PVR cloud recording.",
    examples: [
      "7-day XMLTV catch-up schedules",
      "Start-over live show playback",
      "Cloud recording without local DVR drives",
    ],
  },
  {
    title: "Video on Demand (VOD)",
    subtitle: "On-demand movie and series libraries",
    description:
      "A comprehensive digital catalog of pre-recorded feature films, documentaries, and full television seasons that subscribers can browse, start, pause, rewind, and resume at any time.",
    examples: [
      "Cinema releases in HD and 4K",
      "Full episodic television box sets",
      "Multi-language audio and subtitle tracks",
    ],
  },
];

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
      "For standard definition (SD) streams, 8 Mbps is sufficient. For 1080p High Definition (HD) channels, a minimum stable connection of 15 Mbps is recommended. For 4K Ultra HD and 60 FPS live sports feeds, 30+ Mbps of dedicated broadband bandwidth ensures stable, uninterrupted playback.",
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
  {
    question: "Why does my IPTV buffer if my internet speed test shows 100 Mbps?",
    answer:
      "Speed tests measure multi-threaded bandwidth to a nearby regional server, whereas IPTV streams depend on continuous single-threaded TCP throughput to a specific streaming CDN edge server. If an intermediate transit hop experiences packet loss, or Wi-Fi radio interference causes packet jitter, the player's RAM ring buffer drains faster than packets arrive, triggering buffering despite high nominal speed test results. Connecting via Ethernet or 5 GHz Wi-Fi stabilizes packet arrival intervals.",
  },
  {
    question: "Does IPTV consume internet bandwidth when my television is powered off?",
    answer:
      "No. Unlike legacy cable where all channels broadcast continuously over coaxial cables, public-internet IPTV operates via unicast connections. When you exit your IPTV player application or put your streaming device into standby mode, the HTTP socket connection terminates and video chunks stop downloading immediately, consuming zero background bandwidth.",
  },
  {
    question: "What is the technical difference between an M3U playlist and the actual video stream?",
    answer:
      "An M3U or M3U8 file is simply a plain-text index containing channel names, category tags, EPG IDs, and stream URLs; it contains zero media data. When an IPTV player loads the playlist, it parses the URLs; when you select a channel, the player issues an HTTP GET request to the specific stream URL referenced in that text file.",
  },
  {
    question: "Why do some IPTV channels tune in 1 second while others take 3 to 4 seconds to load?",
    answer:
      "Channel tuning speed depends on the encoder's Intra-coded keyframe (I-frame) interval and segment duration. A player cannot render video from intermediate predictive frames; it must wait for a complete I-frame. Encoders configured with short 1-to-2 second GOP intervals tune almost instantly, whereas channels configured with longer 4-to-6 second chunk windows require the player to wait longer before video decoding can commence.",
  },
  {
    question: "What is the difference between hardware decoding and software decoding in IPTV apps?",
    answer:
      "Hardware decoding offloads compressed video bitstreams directly to a dedicated silicon block (the Video Processing Unit or VPU) within your streaming device's System-on-Chip, rendering fluid 60 FPS video with less than 5% CPU utilization. Software decoding forces general CPU cores to compute pixel transforms, causing overheating, frame drops, and audio desync on budget streaming sticks.",
  },
  {
    question: "Why does live sports IPTV lag behind cable or antenna broadcast by 15–30 seconds?",
    answer:
      "The 15–30 second broadcast delay is an engineered byproduct of digital streaming pipeline mechanics: encoder Group of Pictures (GOP) calculation (1–2.5s), media chunk packaging into 2–6 second segments, CDN edge propagation (0.5–1.5s), and client-side RAM ring buffering (3–5s) to guarantee stutter-free playback across public internet routes.",
  },
];

/* ------------------------------------------------------------------
   Engineering Architecture & Mechanics (Migrated from /how-does-iptv-work)
------------------------------------------------------------------- */

export interface SignalFlowStage {
  stageNumber: number;
  title: string;
  subheading: string;
  technicalDetails: string;
  keyMetric: string;
}

export const iptvSignalFlowStages: SignalFlowStage[] = [
  {
    stageNumber: 1,
    title: "Source Signal Ingestion & Capture",
    subheading: "Satellite Downlinks & Direct Studio Feeds",
    technicalDetails:
      "Live television master feeds are ingested from commercial headends: high-gain satellite downlinks (C-band and Ku-band DVB-S2 transponders), terrestrial broadcast towers (ATSC 3.0 / DVB-T2), or uncompressed studio fiber links (SMPTE ST 2110 / SDI). Master studio feeds arrive uncompressed at massive data rates exceeding 1.5 Gbps to 3.0 Gbps per channel.",
    keyMetric: "Raw Bitrate: 1.5–3.0 Gbps per master channel",
  },
  {
    stageNumber: 2,
    title: "Real-Time Transcoding & Codec Compression",
    subheading: "Hardware ASIC/GPU Compression & GOP Structure",
    technicalDetails:
      "Ingestion headends route raw feeds into hardware-accelerated encoder clusters (utilizing dedicated ASICs, Nvidia NVENC, or Intel Quick Sync). Encoders compress video into modern digital distribution codecs: AVC/H.264 for legacy compatibility, or HEVC/H.265 and AV1 for 1080p 60 FPS sports and 4K Ultra HD. Video is structured into Groups of Pictures (GOP) comprising Intra-coded keyframes (I-frames) followed by forward-predictive (P-frames) and bi-directional (B-frames) motion vectors.",
    keyMetric: "Compression: 1.5 Gbps compressed down to 6–18 Mbps",
  },
  {
    stageNumber: 3,
    title: "Packetization & Media Container Segmentation",
    subheading: "HLS / MPEG-TS Packaging & Playlist Manifests",
    technicalDetails:
      "Compressed elementary streams are multiplexed into streaming containers. In chunk-based HTTP protocols (HLS or MPEG-DASH), the packager slices continuous video into discrete 2-to-6 second media segments (.ts or fragmented MP4 .m4s chunks) and updates an index playlist manifest (.m3u8 or .mpd). In continuous socket streaming, packets are wrapped into standardized 188-byte MPEG-TS packets and transmitted over persistent TCP connections.",
    keyMetric: "Chunk Windows: 2–6 second segments (.ts / .m4s)",
  },
  {
    stageNumber: 4,
    title: "Origin Headends & Edge Reverse-Proxy Caching",
    subheading: "Multi-CDN Distribution & ISP Peering Hubs",
    technicalDetails:
      "Origin packagers distribute chunk segments to reverse-proxy Content Delivery Networks (CDNs). Edge server clusters located close to regional Internet Exchange Points (IXPs) and ISP peering gateways cache incoming segments in high-speed RAM and NVMe storage. When thousands of subscribers watch the same live broadcast, edge nodes serve segments directly from local cache, protecting origin servers from spikes and minimizing transit latency.",
    keyMetric: "Cache Hit Ratio: 98%+ on high-concurrency live sports",
  },
  {
    stageNumber: 5,
    title: "Last-Mile Broadband Transport",
    subheading: "Public Internet Delivery Over Fiber, DOCSIS & 5G",
    technicalDetails:
      "The subscriber's media player requests successive video segments across public broadband infrastructure (fiber-to-the-home, cable DOCSIS 3.1, fixed wireless, or 5G). Data packets traverse Tier-1 transit backbones and residential ISP gateways via standard TCP/IP or UDP transport stacks.",
    keyMetric: "Transit Latency: 10–50ms over domestic fiber backbones",
  },
  {
    stageNumber: 6,
    title: "Client RAM Ring Buffer & Hardware GPU Decoding",
    subheading: "Jitter Absorption & VPU Silicon Playback",
    technicalDetails:
      "The client application receives incoming packets, verifies checksum integrity, and populates a circular RAM ring buffer (typically 1,000ms to 5,000ms). Once the pre-buffer threshold is satisfied, the device's dedicated Video Processing Unit (VPU) decompresses the bitstream directly to raw RGB/YUV pixels, outputting fluid 50/60 FPS video over HDMI to the display.",
    keyMetric: "Player RAM Buffer: 1,000–5,000ms circular queue",
  },
];

export interface NetworkTopologyRow {
  architecture: string;
  transportProtocol: string;
  routingModel: string;
  networkBoundary: string;
  publicInternetSupport: string;
  interactivity: string;
  zappingLatency: string;
}

export const networkTopologiesComparison: NetworkTopologyRow[] = [
  {
    architecture: "Public Internet IPTV (Unicast)",
    transportProtocol: "HTTP/TCP (HLS, MPEG-TS)",
    routingModel: "Unicast (1:1 Client-Server)",
    networkBoundary: "Open Public Broadband",
    publicInternetSupport: "Full Native Support (Any ISP)",
    interactivity: "Complete (VOD, Catch-Up, Cloud DVR, Pause)",
    zappingLatency: "1.0 – 2.5 seconds",
  },
  {
    architecture: "Telco Managed IPTV (Multicast)",
    transportProtocol: "RTP/UDP via IGMP",
    routingModel: "Multicast (1:Many Node)",
    networkBoundary: "Private Operator Intranet",
    publicInternetSupport: "Blocked by Public Internet Routers",
    interactivity: "Limited to proprietary operator servers",
    zappingLatency: "0.8 – 1.5 seconds",
  },
  {
    architecture: "Digital Cable TV (QAM)",
    transportProtocol: "MPEG-2 Transport Stream",
    routingModel: "Broadcast (1:All Simultaneous)",
    networkBoundary: "Coaxial / HFC Physical Cable",
    publicInternetSupport: "No (Requires separate cable modem)",
    interactivity: "Requires separate IP return path",
    zappingLatency: "1.0 – 2.0 seconds",
  },
  {
    architecture: "Satellite TV (DVB-S2)",
    transportProtocol: "DVB-S2 Satellite Downlink",
    routingModel: "Broadcast (1:All Footprint)",
    networkBoundary: "Geostationary Direct-to-Home RF",
    publicInternetSupport: "No (One-way RF downlink)",
    interactivity: "Requires separate broadband link",
    zappingLatency: "1.5 – 3.0 seconds",
  },
  {
    architecture: "Commercial OTT Apps (YouTube TV)",
    transportProtocol: "HLS / DASH with DRM (Widevine/FairPlay)",
    routingModel: "Unicast (1:1 Client-Server)",
    networkBoundary: "Open Public Broadband",
    publicInternetSupport: "Full Native Support",
    interactivity: "Complete (Cloud DVR, Profiles, VOD)",
    zappingLatency: "2.5 – 5.0 seconds",
  },
];

export interface LatencyBreakdownStage {
  stage: string;
  delayRange: string;
  engineeringExplanation: string;
}

export const broadcastLatencyStages: LatencyBreakdownStage[] = [
  {
    stage: "1. Ingestion & Transcoder GOP Window",
    delayRange: "1.0 – 2.5 seconds",
    engineeringExplanation:
      "Hardware transcoders must buffer several video frames in memory to calculate motion vectors across forward-predictive (P-frames) and bi-directional (B-frames) before outputting the compressed stream.",
  },
  {
    stage: "2. Segment Packaging & Manifest Indexing",
    delayRange: "2.0 – 6.0 seconds",
    engineeringExplanation:
      "In chunk-based protocols (HLS/DASH), an entire 2-to-6 second video chunk must finish encoding before the packager can write the file and update the playlist manifest.",
  },
  {
    stage: "3. Origin-to-Edge CDN Cache Propagation",
    delayRange: "0.5 – 1.5 seconds",
    engineeringExplanation:
      "New media segments propagate across tiered caching layers from origin servers out to regional edge reverse-proxy nodes near user ISPs.",
  },
  {
    stage: "4. Public Internet Backbone Transit",
    delayRange: "0.05 – 0.2 seconds",
    engineeringExplanation:
      "Fiber-optic packet transit across Tier-1 internet backbones, routing gateways, and local residential ISP connections.",
  },
  {
    stage: "5. Client RAM Ring Buffer Allocation",
    delayRange: "3.0 – 8.0 seconds",
    engineeringExplanation:
      "The player app downloads and retains several seconds of video in local RAM memory to absorb network packet jitter without video freezing.",
  },
  {
    stage: "6. Hardware Decoding & HDMI Synchronization",
    delayRange: "0.05 – 0.1 seconds",
    engineeringExplanation:
      "VPU hardware dequantization, de-interlacing (for 1080i feeds), and display clock synchronization over HDMI.",
  },
];

export interface GlassToGlassLatencyRow {
  broadcastTechnology: string;
  transmissionMedium: string;
  typicalLatency: string;
  primarySourceOfDelay: string;
}

export const glassToGlassLatencyComparison: GlassToGlassLatencyRow[] = [
  {
    broadcastTechnology: "Over-The-Air (OTA) Antenna",
    transmissionMedium: "Terrestrial RF (ATSC / DVB-T)",
    typicalLatency: "3 – 5 seconds",
    primarySourceOfDelay: "Direct speed-of-light radio waves with immediate hardware demodulation",
  },
  {
    broadcastTechnology: "Digital Cable TV (QAM)",
    transmissionMedium: "Hybrid Fiber-Coaxial (HFC)",
    typicalLatency: "5 – 8 seconds",
    primarySourceOfDelay: "Set-top box hardware QAM demodulation and MPEG-2 decoding",
  },
  {
    broadcastTechnology: "Satellite TV (DVB-S2)",
    transmissionMedium: "Geostationary Satellite Link",
    typicalLatency: "5 – 7 seconds",
    primarySourceOfDelay: "~70,000 km orbital round-trip speed-of-light propagation delay",
  },
  {
    broadcastTechnology: "Low-Latency IPTV (CMAF / LL-HLS)",
    transmissionMedium: "Public Internet Edge CDN",
    typicalLatency: "5 – 12 seconds",
    primarySourceOfDelay: "Sub-segment chunked transfer encoding and 1-second player buffer",
  },
  {
    broadcastTechnology: "Standard IPTV (MPEG-TS / HLS)",
    transmissionMedium: "Public Internet Edge CDN",
    typicalLatency: "15 – 25 seconds",
    primarySourceOfDelay: "Multi-second chunk packaging and 3s–5s player RAM ring buffer",
  },
  {
    broadcastTechnology: "Commercial OTT Apps (YouTube TV, Hulu)",
    transmissionMedium: "Multi-Bitrate HLS / DASH",
    typicalLatency: "30 – 60+ seconds",
    primarySourceOfDelay: "Large 6s chunk segments, multi-CDN rebuffering, and DRM license handshakes",
  },
];

export interface HardwareDecodingProfile {
  codec: string;
  efficiency: string;
  hardwareRequirement: string;
  bandwidthRequirement: string;
  typicalUse: string;
}

export const hardwareDecodingProfiles: HardwareDecodingProfile[] = [
  {
    codec: "AVC / H.264",
    efficiency: "Baseline compression standard",
    hardwareRequirement: "Universal support across virtually 100% of devices since 2012",
    bandwidthRequirement: "8 – 12 Mbps for 1080p HD",
    typicalUse: "Legacy compatibility, 720p/1080p 30 FPS channels, desktop web players",
  },
  {
    codec: "HEVC / H.265",
    efficiency: "~50% higher compression efficiency than H.264",
    hardwareRequirement: "Firestick 4K/Max, Apple TV 4K, modern Smart TVs (2018+), Nvidia Shield",
    bandwidthRequirement: "12 – 16 Mbps for 1080p 60 FPS sports; 20–25 Mbps for 4K",
    typicalUse: "High-framerate live sports (50/60 FPS), 4K Ultra HD broadcasts, premium VOD",
  },
  {
    codec: "AV1 (AOMedia Video 1)",
    efficiency: "~20–30% higher compression than HEVC; open and royalty-free",
    hardwareRequirement: "Fire TV Stick 4K Max (2nd Gen), Apple TV 4K (3rd Gen), Google TV Streamer, recent flagship Smart TVs",
    bandwidthRequirement: "10 – 14 Mbps for 1080p 60 FPS sports; 16–22 Mbps for 4K",
    typicalUse: "Next-generation 4K HDR live sports and high-efficiency CDN streaming",
  },
];

export interface BandwidthRequirementTier {
  resolutionProfile: string;
  frameRate: string;
  recommendedCodec: string;
  streamBitrate: string;
  minimumDedicatedBroadband: string;
  hourlyDataUsage: string;
}

export const bandwidthConsumptionMatrix: BandwidthRequirementTier[] = [
  {
    resolutionProfile: "Standard Definition (SD 480p)",
    frameRate: "30 FPS",
    recommendedCodec: "H.264 / AVC",
    streamBitrate: "1.5 – 3.0 Mbps",
    minimumDedicatedBroadband: "8+ Mbps",
    hourlyDataUsage: "~0.7 – 1.4 GB/hr",
  },
  {
    resolutionProfile: "High Definition (HD 720p)",
    frameRate: "50 / 60 FPS",
    recommendedCodec: "H.264 / AVC",
    streamBitrate: "4.0 – 7.0 Mbps",
    minimumDedicatedBroadband: "15+ Mbps",
    hourlyDataUsage: "~1.8 – 3.2 GB/hr",
  },
  {
    resolutionProfile: "Full HD Standard (1080p)",
    frameRate: "30 FPS",
    recommendedCodec: "H.264 / HEVC",
    streamBitrate: "6.0 – 10.0 Mbps",
    minimumDedicatedBroadband: "18+ Mbps",
    hourlyDataUsage: "~2.7 – 4.5 GB/hr",
  },
  {
    resolutionProfile: "Full HD Sports (1080p 60 FPS)",
    frameRate: "50 / 60 FPS",
    recommendedCodec: "HEVC / H.265",
    streamBitrate: "12.0 – 16.0 Mbps",
    minimumDedicatedBroadband: "25+ Mbps",
    hourlyDataUsage: "~5.4 – 7.2 GB/hr",
  },
  {
    resolutionProfile: "4K Ultra HD (2160p)",
    frameRate: "50 / 60 FPS",
    recommendedCodec: "HEVC / AV1",
    streamBitrate: "20.0 – 30.0 Mbps",
    minimumDedicatedBroadband: "40+ Mbps",
    hourlyDataUsage: "~9.0 – 13.5 GB/hr",
  },
];

