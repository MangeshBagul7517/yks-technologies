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
 * 1. BRAND — logo used in the header and footer
 * ---------------------------------------------------------- */
export const brandImages = {
  logo: "/__l5e/assets-v1/6b0f2c20-9e9f-4514-a3d2-59e4ee8b1e85/logo.png",
};

/* ------------------------------------------------------------
 * 2. HOMEPAGE
 * ---------------------------------------------------------- */
export const homeImages = {
  /** Big full-screen background image at the very top of the homepage */
  hero: "/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg",
  /** Image next to the "engineering / profile" section */
  engineeringDetail: "/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg",
  /** The 4 square cards in the "Solutions" band */
  solutionVillas: "/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg",
  solutionApartments: "/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg",
  solutionHospitality: "/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg",
  solutionCommercial: "/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg",
};

/* ------------------------------------------------------------
 * 3. ABOUT PAGE
 * ---------------------------------------------------------- */
export const aboutImages = {
  /** Background image behind the About page title */
  hero: "/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg",
  /** Photo beside "The YKS Technologies Standard" text */
  detail: "/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg",
};

/* ------------------------------------------------------------
 * 4. SOLUTIONS PAGE — one image per solution card
 * ---------------------------------------------------------- */
export const solutionImages = {
  villas: "/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg",
  apartments: "/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg",
  luxuryResidences: "/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg",
  commercialBuildings: "/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg",
  hospitality: "/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg",
  hospitals: "/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg",
  education: "/__l5e/assets-v1/a50e73de-7b82-49d6-abe1-fff0c0ab6fbd/sliding-windows.jpg",
  corporateOffices: "/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg",
};

/* ------------------------------------------------------------
 * 5. PRODUCTS — one image per product (key = product URL slug)
 * ---------------------------------------------------------- */
export const productImages: Record<string, string> = {
  // Windows
  "sliding-windows": "/__l5e/assets-v1/a50e73de-7b82-49d6-abe1-fff0c0ab6fbd/sliding-windows.jpg",
  "casement-windows": "/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg",
  "tilt-turn-windows": "/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg",
  "fixed-windows": "/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg",
  "bay-windows": "/__l5e/assets-v1/3a32504e-67a4-4226-9b76-33ae1a560662/bay-windows.jpg",
  "combination-windows": "/__l5e/assets-v1/91424cd1-216a-4027-b035-0916460e125a/interior-tilt-turn.jpg",
  "villa-windows": "/__l5e/assets-v1/9e75a2b5-4273-4601-b6f6-83c6aac32329/villa-casement.jpg",
  "designer-windows": "/__l5e/assets-v1/690a9b44-3316-44c6-acf2-a6ee22adfe65/designer-windows.jpg",
  // Doors
  "sliding-doors": "/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg",
  "french-doors": "/__l5e/assets-v1/98317401-2550-4afd-ba3d-cf9cbef03dac/french-doors.jpg",
  "casement-doors": "/__l5e/assets-v1/04397377-552c-4eea-97df-56af4c1b06de/folding-door.jpg",
  "lift-slide-doors": "/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg",
  "folding-doors": "/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg",
  "villa-doors": "/__l5e/assets-v1/bdbaef18-6558-4ffd-b802-5186599724a3/villa-doors.jpg",
  "balcony-doors": "/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg",
  // Special Systems
  "large-opening-systems": "/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg",
  "luxury-villa-collection": "/__l5e/assets-v1/bdbaef18-6558-4ffd-b802-5186599724a3/villa-doors.jpg",
  "high-performance-systems": "/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg",
  "acoustic-systems": "/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg",
  "energy-efficient-systems": "/__l5e/assets-v1/31d7c2c8-0ac6-4ab0-a861-7f077ea095d2/lift-slide.jpg",
};

/* ------------------------------------------------------------
 * 6. GALLERY PAGE — add / remove / reorder items freely.
 *    img = the picture link, title = caption, tag = filter buttons
 *    Allowed tags: "Windows" | "Doors" | "Villas" | "Apartments" | "Commercial"
 * ---------------------------------------------------------- */
export const galleryImages = [
  { img: "/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg", title: "Coastal villa, Goa", tag: ["Doors", "Villas"] },
  { img: "/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg", title: "Heritage villa, Pune", tag: ["Windows", "Villas"] },
  { img: "/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg", title: "Sky residence, Mumbai", tag: ["Windows", "Apartments"] },
  { img: "/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg", title: "Hillside retreat, Lonavala", tag: ["Doors", "Villas"] },
  { img: "/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg", title: "Garden residence, Bengaluru", tag: ["Doors", "Apartments"] },
  { img: "/__l5e/assets-v1/9b78af2f-1660-46f9-a2a7-68d7a748e0b0/profile-detail.jpg", title: "Engineering detail", tag: ["Windows", "Commercial"] },
  { img: "/__l5e/assets-v1/05d9a54c-50f9-4c7e-8f9d-feb608b9f473/fixed-windows.jpg", title: "Boutique office, Delhi", tag: ["Windows", "Commercial"] },
  { img: "/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg", title: "Penthouse, Hyderabad", tag: ["Windows", "Apartments"] },
  { img: "/__l5e/assets-v1/113caad0-2cd5-45f7-b360-9d0496d99b95/sliding-doors.jpg", title: "Modernist villa, Dubai", tag: ["Doors", "Villas"] },
];

/* ------------------------------------------------------------
 * 7. PROJECTS PAGE — one image per project
 * ---------------------------------------------------------- */
export const projectImages = {
  merveilleCoastalVilla: "/__l5e/assets-v1/bd816bc7-dd8a-4c01-9d27-4b3637a6658a/hero-villa.jpg",
  maisonVerde: "/__l5e/assets-v1/c67e8a9c-7534-4a91-ad55-7daf2b561790/casement-windows.jpg",
  skyline47: "/__l5e/assets-v1/7a2f418d-771b-47c1-a319-c8fec0f48054/balcony-doors.jpg",
  aetheriaHillside: "/__l5e/assets-v1/0d1c047b-d580-4f1e-bcf8-f960865ecfd4/lift-slide-doors.jpg",
  verandahResidences: "/__l5e/assets-v1/61e286cb-b8ee-4be1-932f-f3ee1457af9f/folding-doors.jpg",
  ashaHealthTower: "/__l5e/assets-v1/1536fb6e-4f84-40f6-8aa7-1f91cbde8310/tilt-turn-windows.jpg",
};
