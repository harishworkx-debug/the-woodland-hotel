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

import interior from "../assets/interior.jpeg";
import interior1 from "../assets/interior1.jpeg";
import interior2 from "../assets/interior2.jpeg";
import exterior from "../assets/exterior.jpeg";
import exterior2 from "../assets/exterior2.jpeg";
import exterior3 from "../assets/exterior3.jpeg";
import exterior4 from "../assets/exterior4.jpeg";
import exterior5 from "../assets/exterior5.jpeg";
import exterior6 from "../assets/exterior6.jpeg";
import exterior7 from "../assets/exterior7.jpeg";
import exterior8 from "../assets/exterior8.jpeg";
import exterior9 from "../assets/exterior9.jpeg";
import exterior10 from "../assets/exterior10.jpeg";

import outside1 from "../assets/outside1.jpg";
import outside2 from "../assets/outside2.jpg";
import outside3 from "../assets/outside3.jpg";
import outside4 from "../assets/outside4.jpg";
import outside5 from "../assets/outside5.jpg";
import outside6 from "../assets/outside6.jpg";
import outside7 from "../assets/outside7.jpg";
import outside8 from "../assets/outside8.jpg";
import outside9 from "../assets/outside9.jpg";
import outside10 from "../assets/outside10.jpg";
import outside11 from "../assets/outside11.jpg";
import outside12 from "../assets/outside12.jpg";
import outside13 from "../assets/outside13.jpg";
import outside14 from "../assets/outside14.jpg";
import nightres from "../assets/nightres.jpeg";


import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";
import room9 from "../assets/room9.jpg";
import room10 from "../assets/room10.jpg";
import room11 from "../assets/room11.jpg";
import room12 from "../assets/room12.jpg";
import room13 from "../assets/room13.jpg";
import room14 from "../assets/room14.jpg";
import room15 from "../assets/room15.jpg";
import room16 from "../assets/room16.jpg";
import room17 from "../assets/room17.jpg";
import room18 from "../assets/room18.jpg";
import room19 from "../assets/room19.jpg";
import room20 from "../assets/room20.jpg";
import room21 from "../assets/room21.jpg";
import room22 from "../assets/room22.jpg";
import room23 from "../assets/room23.jpg";
import room24 from "../assets/room24.jpg";
import room25 from "../assets/room25.jpg";
import room26 from "../assets/room26.jpg";
import room27 from "../assets/room27.jpg";
import room28 from "../assets/room28.jpg";
import room29 from "../assets/room29.jpg";
import room30 from "../assets/room30.jpg";
import room31 from "../assets/room31.jpg";
import room32 from "../assets/room32.jpg";
import room33 from "../assets/room33.jpg";
import room34 from "../assets/room34.jpg";
import room35 from "../assets/room35.jpg";
import room36 from "../assets/room36.jpg";
import room37 from "../assets/room37.jpg";
import room38 from "../assets/room38.jpg";
import room39 from "../assets/room39.jpg";
import room40 from "../assets/room40.jpg";

import restaurant1 from "../assets/restaurant1.jpg";
import restaurant2 from "../assets/restaurant2.jpg";
import restaurant3 from "../assets/restaurant3.jpg";
import restaurant4 from "../assets/restaurant4.jpg";
import restaurant5 from "../assets/restaurant5.jpg";
import restaurant6 from "../assets/restaurant6.jpg";
import restaurant7 from "../assets/restaurant7.jpg";
import restaurant8 from "../assets/restaurant8.jpg";
import restaurant9 from "../assets/restaurant9.jpg";
import restaurant10 from "../assets/restaurant10.jpg";
import restaurant11 from "../assets/restaurant11.jpg";
import restaurant12 from "../assets/restaurant12.jpg";
import restaurant13 from "../assets/restaurant13.jpg";
import restaurant14 from "../assets/restaurant14.jpg";
import restaurant15 from "../assets/restaurant15.jpg";

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
  { img: room3, c: "Rooms" },
  { img: room4, c: "Rooms" },
  { img: room5, c: "Rooms" },
  { img: room6, c: "Rooms" },
  { img: room7, c: "Rooms" },
  { img: room8, c: "Rooms" },
  { img: room9, c: "Rooms" },
  { img: room10, c: "Rooms" },
  { img: room11, c: "Rooms" },
  { img: room12, c: "Rooms" },
  { img: room13, c: "Rooms" },
  { img: room14, c: "Rooms" },
  { img: room15, c: "Rooms" },
  { img: room16, c: "Rooms" },
  { img: room17, c: "Rooms" },
  { img: room18, c: "Rooms" },
  { img: room19, c: "Rooms" },
  { img: room20, c: "Rooms" },
  { img: room21, c: "Rooms" },
  { img: room22, c: "Rooms" },
  { img: room23, c: "Rooms" },
  { img: room24, c: "Rooms" },
  { img: room25, c: "Rooms" },
  { img: room26, c: "Rooms" },
  { img: room27, c: "Rooms" },
  { img: room28, c: "Rooms" },
  { img: room29, c: "Rooms" },
  { img: room30, c: "Rooms" },
  { img: room31, c: "Rooms" },
  { img: room32, c: "Rooms" },
  { img: room33, c: "Rooms" },
  { img: room34, c: "Rooms" },
  { img: room35, c: "Rooms" },
  { img: room36, c: "Rooms" },
  { img: room37, c: "Rooms" },
  { img: room38, c: "Rooms" },
  { img: room39, c: "Rooms" },
  { img: room40, c: "Rooms" },
  { img: dining, c: "Restaurant" },
  { img: restaurantSunset, c: "Restaurant" },
  { img: restaurant1, c: "Restaurant" },
  { img: restaurant2, c: "Restaurant" },
  { img: restaurant3, c: "Restaurant" },
  { img: restaurant4, c: "Restaurant" },
  { img: restaurant5, c: "Restaurant" },
  { img: restaurant6, c: "Restaurant" },
  { img: restaurant7, c: "Restaurant" },
  { img: restaurant8, c: "Restaurant" },
  { img: restaurant9, c: "Restaurant" },
  { img: restaurant10, c: "Restaurant" },
  { img: restaurant11, c: "Restaurant" },
  { img: restaurant12, c: "Restaurant" },
  { img: restaurant13, c: "Restaurant" },
  { img: restaurant14, c: "Restaurant" },
  { img: restaurant15, c: "Restaurant" },
  { img: terrace, c: "Scenic Views" },
  { img: restaurantSunset, c: "Scenic Views" },
{ img: outside1, c: "Scenic Views" },
{ img: outside2, c: "Scenic Views" },
{ img: outside3, c: "Scenic Views" },
{ img: outside4, c: "Scenic Views" },
{ img: outside5, c: "Scenic Views" },
{ img: outside6, c: "Scenic Views" },
{ img: outside7, c: "Scenic Views" },
{ img: outside8, c: "Scenic Views" },
{ img: outside9, c: "Scenic Views" },
{ img: outside10, c: "Scenic Views" },
{ img: outside11, c: "Scenic Views" },
{ img: outside12, c: "Scenic Views" },
{ img: outside13, c: "Scenic Views" },
{ img: outside14, c: "Scenic Views" },
  { img: loungeView, c: "Scenic Views" },
  { img: garden, c: "Garden" },
  { img: exterior2, c: "Garden" },
  { img: exterior3, c: "Garden" },
  { img: exterior4, c: "Garden" },
  { img: exterior5, c: "Garden" },
  { img: exterior6, c: "Garden" },
  { img: exterior7, c: "Garden" },
  { img: exterior8, c: "Garden" },
  { img: exterior9, c: "Garden" },
  { img: nightres, c: "Garden" },

  { img: interior, c: "Interior" },
  { img: interior1, c: "Interior" },
  { img: interior2, c: "Interior" },
  { img: room9, c: "Interior" },
  { img: room7, c: "Interior" },
  { img: room29, c: "Interior" },
  { img: room33, c: "Interior" },
  { img: restaurant9, c: "Interior" },
  { img: restaurant8, c: "Interior" },
  { img: restaurant10, c: "Interior" },
  { img: restaurant11, c: "Interior" },
  { img: restaurant12, c: "Interior" },


  { img: exterior, c: "Hotel Exterior" },
  { img: exterior2, c: "Hotel Exterior" },
  { img: exterior3, c: "Hotel Exterior" },
  { img: exterior4, c: "Hotel Exterior" },
  { img: exterior5, c: "Hotel Exterior" },
  { img: exterior6, c: "Hotel Exterior" },
  { img: exterior7, c: "Hotel Exterior" },
  { img: exterior8, c: "Hotel Exterior" },
  { img: exterior9, c: "Hotel Exterior" },
  { img: exterior10, c: "Hotel Exterior" },

];
const cats = ["All", "Hotel Exterior", "Rooms", "Restaurant", "Scenic Views", "Garden", "Interior"  ];

function GalleryPage() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const visible = active === "All" ? items : items.filter((i) => i.c === active);

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={nightres} alt="Gallery" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
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
