import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  const featured = projects.slice(0, 6);

  return (
    <section className="section-stack min-h-screen bg-[var(--bg)] px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              Portfolio
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)] mt-3">
              Réalisations
            </h2>
            <p className="text-[15px] text-[var(--t2)] mt-4 max-w-lg leading-relaxed">
              Sélection de projets récents en développement web, mobile, cybersécurité et automatisation.
            </p>
          </div>
          <Link
            href="/projets"
            className="hidden md:flex items-center gap-2 text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors"
          >
            Tout voir
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border1)] rounded-2xl overflow-hidden">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projets/${p.slug}`}
              className="group bg-[var(--bg)] p-6 flex flex-col gap-4 hover:bg-[var(--bg2)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--t4)]">{p.num}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[var(--t3)] px-2 py-0.5 border border-[var(--border1)] rounded-full">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--t4)]">{p.year}</span>
                </div>
              </div>
              <div className="w-full h-32 bg-[var(--bg3)] rounded-lg border border-[var(--border1)] flex items-center justify-center">
                <span className="text-[10px] font-mono text-[var(--t4)]">Aperçu</span>
              </div>
              <h3 className="text-[15px] font-semibold tracking-tight text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                {p.title}
              </h3>
              <p className="text-[12px] text-[var(--t3)] leading-relaxed line-clamp-2">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((t) => (
                  <span key={t} className="text-[9px] font-mono text-[var(--t4)] px-2 py-0.5 border border-[var(--border1)] rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:hidden">
          <Link
            href="/projets"
            className="flex items-center gap-2 text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors"
          >
            Voir tous les projets
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
