import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { homeVM } from "@/injector";
import Badge from "@/components/base/badge/Badge";
import Period from "@/lib/home/views/Period";
import Socials from "@/lib/home/views/Socials";
import LanguageSwitcher from "@/lib/home/views/LanguageSwitcher";
import { Project } from "@/lib/home/data/project-data";

interface Props {
  project: Project;
}

export default function ProjectHeader({ project }: Props) {
  const t = useTranslations("projects");
  const tA11y = useTranslations("a11y");

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Link
          href="/#projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transition-none"
          />
          {homeVM.getProfile().name}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
          {t(`items.${project.id}.title`)}
        </h1>
        {project.internal && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-subtle">
            <Lock aria-hidden="true" className="size-3.5" />
            {t("internal")}
          </p>
        )}
        <p className="mt-4 max-w-sm leading-normal">{t(`items.${project.id}.description`)}</p>

        <dl className="mt-8 grid max-w-sm grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
          <dt className="text-subtle">{t("detail.role")}</dt>
          <dd className="text-heading">{project.role}</dd>
          <dt className="text-subtle">{t("detail.period")}</dt>
          <dd>
            <Period start={project.start} end={project.end} />
          </dd>
          <dt className="text-subtle">{t("detail.stack")}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group mt-8 inline-flex items-center font-semibold text-heading hover:text-accent focus-visible:text-accent"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
              {t("detail.visit")}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="ml-1 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
            <span className="sr-only">{tA11y("newTab")}</span>
          </a>
        )}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Socials />
        <LanguageSwitcher href={`/projects/${project.slug}`} />
      </div>
    </header>
  );
}
