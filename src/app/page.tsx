import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="stack-container">
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
    </main>
  );
}
