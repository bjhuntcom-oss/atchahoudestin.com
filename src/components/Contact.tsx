export default function Contact() {
  const services = [
    { label: "Développement sur mesure", desc: "Application web ou mobile, de la conception au déploiement." },
    { label: "Audit de sécurité", desc: "Pentest, analyse de vulnérabilités, rapport de remédiation détaillé." },
    { label: "Conseil & Architecture", desc: "Revue de code, choix techniques, planification de migration." },
    { label: "Collaboration long terme", desc: "Renfort technique en équipe, TMA, évolution continue." },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-start justify-center px-4">
      <div className="section-card w-full max-w-[1400px] mx-auto px-6 py-24 lg:py-32 flex items-center">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 grid-pattern rounded-tl-3xl" />
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[var(--bg)] to-transparent rounded-tl-3xl" />

        <div className="max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="max-w-2xl mb-14 motion-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-num">04</span>
              <div className="w-8 h-px bg-[var(--border2)]" />
              <span className="badge badge-status badge-dark">Disponible pour nouveaux projets</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)]">
              Démarrons une collaboration
            </h2>
            <p className="text-[15px] text-[var(--t2)] mt-4 leading-[1.7]">
              Que ce soit pour une mission ponctuelle — audit de sécurité, développement d&apos;une feature critique — 
              ou un accompagnement technique sur plusieurs mois, je m&apos;adapte à la structure et aux 
              contraintes de chaque projet. Premier échange sans engagement, réponse garantie sous 24 heures.
            </p>
          </div>

          {/* Services I offer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14 motion-up motion-up-delay-1">
            {services.map((s) => (
              <div key={s.label} className="border border-[var(--border1)] rounded-2xl p-5 flex flex-col gap-2 relative overflow-hidden hover-lift glass-card">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
                <span className="text-[12px] font-semibold text-[var(--t1)]">{s.label}</span>
                <span className="text-[11px] text-[var(--t3)] leading-[1.6]">{s.desc}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="divider-label mb-14 motion-up motion-up-delay-2">
            <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase whitespace-nowrap">Me joindre</span>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 motion-up motion-up-delay-3">
            <a
              href="mailto:contact@atchahoudestin.com"
              className="group border border-[var(--border1)] rounded-2xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-all duration-300 relative overflow-hidden hover-lift glass-card"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.04] to-transparent" />
              <div className="flex items-center justify-between">
                <span className="badge badge-dark text-[8px]">Email</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--t4)" strokeWidth="1.5" className="group-hover:stroke-[var(--t2)] transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <span className="text-[14px] font-medium text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                contact@atchahoudestin.com
              </span>
              <span className="text-[11px] text-[var(--t3)]">Canal privilégié — réponse sous 24h</span>
            </a>
            <a
              href="https://github.com/bjhuntcom-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border1)] rounded-2xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-all duration-300 relative overflow-hidden hover-lift glass-card"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.04] to-transparent" />
              <div className="flex items-center justify-between">
                <span className="badge badge-dark text-[8px]">GitHub</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--t4)" strokeWidth="1.5" className="group-hover:stroke-[var(--t2)] transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <span className="text-[14px] font-medium text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                github.com/bjhuntcom-oss
              </span>
              <span className="text-[11px] text-[var(--t3)]">Projets open-source & contributions</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[var(--border1)] rounded-2xl p-6 flex flex-col gap-3 hover:border-[var(--border2)] transition-all duration-300 relative overflow-hidden hover-lift glass-card"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.04] to-transparent" />
              <div className="flex items-center justify-between">
                <span className="badge badge-dark text-[8px]">LinkedIn</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--t4)" strokeWidth="1.5" className="group-hover:stroke-[var(--t2)] transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <span className="text-[14px] font-medium text-[var(--t1)] group-hover:text-[var(--t2)] transition-colors">
                Destin Atchahou
              </span>
              <span className="text-[11px] text-[var(--t3)]">Réseau professionnel & recommandations</span>
            </a>
          </div>

          {/* Status bar */}
          <div className="mt-14 flex flex-wrap items-center gap-4 motion-up motion-up-delay-4">
            <span className="badge badge-status badge-outline text-[10px]">Disponible immédiatement</span>
            <span className="badge badge-outline text-[10px]">Freelance & CDI</span>
            <span className="badge badge-outline text-[10px]">Remote & Hybride</span>
            <span className="badge badge-outline text-[10px]">Cotonou, Bénin</span>
          </div>
        </div>

        {/* Section indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="section-num">04 / 04</span>
          <div className="w-8 h-px bg-[var(--border2)]" />
          <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase">Contact</span>
        </div>
      </div>
    </section>
  );
}
