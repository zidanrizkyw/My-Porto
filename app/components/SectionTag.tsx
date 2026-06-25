interface SectionTagProps {
  icon: React.ReactNode;
  label: string;
  center?: boolean;
}

export default function SectionTag({ icon, label, center }: SectionTagProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan border border-secondary/40 px-3 py-1 mb-6 clip-cyber ${center ? "mx-auto" : ""}`}
    >
      {icon} {label}
    </div>
  );
}
