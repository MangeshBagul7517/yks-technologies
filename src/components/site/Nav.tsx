import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "./EnquiryDialog";

const links = [
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/projects", label: "Projects" },
  { to: "/why-upvc", label: "Why uPVC" },
  { to: "/dealers", label: "Partners" },
  { to: "/blog", label: "Insights" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openEnquiry } = useEnquiry();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-panel shadow-[var(--shadow-luxury)]" : ""}`}>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-tight">
            <span className="inline-block size-2.5 rounded-full bg-azure shadow-[var(--shadow-glow)]" />
            <span>YKS Technologies</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Button onClick={() => openEnquiry()} size="sm" className="rounded-full px-5">Get a Quote</Button>
          </div>
          <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass-panel rounded-2xl p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-2 py-2 rounded-lg hover:bg-white/5">{l.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="px-2 py-2">Contact</Link>
              <Button onClick={() => { setOpen(false); openEnquiry(); }} className="mt-2 w-full">Get a Quote</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}