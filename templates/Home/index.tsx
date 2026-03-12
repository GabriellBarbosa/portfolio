import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BriefcaseBusiness,
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  SquareArrowOutUpRight,
} from "lucide-react";
export default function HomeTemplate() {
  const copy = {
    heroName: "Gabriel Barbosa",
    role: "Full Stack Engineer",
    heroShortBio:
      "I build modern web products from idea to production, with focus on business impact, scalability, and clean architecture.",
    viewProjects: "View projects",
    contactCta: "Contact",
    projects: "Projects",
    experience: "Experience",
    techStack: "Tech Stack",
    contact: "Contact",
    liveProjectLink: "Demo",
    githubCodeLink: "GitHub",
    emailLabel: "Email",
    aiCvMakerTitle: "Resume generator with AI",
    aiCvMakerDescription:
      "Enter your professional information, paste the job description, and choose your preferred language or tone. The app analyzes the context and automatically generates a tailored resume and cover letter optimized for the opportunity.",
    cleanCodeCourseTitle: "Online courses platform (BookInVideo)",
    bookinvideoDescription:
      "Conceived and developed BookInVideo, a proprietary online learning platform. The first version was built with WordPress to validate the product. I am rebuilding it with Next.js and NestJS focusing on scalability, business rules, and performance.",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    infraTools: "Infra/Tools",
  };

  const projects = [
    {
      title: copy.aiCvMakerTitle,
      description: copy.aiCvMakerDescription,
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
      title: copy.cleanCodeCourseTitle,
      description: copy.bookinvideoDescription,
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
      role: "Full Stack Engineer",
      period: "Feb 2025 - Nov 2025",
      bullets: [
        "Built internal financial workflows and product APIs used by thousands of users.",
        "Developed React interfaces integrated with complex back-end rules and payment flows.",
        "Improved maintainability by structuring modules and reducing coupling between services.",
      ],
      company: "Elleve",
    },
    {
      role: "Founder & Full Stack Engineer",
      period: "Nov 2023 - Dec 2024",
      bullets: [
        "Development of a proprietary online course platform focused on architectural organization and user experience.",
        "Full-stack development, responsible for data modeling, authentication, lesson progress tracking, and front-end and back-end integration.",
        "Deployment and production environment configuration.",
      ],
      company: "BookInVideo",
    },
    {
      role: "Front-End Developer",
      period: "Dec 2021 - Oct 2023",
      bullets: [
        "Built a browser-based label layout editor using canvas for non-technical operators.",
        "Reduced label setup time and improved operational efficiency on shop-floor routines.",
        "Implemented reusable UI components that accelerated feature delivery.",
      ],
      company: "R&B Rastreabilidade Brasil",
    },
    {
      role: "Front-End Developer",
      period: "Jan 2021 - May 2021",
      bullets: [
        "Developed reusable React components for e-commerce and landing pages.",
        "Delivered responsive interfaces with strong focus on conversion and UX.",
        "Collaborated with design and product teams to ship features quickly.",
      ],
      company: "Houpa",
    },
  ];

  const techGroups = [
    {
      title: copy.frontend,
      items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      title: copy.backend,
      items: ["Node.js", "NestJS", "Python"],
    },
    {
      title: copy.database,
      items: ["MySQL", "PostgreSQL", "TypeORM"],
    },
    {
      title: copy.infraTools,
      items: ["Docker", "GitHub Actions", "Vercel", "GCP", "Jest"],
    },
  ];

  return (
    <div>
      <Header />

      <main>
        <section id="hero">
          <div className="relative bg-background overflow-hidden">
            <div className="absolute inset-0 bg-fixed bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10 py-30 px-4">
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {copy.role}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {copy.heroName}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                {copy.heroShortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#projects">{copy.viewProjects}</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">{copy.contactCta}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-5xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            {copy.projects}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Selected products I designed and built, from architecture to
            production deployment.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
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
                    {copy.liveProjectLink}
                    <SquareArrowOutUpRight className="size-4" />
                  </a>
                  <a
                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4"
                    href={project.github}
                    target="_blank"
                  >
                    {copy.githubCodeLink}
                    <SquareArrowOutUpRight className="size-4" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="max-w-2xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            {copy.experience}
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Roles where I shipped end-to-end features with product impact.
          </p>

          <div className="mt-6">
            <div className="relative space-y-5 pl-8 before:absolute before:bottom-3 before:left-[0.55rem] before:top-3 before:w-px before:bg-border">
              {experiences.map((experience, index) => (
                <Card className="relative rounded-2xl border" key={index}>
                  <span className="absolute -left-[30px] top-6 block size-3 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 opacity-80" />

                  <CardHeader className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-1">
                      <p className="text-lg font-semibold leading-tight">
                        {experience.role}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <Badge
                          variant="secondary"
                          className="mt-2 inline-flex w-fit items-center gap-2"
                        >
                          <CalendarDays size={12} />
                          <p className="text-xs">{experience.period}</p>
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="mt-2 inline-flex w-fit items-center gap-2"
                        >
                          <CalendarDays size={12} />
                          <p className="text-xs">{experience.company}</p>
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2 text-sm list-disc pl-4">
                      {experience.bullets.map((item) => (
                        <li
                          className="text-muted-foreground max-w-2xl"
                          key={item}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tech-stack"
          className="max-w-5xl mx-auto px-4 scroll-mt-24 py-8"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            {copy.techStack}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Technologies I use daily across frontend, backend, and production
            delivery.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-4">
            {techGroups.map((group) => (
              <Card key={group.title} className="shadow-sm bg-card/95">
                <CardHeader className="pb-3">
                  <CardTitle className="text-left text-lg">
                    {group.title}
                  </CardTitle>
                  <div className="mt-1 h-[3px] w-[30px] rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 opacity-80" />
                </CardHeader>
                <CardFooter>
                  <div className="flex gap-4 flex-col flex-wrap max-w-full sm:max-w-lg">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="rounded-md px-2.5 py-1 text-sm"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

	        <section
	          id="contact"
	          className="max-w-5xl mx-auto px-4 scroll-mt-24 py-8"
	        >
	          <h2 className="text-3xl font-semibold tracking-tight text-center">
	            {copy.contact}
	          </h2>
	          <p className="mt-2 text-sm text-muted-foreground text-center">
	            Let&apos;s connect and build something meaningful together.
	          </p>

	          <div className="mt-6 grid gap-3 sm:max-w-xl mx-auto">
            <a
              className="inline-flex items-center justify-between rounded-lg border px-4 py-3"
              href="mailto:gabriel.dev.front@gmail.com"
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4" />
                {copy.emailLabel}
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
