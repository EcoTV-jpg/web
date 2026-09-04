import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { ChevronRight, Smartphone, Tv, Laptop, Info, Key, FileCode, Search, Download, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/site";
import StepConnector from "../components/setup/StepConnector";
import SetupStepCard from "../components/setup/SetupStepCard";

export default function SetupPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[920px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-silver-mist">
              <li>
                <a href="/" className="hover:text-snow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" />
              </li>
              <li className="text-snow font-medium" aria-current="page">
                Setup &amp; Installation
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <Reveal>
            <h1 className="t-display text-balance">
              IPTV Setup &amp; <Accent>Installation Guide</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[680px]">
              Learn how to set up your Teleview IPTV subscription on your preferred streaming device.
              Follow our clear step-by-step visual workflows for Amazon Firestick, Smart TVs, Android, iOS, and MAG boxes.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs text-silver-mist">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-medium text-phosphor-green">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Verified for 2026 Standards
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                Technical Review: Teleview Infrastructure Operations Desk
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                Tested on Fire OS 7/8, Android TV 12+, tvOS 17+, Tizen 6+
              </span>
            </div>
          </Reveal>

          {/* Priority 0: Third-Party Software Clarity Callout */}
          <Reveal delay={0.05} className="mt-8">
            <aside
              aria-label="Third-party software disclaimer"
              className="rounded-xl border border-charcoal bg-ash/40 p-5 sm:p-6 text-xs text-silver-mist"
            >
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 size-5 shrink-0 text-phosphor-green" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-snow">Important: Subscription Credentials vs. Player Applications</h2>
                  <p className="mt-2 leading-relaxed">
                    <strong className="text-snow">Teleview</strong> is an independent IPTV subscription and streaming service provider. We deliver high-speed service credentials, live channel streams, and on-demand library access.
                  </p>
                  <p className="mt-2 leading-relaxed">
                    Media applications such as <strong className="text-snow">TiviMate, IPTV Smarters Pro, IBO Player, and GSE Smart IPTV</strong> are independent third-party player applications. Application licensing, user interfaces, app updates, and app store availability belong to their respective software developers. Always download applications from official app stores or verified developer repositories. For account activation and stream support, contact Teleview support directly.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>

          {/* Quick Steps Summary */}
          <Reveal delay={0.08} className="mt-10">
            <div className="card p-6 sm:p-8">
              <h2 className="t-heading-sm">General 3-Step Setup Process</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                  <span className="label-mono text-phosphor-green">Step 01</span>
                  <h3 className="t-card-title mt-2">Get Subscription</h3>
                  <p className="t-body-sm mt-1.5 text-xs">
                    Choose a Teleview plan and receive your M3U playlist link &amp; Xtream API details by email.
                  </p>
                </div>
                <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                  <span className="label-mono text-phosphor-green">Step 02</span>
                  <h3 className="t-card-title mt-2">Download Player App</h3>
                  <p className="t-body-sm mt-1.5 text-xs">
                    Install a compatible IPTV player such as TiviMate, IPTV Smarters Pro, or IBO Player on your device.
                  </p>
                </div>
                <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                  <span className="label-mono text-phosphor-green">Step 03</span>
                  <h3 className="t-card-title mt-2">Enter Credentials</h3>
                  <p className="t-body-sm mt-1.5 text-xs">
                    Enter your server URL, username, and password into your app to load channels and VOD instantly.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Priority 0: IPTV Credential Configuration Formats */}
          <Reveal delay={0.1} className="mt-10">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Key className="size-6 text-phosphor-green" aria-hidden="true" />
                <h2 className="t-heading-sm">Understanding Subscription Credential Formats</h2>
              </div>
              <p className="t-body-sm mt-3">
                Upon order confirmation, Teleview sends your credentials in two standard formats. Choose the format supported by your player app:
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Format 1: Xtream Codes API */}
                <div id="xtream-codes" className="scroll-mt-20 rounded-lg border border-charcoal bg-ash/50 p-5">
                  <div className="flex items-center gap-2 text-snow font-medium text-sm">
                    <FileCode className="size-4 text-phosphor-green" aria-hidden="true" />
                    <span>Option A: Xtream Codes API (Recommended)</span>
                  </div>
                  <p className="t-body-sm mt-2 text-xs text-silver-mist">
                    Most modern IPTV players (TiviMate, IPTV Smarters) ask for 3 distinct fields:
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
                  <p className="mt-2 text-[11px] text-smoke italic">
                    Example configuration — replace with the credentials provided by Teleview.
                  </p>
                </div>

                {/* Format 2: M3U Playlist Link */}
                <div id="m3u" className="scroll-mt-20 rounded-lg border border-charcoal bg-ash/50 p-5">
                  <div className="flex items-center gap-2 text-snow font-medium text-sm">
                    <FileCode className="size-4 text-phosphor-green" aria-hidden="true" />
                    <span>Option B: M3U Playlist URL</span>
                  </div>
                  <p className="t-body-sm mt-2 text-xs text-silver-mist">
                    Used by Smart TV apps (IBO Player, SmartOne) and VLC Media Player:
                  </p>
                  <div className="mt-3 rounded border border-charcoal/80 bg-obsidian/80 p-3 font-mono text-xs text-silver-mist overflow-x-auto">
                    <span className="text-smoke">M3U Link: </span>
                    <code className="text-phosphor-green whitespace-nowrap">
                      http://YOUR_SERVER_URL:PORT/get.php?username=YOUR_USERNAME&amp;password=YOUR_PASSWORD&amp;type=m3u_plus
                    </code>
                  </div>
                  <p className="mt-2 text-[11px] text-smoke italic">
                    Example configuration — replace with the credentials provided by Teleview.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Visual Step-by-Step Platform Setup Workflows */}
          <div className="mt-14 space-y-12">
            {/* Amazon Firestick Visual Workflow */}
            <article id="firestick" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-charcoal pb-4">
                <Tv className="size-6 text-phosphor-green" />
                <div>
                  <h2 className="t-h2 text-xl sm:text-2xl">Amazon Fire TV / Firestick Setup</h2>
                  <p className="text-xs text-silver-mist mt-0.5">Visual 5-step workflow for Firestick Lite, 4K, 4K Max, and Cube</p>
                </div>
              </div>

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
                  title="Search for Downloader App"
                  description="From the Firestick home screen, navigate to Find > Search and search for 'Downloader'."
                  action="Highlight Downloader from the search results list."
                  tip="Enable 'Apps from Unknown Sources' in My Fire TV Settings if installing third-party APKs."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-2"
                  stepNumber="02"
                  title="Install &amp; Launch Downloader"
                  description="Click Download or Get to install Downloader, then open the application."
                  action="Grant storage access permissions when prompted."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-3"
                  stepNumber="03"
                  title="Enter App Code or APK URL"
                  description="In the Downloader URL field, type the direct code or URL for your preferred player app (TiviMate or IPTV Smarters Pro)."
                  action="Press Go to initiate the APK download."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-4"
                  stepNumber="04"
                  title="Install Compatible Player Application"
                  description="Once the APK file finishes downloading, click Install and launch the player app."
                  action="Open the newly installed player app."
                  icon={<CheckCircle2 className="size-4" />}
                />

                <SetupStepCard
                  id="firestick-step-5"
                  stepNumber="05"
                  title="Enter Teleview Subscription Credentials"
                  description="Select Xtream Codes API inside the player app. Enter your Teleview Server URL, Username, and Password sent to your email."
                  action="Click Add User or Login to load live channels and VOD."
                  icon={<Key className="size-4" />}
                />
              </div>
            </article>

            {/* Smart TV Visual Workflow */}
            <article id="smart-tv" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-charcoal pb-4">
                <Tv className="size-6 text-phosphor-green" />
                <div>
                  <h2 className="t-h2 text-xl sm:text-2xl">Samsung &amp; LG Smart TV Setup</h2>
                  <p className="text-xs text-silver-mist mt-0.5">Visual step workflow for Samsung Tizen OS and LG webOS Smart TVs</p>
                </div>
              </div>

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
                  title="Open Smart TV App Store"
                  description="Open Samsung Apps or LG Content Store directly from your Smart TV main menu."
                  action="Navigate to the search bar."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-2"
                  stepNumber="02"
                  title="Search &amp; Install Player Application"
                  description="Search for supported player software such as IBO Player, SmartOne IPTV, or SS IPTV, then click Install."
                  action="Launch the installed application."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-3"
                  stepNumber="03"
                  title="Make Note of MAC Address &amp; Device Key"
                  description="When launched, the app displays your TV's unique MAC Address and Device Key on screen."
                  action="Write down or take a photo of the displayed MAC address."
                  icon={<Info className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-4"
                  stepNumber="04"
                  title="Upload Teleview M3U Link via Portal"
                  description="On your phone or PC, open the player app's activation portal, enter your MAC address, and upload your Teleview M3U link."
                  action="Click Save or Send."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="smart-tv-step-5"
                  stepNumber="05"
                  title="Restart App &amp; Start Watching"
                  description="Reload or restart the app on your Smart TV to access your complete channel guide and VOD library."
                  action="Select a channel to begin streaming."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>
            </article>

            {/* Android Phone & Box Visual Workflow */}
            <article id="android" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-charcoal pb-4">
                <Smartphone className="size-6 text-phosphor-green" />
                <div>
                  <h2 className="t-h2 text-xl sm:text-2xl">Android Box &amp; Smartphone Setup</h2>
                  <p className="text-xs text-silver-mist mt-0.5">Visual workflow for Android TV boxes, Nvidia Shield, and smartphones</p>
                </div>
              </div>

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
                  title="Open Google Play Store"
                  description="Launch the official Google Play Store on your Android device."
                  action="Search for IPTV Smarters Pro or TiviMate."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-2"
                  stepNumber="02"
                  title="Install Player Application"
                  description="Download and install your preferred player app directly from the Google Play Store."
                  action="Open the app upon completion."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-3"
                  stepNumber="03"
                  title="Select Xtream Codes API Login"
                  description="Choose Login with Xtream Codes API when prompted by the app."
                  action="Open the credential input screen."
                  icon={<FileCode className="size-4" />}
                />

                <SetupStepCard
                  id="android-step-4"
                  stepNumber="04"
                  title="Enter Teleview Server Details"
                  description="Input your Teleview Server URL, Username, and Password, then click Add User."
                  action="Wait a few seconds for channel data to synchronize."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>
            </article>

            {/* iOS & Apple TV */}
            <article id="ios" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-charcoal pb-4">
                <Laptop className="size-6 text-phosphor-green" />
                <div>
                  <h2 className="t-h2 text-xl sm:text-2xl">Apple iOS &amp; Apple TV Setup</h2>
                  <p className="text-xs text-silver-mist mt-0.5">Visual workflow for iPhone, iPad, Mac, and Apple TV (tvOS)</p>
                </div>
              </div>

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
                  title="Open Apple App Store"
                  description="Open the official Apple App Store on your iOS device or Apple TV."
                  action="Search for GSE Smart IPTV or IPTV Smarters Lite."
                  icon={<Search className="size-4" />}
                />

                <SetupStepCard
                  id="ios-step-2"
                  stepNumber="02"
                  title="Download &amp; Launch App"
                  description="Install the app and grant network access permissions."
                  action="Open the app."
                  icon={<Download className="size-4" />}
                />

                <SetupStepCard
                  id="ios-step-3"
                  stepNumber="03"
                  title="Add Teleview Credentials"
                  description="Select Xtream Codes API, enter your Teleview Server URL, Username, and Password, and save."
                  action="Start streaming your live channel package."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>
            </article>

            {/* MAG Receivers */}
            <article id="mag" className="scroll-mt-20 card p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-charcoal pb-4">
                <Tv className="size-6 text-phosphor-green" />
                <div>
                  <h2 className="t-h2 text-xl sm:text-2xl">MAG Box &amp; Portal Setup</h2>
                  <p className="text-xs text-silver-mist mt-0.5">Portal setup for MAG 250, 254, 322, 520, and Stalker Portals</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <SetupStepCard
                  id="mag-step-1"
                  stepNumber="01"
                  title="Access System Settings"
                  description="From the MAG main menu, navigate to Settings > System Settings > Servers > Portals."
                  action="Select Portal 1 URL field."
                  icon={<Key className="size-4" />}
                />

                <SetupStepCard
                  id="mag-step-2"
                  stepNumber="02"
                  title="Enter Portal URL &amp; Save"
                  description="Type the Teleview Stalker Portal URL provided in your activation email, save settings, and reboot your MAG device."
                  action="Reboot device to connect."
                  icon={<CheckCircle2 className="size-4" />}
                />
              </div>
            </article>
          </div>

          {/* Need Assistance CTA */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-phosphor-green/30">
              <h2 className="t-heading-sm">Need Help Setting Up Your Device?</h2>
              <p className="t-body-sm mt-2">
                Our technical support team is available 24/7 to guide you through installation.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <GreenButton href="/#pricing">View Subscription Plans</GreenButton>
                <GhostButton href={siteConfig.contact.emailHref}>Contact Support</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
