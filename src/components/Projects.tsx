import type { Project } from "@/data/types";

function ProjectCard({ title, description, href, linkLabel, image }: Project) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block overflow-hidden rounded-lg border border-hairline bg-gradient-to-b from-[#0f0f0f] to-[#0b0b0b] transition-colors duration-200 hover:border-edge"
    >
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        className="block h-auto w-full border-b border-hairline"
      />
      <div className="px-5 py-4 sm:px-6 sm:py-5">
        <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-medium sm:text-[15px]">{title}</h3>
          <span className="text-[12.5px] text-ink-dim">
            {linkLabel} <span aria-hidden>↗</span>
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-ink-muted sm:text-[13.5px]">{description}</p>
      </div>
    </a>
  );
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.href} {...project} />
      ))}
    </div>
  );
}
