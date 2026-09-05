import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Car, Phone, UtensilsCrossed } from "lucide-react";
import { Breadcrumbs } from "../components/site/Breadcrumbs";
import { Reveal } from "../components/site/Reveal";
import { breadcrumbSchema, HOTEL, pageHead } from "../lib/seo";
import exteriorDay from "../assets/exterior-day.jpg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Best Hotel in Kandaghat", path: "/hotel-in-kandaghat" },
];
const faqs = [
  [
    "Which is the best hotel in Kandaghat?",
    "The Woodland Kandaghat is a strong option for travelers who want comfortable rooms, mountain surroundings, on-site dining and a convenient NH 5 location. The right choice also depends on your room, dates and travel plans.",
  ],
  [
    "Where is The Woodland Kandaghat located?",
    "The hotel is at Silhari, NH 5, Kandaghat, Solan, Himachal Pradesh 173215, India.",
  ],
  [
    "Is The Woodland Kandaghat near Shimla?",
    "The hotel is on the Kalka-Shimla route in Kandaghat, making it a practical base for guests visiting Shimla and nearby hill destinations. Travel time varies with traffic, weather and road conditions.",
  ],
  [
    "Is there parking at The Woodland Kandaghat?",
    "On-site parking is available for hotel guests and visitors.",
  ],
  [
    "Does the hotel have a restaurant?",
    "Yes. The in-house restaurant serves freshly prepared food and gives hotel guests a convenient dining option.",
  ],
  [
    "Is The Woodland Kandaghat suitable for families?",
    "The hotel offers comfortable rooms, parking, dining and a relaxed mountain setting suited to family stays. Contact the team to discuss your group and room needs.",
  ],
  [
    "What places can I visit near Kandaghat?",
    "Sadhupul, Chail, Karol Tibba, Kuthar Fort, Mohan Shakti National Heritage Park and Shimla attractions are all useful additions to a Kandaghat itinerary.",
  ],
  [
    "How can I contact The Woodland Kandaghat?",
    "Call +91 94180 21100 or use the contact page to send an enquiry.",
  ],
];

export const Route = createFileRoute("/hotel-in-kandaghat")({
  head: () => ({
    ...pageHead({
      title: "Best Hotel in Kandaghat, Himachal Pradesh | The Woodland",
      description:
        "Searching for the best hotel in Kandaghat? Discover The Woodland Kandaghat, a scenic mountain hotel on NH 5 with comfortable rooms, dining and easy access to nearby attractions.",
      path: "/hotel-in-kandaghat",
      image: exteriorDay,
    }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(crumbs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(([name, text]) => ({
            "@type": "Question",
            name,
            acceptedAnswer: { "@type": "Answer", text },
          })),
        }),
      },
    ],
  }),
  component: HotelInKandaghatPage,
});

function HotelInKandaghatPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={exteriorDay}
          alt="The Woodland Kandaghat hotel exterior in Himachal Pradesh"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/70" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-16 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Stay in Kandaghat</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-4xl">
            Best Hotel in Kandaghat, Himachal Pradesh
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            Comfortable mountain accommodation on NH 5 for stays near Shimla, Chail and Sadhupul.
          </p>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Best Hotel in Kandaghat" }]} />
      <section className="section-y pt-8">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">A considered Kandaghat stay</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">
              A comfortable base for the Shimla hills
            </h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">
              The Woodland Kandaghat brings together comfortable rooms, mountain surroundings and
              warm hospitality at Silhari on NH 5. It suits travelers driving toward Shimla,
              planning a Chail visit, or looking for a quieter weekend stay in Solan district.
            </p>
            <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
              The location keeps road access simple while the hotel's rooms, restaurant and on-site
              parking make it easier to settle in after a day on the hills.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/rooms"
                className="gradient-gold text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                Check rooms <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919418021100"
                className="border border-[color:var(--forest)] text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call the hotel
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            <article className="glass-card rounded-2xl p-6 flex gap-4">
              <Car className="h-6 w-6 text-[color:var(--gold)]" />
              <div>
                <h3 className="font-semibold text-[color:var(--forest)]">NH 5 access</h3>
                <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                  A practical location for road travelers.
                </p>
              </div>
            </article>
            <article className="glass-card rounded-2xl p-6 flex gap-4">
              <UtensilsCrossed className="h-6 w-6 text-[color:var(--gold)]" />
              <div>
                <h3 className="font-semibold text-[color:var(--forest)]">In-house dining</h3>
                <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                  Freshly prepared meals for guests and travelers.
                </p>
              </div>
            </article>
            <article className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-[color:var(--forest)]">Address</h3>
              <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                {HOTEL.address.streetAddress}, Kandaghat, Solan, Himachal Pradesh 173215
              </p>
            </article>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-[color:var(--beige)]">
        <div className="container-luxe">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Plan a useful stay</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">
              Rooms, dining and nearby days out
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Link to="/rooms" className="glass-card rounded-3xl p-7 hover-lift">
              <h3 className="font-display text-2xl text-[color:var(--forest)]">
                Rooms in Kandaghat
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
                Compare our comfortable room categories and plan a family or weekend stay.
              </p>
            </Link>
            <Link to="/restaurant" className="glass-card rounded-3xl p-7 hover-lift">
              <h3 className="font-display text-2xl text-[color:var(--forest)]">
                Dining at the hotel
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
                Find a convenient restaurant option for your time at the property.
              </p>
            </Link>
            <Link to="/nearby-attractions" className="glass-card rounded-3xl p-7 hover-lift">
              <h3 className="font-display text-2xl text-[color:var(--forest)]">
                Nearby attractions
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
                Plan visits to Sadhupul, Chail, Shimla and local heritage sites.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-y">
        <div className="container-luxe max-w-4xl">
          <h2 className="font-display text-4xl text-[color:var(--forest)]">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-[color:var(--border)]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="py-5 group">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-[color:var(--forest)]">
                  {question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
