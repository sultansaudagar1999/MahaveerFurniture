import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { CtaBand, PageHero, RatingBadge, SectionHeading } from "@/components/sections";
import { photos } from "@/content/images";
import { fullAddress } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mahaveer Furniture is a neighbourhood furniture showroom in Chikhalwadi, Bopodi, Pune — a place to see, compare and choose furniture in person.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Honest about materials",
    body: "Solid wood, plywood, MDF or particle board — we'll tell you what a piece is made of, inside and out, so you can judge value for yourself.",
  },
  {
    title: "Sized for real homes",
    body: "Pune flats come in every shape. We'd rather talk you into the right size than sell you a piece that won't get through the door.",
  },
  {
    title: "Made to be used",
    body: "Furniture should handle children, guests, monsoon humidity and daily life. We choose and recommend pieces with that in mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A furniture showroom <em className="italic">in the neighbourhood.</em>
          </>
        }
        lede="Mahaveer Furniture is a local showroom in Chikhalwadi, Bopodi — the kind of place where you can take your time, ask questions and choose furniture you'll live with for years."
        image={photos.livingWarm}
      />

      {/* Story */}
      <section className="py-24 md:py-36">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-teak">Our approach</p>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <p className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.2] tracking-[-0.02em]">
              We believe furniture is chosen best in person — by sitting, touching, opening and measuring — with someone
              nearby who can answer honestly.
            </p>
            <div className="mt-10 grid gap-8 text-ink-soft sm:grid-cols-2">
              <p className="lede">
                The showroom sits in Chikhalwadi, a short drive from Khadki, Aundh and the old Mumbai–Pune highway — easy
                to reach if you&apos;d like to see furniture before you buy it, from living-room sofas to bedroom wardrobes
                and study desks.
              </p>
              <p className="lede">
                When something on the floor isn&apos;t quite right, we&apos;re happy to talk through sizes, finishes and
                alternatives — because the right piece is the one that fits your home, not our catalogue.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image pair */}
      <section aria-label="Showroom mood" className="pb-24 md:pb-36">
        <div className="shell grid gap-4 md:grid-cols-12 md:gap-6">
          <Reveal className="relative aspect-[4/5] overflow-hidden bg-sand md:col-span-5">
            <Image
              src={photos.chairGrey.src}
              alt={photos.chairGrey.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden bg-sand md:col-span-7 md:mt-24 md:aspect-auto">
            <Image
              src={photos.diningGarden.src}
              alt={photos.diningGarden.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 56vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="on-dark bg-night py-24 text-paper md:py-32">
        <div className="shell">
          <SectionHeading tone="light" eyebrow="What we stand for" title="Three simple principles." />
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="border-t border-paper/25 pt-8">
                <span className="font-display text-5xl text-teak-light" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{p.title}</h3>
                <p className="mt-3 text-paper/70">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Find us */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Find the showroom" title={fullAddress} />
          </div>
          <Reveal delay={100} className="flex flex-col gap-6 lg:col-span-5 lg:items-end">
            <RatingBadge />
            <LinkButton href="/contact" icon={<ArrowRight width={18} height={18} />}>
              Directions &amp; contact
            </LinkButton>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
