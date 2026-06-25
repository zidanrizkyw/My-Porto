interface InfoRowProps {
  k: string;
  v: string;
}

export default function InfoRow({ k, v }: InfoRowProps) {
  return (
    <li className="flex justify-between border-b border-border/60 pb-2 last:border-0 last:pb-0">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-neon-cyan">{v}</span>
    </li>
  );
}
