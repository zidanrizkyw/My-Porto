import { useFormatter, useTranslations } from "next-intl";
import { homeVM } from "@/injector";
import Card from "@/components/base/card/Card";
import SectionHeading from "@/components/base/section-heading/SectionHeading";
import Period from "./Period";

export default function Credentials() {
  const t = useTranslations("credentials");
  const format = useFormatter();
  const education = homeVM.getEducation();

  return (
    <section id="credentials" aria-label={t("heading")} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>{t("heading")}</SectionHeading>
      <ol className="group/list">
        <li className="mb-12">
          <Card aside={<Period start={education.start} end={education.end} />} title={t("education.school")}>
            <p className="mt-2 text-sm leading-normal">{t("education.degree")}</p>
          </Card>
        </li>
        {homeVM.getCertifications().map((item) => (
          <li key={item.id} className="mb-12">
            <Card
              aside={
                <span className="text-xs font-semibold uppercase tracking-wide text-subtle">
                  {format.dateTime(new Date(`${item.date}T00:00:00`), { month: "short", year: "numeric" })}
                </span>
              }
              title={t(`items.${item.id}.title`)}
            >
              <p className="mt-2 text-sm leading-normal">{t(`items.${item.id}.description`)}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
