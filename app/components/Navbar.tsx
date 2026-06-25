import { navLinks } from "@/app/data/constants";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-black text-lg">
          <span className="text-neon-pink">&lt;</span>
          <span className="text-gradient-neon">ZIDAN.DEV</span>
          <span className="text-neon-cyan">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-widest">
          {navLinks.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                {s}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="clip-cyber bg-primary text-primary-foreground px-5 py-2 text-xs font-display font-bold uppercase tracking-wider glow-pink hover:brightness-110 transition"
        >
          Press Start
        </a>
      </nav>
    </header>
  );
}
