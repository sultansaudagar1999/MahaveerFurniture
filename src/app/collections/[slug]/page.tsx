import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { ArrowLeft, ArrowRight, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { CollectionCard, CtaBand, JsonLd, SectionHeading } from "@/components/sections";
import { collections, getCollection } from "@/content/collections";
import { site, whatsappLink } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCollection(slug);
  if (!c) return {};
  return {
    title: `${c.name} furniture`,
    description: `${c.summary} ${c.kicker} at ${site.name}, Bopodi, Pune.`,
    alternates: { canonical: `/collections/${c.slug}` },
    openGraph: { images: [{ url: c.cover.src.src, alt: c.cover.alt }] },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const others = collections.filter((c) => c.slug !== collection.slug);
  const enquiry = whatsappLink(
    `Hello ${site.name}, I'm interested in ${collection.name.toLowerCase()} furniture. Could you tell me what's available?`,
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Collections", item: `${site.url}/collections` },
            { "@type": "ListItem", position: 3, name: collection.name, item: `${site.url}/collections/${collection.slug}` },
          ],
        }}
      />

      {/* Hero: split layout */}
      <section className="pt-28 md:pt-36">
        <div className="shell">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="link-draw hover:text-ink">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/collections" className="link-draw hover:text-ink">Collections</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">{collection.name}</li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-6">
              <p className="eyebrow text-teak motion-safe:animate-rise">
                Collection {collection.index} · {collection.kicker}
              </p>
              <h1 className="display-xl mt-6 motion-safe:animate-rise [animation-delay:80ms]">{collection.name}</h1>
              <p className="lede mt-8 max-w-xl text-ink-soft motion-safe:animate-rise [animation-delay:160ms]">
                {collection.summary}
              </p>
              <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:240ms] sm:flex-row">
                <LinkButton href={enquiry} external icon={<WhatsApp width={18} height={18} />}>
                  Ask what&apos;s in stock
                </LinkButton>
                <LinkButton href="/contact" variant="secondary">
                  Plan a visit
                </LinkButton>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[4/3] lg:col-span-6 lg:aspect-[4/5]">
              <Image
                src={collection.cover.src}
                alt={collection.cover.alt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover motion-safe:animate-hero-zoom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro + pieces */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-teak">About this collection</p>
            <div className="mt-6 space-y-6">
              {collection.intro.map((p) => (
                <p key={p} className="font-display text-2xl leading-snug tracking-tight md:text-[1.75rem]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <h2 className="eyebrow text-teak">Pieces you can ask about</h2>
            <ul className="mt-6 border-t border-stone">
              {collection.pieces.map((p) => (
                <li key={p.name} className="flex flex-col gap-1 border-b border-stone py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-display text-xl tracking-tight md:text-2xl">{p.name}</span>
                  <span className="text-ink-soft sm:text-right">{p.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Availability, sizes and finishes vary. Call{" "}
              <a href={site.phone.href} className="font-semibold text-ink underline underline-offset-4">
                {site.phone.display}
              </a>{" "}
              to check before you visit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery carousel */}
      <section className="border-t border-stone bg-sand/60 py-24 md:py-32">
        <div className="shell">
          <Carousel
            label={`${collection.name} gallery`}
            slideClassName="w-[88%] sm:w-[62%] lg:w-[44%]"
            header={<SectionHeading eyebrow="Mood" title="Ideas for the room." />}
          >
            {collection.gallery.map((img) => (
              <figure key={img.alt}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 44vw, (min-width: 640px) 62vw, 88vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">{img.alt}</figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Buying considerations */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            eyebrow="Before you buy"
            title={`Three things to know about ${collection.name.toLowerCase()} furniture.`}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-3">
            {collection.considerations.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="bg-paper p-8 md:p-10">
                <span className="font-display text-4xl text-teak/70" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-3 text-ink-soft">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other collections */}
      <section className="border-t border-stone py-24 md:py-32">
        <div className="shell">
          <Carousel label="Other collections" header={<SectionHeading eyebrow="Keep exploring" title="Other collections" />}>
            {others.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </Carousel>
          <div className="mt-10 flex flex-wrap gap-6">
            <Link href="/collections" className="link-draw inline-flex items-center gap-2 font-semibold">
              <ArrowLeft width={18} height={18} /> All collections
            </Link>
            <Link href="/services" className="link-draw inline-flex items-center gap-2 font-semibold">
              Made-to-measure orders <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
