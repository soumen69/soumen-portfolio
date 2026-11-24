import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">05 / Technical toolkit</p>
        <h2 className="section-heading mt-5 max-w-2xl">Tools I use to<br /><span className="accent">make things work.</span></h2>
        <div className="mt-12 grid gap-0 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              className={`grid-line py-7 md:px-6 ${index % 2 === 0 ? "md:border-r md:border-white/10 md:pl-0" : "md:pr-0"} ${index === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? "md:col-span-2 md:border-r-0" : ""}`}
              key={group.label}
            >
              <h3 className="text-sm font-semibold">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => <span className="pill" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
