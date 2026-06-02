import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { Section } from "@/components/site/Section";
import { LeadForm } from "@/components/site/LeadForm";
import { POSTS } from "@/lib/blog-posts";
import { ArrowLeft, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — Janaharsha Blog` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/blog/${loaderData.slug}` },
    ] : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        headline: loaderData.title, description: loaderData.description,
        author: { "@type": "Organization", name: "Janaharsha Plots" },
        publisher: { "@type": "Organization", name: "RRP Realty" },
      }),
    }] : [],
  }),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();
  return (
    <PageLayout>
      <article className="bg-navy text-white py-16 md:py-20">
        <div className="container-luxe max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold text-sm hover:underline"><ArrowLeft className="h-4 w-4" /> All posts</Link>
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-white/70">
            <Clock className="h-4 w-4" /> {post.readTime} • {post.date}
          </div>
        </div>
      </article>
      <Section>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-navy font-medium leading-relaxed">{post.description}</p>
            {post.content.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mt-4">{para}</p>
            ))}
            <div className="mt-10 p-6 bg-secondary rounded-2xl border border-border not-prose">
              <p className="font-display font-semibold text-navy text-xl">Want to explore Janaharsha Dream City?</p>
              <p className="text-muted-foreground text-sm mt-2">Book a site visit and see the layouts in person — no obligation.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/site-visit-booking" className="btn-gold btn-gold-hover">Book Site Visit</Link>
                <Link to="/layout-downloads" className="rounded-full border border-navy text-navy font-semibold px-5 py-3 hover:bg-navy hover:text-white transition-colors">Download Layouts</Link>
              </div>
            </div>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm title="Get Layout & Pricing" subtitle="Quick reply via call/WhatsApp." />
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
