import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { POSTS } from "@/lib/blog-posts";
import { ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Janaharsha Blog — Hyderabad Real Estate Insights" },
      { name: "description", content: "Insights on Hyderabad real estate, Ibrahimpatnam growth, and smart plot investing — from the Janaharsha team." },
      { property: "og:title", content: "Janaharsha Blog — Real Estate Insights" },
      { property: "og:description", content: "Expert insights on Hyderabad plotted real estate." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageLayout>
      <PageHero eyebrow="Blog" title="Insights from the Janaharsha Team" subtitle="Honest analysis of Hyderabad real estate, plotted investment strategy and emerging corridors." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map(p => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group bg-white border border-border rounded-2xl p-6 hover:shadow-[var(--shadow-luxe)] transition-shadow">
              <span className="eyebrow">{p.category}</span>
              <h2 className="font-display font-semibold text-xl text-navy mt-3 group-hover:text-gold transition-colors leading-snug">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{p.description}</p>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readTime} • {p.date}</span>
                <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
