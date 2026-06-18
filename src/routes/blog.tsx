import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import villa from "@/assets/villa-casement.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import folding from "@/assets/folding-door.jpg";
import hero from "@/assets/hero-villa.jpg";
import profile from "@/assets/profile-detail.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — uPVC Windows & Doors | Aurelin" },
      { name: "description", content: "Expert guides on uPVC windows and doors: sound insulation, energy efficiency, villa design and sustainable building materials." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "The Quiet Revolution: Why Soundproof uPVC Is the New Luxury", c: "Acoustics", img: tilt, r: 7 },
  { t: "How German Multi-Chamber Profiles Slash Energy Bills", c: "Efficiency", img: profile, r: 9 },
  { t: "A Buying Guide for Premium Windows in 2026", c: "Guides", img: villa, r: 11 },
  { t: "Villa Window Design Trends — A Curated Outlook", c: "Design", img: hero, r: 6 },
  { t: "Indoor–Outdoor Living: The Lift & Slide Revolution", c: "Architecture", img: liftSlide, r: 8 },
  { t: "Sustainable Building Materials: The Case for uPVC", c: "Sustainability", img: folding, r: 7 },
];

function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Insights" title="Field notes from a fenestration studio." lead="Guides, opinions and engineering deep-dives from the Aurelin atelier." />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <Link key={i} to="/blog" className="group rounded-2xl overflow-hidden border border-border/60 bg-card/30">
            <div className="aspect-[5/3] overflow-hidden"><img src={p.img} loading="lazy" alt={p.t} className="size-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" /></div>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-azure">{p.c} · {p.r} min read</div>
              <h3 className="mt-3 text-lg font-display font-semibold leading-snug">{p.t}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}