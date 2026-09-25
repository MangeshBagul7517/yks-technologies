import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { sendEnquiry } from "@/lib/emailjs";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact YKS Technologies — Premium uPVC Windows & Doors" },
      { name: "description", content: "Book a free consultation with an YKS Technologies specialist for your villa, apartment or architectural project. We respond within 24 hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "YKS Technologies",
        telephone: "+91 7775888747",
        email: "support@ykstechnologies.com",
      }),
    }],
  }),
  component: Contact,
});

function Contact() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      city: String(data.get("city") ?? ""),
      project_type: String(data.get("project_type") ?? ""),
      product: String(data.get("product") ?? ""),
      message: String(data.get("message") ?? ""),
      source: "Contact Page",
    };
    try {
      setSubmitting(true);
      await sendEnquiry(payload, "contact");
      toast.success("Enquiry received.");
      form.reset();
      navigate({ to: "/thank-you" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader eyebrow="Begin a Project" title="Speak with a specialist." lead="Site survey, system selection, performance simulation and bespoke quotation — at no cost." />
      <div className="mt-12 grid lg:grid-cols-5 gap-10">
        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border/60 p-6 lg:p-10 space-y-4 bg-card/40">
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Name</Label><Input name="name" required /></div><div><Label>Phone</Label><Input name="phone" type="tel" required /></div></div>
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Email</Label><Input name="email" type="email" /></div><div><Label>City</Label><Input name="city" /></div></div>
          <div className="grid sm:grid-cols-2 gap-4"><div><Label>Project type</Label><Input name="project_type" placeholder="Villa / Apartment / Commercial" /></div><div><Label>Product interest</Label><Input name="product" placeholder="Sliding doors, tilt & turn…" /></div></div>
          <div><Label>Message</Label><Textarea name="message" rows={5} /></div>
          <Button size="lg" className="w-full" disabled={submitting}>{submitting ? "Sending…" : "Send Enquiry"}</Button>
        </form>
        <aside className="lg:col-span-2 space-y-4">
          {[
            { Icon: Phone, t: "Call us", d: "+917775888747", href: "tel:+917775888747" },
            { Icon: MessageCircle, t: "WhatsApp", d: "Chat with a specialist", href: "https://wa.me/917775888747" },
            { Icon: Mail, t: "Email", d: "support@ykstechnologies.com", href: "mailto:support@ykstechnologies.com" },
            { Icon: MapPin, t: "Location", d: "YKS Technologies, Opp. Glenmark Pharmaceuticals Ltd, Shendra MIDC, Chh. Sambhaji Nagar, 431154", href: "https://maps.app.goo.gl/p35txsPAoG8JarSo8" },
          ].map(({ Icon, t, d, href }) => (
            <a key={t} href={href} className="block rounded-2xl border border-border/60 p-5 hover:bg-card/60 transition-colors">
              <div className="flex items-center gap-4"><div className="size-10 rounded-lg bg-azure/15 text-azure grid place-items-center"><Icon className="size-5" /></div><div><div className="font-display font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div></div>
            </a>
          ))}
          <div className="rounded-2xl border border-border/60 overflow-hidden aspect-video">
            <iframe title="Map" className="size-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2337845631087!2d75.5038103!3d19.8723478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba500403cc5eb%3A0x9dbdde25e908244c!2sYkstechnologies!5e0!3m2!1sen!2sin!4v1790354248861!5m2!1sen!2sin" />
          </div>
        </aside>
      </div>
    </div>
  );
}