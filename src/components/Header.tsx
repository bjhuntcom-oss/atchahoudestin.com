"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass rounded-full px-2 py-2 flex items-center gap-1">
        <Link
          href="/projets"
          className={`px-5 py-2 rounded-full text-[13px] font-medium tracking-tight transition-colors duration-200 ${
            pathname.startsWith("/projets")
              ? "bg-white/[0.08] text-[var(--t1)]"
              : "text-[var(--t2)] hover:text-[var(--t1)]"
          }`}
        >
          Projets
        </Link>
        <Link
          href="/"
          className="px-4 py-2 text-[13px] font-semibold tracking-tight text-[var(--t1)]"
        >
          DA
        </Link>
        <Link
          href="/#contact"
          className={`px-5 py-2 rounded-full text-[13px] font-medium tracking-tight transition-colors duration-200 ${
            pathname === "/#contact"
              ? "bg-white/[0.08] text-[var(--t1)]"
              : "text-[var(--t2)] hover:text-[var(--t1)]"
          }`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
