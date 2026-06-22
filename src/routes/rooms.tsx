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
      { title: "Rooms & Suites — The Woodland Kandaghat" },
      { name: "description", content: "Deluxe valley-view and family rooms at The Woodland Kandaghat. Starting from ₹1,550 per night — Smart TV, free WiFi, daily housekeeping." },
      { property: "og:title", content: "Rooms & Suites — The Woodland Kandaghat" },
      { property: "og:description", content: "Plush deluxe rooms with valley and jungle views from ₹1,550 / night." },
      { property: "og:url", content: "/rooms" },
      { property: "og:image", content: room1 },
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
    img: room1, name: "Deluxe Valley View",
    price: "₹1,550", desc: "Plush double bed, private balcony with sweeping valley views and a cozy seating nook.",
  },
  {
    img: room2, name: "Premium Family Room",
    price: "₹2,660", desc: "Spacious family-friendly layout with jungle views and a relaxing lounge corner.",
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
            <span className="eyebrow !text-[color:var(--gold)]">Stay With Us</span>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl max-w-3xl leading-[1.05]">
              Rooms designed around the <span className="text-gradient-gold">view</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/85 text-lg">Plush interiors, mountain balconies & quiet evenings. Starting from ₹1,550 / night.</p>
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
