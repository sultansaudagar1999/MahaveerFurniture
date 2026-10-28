import Link from "next/link";

/** Monogram: an "M" drawn as two chair-backs sharing a leg — a nod to joinery. */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 29V12l10 9 10-9v17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path d="M10 29h4M26 29h4" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-paper" : "text-ink";
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${color}`} aria-label="Mahaveer Furniture — home">
      <Monogram className="h-9 w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[-4deg]" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] tracking-[-0.02em]">Mahaveer</span>
        <span className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.32em] opacity-70">Furniture</span>
      </span>
    </Link>
  );
}
