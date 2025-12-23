import { H2, H3, H4, P } from "@/components/Typography";
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
import Image from "next/image";
import AiCvMakerImg from "@/public/images/ai_cv_maker.png";
import BookInVideoImg from "@/public/images/bookinvideo.png";
import { Badge } from "@/components/ui/badge";

interface Props {
  language: string;
}

export default async function HomeTemplate(props: Props) {
  const { language } = props;

  const dict = await getDictionary(language);

  return (
    <div>
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

      <div className="max-w-[1200px] mx-auto px-4">
        <section className="mt-8" id="projects">
          <H2 className="mb-4">{dict.projects}</H2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {dict.ai_cv_maker}
                  <Badge className="bg-green-600 ml-2">Online</Badge>
                </CardTitle>

                <CardDescription>
                  {dict.ai_cv_maker_description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  className="block rounded-md overflow-hidden"
                  target="_blank"
                  href="https://ai-cv-maker-web.vercel.app/"
                >
                  <Image src={AiCvMakerImg} alt="" />
                </a>
              </CardContent>
              <CardFooter>
                <div>
                  <P className="text-sm mb-1">{`${dict.tech_stack}:`}</P>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind css</Badge>
                    <Badge>Shadcn</Badge>
                    <Badge>Python</Badge>
                    <Badge>FastAPI</Badge>
                    <Badge>OpenAI</Badge>
                    <Badge>Google Cloud</Badge>
                  </div>

                  <ul className="mt-4 flex gap-4">
                    <li>
                      <a
                        className="block underline py-2"
                        target="_blank"
                        href="https://ai-cv-maker-web.vercel.app/"
                      >
                        <P>{dict.live_project_link}</P>
                      </a>
                    </li>
                    <li>
                      <a
                        className="block underline py-2"
                        target="_blank"
                        href="https://github.com/GabriellBarbosa/ai_cv_maker"
                      >
                        <P>{dict.github_code_link}</P>
                      </a>
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {dict.clean_code_course}
                  <Badge className="bg-yellow-100 ml-2 text-gray-900">
                    {dict.in_progress}
                  </Badge>
                </CardTitle>

                <CardDescription>
                  {dict.bookinvideo_description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <br className="hidden sm:block" />
                <div className="block rounded-md overflow-hidden">
                  <Image src={BookInVideoImg} alt="" />
                </div>
              </CardContent>
              <CardFooter>
                <div>
                  <P className="text-sm mb-1">{`${dict.tech_stack}:`}</P>
                  <div className="flex gap-2 flex-wrap">
                    <Badge>Angular</Badge>
                    <Badge>NestJS</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mt-8" id="about_me">
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

        <section className="mt-8" id="contact">
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
