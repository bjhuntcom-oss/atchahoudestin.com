import Link from "next/link";
import { projects } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

const catIcons: Record<string, string> = {
  Web: "◈", Mobile: "◇", Cybersécurité: "□", Automatisation: "◎",
};

export default function ProjectsGrid() {
  const featured = projects.slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <ScrollReveal direction="up">
              <div className="flex items-center gap-4 mb-6">
                <span className="section-num">03</span>
                <div className="w-12 h-px bg-gradient-to-r from-[var(--border2)] to-transparent" />
                <span className="badge badge-outline text-[9px]">Sélection de travaux</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="up">
              <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em] text-[var(--t1)] mb-4">
                Réalisations récentes
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="up">
              <p className="text-[15px] text-[var(--t2)] max-w-xl leading-[1.8]">
                Chaque projet présenté ici inclut ses maquettes fonctionnelles,
                sa stack technique détaillée et les résultats mesurés après mise en production.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} direction="right" className="hidden md:block flex-shrink-0">
            <Link href="/projets" className="btn-glass btn-primary text-[11px]">
              Voir les 20 projets
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Project cards — 3-column masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p, i) => (
            <ScrollReveal key={p.slug} delay={0.08 * i} direction="up">
              <Link
                href={`/projets/${p.slug}`}
                className="group glass-card hover-lift rounded-2xl border border-[var(--border1)] p-6 lg:p-7 flex flex-col gap-4 h-full bg-[var(--bg2)]/30 block"
              >
                {/* Top glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] via-white/[0.02] to-transparent" />

                {/* Header row */}
                <div className="flex items-center justify-between">
                  <span className="section-num">{p.num}</span>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-outline text-[8px]">{p.category}</span>
                    <span className="text-[9px] font-mono text-[var(--t4)]">{p.year}</span>
                  </div>
                </div>

                {/* Preview — glass container */}
                <div className="w-full h-36 glass rounded-xl flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-shadow duration-500">
                  <div className="absolute inset-0 dot-grid opacity-15" />
                  <div className="relative flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-700">
                    <span className="text-[24px] text-[var(--t4)] group-hover:text-[var(--t3)] transition-colors duration-500">{catIcons[p.category] || "◈"}</span>
                    <span className="text-[8px] font-mono text-[var(--t4)] tracking-[0.15em] uppercase">{p.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold tracking-tight text-[var(--t1)] group-hover:text-white transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[var(--t3)] leading-[1.7] line-clamp-2">
                  {p.description}
                </p>

                {/* Tags + Arrow */}
                <div className="flex items-end justify-between mt-auto pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="badge badge-ghost text-[8px] py-0.5 px-2">{t}</span>
                    ))}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--t2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <ScrollReveal delay={0.3} direction="up" className="flex justify-center mt-12 md:hidden">
          <Link href="/projets" className="btn-glass btn-primary text-[11px]">
            Voir tous les projets
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
