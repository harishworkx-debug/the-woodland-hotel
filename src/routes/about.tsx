import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { LuxuryVideo } from "../components/site/LuxuryVideo";
import exteriorDay from "../assets/exterior-day.jpg";
import garden from "../assets/garden.jpg";
import terrace from "../assets/terrace-view.jpg";
import loungeView from "../assets/lounge-view.jpg";
import interiorVideo from "../assets/hotel interior.mp4";
import homer from "../assets/homr.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Woodland Kandaghat | Luxury Hotel in Himachal" },
      { name: "description", content: "Discover the story behind The Woodland Kandaghat — a boutique Himalayan retreat built on warmth, craft and an unwavering love for the mountains." },
      { property: "og:title", content: "About The Woodland Kandaghat" },
      { property: "og:description", content: "Our story, our mission and why guests love staying with us." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: garden },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A mountain story, written in pine and gold"
        img={homer}
      />

      <section className="section-y">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative rounded-3xl overflow-hidden shadow-luxe aspect-[4/5]">
            <LuxuryVideo src={interiorVideo} poster={loungeView} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl px-5 py-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--forest)]/70">Inside The Woodland</div>
              <div className="font-display text-lg text-[color:var(--forest)]">Crafted Interiors</div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">From a quiet hillside to a celebrated retreat</h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
              The Woodland Kandaghat was born from a simple wish — to share the calm
              of Himachal’s pines with travellers seeking something gentler. Today,
              our boutique hotel on NH-5 welcomes families, couples and solo
              wanderers from across India and beyond.
            </p>
            <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
              Every wooden beam, valley-view window and dish on our table reflects
              a deep love for the region — and a quiet promise of comfort.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe grid md:grid-cols-2 gap-8">
          {[
            { t: "Our Mission", d: "To craft a refined yet relaxed Himalayan stay where every guest feels seen, cared for and quietly delighted." },
            { t: "Our Vision", d: "To be Kandaghat’s most loved boutique hotel — a benchmark for warmth, scenic comfort and honest mountain hospitality." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 120}>
              <div className="glass-card rounded-3xl p-8 hover-lift h-full">
                <span className="eyebrow">{c.t}</span>
                <p className="mt-4 text-[color:var(--foreground)]/85 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y">
        <div className="container-luxe">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">A decade of mountain hospitality</h2>
          </Reveal>
          <div className="relative mt-14 max-w-3xl mx-auto">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[color:var(--gold)]/40" />
            {[
              { y: "2012", t: "A quiet beginning", d: "Doors opened with a handful of valley-view rooms." },
              { y: "2016", t: "The restaurant arrives", d: "Our chef joins, bringing fresh vegetarian Indian classics." },
              { y: "2020", t: "Garden & terrace expansion", d: "New outdoor spaces overlooking the Shimla hills." },
              { y: "2024", t: "Boutique refresh", d: "A complete refresh — refined interiors and warm lighting throughout." },
            ].map((m, i) => (
              <Reveal key={m.y} delay={i * 100}>
                <div className={`relative mb-10 sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                  <div className="hidden sm:block" />
                  <div className="pl-14 sm:pl-0">
                    <span className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-1.5 h-5 w-5 rounded-full gradient-gold ring-4 ring-white" />
                    <div className="glass-card rounded-2xl p-6">
                      <div className="text-gradient-gold font-display text-2xl">{m.y}</div>
                      <h3 className="mt-1 font-semibold text-[color:var(--forest)]">{m.t}</h3>
                      <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{m.d}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-28 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${terrace})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--forest)]/70" />
        <div className="relative container-luxe text-center text-white">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl max-w-3xl mx-auto">Why guests keep coming back</h2>
            <p className="mt-5 text-white/80 max-w-xl mx-auto">Genuine warmth, scenic calm and a kitchen that knows comfort food — wrapped in spaces that feel like a friend’s mountain home.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, img }: { eyebrow: string; title: string; img: string }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/65" />
      <div className="relative h-full container-luxe flex flex-col justify-end pb-16 text-white">
        <span className="eyebrow !text-[color:var(--gold)]">{eyebrow}</span>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">{title}</h1>
      </div>
    </section>
  );
}
