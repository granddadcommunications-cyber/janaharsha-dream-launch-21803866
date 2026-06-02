import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/plots-in-ibrahimpatnam")({
  head: () => ({
    meta: [
      { title: "Plots in Ibrahimpatnam — Janaharsha Dream City Hyderabad" },
      { name: "description", content: "Buy premium plots in Ibrahimpatnam, Hyderabad. Multiple phases, wide roads, ORR connectivity. Call 9010341194 for pricing." },
      { property: "og:title", content: "Plots in Ibrahimpatnam — Janaharsha Plots" },
      { property: "og:description", content: "Strategic plots in Ibrahimpatnam by Janaharsha Dream City." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/plots-in-ibrahimpatnam" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/plots-in-ibrahimpatnam" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Plots in Ibrahimpatnam"
      title="Premium Plots in Ibrahimpatnam — Built for Long-Term Wealth"
      subtitle="Janaharsha Dream City brings 13+ master-planned phases across Hyderabad's most strategic eastern corridor."
      intro="Ibrahimpatnam has emerged as the fastest growing real estate corridor in Hyderabad, driven by Outer Ring Road connectivity, Pharma City employment, and rapid industrial expansion towards Adibatla and Tukkuguda."
      body={
        <>
          <p>Owning a plot in Ibrahimpatnam means owning a piece of Hyderabad's future. Land prices in this corridor have witnessed sustained appreciation over the past 5 years, and infrastructure announcements continue to push valuations higher.</p>
          <p>Janaharsha Plots offers transparent documentation, wide internal roads, residential zoning and a brand-led ownership experience — everything you need to invest with confidence.</p>
        </>
      }
      highlights={[
        { t: "30–40 km from Hyderabad", d: "Excellent connectivity via ORR, NH-65 and arterial roads." },
        { t: "Multiple plot sizes", d: "From compact 150 sq yd to premium 300+ sq yd plots." },
        { t: "Wide internal roads", d: "30 ft to 40 ft black-topped roads across phases." },
        { t: "Clear documentation", d: "Full title, layout approvals shared transparently." },
      ]}
    />
  ),
});
