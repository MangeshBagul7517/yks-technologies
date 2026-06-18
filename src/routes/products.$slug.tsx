import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productBySlug, products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/Section";
import { useEnquiry } from "@/components/site/EnquiryDialog";
import { ArrowRight, Check, Download } from "lucide-react";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — Aurelin" }] };
    return {
      meta: [
        { title: `${p.name} — Premium uPVC ${p.category} | Aurelin` },
        { name: "description", content: `${p.name}: ${p.tagline} ${p.overview}` },
        { property: "og:title", content: `${p.name} — Aurelin` },
        { property: "og:description", content: p.tagline },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.overview,
          category: p.category,
          brand: { "@type": "Brand", name: "Aurelin" },
        }),
      }],
    };
  },
  component: ProductPage,
  notFoundComponent: () => <div className="mx-auto max-w-3xl px-6 py-32 text-center"><h1 className="text-3xl font-display font-semibold">Product not found</h1><Link to="/products" className="mt-4 inline-block text-azure">Back to collection</Link></div>,
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-6 py-32 text-center"><h1 className="text-2xl font-semibold">Something went wrong</h1><p className="mt-3 text-muted-foreground">{error.message}</p></div>,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const { open } = useEnquiry();
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={p.image} alt={p.name} className="size-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 lg:pt-32 lg:pb-40">
          <Eyebrow>{p.category}</Eyebrow>
          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-display font-semibold max-w-3xl text-balance">{p.name}</h1>
          <p className="mt-5 text-xl md:text-2xl text-white/80 max-w-2xl text-balance">{p.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => open(p.name)} size="lg" className="rounded-full px-7 h-13">Request Quote</Button>
            <Button onClick={() => open(p.name)} size="lg" variant="outline" className="rounded-full px-7 h-13 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white">Schedule Consultation</Button>
            <Button variant="ghost" size="lg" className="rounded-full px-5 h-13 text-white"><Download className="mr-2 size-4" />Brochure</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-4 text-2xl font-display leading-snug text-balance">{p.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Features</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-border/60 p-4"><Check className="size-5 text-azure shrink-0" /><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Benefits</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {p.benefits.map((f) => (
                <li key={f} className="flex gap-3 rounded-xl border border-border/60 p-4"><Check className="size-5 text-azure shrink-0" /><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Technical Specifications</h2>
            <dl className="mt-5 rounded-2xl border border-border/60 divide-y divide-border/60">
              {p.specs.map((s) => (
                <div key={s.label} className="flex justify-between px-5 py-4 text-sm">
                  <dt className="text-muted-foreground">{s.label}</dt><dd className="font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Performance</h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {p.performance.map((m) => (
                <div key={m.metric} className="rounded-xl border border-border/60 p-5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{m.metric}</div>
                  <div className="mt-2 text-2xl font-display font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Color & Finish Options</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.colors.map((c) => <span key={c} className="px-3 py-1.5 rounded-full border border-border/60 text-sm text-muted-foreground">{c}</span>)}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold">Applications</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.applications.map((c) => <span key={c} className="px-3 py-1.5 rounded-full bg-azure/15 text-azure text-sm">{c}</span>)}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 h-fit space-y-4">
          <div className="rounded-2xl border border-border/60 p-6 glass-panel">
            <div className="text-sm text-muted-foreground">Pricing on request</div>
            <div className="mt-1 text-2xl font-display font-semibold">{p.name}</div>
            <p className="mt-3 text-sm text-muted-foreground">Bespoke quotation including site survey, system selection and concierge installation.</p>
            <div className="mt-5 space-y-2">
              <Button onClick={() => open(p.name)} className="w-full" size="lg">Enquire Now</Button>
              <Button onClick={() => open(p.name)} variant="outline" className="w-full" size="lg">Request Call Back</Button>
              <Button variant="ghost" className="w-full"><Download className="mr-2 size-4" /> Download Brochure</Button>
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-28">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-display font-semibold">Related Systems</h2>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">View all <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="group block rounded-2xl border border-border/60 overflow-hidden">
                <div className="aspect-[5/4] overflow-hidden"><img src={r.image} loading="lazy" alt={r.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" /></div>
                <div className="p-5"><div className="font-display font-semibold">{r.name}</div><div className="text-sm text-muted-foreground mt-1">{r.tagline}</div></div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}