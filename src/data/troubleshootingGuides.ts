/* ------------------------------------------------------------------
   Verified Technical Specifications: Troubleshooting Guides (2026)
   Covers root causes, diagnostic workflows, step-by-step solutions,
   app adjustments, network tests, and FAQs for 6 Help Center guides.
------------------------------------------------------------------- */

export interface TroubleStep {
  step: number;
  title: string;
  action: string;
  technicalRationale: string;
}

export interface TroubleFaq {
  question: string;
  answer: string;
}

export interface TroubleshootingGuideDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  quickAnswer: string;
  primaryCauses: { title: string; explanation: string }[];
  diagnosticWorkflow: TroubleStep[];
  advancedFixes: { title: string; instruction: string }[];
  faqs: TroubleFaq[];
}

export const troubleshootingGuidesList: TroubleshootingGuideDetail[] = [
  {
    slug: "buffering",
    name: "How to Stop IPTV Buffering & Freezing",
    category: "Streaming Performance & Buffer Optimization",
    tagline: "Comprehensive diagnostic guide to eliminate buffering, stream loops, and freezing during live sports.",
    quickAnswer:
      "IPTV buffering occurs when the media player consumes video chunks faster than your local network or internet connection can download them. The most effective immediate solutions are: (1) switching your streaming device from 2.4 GHz to 5 GHz Wi-Fi or wired Ethernet, (2) enabling a high-speed VPN to circumvent ISP live sports bandwidth throttling, and (3) increasing the media player buffer cache from 'Small' to 'Normal/Large' (1.5 to 3 seconds).",
    primaryCauses: [
      {
        title: "ISP Bandwidth Throttling (Traffic Shaping)",
        explanation: "Many internet service providers actively detect high-bandwidth continuous video packet streams during major live sporting events (Champions League, Premier League, NFL, UFC) and artificially throttle download speeds to 2-4 Mbps.",
      },
      {
        title: "Local Wi-Fi Packet Loss & Jitter",
        explanation: "The 2.4 GHz wireless frequency band suffers severe interference from household appliances, walls, and neighbor networks, resulting in dropped packets and buffer depletion.",
      },
      {
        title: "Undersized Media Player Buffer Cache",
        explanation: "When a player's internal memory buffer is set to 'None' or 'Low', minor 200ms network fluctuations immediately cause the screen to freeze or loop.",
      },
      {
        title: "Hardware Thermal Throttling or Low RAM",
        explanation: "Compact streaming sticks plugged behind hot televisions can overheat and throttle CPU clock speeds, delaying video decoding pipelines.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Switch to 5 GHz Wi-Fi or Wired Ethernet",
        action: "Connect your streaming stick or TV box to the 5 GHz Wi-Fi SSID or use an Ethernet adapter cable.",
        technicalRationale: "5 GHz offers vastly higher throughput (up to 867+ Mbps) and dramatically lower channel contention than 2.4 GHz, preventing packet jitter.",
      },
      {
        step: 2,
        title: "Activate an Encrypted VPN",
        action: "Turn on a reputable VPN (such as ExpressVPN, NordVPN, or Surfshark) configured with WireGuard or OpenVPN UDP protocol.",
        technicalRationale: "A VPN encrypts all packet headers, preventing your ISP from identifying streaming traffic and stopping automated throttling filters.",
      },
      {
        step: 3,
        title: "Increase Media Player Buffer Size",
        action: "In TiviMate (Settings > Playback > Buffer size) or your player settings, increase buffer size from 'None' to 'Medium' or 'Large' (2–3 seconds).",
        technicalRationale: "A 2–3 second buffer cache absorbs momentary internet micro-drops without interrupting live playback.",
      },
      {
        step: 4,
        title: "Reboot Router and Clear Device Cache",
        action: "Unplug your home router and streaming box for 30 seconds, then clear your player app cache in device application settings.",
        technicalRationale: "Clears fragmented DNS tables, local memory leaks, and resets TCP connection pools.",
      },
    ],
    advancedFixes: [
      {
        title: "Switch Hardware Video Decoders",
        instruction: "In your player app settings, switch the video decoder engine between 'Hardware' and 'Software'. Hardware uses your device GPU; Software uses CPU cores.",
      },
      {
        title: "Change DNS to Public Resolvers",
        instruction: "Update your router or device DNS servers to Cloudflare (1.1.1.1, 1.0.0.1) or Google DNS (8.8.8.8, 8.8.4.4) to bypass slow ISP DNS resolvers.",
      },
    ],
    faqs: [
      {
        question: "Why does my IPTV only buffer during big live football games?",
        answer: "This is a classic signature of ISP traffic throttling. ISPs face immense bandwidth loads during marquee live broadcasts and actively target streaming protocols. Enabling a VPN resolves this instantly in over 90% of cases.",
      },
      {
        question: "Does increasing buffer size create a delay behind real-time?",
        answer: "Setting a 2-second buffer adds an imperceptible 2 seconds of latency compared to live broadcast, but completely eliminates stuttering and screen freezing.",
      },
    ],
  },
  {
    slug: "not-working",
    name: "IPTV Not Working? Master Diagnostic Checklist",
    category: "General Troubleshooting & Outage Resolution",
    tagline: "Step-by-step diagnostic checklist to identify and fix why your IPTV service is not streaming.",
    quickAnswer:
      "When IPTV suddenly stops working, the issue is almost always attributable to one of four factors: (1) an expired or typo-laden subscription credential, (2) ISP network or DNS filtering blocking the server domain, (3) temporary provider server load rebalancing, or (4) a corrupt local player app cache. Run through our 4-step diagnostic checklist to restore service in minutes.",
    primaryCauses: [
      {
        title: "Account Inactive, Expired, or Concurrency Limit Reached",
        explanation: "Your subscription period may have elapsed or someone in your household may be streaming on a secondary device beyond your plan's active line limit.",
      },
      {
        title: "ISP DNS Level Blocking",
        explanation: "Internet service providers frequently deploy DNS redirection filters that return NXDOMAIN or dummy IPs for streaming server addresses.",
      },
      {
        title: "Server URL Syntax Error",
        explanation: "Missing protocol prefixes ('http://'), incorrect port numbers, or trailing spaces in the Server URL, Username, or Password.",
      },
      {
        title: "Local Application State Corruption",
        explanation: "Accumulated corrupt stream fragments in the device cache preventing socket handshakes.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Verify Line Status & Active Connections",
        action: "Log in to Teleview My Account or contact support via WhatsApp with your order number to confirm your line is active and not locked by another session.",
        technicalRationale: "Providers enforce strict concurrency locks to protect subscriber server allocations.",
      },
      {
        step: 2,
        title: "Test Connection with Mobile Data / 5G Hotspot",
        action: "Disconnect your streaming device from home Wi-Fi and connect it to your smartphone's 4G/5G mobile hotspot.",
        technicalRationale: "If the stream plays immediately on mobile data, your home broadband ISP is blocking the server connection or throttling traffic.",
      },
      {
        step: 3,
        title: "Change Router DNS to 1.1.1.1 or 8.8.8.8",
        action: "In your router admin settings or streaming device network configuration, set primary DNS to 1.1.1.1 (Cloudflare) and secondary to 8.8.8.8 (Google).",
        technicalRationale: "Circumvents domestic ISP DNS interception filters instantly.",
      },
      {
        step: 4,
        title: "Re-Enter Xtream Codes API Credentials",
        action: "Delete the existing playlist profile and re-enter the Server URL, Username, and Password carefully without auto-correct or trailing spaces.",
        technicalRationale: "Ensures no hidden whitespace or capitalization errors break JSON authentication handshakes.",
      },
    ],
    advancedFixes: [
      {
        title: "Test Stream URL in VLC on PC",
        instruction: "Open VLC Media Player on a desktop computer, go to Media > Open Network Stream, paste your M3U link, and check Tools > Messages (Verbosity 2) to see exact server response codes.",
      },
    ],
    faqs: [
      {
        question: "What does 'HTTP Error 401 Unauthorized' mean in my IPTV player?",
        answer: "HTTP 401 indicates that your Username or Password was rejected by the server. Double check your credentials for capitalization errors or check if your subscription has expired.",
      },
      {
        question: "What does 'HTTP Error 403 Forbidden' mean?",
        answer: "HTTP 403 usually means your active line limit has been exceeded (e.g. streaming on two TVs simultaneously on a single-connection plan) or your ISP IP address is locked.",
      },
    ],
  },
  {
    slug: "epg-not-working",
    name: "How to Fix IPTV EPG (Electronic Program Guide) Not Loading",
    category: "Program Guide & XMLTV Sync",
    tagline: "Complete guide to resolving missing channel guides, 'No Information' errors, and incorrect program times.",
    quickAnswer:
      "When your Electronic Program Guide (EPG) displays 'No Information' or shows programs hours off schedule, the cause is typically an out-of-sync EPG URL cache, an incorrect device time zone offset, or insufficient storage space to download the multi-megabyte XMLTV program database. Forcing an EPG update and setting network-provided time resolves this immediately.",
    primaryCauses: [
      {
        title: "Stale or Fragmented EPG Cache",
        explanation: "Players store previous program schedules locally. If the file download was interrupted, the database remains locked in a corrupt state.",
      },
      {
        title: "Time Zone & UTC Offset Mismatch",
        explanation: "The television schedule is published in UTC/GMT. If your device clock or player time offset is misconfigured, show listings will appear several hours ahead or behind.",
      },
      {
        title: "Insufficient Storage Space on Streaming Stick",
        explanation: "A complete 25,000+ channel program guide requires 100MB+ of uncompressed database storage. Low storage causes download aborts.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Force Refresh EPG Data in Player Settings",
        action: "In TiviMate: Settings > EPG > EPG Sources > select source and click 'Update EPG'. In Smarters: click the Refresh icon on the home screen.",
        technicalRationale: "Flushes the local XMLTV cache and initiates a clean HTTP GET request for the latest 7-day schedule.",
      },
      {
        step: 2,
        title: "Correct Device Clock and Timezone",
        action: "Navigate to your device settings (Firestick, Android TV, Smart TV) > System > Date & Time, and ensure 'Automatic Network Time' is enabled with the correct local timezone.",
        technicalRationale: "Synchronizes the client rendering timestamp with the EPG broadcast schedule times.",
      },
      {
        step: 3,
        title: "Adjust EPG Time Offset (Hours)",
        action: "If program titles are consistently 1 or 2 hours off, go to player settings > EPG and set 'Time Shift' / 'EPG Offset' to +1 or -1 hour.",
        technicalRationale: "Compensates for Daylight Saving Time discrepancies or regional broadcast differences.",
      },
      {
        step: 4,
        title: "Assign EPG Source to Specific Channel Playlists",
        action: "In player settings, ensure your Teleview playlist is linked as the primary consumer for the assigned EPG source.",
        technicalRationale: "Prevents the player from attempting to match channels against empty secondary guide feeds.",
      },
    ],
    advancedFixes: [
      {
        title: "Clear EPG Data and Re-download",
        instruction: "In TiviMate: Settings > EPG > 'Clear EPG'. Wait 5 seconds, then select 'Update EPG'. This rebuilds the local SQLite database from scratch.",
      },
    ],
    faqs: [
      {
        question: "Why do some international channels have no EPG guide?",
        answer: "Certain local community or temporary event pop-up channels do not publish public XMLTV schedules. Teleview covers all major national, sports, news, and entertainment networks with full 7-day EPG data.",
      },
      {
        question: "How often does the Teleview EPG update?",
        answer: "Teleview server EPG schedules update continuously every 4 to 6 hours to incorporate last-minute broadcast programming adjustments.",
      },
    ],
  },
  {
    slug: "channels-not-loading",
    name: "How to Fix IPTV Channels & Playlists Not Loading",
    category: "Playlist Ingestion & Stream Resolution",
    tagline: "Solutions when channel categories spin indefinitely, playlists fail to download, or streams fail to open.",
    quickAnswer:
      "When channel categories will not load or fail with 'Check Playlist URL', it is usually due to importing an excessively large raw M3U playlist file rather than using the optimized Xtream Codes API protocol, or local router firewall packets dropping payload segments. Switching to Xtream Codes API login or disabling router security filters resolves this problem.",
    primaryCauses: [
      {
        title: "M3U File Size Exceeding Device Memory",
        explanation: "A massive playlist with 25,000+ channels and 100,000+ VOD titles can be 50MB+ in plain text, crashing the RAM on inexpensive streaming devices during download.",
      },
      {
        title: "Router 'Advanced Security' or Parental Filters",
        explanation: "Features like Comcast xFi Advanced Security, BT Web Protect, or Virgin Media Child Safe actively inspect and block IPTV stream ports.",
      },
      {
        title: "Codec Incompatibility in Player",
        explanation: "Certain live 4K streams use HEVC Main 10 profile which may fail to render if your player is set to an unsupported decoder engine.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Switch from M3U URL to Xtream Codes API",
        action: "Remove the M3U playlist link and add your connection using Xtream Codes API (Server URL, Username, Password).",
        technicalRationale: "Xtream API queries categories on-demand via paginated JSON calls, saving hundreds of megabytes of RAM compared to downloading entire M3U files.",
      },
      {
        step: 2,
        title: "Disable ISP Router Security Firewalls",
        action: "Log into your router management app (e.g. xFi, MyBT, Virgin Connect) and temporarily disable 'Protected Browsing' or 'Advanced Security'.",
        technicalRationale: "These ISP proprietary firewall filters flag large packet streams and drop incoming connection handshakes.",
      },
      {
        step: 3,
        title: "Toggle Video Decoder in Player Options",
        action: "Open player settings, locate Video Decoder, and switch from 'Hardware' to 'Software' or 'ExoPlayer' / 'VLC'.",
        technicalRationale: "Ensures streams encoded with specialized audio/video codecs decode properly on older chipsets.",
      },
      {
        step: 4,
        title: "Check for Server Maintenance or Maintenance Windows",
        action: "Visit Teleview status or contact WhatsApp support to verify server node availability.",
        technicalRationale: "Confirms whether scheduled cluster maintenance is underway on that specific edge node.",
      },
    ],
    advancedFixes: [
      {
        title: "Hide Unused Channel Categories",
        instruction: "In TiviMate or Smarters, go to Manage Groups and hide countries or sports categories you do not watch. This accelerates playlist loading by up to 80%.",
      },
    ],
    faqs: [
      {
        question: "Why does the playlist load on my phone but not on my TV?",
        answer: "Smartphones possess vastly more RAM (6GB-12GB) and faster processors than budget TV sticks (1GB-2GB). Using Xtream Codes API eliminates memory bottlenecks on TV hardware.",
      },
      {
        question: "Can I filter out international channels I don't speak?",
        answer: "Yes! In TiviMate, OTT Navigator, or Smarters, you can easily disable any country folder from appearing in your channel guide.",
      },
    ],
  },
  {
    slug: "connection-problems",
    name: "How to Fix IPTV Connection Errors & Server Timeouts",
    category: "Network Diagnostics & Protocol Handshakes",
    tagline: "Troubleshoot network timeouts, TLS certificate errors, socket disconnects, and router blocking.",
    quickAnswer:
      "IPTV connection errors (such as 'Cannot Connect to Server', 'Connection Timeout', or 'Network Error') typically indicate that your local router or ISP is dropping the TCP connection to the streaming server. Testing with a mobile hotspot, switching router DNS to 1.1.1.1, or connecting through a VPN resolves virtually all network timeout errors.",
    primaryCauses: [
      {
        title: "ISP Transport Layer Blocking",
        explanation: "Certain internet providers actively block standard IPTV streaming ports (such as 8080, 2095, 25461) to prevent high-bandwidth utilization.",
      },
      {
        title: "Corrupt Local Router NAT Table",
        explanation: "Routers that have run continuously for weeks develop stale NAT routing tables and ARP cache conflicts that reject persistent TCP sockets.",
      },
      {
        title: "TLS/SSL Handshake Failures",
        explanation: "Device clock discrepancies or outdated CA root certificates on older Android devices can prevent HTTPS socket handshakes.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Perform Full Network Power Cycle",
        action: "Power off your modem, router, and streaming device for 60 seconds, then power back on in sequence (modem first, router second, TV box third).",
        technicalRationale: "Flushes stale DHCP leases, clears congested NAT translation tables, and establishes fresh ISP gateway routing.",
      },
      {
        step: 2,
        title: "Test Connection with Alternative Network / Hotspot",
        action: "Enable mobile hotspot on your smartphone and connect your TV to it temporarily.",
        technicalRationale: "Instantly confirms whether the connection problem is isolated to your home broadband provider.",
      },
      {
        step: 3,
        title: "Enable VPN with WireGuard Protocol",
        action: "Connect your device to a VPN server located in your own country or an adjacent low-latency region.",
        technicalRationale: "Encapsulates traffic in secure tunnels that bypass ISP port restrictions and deep packet inspection (DPI).",
      },
      {
        step: 4,
        title: "Verify Correct Server URL Protocol (HTTP vs HTTPS)",
        action: "Check your Teleview welcome email. If your player fails with HTTPS, test HTTP (or vice versa), verifying the exact port number.",
        technicalRationale: "Some older media players lack modern TLS 1.3 cryptographic cipher suites and require standard HTTP ports.",
      },
    ],
    advancedFixes: [
      {
        title: "Disable SIP ALG on Your Router",
        instruction: "Access your router admin dashboard (usually 192.168.1.1), navigate to WAN / NAT Settings, and disable 'SIP ALG' (Application Layer Gateway), which frequently corrupts streaming packet headers.",
      },
    ],
    faqs: [
      {
        question: "Why does my connection drop every few minutes?",
        answer: "This is commonly caused by Wi-Fi power saving sleep modes or an IP address conflict on your local network. Assigning a static IP to your TV box in router settings fixes this.",
      },
      {
        question: "Is port forwarding required for IPTV?",
        answer: "No. IPTV functions on client-to-server outbound connections. Port forwarding is not required on your home router.",
      },
    ],
  },
  {
    slug: "internet-speed",
    name: "Internet Speed Requirements for 4K IPTV Streaming",
    category: "Bandwidth Guidelines & Speed Optimization",
    tagline: "Bandwidth standards, ping latency guidelines, packet jitter thresholds, and speed testing recommendations.",
    quickAnswer:
      "To stream Teleview IPTV smoothly without buffering: standard definition (SD) requires 8 Mbps, High Definition (1080p 60 FPS) requires 15–20 Mbps, and 4K Ultra HD sports broadcasts require 30–35 Mbps of dedicated download speed. Equally important are low ping (under 50ms) and minimal packet jitter (under 5ms) for continuous live video packet delivery.",
    primaryCauses: [
      {
        title: "Bandwidth Competition from Other Household Devices",
        explanation: "Online gaming, cloud backups, video calls, or downloads on other family devices can consume available throughput and cause micro-buffering.",
      },
      {
        title: "High Packet Jitter on Wi-Fi",
        explanation: "Even with 200 Mbps speed test results, excessive packet jitter (fluctuations in packet arrival times) can deplete the video buffer and cause stuttering.",
      },
      {
        title: "Inaccurate Speed Test Server Selection",
        explanation: "Testing speed to a server inside your ISP network does not reflect international transit throughput to media streaming servers.",
      },
    ],
    diagnosticWorkflow: [
      {
        step: 1,
        title: "Run a Proper Speed & Jitter Test",
        action: "Open a web browser on your streaming device and visit fast.com or speedtest.net. Look beyond download speed: check your 'Loaded Latency' and Jitter.",
        technicalRationale: "Loaded latency measures whether your connection suffers from bufferbloat under active data transmission.",
      },
      {
        step: 2,
        title: "Prioritize Streaming Box with Router QoS",
        action: "In your router admin settings, enable Quality of Service (QoS) and set your streaming device MAC address as 'Highest Priority'.",
        technicalRationale: "Prevents background PC downloads or phone backups from saturating available bandwidth during live sports matches.",
      },
      {
        step: 3,
        title: "Move to 5 GHz Band or Reduce Physical Distance",
        action: "Ensure your streaming stick is connected to the 5 GHz band. If far from the router, consider a mesh Wi-Fi node or powerline Ethernet adapter.",
        technicalRationale: "Reduces packet retransmissions and minimizes wireless signal degradation across walls.",
      },
      {
        step: 4,
        title: "Verify Minimum Dedicated Speeds",
        action: "Ensure your available connection satisfies: 8 Mbps (SD), 15 Mbps (HD), 30+ Mbps (4K UHD 60 FPS).",
        technicalRationale: "Matches the direct CBR/VBR encoding bitrates of Teleview's premium stream sources.",
      },
    ],
    advancedFixes: [
      {
        title: "Use a Cat6 / Cat7 Ethernet Cable",
        instruction: "For complete immunity to Wi-Fi interference and zero-jitter performance, wire your TV box directly to your router using Cat6 Ethernet.",
      },
    ],
    faqs: [
      {
        question: "My speed test shows 100 Mbps, so why is my IPTV buffering?",
        answer: "Speed test apps connect to local ISP servers located a few miles away. IPTV streams traverse international backbones where your ISP may throttle or experience transit congestion. Additionally, high Wi-Fi jitter (packet delay variance) will cause buffering regardless of top download speed.",
      },
      {
        question: "How much data does 1 hour of 4K IPTV streaming consume?",
        answer: "A high-bitrate 4K 60 FPS live broadcast consumes approximately 7 GB to 10 GB per hour. A standard 1080p stream consumes approximately 2.5 GB to 3.5 GB per hour.",
      },
    ],
  },
];
