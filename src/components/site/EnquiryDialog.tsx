import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

type Ctx = { open: (product?: string) => void };
const EnquiryCtx = createContext<Ctx>({ open: () => {} });
export const useEnquiry = () => useContext(EnquiryCtx);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>();
  const navigate = useNavigate();
  const api = useMemo<Ctx>(() => ({ open: (p) => { setProduct(p); setOpen(true); } }), []);
  const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("phone")) { toast.error("Name and phone are required"); return; }
    setOpen(false);
    toast.success("Enquiry received. Our specialist will call you within 24 hours.");
    navigate({ to: "/thank-you" });
  }, [navigate]);
  return (
    <EnquiryCtx.Provider value={api}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg border-border/60 bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl">Request a consultation</DialogTitle>
            <DialogDescription>A product specialist will respond within 24 hours.</DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><Label htmlFor="name">Name</Label><Input id="name" name="name" required /></div>
              <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" required /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" /></div>
              <div><Label htmlFor="city">City</Label><Input id="city" name="city" /></div>
            </div>
            <div><Label htmlFor="product">Product of interest</Label><Input id="product" name="product" defaultValue={product ?? ""} /></div>
            <div><Label htmlFor="message">Project details</Label><Textarea id="message" name="message" rows={3} /></div>
            <Button type="submit" className="w-full" size="lg">Submit Enquiry</Button>
          </form>
        </DialogContent>
      </Dialog>
    </EnquiryCtx.Provider>
  );
}