import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const metrics = [
    { value: "20+", label: "Projets livrés" },
    { value: "5 ans", label: "D'expérience" },
    { value: "100%", label: "Sécurité E2E" },
    { value: "<24h", label: "Temps de réponse" },
  ];

  const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Python", "Kali Linux", "AWS"];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <ScrollReveal delay={0} direction="up">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-status badge-dark">Disponible</span>
              <span className="badge badge-outline">Full-Stack</span>
              <span className="badge badge-outline">Cybersécurité</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} direction="up">
            <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[var(--t1)]">
              Destin<br />
              <span className="shimmer-text">Atchahou</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="up">
            <div className="line-accent" />
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <p className="text-[15px] leading-[1.8] text-[var(--t2)] max-w-lg">
              J&apos;interviens sur l&apos;ensemble du cycle de développement — de l&apos;architecture
              technique à la mise en production sécurisée. Spécialisé dans la conception
              d&apos;applications web et mobiles à haute exigence, avec une approche systématique
              de la sécurité offensive et défensive.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="up">
            <div className="flex flex-wrap items-center gap-3">
              <a href="/projets" className="btn-glass btn-primary">
                Explorer les projets
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="/#contact" className="btn-glass btn-secondary">
                Discuter d&apos;un projet
              </a>
            </div>
          </ScrollReveal>

          {/* Metrics - glass container */}
          <ScrollReveal delay={0.4} direction="up">
            <div className="flex items-stretch gap-0 glass rounded-2xl overflow-hidden w-fit mt-2">
              {metrics.map((m, i) => (
                <div key={m.label} className={`px-5 sm:px-6 py-4 ${i < metrics.length - 1 ? "border-r border-white/[0.06]" : ""}`}>
                  <span className="text-[20px] font-bold text-[var(--t1)] block tracking-tight">{m.value}</span>
                  <p className="text-[9px] text-[var(--t3)] mt-1 tracking-wide uppercase">{m.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Tech badges */}
          <ScrollReveal delay={0.5} direction="up">
            <div className="flex flex-wrap items-center gap-1.5">
              {techStack.map((t) => (
                <span key={t} className="badge badge-ghost text-[9px]">{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Portrait card with glassmorphism */}
        <ScrollReveal delay={0.3} direction="right" className="hidden lg:block">
          <div className="relative">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 bg-white/[0.02] rounded-[32px] blur-[60px] scale-110" />

            <div className="relative glass-heavy rounded-[28px] p-8 flex flex-col items-center gap-6">
              {/* Decorative grid */}
              <div className="absolute inset-0 dot-grid opacity-20 rounded-[28px]" />

              <div className="relative z-10 flex flex-col items-center gap-5 py-4">
                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-[var(--bg4)] to-[var(--bg2)] border border-[var(--border2)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <span className="text-[36px] font-bold text-[var(--t3)]">DA</span>
                </div>

                <div className="text-center">
                  <p className="text-[13px] font-semibold text-[var(--t1)] tracking-tight">Destin Atchahou</p>
                  <p className="text-[11px] text-[var(--t3)] mt-1">Ingénieur Full-Stack</p>
                </div>

                <div className="flex gap-2">
                  <span className="badge badge-outline text-[9px]">Développeur</span>
                  <span className="badge badge-outline text-[9px]">Pentester</span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border2)] to-transparent" />

                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="glass rounded-xl p-3 text-center">
                    <span className="text-[16px] font-bold text-[var(--t1)]">20+</span>
                    <p className="text-[8px] text-[var(--t3)] mt-0.5 uppercase tracking-wider">Projets</p>
                  </div>
                  <div className="glass rounded-xl p-3 text-center">
                    <span className="text-[16px] font-bold text-[var(--t1)]">5 ans</span>
                    <p className="text-[8px] text-[var(--t3)] mt-0.5 uppercase tracking-wider">Expérience</p>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/[0.08] rounded-tl" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/[0.08] rounded-tr" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/[0.08] rounded-bl" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/[0.08] rounded-br" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal delay={0.8} direction="up" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] text-[var(--t4)] tracking-[0.2em] uppercase">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--t4)] to-transparent" />
        </div>
      </ScrollReveal>
    </section>
  );
}
