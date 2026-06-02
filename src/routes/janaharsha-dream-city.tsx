import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/janaharsha-dream-city")({
  head: () => ({
    meta: [
      { title: "Janaharsha Dream City — Master-Planned Plotted Township Hyderabad" },
      { name: "description", content: "Janaharsha Dream City — one of Hyderabad's largest plotted developments in Ibrahimpatnam. 13+ phases. Call 9010341194." },
      { property: "og:title", content: "Janaharsha Dream City — Plotted Township" },
      { property: "og:description", content: "Master-planned plotted township across Ibrahimpatnam." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/janaharsha-dream-city" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/janaharsha-dream-city" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Dream City"
      title="Janaharsha Dream City — Hyderabad's Largest Plotted Vision"
      subtitle="A master-planned plotted township spread across multiple phases in Ibrahimpatnam, designed for the next generation of Hyderabad homeowners and investors."
      intro="Janaharsha Dream City isn't a single project — it's an integrated plotted ecosystem of 13+ phases, each strategically located along Hyderabad's eastern growth corridor."
      body={<p>From Phase A to Phase T, every layout is conceived with one philosophy: deliver enduring value through location, planning and trust. Wide internal roads, residential zoning, future-ready connectivity and curated micro-markets — all under one brand.</p>}
      highlights={[
        { t: "13+ Active Phases", d: "Spanning premium villages across Ibrahimpatnam." },
        { t: "Single trusted brand", d: "Consistent quality, documentation and service." },
        { t: "Future-ready planning", d: "Plots designed for tomorrow's Hyderabad." },
        { t: "Diversified locations", d: "Choose by budget, village or proximity." },
      ]}
    />
  ),
});
