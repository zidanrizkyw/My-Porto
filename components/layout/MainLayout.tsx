import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import Spotlight from "@/lib/home/views/Spotlight";

interface MainLayoutProps {
  // Sticky left column; defaults to the profile header used on the home page
  aside?: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ aside = <Header />, children }) => {
  const t = useTranslations("a11y");

  return (
    <div className="relative">
      <Spotlight />
      <a
        href="#content"
        className="sr-only rounded bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-background focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50"
      >
        {t("skip")}
      </a>
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {aside}
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
