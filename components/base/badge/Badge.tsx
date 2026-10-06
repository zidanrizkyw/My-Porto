import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium leading-5 text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
