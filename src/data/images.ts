/**
 * ============================================================
 *  SITE IMAGE REGISTRY — the ONLY file you edit for images
 * ============================================================
 *
 *  Every image on the website is just a LINK (a text string).
 *
 *  TO CHANGE ANY IMAGE:
 *    Replace the link in quotes with your own image URL, e.g.
 *      hero: "https://images.unsplash.com/photo-xxxx",
 *
 *  You can use:
 *    - Any public image URL (https://...)
 *    - A file you put in the "public" folder, e.g. "/my-photo.jpg"
 *
 *  Recommended sizes: hero/banner 1920x1080, cards 1400x1050.
 * ============================================================
 */


/* ------------------------------------------------------------
 * 0. IMAGE HOST — where the uploaded images are served from.
 *    Keep this as-is unless you move your images somewhere else.
 * ---------------------------------------------------------- */
const IMAGE_HOST = "https://test11221212.lovable.app";

/** Turns an uploaded image path into a full link that works on any domain. */
const img = (link: string) => (link.startsWith("/__l5e/") ? IMAGE_HOST + link : link);

/* ------------------------------------------------------------
 * 1. BRAND — logo used in the header and footer
 * ---------------------------------------------------------- */
export const brandImages = {
  logo: img("/__l5e/assets-v1/6b0f2c20-9e9f-4514-a3d2-59e4ee8b1e85/logo.png"),
};

/* ------------------------------------------------------------
 * 2. HOMEPAGE
 * ---------------------------------------------------------- */
export const homeImages = {
  /** Big full-screen background image at the very top of the homepage */
  hero: img("/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg"),
  /** Image next to the "engineering / profile" section */
  engineeringDetail: img("/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg"),
  /** The 4 square cards in the "Solutions" band */
  solutionVillas: img("/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg"),
  solutionApartments: img("/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg"),
  solutionHospitality: img("/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg"),
  solutionCommercial: img("/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg"),
};

/* ------------------------------------------------------------
 * 3. ABOUT PAGE
 * ---------------------------------------------------------- */
export const aboutImages = {
  /** Background image behind the About page title */
  hero: img("/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg"),
  /** Photo beside "The YKS Technologies Standard" text */
  detail: img("/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg"),
};

/* ------------------------------------------------------------
 * 4. SOLUTIONS PAGE — one image per solution card
 * ---------------------------------------------------------- */
export const solutionImages = {
  villas: img("/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg"),
  apartments: img("/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg"),
  luxuryResidences: img("/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg"),
  commercialBuildings: img("/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg"),
  hospitality: img("/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg"),
  hospitals: img("/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg"),
  education: img("/__l5e/assets-v1/a50e73de-7b82-49d6-abe1-fff0c0ab6fbd/sliding-windows.jpg"),
  corporateOffices: img("/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg"),
};

/* ------------------------------------------------------------
 * 5. PRODUCTS — one image per product (key = product URL slug)
 * ---------------------------------------------------------- */
export const productImages: Record<string, string> = {
  // Windows
  "sliding-windows": img("/__l5e/assets-v1/a50e73de-7b82-49d6-abe1-fff0c0ab6fbd/sliding-windows.jpg"),
  "casement-windows": img("/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg"),
  "tilt-turn-windows": img("/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg"),
  "fixed-windows": img("/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg"),
  "bay-windows": img("/__l5e/assets-v1/3a32504e-67a4-4226-9b76-33ae1a560662/bay-windows.jpg"),
  "combination-windows": img("/__l5e/assets-v1/da2de61b-3f02-4491-bb91-292170e861a3/combination-windows.jpg"),
  "villa-windows": img("/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg"),
  "designer-windows": img("/__l5e/assets-v1/690a9b44-3316-44c6-acf2-a6ee22adfe65/designer-windows.jpg"),
  // Doors
  "sliding-doors": img("/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg"),
  "french-doors": img("/__l5e/assets-v1/98317401-2550-4afd-ba3d-cf9cbef03dac/french-doors.jpg"),
  "casement-doors": img("/__l5e/assets-v1/7dd76148-3af1-4d67-a564-4895ee22e62f/casement-doors.jpg"),
  "lift-slide-doors": img("/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg"),
  "folding-doors": img("/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg"),
  "villa-doors": img("/__l5e/assets-v1/bdbaef18-6558-4ffd-b802-5186599724a3/villa-doors.jpg"),
  "balcony-doors": img("/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg"),
  // Special Systems
  "large-opening-systems": img("/__l5e/assets-v1/2f339371-23d9-4062-b518-81ba40f82550/large-opening-systems.jpg"),
  "luxury-villa-collection": img("/__l5e/assets-v1/bdbaef18-6558-4ffd-b802-5186599724a3/villa-doors.jpg"),
  "high-performance-systems": img("/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg"),
  "acoustic-systems": img("/__l5e/assets-v1/7ca18c5e-f623-48e3-b220-3ea071c6ffc5/acoustic-systems.jpg"),
  "energy-efficient-systems": img("/__l5e/assets-v1/31d7c2c8-0ac6-4ab0-a861-7f077ea095d2/lift-slide.jpg"),
};

/* ------------------------------------------------------------
 * 6. GALLERY PAGE — add / remove / reorder items freely.
 *    img = the picture link, title = caption, tag = filter buttons
 *    Allowed tags: "Windows" | "Doors" | "Villas" | "Apartments" | "Commercial"
 * ---------------------------------------------------------- */
export const galleryImages = [
  { img: img("/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg"), title: "Coastal villa, Goa", tag: ["Doors", "Villas"] },
  { img: img("/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg"), title: "Heritage villa, Pune", tag: ["Windows", "Villas"] },
  { img: img("/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg"), title: "Sky residence, Mumbai", tag: ["Windows", "Apartments"] },
  { img: img("/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg"), title: "Hillside retreat, Lonavala", tag: ["Doors", "Villas"] },
  { img: img("/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg"), title: "Garden residence, Bengaluru", tag: ["Doors", "Apartments"] },
  { img: img("/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg"), title: "Engineering detail", tag: ["Windows", "Commercial"] },
  { img: img("/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg"), title: "Boutique office, Delhi", tag: ["Windows", "Commercial"] },
  { img: img("/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg"), title: "Penthouse, Hyderabad", tag: ["Windows", "Apartments"] },
  { img: img("/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg"), title: "Modernist villa, Dubai", tag: ["Doors", "Villas"] },
];

/* ------------------------------------------------------------
 * 7. PROJECTS PAGE — one image per project
 * ---------------------------------------------------------- */
export const projectImages = {
  merveilleCoastalVilla: img("/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg"),
  maisonVerde: img("/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg"),
  skyline47: img("/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg"),
  aetheriaHillside: img("/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg"),
  verandahResidences: img("/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg"),
  ashaHealthTower: img("/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg"),
};
