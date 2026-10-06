import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { homeVM } from "@/injector";
import Navigation from "@/lib/home/views/Navigation";
import Socials from "@/lib/home/views/Socials";
import LanguageSwitcher from "@/lib/home/views/LanguageSwitcher";
import Avatar from "@/lib/home/views/Avatar";

export default function Header() {
  const t = useTranslations("profile");

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <Avatar />
        <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
          <Link href="/">{homeVM.getProfile().name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">{t("role")}</h2>
        <p className="mt-4 max-w-xs leading-normal">{t("tagline")}</p>
        <Navigation />
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Socials />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
