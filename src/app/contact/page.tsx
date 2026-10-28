import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ArrowUpRight, Phone, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { FaqList, PageHero, RatingBadge } from "@/components/sections";
import { faqs } from "@/content/services";
import { fullAddress, site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & directions",
  description: `Visit Mahaveer Furniture at ${fullAddress}. Call ${site.phone.display} or send an enquiry on WhatsApp.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Come by, call, <em className="italic">or send a message.</em>
          </>
        }
        lede="We're happy to answer questions before you visit — about sizes, availability or anything else."
      />

      <section className="py-16 md:py-24">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Details */}
          <Reveal as="aside" className="space-y-10 lg:col-span-4" >
            <div>
              <h2 className="eyebrow text-muted">Showroom</h2>
              <address className="mt-3 font-display text-2xl not-italic leading-snug tracking-tight">
                {site.address.line1},
                <br />
                {site.address.line2}, {site.address.city},
                <br />
                {site.address.region} {site.address.postalCode}
              </address>
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw mt-4 inline-flex items-center gap-1 font-semibold text-teak hover:text-teak-deep"
              >
                Open in Google Maps <ArrowUpRight width={16} height={16} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-muted">Phone</h2>
              <a href={site.phone.href} className="link-draw mt-3 inline-block font-display text-2xl tracking-tight">
                {site.phone.display}
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-muted">Opening hours</h2>
              <p className="mt-3 text-ink-soft">
                Please call ahead to confirm today&apos;s timings, especially on public holidays.
              </p>
            </div>

            <div>
              <h2 className="eyebrow text-muted">Reviews</h2>
              <div className="mt-3">
                <RatingBadge />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <LinkButton href={site.phone.href} icon={<Phone width={18} height={18} />}>
                Call now
              </LinkButton>
              <LinkButton
                href={whatsappLink(`Hello ${site.name}, I have an enquiry.`)}
                external
                variant="secondary"
                icon={<WhatsApp width={18} height={18} />}
              >
                WhatsApp
              </LinkButton>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="border border-stone bg-sand/50 p-6 sm:p-10 lg:col-span-8 lg:p-14">
            <h2 className="display-md">Send an enquiry</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Tell us what you&apos;re looking for. We&apos;ll reply on WhatsApp or give you a call.
            </p>
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Map" className="pb-24 md:pb-32">
        <div className="shell">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[16/9] lg:aspect-[21/9]">
            <iframe
              title={`Map showing ${site.name}, ${fullAddress}`}
              src={site.maps.embed}
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.6] sepia-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-stone py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-teak">Before you visit</p>
            <h2 className="display-md mt-5">Frequently asked.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
