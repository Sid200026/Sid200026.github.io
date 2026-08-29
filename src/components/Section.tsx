import type { ReactNode } from "react";

interface SectionProps {
  label: string;
  children: ReactNode;
}

export function Section({ label, children }: SectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-7 border-b border-hairline pb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
        {label}
      </h2>
      {children}
    </section>
  );
}
