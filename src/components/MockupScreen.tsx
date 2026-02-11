import { ReactNode } from "react";

export function Nav({ items, active }: { items: string[]; active?: number }) {
  return (
    <div className="flex items-center gap-4 px-4 py-2.5 border-b border-[var(--border1)]">
      <div className="w-4 h-4 rounded bg-[var(--border2)]" />
      <div className="flex items-center gap-3 flex-1">
        {items.map((item, i) => (
          <span key={i} className={`text-[8px] ${i === active ? "text-[var(--t1)]" : "text-[var(--t4)]"}`}>{item}</span>
        ))}
      </div>
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[var(--border1)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--border1)]" />
      </div>
    </div>
  );
}

export function Sidebar({ items, active }: { items: string[]; active?: number }) {
  return (
    <div className="w-36 border-r border-[var(--border1)] py-3 flex flex-col gap-0.5 flex-shrink-0">
      {items.map((item, i) => (
        <div key={i} className={`px-3 py-1.5 text-[7px] ${i === active ? "bg-white/[0.04] text-[var(--t2)]" : "text-[var(--t4)]"}`}>
          {item}
        </div>
      ))}
    </div>
  );
}

export function StatCards({ items }: { items: { label: string; value: string; sub?: string }[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      {items.map((item, i) => (
        <div key={i} className="bg-[var(--bg3)] rounded-lg p-3 border border-[var(--border1)]">
          <span className="text-[7px] text-[var(--t4)] block">{item.label}</span>
          <span className="text-[14px] font-semibold text-[var(--t1)] block mt-1">{item.value}</span>
          {item.sub && <span className="text-[6px] text-[var(--t4)] block mt-0.5">{item.sub}</span>}
        </div>
      ))}
    </div>
  );
}

export function Chart({ h = 80, label }: { h?: number; label?: string }) {
  return (
    <div className="bg-[var(--bg3)] rounded-lg border border-[var(--border1)] p-3">
      {label && <span className="text-[7px] text-[var(--t4)] block mb-2">{label}</span>}
      <div className="flex items-end gap-1" style={{ height: h }}>
        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((v, i) => (
          <div key={i} className="flex-1 bg-white/[0.06] rounded-sm" style={{ height: `${v}%` }} />
        ))}
      </div>
    </div>
  );
}

export function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="bg-[var(--bg3)] rounded-lg border border-[var(--border1)] overflow-hidden">
      <div className="flex gap-2 px-3 py-2 border-b border-[var(--border1)]">
        {headers.map((h, i) => (
          <span key={i} className="text-[7px] text-[var(--t4)] flex-1">{h}</span>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} className="flex gap-2 px-3 py-1.5 border-b border-[var(--border1)] last:border-0">
          {row.map((cell, j) => (
            <span key={j} className="text-[7px] text-[var(--t3)] flex-1">{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function FormFields({ fields }: { fields: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      {fields.map((f, i) => (
        <div key={i}>
          <span className="text-[7px] text-[var(--t4)] block mb-1">{f}</span>
          <div className="h-6 bg-[var(--bg4)] rounded border border-[var(--border1)]" />
        </div>
      ))}
    </div>
  );
}

export function PhoneNav({ items, active }: { items: string[]; active?: number }) {
  return (
    <div className="flex items-center justify-around py-2 border-t border-[var(--border1)] mt-auto">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className={`w-4 h-4 rounded ${i === active ? "bg-white/[0.12]" : "bg-[var(--border1)]"}`} />
          <span className={`text-[5px] ${i === active ? "text-[var(--t2)]" : "text-[var(--t4)]"}`}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export function PhoneHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="px-4 pt-4 pb-2">
      {sub && <span className="text-[6px] text-[var(--t4)] block">{sub}</span>}
      <span className="text-[13px] font-semibold text-[var(--t1)] block">{title}</span>
    </div>
  );
}

export function PhoneCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-[var(--bg4)] rounded-xl p-3 border border-[var(--border1)]">
      <span className="text-[6px] text-[var(--t4)] block">{label}</span>
      <span className="text-[16px] font-semibold text-[var(--t1)] block mt-1">{value}</span>
      {sub && <span className="text-[6px] text-[var(--t4)] block mt-0.5">{sub}</span>}
    </div>
  );
}

export function ListItems({ items }: { items: { title: string; sub: string; right?: string }[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="flex items-center justify-between px-4 py-2 border-b border-[var(--border1)]">
          <div>
            <span className="text-[8px] text-[var(--t2)] block">{item.title}</span>
            <span className="text-[6px] text-[var(--t4)] block">{item.sub}</span>
          </div>
          {item.right && <span className="text-[8px] text-[var(--t3)]">{item.right}</span>}
        </div>
      ))}
    </div>
  );
}

export function StatusBadge({ label, color = "emerald" }: { label: string; color?: string }) {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-500/20 text-emerald-400",
    red: "bg-red-500/20 text-red-400",
    amber: "bg-amber-500/20 text-amber-400",
    blue: "bg-blue-500/20 text-blue-400",
  };
  return (
    <span className={`text-[6px] px-1.5 py-0.5 rounded-full ${colors[color] || colors.emerald}`}>
      {label}
    </span>
  );
}

export function TerminalBlock({ lines }: { lines: string[] }) {
  return (
    <div className="bg-[#0c0c0c] rounded-lg border border-[var(--border1)] p-3 font-mono">
      {lines.map((l, i) => (
        <div key={i} className="text-[7px] text-emerald-400/70 leading-relaxed">{l}</div>
      ))}
    </div>
  );
}

export function Placeholder({ w, h, label }: { w?: string; h?: string; label?: string }) {
  return (
    <div className="bg-[var(--bg4)] rounded-lg border border-[var(--border1)] flex items-center justify-center" style={{ width: w, height: h || "60px" }}>
      {label && <span className="text-[6px] text-[var(--t4)]">{label}</span>}
    </div>
  );
}

export function ScreenWrapper({ children, bg }: { children: ReactNode; bg?: string }) {
  return (
    <div className={`p-4 flex flex-col gap-3 min-h-[300px] ${bg || ""}`}>
      {children}
    </div>
  );
}
