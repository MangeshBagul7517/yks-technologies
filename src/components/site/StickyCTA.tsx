import { MessageCircle, Phone } from "lucide-react";
import { useEnquiry } from "./EnquiryDialog";

export function StickyCTA() {
  const { open } = useEnquiry();
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href="https://wa.me/917775888747" target="_blank" rel="noreferrer" className="size-13 grid place-items-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-[var(--shadow-luxury)] hover:scale-105 transition-transform" aria-label="WhatsApp">
        <MessageCircle className="size-5" />
      </a>
      <button onClick={() => open()} className="px-5 h-13 rounded-full bg-azure text-primary-foreground font-medium text-sm shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform inline-flex items-center gap-2">
        <Phone className="size-4" /> Get a Quote
      </button>
    </div>
  );
}