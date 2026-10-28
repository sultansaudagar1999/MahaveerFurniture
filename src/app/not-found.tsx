import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { ArrowRight } from "@/components/icons";
import { collections } from "@/content/collections";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pb-24 pt-36">
      <div className="shell">
        <p className="eyebrow text-teak">Error 404</p>
        <h1 className="display-xl mt-6 max-w-4xl">
          This room is <em className="italic">empty.</em>
        </h1>
        <p className="lede mt-8 max-w-xl text-ink-soft">
          The page you were looking for has moved or never existed. Try one of our collections instead.
        </p>
        <div className="mt-10">
          <LinkButton href="/" icon={<ArrowRight width={18} height={18} />}>
            Back to home
          </LinkButton>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-stone pt-8">
          {collections.map((c) => (
            <li key={c.slug}>
              <Link href={`/collections/${c.slug}`} className="link-draw font-semibold">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
