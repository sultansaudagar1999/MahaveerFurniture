import { site, whatsappLink } from "@/content/site";
import { Phone, WhatsApp } from "./icons";

/** Thumb-reach contact bar on small screens — the two actions local shoppers take most. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={site.phone.href}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 font-semibold text-ink"
        >
          <Phone width={18} height={18} /> Call
        </a>
        <a
          href={whatsappLink("Hello Mahaveer Furniture, I have an enquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink font-semibold text-paper"
        >
          <WhatsApp width={18} height={18} /> WhatsApp
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
