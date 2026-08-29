import type { Education } from "@/data/types";

interface EducationListProps {
  entries: Education[];
}

export function EducationList({ entries }: EducationListProps) {
  return (
    <div className="flex flex-col gap-6">
      {entries.map(({ institution, degree, period }) => (
        <div key={institution} className="flex flex-wrap items-baseline justify-between gap-x-4">
          <div>
            <h3 className="text-sm font-medium sm:text-[15px]">{institution}</h3>
            <p className="mt-1 text-[13px] text-ink-muted sm:text-[13.5px]">{degree}</p>
          </div>
          <span className="text-xs tabular-nums text-ink-dim sm:text-[12.5px]">{period}</span>
        </div>
      ))}
    </div>
  );
}
