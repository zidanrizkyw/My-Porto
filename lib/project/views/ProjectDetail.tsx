import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { homeVM } from "@/injector";
import { Project } from "@/lib/home/data/project-data";

interface Props {
  project: Project;
}

function DetailHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-6 text-sm font-bold uppercase tracking-widest text-heading">
      {children}
    </h2>
  );
}

export default function ProjectDetail({ project }: Props) {
  const t = useTranslations("projects");
  const item = `items.${project.id}`;
  const overview = t.raw(`${item}.overview`) as string[];
  const highlights = t.raw(`${item}.highlights`) as string[];
  const { previous, next } = homeVM.getAdjacentProjects(project.slug);

  return (
    <>
      <section aria-labelledby="overview" className="mb-16 md:mb-24">
        <DetailHeading id="overview">{t("detail.overview")}</DetailHeading>
        <div className="space-y-4">
          {overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="highlights" className="mb-16 md:mb-24">
        <DetailHeading id="highlights">{t("detail.highlights")}</DetailHeading>
        <ul className="space-y-3">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="gallery" className="mb-16 md:mb-24">
        <DetailHeading id="gallery">{t("detail.gallery")}</DetailHeading>
        {project.blurred && <p className="-mt-3 mb-6 text-xs text-subtle">{t("detail.blurNote")}</p>}
        {project.gallery.length === 0 ? (
          <p className="text-sm text-muted">{t("detail.noGallery")}</p>
        ) : (
          <div className="space-y-10">
            {project.gallery.map((image) => {
              const caption = t(`${item}.gallery.${image.key}`);
              return (
                <figure key={image.src}>
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block overflow-hidden rounded-md border border-line transition hover:border-heading/30 focus-visible:border-accent"
                  >
                    <Image
                      src={image.src}
                      alt={caption}
                      width={1440}
                      height={900}
                      sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                    <span className="sr-only">{t("detail.openImage")}</span>
                  </a>
                  <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </section>

      {previous && next && (
        <nav aria-label={t("detail.others")} className="mb-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-md p-4 transition hover:bg-surface focus-visible:bg-surface"
          >
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-subtle">
              <ArrowLeft aria-hidden="true" className="size-3.5 transition-transform group-hover:-translate-x-1" />
              {t("detail.previous")}
            </span>
            <span className="mt-2 block font-medium text-heading group-hover:text-accent">
              {t(`items.${previous.id}.title`)}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-md p-4 text-right transition hover:bg-surface focus-visible:bg-surface"
          >
            <span className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-widest text-subtle">
              {t("detail.next")}
              <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-2 block font-medium text-heading group-hover:text-accent">
              {t(`items.${next.id}.title`)}
            </span>
          </Link>
        </nav>
      )}
    </>
  );
}
