export default function About() {
  const expertises = [
    {
      num: "01",
      title: "Ingénierie Web",
      desc: "Conception et développement d'applications web sur mesure : plateformes SaaS multi-tenant, e-commerces haute performance, dashboards analytiques temps réel. Chaque projet est architecturé pour la scalabilité, avec rendu serveur (SSR/ISR), API RESTful ou GraphQL, et optimisation Core Web Vitals.",
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "GraphQL"],
      badge: "Applications web complexes",
    },
    {
      num: "02",
      title: "Développement Mobile",
      desc: "Applications natives iOS et Android, du prototypage fonctionnel au déploiement sur l'App Store et Google Play. Architecture MVVM, intégration de SDKs natifs (HealthKit, ARKit, Biométrie), gestion offline-first et synchronisation temps réel via WebSocket ou Firebase.",
      tags: ["Swift", "Kotlin", "React Native", "Flutter"],
      badge: "iOS & Android natif",
    },
    {
      num: "03",
      title: "Cybersécurité Offensive & Défensive",
      desc: "Tests d'intrusion (pentest) sur applications web, API, infrastructure réseau et Active Directory. Mise en place de SOC, règles SIEM (Sigma/YARA), automatisation de la réponse aux incidents (SOAR). Conformité RGPD, audits de code source et évaluation de la surface d'attaque.",
      tags: ["Pentest", "SIEM", "SOAR", "RGPD", "Kali Linux"],
      badge: "Audit & Protection",
    },
    {
      num: "04",
      title: "DevOps & Automatisation",
      desc: "Pipelines CI/CD zero-downtime, Infrastructure as Code (Terraform, Ansible), orchestration de containers Kubernetes. Automatisation des workflows métier, monitoring proactif avec alerting intelligent, et stratégies de disaster recovery testées et documentées.",
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
    <section id="about" className="min-h-screen flex items-start justify-center px-4 bg-[var(--bg)]">
      <div className="section-card w-full max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
        {/* Decorative dot grid */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 dot-grid opacity-20 rounded-tr-3xl" />

        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-16 motion-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-num">02</span>
              <div className="w-8 h-px bg-[var(--border2)]" />
              <span className="badge badge-outline text-[9px]">Ce que je fais</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)]">
              Domaines d&apos;intervention
            </h2>
            <p className="text-[15px] text-[var(--t2)] mt-4 max-w-2xl leading-[1.7]">
              Chaque projet bénéficie d&apos;une approche méthodique : audit des besoins, 
              architecture technique, développement itératif, tests de sécurité, et accompagnement 
              post-livraison. Je ne livre pas du code — je livre des solutions qui fonctionnent en production.
            </p>
          </div>

          {/* Expertise grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border1)] rounded-2xl overflow-hidden mb-24 motion-up motion-up-delay-1">
            {expertises.map((e) => (
              <div key={e.num} className="bg-[var(--bg)] p-8 lg:p-10 flex flex-col gap-5 relative glass-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="section-num">{e.num}</span>
                    <div className="w-5 h-px bg-[var(--border2)]" />
                  </div>
                  <span className="badge badge-dark text-[8px]">{e.badge}</span>
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight text-[var(--t1)]">{e.title}</h3>
                <p className="text-[13px] text-[var(--t2)] leading-[1.7]">{e.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                  {e.tags.map((t) => (
                    <span key={t} className="badge badge-ghost text-[9px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="divider-label mb-16 motion-up motion-up-delay-2">
            <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase whitespace-nowrap">Stack technique</span>
          </div>

          {/* Stack grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 motion-up motion-up-delay-3">
            {stack.map((s) => (
              <div key={s.cat} className="border border-[var(--border1)] rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden hover-lift glass-card">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold text-[var(--t1)]">{s.cat}</h3>
                  <span className="section-num">{s.num}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {s.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-[12px] text-[var(--t2)]">{item.name}</span>
                      <span className="badge badge-ghost text-[8px] py-0.5 px-2">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <span className="section-num">02 / 04</span>
          <div className="w-8 h-px bg-[var(--border2)]" />
          <span className="text-[9px] text-[var(--t4)] tracking-widest uppercase">Expertises</span>
        </div>
      </div>
    </section>
  );
}
