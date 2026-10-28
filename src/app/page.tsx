import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { ArrowDown, ArrowRight, ArrowUpRight, Pin } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ArticleCard, CollectionCard, CtaBand, RatingBadge, SectionHeading } from "@/components/sections";
import { collections } from "@/content/collections";
import { photos } from "@/content/images";
import { articles } from "@/content/insights";
import { process, services } from "@/content/services";
import { fullAddress, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-paper">
        <Image
          src={photos.heroChair.src}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center] opacity-80 motion-safe:animate-hero-zoom md:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/40 to-night/30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-night/80 via-night/20 to-transparent" />

        <div className="shell flex flex-1 flex-col justify-end pb-24 pt-36 md:pb-20">
          <p className="eyebrow text-teak-light motion-safe:animate-rise">Furniture showroom · Bopodi, Pune</p>
          <h1 className="display-xl mt-6 max-w-5xl motion-safe:animate-rise [animation-delay:100ms]">
            Furniture for the
            <br />
            way <em className="pr-[0.06em] italic text-teak-light">you</em> live.
          </h1>
          <p className="lede mt-8 max-w-xl text-paper/80 motion-safe:animate-rise [animation-delay:200ms]">
            Sofas, beds, dining sets and storage for Pune homes — chosen in person at our showroom in Chikhalwadi.
          </p>
          <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:300ms] sm:flex-row">
            <LinkButton href="/collections" variant="light" icon={<ArrowRight width={18} height={18} />}>
              Explore collections
            </LinkButton>
            <LinkButton href="/contact" variant="outline-light">
              Visit the showroom
            </LinkButton>
          </div>

          <div className="mt-16 flex flex-col gap-5 border-t border-paper/20 pt-6 text-sm text-paper/75 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2">
              <Pin width={16} height={16} className="text-teak-light" />
              {fullAddress}
            </p>
            <RatingBadge tone="light" />
            <a href="#intro" className="hidden items-center gap-2 hover:text-paper md:inline-flex">
              Scroll <ArrowDown width={16} height={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── Introduction ───────────── */}
      <section id="intro" className="scroll-mt-20 py-24 md:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-teak">A neighbourhood showroom</p>
            <p className="mt-8 font-display text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.18] tracking-[-0.02em]">
              Good furniture is the kind you stop noticing — because it simply works. The sofa that fits the wall. The bed that
              holds the extra blankets. The table that seats everyone on Diwali.
            </p>
            <p className="lede mt-8 max-w-2xl text-ink-soft">
              At Mahaveer Furniture in Bopodi, you can see pieces in person, sit on them, open every drawer, and talk to
              people who will tell you plainly what each one is made of.
            </p>
            <div className="mt-10">
              <LinkButton href="/about" variant="secondary" icon={<ArrowRight width={18} height={18} />}>
                About the showroom
              </LinkButton>
            </div>
          </Reveal>

          <div className="relative lg:col-span-5">
            <Reveal delay={100} className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={photos.sofaLeather.src}
                alt={photos.sofaLeather.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={220}
              className="absolute -bottom-10 -left-4 hidden w-[46%] border-8 border-paper bg-sand sm:block lg:-left-16"
            >
              <div className="relative aspect-square">
                <Image
                  src={photos.sideTable.src}
                  alt={photos.sideTable.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────── Collections carousel ───────────── */}
      <section className="border-t border-stone bg-sand/60 py-24 md:py-32">
        <div className="shell">
          <Carousel
            label="Collections"
            header={
              <SectionHeading
                eyebrow="Collections"
                title={
                  <>
                    Every room, <em className="italic">considered.</em>
                  </>
                }
              />
            }
          >
            {collections.map((c) => (
              <CollectionCard key={c.slug} collection={c} />
            ))}
          </Carousel>
          <Reveal className="mt-10">
            <Link href="/collections" className="link-draw inline-flex items-center gap-2 font-semibold">
              View all collections <ArrowRight width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────── How we work (process) ───────────── */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="How it works"
                title="From measuring tape to your front door."
                lede="Buying furniture should feel unhurried and clear. Here's how a visit usually goes."
              />
            </div>
            <ol className="grid gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-2 lg:col-span-7">
              {process.map((p, i) => (
                <Reveal as="li" key={p.step} delay={i * 80} className="bg-paper p-8 md:p-10">
                  <span className="font-display text-5xl text-teak/70" aria-hidden="true">
                    {p.step}
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-tight">
                    <span className="sr-only">Step {i + 1}: </span>
                    {p.title}
                  </h3>
                  <p className="mt-3 text-ink-soft">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────────── Services (dark) ───────────── */}
      <section className="on-dark bg-night py-24 text-paper md:py-32">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              tone="light"
              eyebrow="Services"
              title="More than a shop floor."
              lede="Help with choosing, sizing and — when the standard piece won't do — making something that fits."
            />
            <Reveal>
              <LinkButton href="/services" variant="outline-light" icon={<ArrowRight width={18} height={18} />}>
                All services
              </LinkButton>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <Link href={`/services#${s.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-night-soft">
                    <Image
                      src={s.image.src}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="(min-width: 768px) 31vw, 100vw"
                      className="object-cover opacity-85 transition duration-[1.2s] ease-[var(--ease-out-soft)] group-hover:scale-[1.04] group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-paper/70">{s.lead}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Visit ───────────── */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Visit us"
              title="Find us in Chikhalwadi, Bopodi."
              lede="Stock changes often. If you're coming for something specific, call or WhatsApp before you visit and we'll let you know what's on the floor."
            />
            <Reveal className="mt-10 space-y-6">
              <address className="not-italic">
                <p className="eyebrow text-muted">Address</p>
                <p className="mt-2 text-lg">{fullAddress}</p>
              </address>
              <div>
                <p className="eyebrow text-muted">Phone</p>
                <a href={site.phone.href} className="link-draw mt-2 inline-block text-lg font-semibold">
                  {site.phone.display}
                </a>
              </div>
              <RatingBadge />
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <LinkButton href={site.maps.directions} external icon={<ArrowUpRight width={18} height={18} />}>
                  Get directions
                </LinkButton>
                <LinkButton href="/contact" variant="secondary">
                  Send an enquiry
                </LinkButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative min-h-[360px] overflow-hidden bg-sand lg:col-span-7">
            <iframe
              title={`Map showing ${site.name}, ${fullAddress}`}
              src={site.maps.embed}
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.6] sepia-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      {/* ───────────── Insights ───────────── */}
      <section className="border-t border-stone py-24 md:py-32">
        <div className="shell">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Insights"
              title="Notes on buying and caring for furniture."
            />
            <Reveal>
              <Link href="/insights" className="link-draw inline-flex items-center gap-2 font-semibold">
                All insights <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 100} className={i === 2 ? "sm:hidden lg:block" : undefined}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
