import { Tv, Monitor, Smartphone, Tablet, Laptop, Cpu, Radio, Shield } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { devicesSection } from "../data/site";

const deviceIcons: Record<string, string> = {
  "Fire TV": "firetv",
  "Android TV": "android",
  "Apple TV": "apple",
  "Samsung": "smart-tv",
  "LG": "smart-tv",
  "Roku": "roku",
  "Chromecast": "chromecast",
  "Nvidia Shield": "nvidia",
  "Windows": "windows",
  "VIDAA": "smart-tv",
  "Formuler": "android",
  "BuzzTV": "android",
};

export default function DeviceGrid() {
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

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-[1100px] mx-auto">
          {devicesSection.devices.map((device, i) => (
            <Reveal key={device} delay={i * 0.04}>
              <div className="card card-hover flex flex-col items-center justify-center p-5 text-center h-full border-charcoal bg-ash/60 hover:border-phosphor-green/40 transition-all duration-200">
                <div className="size-11 rounded-xl bg-ink-800/80 border border-white/10 flex items-center justify-center text-white/90 mb-3 shadow-inner">
                  <Tv className="size-5 text-phosphor-green" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-snow">{device}</span>
                <span className="text-[10px] text-smoke mt-0.5">Compatible</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-10 text-center">
          <p className="t-caption text-xs text-smoke max-w-[500px] mx-auto">
            {devicesSection.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
