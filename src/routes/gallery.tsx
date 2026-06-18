import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/site/Section";
import villa from "@/assets/villa-casement.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";
import folding from "@/assets/folding-door.jpg";
import hero from "@/assets/hero-villa.jpg";
import profile from "@/assets/profile-detail.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Premium uPVC Windows & Doors | Aurelin" },
      { name: "description", content: "Browse the Aurelin gallery of installed uPVC windows, doors and façade systems across villas, apartments and commercial projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const tags = ["All","Windows","Doors","Villas","Apartments","Commercial"] as const;
const items = [
  { img: hero, tag: ["Doors","Villas"], title: "Coastal villa, Goa" },
  { img: villa, tag: ["Windows","Villas"], title: "Heritage villa, Pune" },
  { img: tilt, tag: ["Windows","Apartments"], title: "Sky residence, Mumbai" },
  { img: liftSlide, tag: ["Doors","Villas"], title: "Hillside retreat, Lonavala" },
  { img: folding, tag: ["Doors","Apartments"], title: "Garden residence, Bengaluru" },
  { img: profile, tag: ["Windows","Commercial"], title: "Engineering detail" },
  { img: villa, tag: ["Windows","Commercial"], title: "Boutique office, Delhi" },
  { img: tilt, tag: ["Windows","Apartments"], title: "Penthouse, Hyderabad" },
  { img: hero, tag: ["Doors","Villas"], title: "Modernist villa, Dubai" },
];

function Gallery() {
  const [filter, setFilter] = useState<(typeof tags)[number]>("All");
  const [open, setOpen] = useState<string | null>(null);
  const list = filter === "All" ? items : items.filter((i) => i.tag.includes(filter));
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Gallery" title="Installed. Inhabited. Loved." lead="A curated selection of completed Aurelin installations." />
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`px-4 h-10 rounded-full text-sm border transition-all ${filter === t ? "bg-foreground text-background border-foreground" : "border-border/60 text-muted-foreground hover:text-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {list.map((i, idx) => (
          <button key={idx} onClick={() => setOpen(i.img)} className="mb-5 block w-full break-inside-avoid group relative overflow-hidden rounded-2xl border border-border/60">
            <img src={i.img} alt={i.title} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-ink/90 to-transparent text-left">
              <div className="text-sm font-display font-medium">{i.title}</div>
            </div>
          </button>
        ))}
      </div>
      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">{open && <img src={open} alt="Preview" className="w-full rounded-2xl" />}</DialogContent>
      </Dialog>
    </div>
  );
}