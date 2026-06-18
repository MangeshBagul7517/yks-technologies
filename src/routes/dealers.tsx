import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/dealers")({
  head: () => ({
    meta: [
      { title: "Partner Network — Dealers, Fabricators & Architects | Aurelin" },
      { name: "description", content: "Locate an Aurelin dealer, fabricator or architect partner — or apply to join our authorised network." },
      { property: "og:url", content: "/dealers" },
    ],
    links: [{ rel: "canonical", href: "/dealers" }],
  }),
  component: Dealers,
});

const cities = ["Mumbai","Delhi NCR","Bengaluru","Hyderabad","Chennai","Pune","Goa","Kolkata","Ahmedabad","Jaipur","Kochi","Dubai","Abu Dhabi","Doha","Colombo","Riyadh"];

function Dealers() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Partners" title="A network as engineered as the product." lead="Authorised dealers, fabricators and architect partners across India and the GCC." />
      <div className="mt-12 grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-display font-semibold">Find a dealer</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {cities.map((c) => (
              <div key={c} className="rounded-xl border border-border/60 px-4 py-3 text-sm flex items-center gap-2 hover:bg-card/60 transition-colors"><MapPin className="size-4 text-azure" />{c}</div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-border/60 aspect-[16/10] overflow-hidden">
            <iframe title="Network map" className="size-full" src="https://maps.google.com/maps?q=India&t=k&z=4&ie=UTF8&iwloc=&output=embed" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold">Become a partner</h3>
          <p className="mt-2 text-sm text-muted-foreground">Apply to join the Aurelin authorised network. We evaluate dealers, fabricators and architect studios.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4 rounded-2xl border border-border/60 p-6">
            <div className="grid grid-cols-2 gap-3"><div><Label>Company</Label><Input required /></div><div><Label>Contact</Label><Input required /></div></div>
            <div className="grid grid-cols-2 gap-3"><div><Label>Email</Label><Input type="email" required /></div><div><Label>Phone</Label><Input required /></div></div>
            <div><Label>City</Label><Input /></div>
            <div><Label>Partnership type</Label><Input placeholder="Dealer / Fabricator / Architect / Builder" /></div>
            <div><Label>Brief</Label><Textarea rows={3} /></div>
            <Button className="w-full" size="lg">Apply</Button>
          </form>
        </div>
      </div>
    </div>
  );
}