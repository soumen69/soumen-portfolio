import { BookOpen, Code2, Database, Workflow } from "lucide-react";
import { learningTopics } from "@/data/portfolio";

const topicIcons = [Code2, Workflow, Database, BookOpen];

export function Learning() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <p className="eyebrow">06 / Learning in progress</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="section-heading max-w-xl">Always learning.<br /><span className="accent">Always building.</span></h2>
          <p className="muted max-w-sm text-sm leading-7">
            Alongside my day-to-day backend work, I&apos;m exploring new languages, runtimes and data technologies through focused study and practice.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {learningTopics.map((topic, index) => {
            const TopicIcon = topicIcons[index] ?? BookOpen;
            return (
              <article className="panel p-6 sm:p-7" key={topic.name}>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#c1f27b]/20 bg-[#c1f27b]/[.07] text-[#c1f27b]">
                    <TopicIcon size={18} aria-hidden="true" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[.16em] text-[#8e998e]">{topic.category}</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold tracking-[-.03em]">{topic.name}</h3>
                <p className="muted mt-3 text-sm leading-7">{topic.focus}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
