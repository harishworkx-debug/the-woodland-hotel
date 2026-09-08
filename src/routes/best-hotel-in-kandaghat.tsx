import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { Reveal } from "../components/site/Reveal";
import { HOTEL, pageHead } from "../lib/seo";
import exteriorDay from "../assets/exterior-day.jpg";

const faqs = [
  {
    question: "Where is The Woodland Kandaghat located?",
    answer: "The Woodland Kandaghat is at Silhari, NH 5, Kandaghat, Solan, Himachal Pradesh 173215, India, on the Kalka-Shimla route.",
  },
  {
    question: "Why choose a hotel on NH-5 Kandaghat?",
    answer: "The NH-5 location makes it practical for road travelers heading toward Shimla, Chail, Solan and Sadhupul, while the hotel provides rooms, dining and on-site parking.",
  },
  {
    question: "Is this a family hotel in Kandaghat?",
    answer: "Yes. The relaxed setting, comfortable room categories, in-house dining and parking make The Woodland Kandaghat a practical choice for families. Contact the hotel to discuss your group and dates.",
  },
  {
    question: "Is The Woodland Kandaghat near Chail and Shimla?",
    answer: "Kandaghat is a useful base for trips toward both Chail and Shimla. Travel times vary with traffic, weather and road conditions, so ask the hotel team for current route guidance before setting out.",
  },
];

export const Route = createFileRoute("/best-hotel-in-kandaghat")({
  head: () => pageHead({
    title: "Best Hotel in Kandaghat, Himachal Pradesh | The Woodland",
    description: "Plan a comfortable Kandaghat stay at The Woodland on NH-5. Compare rooms, understand the route to Chail and Shimla, find dining and contact the hotel.",
    path: "/best-hotel-in-kandaghat",
    image: exteriorDay,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Best Hotel in Kandaghat", path: "/best-hotel-in-kandaghat" },
    ],
    faq: faqs,
  }),
  component: BestHotelInKandaghatPage,
});

function BestHotelInKandaghatPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={exteriorDay}
          alt="The Woodland Kandaghat, a hotel on NH-5 in Himachal Pradesh"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/75" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-16 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Silhari, Kandaghat · NH-5</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-4xl">Best Hotel in Kandaghat, Himachal Pradesh</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">A comfortable mountain stay for families, road trips and days out toward Chail and Shimla.</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Best Hotel in Kandaghat" }]} />

      <main>
        <section className="section-y pt-8">
          <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow">Choose your base</span>
              <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">A practical hotel in Kandaghat for a slower mountain stay</h2>
              <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">The Woodland Kandaghat brings together comfortable rooms, mountain surroundings, an in-house restaurant and on-site parking at Silhari. It works well when you want a quieter base than central Shimla while keeping the Kalka-Shimla route within easy reach.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/rooms" className="gradient-gold text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">Compare rooms <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/contact" className="border border-[color:var(--forest)] text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2"><Phone className="h-4 w-4" /> Plan your stay</Link>
              </div>
            </Reveal>
            <Reveal delay={120} className="space-y-4">
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <MapPin className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--forest)]">Hotel on NH-5 Kandaghat</h3><p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{HOTEL.address.streetAddress}, Kandaghat, Solan, Himachal Pradesh 173215.</p></div>
              </article>
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <Car className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--forest)]">Easy road-trip stop</h3><p className="mt-1 text-sm text-[color:var(--muted-foreground)]">On-site parking and a convenient route position for exploring the surrounding hills.</p></div>
              </article>
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <UtensilsCrossed className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><h3 className="font-semibold text-[color:var(--forest)]">Dining at the property</h3><p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Enjoy freshly prepared meals without leaving your stay after a day on the road.</p></div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-[color:var(--beige)]">
          <div className="container-luxe">
            <Reveal className="max-w-3xl"><span className="eyebrow">Plan before you book</span><h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">Hotels near Chail and a calm base near Shimla</h2><p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">Kandaghat gives travelers flexibility: spend a day in Chail, continue toward Shimla, or keep the itinerary local around Sadhupul and Solan. Check current road conditions and leave time for hill traffic, especially during weekends and holidays.</p></Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <article className="glass-card rounded-3xl p-7 h-full"><Clock3 className="h-6 w-6 text-[color:var(--gold)]" /><h3 className="mt-4 font-display text-2xl text-[color:var(--forest)]">Hotel near Shimla</h3><p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">Stay outside the busiest city stretch while keeping Shimla attractions in your day-trip plan.</p></article>
              <article className="glass-card rounded-3xl p-7 h-full"><MapPin className="h-6 w-6 text-[color:var(--gold)]" /><h3 className="mt-4 font-display text-2xl text-[color:var(--forest)]">Hotels near Chail</h3><p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">Use Kandaghat as a comfortable starting point for Chail, with route advice from the hotel team.</p></article>
              <article className="glass-card rounded-3xl p-7 h-full"><Car className="h-6 w-6 text-[color:var(--gold)]" /><h3 className="mt-4 font-display text-2xl text-[color:var(--forest)]">Family hotel in Kandaghat</h3><p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">Choose a relaxed room, convenient meals and parking for a simpler family break in the hills.</p></article>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxe grid md:grid-cols-3 gap-6">
            <Link to="/rooms" className="glass-card rounded-3xl p-7 hover-lift"><h2 className="font-display text-2xl text-[color:var(--forest)]">Rooms in Kandaghat</h2><p className="mt-3 text-sm text-[color:var(--muted-foreground)]">See room categories, amenities and starting prices.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]">Explore rooms <ArrowRight className="h-4 w-4" /></span></Link>
            <Link to="/attractions" className="glass-card rounded-3xl p-7 hover-lift"><h2 className="font-display text-2xl text-[color:var(--forest)]">Attractions near Kandaghat</h2><p className="mt-3 text-sm text-[color:var(--muted-foreground)]">Build a useful day plan for Chail, Sadhupul, Shimla and nearby places.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]">Plan attractions <ArrowRight className="h-4 w-4" /></span></Link>
            <Link to="/contact" className="glass-card rounded-3xl p-7 hover-lift"><h2 className="font-display text-2xl text-[color:var(--forest)]">Contact the hotel</h2><p className="mt-3 text-sm text-[color:var(--muted-foreground)]">Ask about dates, room needs, directions and current availability.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)]">Send an enquiry <ArrowRight className="h-4 w-4" /></span></Link>
          </div>
        </section>

        <section className="section-y bg-[color:var(--beige)]">
          <div className="container-luxe max-w-4xl"><span className="eyebrow">Helpful answers</span><h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">Questions about staying in Kandaghat</h2><div className="mt-8 divide-y divide-[color:var(--border)]">{faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer list-none font-semibold text-[color:var(--forest)]">{faq.question}</summary><p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{faq.answer}</p></details>)}</div></div>
        </section>
      </main>
    </>
  );
}
