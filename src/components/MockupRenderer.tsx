import MockupBrowser from "./MockupBrowser";
import MockupPhone from "./MockupPhone";
import { Nav, Sidebar, StatCards, Chart, Table, FormFields, PhoneNav, PhoneHeader, PhoneCard, ListItems, TerminalBlock, Placeholder, ScreenWrapper, StatusBadge } from "./MockupScreen";

export interface ScreenConfig {
  type: "browser" | "phone";
  title: string;
  url?: string;
  layout: "dashboard" | "detail" | "list" | "form" | "hero" | "editor" | "terminal" | "split" | "cards" | "monitor";
  brand?: string;
  navItems?: string[];
  sidebarItems?: string[];
  sidebarActive?: number;
  stats?: { label: string; value: string; sub?: string }[];
  chartLabel?: string;
  hasChart?: boolean;
  tableHeaders?: string[];
  tableRows?: string[][];
  listItems?: { title: string; sub: string; right?: string }[];
  formFields?: string[];
  terminalLines?: string[];
  heroTitle?: string;
  heroSub?: string;
  phoneNavItems?: string[];
  phoneNavActive?: number;
  cards?: { label: string; value: string; sub?: string }[];
  statusItems?: { label: string; color: string }[];
  annotations?: { label: string; value: string; top: string; left: string }[];
  phoneAnnotations?: { label: string; value: string; top: string; right: string }[];
}

function BrowserContent({ cfg }: { cfg: ScreenConfig }) {
  const hasSidebar = cfg.sidebarItems && cfg.sidebarItems.length > 0;

  return (
    <>
      {cfg.navItems && <Nav items={cfg.navItems} active={0} />}
      <div className="flex flex-1">
        {hasSidebar && <Sidebar items={cfg.sidebarItems!} active={cfg.sidebarActive ?? 0} />}
        <ScreenWrapper>
          {cfg.layout === "hero" && (
            <>
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <Placeholder h="40px" label={cfg.brand} />
                <span className="text-[16px] font-semibold text-[var(--t1)] text-center">{cfg.heroTitle}</span>
                <span className="text-[8px] text-[var(--t3)] text-center max-w-[200px]">{cfg.heroSub}</span>
                <div className="flex gap-2 mt-2">
                  <div className="px-3 py-1 bg-white/[0.08] rounded-full text-[7px] text-[var(--t2)]">Action</div>
                  <div className="px-3 py-1 border border-[var(--border1)] rounded-full text-[7px] text-[var(--t3)]">En savoir +</div>
                </div>
              </div>
              {cfg.stats && <StatCards items={cfg.stats} />}
            </>
          )}
          {cfg.layout === "dashboard" && (
            <>
              {cfg.stats && <StatCards items={cfg.stats} />}
              {cfg.hasChart !== false && <Chart label={cfg.chartLabel || "Aperçu"} />}
              {cfg.tableHeaders && cfg.tableRows && <Table headers={cfg.tableHeaders} rows={cfg.tableRows} />}
            </>
          )}
          {cfg.layout === "detail" && (
            <>
              {cfg.heroTitle && (
                <div className="mb-2">
                  <span className="text-[12px] font-semibold text-[var(--t1)]">{cfg.heroTitle}</span>
                  {cfg.heroSub && <p className="text-[8px] text-[var(--t3)] mt-1">{cfg.heroSub}</p>}
                </div>
              )}
              {cfg.stats && <StatCards items={cfg.stats} />}
              {cfg.statusItems && (
                <div className="flex gap-2 flex-wrap">
                  {cfg.statusItems.map((s, i) => <StatusBadge key={i} label={s.label} color={s.color} />)}
                </div>
              )}
              {cfg.hasChart !== false && <Chart label={cfg.chartLabel} h={60} />}
              {cfg.tableHeaders && cfg.tableRows && <Table headers={cfg.tableHeaders} rows={cfg.tableRows} />}
            </>
          )}
          {cfg.layout === "list" && (
            <>
              {cfg.stats && <StatCards items={cfg.stats} />}
              {cfg.tableHeaders && cfg.tableRows && <Table headers={cfg.tableHeaders} rows={cfg.tableRows} />}
              {!cfg.tableHeaders && cfg.listItems && (
                <div className="bg-[var(--bg3)] rounded-lg border border-[var(--border1)] overflow-hidden">
                  <ListItems items={cfg.listItems} />
                </div>
              )}
            </>
          )}
          {cfg.layout === "form" && (
            <>
              {cfg.heroTitle && <span className="text-[12px] font-semibold text-[var(--t1)]">{cfg.heroTitle}</span>}
              {cfg.formFields && <FormFields fields={cfg.formFields} />}
              <div className="mt-2">
                <div className="px-4 py-2 bg-white/[0.08] rounded-lg text-[8px] text-[var(--t1)] text-center w-fit">
                  Enregistrer
                </div>
              </div>
            </>
          )}
          {cfg.layout === "editor" && (
            <>
              <div className="flex gap-2 mb-2">
                {["Fichier", "Édition", "Affichage"].map((m) => (
                  <span key={m} className="text-[7px] text-[var(--t4)]">{m}</span>
                ))}
              </div>
              <div className="bg-[var(--bg3)] rounded-lg border border-[var(--border1)] p-4 flex-1 min-h-[200px]">
                <div className="space-y-1.5">
                  {[1,2,3,4,5,6,7,8].map((l) => (
                    <div key={l} className="flex gap-2">
                      <span className="text-[6px] text-[var(--t4)] w-3 text-right">{l}</span>
                      <div className="h-2 rounded" style={{ width: `${30 + Math.random() * 50}%`, background: "var(--border1)" }} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {cfg.layout === "terminal" && cfg.terminalLines && (
            <TerminalBlock lines={cfg.terminalLines} />
          )}
          {cfg.layout === "split" && (
            <>
              {cfg.stats && <StatCards items={cfg.stats} />}
              <div className="grid grid-cols-2 gap-2">
                <Chart label={cfg.chartLabel || "Métrique A"} h={60} />
                <Chart label="Métrique B" h={60} />
              </div>
              {cfg.tableHeaders && cfg.tableRows && <Table headers={cfg.tableHeaders} rows={cfg.tableRows} />}
            </>
          )}
          {cfg.layout === "cards" && cfg.cards && (
            <>
              <div className="grid grid-cols-2 gap-2">
                {cfg.cards.map((c, i) => (
                  <div key={i} className="bg-[var(--bg3)] rounded-lg p-3 border border-[var(--border1)]">
                    <span className="text-[7px] text-[var(--t4)]">{c.label}</span>
                    <span className="text-[12px] font-semibold text-[var(--t1)] block mt-1">{c.value}</span>
                    {c.sub && <span className="text-[6px] text-[var(--t4)]">{c.sub}</span>}
                  </div>
                ))}
              </div>
              {cfg.hasChart !== false && <Chart label={cfg.chartLabel} />}
            </>
          )}
          {cfg.layout === "monitor" && (
            <>
              {cfg.statusItems && (
                <div className="flex gap-2 flex-wrap mb-2">
                  {cfg.statusItems.map((s, i) => <StatusBadge key={i} label={s.label} color={s.color} />)}
                </div>
              )}
              {cfg.stats && <StatCards items={cfg.stats} />}
              <div className="grid grid-cols-2 gap-2">
                <Chart label="CPU" h={50} />
                <Chart label="Mémoire" h={50} />
              </div>
              {cfg.terminalLines && <TerminalBlock lines={cfg.terminalLines} />}
            </>
          )}
        </ScreenWrapper>
      </div>
    </>
  );
}

function PhoneContent({ cfg }: { cfg: ScreenConfig }) {
  return (
    <div className="flex flex-col min-h-[480px]">
      <PhoneHeader title={cfg.heroTitle || cfg.title} sub={cfg.heroSub} />
      <div className="px-3 flex flex-col gap-2 flex-1">
        {cfg.cards && cfg.cards.map((c, i) => (
          <PhoneCard key={i} label={c.label} value={c.value} sub={c.sub} />
        ))}
        {cfg.stats && (
          <div className="grid grid-cols-2 gap-2">
            {cfg.stats.map((s, i) => (
              <PhoneCard key={i} label={s.label} value={s.value} sub={s.sub} />
            ))}
          </div>
        )}
        {cfg.listItems && <ListItems items={cfg.listItems} />}
        {cfg.hasChart !== false && cfg.chartLabel && <Chart label={cfg.chartLabel} h={50} />}
        {cfg.formFields && <FormFields fields={cfg.formFields} />}
        {cfg.statusItems && (
          <div className="flex gap-1.5 flex-wrap">
            {cfg.statusItems.map((s, i) => <StatusBadge key={i} label={s.label} color={s.color} />)}
          </div>
        )}
      </div>
      {cfg.phoneNavItems && <PhoneNav items={cfg.phoneNavItems} active={cfg.phoneNavActive ?? 0} />}
    </div>
  );
}

export default function MockupRenderer({ screens }: { screens: ScreenConfig[] }) {
  return (
    <div className="flex flex-col gap-16">
      {screens.map((cfg, i) => (
        <div key={i}>
          {cfg.type === "browser" ? (
            <MockupBrowser url={cfg.url || "app.example.com"} title={cfg.title} annotations={cfg.annotations}>
              <BrowserContent cfg={cfg} />
            </MockupBrowser>
          ) : (
            <MockupPhone title={cfg.title} annotations={cfg.phoneAnnotations}>
              <PhoneContent cfg={cfg} />
            </MockupPhone>
          )}
        </div>
      ))}
    </div>
  );
}
