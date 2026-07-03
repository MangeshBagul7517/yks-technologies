import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

// Edit these URLs to update the social links shown in the footer.
const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com/" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com/" },
  { Icon: Twitter, label: "X / Twitter", href: "https://x.com/" },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-ink">
      <div className="absolute inset-x-0 -top-px h-px hairline" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" aria-label="YKS Technologies" className="inline-flex">
              <img src={logo} alt="YKS Technologies" className="h-11 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">Gealan Authorised Fabricator - German-engineered uPVC window and door systems for residences, villas and architectural projects.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="size-10 grid place-items-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Products", items: [["Sliding Windows","/products/sliding-windows"],["Tilt & Turn","/products/tilt-turn-windows"],["Lift & Slide","/products/lift-slide-doors"],["Folding Doors","/products/folding-doors"],["All Products","/products"]] },
            { title: "Company", items: [["About","/about"],["Projects","/projects"],["Partners","/dealers"]] },
            { title: "Resources", items: [["Gallery","/gallery"],["Why uPVC","/why-upvc"],["FAQs","/faq"],["Contact","/contact"]] },
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