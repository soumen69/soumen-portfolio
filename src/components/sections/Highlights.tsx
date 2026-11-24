import { highlights } from "@/data/portfolio";

export function Highlights() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">04 / Engineering notes</p>
        <h2 className="section-heading mt-5 max-w-2xl">The work behind<br/><span className="accent">the features.</span></h2>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {highlights.map((item, index) => (
            <article className="panel p-6 sm:p-7" key={item.title}>
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs text-[#778176]">0{index + 1}</span>
                {item.metric && <span className="text-right"><strong className="block text-2xl tracking-[-.05em] text-[#c1f27b]">{item.metric}</strong><small className="text-[9px] text-[#8e998e]">{item.metricLabel}</small></span>}
              </div>
              <h3 className="mt-8 text-lg font-semibold tracking-[-.03em]">{item.title}</h3>
              <p className="muted mt-3 text-sm leading-7">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
