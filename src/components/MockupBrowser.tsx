import { ReactNode } from "react";

interface Props {
  url: string;
  title: string;
  children: ReactNode;
  annotations?: { label: string; value: string; top: string; left: string }[];
}

export default function MockupBrowser({ url, title, children, annotations }: Props) {
  return (
    <div className="relative">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[12px] font-medium text-[var(--t2)]">{title}</span>
        <span className="ann-text">1440 × 900 px</span>
      </div>
      <div className="mockup-frame relative">
        <div className="mockup-bar">
          <div className="flex gap-1.5">
            <div className="mockup-dot" />
            <div className="mockup-dot" />
            <div className="mockup-dot" />
          </div>
          <div className="mockup-url">{url}</div>
          <div className="w-16" />
        </div>
        <div className="relative bg-[var(--bg2)] min-h-[300px]">
          {children}
          {annotations?.map((a, i) => (
            <div key={i} className="absolute flex items-center gap-1" style={{ top: a.top, left: a.left }}>
              <svg width="6" height="6" className="flex-shrink-0">
                <circle cx="3" cy="3" r="2" fill="none" stroke="var(--t4)" strokeWidth="0.5" />
              </svg>
              <div className="flex items-center gap-1.5 bg-[var(--bg)] border border-[var(--border1)] rounded px-1.5 py-0.5">
                <span className="ann-text whitespace-nowrap">{a.label}</span>
                <span className="ann-text text-[var(--t4)]">·</span>
                <span className="ann-text whitespace-nowrap text-[var(--t4)]">{a.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
