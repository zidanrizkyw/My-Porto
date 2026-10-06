import { useFormatter, useTranslations } from "next-intl";

interface PeriodProps {
  start: string;
  end?: string | null;
}

// Renders "Nov 2024 — Present"; `end: null` marks an ongoing period.
export default function Period({ start, end }: PeriodProps) {
  const format = useFormatter();
  const t = useTranslations("experience");
  const month = (value: string) =>
    format.dateTime(new Date(`${value}-01T00:00:00`), { month: "short", year: "numeric" });

  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-subtle">
      {month(start)} — {end ? month(end) : t("present")}
    </span>
  );
}
