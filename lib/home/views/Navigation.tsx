"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { observer } from "mobx-react-lite";
import { homeVM } from "@/injector";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { IHomeViewModel } from "../view-model/home-view-model";

interface Props {
  vm: IHomeViewModel;
}

const Content = observer(({ vm }: Props) => {
  const t = useTranslations("nav");
  const active = vm.getHomeState().getActiveSection();

  useEffect(() => vm.observeSections(), [vm]);

  return (
    <nav className="hidden lg:block" aria-label={t("label")}>
      <ul className="mt-16 w-max">
        {vm.getSectionIds().map((id) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <Link
                href={`/#${id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center py-3"
              >
                <span
                  className={cn(
                    "mr-4 h-px w-8 bg-subtle transition-all group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading motion-reduce:transition-none",
                    isActive && "w-16 bg-accent",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest text-subtle group-hover:text-heading group-focus-visible:text-heading",
                    isActive && "text-heading",
                  )}
                >
                  {t(id)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export default function Navigation() {
  return <Content vm={homeVM} />;
}
