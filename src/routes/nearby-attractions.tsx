import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { Reveal } from "../components/site/Reveal";
import { breadcrumbSchema, pageHead } from "../lib/seo";
import terrace from "../assets/terrace-view.jpg";
import sadhupul from "../assets/Sadhupul.jpg";
import chail from "../assets/Chail.jpg";
import karol from "../assets/karol.jpg";
import mohan from "../assets/Mohan.jpg";
import kuthar from "../assets/kuthar fort.jpg";
import shimla from "../assets/Theridge.jpg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Places to Visit Near Kandaghat", path: "/nearby-attractions" },
];
const places = [
  [
    "Sadhupul",
    "A riverside stop known for its relaxed cafés and flowing water. It is approximately 8–9 km from Kandaghat.",
    sadhupul,
  ],
  [
    "Chail",
    "A peaceful hill destination with forest roads, the historic palace and the well-known cricket ground. Travel time varies with traffic and road conditions.",
    chail,
  ],
  [
    "Karol Tibba",
    "A rewarding nature and trekking experience near Solan, with forest trails and broad views across the hills.",
    karol,
  ],
  [
    "Mohan Shakti National Heritage Park",
    "A cultural and scenic attraction where visitors can spend time among landscaped spaces, installations and mountain surroundings.",
    mohan,
  ],
  [
    "Kuthar Fort",
    "A heritage stop with historic architecture and mountain scenery, suitable for travelers building a day itinerary around Solan district.",
    kuthar,
  ],
  [
    "Shimla",
    "Spend a day visiting The Ridge, Mall Road, Jakhoo Temple and Tara Devi Temple, then return to Kandaghat for a quieter evening.",
    shimla,
  ],
];

export const Route = createFileRoute("/nearby-attractions")({
  head: () => ({
    ...pageHead({
      title: "Places to Visit Near Kandaghat | The Woodland Kandaghat",
      description:
        "Explore Sadhupul, Chail, Karol Tibba, Kuthar Fort, Mohan Shakti National Heritage Park and Shimla from The Woodland Kandaghat.",
      path: "/nearby-attractions",
      image: terrace,
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(crumbs)) }],
  }),
  component: NearbyAttractionsPage,
});

function NearbyAttractionsPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[390px] overflow-hidden">
        <img
          src={terrace}
          alt="Mountain view near Kandaghat"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/70" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Explore the region</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">
            Places to Visit Near Kandaghat
          </h1>
        </div>
      </section>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Places to Visit Near Kandaghat" }]}
      />
      <section className="section-y pt-8">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">From one mountain base</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">
              Build an easy day around Kandaghat
            </h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
              Kandaghat is well placed for travelers exploring the Shimla hills, Chail and Solan
              district. Distances and travel times can change with weather and traffic, so ask the
              hotel team for current route guidance before setting out.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map(([title, copy, image], index) => (
              <Reveal key={title} delay={(index % 3) * 80}>
                <article className="rounded-3xl overflow-hidden shadow-luxe bg-white h-full">
                  <div className="aspect-[4/3] zoom-img">
                    <img
                      src={image}
                      alt={`${title} attraction near Kandaghat`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                      <MapPin className="h-3 w-3" /> Nearby destination
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-[color:var(--forest)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                      {copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="gradient-forest text-white py-20">
        <div className="container-luxe text-center">
          <h2 className="font-display text-4xl">Stay close to the road and the views</h2>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">
            Explore our rooms and use The Woodland Kandaghat as a comfortable base for your local
            itinerary.
          </p>
          <Link
            to="/rooms"
            className="mt-7 inline-flex gradient-gold text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full items-center gap-2"
          >
            Explore rooms <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
