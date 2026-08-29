import { Fragment } from "react";
import type { Publication } from "@/data/types";

function AuthorList({ authors, selfAuthor }: Pick<Publication, "authors" | "selfAuthor">) {
  return (
    <p className="text-[13px] leading-relaxed text-ink-muted sm:text-[13.5px]">
      {authors.map((author, index) => (
        <Fragment key={author}>
          {index > 0 && ", "}
          <span className={author === selfAuthor ? "font-medium text-[#c8c8c8]" : undefined}>
            {author}
          </span>
        </Fragment>
      ))}
    </p>
  );
}

function PublicationCard(publication: Publication) {
  const { title, identifier, date, href } = publication;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-lg border border-hairline bg-gradient-to-b from-[#0f0f0f] to-[#0b0b0b] px-5 py-4 transition-colors duration-200 hover:border-edge sm:px-6 sm:py-5"
    >
      <h3 className="mb-2.5 flex items-start gap-2.5 text-sm font-medium leading-relaxed sm:text-[15px]">
        <span>{title}</span>
        <span aria-hidden className="mt-0.5 shrink-0 text-ink-dim">
          ↗
        </span>
      </h3>
      <AuthorList {...publication} />
      <div className="mt-3 flex items-center gap-3 text-[12.5px] text-ink-dim">
        <span className="rounded border border-[#262626] px-2 py-0.5 text-[11.5px] text-[#5e5e5e]">
          {identifier}
        </span>
        <span>{date}</span>
      </div>
    </a>
  );
}

interface PublicationsProps {
  publications: Publication[];
}

export function Publications({ publications }: PublicationsProps) {
  return (
    <div className="flex flex-col gap-4">
      {publications.map((publication) => (
        <PublicationCard key={publication.href} {...publication} />
      ))}
    </div>
  );
}
