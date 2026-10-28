/**
 * Photography registry.
 *
 * PLACEHOLDER IMAGERY: every photo below is licensed stock from Unsplash
 * (unsplash.com/license) chosen to set the visual tone. None of it shows
 * Mahaveer Furniture's own pieces or showroom. Replace each file in
 * src/assets/images with real photography before launch — keep the same
 * filename and the rest of the site updates automatically.
 */
import type { StaticImageData } from "next/image";

import armchairYellow from "@/assets/images/armchair-yellow.jpg";
import bedroomClassic from "@/assets/images/bedroom-classic.jpg";
import bedroomDark from "@/assets/images/bedroom-dark.jpg";
import bedroomWarm from "@/assets/images/bedroom-warm.jpg";
import chairGrey from "@/assets/images/chair-grey.jpg";
import chairMustard from "@/assets/images/chair-mustard.jpg";
import consoleTable from "@/assets/images/console.jpg";
import diningGarden from "@/assets/images/dining-garden.jpg";
import diningWindow from "@/assets/images/dining-window.jpg";
import diningWood from "@/assets/images/dining-wood.jpg";
import heroChair from "@/assets/images/hero-chair.jpg";
import livingBright from "@/assets/images/living-bright.jpg";
import livingLounge from "@/assets/images/living-lounge.jpg";
import livingWarm from "@/assets/images/living-warm.jpg";
import shelving from "@/assets/images/shelving.jpg";
import sideTable from "@/assets/images/side-table.jpg";
import sideboard from "@/assets/images/sideboard.jpg";
import sofaGreen from "@/assets/images/sofa-green.jpg";
import sofaLeather from "@/assets/images/sofa-leather.jpg";
import studyDesk from "@/assets/images/study-desk.jpg";
import studyWall from "@/assets/images/study-wall.jpg";
import tools from "@/assets/images/tools.jpg";
import wallShelves from "@/assets/images/wall-shelves.jpg";
import wardrobeDoor from "@/assets/images/wardrobe-door.jpg";

export type Photo = { src: StaticImageData; alt: string };

export const photos = {
  heroChair: { src: heroChair, alt: "A solid wood chair standing alone under a warm spotlight" },
  sofaLeather: { src: sofaLeather, alt: "Three-seater tan leather sofa on a light wooden floor" },
  sofaGreen: { src: sofaGreen, alt: "Deep green velvet sofa with tapered wooden legs" },
  livingWarm: { src: livingWarm, alt: "Sunlit living room with a leather sofa, low wooden table and plants" },
  livingBright: { src: livingBright, alt: "Bright living room with a grey tufted sofa and a slim wooden coffee table" },
  livingLounge: { src: livingLounge, alt: "Open living room with a long sofa, wooden stools and a clerestory window" },
  bedroomDark: { src: bedroomDark, alt: "Bedroom with a dark accent wall, low bed and bench at its foot" },
  bedroomClassic: { src: bedroomClassic, alt: "Classic bedroom with an upholstered headboard and tufted bench" },
  bedroomWarm: { src: bedroomWarm, alt: "Warmly lit bedroom with a wooden platform bed" },
  diningWood: { src: diningWood, alt: "Solid wood dining table with six grey upholstered chairs" },
  diningGarden: { src: diningGarden, alt: "Wooden dining table under pendant lights, opening onto a garden" },
  diningWindow: { src: diningWindow, alt: "Compact dining table with four chairs beside a large window" },
  wardrobeDoor: { src: wardrobeDoor, alt: "Close view of a tall wardrobe with warm wood-grain doors" },
  sideboard: { src: sideboard, alt: "Low wooden sideboard beneath a round mirror and plants" },
  shelving: { src: shelving, alt: "Tall open shelving unit in light wood laminate" },
  studyWall: { src: studyWall, alt: "Wall-mounted wooden study desk with a matching chair" },
  studyDesk: { src: studyDesk, alt: "Clean work desk with an ergonomic office chair" },
  chairGrey: { src: chairGrey, alt: "Grey upholstered dining chair with a wooden frame" },
  chairMustard: { src: chairMustard, alt: "Mustard tufted accent chair against a plain wall" },
  armchairYellow: { src: armchairYellow, alt: "Yellow armchair beside a floor lamp in a modern room" },
  sideTable: { src: sideTable, alt: "Cantilevered solid wood side table holding books" },
  wallShelves: { src: wallShelves, alt: "Floating wooden wall shelves and a low media unit" },
  console: { src: consoleTable, alt: "White console unit with wooden top beneath a round mirror" },
  tools: { src: tools, alt: "Rows of hand tools hanging in a workshop" },
} satisfies Record<string, Photo>;
