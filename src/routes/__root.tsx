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
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--beige)] px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[color:var(--forest)]">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The trail you’re looking for has wandered off into the pines.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full gradient-gold text-[color:var(--forest)] px-6 py-3 text-sm font-semibold">
            Back to Home
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full gradient-gold text-[color:var(--forest)] px-5 py-2 text-sm font-semibold">Try again</button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2 text-sm font-medium">Go home</a>
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
      { title: "The Woodland Kandaghat — Luxury Hotel & Resort in Himachal Pradesh" },
      { name: "description", content: "Boutique mountain hotel in Kandaghat on NH-5 near Shimla & Chail. Scenic valley-view rooms, fresh Indian cuisine and warm Himalayan hospitality." },
      { name: "author", content: "The Woodland Kandaghat" },
      { name: "keywords", content: "Best Hotel in Kandaghat, Hotel Near Shimla, Luxury Stay in Kandaghat, Hotel on NH5 Kandaghat, Family Hotel Kandaghat, Hotel Near Chail, Hotel Near Sadhupul, Scenic View Hotel Himachal Pradesh, Woodland Kandaghat" },
      { property: "og:site_name", content: "The Woodland Kandaghat" },
      { property: "og:title", content: "The Woodland Kandaghat — Luxury Hotel in Himachal Pradesh" },
      { property: "og:description", content: "Experience peace, comfort & scenic Himalayan views at The Woodland Kandaghat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "The Woodland Kandaghat",
          description: "Boutique mountain hotel in Kandaghat on NH-5 with valley-view rooms, restaurant and warm Himalayan hospitality.",
          telephone: "+91-94180-21100",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Village Silhari, NH-5 Kalka Shimla Road",
            addressLocality: "Kandaghat",
            addressRegion: "Himachal Pradesh",
            postalCode: "173215",
            addressCountry: "IN",
          },
          amenityFeature: [
            "Free WiFi","Parking","Restaurant","Family Rooms","Room Service",
            "Scenic Views","Housekeeping","Hot Water","Power Backup","Garden Area",
          ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n })),
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
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
