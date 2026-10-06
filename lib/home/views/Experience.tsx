import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { homeVM } from "@/injector";
import Badge from "@/components/base/badge/Badge";
import Card from "@/components/base/card/Card";
import SectionHeading from "@/components/base/section-heading/SectionHeading";
import Period from "./Period";

export default function Experience() {
  const t = useTranslations("experience");
  const tA11y = useTranslations("a11y");

  return (
    <section id="experience" aria-label={t("heading")} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>{t("heading")}</SectionHeading>
      <ol className="group/list">
        {homeVM.getExperiences().map((item) => (
          <li key={item.id} className="mb-12">
            <Card
              aside={<Period start={item.start} end={item.end} />}
              title={`${t(`items.${item.id}.title`)} · ${item.company}`}
              href={item.url}
              newTabLabel={tA11y("newTab")}
            >
              <p className="mt-2 text-sm leading-normal">{t(`items.${item.id}.description`)}</p>
              <ul className="mt-2 flex flex-wrap gap-2" aria-label="Technologies">
                {item.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ol>
      <a
        href={homeVM.getProfile().resumeUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex items-center font-semibold leading-tight text-heading hover:text-accent focus-visible:text-accent"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-accent motion-reduce:transition-none">
          {t("resume")}
        </span>
        <ArrowRight
          aria-hidden="true"
          className="ml-1 size-4 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
        />
        <span className="sr-only">{tA11y("newTab")}</span>
      </a>
    </section>
  );
}
