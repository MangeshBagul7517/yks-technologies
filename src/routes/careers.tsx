import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Aurelin" },
      { name: "description", content: "Build a career in premium fenestration with Aurelin — design, engineering, manufacturing, installation and showroom roles." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  { t: "Senior Architect Liaison", l: "Mumbai · Full-time", d: "Partner with leading studios to specify Aurelin systems." },
  { t: "Fenestration Design Engineer", l: "Pune · Full-time", d: "Detail bespoke systems for residential and commercial projects." },
  { t: "Concierge Installation Lead", l: "Bengaluru · Full-time", d: "Lead white-glove install teams for luxury residences." },
  { t: "Showroom Experience Manager", l: "Delhi NCR · Full-time", d: "Curate the Aurelin showroom journey for HNI clients." },
  { t: "QC & Testing Engineer", l: "Pune · Full-time", d: "Own air, water, wind and acoustic testing for every system." },
];

function Careers() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeader eyebrow="Careers" title="Build what lasts." lead="We hire engineers, architects and craftspeople who care about how things are made." />
      <div className="mt-12 space-y-3">
        {roles.map((r) => (
          <div key={r.t} className="rounded-2xl border border-border/60 p-6 flex flex-wrap gap-4 items-center justify-between hover:bg-card/60 transition-colors">
            <div>
              <div className="text-lg font-display font-semibold">{r.t}</div>
              <div className="text-sm text-muted-foreground">{r.l}</div>
              <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
            </div>
            <Button variant="outline">Apply <ArrowRight className="ml-1 size-4" /></Button>
          </div>
        ))}
      </div>
    </div>
  );
}