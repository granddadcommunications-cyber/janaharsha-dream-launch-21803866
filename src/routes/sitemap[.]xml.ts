import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS } from "@/lib/blog-posts";

const BASE_URL = "";

interface SitemapEntry { path: string; changefreq?: string; priority?: string }

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/plots-in-ibrahimpatnam", changefreq: "weekly", priority: "0.9" },
          { path: "/open-plots-near-hyderabad", changefreq: "weekly", priority: "0.9" },
          { path: "/janaharsha-dream-city", changefreq: "weekly", priority: "0.9" },
          { path: "/investment-plots-hyderabad", changefreq: "weekly", priority: "0.9" },
          { path: "/hmda-plots-ibrahimpatnam", changefreq: "weekly", priority: "0.9" },
          { path: "/residential-plots-hyderabad", changefreq: "weekly", priority: "0.9" },
          { path: "/site-visit-booking", changefreq: "monthly", priority: "0.8" },
          { path: "/layout-downloads", changefreq: "monthly", priority: "0.8" },
          { path: "/about-rrp-realty", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...POSTS.map(p => ({ path: `/blog/${p.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];

        const urls = entries.map(e =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
