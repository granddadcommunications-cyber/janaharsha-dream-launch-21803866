import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Janaharsha Plots in Ibrahimpatnam | Buy & Resell — RRP Realty" },
      { name: "description", content: "Buy or resell plots in the Janaharsha venture, Ibrahimpatnam, Hyderabad. RRP Realty — independent plot dealer, 4,00,000+ sq yards sold since 2016. 13+ phases. Call 9010341194." },
      { name: "keywords", content: "Janaharsha, Janaharsha plots, Janaharsha venture, Janaharsha Ibrahimpatnam, Janaharsha Dream City, plots in Ibrahimpatnam, Ibrahimpatnam plots, open plots Ibrahimpatnam, residential plots Hyderabad, plots near ORR Hyderabad, plots near Pharma City, plots near Adibatla, plots near TCS Adibatla, sell plot Ibrahimpatnam, resale plots Hyderabad, RRP Realty" },
      { name: "author", content: "RRP Realty" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Ibrahimpatnam, Hyderabad" },
      { name: "geo.position", content: "17.2476;78.6510" },
      { name: "ICBM", content: "17.2476, 78.6510" },
      { property: "og:site_name", content: "Janaharsha Plots — RRP Realty" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:title", content: "Janaharsha Plots in Ibrahimpatnam — Buy & Resell | RRP Realty" },
      { property: "og:description", content: "Independent plot dealer for the Janaharsha venture in Ibrahimpatnam. 4,00,000+ sq yards sold since 2016 across 13+ phases. Call 9010341194." },
      { property: "og:url", content: "https://janaharsha-dream-launch.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Janaharsha Plots in Ibrahimpatnam — Buy & Resell | RRP Realty" },
      { name: "twitter:description", content: "Independent plot dealer for the Janaharsha venture in Ibrahimpatnam. 4,00,000+ sq yards sold since 2016." },
      { name: "theme-color", content: "#0F172A" },
      { name: "google-site-verification", content: "4VTU7dTCcAk02PAyeZ8gmVz_Em6JXQPXYDESkLm7_TU" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c1f612e8-39c0-4ac8-8c24-6294b13802c2" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c1f612e8-39c0-4ac8-8c24-6294b13802c2" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "@id": "https://janaharsha-dream-launch.lovable.app/#rrprealty",
          name: "RRP Realty — Janaharsha Plots",
          alternateName: ["Janaharsha Plots", "Janaharsha Ibrahimpatnam", "RRP Realty Ibrahimpatnam"],
          url: "https://janaharsha-dream-launch.lovable.app/",
          telephone: "+91-9010341194",
          priceRange: "₹₹",
          image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c1f612e8-39c0-4ac8-8c24-6294b13802c2",
          description: "Independent real estate firm dealing in plots across the Janaharsha venture, Ibrahimpatnam, Hyderabad. 4,00,000+ sq yards sold since 2016.",
          foundingDate: "2016",
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "Place", name: "Ibrahimpatnam" },
            { "@type": "Place", name: "Mangalpally" },
            { "@type": "Place", name: "Yacharam" },
            { "@type": "Place", name: "Kandukur" },
            { "@type": "Place", name: "Tukkuguda" },
            { "@type": "Place", name: "Maheshwaram" },
            { "@type": "Place", name: "Adibatla" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ibrahimpatnam",
            addressRegion: "Telangana",
            postalCode: "501506",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 17.2476, longitude: 78.6510 },
          sameAs: ["https://wa.me/919010341194"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Janaharsha Plots — RRP Realty",
          url: "https://janaharsha-dream-launch.lovable.app/",
          inLanguage: "en-IN",
          publisher: { "@id": "https://janaharsha-dream-launch.lovable.app/#rrprealty" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
