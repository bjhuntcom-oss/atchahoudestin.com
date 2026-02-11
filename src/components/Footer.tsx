import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-stack bg-[var(--bg)]">
      <div className="border-t border-[var(--border1)]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="flex flex-col gap-3">
              <span className="text-[15px] font-semibold tracking-tight text-[var(--t1)]">
                Destin Atchahou
              </span>
              <span className="text-[13px] text-[var(--t3)] max-w-[280px] leading-relaxed">
                Développeur Full-Stack & Spécialiste Cybersécurité. Conception de solutions numériques robustes et sécurisées.
              </span>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
                  Navigation
                </span>
                <Link href="/projets" className="text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Projets
                </Link>
                <Link href="/#about" className="text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  À propos
                </Link>
                <Link href="/#contact" className="text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-medium tracking-widest uppercase text-[var(--t3)]">
                  Réseaux
                </span>
                <a href="https://github.com/bjhuntcom-oss" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--border1)]">
            <span className="text-[11px] text-[var(--t4)]">
              © {new Date().getFullYear()} Destin Atchahou. Tous droits réservés.
            </span>
            <span className="text-[11px] text-[var(--t4)]">
              Cotonou, Bénin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
