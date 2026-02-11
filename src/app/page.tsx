import StackScroller from "@/components/StackScroller";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <StackScroller>
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
    </StackScroller>
  );
}
