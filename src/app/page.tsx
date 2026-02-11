import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="glow-separator" />
      <About />
      <div className="glow-separator" />
      <ProjectsGrid />
      <div className="glow-separator" />
      <Contact />
    </main>
  );
}
