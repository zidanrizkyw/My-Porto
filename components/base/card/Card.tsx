import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface CardProps {
  aside: React.ReactNode;
  title: React.ReactNode;
  // Paths starting with "/" stay in the app; anything else opens a new tab
  href?: string;
  // Accessible hint appended to external links
  newTabLabel?: string;
  // Puts the aside below the content on small screens (used for thumbnails)
  asideLast?: boolean;
  children?: React.ReactNode;
}

// List row that lifts on hover while its siblings dim; must live inside an
// element with the `group/list` class.
const Card: React.FC<CardProps> = ({ aside, title, href, newTabLabel, asideLast, children }) => {
  const isInternal = href?.startsWith("/");
  const Arrow = isInternal ? ArrowRight : ArrowUpRight;
  const linkClass =
    "group/link inline-flex items-baseline text-base font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent";
  const linkContent = (
    <>
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
      <span>
        {title}
        <Arrow
          aria-hidden="true"
          className="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
        />
      </span>
    </>
  );

  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface lg:group-hover:shadow-[inset_0_1px_0_0_var(--line)] lg:group-hover:drop-shadow-lg" />
      <div className={cn("z-10 sm:col-span-2", asideLast && "order-2 sm:order-1")}>{aside}</div>
      <div className={cn("z-10 sm:col-span-6", asideLast && "order-1 sm:order-2")}>
        <h3 className="font-medium leading-snug text-heading">
          {href && isInternal && (
            <Link href={href} className={linkClass}>
              {linkContent}
            </Link>
          )}
          {href && !isInternal && (
            <a href={href} target="_blank" rel="noreferrer noopener" className={linkClass}>
              {linkContent}
              {newTabLabel && <span className="sr-only">{newTabLabel}</span>}
            </a>
          )}
          {!href && title}
        </h3>
        {children}
      </div>
    </div>
  );
};

export default Card;
