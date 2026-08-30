import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { LuxuryVideo } from "../components/site/LuxuryVideo";
import { BedDouble, Bath, Wifi, Tv, Mountain, Sparkles, Flame, ArrowRight } from "lucide-react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import loungeView from "../assets/lounge-view.jpg";
import roomsVideo from "../assets/hotel rooms.mp4";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Luxury Rooms & Suites in Kandaghat — Mountain View Rooms Near Shimla" },
      { name: "description", content: "Luxury deluxe rooms with mountain views in Kandaghat hotel on NH-5. Valley-view rooms starting from ₹3,000/night. Smart TV, WiFi, daily housekeeping. Perfect for families & couples near Shimla." },
      { property: "og:title", content: "Luxury Rooms with Valley Views — The Woodland Kandaghat" },
      { property: "og:description", content: "Spacious deluxe & super deluxe rooms with panoramic mountain views. Premium accommodation near Shimla with fine hospitality." },
      { property: "og:url", content: "/rooms" },
      { property: "og:image", content: room1 },
      { name: "keywords", content: "rooms in Kandaghat, mountain view rooms, deluxe rooms Kandaghat, luxury accommodation Kandaghat, hotel rooms near Shimla, family rooms Kandaghat, couple rooms, valley view rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const features = [
  [BedDouble, "Double Bed"],
  [Mountain, "Valley & Jungle Views"],
  [Tv, "Smart TV"],
  [Wifi, "Free WiFi"],
  [Bath, "Attached Bathroom"],
  [Flame, "24×7 Hot Water"],
  [Sparkles, "Daily Housekeeping"],
] as const;

const rooms = [
  {
    img: room1, name: "Deluxe Room",
    price: "₹3,000", desc: "Plush double bed, private balcony with sweeping valley views and a cozy seating nook.",
  },
  {
    img: room2, name: "Super Deluxe Room",
    price: "₹4,000", desc: "Spacious layout with premium furnishings, jungle views and a relaxing lounge corner.",
  },
];

function RoomsPage() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <LuxuryVideo src={roomsVideo} poster={loungeView} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/80" />
        </div>
        <div className="relative h-full container-luxe flex flex-col justify-end pb-20 text-white">
          <Reveal>
            <span className="eyebrow !text-[color:var(--gold)]">Stay in Kandaghat</span>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl max-w-3xl leading-[1.05]">
              Luxury rooms with <span className="text-gradient-gold">mountain views</span> near Shimla
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">Premium accommodation in Kandaghat with valley views, plush bedding & exceptional hospitality. Ideal for families, couples &amp; getaways. Starting from ₹3,000/night.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="gradient-gold text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full shadow-luxe hover:scale-[1.04] transition-transform">
                Book Your Stay
              </Link>
              <a href="#rooms" className="glass-dark text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/15 transition">
                Browse Rooms
              </a>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="section-y">
        <div className="container-luxe space-y-16">
          {rooms.map((r, i) => (
            <Reveal key={r.name}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="rounded-3xl overflow-hidden shadow-luxe zoom-img aspect-[5/4]">
                  <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <span className="eyebrow">Deluxe Category</span>
                  <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">{r.name}</h2>
                  <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">{r.desc}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {features.map(([Icon, label]) => (
                      <div key={label} className="flex items-center gap-3 text-sm text-[color:var(--forest)]">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--beige)] text-[color:var(--gold)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-end justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">Starting from</div>
                      <div className="font-display text-3xl text-gradient-gold">{r.price} <span className="text-base text-[color:var(--foreground)]/70">/ night</span></div>
                    </div>
                    <Link to="/contact" className="gradient-gold text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full shadow-luxe inline-flex items-center gap-2 hover:scale-[1.04] transition">
                      Book Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="gradient-forest text-white py-20">
        <div className="container-luxe text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl">Tailored stays for every traveller</h2>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">Talk to us for long stays, family packages and seasonal offers.</p>
            <Link to="/contact" className="mt-8 inline-flex gradient-gold text-[color:var(--forest)] font-semibold px-7 py-3.5 rounded-full">Reserve Your Room</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
