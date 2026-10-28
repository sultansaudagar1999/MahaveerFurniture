import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-teak",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-teak px-0!",
  light: "bg-paper text-ink hover:bg-teak-light",
  "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
};

export const buttonClass = (variant: Variant = "primary", extra = "") =>
  `group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 text-[0.9375rem] font-semibold tracking-[-0.005em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${extra}`;

type LinkButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

export function LinkButton({ variant = "primary", className = "", icon, external, children, ...props }: LinkButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span> : null}
    </>
  );
  if (external) {
    return (
      <a
        href={String(props.href)}
        className={buttonClass(variant, className)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props["aria-label"]}
      >
        {content}
      </a>
    );
  }
  return (
    <Link className={buttonClass(variant, className)} {...props}>
      {content}
    </Link>
  );
}
