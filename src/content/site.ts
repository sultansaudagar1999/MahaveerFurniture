/**
 * Single source of truth for business facts.
 * Only details supplied by the business are stated as fact here.
 */
export const site = {
  name: "Mahaveer Furniture",
  shortName: "Mahaveer",
  tagline: "Furniture for the way you live.",
  description:
    "Mahaveer Furniture is a furniture showroom in Chikhalwadi, Bopodi, Pune — sofas, beds, dining sets, wardrobes, study and office furniture for homes across Pune.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",

  phone: {
    display: "+91 84213 97713",
    href: "tel:+918421397713",
    e164: "+918421397713",
  },
  whatsapp: {
    number: "918421397713",
  },

  address: {
    line1: "Shop no 3/4, Chikhalwadi",
    line2: "Bopodi",
    city: "Pune",
    region: "Maharashtra",
    postalCode: "411020",
    country: "IN",
  },

  maps: {
    directions:
      "https://www.google.com/maps/search/?api=1&query=Mahaveer+Furniture%2C+Chikhalwadi%2C+Bopodi%2C+Pune+411020",
    embed:
      "https://www.google.com/maps?q=Mahaveer%20Furniture%2C%20Chikhalwadi%2C%20Bopodi%2C%20Pune%20411020&z=16&output=embed",
  },

  /** Public Google rating as supplied by the business. Update as it changes. */
  rating: {
    value: 3.9,
    count: 16,
    source: "Google",
    href: "https://www.google.com/maps/search/?api=1&query=Mahaveer+Furniture+Bopodi+Pune",
  },
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const navigation = [
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
