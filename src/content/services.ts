import { photos, type Photo } from "./images";

/**
 * CONFIRM WITH OWNER: these describe services a neighbourhood furniture
 * showroom typically offers. Edit or remove anything the shop does not do
 * (e.g. custom orders, delivery area, payment options) before launch.
 */
export type Service = {
  id: string;
  title: string;
  lead: string;
  body: string;
  points: string[];
  image: Photo;
};

export const services: Service[] = [
  {
    id: "showroom",
    title: "Showroom selection",
    lead: "See it, sit on it, open every drawer.",
    body: "Furniture is physical. Visit the shop in Chikhalwadi to compare pieces side by side, feel fabrics and finishes, and ask honest questions about how each one is made.",
    points: [
      "Ready pieces across living, bedroom, dining and storage",
      "Straight answers on materials and build",
      "Help comparing options within your budget",
    ],
    image: photos.livingLounge,
  },
  {
    id: "made-to-measure",
    title: "Made-to-measure orders",
    lead: "When the standard size doesn't fit the room.",
    body: "Some walls, alcoves and staircases simply don't suit catalogue sizes. Share your measurements and we'll discuss what can be made to fit — dimensions, finishes and fabrics.",
    points: [
      "Wardrobes, beds and units sized to your space",
      "Choice of finishes and upholstery",
      "Clear timeline agreed before work begins",
    ],
    image: photos.tools,
  },
  {
    id: "room-planning",
    title: "Room planning advice",
    lead: "Furnishing a whole flat? Start with a conversation.",
    body: "Bring a floor plan, photos or just the room sizes. We'll help you work out what fits, what to buy first, and how pieces will work together across rooms.",
    points: [
      "Guidance for new homes and full-room makeovers",
      "Sizing checks before you buy",
      "Pieces chosen to work together",
    ],
    image: photos.livingBright,
  },
];

export const process = [
  {
    step: "01",
    title: "Tell us about the room",
    body: "Call, WhatsApp or walk in. Room sizes and a couple of photos help us understand the space.",
  },
  {
    step: "02",
    title: "Visit and compare",
    body: "See shortlisted pieces in person and choose materials, sizes and finishes.",
  },
  {
    step: "03",
    title: "Confirm the details",
    body: "Agree on the final piece, price and timeline — in writing, before anything is ordered.",
  },
  {
    step: "04",
    title: "Bring it home",
    body: "We'll coordinate how your furniture gets to your door. Ask about delivery to your area.",
  },
];

export const faqs = [
  {
    q: "Can I see the furniture before buying?",
    a: "Yes — that's the best way to choose. Visit the shop at Chikhalwadi, Bopodi. Stock changes, so call or WhatsApp ahead if you're coming for something specific.",
  },
  {
    q: "Do you make furniture to custom sizes?",
    a: "Share your measurements and requirements with us and we'll tell you honestly what's possible, the cost and the time it will take.",
  },
  {
    q: "Do you deliver across Pune?",
    a: "Ask us when you order. Delivery arrangements depend on the piece and your location, and we'll confirm the details before you pay.",
  },
  {
    q: "How do I get a price for a piece?",
    a: "Prices depend on size, material and finish, so the quickest way is to call or send us a WhatsApp message with a photo or description of what you need.",
  },
  {
    q: "What should I bring when I visit?",
    a: "Room measurements (length, width and ceiling height), photos of the space, and any doorway or lift sizes the furniture must pass through.",
  },
];
