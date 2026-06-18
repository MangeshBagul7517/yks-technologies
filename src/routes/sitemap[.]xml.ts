import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { products } from "@/data/products";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/","/about","/products","/solutions","/gallery","/projects","/why-upvc","/dealers","/blog","/faq","/contact","/careers"];
        const urls = [
          ...staticPaths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`),
          ...products.map((p) => `  <url><loc>${BASE_URL}/products/${p.slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`),
        ].join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});