import Image from "next/image";
import { Gamepad2, ChevronRight } from "lucide-react";
import avatar from "@/app/assets/avatar-zidan.png";
import heroBg from "@/app/assets/hero-bg.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 grid-bg">
      <div
        className="absolute inset-0 -z-10 opacity-30 bg-cover bg-center scanlines"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full py-20">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan border border-secondary/40 px-3 py-1 mb-6 clip-cyber">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Player_01 online
          </div>

          <h1 className="font-display text-2xl md:text-4xl leading-[1.4] mb-6">
            ZIDAN <br />
            <span className="text-gradient-neon animate-flicker">RIZKY W.</span>
          </h1>

          <p className="font-mono text-2xl text-neon-cyan max-w-md mb-2">
            &gt; Frontend Developer_
          </p>

          <p className="text-2xl text-foreground/80 max-w-lg mb-8 leading-snug">
            Building digital experiences,{" "}
            <span className="text-neon-pink">one line of code</span> at a time.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="clip-cyber bg-primary text-primary-foreground px-6 py-3 font-display font-bold uppercase tracking-wider glow-pink hover:brightness-110 transition inline-flex items-center gap-2"
            >
              <Gamepad2 className="w-4 h-4" /> View Quests
            </a>
            <a
              href="#contact"
              className="clip-cyber border-2 border-secondary text-secondary px-6 py-3 font-display font-bold uppercase tracking-wider hover:bg-secondary hover:text-secondary-foreground transition inline-flex items-center gap-2"
            >
              Connect <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-4 bg-gradient-neon opacity-30 blur-2xl" />
          <div className="relative border-4 border-secondary bg-background p-4 glow-cyan">
            <Image
              src={avatar}
              alt="Zidan Rizky Wijaya pixel avatar"
              width={512}
              height={512}
              className="w-full h-auto"
              style={{ imageRendering: "pixelated" }}
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between font-mono text-lg">
              <span className="text-neon-cyan">HP ████████░</span>
              <span className="text-neon-pink">LVL 99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
