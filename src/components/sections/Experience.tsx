import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">02 / Experience</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="section-heading max-w-xl">Where I&apos;ve built<br/>and <span className="accent">learned.</span></h2>
          <p className="muted max-w-sm text-sm leading-7">A journey from foundational web development to owning backend systems and business-critical application workflows.</p>
        </div>
        <div className="mt-14">
          {experience.map((item) => (
            <article className="grid gap-5 border-t border-white/10 py-9 md:grid-cols-[180px_1fr] md:gap-12" key={item.company}>
              <div className="flex items-start gap-3 md:block">
                <span className="timeline-dot mt-1.5 inline-block md:hidden"/>
                <p className="text-xs text-[#9aa39a]">{item.period}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div><h3 className="text-xl font-semibold tracking-[-.04em]">{item.company}</h3><p className="mt-1 text-sm text-[#c1f27b]">{item.role}</p></div>
                  <span className="hidden timeline-dot md:inline-block"/>
                </div>
                <p className="muted mt-4 max-w-3xl text-sm leading-7">{item.summary}</p>
                <ul className="mt-5 grid gap-2">
                  {item.highlights.map((highlight) => <li className="flex gap-3 text-sm leading-6 text-[#b9c1b7]" key={highlight}><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c1f27b]"/>{highlight}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <span className="pill" key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
