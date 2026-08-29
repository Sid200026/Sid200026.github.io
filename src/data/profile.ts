import type { Profile } from "./types";

export const profile: Profile = {
  name: "Siddharth Singha Roy",
  title: "Research Scientist 2",
  company: "Microsoft",
  team: "GitHub Copilot",
  bio: "Research Scientist on the GitHub Copilot Science team at Microsoft, working on Large Language Models and AI for Software Engineering. Building intelligent systems to make developers more productive.",
  avatar: "/me.jpg",

  socials: [
    { label: "github", href: "https://github.com/Sid200026", icon: "github" },
    { label: "linkedin", href: "https://www.linkedin.com/in/sid200026", icon: "linkedin" },
    { label: "x", href: "https://x.com/Sid200026", icon: "x" },
    { label: "email", href: "mailto:siddharthsingharoy@gmail.com", icon: "email" },
  ],

  companies: [
    {
      name: "Microsoft",
      period: "2022 — Present",
      roles: [
        {
          title: "Research Scientist 2",
          period: "Jul 2025 —",
          current: true,
          summary: "GitHub Copilot — {link} and HydraFusion.",
          summaryLink: {
            text: "auto-mode model routing",
            href: "https://github.blog/ai-and-ml/github-copilot/getting-more-from-each-token-how-copilot-improves-context-handling-and-model-routing/",
          },
        },
        {
          title: "Software Engineer 2",
          period: "2024 — 2025",
          summary: "{link} — a managed Azure service for running Playwright browser tests at cloud scale.",
          summaryLink: {
            text: "Microsoft Playwright Testing",
            href: "https://azure.microsoft.com/en-us/products/playwright-testing",
          },
        },
        { title: "Software Engineer", period: "2022 — 2024" },
        { title: "Software Development Intern", period: "Jan — Jun 2022" },
      ],
    },
    {
      name: "NatWest Group",
      period: "2021",
      roles: [{ title: "Software Engineer Intern", period: "May — Jul" }],
    },
  ],

  publications: [
    {
      title: "HyDRA: Hybrid Dynamic Routing Architecture for Heterogeneous LLM Pools",
      authors: ["A. Garg", "S. Singha Roy", "J. Jang", "F. Brancasi", "S. Fu"],
      selfAuthor: "S. Singha Roy",
      identifier: "arXiv 2605.17106",
      date: "May 2026",
      href: "https://arxiv.org/abs/2605.17106",
    },
  ],

  education: [
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech, Computer Engineering",
      period: "2018 — 2022",
    },
  ],
};
