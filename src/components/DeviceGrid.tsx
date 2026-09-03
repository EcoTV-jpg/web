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
    alt: "Amazon Fire TV streaming with Teleview service",
    toWhite: true,
  },
  {
    name: "Android TV",
    src: "/images/devices/device-android-tv.avif",
    alt: "Android TV IPTV app for live TV",
    toWhite: true,
  },
  {
    name: "Apple TV",
    src: "/images/devices/device-apple-tv.avif",
    alt: "Apple TV box with Teleview subscription",
    toWhite: true,
  },
  {
    name: "Samsung",
    src: "/images/devices/device-samsung.avif",
    alt: "Samsung Smart TV Teleview channels",
    toWhite: true,
  },
  {
    name: "LG",
    src: "/images/devices/device-lg.avif",
    alt: "LG Smart TV IPTV streaming",
    toWhite: true,
  },
  {
    name: "Roku",
    src: "/images/devices/device-roku.svg",
    alt: "Roku device Teleview live sports",
    toWhite: false,
  },
  {
    name: "Chromecast",
    src: "/images/devices/device-chromecast.svg",
    alt: "Chromecast Teleview movies and shows",
    toWhite: false,
  },
  {
    name: "Nvidia Shield",
    src: "/images/devices/device-nvidia-shield.webp",
    alt: "NVIDIA Shield IPTV streaming",
    toWhite: true,
    width: 412,
    height: 87,
  },
  {
    name: "Windows",
    src: "/images/devices/device-windows.avif",
    alt: "Windows IPTV app for live TV streaming",
    toWhite: true,
  },
  {
    name: "VIDAA",
    src: "/images/devices/device-vidaa2.webp",
    alt: "VIDAA Smart TV IPTV provider",
    toWhite: true,
    width: 240,
    height: 101,
  },
  {
    name: "Formuler",
    src: "/images/devices/device-formuler.avif",
    alt: "Formuler IPTV box for streaming service",
    toWhite: true,
  },
  {
    name: "BuzzTV",
    src: "/images/devices/device-buzztv2.webp",
    alt: "BuzzTV box IPTV streaming",
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
            {devicesSection.kicker || "Stream anywhere anytime"}
          </p>
          <h2 id="devices-grid-heading" className="t-h2 mt-4 text-balance">
            Watch Teleview on <Accent>All Devices</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[640px] text-silver-mist leading-relaxed">
            {devicesSection.subhead}
          </p>
        </Reveal>

        {/* Device Grid with iptvv.ca brand logos */}
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
                  className={dev.toWhite ? "to-white" : ""}
                />
                <span>{dev.name}</span>
              </div>
            ))}

            {/* Duplicate devices for continuous ticker on mobile */}
            {devices.map((dev, idx) => (
              <div key={`${dev.name}-dup-${idx}`} className="dev dup" aria-hidden="true">
                <img
                  src={dev.src}
                  alt=""
                  width={dev.width}
                  height={dev.height}
                  loading="lazy"
                  decoding="async"
                  className={dev.toWhite ? "to-white" : ""}
                />
                <span>{dev.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="t-caption text-xs text-smoke max-w-[500px] mx-auto">
            {devicesSection.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
