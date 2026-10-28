import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ArticleCard, CtaBand, PageHero } from "@/components/sections";
import { articles, formatDate } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guides on choosing, measuring and caring for furniture in Pune homes, from Mahaveer Furniture.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Buy better. <em className="italic">Keep it longer.</em>
          </>
        }
        lede="Straightforward advice on sizing, materials and care — the things we explain in the showroom every day."
      />

      <section className="pt-16 md:pt-24">
        <div className="shell">
          <Reveal>
            <Link href={`/insights/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand lg:col-span-7">
                <Image
                  src={featured.cover.src}
                  alt=""
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="eyebrow text-teak">
                  Featured · {featured.category} · {featured.readMinutes} min read
                </p>
                <h2 className="display-md mt-5 group-hover:text-teak-deep">{featured.title}</h2>
                <p className="lede mt-5 text-ink-soft">{featured.excerpt}</p>
                <p className="mt-8 flex items-center justify-between gap-4 text-sm text-muted">
                  <time dateTime={featured.published}>{formatDate(featured.published)}</time>
                  <span className="inline-flex items-center gap-2 font-semibold text-ink">
                    Read article
                    <ArrowRight width={18} height={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell">
          <h2 className="sr-only">More articles</h2>
          <ul className="grid gap-14 border-t border-stone pt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 90}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Got a question we haven't covered?"
        body="Send us a message with your room size or a photo of the space. We're glad to help — even before you visit."
      />
    </>
  );
}
