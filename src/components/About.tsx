export default function About() {
  const expertises = [
    { num: "01", icon: "◈", title: "Développement Web", desc: "Sites vitrine, e-commerce, applications web complexes. Next.js, React, Node.js avec optimisation SEO.", tags: ["Next.js", "React", "Node.js"] },
    { num: "02", icon: "◇", title: "Applications Mobile", desc: "Applications natives iOS et Android. De la conception UX au déploiement sur les stores.", tags: ["Swift", "Kotlin", "React Native"] },
    { num: "03", icon: "□", title: "Cybersécurité", desc: "Audit de sécurité, tests d'intrusion, mise en place SOC. Protection de bout en bout.", tags: ["Pentest", "Audit", "SOC"] },
    { num: "04", icon: "◎", title: "Automatisation", desc: "Pipelines CI/CD, Infrastructure as Code, automatisation de processus métier complexes.", tags: ["CI/CD", "IaC", "Scripting"] },
  ];

  const stack = [
    { cat: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { cat: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"] },
    { cat: "Mobile", items: ["Swift", "Kotlin", "React Native", "Flutter"] },
    { cat: "DevOps & Sécu", items: ["Docker", "Kubernetes", "AWS", "Kali Linux"] },
  ];

  return (
    <section id="about" className="section-stack min-h-screen bg-[var(--bg)] px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
            Expertises
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)] mt-3">
            Services
          </h2>
          <p className="text-[15px] text-[var(--t2)] mt-4 max-w-lg leading-relaxed">
            De la conception à la production, une expertise complète pour vos projets numériques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border1)] rounded-2xl overflow-hidden mb-32">
          {expertises.map((e) => (
            <div key={e.num} className="bg-[var(--bg)] p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[18px] text-[var(--t3)]">{e.icon}</span>
                <span className="text-[11px] font-mono text-[var(--t4)]">{e.num}</span>
              </div>
              <h3 className="text-[17px] font-semibold tracking-tight text-[var(--t1)]">{e.title}</h3>
              <p className="text-[13px] text-[var(--t2)] leading-relaxed">{e.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {e.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-[var(--t3)] px-2.5 py-1 border border-[var(--border1)] rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight text-[var(--t1)]">
            Technologies
          </h2>
          <p className="text-[15px] text-[var(--t2)] mt-4 max-w-lg leading-relaxed">
            Une stack technique moderne et éprouvée pour des solutions performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((s, i) => (
            <div key={s.cat} className="border border-[var(--border1)] rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-semibold text-[var(--t1)]">{s.cat}</h3>
                <span className="text-[11px] font-mono text-[var(--t4)]">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {s.items.map((item) => (
                  <span key={item} className="text-[12px] text-[var(--t2)]">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
