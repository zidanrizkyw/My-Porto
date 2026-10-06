import { useTranslations } from "next-intl";

const credits = {
  next: "https://nextjs.org/",
  tailwind: "https://tailwindcss.com/",
};

export default function Footer() {
  const t = useTranslations("footer");
  const link = (href: string) => {
    const Credit = (chunks: React.ReactNode) => (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="font-medium text-muted hover:text-accent focus-visible:text-accent"
      >
        {chunks}
      </a>
    );
    return Credit;
  };

  return (
    <footer className="max-w-md pb-16 text-sm text-subtle sm:pb-0">
      <p>
        {t.rich("text", {
          next: link(credits.next),
          tailwind: link(credits.tailwind),
        })}
      </p>
    </footer>
  );
}
