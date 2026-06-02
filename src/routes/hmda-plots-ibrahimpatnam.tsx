import { createFileRoute } from "@tanstack/react-router";
import { LandingTemplate } from "@/components/site/LandingTemplate";

export const Route = createFileRoute("/hmda-plots-ibrahimpatnam")({
  head: () => ({
    meta: [
      { title: "HMDA Plots in Ibrahimpatnam — Janaharsha Dream City" },
      { name: "description", content: "Buy HMDA-zone plots in Ibrahimpatnam, Hyderabad. Transparent documentation, premium layouts. Call 9010341194." },
      { property: "og:title", content: "HMDA Plots Ibrahimpatnam — Janaharsha" },
      { property: "og:description", content: "HMDA-zone plots in Ibrahimpatnam by Janaharsha." },
      { property: "og:url", content: "/hmda-plots-ibrahimpatnam" },
    ],
    links: [{ rel: "canonical", href: "/hmda-plots-ibrahimpatnam" }],
  }),
  component: () => (
    <LandingTemplate
      eyebrow="HMDA Plots"
      title="HMDA Zone Plots in Ibrahimpatnam"
      subtitle="Janaharsha layouts in the Hyderabad Metropolitan Development Authority influence area — built with planning rigor and full documentation transparency."
      intro="The HMDA jurisdiction covers Hyderabad's most strategically important growth zones, including the Ibrahimpatnam corridor where Janaharsha Dream City is located."
      body={<p>Our team shares complete documentation before purchase so you can verify every approval, conversion and registration detail. We recommend buyers always cross-verify approvals during site visits.</p>}
      highlights={[
        { t: "Documentation transparency", d: "All paperwork shared upfront for verification." },
        { t: "Strategic growth zones", d: "Layouts in HMDA influence areas of high demand." },
        { t: "Residential zoning", d: "Plots planned for residential development." },
        { t: "Future-ready", d: "Designed for long-term value preservation." },
      ]}
    />
  ),
});
