import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Experience from "./sections/experience";
import ContactCTA from "./sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ContactCTA />
    </>
  );
}