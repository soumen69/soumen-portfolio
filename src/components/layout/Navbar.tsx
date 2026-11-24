"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Selected work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0a]/90 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-[-.06em]" onClick={() => setMenuOpen(false)}>
          SOUMEN<span className="accent">.</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map((link) => <a className="nav-link" href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub profile" className="text-[#9aa39a] transition hover:text-[#c1f27b]" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a aria-label="LinkedIn profile" className="text-[#9aa39a] transition hover:text-[#c1f27b]" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="#contact" className="hidden items-center gap-1 rounded-md border border-white/15 px-3 py-2 text-[11px] text-white transition hover:border-[#c1f27b]/50 sm:inline-flex">Let&apos;s talk <ArrowUpRight size={13} /></a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-[#e4e9df] lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="border-t border-white/10 bg-[#090b0a] px-4 py-3 lg:hidden" aria-label="Mobile navigation">
          <div className="container flex flex-col">
            {links.map((link) => (
              <a className="border-b border-white/[.07] py-3 text-sm text-[#c5cec2] last:border-0" href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
