import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Article } from "@/content/insights";
import { formatDate } from "@/content/insights";
import type { Collection } from "@/content/collections";
import type { Photo } from "@/content/images";
import { site, whatsappLink } from "@/content/site";
import { LinkButton } from "./Button";
import { ArrowRight, ArrowUpRight, Phone, Star, WhatsApp } from "./icons";
import { Reveal } from "./Reveal";

/* ───────────── Page hero for inner pages ───────────── */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image?: Photo;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 md:pt-44">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-teak motion-safe:animate-rise">{eyebrow}</p>
            <h1 className="display-lg mt-6 motion-safe:animate-rise [animation-delay:80ms]">{title}</h1>
          </div>
          {lede ? (
            <p className="lede text-ink-soft motion-safe:animate-rise [animation-delay:160ms] lg:col-span-4 lg:pb-2">{lede}</p>
          ) : null}
        </div>
        {children}
      </div>
      {image ? (
        <div className="shell mt-14 md:mt-20">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand sm:aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1408px) 1328px, 100vw"
              className="object-cover motion-safe:animate-hero-zoom"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

/* ───────────── Section heading ───────────── */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  tone?: "dark" | "light";
  as?: "h2" | "h3";
}) {
  const light = tone === "light";
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-teak-light" : "text-teak"}`}>{eyebrow}</p>
      <Tag className="display-md mt-5">{title}</Tag>
      {lede ? <p className={`lede mt-6 ${light ? "text-paper/75" : "text-ink-soft"}`}>{lede}</p> : null}
    </Reveal>
  );
}

/* ───────────── Collection card ───────────── */
export function CollectionCard({
  collection,
  tone = "dark",
  sizes = "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw",
  headingLevel: H = "h3",
}: {
  collection: Collection;
  tone?: "dark" | "light";
  sizes?: string;
  headingLevel?: "h2" | "h3";
}) {
  const light = tone === "light";
  return (
    <Link href={`/collections/${collection.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={collection.cover.src}
          alt=""
          fill
          placeholder="blur"
          sizes={sizes}
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-ink">
          {collection.index}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <H className="font-display text-2xl tracking-tight md:text-[1.75rem]">{collection.name}</H>
          <p className={`mt-1.5 text-sm ${light ? "text-paper/65" : "text-muted"}`}>{collection.kicker}</p>
        </div>
        <span
          className={`mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            light
              ? "border-paper/30 group-hover:border-paper group-hover:bg-paper group-hover:text-ink"
              : "border-ink/20 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
          }`}
          aria-hidden="true"
        >
          <ArrowRight width={18} height={18} />
        </span>
      </div>
    </Link>
  );
}

/* ───────────── Article card ───────────── */
export function ArticleCard({ article, headingLevel: H = "h3" }: { article: Article; headingLevel?: "h2" | "h3" }) {
  return (
    <Link href={`/insights/${article.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        <Image
          src={article.cover.src}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 90vw"
          className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        <span className="text-teak">{article.category}</span>
        <span aria-hidden="true">·</span>
        <span>{article.readMinutes} min read</span>
      </div>
      <H className="mt-3 font-display text-2xl leading-snug tracking-tight group-hover:text-teak-deep">{article.title}</H>
      <p className="mt-3 text-ink-soft">{article.excerpt}</p>
      <p className="mt-auto pt-5 text-sm text-muted">
        <time dateTime={article.published}>{formatDate(article.published)}</time>
      </p>
    </Link>
  );
}

/* ───────────── Rating ───────────── */
export function RatingBadge({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  const { value, count, source, href } = site.rating;
  const full = Math.round(value);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 text-sm ${light ? "text-paper/85" : "text-ink-soft"}`}
    >
      <span className={`flex ${light ? "text-teak-light" : "text-teak"}`} aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} width={15} height={15} className={i < full ? "" : "opacity-25"} />
        ))}
      </span>
      <span className="link-draw">
        <strong className="font-semibold">{value.toFixed(1)}</strong> on {source} · {count} reviews
      </span>
      <span className="sr-only">(read reviews on {source}, opens in a new tab)</span>
    </a>
  );
}

/* ───────────── Closing call to action ───────────── */
export function CtaBand({
  title = "Come and sit on it.",
  body = "The best way to choose furniture is in person. Visit the showroom in Chikhalwadi, Bopodi — or send us a message and we'll help you plan the visit.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-teak-deep text-paper">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-teak-light">Visit Mahaveer Furniture</p>
          <h2 className="display-lg mt-6">{title}</h2>
          <p className="lede mt-6 max-w-xl text-paper/80">{body}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
          <LinkButton href="/contact" variant="light" icon={<ArrowRight width={18} height={18} />}>
            Plan your visit
          </LinkButton>
          <LinkButton
            href={whatsappLink("Hello Mahaveer Furniture, I'd like to know more about your furniture.")}
            external
            variant="outline-light"
            icon={<WhatsApp width={18} height={18} />}
          >
            WhatsApp
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── FAQ (native details/summary for built-in accessibility) ───────────── */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-stone">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-stone">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-display text-xl tracking-tight md:text-2xl [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden="true"
              className="relative h-5 w-5 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-5 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-5 after:w-px after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-2xl pb-7 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ───────────── Quick contact strip ───────────── */
export function ContactLinks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  const cls = `inline-flex items-center gap-2 font-semibold ${light ? "text-paper hover:text-teak-light" : "text-ink hover:text-teak"}`;
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      <a href={site.phone.href} className={cls}>
        <Phone width={18} height={18} /> {site.phone.display}
      </a>
      <a href={site.maps.directions} target="_blank" rel="noopener noreferrer" className={cls}>
        Directions <ArrowUpRight width={18} height={18} />
        <span className="sr-only">(opens Google Maps in a new tab)</span>
      </a>
    </div>
  );
}

/* ───────────── JSON-LD ───────────── */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
