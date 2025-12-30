import { H2, Large, Muted, P } from "@/components/Typography";
import { getDictionary, Languages } from "./dictionaries";
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
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Header } from "@/components/Header";

interface Props {
  language: Languages;
}

export default async function HomeTemplate(props: Props) {
  const { language } = props;

  const dict = await getDictionary(language);

  return (
    <div>
      <Header dict={dict} language={language} />

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
                    <Badge>Tailwind CSS</Badge>
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

              <div className="flex flex-col gap-4 mt-2">
                {(dict.elleve_responsabilties as string[]).map(
                  (responsability, index) => (
                    <P key={index}>{responsability}</P>
                  )
                )}
              </div>

              <P>{dict.main_tech_stack + ":"}</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>Next.js</Badge>
                </li>
                <li>
                  <Badge>Tailwind CSS</Badge>
                </li>
                <li>
                  <Badge>Shadcn</Badge>
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
                  <Badge>FastAPI</Badge>
                </li>
                <li>
                  <Badge>PostgreSQL</Badge>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <div className="relative">
                <span className="absolute block w-[8px] h-[8px] ml-[-21px] top-0 bottom-0 my-auto bg-blue-700 rounded-full"></span>
                <Large className="text-bold">{dict.rb_title}</Large>
              </div>

              <Muted>{dict.rb_tenure}</Muted>

              <Muted className="mt-4">{dict.rb_description}</Muted>

              <div className="flex flex-col gap-4 mt-2">
                {(dict.rb_responsabilties as string[]).map(
                  (responsability, index) => (
                    <P key={index}>{responsability}</P>
                  )
                )}
              </div>

              <P>{dict.main_tech_stack + ":"}</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>Angular</Badge>
                </li>
                <li>
                  <Badge>PrimeNG</Badge>
                </li>
                <li>
                  <Badge>React</Badge>
                </li>
                <li>
                  <Badge>Material UI/MUI</Badge>
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
                <Large className="text-bold">{dict.houpa_title}</Large>
              </div>

              <Muted>{dict.houpa_tenure}</Muted>

              <Muted className="mt-4">{dict.houpa_description}</Muted>

              <div className="flex flex-col gap-4 mt-2">
                {(dict.houpa_responsabilties as string[]).map(
                  (responsability, index) => (
                    <P key={index}>{responsability}</P>
                  )
                )}
              </div>

              <P>{dict.main_tech_stack + ":"}</P>
              <ul className="flex gap-2 mt-2 flex-wrap">
                <li>
                  <Badge>React</Badge>
                </li>
                <li>
                  <Badge>Material UI/MUI</Badge>
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

        <section className="mt-8 mb-[60px]" id="contact">
          <H2 className="mb-4">{dict.contact}</H2>
          <ItemGroup className="max-w-md">
            <Item>
              <ItemMedia>
                <Mail />
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>E-mail</ItemTitle>
                <ItemDescription>gabriel.dev.front@gmail.com</ItemDescription>
              </ItemContent>
              <ItemActions>
                <a href="mailto:gabriel.dev.front@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer"
                  >
                    <SquareArrowOutUpRight />
                  </Button>
                </a>
              </ItemActions>
            </Item>

            <ItemSeparator />

            <Item>
              <ItemMedia>
                <Phone />
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>WhatsApp</ItemTitle>
                <ItemDescription>+55 11 94928 8027</ItemDescription>
              </ItemContent>
              <ItemActions>
                <a href="https://wa.me/5511949288027" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer"
                  >
                    <SquareArrowOutUpRight />
                  </Button>
                </a>
              </ItemActions>
            </Item>

            <ItemSeparator />

            <Item>
              <ItemMedia>
                <Linkedin />
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>LinkedIn</ItemTitle>
              </ItemContent>
              <ItemActions>
                <a
                  href="https://www.linkedin.com/in/gabriel-barbosa-de-almeida-57b87b18a/"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <SquareArrowOutUpRight />
                  </Button>
                </a>
              </ItemActions>
            </Item>

            <ItemSeparator />

            <Item>
              <ItemMedia>
                <Github />
              </ItemMedia>
              <ItemContent className="gap-1">
                <ItemTitle>GitHub</ItemTitle>
              </ItemContent>
              <ItemActions>
                <a href="https://github.com/GabriellBarbosa" target="_blank">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <SquareArrowOutUpRight />
                  </Button>
                </a>
              </ItemActions>
            </Item>
          </ItemGroup>
        </section>
      </div>
    </div>
  );
}
