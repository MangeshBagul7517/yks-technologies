import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/data/products";
import { SectionHeader, Eyebrow } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEnquiry } from "@/components/site/EnquiryDialog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "uPVC Windows & Doors Collection — Aurelin" },
      { name: "description", content: "Explore the complete Aurelin collection of German-engineered uPVC windows, doors and large-opening systems for villas, apartments and commercial projects." },
      { property: "og:title", content: "uPVC Windows & Doors Collection — Aurelin" },
      { property: "og:description", content: "Sliding, casement, tilt & turn, lift & slide, folding and bespoke uPVC systems." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const categories = ["All", "Windows", "Doors", "Special Systems"] as const;

function ProductsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const { open } = useEnquiry();
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Collection" title="Every opening, engineered." lead="A complete system of windows, doors and façade-scale openings — each designed to perform for decades." />
      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`px-4 h-10 rounded-full text-sm border transition-all ${cat === c ? "bg-foreground text-background border-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((p) => (
          <div key={p.slug} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30">
            <Link to="/products/$slug" params={{ slug: p.slug }} className="block aspect-[5/4] overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" width={800} height={640} className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
            </Link>
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-azure">{p.category}</div>
              <div className="mt-1 text-xl font-display font-semibold">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.overview}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline"><Link to="/products/$slug" params={{ slug: p.slug }}>Details <ArrowRight className="ml-1 size-3.5" /></Link></Button>
                <Button size="sm" onClick={() => open(p.name)}>Enquire Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}