"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-[100]">
      <nav className="glass rounded-full px-1.5 py-1.5 flex items-center gap-0.5">
        <Link
          href="/projets"
          className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-tight transition-colors duration-200 ${
            pathname.startsWith("/projets")
              ? "bg-white/[0.1] text-[var(--t1)]"
              : "text-[var(--t2)] hover:text-[var(--t1)]"
          }`}
        >
          Projets
        </Link>
        <div className="w-px h-3 bg-[var(--border-glass)] mx-1" />
        <Link
          href="/"
          className="px-4 py-2 text-[12px] font-bold tracking-[-0.02em] text-white"
        >
          DA
        </Link>
        <div className="w-px h-3 bg-[var(--border-glass)] mx-1" />
        <Link
          href="/#contact"
          className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-tight transition-colors duration-200 ${
            pathname === "/#contact"
              ? "bg-white/[0.1] text-[var(--t1)]"
              : "text-[var(--t2)] hover:text-[var(--t1)]"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
