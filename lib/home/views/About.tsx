import { useTranslations } from "next-intl";
import SectionHeading from "@/components/base/section-heading/SectionHeading";

export default function About() {
  const t = useTranslations();
  const highlight = (chunks: React.ReactNode) => (
    <span className="font-medium text-heading">{chunks}</span>
  );
  const rich = {
    strong: highlight,
    beyondtech: (chunks: React.ReactNode) => (
      <a
        href="https://beyondtech.co.id/id"
        target="_blank"
        rel="noreferrer noopener"
        className="font-medium text-heading hover:text-accent focus-visible:text-accent"
      >
        {chunks}
      </a>
    ),
  };

  return (
    <section id="about" aria-label={t("nav.about")} className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <SectionHeading>{t("nav.about")}</SectionHeading>
      <div className="space-y-4">
        <p>{t.rich("about.p1", rich)}</p>
        <p>{t.rich("about.p2", rich)}</p>
        <p>{t.rich("about.p3", rich)}</p>
        <p>{t.rich("about.p4", rich)}</p>
      </div>
    </section>
  );
}
