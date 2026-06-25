interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export default function ContactCard({ icon, label, value, href }: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 bg-card border border-border p-4 clip-cyber hover:border-primary hover:glow-pink transition"
    >
      <span className="w-10 h-10 flex items-center justify-center bg-muted text-neon-cyan group-hover:text-neon-pink transition">
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
        <span className="block text-foreground truncate">{value}</span>
      </span>
    </a>
  );
}
