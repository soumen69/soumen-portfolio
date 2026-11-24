import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const additional = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section">
      <div className="container">
        <p className="eyebrow">03 / Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="section-heading max-w-xl">Built to solve<br /><span className="accent">actual problems.</span></h2>
          <p className="muted max-w-sm text-sm leading-7">
            A selection of business applications, CMS platforms and backend systems I&apos;ve helped build and improve. Internal projects are described at a high level.
          </p>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {featured.map((project) => (
            <article className="panel project-card flex min-h-[330px] flex-col p-6 sm:p-8" key={project.number}>
              <div className="flex items-center justify-between">
                <span className="eyebrow">{project.number} / Featured</span>
                <ArrowUpRight size={17} className="text-[#879187]" aria-hidden="true" />
              </div>
              <p className="mt-10 text-[10px] uppercase tracking-[.16em] text-[#9aa39a]">{project.type}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-.05em]">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-[#aeb8ad]">{project.description}</p>
              {project.contribution && (
                <p className="mt-4 text-xs leading-6 text-[#d7ded2]">
                  <span className="text-[#c1f27b]">My contribution · </span>{project.contribution}
                </p>
              )}
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.technologies.map((tech) => <span className="pill" key={tech}>{tech}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-sm font-semibold text-[#e4e9df]">More application work</h3>
          <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {additional.map((project) => (
              <article className="grid gap-3 py-5 sm:grid-cols-[.55fr_1fr]" key={project.number}>
                <div>
                  <p className="text-[10px] text-[#8b968b]">{project.type}</p>
                  <h4 className="mt-1 font-medium tracking-[-.02em]">{project.name}</h4>
                </div>
                <div>
                  <p className="text-sm leading-6 text-[#aeb8ad]">{project.description}</p>
                  <p className="mt-2 text-xs text-[#c1f27b]">{project.technologies.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
