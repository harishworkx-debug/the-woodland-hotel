import { Link } from "@tanstack/react-router";
import { ArrowRight, Car, MapPin, Phone, UtensilsCrossed } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";

export type LocationPageData = {
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  image: string;
  eyebrow: string;
  introTitle: string;
  intro: string;
  locationTitle: string;
  locationCopy: string;
  journeyTitle: string;
  journeyCopy: string;
  highlights: Array<{ title: string; copy: string }>;
  nearbyTitle: string;
  nearbyCopy: string;
  faqs: Array<{ question: string; answer: string }>;
};

export function LocationLandingPage({ data }: { data: LocationPageData }) {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={data.image}
          alt={`${data.title} hotel location in Himachal Pradesh`}
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/75" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-16 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">{data.eyebrow}</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-4xl">{data.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{data.description}</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: data.title }]} />

      <main>
        <section className="section-y pt-8">
          <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow">A considered mountain stay</span>
              <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">{data.introTitle}</h2>
              <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">{data.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/rooms" className="gradient-gold text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  Explore rooms <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+919418021100" className="border border-[color:var(--forest)] text-[color:var(--forest)] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call the hotel
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-4">
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <MapPin className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div>
                  <h3 className="font-semibold text-[color:var(--forest)]">Hotel location</h3>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Silhari, NH 5, Kandaghat, Solan, Himachal Pradesh 173215, India.</p>
                </div>
              </article>
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <Car className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div>
                  <h3 className="font-semibold text-[color:var(--forest)]">Road access and parking</h3>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">A practical NH 5 base for travelers visiting the surrounding hill destinations, with on-site parking.</p>
                </div>
              </article>
              <article className="glass-card rounded-2xl p-6 flex gap-4">
                <UtensilsCrossed className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div>
                  <h3 className="font-semibold text-[color:var(--forest)]">Dining at the property</h3>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">Freshly prepared food is available at the in-house restaurant for guests and travelers.</p>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-[color:var(--beige)]">
          <div className="container-luxe">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Why stay here</span>
              <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">{data.locationTitle}</h2>
              <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">{data.locationCopy}</p>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {data.highlights.map((highlight) => (
                <article key={highlight.title} className="glass-card rounded-3xl p-7 h-full">
                  <h3 className="font-display text-2xl text-[color:var(--forest)]">{highlight.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{highlight.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow">Plan your route</span>
              <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">{data.journeyTitle}</h2>
              <p className="mt-5 text-[color:var(--muted-foreground)] leading-relaxed">{data.journeyCopy}</p>
              <Link to="/nearby-attractions" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--forest)] hover:text-[color:var(--gold)]">
                See places to visit near Kandaghat <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="glass-card rounded-3xl p-8">
              <h3 className="font-display text-3xl text-[color:var(--forest)]">{data.nearbyTitle}</h3>
              <p className="mt-4 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{data.nearbyCopy}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/restaurant" className="border border-[color:var(--forest)] text-[color:var(--forest)] font-semibold px-5 py-2.5 rounded-full">Explore dining</Link>
                <Link to="/contact" className="gradient-gold text-[color:var(--forest)] font-semibold px-5 py-2.5 rounded-full">Plan your stay</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-[color:var(--beige)]">
          <div className="container-luxe max-w-4xl">
            <Reveal>
              <span className="eyebrow">Helpful answers</span>
              <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">Frequently asked questions</h2>
            </Reveal>
            <div className="mt-8 divide-y divide-[color:var(--border)]">
              {data.faqs.map((faq) => (
                <details key={faq.question} className="py-5">
                  <summary className="cursor-pointer list-none font-semibold text-[color:var(--forest)]">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}