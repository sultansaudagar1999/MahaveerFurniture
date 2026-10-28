import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CollectionCard, CtaBand, PageHero } from "@/components/sections";
import { collections } from "@/content/collections";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Living room, bedroom, dining, wardrobes, study and accent furniture at Mahaveer Furniture, Bopodi, Pune.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title={
          <>
            Furniture, organised <em className="italic">by room.</em>
          </>
        }
        lede="Six collections covering every room of the home. Pieces on the showroom floor change often — use these pages to plan, then come and see what's in today."
      />

      <section className="py-20 md:py-28">
        <div className="shell">
          <ul className="grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {collections.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 90}>
                <CollectionCard
                  collection={c}
                  headingLevel="h2"
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                />
                <p className="mt-4 max-w-sm text-ink-soft">{c.summary}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Can't find the exact piece?"
        body="Tell us the size, style and budget you have in mind. If it isn't on the floor, we'll talk through what can be sourced or made to measure."
      />
    </>
  );
}
