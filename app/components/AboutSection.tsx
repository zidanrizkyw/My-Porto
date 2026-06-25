import { Code2 } from "lucide-react";
import SectionTag from "./SectionTag";
import InfoRow from "./InfoRow";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTag icon={<Code2 className="w-4 h-4" />} label="01 // ABOUT" />

        <h2 className="font-display font-black text-4xl md:text-5xl mb-8">
          Character <span className="text-neon-pink">Profile</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
          <div className="md:col-span-2 space-y-4 text-foreground/85 font-sans text-base leading-relaxed">
            <p>
              Halo, gue <span className="text-neon-cyan">Zidan</span> — frontend developer yang
              memperlakukan tiap project seperti open-world game: eksplorasi, level up, dan ngerjain
              side quest tanpa skip cutscene.
            </p>
            <p>
              Spesialisasi gue bikin interface yang responsif, accessible, dan punya soul. Dari
              landing page yang glitch sampai web app real-time, gue ngebangun pengalaman digital
              yang bikin user pengen <span className="text-neon-pink">&quot;one more click&quot;</span>.
            </p>
            <p>
              Saat ini lagi grinding di stack React + TypeScript + TanStack, dan main-main sama WebGL
              buat boss fight visual.
            </p>
          </div>

          <ul className="space-y-3 border border-border p-5 clip-cyber bg-card">
            <InfoRow k="CLASS" v="Frontend Dev" />
            <InfoRow k="REGION" v="Indonesia" />
            <InfoRow k="GUILD" v="Web Crafters" />
            <InfoRow k="WEAPON" v="React + TS" />
            <InfoRow k="STATUS" v="Open to Hire" />
          </ul>
        </div>
      </div>
    </section>
  );
}
