import { stats } from "@/app/data/constants";

export default function StatsSection() {
  return (
    <section className="border-y border-border bg-background/60 backdrop-blur">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-8 text-center ${i !== 0 ? "md:border-l border-border" : ""} ${i % 2 === 1 ? "border-l border-border md:border-l" : ""}`}
          >
            <div className="font-display font-black text-4xl text-gradient-neon">
              {s.value}
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
