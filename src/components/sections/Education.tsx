import { education, languages } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">07 / Education</p>
          <h2 className="section-heading mt-5">The foundation.</h2>
          {education.map((item) => (
            <div className="mt-8 border-t border-white/10 pt-5" key={item.qualification}>
              <h3 className="font-semibold">{item.qualification}</h3>
              <p className="muted mt-2 text-sm">{item.institution}</p>
              <p className="mt-2 text-xs text-[#c1f27b]">{item.detail}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="eyebrow">Languages</p>
          <h2 className="section-heading mt-5">Communication.</h2>
          <div className="mt-8 flex flex-wrap gap-2">{languages.map((language) => <span className="pill" key={language}>{language}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
