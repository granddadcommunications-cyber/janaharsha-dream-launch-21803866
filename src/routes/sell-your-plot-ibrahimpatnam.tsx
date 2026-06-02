import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/sell-your-plot-ibrahimpatnam")({
  head: () => ({
    meta: [
      { title: "Sell or Resell Your Plot in Ibrahimpatnam — RRP Realty" },
      { name: "description", content: "List your Ibrahimpatnam plot for resale with RRP Realty. We connect you to active buyers, handle valuation and documentation. Call 9010341194." },
      { property: "og:title", content: "Sell Your Plot — RRP Realty Resale" },
      { property: "og:description", content: "RRP Realty lists and resells previously owned plots in the Ibrahimpatnam corridor. Fair valuation, end-to-end paperwork." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/sell-your-plot-ibrahimpatnam" },
    ],
    links: [{ rel: "canonical", href: "https://janaharsha-dream-launch.lovable.app/sell-your-plot-ibrahimpatnam" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Resale"
      title="Resell Your Plot in Ibrahimpatnam"
      subtitle="RRP Realty is an independent real estate firm. We help existing plot owners in and around Ibrahimpatnam — including Janaharsha venture phases — find serious buyers at fair, current market rates."
      intro="Whether you bought a plot years ago or hold land elsewhere in the Ibrahimpatnam corridor, we handle resale including valuation, buyer matching and paperwork end-to-end."
      body={
        <>
          <p>Selling a plot privately can take months and involve uncertain buyers. With RRP Realty's active resale channel, you get a single point of contact, transparent pricing based on current corridor rates, and full documentation support.</p>
          <p>Share your plot details — phase, village, extent and documents — and our team will revert with an indicative quote and a marketing plan within 24 hours.</p>
        </>
      }
      highlights={[
        { t: "Resale of existing plots", d: "Own a Janaharsha or Ibrahimpatnam plot? We'll list and resell it for you." },
        { t: "Active buyer network", d: "We connect your plot directly with buyers actively searching in this corridor." },
        { t: "Fair market valuation", d: "Pricing benchmarked against current corridor and phase rates." },
        { t: "Fast, clean settlement", d: "Document verification and registration handled by RRP Realty's legal desk." },
      ]}
    />
  ),
});
