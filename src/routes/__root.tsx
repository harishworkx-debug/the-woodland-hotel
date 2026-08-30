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
      { title: "The Woodland Kandaghat — Luxury Hotel & Resort in Kandaghat, Himachal Pradesh" },
      { name: "description", content: "Best luxury resort and hotel in Kandaghat, Himachal Pradesh on NH-5. Valley-view rooms, family accommodation, fine Indian cuisine. Book near Shimla now." },
      { name: "author", content: "The Woodland Kandaghat" },
      { name: "keywords", content: "hotel in Kandaghat, resort in Kandaghat, luxury hotel Kandaghat, best resort Kandaghat, family hotel Kandaghat, hotel near Shimla, resort near Shimla, mountain view hotel, Himachal resort, Kandaghat accommodation, luxury stay" },
      { property: "og:site_name", content: "The Woodland Kandaghat — Luxury Hotel" },
      { property: "og:title", content: "The Woodland Kandaghat — Luxury Resort in Kandaghat" },
      { property: "og:description", content: "Luxury mountain hotel with valley views, family rooms & fine dining. Ideal for couples, families & retreats. Book near Shimla on NH-5." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
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
          "@type": "Resort",
          "@id": "https://thewoodlandkandaghat.com",
          name: "The Woodland Kandaghat",
          alternateName: "Woodland Kandaghat Hotel",
          description: "Luxury resort and boutique hotel in Kandaghat, Himachal Pradesh on NH-5. Features valley-view rooms, family accommodation, fine Indian restaurant, spa &amp; mountain hospitality. Ideal for families, couples &amp; retreats near Shimla.",
          image: "https://thewoodlandkandaghat.com/og-image.jpg",
          url: "https://thewoodlandkandaghat.com",
          telephone: "+91-94180-21100",
          email: "stay@woodlandkandaghat.com",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Village Silhari, NH-5 Kalka Shimla Road",
            addressLocality: "Kandaghat",
            addressRegion: "Himachal Pradesh",
            postalCode: "173215",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "30.9784",
            longitude: "77.1113",
          },
          sameAs: [
            "https://www.google.com/maps/place/The+Woodland+Kandaghat",
          ],
          amenityFeature: [
            "Free WiFi", "Parking", "Restaurant", "Family Rooms", "Room Service",
            "Scenic Mountain Views", "Housekeeping", "Hot Water", "Power Backup",
            "Garden Area", "Spa Services", "Terrace Dining", "Adventure Activities",
          ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n })),
          award: "Best Family Hotel Kandaghat",
          foundingDate: "2012",
          numberOfRooms: 12,
          petsAllowed: true,
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
