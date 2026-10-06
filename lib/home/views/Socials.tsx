import { useTranslations } from "next-intl";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { homeVM } from "@/injector";
import { SocialKey } from "../data/profile-data";

const icons: Record<SocialKey, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
};

export default function Socials() {
  const t = useTranslations("social");

  return (
    <ul className="flex items-center gap-5" aria-label={t("label")}>
      {homeVM.getProfile().socials.map(({ key, href }) => {
        const Icon = icons[key];
        return (
          <li key={key} className="text-xs">
            <a
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer noopener"
              aria-label={t(key)}
              title={t(key)}
              className="block text-muted transition-colors hover:text-heading focus-visible:text-heading"
            >
              <Icon className="size-6" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
