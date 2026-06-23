import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { MapPin, ArrowUpRight } from "lucide-react";
import terrace from "../assets/terrace-view.jpg";

import sadhupul from "@/assets/Sadhupul.jpg";
import chail from "@/assets/Chail.jpg";
import kutharFort from "@/assets/kuthar fort.jpg";
import karolTibbaTrek from "@/assets/karol.jpg";
import mohanShakti from "@/assets/Mohan.jpg";
import taraDeviTemple from "@/assets/TaraDevi.jpg";
import theRidgeShimla from "@/assets/Theridge.jpg"
import jakhooTemple from "@/assets/Jakhoo Temple.jpg";
import indianInstitute from "@/assets/IndianInstitute.jpg";

const heroImgs = [
  sadhupul,
  chail,
  kutharFort,
  karolTibbaTrek,
  mohanShakti,
  taraDeviTemple,
  theRidgeShimla,
  jakhooTemple,
  indianInstitute,
];

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — The Woodland Kandaghat" },
      { name: "description", content: "Sadhupul, Chail, Kuthar Fort, Karol Tibba, Tara Devi, The Ridge Shimla and more — all within easy reach of our hotel." },
      { property: "og:title", content: "Nearby Attractions — The Woodland Kandaghat" },
      { property: "og:description", content: "Explore the best of Kandaghat, Chail and Shimla from our base on NH-5." },
      { property: "og:url", content: "/attractions" },
      { property: "og:image", content: terrace },
    ],
    links: [{ rel: "canonical", href: "/attractions" }],
  }),
  component: AttractionsPage,
});

const places = [
  { t: "Sadhupul", d: "Riverside hangout with cafes built over flowing water.", dist: "18 km" },
  { t: "Chail", d: "Hill town with the world’s highest cricket ground.", dist: "30 km" },
  { t: "Kuthar Fort", d: "Centuries-old fort with palatial gardens.", dist: "26 km" },
  { t: "Karol Tibba Trek", d: "Scenic ridge trek with sweeping Himalayan views.", dist: "35 km" },
  { t: "Mohan Shakti National Heritage Park", d: "Sprawling spiritual & cultural park.", dist: "20 km" },
  { t: "Tara Devi Temple", d: "Hilltop shrine with panoramic views.", dist: "22 km" },
  { t: "The Ridge, Shimla", d: "Iconic promenade in the heart of Shimla.", dist: "32 km" },
  { t: "Jakhoo Temple", d: "Lord Hanuman temple atop Jakhoo Hill.", dist: "34 km" },
  { t: "Indian Institute of Advanced Study", d: "Historic Viceregal Lodge in Shimla.", dist: "33 km" },
];

function AttractionsPage() {
  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={terrace} alt="Nearby" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Nearby Attractions</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">A region waiting to be wandered</h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((p, i) => (
            <Reveal key={p.t} delay={(i % 6) * 80}>
              <article className="group h-full rounded-3xl overflow-hidden shadow-luxe bg-white hover-lift">
                <div className="zoom-img aspect-[4/3] relative">
                  <img
  src={heroImgs[i % heroImgs.length]}
  alt={p.t}
  className="h-full w-full object-cover"
  loading="lazy"
/>
                  <div className="absolute top-4 left-4 glass-card rounded-full px-3 py-1 text-xs font-medium text-[color:var(--forest)] flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[color:var(--gold)]" /> {p.dist}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[color:var(--forest)]">{p.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{p.d}</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(p.t + " Himachal Pradesh")}`}
                    target="_blank" rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--gold)]"
                  >
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
