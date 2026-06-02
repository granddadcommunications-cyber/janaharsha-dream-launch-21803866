import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/investment-plots-hyderabad")({
  head: () => ({
    meta: [
      { title: "Investment Plots in Hyderabad — High Appreciation Land" },
      { name: "description", content: "Investment plots in Hyderabad's high-growth Ibrahimpatnam corridor. Janaharsha Dream City. Call 9010341194." },
      { property: "og:title", content: "Investment Plots Hyderabad — Janaharsha" },
      { property: "og:description", content: "High-appreciation investment plots in Hyderabad." },
      { property: "og:url", content: "/investment-plots-hyderabad" },
    ],
    links: [{ rel: "canonical", href: "/investment-plots-hyderabad" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Investment Plots"
      title="Investment Plots in Hyderabad — Build Generational Wealth"
      subtitle="Land remains the most powerful long-term wealth creator. Janaharsha Plots gives you access to Hyderabad's most promising appreciation corridor."
      intro="Plotted land in Hyderabad's eastern corridor has historically outperformed most asset classes, with appreciation rates fueled by IT expansion, Pharma City, ORR and government infrastructure."
      body={<p>For investors seeking durable returns, low maintenance and full ownership, plots in Janaharsha Dream City offer the ideal vehicle — backed by transparent documentation and an established brand.</p>}
      highlights={[
        { t: "Strong appreciation history", d: "Ibrahimpatnam land has compounded over years." },
        { t: "Low holding cost", d: "No EMIs, no maintenance, no tenant hassles." },
        { t: "Full ownership", d: "100% asset under your name, freely transferable." },
        { t: "Loan options", d: "Plot loans available through partner banks." },
      ]}
    />
  ),
});
