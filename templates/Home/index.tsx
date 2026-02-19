import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExpandableText } from "@/components/ui/expandable-text";
import { Github, Linkedin, Mail, SquareArrowOutUpRight } from "lucide-react";
import { getDictionary, Languages } from "./dictionaries";

interface Props {
  language: Languages;
}

export default async function HomeTemplate(props: Props) {
  const { language } = props;
  const dict = await getDictionary(language);

  const projects = [
    {
      title: dict.ai_cv_maker,
      description: dict.ai_cv_maker_description,
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "Python",
        "FastAPI",
        "OpenAI",
        "GCP",
        "Vercel",
      ],
      demo: "https://ai-cv-maker-web.vercel.app/",
      github: "https://github.com/GabriellBarbosa/ai_cv_maker",
    },
    {
      title: dict.clean_code_course,
      description: dict.bookinvideo_description,
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "NestJS",
        "Node.js",
        "PostgreSQL",
        "GCP",
        "Vercel",
      ],
      demo: "https://bookinvideo-web.vercel.app/",
      github: "https://github.com/GabriellBarbosa/bookinvideo",
    },
  ];

  const experiences = [
    {
      role: dict.elleve_fullstack_developer_title,
      period: dict.elleve_tenure,
      bullets: dict.elleve_responsabilties,
    },
    {
      role: dict.rb_title,
      period: dict.rb_tenure,
      bullets: dict.rb_responsabilties,
    },
    {
      role: dict.houpa_title,
      period: dict.houpa_tenure,
      bullets: dict.houpa_responsabilties,
    },
  ];

  const techGroups = [
    { title: dict.frontend, items: dict.stack_frontend },
    { title: dict.backend, items: dict.stack_backend },
    { title: dict.database, items: dict.stack_database },
    { title: dict.infra_tools, items: dict.stack_infra_tools },
  ];

  return (
    <div>
      <Header dict={dict} language={language} />

      <main>
        <section id="hero">
          <div className="relative bg-zinc-50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10 py-24 px-4">
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {dict.full_stack_developer}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {dict.hero_name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                {dict.hero_short_bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#projects">{dict.view_projects}</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">{dict.contact_cta}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-6xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.projects}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <ExpandableText
                  lines={3}
                    moreLabel={dict.read_more}
                    lessLabel={dict.read_less}
                  >
                    {project.description}
                  </ExpandableText>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto gap-4">
                  <a
                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
                    href={project.demo}
                    target="_blank"
                  >
                    {dict.live_project_link}
                    <SquareArrowOutUpRight className="size-4" />
                  </a>
                  <a
                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
                    href={project.github}
                    target="_blank"
                  >
                    {dict.github_code_link}
                    <SquareArrowOutUpRight className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <section
          id="experience"
          className="max-w-6xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.experience}
          </h2>

          <div className="mt-6 flex flex-col gap-5">
            {experiences.map((experience) => (
              <Card key={experience.role}>
                <CardHeader>
                  <CardTitle>{experience.role}</CardTitle>
                  <CardDescription>{experience.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                    {experience.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="tech-stack"
          className="max-w-6xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.tech_stack}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {techGroups.map((group) => (
              <Card key={group.title}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="max-w-6xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            {dict.contact}
          </h2>

          <div className="mt-6 grid gap-3 sm:max-w-xl">
            <a
              className="inline-flex items-center justify-between rounded-lg border px-4 py-3"
              href="mailto:gabriel.dev.front@gmail.com"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4" />
                {dict.email_label}
              </span>
              <span className="text-sm text-muted-foreground">
                gabriel.dev.front@gmail.com
              </span>
            </a>

            <a
              className="inline-flex items-center justify-between rounded-lg border px-4 py-3"
              href="https://www.linkedin.com/in/gabriel-barbosa-de-almeida-57b87b18a/"
              target="_blank"
            >
              <span className="inline-flex items-center gap-2">
                <Linkedin className="size-4" />
                LinkedIn
              </span>
              <SquareArrowOutUpRight className="size-4" />
            </a>

            <a
              className="inline-flex items-center justify-between rounded-lg border px-4 py-3"
              href="https://github.com/GabriellBarbosa"
              target="_blank"
            >
              <span className="inline-flex items-center gap-2">
                <Github className="size-4" />
                GitHub
              </span>
              <SquareArrowOutUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
