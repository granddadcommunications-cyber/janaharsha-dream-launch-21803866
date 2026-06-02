import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/sell-your-plot-ibrahimpatnam")({
  head: () => ({
    meta: [
      { title: "Sell Your Plot in Ibrahimpatnam — We Buy Resale Plots | Janaharsha" },
      { name: "description", content: "We don't just sell — we also buy back previously sold plots in Ibrahimpatnam, Hyderabad. Fair valuation, fast settlement. Call 9010341194." },
      { property: "og:title", content: "Sell Your Plot — Janaharsha Buys Resale Plots" },
      { property: "og:description", content: "Janaharsha Plots buys previously sold plots in Ibrahimpatnam. Transparent valuation, quick payout." },
      { property: "og:url", content: "/sell-your-plot-ibrahimpatnam" },
    ],
    links: [{ rel: "canonical", href: "/sell-your-plot-ibrahimpatnam" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="Resale & Buyback"
      title="We Buy Previously Sold Plots in Ibrahimpatnam"
      subtitle="Janaharsha Plots — operated by RRP Realty — is not just a seller. We also actively buy back resale plots from existing owners in and around Ibrahimpatnam, Hyderabad."
      intro="Whether you bought a plot from us years ago or hold land elsewhere in the Ibrahimpatnam corridor, our team offers fair, market-aligned valuations and quick, paperwork-clean settlements."
      body={
        <>
          <p>Selling a plot privately can take months and involve uncertain buyers. With our in-house buyback channel, you get a single point of contact, transparent pricing based on current corridor rates, and end-to-end documentation support.</p>
          <p>Share your plot details — phase, village, extent and documents — and our acquisitions team will revert with an indicative quote within 24 hours.</p>
        </>
      }
      highlights={[
        { t: "Buyback of past plots", d: "Sold a Janaharsha plot earlier? We'll evaluate it for repurchase." },
        { t: "Resale acquisitions", d: "We also acquire eligible third-party plots in the Ibrahimpatnam belt." },
        { t: "Fair market valuation", d: "Pricing benchmarked against current corridor and phase rates." },
        { t: "Fast, clean settlement", d: "Document verification and payout handled by RRP Realty's legal desk." },
      ]}
    />
  ),
});
