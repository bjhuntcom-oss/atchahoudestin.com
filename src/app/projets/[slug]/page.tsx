import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { mockupConfigs } from "@/data/mockup-configs";
import MockupRenderer from "@/components/MockupRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const screens = mockupConfigs[slug] || [];

  return (
    <main className="min-h-screen bg-[var(--bg)] pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/projets"
          className="inline-flex items-center gap-2 text-[13px] text-[var(--t3)] hover:text-[var(--t2)] transition-colors mb-12"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Retour aux projets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2">
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              {project.category}
            </span>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)] mt-2">
              {project.title}
            </h1>
            <p className="text-[15px] text-[var(--t2)] mt-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((t) => (
                <span key={t} className="text-[10px] font-mono text-[var(--t3)] px-3 py-1 border border-[var(--border1)] rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[10px] text-[var(--t4)] uppercase tracking-widest">Client</span>
              <p className="text-[13px] text-[var(--t2)] mt-1">{project.client}</p>
            </div>
            <div>
              <span className="text-[10px] text-[var(--t4)] uppercase tracking-widest">Année</span>
              <p className="text-[13px] text-[var(--t2)] mt-1">{project.year}</p>
            </div>
            <div>
              <span className="text-[10px] text-[var(--t4)] uppercase tracking-widest">Durée</span>
              <p className="text-[13px] text-[var(--t2)] mt-1">{project.duration}</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)] block mb-4">
            Stack technique
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="text-[11px] text-[var(--t2)] px-3 py-1.5 bg-[var(--bg3)] border border-[var(--border1)] rounded-lg">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)] block mb-8">
            Maquettes — {screens.length} écrans
          </span>
          <MockupRenderer screens={screens} />
        </div>

        <div className="mb-20">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)] block mb-6">
            Résultats
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((r) => (
              <div key={r.label} className="border border-[var(--border1)] rounded-xl p-5">
                <span className="text-[24px] font-semibold text-[var(--t1)]">{r.value}</span>
                <p className="text-[11px] text-[var(--t3)] mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--border1)] pt-12 flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-semibold text-[var(--t1)]">Un projet similaire ?</h2>
            <p className="text-[13px] text-[var(--t3)] mt-1">Discutons de vos besoins.</p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-3 bg-[var(--t1)] text-[var(--bg)] text-[13px] font-medium rounded-full hover:bg-[var(--t2)] transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
