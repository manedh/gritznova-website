import { useId } from "react";
import { cn } from "../../lib/cn";

/** GRITZNOVA mark: red circle, white "G", and the chevron cut-out. */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("size-8 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <mask id={`gz-cut-${id}`}>
          <rect width="100" height="100" fill="#fff" />
          <polygon points="55,-2 67,50 55,102 63.5,102 75.5,50 63.5,-2" fill="#000" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="50" fill="var(--brand, #E10600)" mask={`url(#gz-cut-${id})`} />
      <path
        d="M49.6 34.6 A20 20 0 1 0 55.5 51 H38.5"
        fill="none"
        stroke="#fff"
        strokeWidth="9"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
