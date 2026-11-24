import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Highlights } from "@/components/sections/Highlights";
import { Skills } from "@/components/sections/Skills";
import { Learning } from "@/components/sections/Learning";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Highlights />
        <Skills />
        <Learning />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
