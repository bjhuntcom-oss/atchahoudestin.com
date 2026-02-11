import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  annotations?: { label: string; value: string; top: string; right: string }[];
}

export default function MockupPhone({ title, children, annotations }: Props) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="mb-3 flex items-center justify-between w-full max-w-[280px]">
        <span className="text-[12px] font-medium text-[var(--t2)]">{title}</span>
        <span className="ann-text">390 × 844 px</span>
      </div>
      <div className="mockup-phone relative">
        <div className="mockup-notch" />
        <div className="mockup-screen relative min-h-[480px]">
          {children}
          {annotations?.map((a, i) => (
            <div key={i} className="absolute flex items-center gap-1" style={{ top: a.top, right: a.right }}>
              <div className="flex items-center gap-1.5 bg-[var(--bg)] border border-[var(--border1)] rounded px-1.5 py-0.5">
                <span className="ann-text whitespace-nowrap">{a.label}</span>
                <span className="ann-text text-[var(--t4)]">·</span>
                <span className="ann-text whitespace-nowrap text-[var(--t4)]">{a.value}</span>
              </div>
              <svg width="6" height="6" className="flex-shrink-0">
                <circle cx="3" cy="3" r="2" fill="none" stroke="var(--t4)" strokeWidth="0.5" />
              </svg>
            </div>
          ))}
        </div>
        <div className="h-1 w-24 bg-[var(--border2)] rounded-full mx-auto mt-3" />
      </div>
    </div>
  );
}
