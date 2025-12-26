import { H2, H3, H4, Large, Muted, P } from "@/components/Typography";
import { getDictionary } from "./dictionaries";
import { SelectLanguage } from "@/components/SelectLanguage";
import {
  Card,
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

      <div className="max-w-[1200px] mx-auto px-4 ">
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
                    <Badge>Vercel</Badge>
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
                    <Badge>Node.js</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mt-8" id="about_me">
          <H2 className="mb-4">{dict.about_me}</H2>

          <div className="border-l-2 border-blue-50 pl-4 max-w-3xl">
            <div>
              <div className="relative">
                <span className="absolute block w-[8px] h-[8px] ml-[-21px] top-0 bottom-0 my-auto bg-blue-700 rounded-full"></span>
                <Large className="text-bold">
                  {dict.elleve_fullstack_developer_title}
                </Large>
              </div>

              <Muted className="text-sm">{dict.elleve_tenure}</Muted>

              <Muted className="mt-4">{dict.elleve_description}</Muted>

              <P>{dict.responsabilities + ':'}</P>
              <ul className="flex flex-col gap-4 list-disc pl-6 mt-2">
                {(dict.elleve_responsabilties as string[]).map(
                  (responsability, index) => (
                    <li key={index}>
                      <P>{responsability}</P>
                    </li>
                  )
                )}
              </ul>

              <P>{dict.main_tech_stack + ':'}</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>Next.js</Badge>
                </li>
                <li>
                  <Badge>NestJS</Badge>
                </li>
                <li>
                  <Badge>Node.js</Badge>
                </li>
                <li>
                  <Badge>TypeORM</Badge>
                </li>
                <li>
                  <Badge>Python</Badge>
                </li>
                <li>
                  <Badge>PostgreSQL</Badge>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="relative">
                <span className="absolute block w-[8px] h-[8px] ml-[-21px] top-0 bottom-0 my-auto bg-blue-700 rounded-full"></span>
                <Large className="text-bold">
                  Desenvolvedor Front-End | R&B Rastreabilidade Brasil
                </Large>
              </div>

              <Muted>dez de 2021 - out de 2023 (1 ano e 11 meses)</Muted>

              <Muted className="mt-4">
                A R&B é uma startup de que oferece sistemas de rastreabilidade
                de produtos fazendo uso de etiquetas RFID (Radio-Frequency
                Identification).
              </Muted>

              <P>Responsabilidades:</P>
              <ul className="flex flex-col gap-4 list-disc pl-6 mt-2">
                <li>
                  <P>
                    Desenvolvi uma aplicação web para criação de layouts de
                    etiquetas diretamente no navegador, utilizando canvas.
                  </P>
                </li>
                <li>
                  <P>
                    O sistema converte automaticamente o layout visual em ZPL
                    (Zebra Programming Language), eliminando a necessidade de
                    edição manual.
                  </P>
                </li>
                <li>
                  <P>
                    A solução reduziu o tempo de criação de etiquetas e melhorou
                    significativamente a usabilidade para usuários não técnicos.
                  </P>
                </li>
              </ul>

              <P>Principais tecnologias utilizadas:</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>Angular</Badge>
                </li>
                <li>
                  <Badge>React</Badge>
                </li>
                <li>
                  <Badge>Node.js</Badge>
                </li>
                <li>
                  <Badge>NestJS</Badge>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="relative">
                <span className="absolute block w-[8px] h-[8px] ml-[-21px] top-0 bottom-0 my-auto bg-blue-700 rounded-full"></span>
                <Large className="text-bold">
                  Desenvolvedor Front-End | Houpa
                </Large>
              </div>

              <Muted>jan de 2021 - mai de 2021 (5 meses)</Muted>

              <Muted className="mt-4">
                O Houpa é uma plataforma de compra e venda b2c e b2b.
              </Muted>

              <P>Responsabilidades:</P>

              <ul className="flex flex-col gap-4 list-disc pl-6 mt-2">
                <li>
                  <P>
                    Fui responsável pelo desenvolvimento de componentes
                    reutilizáveis em React para o projeto de e-commerce e pela
                    criação de landing pages responsivas. A stack incluía React
                    com Material UI no front-end e Node.js com NestJS no
                    back-end.
                  </P>
                </li>
              </ul>

              <P>Principais tecnologias utilizadas:</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>React</Badge>
                </li>
                <li>
                  <Badge>MUI</Badge>
                </li>
                <li>
                  <Badge>NestJS</Badge>
                </li>
                <li>
                  <Badge>Node.js</Badge>
                </li>
              </ul>
            </div>
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
