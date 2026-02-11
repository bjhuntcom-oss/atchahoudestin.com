export default function Hero() {
  return (
    <section className="section-stack min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[var(--t3)]" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              Disponible pour de nouveaux projets
            </span>
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--t1)]">
            Destin
            <br />
            Atchahou
          </h1>
          <p className="text-[16px] leading-relaxed text-[var(--t2)] max-w-md">
            Développeur Full-Stack & Spécialiste en Cybersécurité. 
            Je conçois des solutions numériques robustes, sécurisées 
            et performantes.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="/projets"
              className="px-6 py-3 bg-[var(--t1)] text-[var(--bg)] text-[13px] font-medium rounded-full hover:bg-[var(--t2)] transition-colors"
            >
              Voir les projets
            </a>
            <a
              href="/#contact"
              className="px-6 py-3 border border-[var(--border2)] text-[var(--t2)] text-[13px] font-medium rounded-full hover:border-[var(--t3)] hover:text-[var(--t1)] transition-colors"
            >
              Me contacter
            </a>
          </div>
          <div className="flex items-center gap-8 mt-8">
            <div>
              <span className="text-[24px] font-semibold text-[var(--t1)]">20+</span>
              <p className="text-[11px] text-[var(--t3)] mt-1">Projets livrés</p>
            </div>
            <div className="w-px h-8 bg-[var(--border1)]" />
            <div>
              <span className="text-[24px] font-semibold text-[var(--t1)]">5+</span>
              <p className="text-[11px] text-[var(--t3)] mt-1">Années d&apos;exp.</p>
            </div>
            <div className="w-px h-8 bg-[var(--border1)]" />
            <div>
              <span className="text-[24px] font-semibold text-[var(--t1)]">E2E</span>
              <p className="text-[11px] text-[var(--t3)] mt-1">Sécurité intégrée</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[340px] h-[440px] bg-[var(--bg3)] rounded-3xl border border-[var(--border1)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg3)] to-[var(--bg2)]" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[var(--border1)] flex items-center justify-center">
                <span className="text-[32px] font-semibold text-[var(--t3)]">DA</span>
              </div>
              <span className="text-[11px] text-[var(--t4)] tracking-widest uppercase">Portrait</span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="ann-text">340 × 440 px</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
