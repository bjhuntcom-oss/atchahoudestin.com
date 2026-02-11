export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center px-4 bg-[var(--bg)]">
      <div className="section-card w-full max-w-[1400px] mx-auto flex items-center justify-center px-8 lg:px-12">
        {/* Decorative grid background */}
        <div className="absolute inset-0 grid-pattern rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/80 to-[var(--bg)] rounded-3xl" />

        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            {/* Status + Role badges */}
            <div className="flex flex-wrap items-center gap-2 motion-up">
              <span className="badge badge-status badge-dark">Disponible</span>
              <span className="badge badge-outline">Full-Stack</span>
              <span className="badge badge-outline">Cybersécurité</span>
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-[1.02] tracking-tight text-[var(--t1)] motion-up motion-up-delay-1">
              Destin
              <br />
              Atchahou
            </h1>

            <div className="line-accent motion-up motion-up-delay-2" />

            <p className="text-[14px] leading-[1.7] text-[var(--t2)] max-w-md motion-up motion-up-delay-2">
              J&apos;interviens sur l&apos;ensemble du cycle de développement — de l&apos;architecture 
              technique à la mise en production sécurisée. Spécialisé dans la conception 
              d&apos;applications web et mobiles à haute exigence, avec une approche systématique 
              de la sécurité offensive et défensive.
            </p>

            <div className="flex items-center gap-3 motion-up motion-up-delay-3">
              <a href="/projets" className="btn-glass btn-primary">
                Explorer les projets
              </a>
              <a href="/#contact" className="btn-glass btn-secondary">
                Discuter d&apos;un projet
              </a>
            </div>

            {/* Metrics row */}
            <div className="flex items-center gap-0 mt-2 border border-[var(--border1)] rounded-xl overflow-hidden w-fit motion-up motion-up-delay-4">
              <div className="px-5 py-3 border-r border-[var(--border1)]">
                <span className="text-[18px] font-semibold text-[var(--t1)] block">20+</span>
                <p className="text-[9px] text-[var(--t3)] mt-0.5 tracking-wide">Projets livrés</p>
              </div>
              <div className="px-5 py-3 border-r border-[var(--border1)]">
                <span className="text-[18px] font-semibold text-[var(--t1)] block">5 ans</span>
                <p className="text-[9px] text-[var(--t3)] mt-0.5 tracking-wide">D&apos;expérience</p>
              </div>
              <div className="px-5 py-3 border-r border-[var(--border1)]">
                <span className="text-[18px] font-semibold text-[var(--t1)] block">100%</span>
                <p className="text-[9px] text-[var(--t3)] mt-0.5 tracking-wide">Sécurité E2E</p>
              </div>
              <div className="px-5 py-3">
                <span className="text-[18px] font-semibold text-[var(--t1)] block">&lt;24h</span>
                <p className="text-[9px] text-[var(--t3)] mt-0.5 tracking-wide">Temps de réponse</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-1.5 motion-up motion-up-delay-5">
              <span className="badge badge-ghost text-[8px]">Next.js</span>
              <span className="badge badge-ghost text-[8px]">React</span>
              <span className="badge badge-ghost text-[8px]">TypeScript</span>
              <span className="badge badge-ghost text-[8px]">Node.js</span>
              <span className="badge badge-ghost text-[8px]">Python</span>
              <span className="badge badge-ghost text-[8px]">Kali Linux</span>
              <span className="badge badge-ghost text-[8px]">AWS</span>
            </div>
          </div>

          {/* Portrait card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="relative w-[300px] h-[400px] bg-[var(--bg3)] rounded-3xl border border-[var(--border1)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg3)] via-[var(--bg2)] to-[var(--bg)]" />
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-[var(--border1)] border border-[var(--border2)] flex items-center justify-center">
                    <span className="text-[32px] font-semibold text-[var(--t4)]">DA</span>
                  </div>
                  <span className="text-[9px] text-[var(--t4)] tracking-[0.2em] uppercase">Portrait</span>
                  <div className="flex gap-1.5 mt-1">
                    <span className="badge badge-dark text-[8px]">Développeur</span>
                    <span className="badge badge-dark text-[8px]">Pentester</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[var(--t4)]" />
                  <span className="ann-text">Portrait</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="ann-text">300 × 400</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="ann-text">border-radius: 24px</span>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--border2)]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[var(--border2)]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[var(--border2)]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--border2)]" />
            </div>
          </div>
        </div>

        {/* Section indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="section-num">01 / 04</span>
          <div className="w-8 h-px bg-[var(--border2)]" />
          <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase">Introduction</span>
        </div>
      </div>
    </section>
  );
}
