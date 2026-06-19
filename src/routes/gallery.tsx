import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

import exteriorDay from "../assets/exterior-day.jpg";
import exteriorNight from "../assets/exterior-night.jpg";
import terrace from "../assets/terrace-view.jpg";
import restaurantSunset from "../assets/restaurant-sunset.jpg";
import loungeView from "../assets/lounge-view.jpg";
import garden from "../assets/garden.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import dining from "../assets/dining.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Woodland Kandaghat" },
      { name: "description", content: "Explore rooms, restaurant, gardens and scenic views from our boutique hotel in Kandaghat." },
      { property: "og:title", content: "Gallery — The Woodland Kandaghat" },
      { property: "og:description", content: "Photos of rooms, dining and Himalayan views." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: terrace },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { img: exteriorDay, c: "Hotel Exterior" },
  { img: exteriorNight, c: "Hotel Exterior" },
  { img: room1, c: "Rooms" },
  { img: room2, c: "Rooms" },
  { img: dining, c: "Restaurant" },
  { img: restaurantSunset, c: "Restaurant" },
  { img: terrace, c: "Scenic Views" },
  { img: loungeView, c: "Scenic Views" },
  { img: garden, c: "Garden" },
];
const cats = ["All", "Hotel Exterior", "Rooms", "Restaurant", "Scenic Views", "Garden"];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const visible = active === "All" ? items : items.filter((i) => i.c === active);

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={terrace} alt="Gallery" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Gallery</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">Through our windows</h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                  active === c
                    ? "gradient-forest text-white border-transparent"
                    : "border-[color:var(--border)] text-[color:var(--forest)] hover:border-[color:var(--gold)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {visible.map((it, i) => (
              <Reveal key={i} delay={(i % 6) * 60} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-luxe zoom-img cursor-pointer">
                <button onClick={() => setOpen(it.img)} className="block w-full">
                  <img src={it.img} alt={it.c} className="w-full h-auto object-cover" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeUp"
        >
          <button className="absolute top-5 right-5 text-white" onClick={() => setOpen(null)} aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-luxe" />
        </div>
      )}
    </>
  );
}
