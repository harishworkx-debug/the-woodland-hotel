import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/site/Reveal";
import { UtensilsCrossed, Leaf, Users, ChefHat, Star } from "lucide-react";
import dining from "../assets/dining.jpg";
import restaurantSunset from "../assets/restaurant-sunset.jpg";
import terrace from "../assets/terrace-view.jpg";
import nightre from "../assets/nightres.jpeg";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant — Fresh Indian Cuisine | The Woodland Kandaghat" },
      { name: "description", content: "Vegetarian Indian specialties, family dining and a kids menu — at our scenic in-house restaurant in Kandaghat." },
      { property: "og:title", content: "Restaurant — The Woodland Kandaghat" },
      { property: "og:description", content: "Fresh, vegetarian Indian cuisine with valley views." },
      { property: "og:url", content: "/restaurant" },
      { property: "og:image", content: dining },
    ],
    links: [{ rel: "canonical", href: "/restaurant" }],
  }),
  component: RestaurantPage,
});

function RestaurantPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={dining} alt="Restaurant" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-16 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Dine With Us</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl max-w-3xl">Mountain flavours, lovingly plated</h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            [UtensilsCrossed, "Fresh Indian Cuisine", "Seasonal, local-sourced ingredients."],
            [Leaf, "Vegetarian Specialties", "A celebration of pure flavours."],
            [Users, "Family & Kids Menu", "Comfort dishes for every age."],
            [ChefHat, "Experienced Chef", "Crafted by our in-house culinary team."],
          ].map(([Icon, t, d], i) => (
            <Reveal key={t as string} delay={i * 80}>
              <div className="glass-card rounded-3xl p-7 hover-lift h-full">
                <span className="grid h-12 w-12 place-items-center rounded-full gradient-forest text-[color:var(--gold)]">
                  {/* @ts-ignore */}
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-[color:var(--forest)]">{t as string}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{d as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="relative py-28 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${restaurantSunset})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container-luxe text-center text-white">
          <Reveal>
            <span className="eyebrow !text-[color:var(--gold)]">Dining Experience</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl max-w-3xl mx-auto">Sunsets you can taste</h2>
            <p className="mt-5 max-w-xl mx-auto text-white/80">Our open-air terrace turns golden each evening — a setting your dinner will remember as much as you do.</p>
          </Reveal>
        </div>
      </section>

      

      <section className="section-y">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="rounded-3xl overflow-hidden shadow-luxe zoom-img aspect-[4/3]">
            <img src={terrace} alt="Terrace dining" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Guest Reviews</span>
            <h2 className="mt-3 font-display text-4xl text-[color:var(--forest)]">What diners say</h2>
            <div className="mt-6 space-y-4">
              {[
                ["Aakanksha", "The food was fresh and the view from the terrace just made everything taste better."],
                ["Vikram & family", "Our kids loved the menu — and the staff went out of their way to make us comfortable."],
              ].map(([n, t]) => (
                <div key={n} className="glass-card rounded-2xl p-5">
                  <div className="flex gap-1 text-[color:var(--gold)]">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-3 text-[color:var(--foreground)]/85">“{t}”</p>
                  <div className="mt-2 text-sm font-semibold text-[color:var(--forest)]">{n}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
