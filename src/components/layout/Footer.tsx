import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[-.04em]">SOUMEN<span className="accent">.</span></p>
          <p className="mt-1 text-xs text-[#7f8980]">Backend Software Developer · Kolkata, India</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-[#9aa39a]">
          <a className="hover:text-[#c1f27b]" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={11} className="inline"/></a>
          <a className="hover:text-[#c1f27b]" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={11} className="inline"/></a>
          <span>© {new Date().getFullYear()} Soumen Maiti</span>
        </div>
      </div>
    </footer>
  );
}
