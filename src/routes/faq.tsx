import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much do premium uPVC windows cost?", a: "YKS Technologies systems are quoted bespoke — based on size, glazing specification, hardware grade and finish. As a guide, expect to invest in a fenestration system as you would in flooring or kitchens — it is a defining surface of the home." },
  { q: "What is the lifespan of a uPVC window?", a: "YKS Technologies profiles carry a 25-year warranty and are engineered to perform for 40+ years with negligible maintenance, thanks to UV-stable surfaces and steel-reinforced cores." },
  { q: "How long does installation take?", a: "A typical apartment is installed in 2–4 days; villas in 1–2 weeks. Our concierge install teams protect surrounding finishes and clean up at the end of every day." },
  { q: "What warranty do you offer?", a: "25 years on profiles, 10 years on hardware and 1 year on installation workmanship — all backed by a single-source manufacturer." },
  { q: "How do I maintain uPVC windows?", a: "Wipe down with a soft cloth and mild detergent; occasionally lubricate hinges and tracks. No painting, sanding or sealing — ever." },
  { q: "Do they really insulate sound?", a: "Yes. With laminated asymmetric glazing and dual EPDM seals, our acoustic systems reduce noise by up to 48 dB — the difference between traffic and library silence." },
  { q: "How much energy can I save?", a: "Triple-glazed YKS Technologies units achieve U-values down to 0.7 W/m²K, reducing HVAC loads 25–40% versus standard aluminium or single-glazed windows." },
  { q: "Can profiles be customised?", a: "Yes — 40+ veneer, foil and lacquer finishes; arched, trapezoid and circular geometries; designer hardware in multiple metals." },
  { q: "Are YKS Technologies windows secure?", a: "Multi-point European hardware, anti-lift catches and laminated security glass options deliver intrusion resistance to EN 1627 grades." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs — uPVC Windows & Doors | YKS Technologies" },
      { name: "description", content: "Answers to the most common questions about uPVC windows, doors, pricing, warranty, installation, sound insulation and energy savings." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader eyebrow="FAQs" title="Everything, answered." />
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={String(i)} className="border-border/60">
            <AccordionTrigger className="text-left text-lg font-display">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}