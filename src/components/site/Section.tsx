import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"><span className="size-1.5 rounded-full bg-azure" />{children}</div>;
}

export function SectionHeader({ eyebrow, title, lead, align = "left" }: { eyebrow?: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-balance">{title}</h2>
      {lead && <p className="mt-5 text-lg text-muted-foreground text-balance">{lead}</p>}
    </div>
  );
}