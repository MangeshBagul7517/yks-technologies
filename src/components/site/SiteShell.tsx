import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";
import { EnquiryProvider } from "./EnquiryDialog";
import { Toaster } from "@/components/ui/sonner";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <EnquiryProvider>
      <Nav />
      <main className="pt-24">{children}</main>
      <Footer />
      <StickyCTA />
      <Toaster theme="dark" position="bottom-left" />
    </EnquiryProvider>
  );
}