import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Award, Leaf, Shield, Sparkles, Volume2, Wind, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader, Eyebrow } from "@/components/site/Section";
import { useEnquiry } from "@/components/site/EnquiryDialog";
import { products } from "@/data/products";
import heroVilla from "@/assets/hero-villa.jpg";
import profile from "@/assets/profile-detail.jpg";
import villa from "@/assets/villa-casement.jpg";
import tilt from "@/assets/interior-tilt-turn.jpg";
import liftSlide from "@/assets/lift-slide.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YKS Technologies — German-Engineered uPVC Windows & Doors" },
      { name: "description", content: "Premium uPVC windows and doors crafted with German precision. Energy efficient, sound insulating, weather resistant systems for villas, apartments and architectural projects." },
      { property: "og:title", content: "YKS Technologies — German-Engineered uPVC Windows & Doors" },
      { property: "og:description", content: "Premium uPVC windows and doors crafted with German precision for modern living." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "YKS Technologies",
        description: "German-engineered uPVC windows and doors for premium residential and architectural projects.",
        url: "/",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  const { open } = useEnquiry();
  const featured = products.slice(0, 6);
  return (
    <div className="-mt-24">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src={heroVilla} alt="Luxury villa with full-height uPVC sliding doors at dusk" className="absolute inset-0 size-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 sm:pt-44 sm:pb-28 lg:pt-56 lg:pb-40">
          <div className="max-w-3xl animate-fade-in">
            <Eyebrow>German Engineering · Crafted in India</Eyebrow>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold leading-[1.02] text-balance">
              German Engineering.<br />
              <span className="bg-gradient-to-r from-white via-platinum to-white/60 bg-clip-text text-transparent">Crafted for Modern Living.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg md:text-xl text-white/80 text-balance">
              Whisper-quiet sliding systems. Tilt & turn precision. Façade-scale openings. Every YKS Technologies profile is engineered to perform for decades — and disappear into your architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6 sm:px-7 h-12 sm:h-13 text-sm sm:text-base shadow-[var(--shadow-glow)]">
                <Link to="/products">Explore Products <ArrowRight className="ml-1 size-4" /></Link>
              </Button>
              <Button onClick={() => open()} variant="outline" size="lg" className="rounded-full px-6 sm:px-7 h-12 sm:h-13 text-sm sm:text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">
                Get Free Consultation
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 max-w-3xl lg:absolute lg:mt-0 lg:left-auto lg:right-10 lg:bottom-10 lg:grid-cols-4">
            {[
              { k: "0.7", u: "W/m²K U-Value" },
              { k: "48 dB", u: "Acoustic Reduction" },
              { k: "C5", u: "Wind Load Class" },
              { k: "25 yr", u: "Profile Warranty" },
            ].map((s) => (
              <div key={s.u} className="glass-panel rounded-xl px-4 py-3">
                <div className="text-xl sm:text-2xl font-display font-semibold">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60">{s.u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-6">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Specified by leading architects across</div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm font-display font-semibold text-foreground/70">
            {["Mumbai","Bengaluru","Delhi NCR","Goa","Hyderabad","Pune","Dubai","Colombo"].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <SectionHeader eyebrow="Engineering" title={<>Performance is invisible.<br /><span className="text-muted-foreground">Until you live with it.</span></>} lead="Multi-chamber profiles, steel reinforcement and dual EPDM gaskets — assembled to a single tolerance: precision." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { Icon: Zap, t: "Energy Efficient", d: "Triple-glazed, argon-filled units deliver passive-house grade thermal performance." },
            { Icon: Volume2, t: "Acoustic Calm", d: "Laminated asymmetric glazing reduces ambient noise by up to 48 dB." },
            { Icon: Wind, t: "Weather Sealed", d: "Class C5 wind load and E1200 water tightness for coastal and storm-prone sites." },
            { Icon: Shield, t: "Multi-Point Security", d: "European hardware with anti-lift catches and laminated security glass." },
            { Icon: Leaf, t: "Lead-Free Profiles", d: "Calcium-zinc stabilised, REACH-compliant compounds — safe for families." },
            { Icon: Sparkles, t: "Designer Finishes", d: "40+ veneer, foil and lacquer finishes — colour-matched to your architecture." },
            { Icon: Award, t: "25-Year Warranty", d: "Profile warranty backed by a single-source manufacturer and concierge service." },
            { Icon: ArrowUpRight, t: "Low Maintenance", d: "UV stable, non-corroding, non-warping — engineered for a lifetime of zero fuss." },
          ].map(({ Icon, t, d }, i) => (
            <div key={t} className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 hover:bg-card/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)]" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="size-10 rounded-lg bg-azure/15 text-azure grid place-items-center"><Icon className="size-5" /></div>
              <div className="mt-5 font-display font-semibold text-lg">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFILE FEATURE */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>The YKS Technologies Profile</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-balance">82 mm. Seven chambers. <span className="text-muted-foreground">One obsession.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">A cross-section the German engineers will recognise. Co-extruded EPDM gaskets, warm-edge spacers and a galvanised steel core — wrapped in a class-A surface finish that resists UV, weather and time.</p>
            <div className="mt-8 grid grid-cols-2 gap-5 max-w-md">
              {[["7","Insulating chambers"],["44 mm","Maximum glazing"],["1.4 mm","Steel reinforcement"],["A++","Energy class"]].map(([k,v]) => (
                <div key={v}><div className="text-3xl font-display font-semibold">{k}</div><div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div></div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-tr from-azure/20 to-transparent rounded-3xl blur-3xl" />
            <img src={profile} alt="Multi-chamber uPVC profile cross-section" loading="lazy" width={1600} height={1200} className="relative rounded-2xl border border-border/60 shadow-[var(--shadow-luxury)]" />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Collection" title={<>A system for every opening.</>} lead="Windows, doors and façade-scale openings — engineered as one cohesive language." />
          <Button asChild variant="ghost" className="text-foreground hover:text-foreground"><Link to="/products">View all <ArrowRight className="ml-1 size-4" /></Link></Button>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/30">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={640} className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] uppercase tracking-[0.2em] text-azure">{p.category}</div>
                <div className="mt-1 text-2xl font-display font-semibold">{p.name}</div>
                <div className="mt-1 text-sm text-white/70">{p.tagline}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-white group-hover:gap-2 transition-all">Discover <ArrowRight className="size-4" /></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SOLUTIONS BAND */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeader eyebrow="Solutions" title="Engineered for every envelope." lead="From private villas to towers and hospitality — YKS Technologies specifies, fabricates and installs as one accountable partner." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Villas", img: villa },
              { t: "Apartments", img: tilt },
              { t: "Hospitality", img: liftSlide },
              { t: "Commercial", img: heroVilla },
            ].map((s) => (
              <Link key={s.t} to="/solutions" className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={s.img} alt={s.t} loading="lazy" width={600} height={800} className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-2xl font-display font-semibold">{s.t}</div>
                  <div className="mt-1 text-sm text-white/70 inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="size-4" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <Eyebrow>Specified by</Eyebrow>
        <blockquote className="mt-8 text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight text-balance">
          "The lift-and-slide system disappears into the wall. Three metres of glass, moved with one finger. YKS Technologies delivered exactly what the drawings promised — and then some."
        </blockquote>
        <div className="mt-8 text-sm text-muted-foreground">Ar. Meera Iyengar · Principal, Studio Verde</div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 p-10 lg:p-16">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute -top-20 -right-20 size-96 rounded-full bg-azure/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <Eyebrow>Begin Your Project</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-balance">Talk to a senior specialist.</h2>
            <p className="mt-5 text-lg text-muted-foreground">Site survey, system selection, performance simulation and bespoke quotation — at no cost. We respond within 24 hours.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => open()} size="lg" className="rounded-full px-7 h-13">Book a Consultation</Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 h-13 bg-transparent"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
