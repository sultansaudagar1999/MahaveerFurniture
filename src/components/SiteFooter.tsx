import Link from "next/link";
import { collections } from "@/content/collections";
import { navigation, site, whatsappLink } from "@/content/site";
import { Logo } from "./Logo";
import { ArrowUpRight } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-night pb-28 text-paper lg:pb-0">
      <div className="shell pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-paper/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-8 max-w-sm font-display text-3xl leading-tight text-paper/90">
              Furniture for the way you live — chosen in person, in Bopodi.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow font-sans text-paper/55">Collections</h2>
              <ul className="mt-5 space-y-3">
                {collections.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/collections/${c.slug}`} className="link-draw text-paper/85 hover:text-paper">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow font-sans text-paper/55">Explore</h2>
              <ul className="mt-5 space-y-3">
                {navigation.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-draw text-paper/85 hover:text-paper">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow font-sans text-paper/55">Visit</h2>
              <address className="mt-5 space-y-3 not-italic text-paper/85">
                <p>
                  {site.address.line1},<br />
                  {site.address.line2}, {site.address.city}
                  <br />
                  {site.address.region} {site.address.postalCode}
                </p>
                <p>
                  <a href={site.phone.href} className="link-draw hover:text-paper">
                    {site.phone.display}
                  </a>
                </p>
                <p className="flex flex-col gap-2 pt-1">
                  <a
                    href={site.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teak-light hover:text-paper"
                  >
                    Get directions <ArrowUpRight width={16} height={16} />
                    <span className="sr-only">(opens Google Maps in a new tab)</span>
                  </a>
                  <a
                    href={whatsappLink("Hello Mahaveer Furniture, I have an enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teak-light hover:text-paper"
                  >
                    WhatsApp us <ArrowUpRight width={16} height={16} />
                    <span className="sr-only">(opens WhatsApp in a new tab)</span>
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none select-none overflow-hidden py-6 font-display text-[19vw] leading-[0.85] tracking-[-0.05em] text-paper/[0.06]"
        >
          Mahaveer
        </div>

        <div className="flex flex-col gap-3 border-t border-paper/15 py-8 text-sm text-paper/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Chikhalwadi · Bopodi · Pune</p>
        </div>
      </div>
    </footer>
  );
}
