export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>© 2026 Zidan Rizky Wijaya · All quests reserved</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          System status: <span className="text-neon-cyan">ONLINE</span>
        </span>
      </div>
    </footer>
  );
}
