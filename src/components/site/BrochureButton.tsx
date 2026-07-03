import { useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { brochures } from "@/data/brochures";

export function BrochureButton({ variant = "default", className = "" }: { variant?: "default" | "outline"; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant={variant} onClick={() => setOpen(true)} className={`rounded-full ${className}`}>
        <Download className="size-4" /> Download Brochure
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg border-border/60 bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl">Product Brochures</DialogTitle>
            <DialogDescription>Detailed catalogues and technical documentation.</DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-3">
            {brochures.map((b) => (
              <a
                key={b.title}
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-border/60 p-4 hover:bg-white/5 transition-colors"
              >
                <div>
                  <div className="font-display font-semibold">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.description}</div>
                </div>
                <ExternalLink className="size-5 text-azure shrink-0" />
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}