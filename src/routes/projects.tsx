import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import villa from "@/assets/villa-casement.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import hero from "@/assets/hero-villa.jpg";
import folding from "@/assets/folding-door.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Featured Installations | Aurelin" },
      { name: "description", content: "Featured Aurelin projects across residential, commercial and hospitality sectors — engineered, fabricated and installed by one accountable partner." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { img: hero, name: "Mereveille — Coastal Villa", loc: "Anjuna, Goa", client: "Private residence", products: "Lift & Slide Doors, Sliding Windows", desc: "A 12-metre lift-and-slide opening dissolves the living room into the infinity pool deck." },
  { img: villa, name: "Maison Verde", loc: "Koregaon Park, Pune", client: "Private residence", products: "Casement & Bay Windows", desc: "Heritage proportions reimagined with concealed European hardware across 64 sashes." },
  { img: tilt, name: "Skyline 47", loc: "BKC, Mumbai", client: "Sky residence", products: "Tilt & Turn, Balcony Doors", desc: "Acoustic systems calibrated for arterial-road frontage; ambient noise reduced by 41 dB." },
  { img: liftSlide, name: "Aetheria Hillside", loc: "Lonavala", client: "Private residence", products: "Lift & Slide Doors", desc: "Wind-rated façade glazing for monsoon-grade exposure at 800 m elevation." },
  { img: folding, name: "Verandah Residences", loc: "Whitefield, Bengaluru", client: "10 row villas", products: "Folding Doors", desc: "Bi-fold systems extend living rooms into private gardens across the entire development." },
  { img: tilt, name: "Asha Health Tower", loc: "Hyderabad", client: "200-bed hospital", products: "Antimicrobial fixed systems", desc: "Antimicrobial-finished frames for critical-care environments." },
];

function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Projects" title="Built once. Built well." lead="A selection of completed installations across India and the GCC." />
      <div className="mt-12 space-y-24">
        {projects.map((p, i) => (
          <article key={p.name} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden border border-border/60"><img src={p.img} loading="lazy" alt={p.name} className="w-full aspect-[4/3] object-cover" /></div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-azure">{p.loc}</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">{p.name}</h2>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-muted-foreground">Client</dt><dd className="mt-1 font-medium">{p.client}</dd></div>
                <div><dt className="text-muted-foreground">Products</dt><dd className="mt-1 font-medium">{p.products}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}