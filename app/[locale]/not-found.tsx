import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import MainLayout from "@/components/layout/MainLayout";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <MainLayout>
      <div className="flex min-h-[60vh] flex-col justify-center">
        <p className="text-sm font-semibold tracking-widest text-accent">404</p>
        <h2 className="mt-2 text-3xl font-bold text-heading">{t("title")}</h2>
        <p className="mt-4 max-w-md text-muted">{t("description")}</p>
        <Link
          href="/"
          className="mt-8 w-fit font-semibold text-heading hover:text-accent focus-visible:text-accent"
        >
          ← {t("backHome")}
        </Link>
      </div>
    </MainLayout>
  );
}
