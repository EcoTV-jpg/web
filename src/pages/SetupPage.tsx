import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Smartphone,
  Tv,
  Laptop,
  Info,
  Key,
  FileCode,
  Search,
  Download,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Wifi,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  HardDrive,
  Sliders,
  Settings,
  RefreshCw,
} from "lucide-react";
import { siteConfig } from "../config/site";
import StepConnector from "../components/setup/StepConnector";
import SetupStepCard from "../components/setup/SetupStepCard";

export default function SetupPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Setup & Installation", url: "/setup" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header (Single H1) */}
          <Reveal>
            <h1 className="t-display text-balance">
              IPTV Setup &amp; <Accent>Installation Guide</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[760px] text-silver-mist">
              Step-by-step technical installation instructions for Teleview IPTV subscribers. Follow our verified visual
              workflows to configure Xtream Codes API or M3U playlist credentials on Amazon Fire TV Stick, Samsung and LG
              Smart TVs, Android TV boxes, Apple devices, and MAG receivers.
            </p>

            {/* Content Review Component (Backed by real company information) */}
            <div className="mt-6 rounded-xl border border-charcoal bg-ash/50 p-4 sm:p-5 text-xs text-silver-mist">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal/60 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-snow">
                    Technically reviewed by the Teleview Technical Operations Team
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-smoke font-mono text-[11px]">
                  <Clock className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  <span>Last Reviewed: <strong className="text-silver-mist">September 2026</strong></span>
                </div>
              </div>
              <div className="mt-3 grid gap-2.5 text-[11px] leading-relaxed text-silver-mist sm:grid-cols-2">
                <div>
                  <span className="text-smoke font-medium">Platforms Verified: </span>
                  <span>Amazon Fire OS 7/8, Android TV 12–14, Apple tvOS 17/18, Samsung Tizen 6+, LG webOS 24, Infomir MAG 524.</span>
                </div>
                <div>
                  <span className="text-smoke font-medium">Protocols Audited: </span>
                  <span>Xtream Codes API v2 server endpoints, M3U8 playlist imports, EPG XML feeds, and hardware video decoder handshakes.</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Core Distinction: Subscription Service vs. Player Applications */}
          <Reveal delay={0.04} className="mt-8">
            <aside
              aria-label="Third-party software disclaimer and service distinction"
              className="rounded-xl border border-charcoal bg-ash/40 p-5 sm:p-6 text-xs text-silver-mist"
            >
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 size-5 shrink-0 text-phosphor-green" aria-hidden="true" />
                <div className="flex-1">
                  <h2 className="text-sm font-semibold text-snow">
                    Important Distinction: Teleview Subscription vs. Third-Party Player Applications
                  </h2>
                  <p className="mt-2 leading-relaxed">
                    <strong className="text-snow">Teleview</strong> is an independent IPTV subscription and content delivery provider.
                    We provision your secure server access credentials (Server URL, Username, Password, and M3U playlist link),
                    and maintain the high-availability video infrastructure streaming over 25,000 live channels and 120,000+ VOD titles.
                  </p>
                  <p className="mt-2 leading-relaxed">
                    IPTV player applications like <strong className="text-snow">TiviMate, IPTV Smarters Pro, IBO Player, and GSE Smart IPTV</strong>{" "}
                    are independent third-party software programs. They provide the onscreen visual interface, remote control mapping, and
                    Electronic Program Guide (EPG) layout on your TV. Application licenses, user interfaces, and software updates are managed
                    by their respective developers.
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse">
                      <thead>
                        <tr className="border-b border-charcoal bg-ash/60 text-snow">
                          <th scope="col" className="p-2.5 font-semibold">Responsibility</th>
                          <th scope="col" className="p-2.5 font-semibold">Teleview Subscription</th>
                          <th scope="col" className="p-2.5 font-semibold">Third-Party Player App</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                        <tr>
                          <th scope="row" className="p-2.5 font-medium text-snow">Channel Streams &amp; VOD</th>
                          <td className="p-2.5 text-phosphor-green">Provided &amp; Maintained by Teleview</td>
                          <td className="p-2.5">Decodes &amp; displays stream</td>
                        </tr>
                        <tr>
                          <th scope="row" className="p-2.5 font-medium text-snow">Login Credentials (Xtream/M3U)</th>
                          <td className="p-2.5 text-phosphor-green">Delivered via automated email</td>
                          <td className="p-2.5">Entered into app settings</td>
                        </tr>
                        <tr>
                          <th scope="row" className="p-2.5 font-medium text-snow">App Interface &amp; Updates</th>
                          <td className="p-2.5 text-smoke">Not applicable</td>
                          <td className="p-2.5 text-snow">Updated via official app stores</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>

          {/* Section 1: Network & Hardware Prerequisites */}
          <Reveal delay={0.06} className="mt-10">
            <div id="prerequisites" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Wifi className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">1. Network &amp; Hardware Prerequisites</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Verify that your local home network and streaming hardware meet these minimum specifications before starting:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3 font-semibold">Technical Parameter</th>
                      <th scope="col" className="p-3 font-semibold">Minimum Requirement</th>
                      <th scope="col" className="p-3 font-semibold">Recommended for 4K / 60 FPS</th>
                      <th scope="col" className="p-3 font-semibold">Diagnostic Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Download Bandwidth</th>
                      <td className="p-3 font-mono text-phosphor-green">10 Mbps</td>
                      <td className="p-3 font-mono text-phosphor-green">25 Mbps+ per active screen</td>
                      <td className="p-3">Prevents stream buffer underruns during live sports</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Wi-Fi Frequency</th>
                      <td className="p-3">2.4 GHz (Standard)</td>
                      <td className="p-3 text-snow font-medium">5 GHz Wi-Fi or Wired Ethernet</td>
                      <td className="p-3">2.4 GHz suffers RF interference leading to micro-freezing</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Free Device Storage</th>
                      <td className="p-3 font-mono">500 MB</td>
                      <td className="p-3 font-mono text-snow">1.5 GB to 2 GB free space</td>
                      <td className="p-3">Required for caching channel guide (EPG) &amp; logos</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">System Memory (RAM)</th>
                      <td className="p-3 font-mono">1 GB RAM</td>
                      <td className="p-3 font-mono text-snow">2 GB to 4 GB RAM</td>
                      <td className="p-3">Ensures responsive channel guide scrolling</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">DNS Resolver</th>
                      <td className="p-3">Default ISP DNS</td>
                      <td className="p-3 text-phosphor-green font-mono">1.1.1.1 or 8.8.8.8</td>
                      <td className="p-3">Bypasses ISP DNS lookup throttling and stream blocks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-silver-mist border-t border-charcoal/60 pt-4">
                <span>Need in-depth device comparisons or RAM ratings?</span>
                <a href="/devices" className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1">
                  Explore the Supported Devices Guide <ArrowRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Section 2: General 3-Step Setup Process */}
          <Reveal delay={0.08} className="mt-10">
            <div className="card p-6 sm:p-8">
              <h2 className="t-heading-sm">2. General 3-Step Setup Process</h2>
              <p className="t-body-sm mt-2 text-silver-mist">
                Regardless of your streaming device, setting up Teleview follows three straightforward steps:
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-phosphor-green text-xs">Step 01</span>
                    <h3 className="t-card-title mt-2 text-base">Receive Activation Email</h3>
                    <p className="t-body-sm mt-2 text-xs text-silver-mist leading-relaxed">
                      Check your email for your Teleview welcome message containing your unique Xtream Codes API details
                      (Server URL, Username, Password) and M3U playlist link.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                    Estimated Time: Instant upon order confirmation
                  </div>
                </div>

                <div className="rounded-lg border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-phosphor-green text-xs">Step 02</span>
                    <h3 className="t-card-title mt-2 text-base">Install Player App</h3>
                    <p className="t-body-sm mt-2 text-xs text-silver-mist leading-relaxed">
                      Download a compatible player application from your device official store: TiviMate for Firestick/Android,
                      IBO Player for Samsung/LG Smart TVs, or IPTV Smarters Lite for Apple iOS.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                    Estimated Time: 2 to 3 minutes
                  </div>
                </div>

                <div className="rounded-lg border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-phosphor-green text-xs">Step 03</span>
                    <h3 className="t-card-title mt-2 text-base">Enter Credentials &amp; Watch</h3>
                    <p className="t-body-sm mt-2 text-xs text-silver-mist leading-relaxed">
                      Open your player app, select Xtream Codes API (or M3U link), input your credentials, and click Add User.
                      Channels and EPG program guides synchronize within 15–30 seconds.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                    Estimated Time: 1 to 2 minutes
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Understanding Subscription Credential Formats */}
          <Reveal delay={0.1} className="mt-10">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Key className="size-6 text-phosphor-green" aria-hidden="true" />
                <h2 className="t-heading-sm">3. Understanding Subscription Credential Formats</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Upon order confirmation, Teleview sends your credentials in two standard streaming formats.
                Select the format requested by your player application:
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Format 1: Xtream Codes API */}
                <div id="xtream-codes" className="scroll-mt-20 rounded-lg border border-charcoal bg-ash/50 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-snow font-semibold text-sm">
                      <FileCode className="size-4 text-phosphor-green" aria-hidden="true" />
                      <span>Option A: Xtream Codes API (Recommended)</span>
                    </div>
                    <p className="t-body-sm mt-2 text-xs text-silver-mist leading-relaxed">
                      Recommended for modern player applications including TiviMate, IPTV Smarters Pro, and XCIPTV.
                      Automatically organizes live channels, video-on-demand categories, and EPG program schedules:
                    </p>
                    <div className="mt-3 space-y-2 rounded border border-charcoal/80 bg-obsidian/80 p-3 font-mono text-xs text-silver-mist">
                      <div>
                        <span className="text-smoke">Server URL: </span>
                        <code className="text-phosphor-green">http://YOUR_SERVER_URL:PORT</code>
                      </div>
                      <div>
                        <span className="text-smoke">Username: </span>
                        <code className="text-phosphor-green">YOUR_USERNAME</code>
                      </div>
                      <div>
                        <span className="text-smoke">Password: </span>
                        <code className="text-phosphor-green">YOUR_PASSWORD</code>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-smoke italic border-t border-charcoal/60 pt-2">
                    Note: Replace placeholder values with the exact credentials from your Teleview activation email.
                  </p>
                </div>

                {/* Format 2: M3U Playlist Link */}
                <div id="m3u" className="scroll-mt-20 rounded-lg border border-charcoal bg-ash/50 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-snow font-semibold text-sm">
                      <FileCode className="size-4 text-phosphor-green" aria-hidden="true" />
                      <span>Option B: M3U Playlist URL</span>
                    </div>
                    <p className="t-body-sm mt-2 text-xs text-silver-mist leading-relaxed">
                      Used by Smart TV activation portals (IBO Player, SmartOne IPTV, SS IPTV) and desktop media players like VLC:
                    </p>
                    <div className="mt-3 rounded border border-charcoal/80 bg-obsidian/80 p-3 font-mono text-xs text-silver-mist overflow-x-auto">
                      <span className="text-smoke block mb-1">M3U Link: </span>
                      <code className="text-phosphor-green whitespace-nowrap text-[11px]">
                        http://YOUR_SERVER_URL:PORT/get.php?username=YOUR_USERNAME&amp;password=YOUR_PASSWORD&amp;type=m3u_plus
                      </code>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-smoke italic border-t border-charcoal/60 pt-2">
                    Note: Always use the &ldquo;m3u_plus&rdquo; format to ensure full channel category grouping and logos.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Visual Step-by-Step Platform Setup Workflows */}
          <div className="mt-14 space-y-12">
            {/* Amazon Firestick Visual Workflow */}
            <article id="firestick" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal pb-4">
                <div className="flex items-center gap-3">
                  <Tv className="size-6 text-phosphor-green" />
                  <div>
                    <h2 className="t-h2 text-xl sm:text-2xl">Amazon Fire TV / Firestick Setup Guide</h2>
                    <p className="text-xs text-silver-mist mt-0.5">
                      Verified for Fire TV Stick Lite, 4K, 4K Max, Fire TV Omni, and Fire TV Cube
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-1 text-smoke font-mono">
                    Time: ~4 min
                  </span>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-1 text-phosphor-green font-medium">
                    Recommended App: TiviMate
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <strong className="text-snow">Answer-First Summary:</strong> To set up your Amazon Fire TV Stick, install the official
                <strong className="text-snow"> Downloader</strong> utility from the Amazon Appstore, use it to install a player application
                (such as TiviMate or IPTV Smarters Pro), and log in using your Teleview <strong className="text-snow">Xtream Codes API</strong> details.
              </p>

              <StepConnector
                steps={[
                  { number: "01", title: "Search Downloader", href: "#firestick-step-1" },
                  { number: "02", title: "Install App", href: "#firestick-step-2" },
                  { number: "03", title: "Enter URL", href: "#firestick-step-3" },
                  { number: "04", title: "Install Player", href: "#firestick-step-4" },
                  { number: "05", title: "Enter Credentials", href: "#firestick-step-5" },
                ]}
              />

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="firestick-step-1"
                  stepNumber="01"
                  title="Search for Downloader App in Amazon Appstore"
                  description="From your Firestick home screen, navigate to Find > Search and type 'Downloader'. Select the orange Downloader icon from the search results."
                  action="Highlight Downloader and press the Select button on your Fire TV remote."
                  tip="If this is your first time sideloading, navigate to Settings > My Fire TV > Developer Options and enable 'Install Unknown Apps' for Downloader."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-2"
                  stepNumber="02"
                  title="Install &amp; Launch Downloader"
                  description="Click 'Download' or 'Get' to install Downloader. Once installed, launch the application."
                  action="Click 'Allow' when Downloader requests permission to access photos, media, and files on your device."
                  tip="Granting storage permission is required so Downloader can save the player APK file locally."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-3"
                  stepNumber="03"
                  title="Enter Player App Downloader Code or Direct URL"
                  description="In the Downloader URL address field, enter the direct numeric code or URL for your preferred player app (e.g., TiviMate or IPTV Smarters Pro)."
                  action="Press 'Go' on your remote control to start downloading the installation file."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-4"
                  stepNumber="04"
                  title="Install Compatible Player Application"
                  description="Once the APK finishes downloading, a system dialog will appear. Click 'Install' at the bottom right corner."
                  action="After installation completes, click 'Done' and select 'Delete' on the APK file to save device storage space."
                  tip="Deleting the APK installer frees up ~80 MB of internal storage without affecting the installed app."
                  icon={<CheckCircle2 className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-5"
                  stepNumber="05"
                  title="Enter Teleview Xtream Codes Credentials"
                  description="Launch the player app and select 'Login with Xtream Codes API'. Enter your Server URL, Username, and Password exactly as provided in your Teleview activation email."
                  action="Click 'Add User' or 'Connect' to initiate channel and EPG synchronization."
                  tip="Ensure there are no accidental spaces before or after your username and password."
                  icon={<Key className="size-4" />}
                />
              </div>

              {/* Firestick Common Mistakes & Troubleshooting */}
              <div className="mt-6 rounded-lg border border-charcoal/80 bg-ash/30 p-4 text-xs text-silver-mist">
                <div className="flex items-center gap-2 font-semibold text-snow">
                  <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Firestick Common Installation Mistakes &amp; Quick Fixes</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-[11px] text-silver-mist">
                  <li>
                    <strong className="text-snow">Typing &ldquo;http://&rdquo; twice:</strong> Some player apps pre-populate &ldquo;http://&rdquo; in the Server URL field. Do not type it again.
                  </li>
                  <li>
                    <strong className="text-snow">Developer Options Missing:</strong> On newer Fire OS versions, go to Settings &gt; My Fire TV &gt; About &gt; click your device name 7 times rapidly to unlock Developer Options.
                  </li>
                  <li>
                    <strong className="text-snow">Connected to 2.4 GHz Wi-Fi:</strong> Firesticks frequently auto-connect to crowded 2.4 GHz bands. Go to Network Settings and switch to your 5 GHz Wi-Fi band.
                  </li>
                </ul>
              </div>
            </article>

            {/* Smart TV Visual Workflow */}
            <article id="smart-tv" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal pb-4">
                <div className="flex items-center gap-3">
                  <Tv className="size-6 text-phosphor-green" />
                  <div>
                    <h2 className="t-h2 text-xl sm:text-2xl">Samsung &amp; LG Smart TV Setup Guide</h2>
                    <p className="text-xs text-silver-mist mt-0.5">
                      Verified for Samsung Tizen OS (2018–2026 models) and LG webOS (webOS 4.0 to webOS 24)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-1 text-smoke font-mono">
                    Time: ~5 min
                  </span>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-1 text-phosphor-green font-medium">
                    Recommended App: IBO Player
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <strong className="text-snow">Answer-First Summary:</strong> On Samsung and LG Smart TVs, you do not need an external
                streaming stick. Install a native player app (such as <strong className="text-snow">IBO Player</strong> or{" "}
                <strong className="text-snow">SmartOne IPTV</strong>) directly from your TV app store, find the displayed MAC address,
                and upload your Teleview M3U link via the player web portal on your smartphone or computer.
              </p>

              <StepConnector
                steps={[
                  { number: "01", title: "App Store", href: "#smart-tv-step-1" },
                  { number: "02", title: "Install Player", href: "#smart-tv-step-2" },
                  { number: "03", title: "Get MAC Address", href: "#smart-tv-step-3" },
                  { number: "04", title: "Upload Playlist", href: "#smart-tv-step-4" },
                  { number: "05", title: "Watch", href: "#smart-tv-step-5" },
                ]}
              />

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="smart-tv-step-1"
                  stepNumber="01"
                  title="Open Your Smart TV Official App Store"
                  description="On Samsung TVs, open 'Samsung Apps'. On LG TVs, open the 'LG Content Store' or 'Apps' directly from your home menu."
                  action="Select the search bar within your TV app store."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-2"
                  stepNumber="02"
                  title="Search &amp; Install Supported Player Application"
                  description="Search for 'IBO Player', 'SmartOne IPTV', or 'SS IPTV'. Select the app and click 'Install'."
                  action="Once downloaded, open the application on your TV."
                  tip="IBO Player is the top-recommended application for both Samsung and LG TVs due to its fast channel switching engine."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-3"
                  stepNumber="03"
                  title="Note Your On-Screen MAC Address &amp; Device Key"
                  description="When launched for the first time, the application displays your TV unique Device MAC Address and Device Key on screen."
                  action="Keep this screen visible or take a photo of the MAC Address (e.g., 00:1A:79:XX:XX:XX)."
                  tip="Do not confuse the app-generated MAC address with your physical TV network MAC address in TV settings."
                  icon={<Info className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-4"
                  stepNumber="04"
                  title="Upload Teleview M3U Link via App Web Portal"
                  description="Open the player activation website (e.g., iboplayer.com/device) on your phone or PC. Enter your MAC address and Device Key, then paste your Teleview M3U playlist link."
                  action="Click 'Save Playlist' or 'Send'."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-5"
                  stepNumber="05"
                  title="Restart App on Your TV &amp; Start Streaming"
                  description="Return to your Smart TV, exit the app, and re-launch it (or press 'Reload Playlist' on your remote). Your complete channel catalog, categories, and VOD library will appear."
                  action="Select any channel to begin streaming."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>

              {/* Smart TV Common Mistakes & Troubleshooting */}
              <div className="mt-6 rounded-lg border border-charcoal/80 bg-ash/30 p-4 text-xs text-silver-mist">
                <div className="flex items-center gap-2 font-semibold text-snow">
                  <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Smart TV Common Installation Mistakes &amp; Quick Fixes</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-[11px] text-silver-mist">
                  <li>
                    <strong className="text-snow">App not appearing in App Store:</strong> Some older Samsung (pre-2018) and LG models have restricted regional app stores. If IBO Player is missing, search for SmartOne IPTV or Nanomid.
                  </li>
                  <li>
                    <strong className="text-snow">Channels not appearing after upload:</strong> Ensure you pressed &ldquo;Save&rdquo; on the web portal, then completely close and restart the app on your TV to reload the database.
                  </li>
                  <li>
                    <strong className="text-snow">Audio without Video:</strong> In IBO Player settings, switch the Video Player Engine from &ldquo;Standard&rdquo; to &ldquo;ExoPlayer&rdquo; or &ldquo;Hardware Decoder&rdquo;.
                  </li>
                </ul>
              </div>
            </article>

            {/* Android Phone & Box Visual Workflow */}
            <article id="android" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal pb-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-6 text-phosphor-green" />
                  <div>
                    <h2 className="t-h2 text-xl sm:text-2xl">Android TV, Nvidia Shield &amp; Phone Setup Guide</h2>
                    <p className="text-xs text-silver-mist mt-0.5">
                      Verified for Nvidia Shield TV, Chromecast with Google TV, Xiaomi Mi Box, and Android Smartphones
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-1 text-smoke font-mono">
                    Time: ~3 min
                  </span>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-1 text-phosphor-green font-medium">
                    Recommended App: TiviMate
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <strong className="text-snow">Answer-First Summary:</strong> Android devices provide the fastest installation path
                because supported players are available directly in the official Google Play Store. Simply install TiviMate or
                IPTV Smarters Pro and log in with your Xtream Codes API credentials.
              </p>

              <StepConnector
                steps={[
                  { number: "01", title: "Play Store", href: "#android-step-1" },
                  { number: "02", title: "Install Player", href: "#android-step-2" },
                  { number: "03", title: "Select Xtream API", href: "#android-step-3" },
                  { number: "04", title: "Enter Login", href: "#android-step-4" },
                ]}
              />

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="android-step-1"
                  stepNumber="01"
                  title="Open Official Google Play Store"
                  description="Launch the Google Play Store on your Android TV box, smart projector, or mobile device."
                  action="Navigate to the search field."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-2"
                  stepNumber="02"
                  title="Install TiviMate or IPTV Smarters Pro"
                  description="For television screens, install 'TiviMate IPTV Player'. For smartphones and tablets, install 'IPTV Smarters Pro'."
                  action="Click 'Install' and launch the application once complete."
                  tip="TiviMate is engineered specifically for Android TV remote navigation and features seamless channel switching."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-3"
                  stepNumber="03"
                  title="Select Xtream Codes API Login"
                  description="In the welcome setup wizard, select 'Add Playlist' and choose 'Xtream Codes API'."
                  action="Open the credential input fields."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-4"
                  stepNumber="04"
                  title="Enter Teleview Server Details &amp; Synchronize"
                  description="Enter your Server URL, Username, and Password provided by Teleview. Click 'Next' or 'Add User'."
                  action="Wait 15–30 seconds for the live channel guide, VOD titles, and EPG schedules to download."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>

              {/* Android Common Mistakes */}
              <div className="mt-6 rounded-lg border border-charcoal/80 bg-ash/30 p-4 text-xs text-silver-mist">
                <div className="flex items-center gap-2 font-semibold text-snow">
                  <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Android Common Installation Mistakes &amp; Quick Fixes</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-[11px] text-silver-mist">
                  <li>
                    <strong className="text-snow">Installing Mobile App on Android TV:</strong> Do not sideload touch-screen APKs on television boxes. Always use the TV-optimized version from the Android TV Play Store.
                  </li>
                  <li>
                    <strong className="text-snow">Low RAM Devices Crashing:</strong> On budget Android boxes with 1 GB RAM, configure TiviMate to only synchronize selected country packages rather than the entire global catalog.
                  </li>
                </ul>
              </div>
            </article>

            {/* iOS & Apple TV */}
            <article id="ios" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal pb-4">
                <div className="flex items-center gap-3">
                  <Laptop className="size-6 text-phosphor-green" />
                  <div>
                    <h2 className="t-h2 text-xl sm:text-2xl">Apple iOS &amp; Apple TV Setup Guide</h2>
                    <p className="text-xs text-silver-mist mt-0.5">
                      Verified for Apple TV 4K (tvOS 16–18), iPhone (iOS 15–18), and iPad (iPadOS)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-1 text-smoke font-mono">
                    Time: ~3 min
                  </span>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-1 text-phosphor-green font-medium">
                    Recommended App: Smarters Lite
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <strong className="text-snow">Answer-First Summary:</strong> Apple devices run certified media applications directly
                from the Apple App Store. Install <strong className="text-snow">IPTV Smarters Lite</strong> or{" "}
                <strong className="text-snow">GSE Smart IPTV</strong>, select Xtream Codes API login, and input your credentials.
              </p>

              <StepConnector
                steps={[
                  { number: "01", title: "App Store", href: "#ios-step-1" },
                  { number: "02", title: "Install GSE/Smarters", href: "#ios-step-2" },
                  { number: "03", title: "Add Credentials", href: "#ios-step-3" },
                ]}
              />

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="ios-step-1"
                  stepNumber="01"
                  title="Open Official Apple App Store"
                  description="Open the App Store on your Apple TV, iPhone, or iPad."
                  action="Search for 'IPTV Smarters Lite' or 'GSE Smart IPTV'."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="ios-step-2"
                  stepNumber="02"
                  title="Download &amp; Launch Player Application"
                  description="Click 'Get' to download the app. Allow local network permissions when requested by iOS."
                  action="Open the application."
                  tip="Granting local network access ensures the app can stream media and discover AirPlay destinations."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="ios-step-3"
                  stepNumber="03"
                  title="Enter Teleview Xtream Codes Credentials"
                  description="Select 'Login with Xtream Codes API'. Input your Server URL, Username, and Password, then click 'Add User'."
                  action="Start streaming your 4K live channels and VOD library."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>

              {/* Apple iOS/tvOS Common Mistakes */}
              <div className="mt-6 rounded-lg border border-charcoal/80 bg-ash/30 p-4 text-xs text-silver-mist">
                <div className="flex items-center gap-2 font-semibold text-snow">
                  <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Apple Devices Common Installation Mistakes &amp; Quick Fixes</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-[11px] text-silver-mist">
                  <li>
                    <strong className="text-snow">Local Network Permission Denied:</strong> If the app cannot connect to the server, go to iOS Settings &gt; Privacy &amp; Security &gt; Local Network &gt; ensure your IPTV player is toggled ON.
                  </li>
                  <li>
                    <strong className="text-snow">No Audio on 4K Streams:</strong> In Smarters Lite settings, switch Audio Output to &ldquo;Software Decoder&rdquo; or &ldquo;VLC Engine&rdquo; if streaming Dolby Digital multi-channel audio tracks.
                  </li>
                </ul>
              </div>
            </article>

            {/* MAG Receivers */}
            <article id="mag" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-charcoal pb-4">
                <div className="flex items-center gap-3">
                  <Tv className="size-6 text-phosphor-green" />
                  <div>
                    <h2 className="t-h2 text-xl sm:text-2xl">MAG Box &amp; Stalker Portal Setup Guide</h2>
                    <p className="text-xs text-silver-mist mt-0.5">
                      Verified for Infomir MAG 250, 254, 322, 420, 520, 524, and Enigma2 Linux Receivers
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-1 text-smoke font-mono">
                    Time: ~4 min
                  </span>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-1 text-phosphor-green font-medium">
                    Method: Stalker Portal
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <strong className="text-snow">Answer-First Summary:</strong> MAG boxes operate via hardware MAC address authentication.
                Provide your device MAC address (starting with <code className="text-phosphor-green">00:1A:79</code>) to Teleview support
                for provisioning, enter the Teleview Stalker Portal URL into your MAG system settings, and reboot.
              </p>

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="mag-step-1"
                  stepNumber="01"
                  title="Access MAG System Settings &amp; Server Configuration"
                  description="From the MAG inner portal or main menu, navigate to Settings > System Settings > Servers > Portals."
                  action="Select the 'Portal 1 Name' field (type 'Teleview') and navigate to the 'Portal 1 URL' field."
                  tip="Ensure your MAC address has been registered with Teleview support prior to connecting."
                  icon={<Key className="size-4" />}
                />

                <SetupStepCard
                  id="mag-step-2"
                  stepNumber="02"
                  title="Enter Portal URL, Save &amp; Reboot Device"
                  description="Type the exact Teleview Stalker Portal URL provided in your activation email. Click 'OK' or 'Save' on your remote control, return to the main menu, and select 'Reboot device'."
                  action="Allow the MAG box to reboot; it will load the Teleview Stalker interface automatically."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>

              {/* MAG Common Mistakes */}
              <div className="mt-6 rounded-lg border border-charcoal/80 bg-ash/30 p-4 text-xs text-silver-mist">
                <div className="flex items-center gap-2 font-semibold text-snow">
                  <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>MAG Box Common Installation Mistakes &amp; Quick Fixes</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-[11px] text-silver-mist">
                  <li>
                    <strong className="text-snow">&ldquo;Your STB is blocked&rdquo; message:</strong> This means your MAC address has not been registered or was typed incorrectly. Contact Teleview support with your exact 00:1A:79 MAC address.
                  </li>
                  <li>
                    <strong className="text-snow">Trailing slash typo:</strong> Do not add extra slashes or spaces at the end of the portal URL unless specifically instructed in your activation email.
                  </li>
                </ul>
              </div>
            </article>
          </div>

          {/* Universal Troubleshooting & Common Installation Mistakes */}
          <Reveal delay={0.12} className="mt-12">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">Common Installation Mistakes &amp; Universal Troubleshooting</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                If you encounter any unexpected error during setup, check these verified diagnostic solutions:
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                    &ldquo;Invalid Server URL&rdquo; or &ldquo;Authentication Failed&rdquo;
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Cause:</strong> Typo in the Server URL port number, leading/trailing whitespace, or letter case sensitivity in passwords.
                  </p>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Solution:</strong> Carefully re-type credentials. Ensure Server URL format is <code className="text-phosphor-green">http://server:port</code> without trailing slashes. Note that passwords are case-sensitive.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                    Video Screen Is Black While Audio Plays Normally
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Cause:</strong> Your player application is attempting software decoding on an HEVC/H.265 video stream.
                  </p>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Solution:</strong> In your player app settings, navigate to Video Stream / Playback and switch decoder from <em className="text-smoke">Software (SW)</em> to <strong className="text-snow">Hardware (HW)</strong> or <strong className="text-snow">ExoPlayer</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                    App Freezes or Crashes When Loading Playlist
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Cause:</strong> Device RAM exhaustion (&lt;1.5 GB memory) or less than 500 MB free internal flash storage.
                  </p>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Solution:</strong> Delete unused apps to free up at least 1.5 GB disk space. In player settings, configure category selection to only load preferred country channel packages.
                  </p>
                </div>

                <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                    Electronic Program Guide (EPG) Shows &ldquo;No Information&rdquo;
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Cause:</strong> System clock time drift, wrong timezone setting, or stale local EPG cache.
                  </p>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">Solution:</strong> Verify your streaming device system clock is set to Automatic (Network Time). In player app settings, trigger &ldquo;Clear EPG Cache&rdquo; and click &ldquo;Update EPG&rdquo;.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section: Direct Quick-Answer FAQ */}
          <Reveal delay={0.14} className="mt-12">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <HelpCircle className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">Frequently Asked Setup Questions</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Direct answers to common installation and configuration questions:
              </p>

              <div className="mt-6 space-y-4 text-xs text-silver-mist">
                <div className="rounded-lg border border-charcoal bg-ash/30 p-4">
                  <h3 className="font-semibold text-snow text-sm">Where do I find my Teleview server URL and login credentials?</h3>
                  <p className="mt-2 leading-relaxed">
                    Your credentials are sent immediately upon order completion to your registered email address. The message includes
                    your Xtream Codes Server URL, Port, Username, Password, and complete M3U playlist link. If you cannot locate it,
                    check your spam/junk folder or use the <a href="/my-account" className="text-phosphor-green hover:underline">My Account</a> self-service portal.
                  </p>
                </div>

                <div className="rounded-lg border border-charcoal bg-ash/30 p-4">
                  <h3 className="font-semibold text-snow text-sm">Can I use one subscription on multiple devices simultaneously?</h3>
                  <p className="mt-2 leading-relaxed">
                    Standard subscriptions support one active stream at a time. You may install and configure Teleview on multiple devices
                    (e.g., your living room TV and smartphone), but streaming concurrently requires a multi-connection plan upgrade.
                  </p>
                </div>

                <div className="rounded-lg border border-charcoal bg-ash/30 p-4">
                  <h3 className="font-semibold text-snow text-sm">Do I need a VPN to set up and stream Teleview?</h3>
                  <p className="mt-2 leading-relaxed">
                    Teleview operates without requiring a VPN under normal conditions. However, if your local ISP throttles streaming
                    bandwidth during live sports events or blocks third-party DNS lookups, using a verified VPN or switching to Cloudflare DNS (1.1.1.1)
                    resolves buffering immediately.
                  </p>
                </div>

                <div className="rounded-lg border border-charcoal bg-ash/30 p-4">
                  <h3 className="font-semibold text-snow text-sm">Why is Xtream Codes API recommended over a raw M3U playlist link?</h3>
                  <p className="mt-2 leading-relaxed">
                    Xtream Codes API uses structured JSON queries to fetch only the channel data you need. This dramatically reduces memory
                    consumption, updates the Electronic Program Guide automatically, supports catch-up TV, and prevents app crashes on lower-RAM streaming sticks.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/60 pt-5 text-xs text-silver-mist">
                <span>Looking for more detailed service questions?</span>
                <div className="flex gap-4">
                  <a href="/faq" className="text-phosphor-green hover:underline font-medium">
                    Read the Complete FAQ &rarr;
                  </a>
                  <a href="/help-center" className="text-phosphor-green hover:underline font-medium">
                    Visit the Knowledge Base &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Need Assistance CTA */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-phosphor-green/30">
              <h2 className="t-heading-sm">Need Help Setting Up Your Device?</h2>
              <p className="t-body-sm mt-2 max-w-[540px] mx-auto text-silver-mist">
                Our technical support desk is available 24/7 to guide you through installation, verify your account credentials,
                or assist with player configuration.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <GreenButton href="/iptv-subscription">View Subscription Plans</GreenButton>
                <GhostButton href={siteConfig.contact.emailHref}>Contact 24/7 Support</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}

