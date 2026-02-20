import { Dict } from "@/templates/Home/dictionaries";
import { SelectLanguage } from "../SelectLanguage";
import { H3, P } from "../Typography";
import { useMemo } from "react";
import { MobileMenu } from "../MobileMenu";

interface Props {
  dict: Dict;
  language: string;
}

export function Header(props: Props) {
  const { dict, language } = props;

  const links = useMemo(
    () => [
      {
        to: "#projects",
        label: dict.projects,
      },
      {
        to: "#experience",
        label: dict.experience,
      },
      {
        to: "#tech-stack",
        label: dict.tech_stack,
      },
      {
        to: "#contact",
        label: dict.contact,
      },
    ],
    [dict],
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="mb-4 flex justify-center">
          <SelectLanguage lang={language} />
        </div>

        <div className="flex gap-4 items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-indigo-700 to-indigo-600 text-lg font-bold text-white shadow-sm">
              G
            </div>
            <div>
              <P className="text-left text-xs uppercase tracking-[0.14em]">
                Gabriel Barbosa
              </P>
              <H3 className="text-lg">{dict.full_stack_developer}</H3>
            </div>
          </div>

          <nav className="hidden sm:flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
            {links.map(({ to, label }, index) => (
              <a className="py-2" href={to} key={index}>
                {label}
              </a>
            ))}
          </nav>

          <div className="sm:hidden">
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  );
}
