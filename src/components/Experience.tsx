import type { Company, Role } from "@/data/types";
import { RoleSummary } from "./RoleSummary";

function RoleEntry({ title, period, summary, summaryLink, current }: Role) {
  const tickColor = current ? "bg-live" : "bg-edge";

  return (
    <li className="relative">
      <span className={`absolute -left-[22px] top-[11px] h-px w-2 sm:-left-[26px] sm:w-2.5 ${tickColor}`} />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h4 className={`text-sm sm:text-[14.5px] ${current ? "text-ink" : "text-[#c8c8c8]"}`}>
          {title}
        </h4>
        <span className="text-xs tabular-nums text-[#464646] sm:text-[12.5px]">{period}</span>
      </div>
      {summary && <RoleSummary summary={summary} link={summaryLink} />}
    </li>
  );
}

function CompanyEntry({ name, period, roles }: Company) {
  return (
    <article className="mb-10 last:mb-0">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-[15px] font-semibold tracking-tight sm:text-[15.5px]">{name}</h3>
        <span className="text-xs tabular-nums text-ink-dim sm:text-[12.5px]">{period}</span>
      </div>
      <ul className="flex flex-col gap-[18px] border-l border-hairline pl-[18px] sm:pl-[22px]">
        {roles.map((role) => (
          <RoleEntry key={role.title} {...role} />
        ))}
      </ul>
    </article>
  );
}

interface ExperienceProps {
  companies: Company[];
}

export function Experience({ companies }: ExperienceProps) {
  return (
    <>
      {companies.map((company) => (
        <CompanyEntry key={company.name} {...company} />
      ))}
    </>
  );
}
