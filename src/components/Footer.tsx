import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--bg)]">
      <div className="border-t border-[var(--border1)]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[15px] font-bold tracking-[-0.02em] text-white">DA</span>
                <div className="w-px h-4 bg-[var(--border1)]" />
                <span className="text-[13px] font-medium text-[var(--t2)]">Destin Atchahou</span>
              </div>
              <span className="text-[12px] text-[var(--t3)] max-w-[320px] leading-[1.7]">
                Ingénieur Full-Stack & Consultant Cybersécurité. 
                Architecture, développement et sécurisation de solutions 
                numériques à haute exigence technique.
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="badge badge-status badge-dark text-[9px]">Disponible</span>
                <span className="badge badge-ghost text-[9px]">Freelance</span>
              </div>
            </div>
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-[var(--t4)]">
                  Navigation
                </span>
                <Link href="/projets" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Projets
                </Link>
                <Link href="/#about" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Expertises
                </Link>
                <Link href="/#contact" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Contact
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-[var(--t4)]">
                  Réseaux
                </span>
                <a href="https://github.com/bjhuntcom-oss" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:contact@atchahoudestin.com" className="text-[12px] text-[var(--t2)] hover:text-[var(--t1)] transition-colors">
                  Email
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-medium tracking-widest uppercase text-[var(--t4)]">
                  Services
                </span>
                <span className="text-[12px] text-[var(--t3)]">Développement Web</span>
                <span className="text-[12px] text-[var(--t3)]">Applications Mobile</span>
                <span className="text-[12px] text-[var(--t3)]">Audit Sécurité</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[var(--border1)]">
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[var(--t4)]">
                © {new Date().getFullYear()} Destin Atchahou
              </span>
              <div className="w-px h-3 bg-[var(--border1)]" />
              <span className="text-[10px] text-[var(--t4)]">Tous droits réservés</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[var(--t4)]">Cotonou, Bénin</span>
              <div className="w-px h-3 bg-[var(--border1)]" />
              <span className="text-[10px] text-[var(--t4)] font-mono">atchahoudestin.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
