import { photos, type Photo } from "./images";

/**
 * Collections are organised by room. The piece lists describe the kinds of
 * furniture a visitor can ask about — not a live stock list.
 * CONFIRM WITH OWNER: adjust categories and pieces to match the showroom.
 */
export type Collection = {
  slug: string;
  index: string;
  name: string;
  kicker: string;
  summary: string;
  intro: string[];
  cover: Photo;
  gallery: Photo[];
  pieces: { name: string; note: string }[];
  considerations: { title: string; body: string }[];
};

export const collections: Collection[] = [
  {
    slug: "living-room",
    index: "01",
    name: "Living Room",
    kicker: "Sofas, centre tables & media units",
    summary:
      "The room that does the most work. Seating sized for real families, and tables that survive tea, homework and guests.",
    intro: [
      "A living room in Pune has to be many rooms at once — a place for guests on Sunday, a homework table on Monday and a cricket-watching den through the season.",
      "We help you choose seating that suits how many people actually sit together in your home, in fabrics and finishes that will look right after years of use, not just on the day it arrives.",
    ],
    cover: photos.livingWarm,
    gallery: [photos.livingWarm, photos.sofaLeather, photos.sofaGreen, photos.livingBright, photos.wallShelves],
    pieces: [
      { name: "Sofa sets", note: "3+1+1, L-shapes and compact two-seaters" },
      { name: "Sofa-cum-beds", note: "For homes where the hall becomes a guest room" },
      { name: "Centre & side tables", note: "Wood, glass-top and nesting options" },
      { name: "TV & media units", note: "Wall-mounted or floor-standing storage" },
      { name: "Recliners & lounge chairs", note: "Single seats for the corner that gets the light" },
    ],
    considerations: [
      {
        title: "Measure the walk-way, not just the wall",
        body: "Leave roughly 75–90 cm between the sofa and the centre table so people can pass without turning sideways.",
      },
      {
        title: "Pick fabric for the season",
        body: "Tightly woven fabrics and leatherette wipe clean easily; looser weaves breathe better through humid months.",
      },
      {
        title: "Check the depth",
        body: "A seat depth of 55–60 cm suits most people for upright sitting; deeper seats are better for lounging.",
      },
    ],
  },
  {
    slug: "bedroom",
    index: "02",
    name: "Bedroom",
    kicker: "Beds, side tables & dressers",
    summary:
      "Quiet, solid pieces built around a good night's sleep — with the storage a bedroom always ends up needing.",
    intro: [
      "Most of the bedroom is the bed, so it deserves the most thought: the frame, the height, and whether the space underneath should hold storage.",
      "Visit to sit on the edge of a frame, open the hydraulic storage, and compare headboards side by side before you commit.",
    ],
    cover: photos.bedroomDark,
    gallery: [photos.bedroomDark, photos.bedroomWarm, photos.bedroomClassic, photos.sideTable],
    pieces: [
      { name: "King & queen beds", note: "Box storage, hydraulic lift or open frame" },
      { name: "Single & bunk beds", note: "For children's rooms and shared spaces" },
      { name: "Bedside tables", note: "With drawers, shelves or both" },
      { name: "Dressing tables", note: "Mirror units with storage below" },
      { name: "Upholstered headboards", note: "Soft backs for reading in bed" },
    ],
    considerations: [
      {
        title: "Know your mattress size first",
        body: "Standard Indian sizes are 72×72 in (king) and 72×60 in (queen) — confirm yours before choosing a frame.",
      },
      {
        title: "Hydraulic or box storage?",
        body: "Hydraulic lifts give full access with little effort; box storage with side drawers suits rooms where the bed sits against a wall.",
      },
      {
        title: "Allow clearance around the bed",
        body: "Around 60 cm on each open side keeps making the bed and opening wardrobe doors comfortable.",
      },
    ],
  },
  {
    slug: "dining",
    index: "03",
    name: "Dining",
    kicker: "Tables & chairs for four to eight",
    summary:
      "Tables for long lunches and quick breakfasts. Chairs comfortable enough that nobody hurries away.",
    intro: [
      "The dining table is often the one piece of furniture everyone in the house uses every day. It should be steady, easy to clean, and the right size for both a normal Tuesday and a festival meal.",
    ],
    cover: photos.diningWood,
    gallery: [photos.diningWood, photos.diningGarden, photos.diningWindow, photos.chairGrey],
    pieces: [
      { name: "Four-seater sets", note: "Compact tables for flats and kitchens" },
      { name: "Six-seater sets", note: "The family standard" },
      { name: "Eight-seater sets", note: "For larger homes and frequent guests" },
      { name: "Dining chairs", note: "Wooden or upholstered, sold to match" },
      { name: "Benches", note: "Seat more people along one side" },
    ],
    considerations: [
      {
        title: "Give every diner 60 cm",
        body: "Plan about 60 cm of table edge per person, and around 90 cm behind each chair to pull it out comfortably.",
      },
      {
        title: "Round tables in tight rooms",
        body: "A round or oval top has no corners to walk into and lets one more person squeeze in when needed.",
      },
      {
        title: "Choose the top for your kitchen habits",
        body: "Laminate and sealed wood shrug off spills; marble and glass look striking but ask for more care.",
      },
    ],
  },
  {
    slug: "wardrobes-storage",
    index: "04",
    name: "Wardrobes & Storage",
    kicker: "Wardrobes, cabinets & shelving",
    summary:
      "Storage that keeps a home calm. Wardrobes, shoe racks, cabinets and shelves made to fit the space you have.",
    intro: [
      "Good storage is invisible — it simply makes the rest of the home feel bigger. The right wardrobe or cabinet is about your belongings first and the furniture second.",
      "Bring the measurements of the wall and a rough list of what needs to go inside, and we can talk through shelf, drawer and hanging configurations.",
    ],
    cover: photos.wardrobeDoor,
    gallery: [photos.wardrobeDoor, photos.shelving, photos.sideboard, photos.console],
    pieces: [
      { name: "Two, three & four-door wardrobes", note: "Hinged or sliding doors" },
      { name: "Shoe racks", note: "Closed cabinets for the entrance" },
      { name: "Sideboards & crockery units", note: "For the dining area" },
      { name: "Bookshelves", note: "Open and closed shelving" },
      { name: "Chest of drawers", note: "Compact storage for any room" },
    ],
    considerations: [
      {
        title: "Sliding doors save floor space",
        body: "Hinged doors need roughly 50–60 cm of clear floor in front; sliding shutters need none.",
      },
      {
        title: "Mix hanging and shelving",
        body: "Long hanging for kurtas and sarees, short hanging for shirts, and shelves for folded clothes — most families need all three.",
      },
      {
        title: "Mind the ceiling and the monsoon",
        body: "Check ceiling height for loft units, and keep wardrobes a few centimetres off damp exterior walls.",
      },
    ],
  },
  {
    slug: "study-office",
    index: "05",
    name: "Study & Office",
    kicker: "Desks, office chairs & workstations",
    summary:
      "Work-from-home desks, study tables for students, and chairs you can sit in for a full working day.",
    intro: [
      "A desk is a tool. It should be the right height, wide enough for what you actually do, and paired with a chair that supports you through long hours.",
    ],
    cover: photos.studyWall,
    gallery: [photos.studyWall, photos.studyDesk, photos.shelving],
    pieces: [
      { name: "Study tables", note: "With shelves and drawers for students" },
      { name: "Office desks", note: "For home offices and small businesses" },
      { name: "Office chairs", note: "Adjustable height and back support" },
      { name: "Computer tables", note: "Compact units with keyboard trays" },
      { name: "Filing & storage cabinets", note: "Lockable options available on request" },
    ],
    considerations: [
      {
        title: "Desk height around 72–76 cm",
        body: "Most adults work comfortably at this height; pair it with a chair that adjusts so your feet rest flat.",
      },
      {
        title: "Depth matters more than width",
        body: "At least 60 cm of depth keeps a monitor at a comfortable distance from your eyes.",
      },
      {
        title: "Test the chair properly",
        body: "Sit for a few minutes, not seconds. Check lumbar support and that the armrests clear the desk edge.",
      },
    ],
  },
  {
    slug: "chairs-accents",
    index: "06",
    name: "Chairs & Accents",
    kicker: "Accent chairs, side tables & finishing pieces",
    summary:
      "The pieces that give a room its personality — a reading chair, a side table, a console by the door.",
    intro: [
      "Accent pieces are where a home starts to feel like yours. A single well-chosen chair or table can change the character of a whole room.",
    ],
    cover: photos.chairMustard,
    gallery: [photos.chairMustard, photos.armchairYellow, photos.chairGrey, photos.sideTable, photos.console],
    pieces: [
      { name: "Accent & lounge chairs", note: "Upholstered statement seats" },
      { name: "Side & nesting tables", note: "Beside a sofa or a bed" },
      { name: "Console tables", note: "For the entrance or behind a sofa" },
      { name: "Pouffes & ottomans", note: "Extra seats that tuck away" },
      { name: "Plastic & café chairs", note: "Practical seating for balconies and events" },
    ],
    considerations: [
      {
        title: "Start with one colour",
        body: "Pull an accent colour from a cushion, rug or painting already in the room so new pieces feel connected.",
      },
      {
        title: "Mind the arm height",
        body: "A side table looks and works best when it sits within a few centimetres of the sofa or chair arm next to it.",
      },
      {
        title: "Give it space",
        body: "A statement chair needs breathing room — avoid pushing it tight against other furniture.",
      },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
