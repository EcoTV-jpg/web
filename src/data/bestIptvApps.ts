/* ------------------------------------------------------------------
   Verified Technical Specifications: Best IPTV Players & Apps (2026)
   Source data complies with zero-fabrication standards:
   - Official developer documentations & store listings
   - Factual hardware and platform limitations
   - Independent player / provider separation disclosure
------------------------------------------------------------------- */

export interface AppVerification {
  verified: boolean;
  source: string;
  lastReviewed: string;
}

export interface SetupStep {
  step: number;
  title: string;
  instruction: string;
}

export interface TroubleshootingItem {
  title: string;
  problem: string;
  solution: string;
}

export interface AlternativeApp {
  name: string;
  slug: string;
  reason: string;
}

export interface AppFaq {
  question: string;
  answer: string;
}

export interface IptvAppDetail {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  /** Custom category/descriptor for the app (e.g. for general media player vs dedicated IPTV player) */
  appCategory?: string;
  bestFor: string;
  developer: string;
  licenseModel: string;
  ratingDisclaimer: string;
  verification: AppVerification;
  primaryPlatforms: string[];
  secondaryPlatforms: string[];
  unsupportedPlatforms: string[];
  installationMethod: string;
  authenticationModels: string[];
  epgSupport: string;
  playbackEngine: string;
  remoteUsability: string;
  uniqueStrengths: string[];
  limitations: string[];
  targetUsers: string;
  setupGuide: SetupStep[];
  /** Optional: overrides the generic setup section sub-heading description */
  setupDescription?: string;
  troubleshooting: TroubleshootingItem[];
  /** Optional: overrides the generic troubleshooting section sub-heading description */
  troubleshootingDescription?: string;
  alternatives: AlternativeApp[];
  faqs: AppFaq[];
  relatedDeviceSlug: string;
  relatedDeviceName: string;
  relatedSetupHash: string;
}

export const bestIptvAppsList: IptvAppDetail[] = [
  {
    slug: "tivimate",
    name: "TiviMate IPTV Player",
    shortName: "TiviMate",
    tagline: "Dedicated television streaming interface with modern cable-box EPG grid for Android TV and Fire TV.",
    bestFor: "Living room TVs running Android TV, Google TV, or Amazon Firestick requiring a traditional cable EPG experience.",
    developer: "Armobsoft FZE",
    licenseModel: "Freemium (Free basic playback; optional Premium annual or lifetime unlock for multi-view and advanced EPG)",
    ratingDisclaimer: "Feature availability, EPG updates, and multi-view capabilities depend on the installed app version and license tier.",
    verification: {
      verified: true,
      source: "Official Google Play Store listing and developer documentation (Armobsoft FZE)",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Android TV", "Google TV", "Amazon Fire TV Stick", "Nvidia Shield"],
    secondaryPlatforms: ["Android Tablets (with touchscreen controls)"],
    unsupportedPlatforms: ["Apple iOS / iPadOS", "Apple TV (tvOS)", "Samsung Tizen Smart TV", "LG webOS Smart TV", "Windows / Mac (native)"],
    installationMethod: "Google Play Store on Android TV; Sideloaded via Downloader app on Amazon Fire TV Stick.",
    authenticationModels: ["Xtream Codes API", "M3U / M3U8 Playlist URL", "Stalker Portal"],
    epgSupport: "Full interactive TV grid guide, past/future timeline scrolling, customizable guide intervals, and auto-sync on startup.",
    playbackEngine: "Internal hardware-accelerated media player with configurable pre-buffer size and audio passthrough.",
    remoteUsability: "Purpose-built for DPAD remote navigation; custom remote key mapping for channel surfing, guide toggling, and multi-view.",
    uniqueStrengths: [
      "Authentic broadcast television UI that looks and behaves like modern satellite or digital cable set-top boxes.",
      "Multi-view quad-screen mode allowing up to 4 simultaneous live streams (requires multiple active service connections).",
      "Customizable buffer duration (None, Small, Medium, Large) to stabilize streams across high-latency Wi-Fi connections.",
      "Granular channel group management, custom favorites lists, and manual channel number assignment.",
    ],
    limitations: [
      "No native client for Apple TV, iOS, or Samsung/LG Smart TVs.",
      "Fire TV users must unlock Premium licenses using an Android device running the TiviMate Companion app or web portal.",
      "Does not host or supply streaming content; requires active third-party IPTV credentials.",
    ],
    targetUsers: "Viewers who watch primarily on television screens via Android TV or Fire TV and want the most polished remote-controlled TV guide.",
    setupGuide: [
      {
        step: 1,
        title: "Install the Application",
        instruction: "On Android TV, install TiviMate directly from the Google Play Store. On Firestick, install Downloader, navigate to the official TiviMate APK link, and complete installation.",
      },
      {
        step: 2,
        title: "Add Playlist via Xtream Codes",
        instruction: "Open TiviMate, select 'Add Playlist', choose 'Xtream Codes', and enter your Teleview Server URL, Username, and Password.",
      },
      {
        step: 3,
        title: "Configure EPG & Buffer",
        instruction: "Wait for the playlist to download, then visit Settings > Playback to set your buffer size to 'Medium' or 'Large' for optimal stability.",
      },
    ],
    troubleshooting: [
      {
        title: "TiviMate Error 401 Unauthorized",
        problem: "Playlist fails to load with error code 401.",
        solution: "Double-check your username and password for typos or extra trailing spaces. Verify that your Teleview subscription is active.",
      },
      {
        title: "EPG Program Guide Missing or Blank",
        problem: "Channels display without program titles or schedule information.",
        solution: "Navigate to Settings > EPG > EPG Sources, select your Teleview playlist, and click 'Update EPG'. Ensure your device clock is synchronized accurately.",
      },
      {
        title: "Micro-Stuttering on 4K 60FPS Streams",
        problem: "Video drops frames during high-action sports broadcasts.",
        solution: "Go to Settings > Playback, enable 'AFR' (Auto Frame Rate switching), and increase buffer size from Small to Medium.",
      },
    ],
    alternatives: [
      { name: "OTT Navigator IPTV", slug: "ott-navigator", reason: "Similar deep Android TV customization with alternative decoder fallbacks." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Better multi-platform reach if you also watch on phones, tablets, or Apple devices." },
    ],
    faqs: [
      {
        question: "Is TiviMate free to use?",
        answer: "TiviMate provides a free version for basic single-playlist viewing. Advanced features like multi-view, scheduled recording, and multiple playlist support require a paid TiviMate Premium license from the developer.",
      },
      {
        question: "Can I install TiviMate on a Samsung or LG Smart TV?",
        answer: "No. TiviMate is compiled exclusively for Android OS. To use TiviMate on a Samsung or LG television, plug an external streaming device like an Amazon Fire TV Stick 4K or Chromecast with Google TV into an HDMI port.",
      },
      {
        question: "Does TiviMate provide channel subscriptions?",
        answer: "No. TiviMate is strictly a media player application. It does not provide, host, or sell video streams. You must supply your own streaming credentials from a provider like Teleview.",
      },
    ],
    relatedDeviceSlug: "firestick",
    relatedDeviceName: "Amazon Fire TV & Firestick",
    relatedSetupHash: "#firestick",
  },
  {
    slug: "iptv-smarters-pro",
    name: "IPTV Smarters Pro",
    shortName: "IPTV Smarters",
    tagline: "Cross-platform streaming player featuring separate Live TV, Movies, and Series sections across mobile, TV, and desktop.",
    bestFor: "Subscribers who want one familiar interface across multiple devices including Android, iOS, Fire TV, Windows, and Mac.",
    developer: "WHMCSSmarters",
    licenseModel: "Free with optional Premium in-app purchase for multi-screen and advanced player controls",
    ratingDisclaimer: "App store availability and feature sets vary across operating systems and TV manufacturer app markets.",
    verification: {
      verified: true,
      source: "Official WHMCSSmarters developer portal and iOS/Android store listings",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Android Mobile & Tablet", "Apple iOS (iPhone & iPad)", "Amazon Fire TV", "Windows PC", "macOS"],
    secondaryPlatforms: ["Android TV / Google TV", "Select Samsung Tizen & LG webOS models (where published)"],
    unsupportedPlatforms: ["Roku (not natively available in Roku Channel Store)"],
    installationMethod: "Official app stores on iOS, Android, and macOS; executable installer on Windows PC; Downloader sideloading on Firestick.",
    authenticationModels: ["Xtream Codes API (recommended)", "M3U Playlist File / URL", "Single Stream Playback"],
    epgSupport: "Standard EPG channel view with program synopsis, timeline progress bars, and catch-up access on supported channels.",
    playbackEngine: "Built-in media player with selectable hardware decoding engines (Built-in, VLC, or MX Player integration on Android).",
    remoteUsability: "Good on TV platforms with simple remote controls; highly optimized for mobile touchscreens and desktop mouse clicks.",
    uniqueStrengths: [
      "Segmented home dashboard cleanly categorizing Live TV, VOD Movies, and Series boxsets.",
      "Multi-screen layout allowing viewers to watch 2 to 4 streams concurrently on capable hardware.",
      "Integrated audio track selector and subtitle rendering engine supporting multi-language broadcasts.",
      "Available across virtually every personal computing and mobile operating system.",
    ],
    limitations: [
      "User interface contains developer branding and upgrade prompts in the unpaid edition.",
      "EPG timeline navigation on television screens is less fluid than dedicated TV-first players like TiviMate.",
      "Certain Smart TV app store editions may receive slower feature updates compared to mobile and desktop builds.",
    ],
    targetUsers: "Viewers who stream across different device ecosystems (e.g. iPhone on the road, Windows laptop at work, Firestick at home) and want a unified layout.",
    setupGuide: [
      {
        step: 1,
        title: "Download IPTV Smarters Pro",
        instruction: "Install the app from your device official application repository (Apple App Store, Google Play, or official website installer for PC/Mac).",
      },
      {
        step: 2,
        title: "Select Login With Xtream Codes API",
        instruction: "Choose 'Load Your Playlist or File/URL' or click 'Login with Xtream Codes API'.",
      },
      {
        step: 3,
        title: "Enter Account Details",
        instruction: "Type Any Name (e.g. Teleview), your Username, Password, and the Server URL provided in your activation email. Click 'Add User' to synchronize channels.",
      },
    ],
    troubleshooting: [
      {
        title: "Playback Failed / Invalid Stream Format",
        problem: "Certain channels show a black screen or trigger 'Playback Error'.",
        solution: "Open Settings > Player Selection, and change the default player engine from 'Built-in Player' to 'Hardware Decoder' or 'VLC Engine'.",
      },
      {
        title: "VOD Subtitles Out of Sync or Missing",
        problem: "Subtitles do not display on video-on-demand movies.",
        solution: "During movie playback, click the speech bubble icon in the player controls and select the embedded SRT or CC audio track.",
      },
      {
        title: "App Freezes on Playlist Download",
        problem: "The application hangs while loading 25,000+ live channels.",
        solution: "Ensure your device has at least 1 GB of free internal storage. Clear app cache from device settings and restart the application.",
      },
    ],
    alternatives: [
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "Superior TV-first interface if you only stream on Android TV or Fire TV." },
      { name: "GSE Smart IPTV", slug: "gse-smart-iptv", reason: "Lightweight alternative for Apple iOS and tvOS power users." },
    ],
    faqs: [
      {
        question: "Can I use IPTV Smarters Pro on an iPhone?",
        answer: "Yes, IPTV Smarters Pro (or Smarters Player Lite) is available directly through the Apple App Store for iPhones, iPads, and Apple TV.",
      },
      {
        question: "Does IPTV Smarters Pro cost money?",
        answer: "The base app is free to download and supports standard live TV and VOD playback. An optional Premium in-app upgrade unlocks multi-screen, parental controls, and removes third-party prompts.",
      },
      {
        question: "Why does IPTV Smarters show 'Authorisation Failed'?",
        answer: "This error indicates invalid login credentials, an expired subscription, or a typo in the Server URL. Re-enter your credentials carefully without extra spaces.",
      },
    ],
    relatedDeviceSlug: "android",
    relatedDeviceName: "Android TV & Mobile Devices",
    relatedSetupHash: "#android",
  },
  {
    slug: "ibo-player",
    name: "IBO Player",
    shortName: "IBO Player",
    tagline: "Streamlined Smart TV media player engineered specifically for Samsung Tizen and LG webOS televisions.",
    bestFor: "Samsung and LG Smart TV owners who want to stream without purchasing an external Firestick or Apple TV box.",
    developer: "IBO Technology",
    licenseModel: "7-day free trial; requires one-time developer device activation fee (handled directly with the app developer)",
    ratingDisclaimer: "Activation fees are charged independently by the IBO Player developer and do not include IPTV streaming service.",
    verification: {
      verified: true,
      source: "Official IBO Player portal (iboplayer.com) and LG Content Store / Samsung Apps directory",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Samsung Smart TV (Tizen OS)", "LG Smart TV (webOS)", "Android TV", "Apple TV (tvOS)"],
    secondaryPlatforms: ["Amazon Fire TV (sideloaded)"],
    unsupportedPlatforms: ["Roku", "Standard desktop web browsers (as a native player)"],
    installationMethod: "Direct install from Samsung Apps store or LG Content Store without USB drives or developer mode.",
    authenticationModels: ["Web Portal MAC Address & Device Key pairing", "Xtream Codes API", "M3U Playlist Upload"],
    epgSupport: "Basic channel list EPG and program guide schedule with simple timeline display.",
    playbackEngine: "Optimized for television SOCs (System on Chip) utilizing native TV hardware decoders for fast zapping.",
    remoteUsability: "Tailored for standard television remotes, Samsung OneRemote, and LG Magic Remote with point-and-click support.",
    uniqueStrengths: [
      "Native installation directly through your television official app store without sideloading or USB sticks.",
      "Fast channel zapping speed and lightweight memory footprint tailored for Smart TV processors.",
      "Cloud-based playlist configuration: manage streams from a computer or smartphone browser via the IBO portal.",
      "Support for multiple playlists and automatic subtitle track switching.",
    ],
    limitations: [
      "Requires an independent activation fee payable to the IBO Player developer after a 7-day trial period.",
      "Less advanced EPG customization compared to dedicated players like TiviMate.",
      "No integrated local DVR or scheduled recording functionality.",
    ],
    targetUsers: "Smart TV owners seeking the simplest possible setup directly on their television screen without extra cables or external dongles.",
    setupGuide: [
      {
        step: 1,
        title: "Install on Smart TV",
        instruction: "Search for 'IBO Player' in the Samsung Apps store or LG Content Store and click Install.",
      },
      {
        step: 2,
        title: "Retrieve Device Credentials",
        instruction: "Launch the app on your TV screen. Note down the 'Device MAC' and 'Device Key' displayed on the initial setup screen.",
      },
      {
        step: 3,
        title: "Upload Playlist Online",
        instruction: "On your phone or computer, visit iboplayer.com/upload, enter your Device MAC and Key, paste your Teleview M3U or Xtream Codes details, save, and restart the TV app.",
      },
    ],
    troubleshooting: [
      {
        title: "Trial Expired Notice on TV Screen",
        problem: "The app prompts for payment when launched.",
        solution: "IBO Player offers a 7-day trial. To continue using the player app, follow on-screen instructions to pay the developer one-time activation fee on their official website.",
      },
      {
        title: "Playlist Not Showing After Online Upload",
        problem: "The portal reports success, but the TV app shows an empty channel list.",
        solution: "In the IBO Player settings on your TV, click 'Reload' or completely exit and reopen the app so it fetches the newly cached playlist from the cloud.",
      },
      {
        title: "Buffering on 4K Channels",
        problem: "High-bitrate 4K sports streams stutter on television Wi-Fi.",
        solution: "Connect your Smart TV to your router using a physical Ethernet cable or switch your TV Wi-Fi connection from 2.4 GHz to 5 GHz.",
      },
    ],
    alternatives: [
      { name: "SmartOne IPTV", slug: "smartone", reason: "Another prominent Smart TV app store option with similar MAC-based activation." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Free player alternative available across mobile and TV platforms." },
    ],
    faqs: [
      {
        question: "Is IBO Player included in my Teleview subscription?",
        answer: "No. Teleview provides high-speed streaming server access and credentials. IBO Player is independent third-party software developed by IBO Technology, which charges an independent device activation fee after a 7-day trial.",
      },
      {
        question: "Do I need a USB drive to install IBO Player on Samsung or LG?",
        answer: "No. IBO Player is officially hosted in the Samsung Apps and LG Content Store. You can download it directly using your TV remote without USB drives or developer mode.",
      },
      {
        question: "Can I manage multiple playlists on IBO Player?",
        answer: "Yes, the IBO Player web management portal allows you to connect multiple M3U playlists or Xtream Codes accounts and switch between them on your TV.",
      },
    ],
    relatedDeviceSlug: "smart-tv",
    relatedDeviceName: "Samsung & LG Smart TVs",
    relatedSetupHash: "#smart-tv",
  },
  {
    slug: "smartone",
    name: "SmartOne IPTV",
    shortName: "SmartOne",
    tagline: "Lightweight Smart TV media player with dual playlist management and simple remote control operation.",
    bestFor: "LG webOS and Samsung Tizen TV owners seeking an uncomplicated, fast-launching native television player.",
    developer: "SmartOne IPTV Team",
    licenseModel: "14-day free trial; requires independent developer activation fee (annual or lifetime)",
    ratingDisclaimer: "Licensing and activation are processed independently by the SmartOne development team.",
    verification: {
      verified: true,
      source: "Official SmartOne IPTV portal (smartone-iptv.com) and Smart TV platform listings",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["LG Smart TV (webOS)", "Samsung Smart TV (Tizen)", "Android TV", "Vidaa OS (Hisense)"],
    secondaryPlatforms: ["Fire TV (sideloaded)"],
    unsupportedPlatforms: ["Apple iOS", "Apple TV (tvOS)", "Windows / Mac (native)"],
    installationMethod: "Direct install from LG Content Store, Samsung Smart Hub, or Vidaa App Store.",
    authenticationModels: ["Web Portal MAC Address activation", "Xtream Codes API via web portal", "M3U URL upload"],
    epgSupport: "Compact channel list EPG with program summary, schedule preview, and time-zone offset settings.",
    playbackEngine: "Native television hardware acceleration with minimal CPU overhead, suitable for older Smart TV chipsets.",
    remoteUsability: "Supports standard infrared TV remotes, number-key direct channel entry, and color buttons (Red, Green, Yellow, Blue).",
    uniqueStrengths: [
      "Broad Smart TV compatibility including Vidaa OS, LG webOS, and Samsung Tizen.",
      "Dual playlist architecture allowing users to configure both a primary and secondary provider.",
      "Direct channel number dialing using physical television remote number pads.",
      "Clean multilingual interface with manual time-zone compensation for EPG alignment.",
    ],
    limitations: [
      "Requires independent activation license from developer after 14-day evaluation.",
      "Playlist additions and modifications must be performed via an external web browser.",
      "Basic interface lacks the modern timeline grid found in TiviMate.",
    ],
    targetUsers: "Smart TV households that prioritize simplicity and want to navigate live channels using standard TV remote number buttons.",
    setupGuide: [
      {
        step: 1,
        title: "Install from TV Store",
        instruction: "Open your TV app marketplace (LG Content Store or Samsung Apps), search for 'SmartOne IPTV', and download the app.",
      },
      {
        step: 2,
        title: "Find TV MAC Address",
        instruction: "Launch SmartOne IPTV and locate the MAC address displayed in the bottom corner of the welcome screen.",
      },
      {
        step: 3,
        title: "Upload Playlist Credentials",
        instruction: "Visit smartone-iptv.com/plugin/smart_one in your phone or PC browser, enter your MAC address, input your Teleview M3U URL or Xtream Codes details, and save.",
      },
    ],
    troubleshooting: [
      {
        title: "Channel Audio Plays but Screen is Black",
        problem: "Video fails to decode on certain high-bitrate streams.",
        solution: "In SmartOne settings on your TV, toggle 'Stream Format' from HLS to MPEG-TS or change the default video decoder option.",
      },
      {
        title: "EPG Schedule Shifted by Several Hours",
        problem: "Program titles do not match the currently playing broadcast.",
        solution: "Go to SmartOne Settings > Time Shift (EPG), and adjust the hour offset (+1, -1, etc.) to match your local timezone.",
      },
      {
        title: "App Asks for Activation License",
        problem: "The 14-day evaluation period has concluded.",
        solution: "Visit the official SmartOne website to purchase an activation license directly from the developer using your TV MAC address.",
      },
    ],
    alternatives: [
      { name: "IBO Player", slug: "ibo-player", reason: "Very similar Smart TV portal setup with slightly more modern channel cards." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Free alternative with multi-platform cross-device sync." },
    ],
    faqs: [
      {
        question: "How long is the SmartOne IPTV free trial?",
        answer: "SmartOne IPTV provides a 14-day free trial from the first time you launch the app on your television. After 14 days, you must activate the app through the developer website.",
      },
      {
        question: "Does SmartOne IPTV work on Hisense Smart TVs?",
        answer: "Yes, SmartOne IPTV is one of the few dedicated players available in the Vidaa App Store on compatible Hisense and Toshiba Smart TVs.",
      },
      {
        question: "Can I input Xtream Codes directly on the TV?",
        answer: "Most users configure Xtream Codes via the SmartOne online web portal using their TV MAC address, which is significantly faster than typing long URLs with a TV remote.",
      },
    ],
    relatedDeviceSlug: "smart-tv",
    relatedDeviceName: "Smart TVs (Samsung & LG)",
    relatedSetupHash: "#smart-tv",
  },
  {
    slug: "gse-smart-iptv",
    name: "GSE Smart IPTV",
    shortName: "GSE Smart IPTV",
    tagline: "Comprehensive media player for Apple iOS and tvOS with advanced local playlist parsing and AirPlay support.",
    bestFor: "Apple ecosystem users streaming on iPhone, iPad, Mac, and Apple TV (tvOS) who need versatile playlist management.",
    developer: "GSE Technology",
    licenseModel: "Free with optional in-app purchase for ad removal and advanced features",
    ratingDisclaimer: "App store presence on iOS may vary by regional App Store and developer maintenance cycles.",
    verification: {
      verified: true,
      source: "Official Apple App Store developer listing (GSE Technology) and technical specifications",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Apple iOS (iPhone & iPad)", "Apple TV (tvOS)", "macOS"],
    secondaryPlatforms: ["Android (legacy builds)"],
    unsupportedPlatforms: ["Samsung Tizen", "LG webOS", "Roku"],
    installationMethod: "Direct install from the Apple App Store on iPhone, iPad, and Apple TV.",
    authenticationModels: ["Remote M3U Playlist URL", "Xtream Codes API", "Local M3U File (via FTP or HTTP web upload)"],
    epgSupport: "Multi-source XMLTV EPG support, automatic EPG parsing, and manual EPG URL assignment.",
    playbackEngine: "Built-in hardware player supporting RTMP, HLS, RTSP, and MMS protocols with AirPlay streaming.",
    remoteUsability: "Fully integrated with Apple TV Remote and Siri Remote; gesture-based touch controls on iPhone and iPad.",
    uniqueStrengths: [
      "Deep integration with Apple ecosystem, including seamless AirPlay screen-casting to compatible AirPlay 2 receivers.",
      "Local playlist file management via embedded HTTP/FTP web server for uploading customized channel lists.",
      "Multi-format protocol decoding capable of playing raw HLS, RTMP, and RTSP broadcast streams.",
      "Customizable parental control locks with PIN protection per channel category.",
    ],
    limitations: [
      "Interface is utilitarian with dense menus that feel less modern than consumer streaming apps.",
      "Frequent developer changes and occasional App Store delistings in certain territories.",
      "No native client for Samsung or LG smart televisions.",
    ],
    targetUsers: "Apple device owners and technically inclined users who want granular control over local playlist files and XMLTV EPG sources.",
    setupGuide: [
      {
        step: 1,
        title: "Download from App Store",
        instruction: "Open the Apple App Store on your iPhone, iPad, or Apple TV, search for 'GSE Smart IPTV', and download the application.",
      },
      {
        step: 2,
        title: "Add Xtream Codes API",
        instruction: "Tap the top-left menu icon, select 'Xtream Codes API', tap the '+' icon, and give your playlist a name (e.g. Teleview).",
      },
      {
        step: 3,
        title: "Input Credentials",
        instruction: "Enter your Server URL, Username, and Password provided by Teleview. Tap 'Add' and wait for live channels and VOD to synchronize.",
      },
    ],
    troubleshooting: [
      {
        title: "Audio Desynchronization on Apple TV",
        problem: "Audio drifts out of sync with video during prolonged viewing.",
        solution: "In GSE settings, open 'Player Settings' and switch the internal media player engine from 'Hardware Decoder' to 'Software Decoder' or adjust audio delay.",
      },
      {
        title: "EPG Schedule Shows 'No Data'",
        problem: "Channel lists load correctly, but program listings are empty.",
        solution: "Open the EPG management menu, select 'Force EPG Update', and verify that your device clock is set to automatic network time.",
      },
      {
        title: "Playlist Fails to Refresh",
        problem: "New channels do not appear after provider catalog updates.",
        solution: "Long-press your playlist in the Xtream Codes menu and tap 'Refresh Playlist and EPG'.",
      },
    ],
    alternatives: [
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "More user-friendly modern interface for iPhone and iPad." },
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "Far superior interface if you decide to switch to an Android TV or Firestick device." },
    ],
    faqs: [
      {
        question: "Can I AirPlay streams from GSE Smart IPTV to Apple TV?",
        answer: "Yes, GSE Smart IPTV includes native iOS AirPlay integration, allowing you to cast live streams and VOD from an iPhone or iPad to your Apple TV.",
      },
      {
        question: "Is GSE Smart IPTV still maintained on the iOS App Store?",
        answer: "Availability can fluctuate due to Apple App Store policies. If GSE is unavailable in your region, IPTV Smarters Pro or Smarters Player Lite serves as a verified alternative for iOS.",
      },
      {
        question: "Can I upload an M3U file from my computer to GSE?",
        answer: "Yes. GSE features a built-in local web server tool: enable the web server in GSE settings, open the provided IP address on your computer browser, and upload your M3U file directly.",
      },
    ],
    relatedDeviceSlug: "ios",
    relatedDeviceName: "Apple iOS & tvOS Devices",
    relatedSetupHash: "#ios",
  },
  {
    slug: "vlc",
    name: "VLC Media Player",
    shortName: "VLC",
    tagline: "Free, open-source desktop multimedia player capable of playing raw M3U streams and diagnosing network codecs.",
    appCategory: "open-source desktop multimedia player and stream diagnostic utility",
    bestFor: "Desktop computer users (Windows, macOS, Linux) testing raw stream URLs, inspecting video codecs, or diagnosing network issues.",
    developer: "VideoLAN Non-profit Organization",
    licenseModel: "100% Free and Open Source (GPLv2)",
    ratingDisclaimer: "VLC is a general media player and diagnostic utility, not a purpose-built television streaming interface.",
    verification: {
      verified: true,
      source: "Official VideoLAN documentation (videolan.org) and open-source project repository",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Windows 10 / 11", "macOS", "Linux (Ubuntu, Debian, Fedora, Arch)"],
    secondaryPlatforms: ["Android Mobile", "Apple iOS"],
    unsupportedPlatforms: ["Smart TV native app stores (Samsung Tizen / LG webOS)"],
    installationMethod: "Direct installer download from official videolan.org website or standard Linux package managers (apt, pacman, dnf).",
    authenticationModels: ["Network Stream URL (M3U / M3U8)", "Local .m3u playlist files", "Direct TS / MP4 stream links"],
    epgSupport: "Limited; does not provide a visual television timeline EPG grid or program synopsis.",
    playbackEngine: "Industry-standard libVLC framework containing internal codecs for virtually every video and audio container ever developed.",
    remoteUsability: "Designed for desktop keyboard and mouse navigation; not optimized for handheld television remotes.",
    uniqueStrengths: [
      "100% free, non-commercial open-source software with zero advertisements, trackers, or subscription paywalls.",
      "Broad codec compatibility via libVLC: decodes H.264, HEVC/H.265, AV1, MPEG-2, AAC, and Dolby Digital without external codec packs.",
      "Comprehensive diagnostic toolkit: inspect stream bitrates, codec profiles, network caching, and error logs via Tools > Messages.",
      "Customizable network caching buffer (in milliseconds) to diagnose whether stream buffering is local or ISP-related.",
    ],
    limitations: [
      "Lacks a dedicated television interface: channels appear as a flat text playlist without logos or categories.",
      "No interactive EPG timeline grid or automated electronic program guide scheduling.",
      "No native support for Xtream Codes API authentication; requires converted M3U playlist URLs.",
    ],
    targetUsers: "Technical users, network administrators, and desktop viewers who want a reliable diagnostic tool to verify stream health.",
    setupGuide: [
      {
        step: 1,
        title: "Download VLC Media Player",
        instruction: "Visit the official VideoLAN website (videolan.org) and download the verified installer for Windows, Mac, or Linux.",
      },
      {
        step: 2,
        title: "Open Network Stream",
        instruction: "Launch VLC, click 'Media' on the top menu (or 'File' on macOS), and select 'Open Network Stream' (shortcut: Ctrl+N or Cmd+N).",
      },
      {
        step: 3,
        title: "Paste M3U URL & View Playlist",
        instruction: "Paste your Teleview M3U playlist URL into the network URL box and press 'Play'. Press Ctrl+L (Cmd+L on Mac) to toggle the channel playlist panel.",
      },
    ],
    setupDescription: "Follow these three steps to load your M3U playlist URL and begin playing streams. VLC does not include an EPG program guide.",
    troubleshooting: [
      {
        title: "VLC Loops Rapidly Through Channels",
        problem: "VLC skips through channels in the playlist without playing video.",
        solution: "Toggle off the 'Loop Playlist' button at the bottom of the player. If an individual stream is offline, looping causes VLC to rapidly attempt the next entry.",
      },
      {
        title: "Stream Stutters or Freezes on High Bitrates",
        problem: "4K live streams buffer periodically on desktop.",
        solution: "In VLC, click Tools > Preferences > Show All Settings (bottom left). Navigate to Input / Codecs, scroll to Advanced, and increase 'Network caching (ms)' from 1000 to 3000.",
      },
      {
        title: "Playlist Takes Too Long to Load",
        problem: "Opening a large M3U URL causes VLC to freeze.",
        solution: "Large M3U playlists contain tens of thousands of lines. Request a category-filtered M3U link from Teleview support containing only your desired countries.",
      },
    ],
    troubleshootingDescription: "Solutions to common stream playback, network caching, and playlist loading errors:",
    alternatives: [
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Dedicated desktop IPTV client with categorization for Windows and Mac." },
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "The ideal alternative if you switch to viewing on a television screen." },
    ],
    faqs: [
      {
        question: "Can I use VLC as my main everyday IPTV player?",
        answer: "While VLC can play any IPTV stream, its interface is designed for general media playback rather than live TV. It lacks channel categories, channel logos, and a TV guide EPG grid.",
      },
      {
        question: "Why does VLC ask for login credentials?",
        answer: "If your provider requires HTTP authentication, include your username and password directly inside your M3U playlist URL as provided in your Teleview welcome email.",
      },
      {
        question: "Is VLC safe and legal to use?",
        answer: "Yes. VLC is developed by the VideoLAN non-profit project and is completely legal open-source software. It does not contain or promote content.",
      },
    ],
    relatedDeviceSlug: "android",
    relatedDeviceName: "PC, Mac & Desktop Devices",
    relatedSetupHash: "#m3u",
  },
  {
    slug: "ott-navigator",
    name: "OTT Navigator IPTV",
    shortName: "OTT Navigator",
    tagline: "Highly configurable, power-user IPTV application for Android TV with granular decoder controls and advanced EPG aggregation.",
    bestFor: "Technical power users on Android TV and Google TV who desire deep customization over playback engines, codecs, and multi-provider playlists.",
    developer: "SIA Scillarium Studio",
    licenseModel: "Freemium (Free with optional Premium license for picture-in-picture, archive browser, and advanced studio modes)",
    ratingDisclaimer: "Feature availability and configuration options vary based on device hardware capabilities and user license tier.",
    verification: {
      verified: true,
      source: "Official Google Play Store listing (SIA Scillarium Studio) and developer release documentation",
      lastReviewed: "2026-09-04",
    },
    primaryPlatforms: ["Android TV", "Google TV", "Android Mobile & Tablets", "Amazon Fire TV (sideloaded)"],
    secondaryPlatforms: ["Android-based Projectors & Set-Top Boxes"],
    unsupportedPlatforms: ["Apple iOS", "Apple TV (tvOS)", "Samsung Tizen", "LG webOS", "Windows / Mac (native)"],
    installationMethod: "Google Play Store on Android TV; Sideloaded APK via Downloader on Fire TV Stick.",
    authenticationModels: ["Xtream Codes API", "M3U / M3U8 Playlists", "Stalker Portal", "MAC-based Portal"],
    epgSupport: "Advanced EPG engine supporting multiple simultaneous EPG sources, manual XMLTV assignment, and custom time-shift offsets.",
    playbackEngine: "Configurable multi-engine architecture: switch between ExoPlayer, internal VLC engine, or hardware decoders on a per-channel basis.",
    remoteUsability: "Extensive remote-control mapping options, programmable shortcuts, and long-press contextual actions.",
    uniqueStrengths: [
      "Deep technical granularity: select distinct video decoders, buffering depths, and hardware acceleration per stream type.",
      "Studio Mode & Picture-in-Picture (PiP): monitor multiple live broadcasts simultaneously while navigating the program guide.",
      "Multi-provider aggregation: combine playlists from multiple services into a single unified channel guide without duplicate entries.",
      "Automatic stream health monitoring with visual bitrate meters and connection stability graphs.",
    ],
    limitations: [
      "Steep learning curve: hundreds of deep configuration menus can easily overwhelm casual viewers.",
      "Exclusive to Android OS; unavailable for Apple, Samsung, LG, or desktop platforms.",
      "Default interface theme is complex compared to the clean simplicity of TiviMate.",
    ],
    targetUsers: "Technical IPTV enthusiasts who want complete control over codecs, decoders, EPG time-shifts, and multi-playlist integration.",
    setupGuide: [
      {
        step: 1,
        title: "Install OTT Navigator",
        instruction: "Download OTT Navigator IPTV from the Google Play Store on your Android TV or sideload the APK onto your Firestick.",
      },
      {
        step: 2,
        title: "Select Provider Type",
        instruction: "Launch the app, click 'Settings' > 'Provider', select 'Add Provider', and choose 'Xtream Codes'.",
      },
      {
        step: 3,
        title: "Configure Credentials",
        instruction: "Enter your Teleview Server URL, Username, and Password. Allow the app to index channel categories, VOD, and EPG data.",
      },
    ],
    troubleshooting: [
      {
        title: "Channel Buffers or Shows Black Screen",
        problem: "Specific high-bitrate stream refuses to play with default settings.",
        solution: "While viewing the channel, press Menu > Track > Player Engine, and switch from 'ExoPlayer' to 'VLC Engine' or toggle 'Hardware Acceleration'.",
      },
      {
        title: "Interface Too Busy / Complex",
        problem: "User wants a simpler traditional TV layout.",
        solution: "Navigate to Settings > Appearance, and change the layout mode from 'Advanced Studio' to 'Standard Media Guide'.",
      },
      {
        title: "EPG Times Incorrect",
        problem: "Electronic program guide schedule is misaligned with actual broadcast time.",
        solution: "Go to Settings > Provider > Select Teleview > Time Shift, and adjust the hourly offset until schedule lines up.",
      },
    ],
    alternatives: [
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "More streamlined, modern visual design for living room television streaming." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Far simpler user interface suitable for non-technical family members." },
    ],
    faqs: [
      {
        question: "How does OTT Navigator compare to TiviMate?",
        answer: "TiviMate offers a more polished, modern television interface designed for straightforward living-room viewing. OTT Navigator provides far more granular technical controls, such as per-channel codec selection, stream health graphs, and multi-provider aggregation.",
      },
      {
        question: "Does OTT Navigator require a paid subscription?",
        answer: "OTT Navigator includes a functional free version. A Premium unlock is available from the developer for advanced features like Picture-in-Picture, extended archive navigation, and automated category filters.",
      },
      {
        question: "Can I use OTT Navigator on a Fire TV Stick?",
        answer: "Yes. While not in the Amazon Appstore, you can sideload the official OTT Navigator APK using the Downloader application.",
      },
    ],
    relatedDeviceSlug: "android",
    relatedDeviceName: "Android TV & Firestick",
    relatedSetupHash: "#android",
  },
];

export interface HubComparisonRow {
  name: string;
  slug: string;
  bestFor: string;
  platforms: string;
  playlistSupport: string;
  epgQuality: string;
  setupEase: string;
  keyFeature: string;
}

export const hubComparisonData: HubComparisonRow[] = [
  {
    name: "TiviMate IPTV Player",
    slug: "tivimate",
    bestFor: "Living room TVs (Android TV / Firestick)",
    platforms: "Android TV, Fire TV, Google TV",
    playlistSupport: "Xtream Codes, M3U, Stalker",
    epgQuality: "Full TV Timeline Grid (Excellent)",
    setupEase: "Moderate (Store / Sideload)",
    keyFeature: "Cable-box interface & multi-view",
  },
  {
    name: "IPTV Smarters Pro",
    slug: "iptv-smarters-pro",
    bestFor: "Multi-device viewing (Mobile, TV & PC)",
    platforms: "Android, iOS, Fire TV, Windows, Mac",
    playlistSupport: "Xtream Codes, M3U",
    epgQuality: "Channel Schedule List (Good)",
    setupEase: "Very Easy (Official Stores)",
    keyFeature: "Live TV, Movies & Series dashboard",
  },
  {
    name: "IBO Player",
    slug: "ibo-player",
    bestFor: "Samsung & LG Smart TVs",
    platforms: "Samsung Tizen, LG webOS, Android, Apple TV",
    playlistSupport: "M3U URL, Xtream Codes (via Web Portal)",
    epgQuality: "Basic Channel Guide (Good)",
    setupEase: "Easy (Direct TV App Store)",
    keyFeature: "Direct TV install & web MAC pairing",
  },
  {
    name: "SmartOne IPTV",
    slug: "smartone",
    bestFor: "Uncomplicated Smart TV streaming",
    platforms: "LG webOS, Samsung Tizen, Vidaa OS",
    playlistSupport: "M3U URL, Xtream Codes (via Web Portal)",
    epgQuality: "Compact Channel EPG (Standard)",
    setupEase: "Easy (Direct TV App Store)",
    keyFeature: "Dual playlist & number pad dialing",
  },
  {
    name: "GSE Smart IPTV",
    slug: "gse-smart-iptv",
    bestFor: "Apple ecosystem (iOS & Apple TV)",
    platforms: "iPhone, iPad, Apple TV (tvOS), Mac",
    playlistSupport: "M3U, Xtream Codes, Local Files",
    epgQuality: "XMLTV Multi-Source (Good)",
    setupEase: "Moderate (App Store)",
    keyFeature: "AirPlay casting & local M3U manager",
  },
  {
    name: "VLC Media Player",
    slug: "vlc",
    bestFor: "Desktop testing & stream diagnostics",
    platforms: "Windows, macOS, Linux, Android",
    playlistSupport: "Network Stream URL, M3U file",
    epgQuality: "None (Basic Playlist Only)",
    setupEase: "Very Easy (Direct Install)",
    keyFeature: "100% Free open-source codec inspector",
  },
  {
    name: "OTT Navigator IPTV",
    slug: "ott-navigator",
    bestFor: "Advanced technical power users",
    platforms: "Android TV, Google TV, Fire TV",
    playlistSupport: "Xtream Codes, M3U, Stalker",
    epgQuality: "Multi-source Aggregation (Excellent)",
    setupEase: "Moderate / Advanced",
    keyFeature: "Per-channel decoders & Studio PiP",
  },
];

export const hubFaqs = [
  {
    question: "What is the difference between an IPTV player and an IPTV subscription?",
    answer: "An IPTV player (such as TiviMate or IBO Player) is a software media application that renders video streams and displays TV guides on your screen. An IPTV subscription (such as Teleview) provides the actual streaming server access, 25,000+ live broadcast streams, and VOD entertainment credentials that you input into the player app.",
  },
  {
    question: "Which IPTV player is best for Samsung or LG Smart TVs?",
    answer: "IBO Player and SmartOne IPTV are the two most verified choices for Samsung (Tizen OS) and LG (webOS) televisions because they can be downloaded directly from the official TV app stores without requiring sideloading, developer modes, or external USB drives.",
  },
  {
    question: "Which IPTV player has the best TV guide (EPG)?",
    answer: "TiviMate is widely recognized for having the most authentic broadcast cable-style EPG timeline grid for television remotes, followed closely by OTT Navigator for users who need multi-provider EPG aggregation.",
  },
  {
    question: "Do IPTV player applications come with free channels?",
    answer: "No. Legitimate IPTV players downloaded from official app stores are empty media shells. They do not supply, host, or endorse video content. You must input your own playlist link or Xtream Codes API credentials from an IPTV service provider like Teleview.",
  },
  {
    question: "Can I use one IPTV player on multiple devices?",
    answer: "Players like IPTV Smarters Pro offer apps across Android, iOS, Windows, Mac, and Fire TV. However, simultaneous streaming across multiple screens depends on whether your subscription plan includes concurrent connections.",
  },
];
