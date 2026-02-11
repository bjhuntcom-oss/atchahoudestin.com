import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const services = [
    { icon: "⚙", label: "Développement sur mesure", desc: "Application web ou mobile, de la conception au déploiement." },
    { icon: "◇", label: "Audit de sécurité", desc: "Pentest, analyse de vulnérabilités, rapport de remédiation détaillé." },
    { icon: "△", label: "Conseil & Architecture", desc: "Revue de code, choix techniques, planification de migration." },
    { icon: "◈", label: "Collaboration long terme", desc: "Renfort technique en équipe, TMA, évolution continue." },
  ];

  const contacts = [
    {
      label: "Email",
      value: "contact@atchahoudestin.com",
      sub: "Canal privilégié — réponse sous 24h",
      href: "mailto:contact@atchahoudestin.com",
      external: false,
    },
    {
      label: "GitHub",
      value: "github.com/bjhuntcom-oss",
      sub: "Projets open-source & contributions",
      href: "https://github.com/bjhuntcom-oss",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Destin Atchahou",
      sub: "Réseau professionnel & recommandations",
      href: "https://linkedin.com",
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.012] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-num">04</span>
            <div className="w-12 h-px bg-gradient-to-r from-[var(--border2)] to-transparent" />
            <span className="badge badge-status badge-dark">Disponible pour nouveaux projets</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em] text-[var(--t1)] mb-4">
            Démarrons une collaboration
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up">
          <p className="text-[15px] text-[var(--t2)] max-w-2xl leading-[1.8] mb-16 lg:mb-20">
            Que ce soit pour une mission ponctuelle — audit de sécurité, développement d&apos;une feature critique —
            ou un accompagnement technique sur plusieurs mois, je m&apos;adapte à la structure et aux
            contraintes de chaque projet. Premier échange sans engagement, réponse garantie sous 24 heures.
          </p>
        </ScrollReveal>

        {/* Services — horizontal glass cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 lg:mb-24">
          {services.map((s, i) => (
            <ScrollReveal key={s.label} delay={0.08 * i} direction="up">
              <div className="group glass-card hover-lift rounded-2xl border border-[var(--border1)] p-6 flex flex-col gap-3 h-full bg-[var(--bg2)]/30">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
                <span className="text-[18px] text-[var(--t4)] group-hover:text-[var(--t3)] transition-colors duration-500">{s.icon}</span>
                <span className="text-[13px] font-semibold text-[var(--t1)]">{s.label}</span>
                <span className="text-[11px] text-[var(--t3)] leading-[1.7]">{s.desc}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <ScrollReveal direction="scale">
          <div className="divider-label mb-16">
            <span className="text-[9px] text-[var(--t4)] tracking-[0.2em] uppercase whitespace-nowrap">Me joindre</span>
          </div>
        </ScrollReveal>

        {/* Contact cards — glass with glow effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {contacts.map((c, i) => (
            <ScrollReveal key={c.label} delay={0.1 * i} direction="up">
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group glass-card hover-lift rounded-2xl border border-[var(--border1)] p-7 flex flex-col gap-4 h-full bg-[var(--bg2)]/30 block"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="badge badge-outline text-[9px] backdrop-blur-sm">{c.label}</span>
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--t3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[var(--t1)] transition-colors duration-300">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>

                <span className="text-[15px] font-medium text-[var(--t1)] group-hover:text-white transition-colors duration-300">
                  {c.value}
                </span>
                <span className="text-[11px] text-[var(--t3)] leading-[1.6]">{c.sub}</span>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Status badges */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-status badge-outline text-[10px]">Disponible immédiatement</span>
            <span className="badge badge-outline text-[10px]">Freelance & CDI</span>
            <span className="badge badge-outline text-[10px]">Remote & Hybride</span>
            <span className="badge badge-outline text-[10px]">Cotonou, Bénin</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
