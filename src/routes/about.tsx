import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, SectionHeader } from "@/components/site/Section";
import villa from "@/assets/villa-casement.jpg";
import profile from "@/assets/profile-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aurelin — German Engineering, Crafted in India" },
      { name: "description", content: "Aurelin manufactures premium uPVC window and door systems with German engineering, European hardware and concierge service for architectural projects." },
      { property: "og:title", content: "About Aurelin" },
      { property: "og:description", content: "German engineering. Crafted for modern living." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative">
        <img src={villa} alt="Luxury villa façade" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-32 text-center">
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-semibold text-balance">A quiet obsession with how a window opens.</h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto text-balance">Aurelin was founded by engineers and architects who refused to accept that premium fenestration had to be imported, expensive or compromised.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader eyebrow="The Aurelin Standard" title="Engineering before aesthetics. Both, without compromise." lead="Every Aurelin profile is extruded on German lines, reinforced with galvanised steel, and sealed with co-extruded EPDM — the same standards applied in Berlin and Mumbai." />
        </div>
        <img src={profile} alt="Profile detail" loading="lazy" className="rounded-2xl border border-border/60" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { k: "20+", v: "Years of fenestration engineering" },
            { k: "1,200+", v: "Residential & architectural projects" },
            { k: "12", v: "Cities served across India & GCC" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-border/60 p-8">
              <div className="text-5xl font-display font-semibold">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeader eyebrow="Timeline" title="Two decades of quiet progress." />
        <ol className="mt-12 relative border-l border-border/60 ml-3">
          {[
            ["2003", "First extrusion line commissioned for residential profiles."],
            ["2009", "Partnership with European hardware manufacturers established."],
            ["2014", "Acoustic systems division launched for metro residences."],
            ["2019", "Lift & slide and folding systems for luxury villas."],
            ["2023", "82 mm passive-house grade profile released."],
            ["2026", "Concierge installation network expands to GCC."],
          ].map(([y, t]) => (
            <li key={y} className="ml-6 mb-10">
              <div className="absolute -left-[7px] size-3.5 rounded-full bg-azure" />
              <div className="text-azure font-display font-semibold">{y}</div>
              <div className="mt-1 text-lg">{t}</div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}