import ScrollReveal from "./ScrollReveal";

export default function About() {
  const expertises = [
    {
      num: "01",
      icon: "◈",
      title: "Ingénierie Web",
      desc: "Conception et développement d'applications web sur mesure : plateformes SaaS multi-tenant, e-commerces haute performance, dashboards analytiques temps réel. Architecture scalable, rendu serveur (SSR/ISR), API RESTful ou GraphQL, et optimisation Core Web Vitals.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "GraphQL"],
      badge: "Applications web complexes",
    },
    {
      num: "02",
      icon: "◇",
      title: "Développement Mobile",
      desc: "Applications natives iOS et Android, du prototypage fonctionnel au déploiement sur l'App Store et Google Play. Architecture MVVM, intégration de SDKs natifs (HealthKit, ARKit, Biométrie), gestion offline-first et synchronisation temps réel.",
      tags: ["Swift", "Kotlin", "React Native", "Flutter"],
      badge: "iOS & Android natif",
    },
    {
      num: "03",
      icon: "□",
      title: "Cybersécurité Offensive & Défensive",
      desc: "Tests d'intrusion (pentest) sur applications web, API, infrastructure réseau et Active Directory. Mise en place de SOC, règles SIEM (Sigma/YARA), automatisation SOAR. Conformité RGPD, audits de code source et évaluation de la surface d'attaque.",
      tags: ["Pentest", "SIEM", "SOAR", "RGPD", "Kali Linux"],
      badge: "Audit & Protection",
    },
    {
      num: "04",
      icon: "◎",
      title: "DevOps & Automatisation",
      desc: "Pipelines CI/CD zero-downtime, Infrastructure as Code (Terraform, Ansible), orchestration Kubernetes. Automatisation des workflows métier, monitoring proactif avec alerting intelligent, stratégies de disaster recovery testées et documentées.",
      tags: ["Docker", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
      badge: "Infrastructure & Delivery",
    },
  ];

  const stack = [
    { cat: "Frontend", num: "01", items: [
      { name: "Next.js / React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Vue.js / Nuxt", level: "Avancé" },
    ]},
    { cat: "Backend", num: "02", items: [
      { name: "Node.js / Express", level: "Expert" },
      { name: "Python / FastAPI", level: "Expert" },
      { name: "Go", level: "Avancé" },
      { name: "PostgreSQL / MongoDB", level: "Expert" },
    ]},
    { cat: "Mobile", num: "03", items: [
      { name: "Swift / SwiftUI", level: "Expert" },
      { name: "Kotlin / Jetpack", level: "Expert" },
      { name: "React Native", level: "Avancé" },
      { name: "Flutter / Dart", level: "Avancé" },
    ]},
    { cat: "Sécurité & Ops", num: "04", items: [
      { name: "Kali Linux / Burp", level: "Expert" },
      { name: "Docker / K8s", level: "Expert" },
      { name: "AWS / GCP", level: "Avancé" },
      { name: "Terraform / Ansible", level: "Avancé" },
    ]},
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-num">02</span>
            <div className="w-12 h-px bg-gradient-to-r from-[var(--border2)] to-transparent" />
            <span className="badge badge-outline text-[9px]">Ce que je fais</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em] text-[var(--t1)] mb-4">
            Domaines d&apos;intervention
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up">
          <p className="text-[15px] text-[var(--t2)] max-w-2xl leading-[1.8] mb-16 lg:mb-20">
            Chaque projet bénéficie d&apos;une approche méthodique : audit des besoins,
            architecture technique, développement itératif, tests de sécurité, et accompagnement
            post-livraison. Je ne livre pas du code — je livre des solutions qui fonctionnent en production.
          </p>
        </ScrollReveal>

        {/* Expertise grid — bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24 lg:mb-32">
          {expertises.map((e, i) => (
            <ScrollReveal key={e.num} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="group glass-card hover-lift rounded-2xl border border-[var(--border1)] p-7 sm:p-9 flex flex-col gap-5 h-full bg-[var(--bg2)]/50">
                {/* Top glow line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[20px] text-[var(--t4)] group-hover:text-[var(--t3)] transition-colors duration-500">{e.icon}</span>
                    <span className="section-num">{e.num}</span>
                  </div>
                  <span className="badge badge-outline text-[8px] backdrop-blur-sm">{e.badge}</span>
                </div>

                <h3 className="text-[18px] font-semibold tracking-tight text-[var(--t1)] group-hover:text-white transition-colors duration-500">
                  {e.title}
                </h3>

                <p className="text-[13px] text-[var(--t2)] leading-[1.75] group-hover:text-[var(--t2)] transition-colors duration-500">
                  {e.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {e.tags.map((t) => (
                    <span key={t} className="badge badge-ghost text-[9px] group-hover:bg-white/[0.06] transition-colors duration-500">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <ScrollReveal direction="scale">
          <div className="divider-label mb-16">
            <span className="text-[9px] text-[var(--t4)] tracking-[0.2em] uppercase whitespace-nowrap">Stack technique</span>
          </div>
        </ScrollReveal>

        {/* Stack grid — glassmorphism cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((s, i) => (
            <ScrollReveal key={s.cat} delay={0.1 * i} direction="up">
              <div className="group glass-card hover-lift rounded-2xl border border-[var(--border1)] p-6 flex flex-col gap-5 h-full bg-[var(--bg2)]/30">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.08] to-transparent" />

                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold text-[var(--t1)]">{s.cat}</h3>
                  <span className="section-num">{s.num}</span>
                </div>

                <div className="flex flex-col gap-3">
                  {s.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between group/item">
                      <span className="text-[12px] text-[var(--t2)] group-hover/item:text-[var(--t1)] transition-colors duration-300">{item.name}</span>
                      <span className={`text-[8px] font-medium px-2 py-0.5 rounded-full ${
                        item.level === "Expert"
                          ? "bg-white/[0.08] text-[var(--t1)] border border-white/[0.06]"
                          : "bg-white/[0.03] text-[var(--t3)] border border-white/[0.03]"
                      }`}>
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
