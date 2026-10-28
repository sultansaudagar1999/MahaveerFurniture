export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[70svh] items-center justify-center pt-24">
      <span className="sr-only">Loading…</span>
      <span aria-hidden="true" className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-teak motion-safe:animate-pulse"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
      </span>
    </div>
  );
}
