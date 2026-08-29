import type { Profile } from "@/data/types";
import { MicrosoftIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";

interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  const { name, title, company, team, bio, avatar, socials } = profile;

  return (
    <header>
      <div className="flex items-start gap-5 sm:gap-7">
        <img
          src={avatar}
          alt={name}
          width={92}
          height={92}
          className="size-16 shrink-0 rounded-full border border-hairline object-cover sm:size-23"
        />
        <div className="min-w-0">
          <h1 className="text-lg font-semibold leading-snug tracking-tight sm:text-[23px]">
            {name}
          </h1>
          <p className="mt-1.5 text-[15px] font-medium sm:text-base">{title}</p>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[13px] text-ink-muted sm:text-sm">
            <MicrosoftIcon className="size-3.5 shrink-0" />
            <span>
              {company} · {team}
            </span>
          </p>
        </div>
      </div>

      <p className="mb-8 mt-8 max-w-[66ch] text-sm leading-loose text-ink-soft sm:text-[15px]">
        {bio}
      </p>

      <SocialLinks links={socials} />
    </header>
  );
}
