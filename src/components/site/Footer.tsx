import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-ink">
      <div className="absolute inset-x-0 -top-px h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="inline-block size-2.5 rounded-full bg-azure" />YKS Technologies
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">German-engineered uPVC window and door systems for residences, villas and architectural projects.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm">
              <Input placeholder="Your email" className="bg-white/5 border-white/10" />
              <Button>Subscribe</Button>
            </form>
          </div>
          {[
            { title: "Products", items: [["Sliding Windows","/products/sliding-windows"],["Tilt & Turn","/products/tilt-turn-windows"],["Lift & Slide","/products/lift-slide-doors"],["Folding Doors","/products/folding-doors"],["All Products","/products"]] },
            { title: "Company", items: [["About","/about"],["Projects","/projects"],["Partners","/dealers"],["Careers","/careers"]] },
            { title: "Resources", items: [["Insights","/blog"],["Gallery","/gallery"],["Why uPVC","/why-upvc"],["FAQs","/faq"],["Contact","/contact"]] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{col.title}</div>
              <ul className="space-y-3 text-sm">
                {col.items.map(([label, to]) => (
                  <li key={to}><Link to={to} className="text-foreground/80 hover:text-foreground">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground border-t border-border/60 pt-8">
          <div>© {new Date().getFullYear()} YKS Technologies Systems. All rights reserved.</div>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Warranty</a></div>
        </div>
      </div>
    </footer>
  );
}