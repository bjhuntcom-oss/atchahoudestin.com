export default function Contact() {
  return (
    <section id="contact" className="section-stack min-h-screen bg-[var(--bg)] px-6 py-32 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="max-w-2xl">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)] mt-3">
            Parlons de votre projet
          </h2>
          <p className="text-[15px] text-[var(--t2)] mt-4 leading-relaxed">
            Disponible pour des missions freelance, des collaborations techniques 
            ou des audits de sécurité. Réponse sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <a
            href="mailto:contact@atchahoudestin.com"
            className="group border border-[var(--border1)] rounded-xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-colors"
          >
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              Email
            </span>
            <span className="text-[14px] text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
              contact@atchahoudestin.com
            </span>
          </a>
          <a
            href="https://github.com/bjhuntcom-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--border1)] rounded-xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-colors"
          >
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              GitHub
            </span>
            <span className="text-[14px] text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
              github.com/bjhuntcom-oss
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--border1)] rounded-xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-colors"
          >
            <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
              LinkedIn
            </span>
            <span className="text-[14px] text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
              Destin Atchahou
            </span>
          </a>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
          <span className="text-[12px] text-[var(--t3)]">Disponible — Temps de réponse moyen : 24h</span>
        </div>
      </div>
    </section>
  );
}
