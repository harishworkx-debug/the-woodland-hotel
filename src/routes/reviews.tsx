import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "../components/site/Reveal";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import garden from "../assets/garden.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — The Woodland Kandaghat | Guest Experiences" },
      { name: "description", content: "Read what families and travellers say about staying at The Woodland Kandaghat — food, staff and views, in their own words." },
      { property: "og:title", content: "Guest Reviews — The Woodland Kandaghat" },
      { property: "og:description", content: "Authentic guest experiences from our boutique mountain hotel." },
      { property: "og:url", content: "/reviews" },
      { property: "og:image", content: garden },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { n: "Ananya R.", c: "Family Stay", t: "From the welcome drink to the goodbye smiles, every moment felt warm. Our kids didn’t want to leave the garden." },
  { n: "Karan V.", c: "Couple", t: "Best sunset I’ve seen from a hotel terrace in years. Rooms are super comfortable and quiet." },
  { n: "Meera S.", c: "Food", t: "The thali is heaven — pure flavours, generous portions. The chef even adjusted spice for my parents." },
  { n: "Tarun & Ria", c: "Staff Appreciation", t: "The team genuinely cares. They remembered our names by day two." },
  { n: "The Banerjees", c: "Family Stay", t: "Loved how spacious our family room was. Beautiful jungle views and great service." },
  { n: "Aditya", c: "Google Review", t: "Easy stop on NH-5, much better than chain hotels around. Will return for sure." },
];

function ReviewsPage() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={garden} alt="Reviews" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Guest Stories</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">In our guests’ own words</h1>
        </div>
      </section>

      {/* Featured carousel */}
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe">
          <div className="relative max-w-3xl mx-auto">
            <Quote className="absolute -top-6 left-0 h-16 w-16 text-[color:var(--gold)]/30" />
            <div key={i} className="glass-card rounded-3xl p-10 text-center animate-fadeUp">
              <div className="flex gap-1 justify-center text-[color:var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mt-6 text-xl text-[color:var(--foreground)]/85 font-display leading-relaxed">
                “{reviews[i].t}”
              </p>
              <div className="mt-6 text-sm font-semibold text-[color:var(--forest)] tracking-wide">
                {reviews[i].n} · <span className="text-[color:var(--gold)]">{reviews[i].c}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)} className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] hover:border-[color:var(--gold)]">
                <ChevronLeft className="h-5 w-5 text-[color:var(--forest)]" />
              </button>
              <button onClick={() => setI((v) => (v + 1) % reviews.length)} className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] hover:border-[color:var(--gold)]">
                <ChevronRight className="h-5 w-5 text-[color:var(--forest)]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, k) => (
            <Reveal key={r.n} delay={(k % 6) * 80}>
              <div className="glass-card rounded-3xl p-7 h-full hover-lift">
                <div className="flex gap-1 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, m) => <Star key={m} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-[color:var(--foreground)]/85 leading-relaxed">“{r.t}”</p>
                <div className="mt-5 text-sm font-semibold text-[color:var(--forest)]">{r.n}</div>
                <div className="text-xs text-[color:var(--gold)] uppercase tracking-[0.25em] mt-1">{r.c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
