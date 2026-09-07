import { Fragment } from "react";
import type { InlineLink } from "@/data/types";

const LINK_PLACEHOLDER = "{link}";

interface RoleSummaryProps {
  summary: string;
  links?: InlineLink[];
}

/**
 * Replaces each `{link}` placeholder with the link at the same position.
 */
export function RoleSummary({ summary, links = [] }: RoleSummaryProps) {
  const segments = summary.split(LINK_PLACEHOLDER);

  return (
    <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-ink-muted">
      {segments.map((segment, index) => (
        <Fragment key={index}>
          {segment}
          {links[index] && index < segments.length - 1 && (
            <a
              href={links[index].href}
              target="_blank"
              rel="noreferrer"
              className="border-b border-edge text-[#c0c0c0] transition-colors duration-200 hover:border-ink-muted hover:text-white"
            >
              {links[index].text}
            </a>
          )}
        </Fragment>
      ))}
    </p>
  );
}
