import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Aurelin" },
      { name: "description", content: "Thank you for reaching out. An Aurelin specialist will be in touch within 24 hours." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/thank-you" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <div className="mx-auto size-16 rounded-full bg-azure/15 text-azure grid place-items-center"><CheckCircle2 className="size-8" /></div>
      <h1 className="mt-8 text-4xl md:text-5xl font-display font-semibold">Your enquiry has landed in our atelier.</h1>
      <p className="mt-5 text-lg text-muted-foreground">A senior Aurelin specialist will reach out within 24 hours to schedule your consultation.</p>
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <Button asChild><Link to="/products">Browse Products</Link></Button>
        <Button asChild variant="outline"><Link to="/projects">View Projects</Link></Button>
      </div>
    </div>
  );
}