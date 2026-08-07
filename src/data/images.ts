/**
 * ============================================================
 *  SITE IMAGE REGISTRY  —  the ONLY file you edit for images
 * ============================================================
 *
 *  HOW TO CHANGE ANY IMAGE ON THE WEBSITE (3 steps):
 *
 *  1) Put your image file inside:  src/assets/
 *     e.g.  src/assets/my-new-hero.jpg
 *
 *  2) Add an import line in the "IMPORTS" block below:
 *        import myNewHero from "@/assets/my-new-hero.jpg";
 *
 *  3) Find the slot you want to change further down and set it:
 *        heroHome: myNewHero,
 *
 *  That's it — the page updates everywhere that image is used.
 *
 *  Tips:
 *   - Recommended sizes: hero/banner 1920x1080, cards 1200x900.
 *   - Use .jpg for photos, .png/.webp when you need transparency.
 *   - File names: lowercase, use hyphens, no spaces.
 * ============================================================
 */

/* ------------------------------------------------------------
 * IMPORTS — one line per image file in src/assets/
 * ---------------------------------------------------------- */
import logo from "@/assets/logo.png";
import heroVilla from "@/assets/hero-villa.jpg";
import villaCasement from "@/assets/villa-casement.jpg";
import interiorTiltTurn from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import foldingDoor from "@/assets/folding-door.jpg";
import profileDetail from "@/assets/profile-detail.jpg";

/* ------------------------------------------------------------
 * 1. BRAND — logo used in the header and footer
 * ---------------------------------------------------------- */
export const brandImages = {
  logo: logo,
};

/* ------------------------------------------------------------
 * 2. HOMEPAGE
 * ---------------------------------------------------------- */
export const homeImages = {
  /** Big full-screen background image at the very top of the homepage */
  hero: heroVilla,
  /** Image next to the "engineering / profile" section */
  engineeringDetail: profileDetail,
  /** The 4 square cards in the "Solutions" band */
  solutionVillas: villaCasement,
  solutionApartments: interiorTiltTurn,
  solutionHospitality: liftSlide,
  solutionCommercial: heroVilla,
};

/* ------------------------------------------------------------
 * 3. ABOUT PAGE
 * ---------------------------------------------------------- */
export const aboutImages = {
  /** Background image behind the About page title */
  hero: villaCasement,
  /** Photo beside "The YKS Technologies Standard" text */
  detail: profileDetail,
};

/* ------------------------------------------------------------
 * 4. SOLUTIONS PAGE — one image per solution card
 * ---------------------------------------------------------- */
export const solutionImages = {
  villas: villaCasement,
  apartments: interiorTiltTurn,
  luxuryResidences: heroVilla,
  commercialBuildings: liftSlide,
  hospitality: foldingDoor,
  hospitals: interiorTiltTurn,
  education: villaCasement,
  corporateOffices: heroVilla,
};

/* ------------------------------------------------------------
 * 5. PRODUCTS — one image per product (key = product URL slug)
 *    Shown on /products, the product detail page and the homepage.
 * ---------------------------------------------------------- */
export const productImages: Record<string, string> = {
  // Windows
  "sliding-windows": heroVilla,
  "casement-windows": villaCasement,
  "tilt-turn-windows": interiorTiltTurn,
  "fixed-windows": villaCasement,
  "bay-windows": villaCasement,
  "combination-windows": interiorTiltTurn,
  "villa-windows": villaCasement,
  "designer-windows": interiorTiltTurn,
  // Doors
  "sliding-doors": heroVilla,
  "french-doors": foldingDoor,
  "casement-doors": foldingDoor,
  "lift-slide-doors": liftSlide,
  "folding-doors": foldingDoor,
  "villa-doors": liftSlide,
  "balcony-doors": interiorTiltTurn,
  // Special Systems
  "large-opening-systems": heroVilla,
  "luxury-villa-collection": villaCasement,
  "high-performance-systems": profileDetail,
  "acoustic-systems": interiorTiltTurn,
  "energy-efficient-systems": liftSlide,
};

/* ------------------------------------------------------------
 * 6. GALLERY PAGE — add / remove / reorder items freely.
 *    img   = the picture,  title = caption,  tag = filter buttons
 *    Allowed tags: "Windows" | "Doors" | "Villas" | "Apartments" | "Commercial"
 * ---------------------------------------------------------- */
export const galleryImages = [
  { img: heroVilla, title: "Coastal villa, Goa", tag: ["Doors", "Villas"] },
  { img: villaCasement, title: "Heritage villa, Pune", tag: ["Windows", "Villas"] },
  { img: interiorTiltTurn, title: "Sky residence, Mumbai", tag: ["Windows", "Apartments"] },
  { img: liftSlide, title: "Hillside retreat, Lonavala", tag: ["Doors", "Villas"] },
  { img: foldingDoor, title: "Garden residence, Bengaluru", tag: ["Doors", "Apartments"] },
  { img: profileDetail, title: "Engineering detail", tag: ["Windows", "Commercial"] },
  { img: villaCasement, title: "Boutique office, Delhi", tag: ["Windows", "Commercial"] },
  { img: interiorTiltTurn, title: "Penthouse, Hyderabad", tag: ["Windows", "Apartments"] },
  { img: heroVilla, title: "Modernist villa, Dubai", tag: ["Doors", "Villas"] },
];

/* ------------------------------------------------------------
 * 7. PROJECTS PAGE — one image per project (key = project name)
 * ---------------------------------------------------------- */
export const projectImages = {
  merveilleCoastalVilla: heroVilla,
  maisonVerde: villaCasement,
  skyline47: interiorTiltTurn,
  aetheriaHillside: liftSlide,
  verandahResidences: foldingDoor,
  ashaHealthTower: interiorTiltTurn,
};
