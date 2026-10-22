type ClassValue = string | false | null | undefined;

/** Tiny className joiner (replaces clsx + tailwind-merge). */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
