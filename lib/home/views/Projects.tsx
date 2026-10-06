import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lock, Microscope } from "lucide-react";
import { homeVM } from "@/injector";
import Badge from "@/components/base/badge/Badge";
import Card from "@/components/base/card/Card";
import SectionHeading from "@/components/base/section-heading/SectionHeading";
import { Project } from "../data/project-data";

const thumbnailClass =
  "aspect-[16/10] w-full max-w-50 rounded border-2 border-line transition group-hover:border-heading/30 sm:translate-y-1";

function Thumbnail({ project, alt }: { project: Project; alt: string }) {
  if (!project.image) {
    return (
      <div aria-hidden="true" className={`${thumbnailClass} flex items-center justify-center bg-surface`}>
        <Microscope className="size-8 text-subtle" />
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={alt}
      width={400}
      height={250}
      sizes="200px"
      className={`${thumbnailClass} object-cover object-top`}
    />
  );
}

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" aria-label={t("heading")} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>{t("heading")}</SectionHeading>
      <ul className="group/list">
        {homeVM.getProjects().map((project) => {
          const title = t(`items.${project.id}.title`);
          return (
            <li key={project.id} className="mb-12">
              <Card
                asideLast
                aside={<Thumbnail project={project} alt={t("screenshotAlt", { title })} />}
                title={title}
                href={`/projects/${project.slug}`}
              >
                {project.internal && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-subtle">
                    <Lock aria-hidden="true" className="size-3.5" />
                    {t("internal")}
                  </p>
                )}
                <p className="mt-2 text-sm leading-normal">{t(`items.${project.id}.description`)}</p>
                <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
