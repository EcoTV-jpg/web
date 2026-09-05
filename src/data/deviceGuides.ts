/* ------------------------------------------------------------------
   Verified Technical Specifications: Device Installation Guides (2026)
   Covers hardware specs, installation methods, recommended players,
   step-by-step setup guides, troubleshooting, and FAQs for 8 devices.
------------------------------------------------------------------- */

export interface DeviceSetupStep {
  step: number;
  title: string;
  instruction: string;
}

export interface DeviceTroubleshooting {
  issue: string;
  cause: string;
  solution: string;
}

export interface DeviceFaq {
  question: string;
  answer: string;
}

export interface DeviceGuideDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  heroAnswer: string;
  operatingSystem: string;
  minRamRecommended: string;
  storageRequirement: string;
  videoDecoders: string[];
  recommendedPlayers: { name: string; slug: string; reason: string }[];
  installationMethod: string;
  setupSteps: DeviceSetupStep[];
  strengths: string[];
  limitations: string[];
  troubleshooting: DeviceTroubleshooting[];
  faqs: DeviceFaq[];
}

export const deviceGuidesList: DeviceGuideDetail[] = [
  {
    slug: "firestick",
    name: "Amazon Fire TV Stick",
    category: "Streaming Media Player",
    tagline: "Step-by-step installation guide for Amazon Fire TV Stick Lite, 4K, 4K Max, and Fire TV Cube.",
    heroAnswer:
      "The Amazon Fire TV Stick is the world's most widely adopted IPTV streaming hardware due to its Android-based Fire OS architecture. By installing the official Downloader utility and enabling Developer Options, subscribers can sideload specialized IPTV players like TiviMate or IPTV Smarters Pro in under 4 minutes with complete 4K 60 FPS video decoding support.",
    operatingSystem: "Fire OS (Android-based)",
    minRamRecommended: "1.5 GB to 2.0 GB (Firestick 4K / 4K Max recommended for smooth EPG caching)",
    storageRequirement: "At least 1.2 GB of free internal flash storage for playlist caching",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS)", "AVC / H.264", "AV1 (Firestick 4K Max & Cube)", "VP9"],
    recommendedPlayers: [
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "Gold-standard television guide interface with instant remote channel zapping." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Versatile multi-screen playback and straightforward Xtream Codes API login." },
      { name: "OTT Navigator", slug: "ott-navigator", reason: "Power-user decoder engine with customizable picture-in-picture modes." },
    ],
    installationMethod: "Sideloading via official Downloader application (Amazon Appstore)",
    setupSteps: [
      {
        step: 1,
        title: "Install Downloader from Amazon Appstore",
        instruction: "From the Fire TV home screen, navigate to Find > Search, type 'Downloader', select the orange Downloader icon by AFTVnews, and click Get / Download.",
      },
      {
        step: 2,
        title: "Enable Developer Options & Unknown Apps",
        instruction: "Go to Fire TV Settings > My Fire TV > About. Highlight your device name and click the Select remote button 7 times until you see 'No need, you are already a developer'. Press back, open Developer Options, select 'Install unknown apps', and toggle Downloader to ON.",
      },
      {
        step: 3,
        title: "Download & Install Your Preferred IPTV Player",
        instruction: "Launch Downloader, enter the direct download code for TiviMate or IPTV Smarters Pro, press Go, wait for the APK to download, and click Install.",
      },
      {
        step: 4,
        title: "Connect Your Teleview IPTV Subscription",
        instruction: "Launch the installed player, select 'Add Playlist' > 'Xtream Codes API', enter the Server URL, Username, and Password provided in your Teleview welcome email, and click Connect.",
      },
    ],
    strengths: [
      "Hardware video decoding with native 60 FPS sports broadcast playback",
      "Full compatibility with TiviMate, the highest-rated TV guide interface",
      "Affordable hardware cost with frequent software security updates from Amazon",
      "Bluetooth remote with dedicated volume, power, and voice controls",
    ],
    limitations: [
      "Requires manual developer options toggle to install third-party player APKs",
      "Base 8 GB storage fills up quickly if too many streaming apps are installed",
      "Fire OS home screen features sponsored content and video trailers",
    ],
    troubleshooting: [
      {
        issue: "App crashes or reloads when parsing large channel playlists",
        cause: "Low available RAM or insufficient flash storage cache on Fire TV stick.",
        solution: "Navigate to Fire TV Settings > Applications > Manage Installed Applications, select your player, and click 'Clear Cache'. Restart the Fire TV stick.",
      },
      {
        issue: "Buffering during marquee live football or UFC matches",
        cause: "ISP bandwidth throttling or 2.4 GHz Wi-Fi signal interference.",
        solution: "Connect your Fire TV to the 5 GHz Wi-Fi frequency band or install a reliable VPN application directly from the Amazon Appstore to bypass ISP traffic shaping.",
      },
    ],
    faqs: [
      {
        question: "Can I use Teleview on an older Fire TV Stick (2nd Gen)?",
        answer: "While older 2nd Gen Firesticks can stream standard definition and 720p HD feeds, we strongly recommend a Fire TV Stick 4K, 4K Max, or Fire TV Cube for reliable 1080p 60 FPS and 4K UHD streaming without hardware overheating or frame drops.",
      },
      {
        question: "Do I need an Amazon Prime membership to stream IPTV on Firestick?",
        answer: "No. You only need a standard free Amazon account to register the device and access the Amazon Appstore to download the Downloader utility.",
      },
    ],
  },
  {
    slug: "samsung-smart-tv",
    name: "Samsung Smart TV",
    category: "Smart Television (Tizen OS)",
    tagline: "Native IPTV configuration guide for Samsung Tizen OS Smart TVs without external hardware.",
    heroAnswer:
      "Samsung Smart TVs running Tizen OS can stream Teleview IPTV directly through native applications available in the Samsung Smart Hub store, including IBO Player and SmartOne IPTV. Because Tizen OS is a proprietary closed environment, playlists are activated by uploading your Teleview credentials via an online web management portal using your TV's unique MAC address and Device Key.",
    operatingSystem: "Samsung Tizen OS (2018–2026 models)",
    minRamRecommended: "Integrated TV SoC memory (sufficient for native Tizen rendering)",
    storageRequirement: "50 MB available internal TV flash storage",
    videoDecoders: ["HEVC / H.265 (4K UHD)", "AVC / H.264", "VP9"],
    recommendedPlayers: [
      { name: "IBO Player", slug: "ibo-player", reason: "Top-rated native Tizen player with fast channel switching and zero sideloading." },
      { name: "SmartOne IPTV", slug: "smartone", reason: "Dual-playlist support with easy number keypad channel navigation." },
    ],
    installationMethod: "Native installation via Samsung Smart Hub App Store + Web Portal Activation",
    setupSteps: [
      {
        step: 1,
        title: "Install IBO Player or SmartOne from Samsung Apps",
        instruction: "Press the Home button on your Samsung remote, open Samsung Smart Hub > Apps, search for 'IBO Player' or 'SmartOne IPTV', and click Install.",
      },
      {
        step: 2,
        title: "Record Device MAC Address and Device Key",
        instruction: "Open the installed application on your TV. The welcome screen will display your Device MAC Address (e.g. 00:1A:79:XX:XX:XX) and a 6-digit Device Key.",
      },
      {
        step: 3,
        title: "Upload Teleview Credentials via Web Management Portal",
        instruction: "On your smartphone or computer browser, visit the player's web management portal (iboplayer.com/manage or smartone-iptv.com/plugin/smart_one/main_generate), log in with your TV MAC and Key, and add your Teleview M3U link or Xtream API credentials.",
      },
      {
        step: 4,
        title: "Reload Channels on Your Samsung TV",
        instruction: "Return to your TV screen and press 'Reload' or restart the app. Your Teleview channels, sports categories, and on-demand movies will immediately populate.",
      },
    ],
    strengths: [
      "Zero extra cables, dongles, or secondary remotes required",
      "Direct integration with Samsung One Remote television controls",
      "Native 4K Ultra HD panel resolution rendering",
      "Simple installation directly from the official Samsung TV App Store",
    ],
    limitations: [
      "Tizen OS cannot install Android APKs; TiviMate is not available natively",
      "Player apps (like IBO Player or SmartOne) charge a modest one-time activation fee after a 7-day trial",
      "EPG schedule updates depend on the TV processor speed",
    ],
    troubleshooting: [
      {
        issue: "Player displays 'Playlist Load Error' or black screen on channels",
        cause: "M3U playlist payload too large for TV memory or DNS lookup failure.",
        solution: "Configure your connection using Xtream Codes API rather than raw M3U, and set your Samsung TV DNS setting to 8.8.8.8 (Google DNS) in TV Network Settings.",
      },
      {
        issue: "Audio plays but screen is black",
        cause: "Video stream encoded in an audio/video container not supported by older Tizen versions.",
        solution: "In the player settings on your TV, toggle the video decoder engine from 'Auto' to 'Hardware' or 'Native Media Player'.",
      },
    ],
    faqs: [
      {
        question: "Can I install TiviMate on my Samsung Smart TV?",
        answer: "No. TiviMate is exclusively engineered for Android TV and Fire OS devices. For Samsung Smart TVs, IBO Player and SmartOne IPTV offer the closest high-performance TV guide experience.",
      },
      {
        question: "Do I have to pay for IBO Player on Samsung TV?",
        answer: "IBO Player provides a 7-day free trial on Samsung TVs, after which the developer requires a one-time activation fee of approximately €8. Teleview provides the subscription credentials; the player license is independent.",
      },
    ],
  },
  {
    slug: "lg-smart-tv",
    name: "LG Smart TV",
    category: "Smart Television (webOS)",
    tagline: "Step-by-step setup guide for LG OLED, QNED, and NanoCell Smart TVs running webOS.",
    heroAnswer:
      "LG Smart TVs equipped with webOS provide exceptional picture quality for Teleview 4K live sports and entertainment. Subscribers can install verified media players such as IBO Player, SmartOne IPTV, or IPTV Smarters Pro directly from the LG Content Store, connecting their subscription with zero sideloading or external hardware required.",
    operatingSystem: "LG webOS (3.0 through webOS 24/25)",
    minRamRecommended: "Integrated LG α7 / α9 / α11 AI processor SoC",
    storageRequirement: "60 MB available internal TV flash memory",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS HDR10/Dolby Vision)", "AVC / H.264", "VP9", "AV1 (2020+ models)"],
    recommendedPlayers: [
      { name: "IBO Player", slug: "ibo-player", reason: "Smooth webOS pointer remote integration and fast category switching." },
      { name: "SmartOne IPTV", slug: "smartone", reason: "Native LG Content Store app with excellent M3U and Xtream support." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Traditional multi-screen and VOD interface for LG webOS." },
    ],
    installationMethod: "Native installation via LG Content Store / Apps + Web Portal Activation",
    setupSteps: [
      {
        step: 1,
        title: "Download App from LG Content Store",
        instruction: "Press the Home button on your LG Magic Remote, navigate to Apps / LG Content Store, search for 'IBO Player' or 'SmartOne IPTV', and select Install.",
      },
      {
        step: 2,
        title: "Locate MAC Address and Device Key",
        instruction: "Launch the installed app. Take note of the Device MAC Address and Device Key shown on your LG screen.",
      },
      {
        step: 3,
        title: "Sync Your Teleview Playlist Online",
        instruction: "Open a web browser on your phone or PC, access the player upload portal, enter your LG TV credentials, paste your Teleview M3U link or Xtream server details, and save.",
      },
      {
        step: 4,
        title: "Refresh App on LG TV",
        instruction: "Restart or refresh the application on your LG TV. Channel groups and EPG guides will synchronize automatically.",
      },
    ],
    strengths: [
      "Stunning color reproduction and contrast on LG OLED and QNED displays",
      "Full support for LG Magic Remote air-mouse pointer navigation",
      "Dolby Vision and Dolby Atmos pass-through for premium sports audio",
      "No external cables, power bricks, or streaming sticks required",
    ],
    limitations: [
      "webOS does not run Android APK files; sideloading Android apps is impossible",
      "Third-party player apps require separate developer license activation after trial",
      "Older webOS versions (pre-webOS 4.0) have limited RAM for very large channel lists",
    ],
    troubleshooting: [
      {
        issue: "Streams freeze after 10-15 seconds on LG TV",
        cause: "IPv6 network routing conflicts or TV energy saving sleep modes.",
        solution: "Go to LG TV Settings > Network > Wi-Fi Connection > Advanced Settings, toggle IPv6 to OFF, and set DNS to 1.1.1.1 or 8.8.8.8.",
      },
      {
        issue: "Audio is out of synchronization with live video",
        cause: "Internal TV audio processing latency or soundbar HDMI eARC delay.",
        solution: "In LG TV Sound Settings, navigate to Advanced Settings > Match Screen and Sound (AV Sync) and adjust slider by -10ms to -20ms.",
      },
    ],
    faqs: [
      {
        question: "Can I use LG Magic Remote pointer to change IPTV channels?",
        answer: "Yes. Both IBO Player and SmartOne IPTV on webOS fully support the LG Magic Remote gyro pointer, enabling quick scrolling and point-and-click channel selection.",
      },
      {
        question: "Is IPTV Smarters available on LG Content Store?",
        answer: "Yes, IPTV Smarters Pro is available directly in the LG Content Store across most regions for webOS 3.0 and newer.",
      },
    ],
  },
  {
    slug: "android-tv",
    name: "Android TV Box",
    category: "Dedicated Streaming Set-Top Box",
    tagline: "Comprehensive configuration guide for Nvidia Shield, Xiaomi Mi Box, Mecool, and certified Android TV boxes.",
    heroAnswer:
      "Android TV represents the premier ecosystem for dedicated IPTV viewing. With access to the Google Play Store and full support for hardware sideloading, certified Android TV boxes (such as the Nvidia Shield TV Pro and Xiaomi Mi Box S) run premier television interfaces like TiviMate and OTT Navigator with gigabit Ethernet stability and hardware-accelerated 4K 60 FPS decoding.",
    operatingSystem: "Android TV OS (Android 9.0 through 14.0)",
    minRamRecommended: "2.0 GB minimum (3.0 GB recommended for Nvidia Shield TV Pro)",
    storageRequirement: "2.0 GB available storage for offline EPG database caching",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS HDR10)", "AVC / H.264", "VP9 Profile 2", "AV1"],
    recommendedPlayers: [
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "The gold-standard television interface with multi-view, recording, and instant EPG." },
      { name: "OTT Navigator", slug: "ott-navigator", reason: "Advanced hardware decoder selection, studio mode, and multiple provider merging." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Standard reliable player with multi-screen and catch-up TV support." },
    ],
    installationMethod: "Direct Google Play Store download or sideloading via Downloader",
    setupSteps: [
      {
        step: 1,
        title: "Install TiviMate from Google Play Store",
        instruction: "Open the Google Play Store on your Android TV device, search for 'TiviMate IPTV Player', and click Install.",
      },
      {
        step: 2,
        title: "Launch TiviMate and Add Playlist",
        instruction: "Open TiviMate, select 'Add Playlist', and choose 'Xtream Codes API' for optimal database organization.",
      },
      {
        step: 3,
        title: "Enter Teleview Server Details",
        instruction: "Input the Server URL, Username, and Password provided in your subscription email. Check 'Include VOD' to load on-demand movies.",
      },
      {
        step: 4,
        title: "Sync Channels and EPG Schedule",
        instruction: "Click 'Done'. TiviMate will download your channel database, map EPG program data, and display your interactive television guide.",
      },
    ],
    strengths: [
      "Native Google Play Store access with automatic background app updates",
      "Full compatibility with TiviMate Premium multi-screen viewing (up to 4 screens)",
      "Gigabit Ethernet ports on premium models for zero-jitter wired streaming",
      "AI video upscaling on Nvidia Shield hardware",
    ],
    limitations: [
      "Generic non-certified Android boxes ('Chinese boxes') often run phone Android OS with poor remote controls",
      "Premium devices like Nvidia Shield require higher initial investment than basic sticks",
    ],
    troubleshooting: [
      {
        issue: "Remote directional arrow navigation behaves like a mouse pointer",
        cause: "Device is running a mobile phone version of Android rather than certified Android TV OS.",
        solution: "Install an Android TV launcher or use players with mouse-mode compatibility like IPTV Smarters Pro.",
      },
      {
        issue: "EPG displays 'No Information' for channels",
        cause: "Time zone discrepancy between Android TV box clock and EPG source.",
        solution: "Go to Android TV Settings > Device Preferences > Date & Time and enable 'Use network-provided time'.",
      },
    ],
    faqs: [
      {
        question: "Why is the Nvidia Shield TV considered the best IPTV device?",
        answer: "The Nvidia Shield TV features the Tegra X1+ processor, 3GB RAM, gigabit Ethernet, hardware AI video upscaling to enhance 720p/1080p feeds to near-4K, and flawless support for TiviMate 4-channel multi-view.",
      },
      {
        question: "Can I record live IPTV streams on Android TV?",
        answer: "Yes. Using TiviMate Premium on an Android TV box with attached USB storage or network-attached storage (SMB), you can schedule and record live television broadcasts seamlessly.",
      },
    ],
  },
  {
    slug: "apple-tv",
    name: "Apple TV 4K",
    category: "Streaming Media Player (tvOS)",
    tagline: "High-performance IPTV streaming on Apple TV 4K, Apple TV HD, iPhone, and iPad.",
    heroAnswer:
      "Apple TV 4K delivers the smoothest 60 FPS video rendering and cleanest user interface in the streaming industry powered by Apple A-series silicon. By utilizing tvOS App Store applications like GSE Smart IPTV, IPTV Smarters Lite, or Snappier, subscribers enjoy fluid EPG navigation, instant channel zapping, and seamless AirPlay integration from Apple devices.",
    operatingSystem: "Apple tvOS (tvOS 15 through tvOS 18+)",
    minRamRecommended: "Apple TV 4K (A12, A15 Bionic SoC with 3GB to 4GB unified RAM)",
    storageRequirement: "100 MB available flash storage",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS Dolby Vision / HDR10+)", "AVC / H.264", "AV1 (3rd Gen Apple TV 4K)"],
    recommendedPlayers: [
      { name: "GSE Smart IPTV", slug: "gse-smart-iptv", reason: "Advanced M3U and XMLTV EPG parser with local web server upload support." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Listed as 'Smarters Player Lite' in Apple App Store for simple Xtream login." },
      { name: "VLC Media Player", slug: "vlc", reason: "Free open-source player for testing raw M3U streaming links on Apple TV." },
    ],
    installationMethod: "Direct download from official Apple tvOS App Store",
    setupSteps: [
      {
        step: 1,
        title: "Open App Store on Apple TV",
        instruction: "Navigate to the App Store on your Apple TV home screen, search for 'GSE Smart IPTV' or 'Smarters Player Lite', and install.",
      },
      {
        step: 2,
        title: "Select Playlist Input Method",
        instruction: "Open the player, select 'Remote Playlists' or 'Add User (Xtream API)'.",
      },
      {
        step: 3,
        title: "Enter Subscription Credentials",
        instruction: "Input your Teleview Server URL, Username, and Password (or paste your M3U link using the Apple TV Remote app on your iPhone for effortless typing).",
      },
      {
        step: 4,
        title: "Save and Start Streaming",
        instruction: "Click Add/Save. Channel lists, categories, and program schedules will synchronize with fluid 60 FPS animations.",
      },
    ],
    strengths: [
      "Industry-leading Apple A-series processor speed with zero interface lag or dropped frames",
      "Seamless Apple ecosystem integration (AirPlay, iPhone keyboard typing, spatial audio)",
      "Ad-free tvOS home screen with zero clutter or sponsored app banners",
      "Automatic framerate and dynamic range matching (24p, 50Hz, 60Hz)",
    ],
    limitations: [
      "Apple strict App Store policies prevent TiviMate from releasing a tvOS version",
      "Cannot sideload raw Android APK files",
      "Higher hardware retail price point than basic HDMI streaming sticks",
    ],
    troubleshooting: [
      {
        issue: "Typing long M3U URLs is tedious with Apple TV remote",
        cause: "On-screen virtual keyboard navigation with Siri Remote.",
        solution: "Use the Apple TV Remote widget on your iPhone or iPad to copy and paste credentials directly from your email to your TV.",
      },
      {
        issue: "Certain video streams show audio but blank screen on Apple TV",
        cause: "Stream encoded in an MPEG-TS container that native tvOS AVPlayer doesn't support natively.",
        solution: "In GSE Smart IPTV or Smarters settings, toggle player engine from 'AVPlayer (Native)' to 'VLC Player Engine' or 'KSPlayer'.",
      },
    ],
    faqs: [
      {
        question: "Can I get TiviMate on Apple TV?",
        answer: "No. TiviMate is compiled exclusively for Android. For Apple TV, Snappier, GSE Smart IPTV, and Smarters Player Lite provide excellent tvOS native alternatives.",
      },
      {
        question: "Does Teleview support Apple AirPlay from an iPhone to TV?",
        answer: "Yes. You can stream channels on your iPhone using GSE Smart IPTV or VLC and instantly cast video to your Apple TV or AirPlay-compatible smart television.",
      },
    ],
  },
  {
    slug: "roku",
    name: "Roku Streaming Stick & TV",
    category: "Streaming Media Player (Roku OS)",
    tagline: "Understanding IPTV options, limitations, and screen mirroring workarounds for Roku devices.",
    heroAnswer:
      "Roku operates on a proprietary, sandboxed Roku OS environment that does not permit sideloading Android APKs and enforces strict restrictions on standalone IPTV player apps in the Roku Channel Store. The most reliable method to enjoy Teleview IPTV on a Roku TV or streaming stick is through AirPlay from an Apple device or Smart View / screen casting from an Android smartphone or tablet.",
    operatingSystem: "Roku OS (Proprietary closed platform)",
    minRamRecommended: "Roku Streaming Stick 4K or Roku Ultra recommended for 4K video casting",
    storageRequirement: "Not applicable (streaming relies on casting or web cast players)",
    videoDecoders: ["HEVC / H.265", "AVC / H.264", "VP9"],
    recommendedPlayers: [
      { name: "Web Video Caster", slug: "vlc", reason: "Cast web streams directly from Android/iOS phone browser to Roku receiver channel." },
      { name: "IPTV Smarters Pro (Mobile)", slug: "iptv-smarters-pro", reason: "Stream on phone and broadcast screen to Roku via Apple AirPlay or Smart View." },
    ],
    installationMethod: "Screen Mirroring / AirPlay from mobile device or Web Video Caster app",
    setupSteps: [
      {
        step: 1,
        title: "Enable Screen Mirroring / AirPlay on Roku",
        instruction: "On your Roku, go to Settings > Apple AirPlay and HomeKit (enable AirPlay) or Settings > System > Screen Mirroring (set to 'Always allow' or 'Prompt').",
      },
      {
        step: 2,
        title: "Install IPTV App on Your Smartphone or Tablet",
        instruction: "Install IPTV Smarters Pro or GSE Smart IPTV on your iPhone, iPad, or Android smartphone.",
      },
      {
        step: 3,
        title: "Configure Your Teleview Subscription",
        instruction: "Log in with your Teleview Xtream Codes API credentials and start playing any live sports or entertainment channel.",
      },
      {
        step: 4,
        title: "Cast Video to Your Roku Screen",
        instruction: "Tap the AirPlay or Cast icon on your video player screen, select your Roku device name, and the stream will broadcast in full resolution on your TV.",
      },
    ],
    strengths: [
      "User-friendly simple interface on Roku hardware and Roku TVs",
      "Seamless wireless reception via Apple AirPlay 2 on modern Roku models",
      "Budget-friendly hardware available everywhere",
    ],
    limitations: [
      "No native TiviMate or dedicated standalone IPTV player in Roku Channel Store",
      "Cannot install APK files or sideload custom software",
      "Requires keeping your mobile phone connected to Wi-Fi while casting",
    ],
    troubleshooting: [
      {
        issue: "Roku does not appear in AirPlay or screen cast device list",
        cause: "Roku and mobile phone are connected to different Wi-Fi bands or guest networks.",
        solution: "Ensure both devices are on the exact same local Wi-Fi network and disable AP isolation on your router.",
      },
      {
        issue: "Cast stream suffers from micro-stuttering on TV",
        cause: "Phone screen mirroring overhead on weak 2.4 GHz wireless connection.",
        solution: "Use the 'Web Video Caster' app rather than whole-screen mirroring; this sends the raw video stream URL directly to Roku hardware for decoding.",
      },
    ],
    faqs: [
      {
        question: "Can I install TiviMate directly on Roku?",
        answer: "No. Roku OS is written in BrightScript and is entirely incompatible with Android applications. To use TiviMate natively, we recommend purchasing an inexpensive Fire TV Stick 4K.",
      },
      {
        question: "Is buying a Firestick better than casting to Roku for IPTV?",
        answer: "Yes. For a dedicated television experience with remote control channel surfing and full EPG guides, adding an Amazon Firestick or Android box to your Roku TV's HDMI port is the optimal solution.",
      },
    ],
  },
  {
    slug: "google-tv",
    name: "Google TV & Chromecast",
    category: "Streaming Media Player (Google TV)",
    tagline: "Setup guide for Chromecast with Google TV, Hisense, TCL, and Sony Google TVs.",
    heroAnswer:
      "Google TV combines Google's personalized content curation with the open flexibility of the Android TV OS. Using Chromecast with Google TV or integrated Google TVs from Sony, TCL, and Hisense, subscribers can download IPTV players directly from the Google Play Store or enable Developer Options to sideload TiviMate and OTT Navigator with comprehensive voice search and 4K HDR support.",
    operatingSystem: "Google TV (Android 10, 12, 14)",
    minRamRecommended: "2.0 GB (Chromecast with Google TV 4K)",
    storageRequirement: "1.5 GB available internal storage",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS)", "AVC / H.264", "VP9", "AV1 (Chromecast 4K / HD)"],
    recommendedPlayers: [
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "Supreme television interface with native Google TV remote integration." },
      { name: "IPTV Smarters Pro", slug: "iptv-smarters-pro", reason: "Straightforward configuration with reliable multi-screen viewing." },
      { name: "OTT Navigator", slug: "ott-navigator", reason: "Exceptional hardware video decoder options for complex sports streams." },
    ],
    installationMethod: "Google Play Store or Sideloading via Downloader",
    setupSteps: [
      {
        step: 1,
        title: "Enable Developer Mode on Google TV",
        instruction: "Go to Settings > System > About. Scroll down to 'Android TV OS build' and click the center remote button 7 times until 'You are now a developer' appears.",
      },
      {
        step: 2,
        title: "Install Downloader from Google Play Store",
        instruction: "Use voice search or the Search tab to find 'Downloader by AFTVnews' and install it from the Play Store.",
      },
      {
        step: 3,
        title: "Authorize Unknown Apps for Downloader",
        instruction: "Navigate to Settings > Apps > Security & Restrictions > Unknown sources, and toggle Downloader to Allowed.",
      },
      {
        step: 4,
        title: "Install Player and Connect Teleview",
        instruction: "Open Downloader, input your desired player code, install the app, and connect using your Teleview Xtream Codes API credentials.",
      },
    ],
    strengths: [
      "Access to the vast Google Play Store and full Android TV app ecosystem",
      "Native AV1 hardware video decoding on Chromecast 4K and Google TV Streamer",
      "Google Assistant voice search integration directly on remote",
      "Compact dongle form factor powered via USB-C",
    ],
    limitations: [
      "Standard Chromecast with Google TV features only 4.4 GB of usable internal storage",
      "Requires USB-C hub with Power Delivery if you wish to attach external USB flash drives",
    ],
    troubleshooting: [
      {
        issue: "Storage Full alert appears when installing apps or caching EPG",
        cause: "Accumulated app cache and Google TV ambient screensaver cache.",
        solution: "Go to Settings > System > Storage > Internal shared storage > Cached data, and select 'Clear cached data'.",
      },
      {
        issue: "Stream freezes or disconnects intermittently",
        cause: "Weak Wi-Fi connection behind television chassis.",
        solution: "Use an official Google Ethernet power adapter or connect to the 5 GHz Wi-Fi band on your router.",
      },
    ],
    faqs: [
      {
        question: "Does TiviMate work on Chromecast with Google TV?",
        answer: "Yes, flawlessly. TiviMate runs natively on Chromecast with Google TV with complete 4K 60 FPS sports playback and full remote control support.",
      },
      {
        question: "Can I cast IPTV from my phone to Google TV?",
        answer: "Yes. Chromecast with Google TV has built-in Google Cast, enabling you to stream from any mobile IPTV app directly to your TV.",
      },
    ],
  },
  {
    slug: "formuler",
    name: "Formuler Z-Series",
    category: "Specialized IPTV Set-Top Box",
    tagline: "Ultimate setup guide for Formuler Z11 Pro Max, Z10 Pro, and Z8 running MYTVOnline 2 & 3.",
    heroAnswer:
      "Formuler Z-Series boxes (including the flagship Z11 Pro Max and Z10 Pro) are purpose-built hardware appliances engineered specifically for high-end IPTV subscribers. Featuring the exclusive MYTVOnline3 (MOL3) client application, Formuler delivers unmatched television channel switching speeds, integrated multi-provider portal management, hardware timeshifting, and true PVR recording via USB or NAS.",
    operatingSystem: "Android OS with proprietary MYTVOnline (MOL2/MOL3) middleware",
    minRamRecommended: "4 GB DDR4 RAM (Z11 Pro Max) / 2 GB (Z10 Pro)",
    storageRequirement: "32 GB internal flash storage + USB 3.0 external storage support",
    videoDecoders: ["HEVC / H.265 (4K 60 FPS HDR10+)", "Realtek RTD1319 / Amlogic SoC", "AV1", "VP9"],
    recommendedPlayers: [
      { name: "MYTVOnline 3 (MOL3)", slug: "tivimate", reason: "Built-in proprietary IPTV interface with universal search, recording, and multi-portal aggregation." },
      { name: "TiviMate IPTV Player", slug: "tivimate", reason: "Alternative Android TV player compatible with Formuler Android subsystem." },
    ],
    installationMethod: "Pre-installed native MYTVOnline application",
    setupSteps: [
      {
        step: 1,
        title: "Launch MYTVOnline Application",
        instruction: "Power on your Formuler box and launch the pre-installed MYTVOnline (MOL2 or MOL3) application from the main menu.",
      },
      {
        step: 2,
        title: "Add Connection Portal",
        instruction: "Select Menu > Connections > Add Portal (or Xtream API / M3U depending on your preference).",
      },
      {
        step: 3,
        title: "Enter Portal URL and Credentials",
        instruction: "Enter 'Teleview' as the Nickname, input the Server URL, Username, and Password from your welcome email. (If using MAG/MAC portal authentication, register your Formuler MAC address starting with 00:1E:B8 with Teleview support).",
      },
      {
        step: 4,
        title: "Connect and Download Channel Lineup",
        instruction: "Click Connect. MYTVOnline will populate your groups, live EPG, VOD movie posters, and series episodes instantly.",
      },
    ],
    strengths: [
      "Proprietary MYTVOnline3 (MOL3) client is considered the fastest IPTV software in existence",
      "Dedicated infrared/Bluetooth remote with numeric keypad and PVR recording buttons",
      "Gigabit LAN port and high-gain Wi-Fi antennas for maximum throughput",
      "Full hardware timeshifting, pause, rewind, and scheduled live TV recording",
    ],
    limitations: [
      "Higher hardware acquisition cost than consumer streaming sticks",
      "MYTVOnline software is proprietary and cannot be installed on other brands of hardware",
    ],
    troubleshooting: [
      {
        issue: "Error 'ID: 10' or 'Connection Failed' in MYTVOnline",
        cause: "Server URL typo or MAG/MAC address not registered on provider server.",
        solution: "Verify your server URL syntax in connection settings or contact Teleview WhatsApp support to verify line activation.",
      },
      {
        issue: "EPG schedule shows incorrect program times",
        cause: "EPG timezone offset mismatch.",
        solution: "In MYTVOnline Settings > EPG, adjust the EPG Time Offset to match your local timezone.",
      },
    ],
    faqs: [
      {
        question: "Why should I buy a Formuler box instead of a Firestick?",
        answer: "Formuler boxes are dedicated appliances built solely for television viewing. You get an ergonomic full-sized remote with number keys, instant channel tuning under 0.5 seconds, and full PVR USB recording capabilities without needing to configure complex third-party apps.",
      },
      {
        question: "Can I use Xtream Codes API on Formuler MYTVOnline?",
        answer: "Yes. MYTVOnline 2 and 3 natively support Xtream Codes API, M3U playlists, and MAC/Portal Stalker middleware logins.",
      },
    ],
  },
];
