import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { Reveal } from "../components/site/Reveal";
import { breadcrumbSchema, pageHead } from "../lib/seo";
import views from "../assets/views.jpg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Kandaghat Travel Guide", path: "/kandaghat" },
];

export const Route = createFileRoute("/kandaghat")({
  head: () => ({
    ...pageHead({
      title: "Kandaghat, Himachal Pradesh | Stay & Travel Guide",
      description:
        "Plan a Kandaghat stay with practical information about weather, routes, local attractions, food and places to stay near Shimla and Chail.",
      path: "/kandaghat",
      image: views,
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(crumbs)) }],
  }),
  component: KandaghatPage,
});

function KandaghatPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[390px] overflow-hidden">
        <img
          src={views}
          alt="Scenic mountain landscape around Kandaghat"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/70" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Travel Guide</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">
            Kandaghat Travel Guide
          </h1>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Kandaghat Travel Guide" }]} />

      <section className="section-y pt-8">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <Reveal>
            <span className="eyebrow">A quieter Himalayan base</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">
              A practical place to pause between Solan and Shimla
            </h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
              Kandaghat sits in Solan district on the Kalka-Shimla route, surrounded by pine-covered
              slopes and open mountain views. It works well for travelers who want access to Shimla
              and Chail while returning to a calmer base at the end of the day.
            </p>
            <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
              The Woodland Kandaghat is in Silhari on NH 5, making it a convenient option for a
              family stay, a road-trip stop or a weekend in the Shimla hills.
            </p>
          </Reveal>
          <Reveal delay={120} className="glass-card rounded-3xl p-8">
            <h2 className="font-display text-3xl text-[color:var(--forest)]">Plan your visit</h2>
            <div className="mt-6 space-y-5 text-sm text-[color:var(--muted-foreground)]">
              <p>
                <strong className="text-[color:var(--forest)]">Weather:</strong> Expect cool
                evenings and changing mountain weather. Pack layers, particularly for winter and
                monsoon travel.
              </p>
              <p>
                <strong className="text-[color:var(--forest)]">Getting around:</strong> NH 5
                connects Kandaghat with Solan, Shimla and nearby hill destinations. Local taxis are
                useful for sightseeing.
              </p>
              <p>
                <strong className="text-[color:var(--forest)]">Food:</strong> Travelers can enjoy
                North Indian and vegetarian meals at the hotel's in-house restaurant.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe grid md:grid-cols-3 gap-6">
          {[
            [
              "Things to do",
              "Take a scenic drive, walk through nearby pine landscapes or use Kandaghat as a base for Chail and Shimla.",
            ],
            [
              "Places to visit",
              "Sadhupul, Karol Tibba, Kuthar Fort and Mohan Shakti National Heritage Park are all part of the wider local itinerary.",
            ],
            [
              "Where to stay",
              "Choose a hotel on NH 5 with comfortable rooms, parking and dining when road access and a relaxed setting matter.",
            ],
          ].map(([title, copy]) => (
            <Reveal key={title}>
              <article className="glass-card rounded-3xl p-7 h-full">
                <h3 className="font-display text-2xl text-[color:var(--forest)]">{title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                  {copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe flex flex-wrap justify-center gap-4">
          <Link
            to="/hotel-in-kandaghat"
            className="gradient-gold text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            Plan your Kandaghat stay <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+919418021100"
            className="border border-[color:var(--forest)] text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            <Phone className="h-4 w-4" /> Call the hotel
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=The+Woodland+Kandaghat"
            target="_blank"
            rel="noreferrer"
            className="border border-[color:var(--border)] text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" /> Get directions
          </a>
        </div>
      </section>
    </>
  );
}
