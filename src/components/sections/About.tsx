import { ArrowUpRight } from "lucide-react";

const strengths = ["Backend development", "Database design", "REST APIs", "Custom RBAC", "Admin interfaces"];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow">01 / About</p>
          <h2 className="section-heading mt-5">Curiosity first.<br /><span className="accent">Solutions next.</span></h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-xl leading-9 tracking-[-.025em] text-[#e4e9df]">
            I enjoy taking a problem apart, understanding how the application and business workflow fit together, and building a solution that works in practice.
          </p>
          <p className="muted mt-6 text-sm leading-8">
            Most of my professional work has been in PHP-based applications using Laravel, CodeIgniter and MySQL. I work on backend logic, database-backed features, APIs and permission systems. I also build the administrative interfaces teams use to manage those workflows, so I care about how a feature works from the server through to the person using it.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {strengths.map((item) => <span className="pill" key={item}>{item}</span>)}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-[#c1f27b]">
            Connect with me <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
