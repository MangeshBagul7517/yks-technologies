export type Product = {
  slug: string;
  name: string;
  category: "Windows" | "Doors" | "Special Systems";
  tagline: string;
  overview: string;
  image: string;
  features: string[];
  benefits: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  colors: string[];
  performance: { metric: string; value: string }[];
};

import heroVilla from "@/assets/hero-villa.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import villa from "@/assets/villa-casement.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import folding from "@/assets/folding-door.jpg";
import profile from "@/assets/profile-detail.jpg";

const baseSpecs = [
  { label: "Profile Depth", value: "70–82 mm multi-chamber" },
  { label: "Glazing", value: "Double / Triple, up to 44 mm" },
  { label: "Reinforcement", value: "Galvanised steel core" },
  { label: "Gaskets", value: "Co-extruded EPDM, dual seal" },
  { label: "Hardware", value: "European multi-point locking" },
];

const basePerf = [
  { metric: "U-Value", value: "0.9 W/m²K" },
  { metric: "Acoustic Reduction", value: "up to 45 dB" },
  { metric: "Wind Load", value: "Class C5" },
  { metric: "Water Tightness", value: "Class E1200" },
];

const colors = ["Snow White", "Anthracite Grey", "Jet Black", "Golden Oak", "Walnut", "Champagne"];

export const products: Product[] = [
  // Windows
  { slug: "sliding-windows", name: "Sliding Windows", category: "Windows", tagline: "Effortless glide. Uninterrupted view.", overview: "Large-format sliding windows engineered with stainless steel rollers and brush seals for whisper-quiet operation across panoramic openings.", image: heroVilla, features: ["Tandem stainless rollers","Anti-lift security catch","EPDM brush seal","Up to 3 m sash height"], benefits: ["Maximises light & view","Space-saving operation","All-weather sealing"], applications: ["Balconies","Terraces","Living rooms"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "casement-windows", name: "Casement Windows", category: "Windows", tagline: "European precision in every hinge.", overview: "Side-hung casements with concealed European hardware delivering airtight seals and timeless façade geometry.", image: villa, features: ["Concealed hinges","Multi-point locking","Microventilation","Anti-burglar pins"], benefits: ["Architectural elegance","Maximum ventilation","High security"], applications: ["Villas","Premium apartments"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "tilt-turn-windows", name: "Tilt & Turn Windows", category: "Windows", tagline: "Two modes. One masterpiece.", overview: "Inward-opening tilt & turn systems that pivot for ventilation and swing fully open for cleaning — the European gold standard.", image: tilt, features: ["Dual function operation","Trickle ventilation","Reinforced steel core","Triple gasket sealing"], benefits: ["Childproof tilt mode","Easy cleaning","Superior insulation"], applications: ["High-rise apartments","Bedrooms","Kitchens"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "fixed-windows", name: "Fixed Windows", category: "Windows", tagline: "Pure light. Pure architecture.", overview: "Non-operable picture windows that frame the view with the slimmest possible sightlines.", image: villa, features: ["Slim 58 mm sightline","Structural glazing","Custom geometry"], benefits: ["Maximum daylight","Zero air leakage","Architectural focal point"], applications: ["Staircases","Feature walls"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "bay-windows", name: "Bay Windows", category: "Windows", tagline: "Sculpted space. Curated light.", overview: "Multi-angle bay configurations that extend interior space and bathe rooms in directional daylight.", image: villa, features: ["30°/45°/90° geometries","Structural mullions","Integrated drainage"], benefits: ["Adds floor area","Panoramic perspective","Heritage character"], applications: ["Living rooms","Reading nooks"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "combination-windows", name: "Combination Windows", category: "Windows", tagline: "Engineered configurations, infinite expression.", overview: "Bespoke combinations of fixed, casement and tilt sashes within a single architectural frame.", image: tilt, features: ["Custom mullions","Mixed operations","Concealed coupling"], benefits: ["Design flexibility","Optimised ventilation","Unified aesthetic"], applications: ["Façade glazing","Double-height halls"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "villa-windows", name: "Villa Windows", category: "Windows", tagline: "The signature of bespoke residences.", overview: "Heritage proportions reimagined in modern uPVC — purpose-built for luxury villas and private estates.", image: villa, features: ["Georgian bars option","Brass-finish hardware","Laminated security glass"], benefits: ["Heritage aesthetic","Modern performance","Whole-villa systems"], applications: ["Luxury villas","Farmhouses"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "designer-windows", name: "Designer Windows", category: "Windows", tagline: "Architect-led, atelier-finished.", overview: "Custom geometries — arches, trapezoids, circles — finished in 40+ veneer and lacquer colours.", image: tilt, features: ["Arched & shaped frames","Foiled & lacquered finishes","Designer hardware"], benefits: ["Unique to your project","Brand-grade finish","Limitless geometry"], applications: ["Boutique hotels","Designer residences"], specs: baseSpecs, colors, performance: basePerf },
  // Doors
  { slug: "sliding-doors", name: "Sliding Doors", category: "Doors", tagline: "Walls of light that move on a whisper.", overview: "Large sliding door systems with ultra-slim interlocks and panels up to 3 m tall.", image: heroVilla, features: ["Tandem stainless rollers","Slim 25 mm interlock","Anti-derail safety","Soft-close option"], benefits: ["Dissolves indoor/outdoor","Effortless operation","All-season seal"], applications: ["Pool decks","Terraces","Penthouses"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "french-doors", name: "French Doors", category: "Doors", tagline: "Timeless symmetry. Modern engineering.", overview: "Classic double-leaf French doors with concealed hinges and full-height glazing.", image: folding, features: ["Concealed hinges","Astragal seal","Multi-point lock"], benefits: ["Heritage character","Wide unobstructed opening","Premium security"], applications: ["Patios","Master suites"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "casement-doors", name: "Casement Doors", category: "Doors", tagline: "Architectural openings, engineered shut.", overview: "Single or double swing casement doors with reinforced leaves for daily-use entrances.", image: folding, features: ["Steel-reinforced leaf","ADA-compliant threshold","High-cycle hinges"], benefits: ["Daily-use durability","Tight thermal seal","Wide design palette"], applications: ["Side entries","Garden access"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "lift-slide-doors", name: "Lift & Slide Doors", category: "Doors", tagline: "Move 400 kg with one finger.", overview: "Premium lift-and-slide hardware allows enormous glass panels to glide silently with featherlight effort.", image: liftSlide, features: ["Up to 400 kg per sash","Flush threshold option","Soft-close damper","Triple gasket seal"], benefits: ["Vast openings","Effortless luxury","Barrier-free living"], applications: ["Luxury villas","Penthouse suites"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "folding-doors", name: "Folding Doors", category: "Doors", tagline: "Open the entire wall. Welcome the outside.", overview: "Bi-fold door systems with up to 8 panels that stack neatly to open an entire elevation.", image: folding, features: ["Up to 8 panels","Top-hung or bottom-rolled","Integrated traffic door"], benefits: ["Full-width opening","Flexible configurations","Indoor-outdoor living"], applications: ["Garden rooms","Restaurants","Verandahs"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "villa-doors", name: "Villa Doors", category: "Doors", tagline: "Statement entrances for signature homes.", overview: "Oversized entrance doors with reinforced cores, designer pulls and bespoke finishes.", image: liftSlide, features: ["Reinforced core","Pivot or hinge","Designer hardware"], benefits: ["Grand-scale entry","Maximum security","Bespoke identity"], applications: ["Villa entrances","Lobby gateways"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "balcony-doors", name: "Balcony Doors", category: "Doors", tagline: "Effortless access. Unobstructed view.", overview: "Tilt & turn or sliding balcony doors with thermally-broken thresholds for high-rise comfort.", image: tilt, features: ["Low threshold","Tilt ventilation","Toughened safety glass"], benefits: ["Safe ventilation","Easy access","Storm-grade sealing"], applications: ["High-rise apartments","Hotels"], specs: baseSpecs, colors, performance: basePerf },
  // Special Systems
  { slug: "large-opening-systems", name: "Large Opening Systems", category: "Special Systems", tagline: "When a window becomes architecture.", overview: "Façade-scale glazing systems engineered for unobstructed openings exceeding 6 metres.", image: heroVilla, features: ["Slim 35 mm sightlines","Structural mullions","Engineered wind loads"], benefits: ["Architectural drama","Maximum daylight","Engineered safety"], applications: ["Atriums","Showrooms"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "luxury-villa-collection", name: "Luxury Villa Collection", category: "Special Systems", tagline: "A complete envelope for signature homes.", overview: "A curated system of windows and doors designed as one architectural language for the entire villa.", image: villa, features: ["Coordinated profiles","Whole-house warranty","Concierge installation"], benefits: ["Visual coherence","Single source","White-glove delivery"], applications: ["Private villas","Estates"], specs: baseSpecs, colors, performance: basePerf },
  { slug: "high-performance-systems", name: "High Performance Systems", category: "Special Systems", tagline: "Passive-house grade performance.", overview: "82 mm 7-chamber profiles paired with triple low-e glazing for the most demanding thermal envelopes.", image: profile, features: ["7-chamber profile","Triple low-e glass","Warm-edge spacers","Argon fill"], benefits: ["Passive-house grade","Slashes energy bills","Year-round comfort"], applications: ["Net-zero homes","Cold climates"], specs: baseSpecs, colors, performance: [{metric:"U-Value",value:"0.7 W/m²K"},...basePerf.slice(1)] },
  { slug: "acoustic-systems", name: "Acoustic Systems", category: "Special Systems", tagline: "City outside. Sanctuary inside.", overview: "Asymmetric laminated glazing tuned for 45+ dB reduction — engineered for homes on flight paths and arterial roads.", image: tilt, features: ["Asymmetric lamination","Acoustic interlayer","Dual EPDM gaskets"], benefits: ["Concert-hall silence","Better sleep","Restored focus"], applications: ["Airport zones","Highway frontages"], specs: baseSpecs, colors, performance: [{metric:"Acoustic Reduction",value:"up to 48 dB"},...basePerf.slice(0,1),...basePerf.slice(2)] },
  { slug: "energy-efficient-systems", name: "Energy Efficient Systems", category: "Special Systems", tagline: "Quietly slashing your energy bill.", overview: "Engineered for solar-control and thermal retention, balancing daylight with energy performance.", image: liftSlide, features: ["Solar-control low-e","Warm-edge spacers","Argon fill"], benefits: ["Lower bills","Reduced glare","Carbon-conscious"], applications: ["All climates","Green buildings"], specs: baseSpecs, colors, performance: basePerf },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);