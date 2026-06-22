import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi, Car, UtensilsCrossed, Users, BellRing, Mountain,
  Sparkles, Flame, Zap, ConciergeBell, Trees, Stethoscope,
  Star, ArrowRight, Calendar,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { LuxuryVideo } from "../components/site/LuxuryVideo";

import exteriorDay from "../assets/exterior-day.jpg";
import exteriorNight from "../assets/exterior-night.jpg";
import terrace from "../assets/terrace-view.jpg";
import restaurantSunset from "../assets/restaurant-sunset.jpg";
import loungeView from "../assets/lounge-view.jpg";
import garden from "../assets/garden.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import dining from "../assets/dining.jpg";

import heroVideo from "../assets/first banner video.mp4";
import outsideViewVideo from "../assets/outside view hotel.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Woodland Kandaghat — Luxury Mountain Hotel near Shimla" },
      { name: "description", content: "Experience peace, comfort & scenic Himalayan views at The Woodland Kandaghat — a boutique hotel on NH-5 near Shimla, Chail and Sadhupul." },
      { property: "og:title", content: "The Woodland Kandaghat — Luxury Mountain Hotel" },
      { property: "og:description", content: "Boutique hotel on NH-5 Kandaghat with valley-view rooms and fresh Indian cuisine." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: exteriorDay },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const heroSlides = [
  { img: exteriorDay, title: "The Woodland Kandaghat", sub: "Experience Peace, Comfort & Scenic Himalayan Views" },
  { img: terrace, title: "Where Pines Meet Comfort", sub: "Valley-view terraces, fresh mountain air" },
  { img: exteriorNight, title: "Evenings That Glow", sub: "A warm boutique stay on NH-5 Kandaghat" },
];

function HomePage() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.title} className={`h-full w-full object-cover ${i === slide ? "animate-kenburns" : ""}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
          </div>
        ))}

        <div className="relative z-10 h-full container-luxe flex flex-col justify-center text-white">
          <div className="max-w-3xl">
            <span className="eyebrow !text-[color:var(--gold)]">Himachal Pradesh · NH-5</span>
            <h1 key={slide} className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] animate-fadeUp">
              {heroSlides[slide].title}
            </h1>
            <p key={`s${slide}`} className="mt-6 text-lg sm:text-xl text-white/85 max-w-xl animate-fadeUp" style={{ animationDelay: "150ms" }}>
              {heroSlides[slide].sub}
            </p>
            <div className="mt-9 flex flex-wrap gap-4 animate-fadeUp" style={{ animationDelay: "300ms" }}>
              <Link to="/contact" className="gradient-gold text-[color:var(--forest)] font-semibold px-7 py-4 rounded-full shadow-luxe hover:scale-[1.04] transition-transform">
                Book Your Stay
              </Link>
              <Link to="/rooms" className="glass-dark text-white font-semibold px-7 py-4 rounded-full hover:bg-white/15 transition">
                Explore Rooms
              </Link>
            </div>
          </div>

          {/* slider dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-[color:var(--gold)]" : "w-5 bg-white/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* floating booking strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 hidden md:block">
          <div className="container-luxe pb-8">
            <div className="glass-card rounded-2xl p-4 grid grid-cols-4 gap-4">
              {[
                { icon: Calendar, label: "Check-in", val: "Select date" },
                { icon: Calendar, label: "Check-out", val: "Select date" },
                { icon: Users, label: "Guests", val: "2 Adults" },
                { icon: null, label: "", val: "" },
              ].map((f, i) =>
                i === 3 ? (
                  <Link key={i} to="/contact" className="grid place-items-center rounded-xl gradient-forest text-white font-semibold hover:opacity-95">
                    Check Availability <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <div key={i} className="flex items-center gap-3 px-3">
                    {f.icon && <f.icon className="h-5 w-5 text-[color:var(--gold)]" />}
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--forest)]/70">{f.label}</div>
                      <div className="text-sm font-medium text-[color:var(--forest)]">{f.val}</div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow">Welcome</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">
              A boutique retreat tucked into the <span className="text-gradient-gold">Himalayan pines</span>
            </h2>
            <p className="mt-6 text-[color:var(--muted-foreground)] leading-relaxed">
              The Woodland Kandaghat is a refined mountain hotel on NH-5 between Shimla
              and Chail. Wake to layered valley views, dine on fresh Indian cuisine,
              and unwind in spaces designed around the rhythm of the hills.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "12+", l: "Years of Hospitality" },
                { n: "10K+", l: "Happy Guests" },
                { n: "4.7★", l: "Guest Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="grid grid-cols-6 grid-rows-6 gap-4 h-[520px]">
            <div className="col-span-4 row-span-4 rounded-3xl overflow-hidden shadow-luxe zoom-img">
              <img src={loungeView} alt="Valley view lounge" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-luxe zoom-img">
              <img src={garden} alt="Garden" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-luxe zoom-img">
              <img src={terrace} alt="Terrace" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-6 row-span-2 rounded-3xl overflow-hidden shadow-luxe zoom-img">
              <img src={restaurantSunset} alt="Restaurant sunset" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="section-y">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Stay With Us</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Featured Rooms & Suites</h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">Plush bedding, mountain-view balconies and quiet evenings — every room is built for restful escapes.</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              { img: room1, name: "Deluxe Valley View", price: "₹1,550", desc: "Double bed, panoramic valley view, smart TV, attached bath." },
              { img: room2, name: "Premium Family Room", price: "₹2,660", desc: "Spacious family layout, jungle views, daily housekeeping." },
            ].map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <article className="group relative rounded-3xl overflow-hidden shadow-luxe hover-lift bg-white">
                  <div className="zoom-img aspect-[5/4]">
                    <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute top-5 left-5 glass-card rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[color:var(--forest)]">
                    Starting {r.price} / night
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-[color:var(--forest)]">{r.name}</h3>
                    <p className="text-sm text-[color:var(--muted-foreground)] mt-2">{r.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <Link to="/rooms" className="text-sm font-semibold text-[color:var(--forest)] inline-flex items-center gap-2 hover:text-[color:var(--gold)]">
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link to="/contact" className="text-xs font-semibold tracking-wide uppercase gradient-gold text-[color:var(--forest)] px-4 py-2.5 rounded-full">
                        Book
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX EXPERIENCE */}
      <section
        className="relative h-[60vh] min-h-[440px] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${terrace})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--forest)]/70" />
        <div className="relative h-full container-luxe flex items-center justify-center text-center text-white">
          <Reveal>
            <span className="eyebrow !text-[color:var(--gold)]">A Luxury Experience</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl max-w-3xl">Mornings of mist. Evenings of golden pine light.</h2>
            <p className="mt-6 max-w-xl mx-auto text-white/80">Curated experiences from sunrise tea on the deck to candle-lit family dinners overlooking the valley.</p>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Amenities</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Thoughtful comforts, end to end</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              [Wifi, "Free WiFi"], [Car, "Parking"], [UtensilsCrossed, "Restaurant"],
              [Users, "Family Rooms"], [BellRing, "Room Service"], [Mountain, "Scenic Views"],
              [Sparkles, "Housekeeping"], [Flame, "Hot Water"], [Zap, "Power Backup"],
              [ConciergeBell, "Reception 24×7"], [Trees, "Garden Area"], [Stethoscope, "Medical Help"],
            ].map(([Icon, label], i) => (
              <Reveal key={label as string} delay={i * 40}>
                <div className="group h-full glass-card rounded-2xl p-5 flex flex-col items-center text-center hover-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-full gradient-forest text-[color:var(--gold)] mb-3 group-hover:scale-110 transition-transform">
                    {/* @ts-ignore */}
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="text-sm font-medium text-[color:var(--forest)]">{label as string}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-y">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="rounded-3xl overflow-hidden shadow-luxe zoom-img aspect-[4/3]">
            <img src={dining} alt="Dining" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={150}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Where every detail feels considered</h2>
            <ul className="mt-8 space-y-5">
              {[
                ["Prime NH-5 Location", "Easy reach from Shimla, Chail and Sadhupul."],
                ["Valley & Jungle Views", "Floor-to-ceiling glass for unbroken panoramas."],
                ["Family-First Hospitality", "Spacious rooms, kids menu and warm service."],
                ["Fresh Indian Cuisine", "Vegetarian specialties from an experienced chef."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="mt-1 h-9 w-9 grid place-items-center rounded-full gradient-gold text-[color:var(--forest)] font-display">✓</span>
                  <div>
                    <div className="font-semibold text-[color:var(--forest)]">{t}</div>
                    <div className="text-sm text-[color:var(--muted-foreground)]">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="gradient-forest text-white py-20">
        <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { n: "10,000+", l: "Happy Guests" },
            { n: "4.7", l: "Average Rating" },
            { n: "25+", l: "Curated Experiences" },
            { n: "12+", l: "Years of Service" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="font-display text-5xl text-gradient-gold">{s.n}</div>
              <div className="text-xs tracking-[0.3em] uppercase text-white/70 mt-2">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Guest Stories</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Loved by families & travellers</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { n: "Priya & Arjun", t: "Stunning views, spotless rooms and a chef who made our anniversary dinner unforgettable." },
              { n: "The Mehra Family", t: "Perfect family escape — the kids loved the garden and the staff treated us like family." },
              { n: "Rahul S.", t: "A peaceful break from Delhi. The terrace at sunset is something I’ll remember for a long time." },
            ].map((r, i) => (
              <Reveal key={r.n} delay={i * 100}>
                <div className="h-full glass-card rounded-3xl p-7 hover-lift">
                  <div className="flex gap-1 text-[color:var(--gold)]">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-[color:var(--foreground)]/85 leading-relaxed">“{r.t}”</p>
                  <div className="mt-5 text-sm font-semibold text-[color:var(--forest)]">{r.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-y">
        <div className="container-luxe">
          <Reveal className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Moments at The Woodland</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-[color:var(--forest)] inline-flex items-center gap-2 hover:text-[color:var(--gold)]">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[exteriorDay, terrace, room1, restaurantSunset, garden, dining, loungeView, exteriorNight].map((img, i) => (
              <Reveal key={i} delay={i * 60} className="rounded-2xl overflow-hidden shadow-luxe zoom-img aspect-square">
                <img src={img} alt="Gallery" className="h-full w-full object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Nearby</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[color:var(--forest)]">Explore the surroundings</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { t: "Chail", d: "30 km · Hill town & cricket ground" },
              { t: "Sadhupul", d: "18 km · River-side picnic spot" },
              { t: "The Ridge, Shimla", d: "32 km · Iconic promenade" },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 100}>
                <div className="glass-card rounded-3xl p-7 hover-lift">
                  <MapPin className="h-6 w-6 text-[color:var(--gold)]" />
                  <h3 className="mt-3 font-display text-xl text-[color:var(--forest)]">{a.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/attractions" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--gold)]">
              See all attractions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${exteriorNight})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container-luxe text-center text-white">
          <Reveal>
            <span className="eyebrow !text-[color:var(--gold)]">Plan Your Escape</span>
            <h2 className="mt-5 font-display text-4xl sm:text-6xl max-w-3xl mx-auto">
              Your Himalayan retreat is one click away
            </h2>
            <p className="mt-5 text-white/80 max-w-xl mx-auto">
              Reserve directly with us for the best rates and a personal welcome from our team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="gradient-gold text-[color:var(--forest)] font-semibold px-8 py-4 rounded-full shadow-luxe hover:scale-[1.04] transition-transform">
                Book Your Stay
              </Link>
              <a href="tel:+919418021100" className="glass-dark text-white font-semibold px-8 py-4 rounded-full">
                Call +91 94180 21100
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
