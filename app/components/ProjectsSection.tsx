import { Trophy, ExternalLink } from "lucide-react";
import { projects } from "@/app/data/constants";
import SectionTag from "./SectionTag";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTag icon={<Trophy className="w-4 h-4" />} label="03 // QUEST LOG" />

        <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
          Completed <span className="text-neon-pink">Missions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative bg-card border border-border p-6 clip-cyber hover:border-secondary transition-all hover:-translate-y-1 hover:glow-cyan"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-neon-cyan border border-secondary/40 px-2 py-1">
                  {p.tag}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-pink transition" />
              </div>

              <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-gradient-neon transition">
                {p.title}
              </h3>

              <p className="text-muted-foreground mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 bg-muted text-neon-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
