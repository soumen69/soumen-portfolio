import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="pointer-events-none absolute -right-40 -top-28 h-[480px] w-[480px] rounded-full bg-[#c1f27b]/[.055] blur-[110px]" />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_330px] lg:gap-16">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="eyebrow">Backend engineering · Application development</span>
            </div>
            <h1 className="max-w-4xl text-[clamp(48px,8.4vw,94px)] leading-[.98] font-semibold tracking-[-.075em]">
              I build the systems behind <span className="text-[#c1f27b]">real-world</span> applications.
            </h1>
            <p className="muted mt-8 max-w-[650px] text-base leading-8 sm:text-lg">
              {profile.introduction}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="primary-link" href="#work">Explore selected work <ArrowUpRight size={15} /></a>
              <a className="secondary-link" href="/resume/soumen-maity-resume.pdf" target="_blank" rel="noreferrer">
                <Download size={14} /> View résumé
              </a>
            </div>
          </div>

          <aside className="panel overflow-hidden p-2.5" aria-label="Profile">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#151a16]">
              <Image
                src={profile.portrait}
                alt="Portrait of Soumen Maiti"
                fill
                loading="eager"
                sizes="(max-width: 1023px) 80vw, 330px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0a]/95 via-[#090b0a]/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-lg font-semibold tracking-[-.04em]">{profile.name}</p>
                <p className="mt-1 text-xs text-[#d0d8cb]">{profile.role}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#c0c9bd]">
                  <MapPin size={13} /> {profile.location}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 px-3 pb-3 pt-5">
              <div>
                <p className="text-2xl font-semibold tracking-[-.06em]">{profile.experience}</p>
                <p className="mt-1 text-[10px] text-[#8c968c]">Professional experience</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-[-.06em]">10K</p>
                <p className="mt-1 text-[10px] text-[#8c968c]">Products per import run</p>
              </div>
            </div>
          </aside>
        </div>
        <a href="#about" className="mt-16 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[#788278]">
          <ArrowDown size={13} /> Scroll to explore
        </a>
      </div>
    </section>
  );
}
