import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import villa from "@/assets/villa-casement.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import folding from "@/assets/folding-door.jpg";
import hero from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — uPVC Systems for Every Envelope | YKS Technologies" },
      { name: "description", content: "YKS Technologies uPVC solutions for villas, luxury apartments, hospitality, healthcare, education and commercial projects." },
      { property: "og:title", content: "Solutions — YKS Technologies" },
      { property: "og:description", content: "Engineered fenestration for every architectural envelope." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: Solutions,
});

const items = [
  { t: "Villas", d: "Whole-house systems with coordinated profiles, finishes and concierge installation.", img: villa },
  { t: "Apartments", d: "High-rise grade tilt & turn and balcony systems engineered for storm zones.", img: tilt },
  { t: "Luxury Residences", d: "Designer windows in 40+ finishes, paired with façade-scale openings.", img: hero },
  { t: "Commercial Buildings", d: "Façade-grade glazing with structural mullions and engineered wind loads.", img: liftSlide },
  { t: "Hospitality", d: "Acoustic & thermal systems calibrated for guest comfort and operating cost.", img: folding },
  { t: "Hospitals", d: "Antimicrobial-finished systems with airtight seals for critical environments.", img: tilt },
  { t: "Education", d: "Daylight-optimised, sound-insulating glazing for learning environments.", img: villa },
  { t: "Corporate Offices", d: "Workplace-grade façades that balance daylight, glare and energy.", img: hero },
];

function Solutions() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Solutions" title="Engineered for every envelope." lead="From single villas to entire towers — YKS Technologies specifies, fabricates and installs as one accountable partner." />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s) => (
          <Link key={s.t} to="/contact" className="group relative overflow-hidden rounded-2xl border border-border/60">
            <div className="aspect-[5/4] overflow-hidden"><img src={s.img} alt={s.t} loading="lazy" width={800} height={640} className="size-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" /></div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-2xl font-display font-semibold">{s.t}</div>
              <div className="mt-2 text-sm text-white/70">{s.d}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}