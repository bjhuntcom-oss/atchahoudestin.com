"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories } from "@/data/projects";

export default function ProjetsPage() {
  const [filter, setFilter] = useState<string>("Tous");

  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
            Portfolio
          </span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-[var(--t1)] mt-3">
            Réalisations
          </h1>
          <p className="text-[15px] text-[var(--t2)] mt-4 max-w-lg leading-relaxed">
            Sélection de projets en développement web, mobile, cybersécurité et automatisation.
          </p>
        </div>

        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-1 p-1 border border-[var(--border1)] rounded-full">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                  filter === c
                    ? "bg-white/[0.08] text-[var(--t1)]"
                    : "text-[var(--t3)] hover:text-[var(--t2)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-mono text-[var(--t4)]">{filtered.length} projets</span>
        </div>

        <div className="border border-[var(--border1)] rounded-2xl overflow-hidden">
          <div className="bg-[var(--bg3)] px-6 py-3 flex items-center justify-between border-b border-[var(--border1)]">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[var(--t3)]">INDEX</span>
              <span className="text-[10px] font-mono text-[var(--t4)]">Projets</span>
            </div>
            <span className="text-[10px] font-mono text-[var(--t4)]">{filtered.length} entrées</span>
          </div>

          <div className="divide-y divide-[var(--border1)]">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/projets/${p.slug}`}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 hover:bg-[var(--bg2)] transition-colors"
              >
                <span className="text-[11px] font-mono text-[var(--t4)] w-6">{p.num}</span>
                <div className="w-full md:w-20 h-16 bg-[var(--bg3)] rounded-lg border border-[var(--border1)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-mono text-[var(--t4)]">{p.category}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono text-[var(--t3)] px-2 py-0.5 border border-[var(--border1)] rounded-full">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--t4)]">{p.year}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold tracking-tight text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[12px] text-[var(--t3)] mt-1 line-clamp-1">{p.description}</p>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[9px] font-mono text-[var(--t4)] px-2 py-0.5 border border-[var(--border1)] rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-[var(--t3)] group-hover:text-[var(--t1)] transition-colors flex-shrink-0">
                  Voir →
                </span>
              </Link>
            ))}
          </div>

          <div className="bg-[var(--bg3)] px-6 py-3 flex items-center justify-between border-t border-[var(--border1)]">
            <span className="text-[10px] font-mono text-[var(--t4)]">Destin Atchahou Portfolio</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
              <span className="text-[10px] font-mono text-[var(--t4)]">Actif</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
