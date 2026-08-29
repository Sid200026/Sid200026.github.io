import type { SocialLink } from "@/data/types";
import { socialIcons } from "./icons";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav className="flex flex-wrap gap-2.5">
      {links.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-hairline px-3 py-1.5 text-[13.5px] text-ink-muted transition-colors duration-200 hover:border-edge hover:bg-surface hover:text-ink"
          >
            <Icon className="size-3.5 opacity-75" />
            {label}
          </a>
        );
      })}
    </nav>
  );
}
