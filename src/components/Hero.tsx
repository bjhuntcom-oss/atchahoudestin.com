export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="section-card w-full max-w-[1400px] mx-auto flex items-center justify-center px-6 py-8">
        {/* Decorative grid background */}
        <div className="absolute inset-0 grid-pattern rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/80 to-[var(--bg)] rounded-3xl" />

        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20">
          <div className="flex flex-col gap-6">
            {/* Status + Role badges */}
            <div className="flex flex-wrap items-center gap-2 mb-1 motion-up">
              <span className="badge badge-status badge-dark">Disponible</span>
              <span className="badge badge-outline">Full-Stack</span>
              <span className="badge badge-outline">Cybersécurité</span>
            </div>

            <h1 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-[var(--t1)] motion-up motion-up-delay-1">
              Destin
              <br />
              Atchahou
            </h1>

            <div className="line-accent motion-up motion-up-delay-2" />

            <p className="text-[15px] leading-[1.7] text-[var(--t2)] max-w-md motion-up motion-up-delay-2">
              J&apos;interviens sur l&apos;ensemble du cycle de développement — de l&apos;architecture 
              technique à la mise en production sécurisée. Spécialisé dans la conception 
              d&apos;applications web et mobiles à haute exigence, avec une approche systématique 
              de la sécurité offensive et défensive.
            </p>

            <div className="flex items-center gap-3 mt-2 motion-up motion-up-delay-3">
              <a
                href="/projets"
                className="btn-glass btn-primary"
              >
                Explorer les projets
              </a>
              <a
                href="/#contact"
                className="btn-glass btn-secondary"
              >
                Discuter d&apos;un projet
              </a>
            </div>

            {/* Metrics row */}
            <div className="flex items-center gap-0 mt-6 border border-[var(--border1)] rounded-2xl overflow-hidden w-fit motion-up motion-up-delay-4">
              <div className="px-6 py-4 border-r border-[var(--border1)]">
                <span className="text-[22px] font-semibold text-[var(--t1)] block">20+</span>
                <p className="text-[10px] text-[var(--t3)] mt-0.5 tracking-wide">Projets livrés</p>
              </div>
              <div className="px-6 py-4 border-r border-[var(--border1)]">
                <span className="text-[22px] font-semibold text-[var(--t1)] block">5 ans</span>
                <p className="text-[10px] text-[var(--t3)] mt-0.5 tracking-wide">D&apos;expérience</p>
              </div>
              <div className="px-6 py-4 border-r border-[var(--border1)]">
                <span className="text-[22px] font-semibold text-[var(--t1)] block">100%</span>
                <p className="text-[10px] text-[var(--t3)] mt-0.5 tracking-wide">Sécurité E2E</p>
              </div>
              <div className="px-6 py-4">
                <span className="text-[22px] font-semibold text-[var(--t1)] block">&lt;24h</span>
                <p className="text-[10px] text-[var(--t3)] mt-0.5 tracking-wide">Temps de réponse</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2 mt-2 motion-up motion-up-delay-5">
              <span className="badge badge-ghost text-[9px]">Next.js</span>
              <span className="badge badge-ghost text-[9px]">React</span>
              <span className="badge badge-ghost text-[9px]">TypeScript</span>
              <span className="badge badge-ghost text-[9px]">Node.js</span>
              <span className="badge badge-ghost text-[9px]">Python</span>
              <span className="badge badge-ghost text-[9px]">Kali Linux</span>
              <span className="badge badge-ghost text-[9px]">AWS</span>
            </div>
          </div>

          {/* Portrait card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-[340px] h-[460px] bg-[var(--bg3)] rounded-3xl border border-[var(--border1)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg3)] via-[var(--bg2)] to-[var(--bg)]" />
                <div className="absolute inset-0 dot-grid opacity-30" />
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <div className="w-28 h-28 rounded-full bg-[var(--border1)] border border-[var(--border2)] flex items-center justify-center">
                    <span className="text-[36px] font-semibold text-[var(--t4)]">DA</span>
                  </div>
                  <span className="text-[10px] text-[var(--t4)] tracking-[0.2em] uppercase">Portrait</span>
                  <div className="flex gap-1.5 mt-2">
                    <span className="badge badge-dark text-[8px]">Développeur</span>
                    <span className="badge badge-dark text-[8px]">Pentester</span>
                  </div>
                </div>
                {/* Figma-style annotations */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-[var(--t4)]" />
                  <span className="ann-text">Portrait</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="ann-text">340 × 460</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="ann-text">border-radius: 24px</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="ann-text">bg: #111</span>
                </div>
              </div>
              {/* Decorative corner marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[var(--border2)]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[var(--border2)]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[var(--border2)]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[var(--border2)]" />
            </div>
          </div>
        </div>

        {/* Section indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="section-num">01 / 04</span>
          <div className="w-8 h-px bg-[var(--border2)]" />
          <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase">Introduction</span>
        </div>
      </div>
    </section>
  );
}
