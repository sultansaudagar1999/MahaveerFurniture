import { photos, type Photo } from "./images";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  published: string; // ISO date
  cover: Photo;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: "measure-before-you-buy",
    title: "Measure before you buy: a simple guide for any room",
    excerpt:
      "The most common furniture mistake isn't style — it's size. Ten minutes with a measuring tape saves weeks of regret.",
    category: "Planning",
    readMinutes: 4,
    published: "2026-09-08",
    cover: photos.livingBright,
    body: [
      {
        type: "p",
        text: "A sofa that looked perfect in the showroom can swallow a living room at home. Before you shortlist anything, spend ten minutes measuring. It's the single best thing you can do to buy furniture you'll still love in five years.",
      },
      { type: "h2", text: "What to measure" },
      {
        type: "ul",
        items: [
          "The length and width of the room, wall to wall.",
          "Ceiling height — essential for wardrobes with lofts.",
          "Windows, switchboards and AC units on the wall where furniture will sit.",
          "Every doorway, staircase turn and lift the piece must pass through on the way in.",
        ],
      },
      { type: "h2", text: "Mark it on the floor" },
      {
        type: "p",
        text: "Use newspaper or masking tape to outline the footprint of the piece you're considering. Live with it for a day. Walk around it. You'll know quickly whether it feels generous or cramped.",
      },
      { type: "h2", text: "Leave room to move" },
      {
        type: "p",
        text: "As a rule of thumb, keep main walkways around 90 cm wide and allow about 75–90 cm between a sofa and the centre table. Around beds, 60 cm on each open side keeps the room comfortable.",
      },
      {
        type: "quote",
        text: "Bring your measurements and a few photos to the shop. It turns a guess into a confident decision.",
      },
    ],
  },
  {
    slug: "caring-for-wood-in-monsoon",
    title: "Caring for wooden furniture through Pune's monsoon",
    excerpt:
      "Humidity is wood's quiet enemy. A few habits during June to September keep drawers sliding and finishes looking new.",
    category: "Care",
    readMinutes: 5,
    published: "2026-07-02",
    cover: photos.sideboard,
    body: [
      {
        type: "p",
        text: "Wood is a natural material that responds to moisture in the air. During the monsoon, it absorbs humidity and swells slightly; in the dry months it gives that moisture back. Most issues — sticky drawers, doors that won't close, white spots on the finish — come from these swings.",
      },
      { type: "h2", text: "Keep it away from damp walls" },
      {
        type: "p",
        text: "Leave a small gap between wardrobes or cabinets and exterior walls, especially walls that get rain. Air circulation behind the furniture prevents mould and swelling.",
      },
      { type: "h2", text: "Dust dry, wipe gently" },
      {
        type: "ul",
        items: [
          "Use a soft, dry cotton cloth for regular dusting.",
          "For marks, use a cloth that's barely damp, then dry the surface straight away.",
          "Avoid harsh cleaning chemicals, which can strip polish.",
        ],
      },
      { type: "h2", text: "Help your wardrobes breathe" },
      {
        type: "p",
        text: "Open wardrobe doors for a while on sunny days, and use moisture absorbers or a few naphthalene balls in a pouch inside closed storage to keep clothes and wood fresh.",
      },
      { type: "h2", text: "Protect the surface" },
      {
        type: "p",
        text: "Use coasters and table mats. Hot cups and wet glasses are the most common cause of white rings on polished wood.",
      },
    ],
  },
  {
    slug: "solid-wood-vs-engineered-wood",
    title: "Solid wood or engineered wood? An honest comparison",
    excerpt:
      "Both have a place in a well-furnished home. Here's how to decide which suits each piece — and your budget.",
    category: "Materials",
    readMinutes: 6,
    published: "2026-05-19",
    cover: photos.wardrobeDoor,
    body: [
      {
        type: "p",
        text: "Walk into any furniture shop and you'll hear about sheesham, teak, plywood, MDF and particle board. They're not simply 'good' and 'bad' — each is suited to different jobs.",
      },
      { type: "h2", text: "Solid wood" },
      {
        type: "p",
        text: "Sheesham (Indian rosewood) and teak are popular for their strength and grain. Solid wood can be sanded and re-polished over the years, which makes it ideal for pieces that take daily wear — dining tables, beds and chairs.",
      },
      {
        type: "ul",
        items: [
          "Strong and long-lasting; can be refinished.",
          "Heavier, and usually costs more.",
          "Natural movement with humidity — good construction allows for it.",
        ],
      },
      { type: "h2", text: "Engineered wood" },
      {
        type: "p",
        text: "Plywood, MDF and particle board are made from wood layers or fibres bonded together. Finished with laminate or veneer, they're stable, consistent in look and more affordable — which is why they're widely used for wardrobes, TV units and modular storage.",
      },
      {
        type: "ul",
        items: [
          "Good-quality plywood is strong and holds screws well.",
          "MDF gives smooth, paintable surfaces.",
          "Keep particle board away from water — edges can swell if they get wet.",
        ],
      },
      { type: "h2", text: "How to choose" },
      {
        type: "quote",
        text: "Spend on solid wood where hands and weight meet the furniture every day. Use quality engineered wood where you need large, stable panels.",
      },
      {
        type: "p",
        text: "Always ask what a piece is made of — including the inside of drawers and the back panel. A good shop will tell you plainly.",
      },
    ],
  },
  {
    slug: "choosing-the-right-sofa",
    title: "Choosing a sofa you'll still love in ten years",
    excerpt:
      "Frame, foam, fabric and fit. What to look for — and what to ask — before you bring a sofa home.",
    category: "Buying guide",
    readMinutes: 5,
    published: "2026-03-11",
    cover: photos.sofaLeather,
    body: [
      {
        type: "p",
        text: "A sofa is one of the largest purchases for any home, and one of the most used. Looks matter, but the things you can't see decide how it feels in year five.",
      },
      { type: "h2", text: "Start with the frame" },
      {
        type: "p",
        text: "Ask what the frame is made of. A sturdy wooden frame with well-fixed joints is what keeps a sofa from creaking and sagging. Lift one corner — a solid sofa feels substantial and doesn't twist.",
      },
      { type: "h2", text: "Then the cushions" },
      {
        type: "p",
        text: "Higher-density foam holds its shape longer. Press firmly into the seat and let go: it should recover quickly. Removable cushion covers are a bonus for cleaning.",
      },
      { type: "h2", text: "Fabric for real life" },
      {
        type: "ul",
        items: [
          "Children or pets? Choose tightly woven fabric or leatherette that wipes clean.",
          "Strong afternoon sun? Mid-tones fade less noticeably than deep colours.",
          "Humid months? Breathable fabric stays more comfortable to sit on.",
        ],
      },
      { type: "h2", text: "Sit like you'll sit at home" },
      {
        type: "p",
        text: "Don't just perch for a second. Lean back, put your feet up, sit sideways. Check that your feet reach the floor and that the back supports you. Then measure your doorways one more time.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
