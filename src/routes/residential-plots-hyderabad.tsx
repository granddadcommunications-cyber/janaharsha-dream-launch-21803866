import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/residential-plots-hyderabad")({
  head: () => ({
    meta: [
      { title: "Residential Plots in Hyderabad — Build Your Dream Home" },
      { name: "description", content: "Residential plots in Hyderabad's Ibrahimpatnam corridor. Build your dream home in Janaharsha Dream City. Call 9010341194." },
      { property: "og:title", content: "Residential Plots Hyderabad — Janaharsha" },
      { property: "og:description", content: "Residential-zoned plots ideal for building homes." },
      { property: "og:url", content: "/residential-plots-hyderabad" },
    ],
    links: [{ rel: "canonical", href: "/residential-plots-hyderabad" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Residential Plots"
      title="Residential Plots in Hyderabad — Your Dream Home Starts Here"
      subtitle="Janaharsha layouts are designed for families who want to build, not just invest. Quiet roads, residential neighbourhoods, future utilities."
      intro="A home is more than a building — it's the land it sits on. Choosing the right plot determines decades of family memories, lifestyle and wealth."
      body={<p>Our residential-focused phases offer the right plot sizes, road widths and community planning to support your dream home — today or whenever you're ready.</p>}
      highlights={[
        { t: "Family-friendly zones", d: "Quiet residential neighbourhoods, away from industrial noise." },
        { t: "Build at your pace", d: "Hold the plot, build when ready." },
        { t: "Utility access", d: "Strategically planned around future utility lines." },
        { t: "Community planning", d: "Wide roads, open spaces and green pockets." },
      ]}
    />
  ),
});
