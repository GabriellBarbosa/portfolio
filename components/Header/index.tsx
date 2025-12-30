import { Dict } from "@/templates/Home/dictionaries";
import { SelectLanguage } from "../SelectLanguage";
import { H3, P } from "../Typography";

interface Props {
  dict: Dict;
  language: string;
}

export function Header(props: Props) {
  const { dict, language } = props;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex justify-center mb-4">
          <SelectLanguage lang={language} />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex justify-center items-center gap-3">
            <div>
              <P className="text-xs uppercase tracking-[0.14em] text-center sm:text-left">
                Gabriel Barbosa
              </P>
              <H3 className="text-lg">{dict.full_stack_developer}</H3>
            </div>
          </div>

          <nav className="flex justify-center">
            <a
              className="mr-4 py-2 transition hover:border-white/30 hover:bg-white/5"
              href="#projects"
            >
              {dict.projects}
            </a>
            <a
              className="mx-4 py-2 transition hover:border-white/30 hover:bg-white/5"
              href="#about_me"
            >
              {dict.about_me}
            </a>
            <a
              className="ml-4 py-2 transition hover:border-white/30 hover:bg-white/5"
              href="#contact"
            >
              {dict.contact}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
