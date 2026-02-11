import Link from "next/link";
import { projects } from "@/data/projects";

const catIcons: Record<string, string> = {
  Web: "◈", Mobile: "◇", Cybersécurité: "□", Automatisation: "◎",
};

export default function ProjectsGrid() {
  const featured = projects.slice(0, 6);

  return (
    <section className="min-h-screen flex items-start justify-center px-4">
      <div className="section-card w-full max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
        {/* Decorative */}
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 dot-grid opacity-15 rounded-bl-3xl" />

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-16 motion-up">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="section-num">03</span>
                <div className="w-8 h-px bg-[var(--border2)]" />
                <span className="badge badge-outline text-[9px]">Sélection de travaux</span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)]">
                Réalisations récentes
              </h2>
              <p className="text-[15px] text-[var(--t2)] mt-4 max-w-xl leading-[1.7]">
                Chaque projet présenté ici inclut ses maquettes fonctionnelles, 
                sa stack technique détaillée et les résultats mesurés après mise en production.
              </p>
            </div>
            <Link
              href="/projets"
              className="hidden md:flex btn-glass btn-primary text-[11px]"
            >
              Voir les 20 projets
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border1)] rounded-2xl overflow-hidden motion-up motion-up-delay-1">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/projets/${p.slug}`}
                className="group bg-[var(--bg)] p-6 lg:p-7 flex flex-col gap-4 hover:bg-[var(--bg2)] transition-all duration-300 relative glass-card"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span className="section-num">{p.num}</span>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-dark text-[8px]">{p.category}</span>
                    <span className="text-[9px] font-mono text-[var(--t4)]">{p.year}</span>
                  </div>
                </div>

                {/* Preview area */}
                <div className="w-full h-36 bg-[var(--bg3)] rounded-xl border border-[var(--border1)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  <div className="relative flex flex-col items-center gap-2">
                    <span className="text-[20px] text-[var(--t4)]">{catIcons[p.category] || "◈"}</span>
                    <span className="text-[8px] font-mono text-[var(--t4)] tracking-widest uppercase">{p.category}</span>
                  </div>
                  {/* Corner annotation */}
                  <span className="absolute top-2 right-2 ann-text">Preview</span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold tracking-tight text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-[var(--t3)] leading-[1.6] line-clamp-2">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="badge badge-ghost text-[8px] py-0.5 px-2">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="text-[8px] text-[var(--t4)] self-center">+{p.tags.length - 3}</span>
                  )}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="flex justify-center mt-10 md:hidden motion-up motion-up-delay-2">
            <Link href="/projets" className="btn-glass btn-primary text-[11px]">
              Voir tous les projets
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Section indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="section-num">03 / 04</span>
          <div className="w-8 h-px bg-[var(--border2)]" />
          <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase">Portfolio</span>
        </div>
      </div>
    </section>
  );
}
