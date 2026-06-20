import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Shield, Volume2, Wind, Zap, Leaf, Award, Sparkles, Flame, Sun, Droplets, Wrench, Recycle } from "lucide-react";

export const Route = createFileRoute("/why-upvc")({
  head: () => ({
    meta: [
      { title: "Why uPVC Windows & Doors — YKS Technologies" },
      { name: "description", content: "Why German-engineered uPVC outperforms wood and aluminium: energy efficiency, acoustic insulation, weather resistance and decades of low-maintenance performance." },
      { property: "og:url", content: "/why-upvc" },
    ],
    links: [{ rel: "canonical", href: "/why-upvc" }],
  }),
  component: Why,
});

const reasons = [
  { Icon: Award, t: "German Technology", d: "Profiles extruded on German lines to DIN tolerances." },
  { Icon: Leaf, t: "Lead-Free Profiles", d: "Calcium-zinc stabilised compounds — REACH compliant." },
  { Icon: Droplets, t: "Weather Resistant", d: "Class E1200 water tightness; engineered for monsoons & coasts." },
  { Icon: Volume2, t: "Sound Insulation", d: "Asymmetric laminated glazing reduces noise up to 48 dB." },
  { Icon: Zap, t: "Energy Efficient", d: "Triple-glazed units achieve U-values down to 0.7 W/m²K." },
  { Icon: Sun, t: "UV Resistant", d: "Class-A surface finishes resist fading and yellowing." },
  { Icon: Flame, t: "Fire Resistant", d: "Self-extinguishing profiles to EN 13501 standards." },
  { Icon: Wind, t: "Wind Load Class C5", d: "Engineered for cyclonic and high-rise exposure." },
  { Icon: Shield, t: "Security", d: "Multi-point European locking with anti-lift catches." },
  { Icon: Wrench, t: "Low Maintenance", d: "Wipe-clean surfaces; no painting, no warping." },
  { Icon: Recycle, t: "Eco Friendly", d: "Fully recyclable profiles with low embodied carbon." },
  { Icon: Sparkles, t: "Long Life Performance", d: "25-year profile warranty; engineered for decades." },
];

function Why() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Why YKS Technologies uPVC" title="Twelve reasons it lasts longer than the wall around it." lead="YKS Technologies profiles are engineered to outlast paint cycles, weather cycles and ownership cycles." />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map(({ Icon, t, d }) => (
          <div key={t} className="rounded-2xl border border-border/60 p-6 bg-card/30 hover:bg-card/60 transition-colors">
            <div className="size-11 rounded-lg bg-azure/15 text-azure grid place-items-center"><Icon className="size-5" /></div>
            <div className="mt-5 font-display font-semibold text-lg">{t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}