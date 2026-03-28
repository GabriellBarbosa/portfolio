import { H3, P } from "../Typography";
import { useMemo } from "react";
import { MobileMenu } from "../MobileMenu";

export function Header() {
  const links = useMemo(
    () => [
      {
        to: "#projects",
        label: "Projects",
      },
      {
        to: "#experience",
        label: "Experience",
      },
      {
        to: "#tech-stack",
        label: "Tech Stack",
      },
      {
        to: "#contact",
        label: "Contact me",
      },
    ],
    [],
  );

  return (
    <header className="bg-background/95 border-b">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex gap-4 items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <div>
              <P className="text-left text-xs uppercase tracking-[0.14em]">
                Gabriel Barbosa
              </P>
              <H3 className="text-lg">Full Stack Developer</H3>
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
