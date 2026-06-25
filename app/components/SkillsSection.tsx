import { Zap } from "lucide-react";
import { skills } from "@/app/data/constants";
import SectionTag from "./SectionTag";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-background/40">
      <div className="max-w-5xl mx-auto">
        <SectionTag icon={<Zap className="w-4 h-4" />} label="02 // SKILL TREE" />

        <h2 className="font-display font-black text-4xl md:text-5xl mb-12">
          Loadout & <span className="text-neon-cyan">Abilities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between font-mono text-sm uppercase tracking-wider mb-2">
                <span className="text-foreground">{s.name}</span>
                <span className="text-neon-pink">{s.lvl}/100</span>
              </div>
              <div className="h-2 bg-muted clip-cyber relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary glow-pink"
                  style={{ width: `${s.lvl}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
