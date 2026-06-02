import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/open-plots-near-hyderabad")({
  head: () => ({
    meta: [
      { title: "Open Plots Near Hyderabad — Janaharsha Dream City" },
      { name: "description", content: "Open plots near Hyderabad in Ibrahimpatnam. Multiple layouts, premium amenities, ready for investment. Call 9010341194." },
      { property: "og:title", content: "Open Plots Near Hyderabad — Janaharsha" },
      { property: "og:description", content: "Curated open plots across Janaharsha Dream City near Hyderabad." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/open-plots-near-hyderabad" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/open-plots-near-hyderabad" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Open Plots"
      title="Open Plots Near Hyderabad — Curated for Growth"
      subtitle="Discover ready-to-register open plots in Ibrahimpatnam with wide roads, clear titles and proximity to the city's biggest employment hubs."
      intro="Open plots near Hyderabad — specifically in the Ibrahimpatnam corridor — are seeing unprecedented investor demand thanks to ORR connectivity and government infrastructure spending."
      body={<p>Janaharsha Dream City offers a curated catalogue of open plots that match every budget and goal, from first-time buyers to seasoned investors building a land portfolio.</p>}
      highlights={[
        { t: "Ready-to-register", d: "Quick and transparent registration process." },
        { t: "Multiple budgets", d: "Plots starting from affordable to premium tiers." },
        { t: "Investor-friendly", d: "Strong resale demand and historical appreciation." },
        { t: "Site visits weekly", d: "Personalized site tours every weekend." },
      ]}
    />
  ),
});
