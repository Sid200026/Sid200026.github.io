import { Fragment } from "react";
import type { InlineLink } from "@/data/types";

const LINK_PLACEHOLDER = "{link}";

interface RoleSummaryProps {
  summary: string;
  link?: InlineLink;
}

/**
 * Renders a summary where `{link}` is substituted with an anchor. Splitting on the
 * placeholder keeps the copy in the data layer free of markup.
 */
export function RoleSummary({ summary, link }: RoleSummaryProps) {
  const segments = summary.split(LINK_PLACEHOLDER);

  return (
    <p className="mt-1.5 max-w-[62ch] text-sm leading-relaxed text-ink-muted">
      {segments.map((segment, index) => (
        <Fragment key={index}>
          {segment}
          {link && index < segments.length - 1 && (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="border-b border-edge text-[#c0c0c0] transition-colors duration-200 hover:border-ink-muted hover:text-white"
            >
              {link.text}
            </a>
          )}
        </Fragment>
      ))}
    </p>
  );
}
