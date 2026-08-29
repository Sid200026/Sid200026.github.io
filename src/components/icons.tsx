import type { ComponentType, SVGProps } from "react";
import type { SocialIcon } from "@/data/types";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 16 16",
  "aria-hidden": true,
  ...props,
});

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M13.6 0H2.4A2.4 2.4 0 0 0 0 2.4v11.2A2.4 2.4 0 0 0 2.4 16h11.2a2.4 2.4 0 0 0 2.4-2.4V2.4A2.4 2.4 0 0 0 13.6 0zM4.8 13.6H2.4V6h2.4v7.6zM3.6 4.9a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zM13.6 13.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4.95-1.4 1.94v3.76H6.2V6h2.3v1.05h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.6 2.88 3.68v4.11z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M9.52 6.78 15.48 0h-1.41L8.89 5.89 4.76 0H0l6.25 8.9L0 16h1.41l5.46-6.22L11.24 16H16L9.52 6.78zm-1.93 2.2-.63-.89L1.92 1.04h2.17l4.06 5.7.63.89 5.28 7.41h-2.17L7.59 8.98z" />
    </svg>
  );
}

export function EmailIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.4}>
      <rect x="1" y="3" width="14" height="10" rx="2" />
      <path d="M1.5 4 8 9l6.5-5" />
    </svg>
  );
}

export function MicrosoftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 23 23" aria-hidden {...props}>
      <rect x="1" y="1" width="10" height="10" fill="#f25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
      <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
      <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
    </svg>
  );
}

export const socialIcons: Record<SocialIcon, ComponentType<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  email: EmailIcon,
};
