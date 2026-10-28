import type { Metadata } from "next";
import Image from "next/image";
import { LinkButton } from "@/components/Button";
import { ArrowRight, Check } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { CtaBand, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/sections";
import { photos } from "@/content/images";
import { faqs, process, services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Showroom selection, made-to-measure furniture orders and room-planning advice from Mahaveer Furniture in Bopodi, Pune.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            Help at every step, <em className="italic">not just the till.</em>
          </>
        }
        lede="Whether you're replacing one chair or furnishing a new flat, we'll help you choose well — and size it right the first time."
        image={photos.livingLounge}
      />

      {/* Services list */}
      <section className="py-24 md:py-32">
        <div className="shell space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className="grid scroll-mt-28 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
            >
              <Reveal className={`relative aspect-[4/3] overflow-hidden bg-sand lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={100} className="lg:col-span-5 lg:col-start-auto">
                <p className="eyebrow text-teak">0{i + 1}</p>
                <h2 className="display-md mt-5">{s.title}</h2>
                <p className="mt-3 font-display text-xl italic text-ink-soft">{s.lead}</p>
                <p className="lede mt-6 text-ink-soft">{s.body}</p>
                <ul className="mt-8 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Check width={20} height={20} className="mt-0.5 shrink-0 text-teak" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Process (dark) */}
      <section className="on-dark bg-night py-24 text-paper md:py-32">
        <div className="shell">
          <SectionHeading tone="light" eyebrow="The process" title="Four simple steps." />
          <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 90} className="border-t border-paper/25 pt-8">
                <span className="font-display text-5xl text-teak-light" aria-hidden="true">
                  {p.step}
                </span>
                <h3 className="mt-6 font-display text-2xl tracking-tight">
                  <span className="sr-only">Step {i + 1}: </span>
                  {p.title}
                </h3>
                <p className="mt-3 text-paper/70">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title="Good to know." />
            <Reveal className="mt-8">
              <LinkButton href="/contact" variant="secondary" icon={<ArrowRight width={18} height={18} />}>
                Ask something else
              </LinkButton>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
