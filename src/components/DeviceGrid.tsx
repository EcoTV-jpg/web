import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { devicesSection } from "../data/site";

interface Device {
  name: string;
  src: string;
  alt: string;
  toWhite: boolean;
  width?: number;
  height?: number;
}

const devices: Device[] = [
  {
    name: "Fire TV",
    src: "/images/devices/device-amazon-fire-tv.avif",
    alt: "Amazon Fire TV logo",
    toWhite: true,
    width: 300,
    height: 162,
  },
  {
    name: "Android TV",
    src: "/images/devices/device-android-tv.avif",
    alt: "Android TV logo",
    toWhite: true,
    width: 784,
    height: 135,
  },
  {
    name: "Apple TV",
    src: "/images/devices/device-apple-tv.avif",
    alt: "Apple TV logo",
    toWhite: true,
    width: 300,
    height: 114,
  },
  {
    name: "Samsung",
    src: "/images/devices/device-samsung.avif",
    alt: "Samsung Smart TV logo",
    toWhite: true,
    width: 625,
    height: 234,
  },
  {
    name: "LG",
    src: "/images/devices/device-lg.avif",
    alt: "LG Smart TV logo",
    toWhite: true,
    width: 300,
    height: 60,
  },
  {
    name: "Roku",
    src: "/images/devices/device-roku.svg",
    alt: "Roku logo",
    toWhite: false,
    width: 52,
    height: 16,
  },
  {
    name: "Chromecast",
    src: "/images/devices/device-chromecast.svg",
    alt: "Google Chromecast logo",
    toWhite: false,
    width: 92,
    height: 20,
  },
  {
    name: "Nvidia Shield",
    src: "/images/devices/device-nvidia-shield.webp",
    alt: "NVIDIA Shield logo",
    toWhite: true,
    width: 412,
    height: 87,
  },
  {
    name: "Windows",
    src: "/images/devices/device-windows.avif",
    alt: "Microsoft Windows logo",
    toWhite: true,
    width: 300,
    height: 63,
  },
  {
    name: "VIDAA",
    src: "/images/devices/device-vidaa2.webp",
    alt: "VIDAA Smart TV logo",
    toWhite: true,
    width: 240,
    height: 101,
  },
  {
    name: "Formuler",
    src: "/images/devices/device-formuler.avif",
    alt: "Formuler logo",
    toWhite: true,
    width: 805,
    height: 129,
  },
  {
    name: "BuzzTV",
    src: "/images/devices/device-buzztv2.webp",
    alt: "BuzzTV logo",
    toWhite: false,
    width: 240,
    height: 65,
  },
];

export default function DeviceGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let paused = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let lastTime: number | null = null;
    let pos = grid.scrollLeft;
    const speed = 48; // px per second
    let animId: number;

    function pause() {
      paused = true;
      if (timer) clearTimeout(timer);
    }

    function resume() {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        paused = false;
      }, 1200);
    }

    const onPointerDown = () => pause();
    const onTouchStart = () => pause();
    const onPointerUp = () => resume();
    const onTouchEnd = () => resume();
    const onMouseEnter = () => pause();
    const onMouseLeave = () => resume();
    const onScroll = () => {
      if (paused) resume();
    };

    grid.addEventListener("pointerdown", onPointerDown);
    grid.addEventListener("touchstart", onTouchStart, { passive: true });
    grid.addEventListener("pointerup", onPointerUp);
    grid.addEventListener("touchend", onTouchEnd);
    grid.addEventListener("mouseenter", onMouseEnter);
    grid.addEventListener("mouseleave", onMouseLeave);
    grid.addEventListener("scroll", onScroll, { passive: true });

    function tick(timestamp: number) {
      if (lastTime == null) lastTime = timestamp;
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      if (window.innerWidth < 768) {
        if (paused) {
          pos = grid?.scrollLeft ?? pos;
        } else if (grid) {
          pos += (speed * dt) / 1000;
          const half = grid.scrollWidth / 2;
          if (half > 0 && pos >= half) {
            pos -= half;
          }
          grid.scrollLeft = pos;
        }
      }

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      if (timer) clearTimeout(timer);
      grid.removeEventListener("pointerdown", onPointerDown);
      grid.removeEventListener("touchstart", onTouchStart);
      grid.removeEventListener("pointerup", onPointerUp);
      grid.removeEventListener("touchend", onTouchEnd);
      grid.removeEventListener("mouseenter", onMouseEnter);
      grid.removeEventListener("mouseleave", onMouseLeave);
      grid.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="devices" className="section-y scroll-mt-16 bg-ash/20 border-y border-charcoal/40" aria-labelledby="devices-grid-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Hardware &amp; Player Compatibility
          </p>
          <h2 id="devices-grid-heading" className="t-h2 mt-4 text-balance">
            Will Teleview Work on Your <Accent>Device &amp; Player</Accent>?
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[640px] text-silver-mist leading-relaxed">
            Teleview connects smoothly across major streaming platforms and third-party IPTV media players using standard Xtream Codes API and M3U playlist formats.
          </p>
        </Reveal>

        {/* Device Grid with brand logos */}
        <div className="hmdev mt-12">
          <div
            ref={gridRef}
            className="dev-grid"
            tabIndex={0}
            role="region"
            aria-label="Supported devices and hardware"
          >
            {/* Primary devices */}
            {devices.map((dev) => (
              <div key={dev.name} className="dev">
                <img
                  src={dev.src}
                  alt={dev.alt}
                  width={dev.width}
                  height={dev.height}
                  loading="lazy"
                  decoding="async"
                  className="dev-img object-contain"
                />
                <span className="dev-name">{dev.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Player Compatibility Sub-Grid */}
        <Reveal delay={0.1} className="mt-14 max-w-[1000px] mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-bold text-snow">
              Compatible with Leading Third-Party IPTV Players
            </h3>
            <p className="text-xs text-silver-mist mt-1 max-w-[580px] mx-auto">
              We do not lock you into proprietary software. Connect using standard Xtream Codes API credentials or M3U links.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-snow">TiviMate</h4>
                <span className="text-[10px] font-mono text-phosphor-green uppercase">Fire TV &amp; Android</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                Advanced EPG layout, catch-up scheduling, and multi-screen viewing for Android-based devices.
              </p>
              <a href="/iptv-players/tivimate" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                TiviMate Setup Guide &rarr;
              </a>
            </article>

            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-snow">IPTV Smarters Pro</h4>
                <span className="text-[10px] font-mono text-phosphor-green uppercase">Multi-Platform</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                Intuitive navigation for live TV, movies, series, and multi-user login across mobile and TV screens.
              </p>
              <a href="/iptv-players/iptv-smarters-pro" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                Smarters Pro Guide &rarr;
              </a>
            </article>

            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-snow">IBO Player</h4>
                <span className="text-[10px] font-mono text-phosphor-green uppercase">Smart TVs</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                Fast loading and responsive video decoding tailored for Samsung Tizen OS and LG webOS.
              </p>
              <a href="/iptv-players/ibo-player" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                IBO Player Guide &rarr;
              </a>
            </article>

            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-snow">OTT Navigator</h4>
                <span className="text-[10px] font-mono text-phosphor-green uppercase">Android TV</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                Highly configurable buffer size controls, channel filtering, and customized stream codecs.
              </p>
              <a href="/iptv-players/ott-navigator" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                OTT Navigator Guide &rarr;
              </a>
            </article>

            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-snow">VLC Media Player</h4>
                <span className="text-[10px] font-mono text-phosphor-green uppercase">Desktop / Mobile</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                Universal open-source network stream playback for Windows, macOS, Linux, and mobile platforms.
              </p>
              <a href="/iptv-players/vlc" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                VLC Setup Guide &rarr;
              </a>
            </article>

            <article className="card p-4 sm:p-5 border-charcoal bg-ash/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-snow">More Player Guides</h4>
                  <span className="text-[10px] font-mono text-smoke uppercase">All Apps</span>
                </div>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Compare features, download links, and configuration steps for all supported media players.
                </p>
              </div>
              <a href="/iptv-players" className="mt-3 inline-block text-[11px] font-semibold text-phosphor-green hover:underline">
                View All Supported Players &rarr;
              </a>
            </article>
          </div>
        </Reveal>

        {/* Caption & Contextual Links */}
        <Reveal className="mt-10 text-center">
          <p className="t-caption text-xs text-smoke mb-4">
            Note: Roku devices do not support native IPTV apps and require screen casting or AirPlay.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <a
              href="/devices/firestick"
              className="text-phosphor-green hover:underline"
            >
              Firestick Setup Guide &rarr;
            </a>
            <span className="text-smoke" aria-hidden="true">&bull;</span>
            <a
              href="/devices/samsung-smart-tv"
              className="text-phosphor-green hover:underline"
            >
              Smart TV Setup &rarr;
            </a>
            <span className="text-smoke" aria-hidden="true">&bull;</span>
            <a
              href="/devices/apple-tv"
              className="text-phosphor-green hover:underline"
            >
              Apple TV Guide &rarr;
            </a>
            <span className="text-smoke" aria-hidden="true">&bull;</span>
            <a
              href="/devices"
              className="text-silver-mist hover:text-snow hover:underline"
            >
              All Supported Devices &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
