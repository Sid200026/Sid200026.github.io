export type SocialIcon = "github" | "linkedin" | "x" | "email";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface InlineLink {
  text: string;
  href: string;
}

export interface Role {
  title: string;
  period: string;
  summary?: string;
  summaryLinks?: InlineLink[];
  current?: boolean;
}

export interface Company {
  name: string;
  period: string;
  roles: Role[];
}

export interface Publication {
  title: string;
  authors: string[];
  selfAuthor: string;
  identifier: string;
  date: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image: { src: string; alt: string; width: number; height: number };
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Profile {
  name: string;
  title: string;
  company: string;
  team: string;
  bio: string;
  avatar: string;
  socials: SocialLink[];
  companies: Company[];
  publications: Publication[];
  projects: Project[];
  education: Education[];
}
