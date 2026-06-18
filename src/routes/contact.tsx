import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aurelin — Premium uPVC Windows & Doors" },
      { name: "description", content: "Book a free consultation with an Aurelin specialist for your villa, apartment or architectural project. We respond within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Aurelin",
        telephone: "+91 99999 99999",
        email: "studio@aurelin.example",
      }),
    }],
  }),
  component: Contact,
});

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Begin a Project" title="Speak with a specialist." lead="Site survey, system selection, performance simulation and bespoke quotation — at no cost." />
      <div className="mt-12 grid lg:grid-cols-5 gap-10">
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Enquiry received."); navigate({ to: "/thank-you" }); }} className="lg:col-span-3 rounded-2xl border border-border/60 p-6 lg:p-10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Name</Label><Input required /></div><div><Label>Phone</Label><Input type="tel" required /></div></div>
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Email</Label><Input type="email" /></div><div><Label>City</Label><Input /></div></div>
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Project type</Label><Input placeholder="Villa / Apartment / Commercial" /></div><div><Label>Product interest</Label><Input placeholder="Sliding doors, tilt & turn…" /></div></div>
          <div><Label>Message</Label><Textarea rows={5} /></div>
          <Button size="lg" className="w-full">Send Enquiry</Button>
        </form>
        <aside className="lg:col-span-2 space-y-4">
          {[
            { Icon: Phone, t: "Call us", d: "+91 99999 99999", href: "tel:+919999999999" },
            { Icon: MessageCircle, t: "WhatsApp", d: "Chat with a specialist", href: "https://wa.me/919999999999" },
            { Icon: Mail, t: "Email", d: "studio@aurelin.example", href: "mailto:studio@aurelin.example" },
            { Icon: MapPin, t: "Studio", d: "Aurelin Atelier, Lower Parel, Mumbai", href: "#" },
          ].map(({ Icon, t, d, href }) => (
            <a key={t} href={href} className="block rounded-2xl border border-border/60 p-5 hover:bg-card/60 transition-colors">
              <div className="flex items-center gap-4"><div className="size-10 rounded-lg bg-azure/15 text-azure grid place-items-center"><Icon className="size-5" /></div><div><div className="font-display font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div></div>
            </a>
          ))}
          <div className="rounded-2xl border border-border/60 overflow-hidden aspect-video">
            <iframe title="Map" className="size-full" src="https://maps.google.com/maps?q=Lower+Parel+Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed" />
          </div>
        </aside>
      </div>
    </div>
  );
}