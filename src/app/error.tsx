"use client";

import { useEffect } from "react";
import { buttonClass, LinkButton } from "@/components/Button";
import { site } from "@/content/site";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section role="alert" className="flex min-h-[80svh] items-center pb-24 pt-36">
      <div className="shell">
        <p className="eyebrow text-teak">Something went wrong</p>
        <h1 className="display-lg mt-6 max-w-3xl">We couldn&apos;t load this page.</h1>
        <p className="lede mt-8 max-w-xl text-ink-soft">
          Please try again. If the problem continues, you can always reach us on{" "}
          <a href={site.phone.href} className="font-semibold text-ink underline underline-offset-4">
            {site.phone.display}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className={buttonClass("primary")}>
            Try again
          </button>
          <LinkButton href="/" variant="secondary">
            Go to home
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
