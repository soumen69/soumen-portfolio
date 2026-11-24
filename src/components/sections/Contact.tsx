import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">08 / Contact</p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-3xl text-[clamp(44px,8vw,88px)] leading-[.98] font-semibold tracking-[-.075em]">
              Have a challenging problem? <span className="text-[#c1f27b]">Let&apos;s talk.</span>
            </h2>
            <p className="muted mt-7 max-w-xl text-sm leading-7">
              I&apos;m interested in meaningful engineering challenges, thoughtful teams and products where I can help build reliable backend systems.
            </p>
            <a className="primary-link mt-8" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={15} /></a>
          </div>
          <div className="flex flex-col gap-4 text-sm text-[#aeb8ad]">
            <a className="flex items-center gap-3 hover:text-[#c1f27b]" href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email}</a>
            <span className="flex items-center gap-3"><MapPin size={15} /> {profile.location}</span>
            <a className="flex items-center gap-3 hover:text-[#c1f27b]" href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={12} /></a>
            <a className="flex items-center gap-3 hover:text-[#c1f27b]" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
