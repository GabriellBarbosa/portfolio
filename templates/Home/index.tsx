import { H2, H3, P } from "@/components/Typography";
import { getDictionary } from "./dictionaries";
import { SelectLanguage } from "@/components/SelectLanguage";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  language: string;
}

export default async function HomeTemplate(props: Props) {
  const { language } = props;

  const dict = await getDictionary(language);

  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
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

      <div className="container mx-auto px-4">
        <section id="projects">
          <H2 className="mb-4">{dict.projects}</H2>

          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="about_me">
          <H2 className="mb-4">{dict.about_me}</H2>

          <div>
            <H3>Gabriel Barbosa de Almeida</H3>
            <P>Desenolvedor Full Stack</P>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt eius odit, hic voluptas cum reprehenderit
              obcaecati porro architecto doloremque? Doloribus cupiditate,
              sapiente quis velit enim sed impedit autem totam.
            </P>

            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt eius odit, hic voluptas cum reprehenderit
              obcaecati porro architecto doloremque? Doloribus cupiditate,
              sapiente quis velit enim sed impedit autem totam.
            </P>

            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sunt eius odit, hic voluptas cum reprehenderit
              obcaecati porro architecto doloremque? Doloribus cupiditate,
              sapiente quis velit enim sed impedit autem totam.
            </P>
          </div>
        </section>

        <section id="contact">
          <H2 className="mb-4">{dict.contact}</H2>

          <ul>
            <li>E-mail: gabriel.dev.front@gmail.com</li>
            <li>Celular: 11 94928 8027</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
