import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  // Path to keep when switching language
  href?: string;
}

export default function LanguageSwitcher({ href = "/" }: LanguageSwitcherProps) {
  const t = useTranslations("language");
  const locale = useLocale();

  return (
    <div role="group" aria-label={t("label")} className="flex items-center gap-1 text-xs font-bold tracking-widest">
      {routing.locales.map((item, i) => (
        <span key={item} className="flex items-center gap-1">
          {i > 0 && <span className="text-subtle">/</span>}
          <Link
            href={href}
            locale={item}
            aria-current={item === locale ? "true" : undefined}
            className={cn(
              "uppercase transition-colors hover:text-heading focus-visible:text-heading",
              item === locale ? "text-accent" : "text-subtle",
            )}
          >
            {item}
          </Link>
        </span>
      ))}
    </div>
  );
}
