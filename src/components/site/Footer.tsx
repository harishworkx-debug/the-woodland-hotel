import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="gradient-forest text-white/85 mt-24">
      <div className="container-luxe py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--gold)] text-[color:var(--gold)] font-display text-xl">W</span>
            <div>
              <div className="font-display tracking-[0.25em] uppercase">The Woodland</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-white/60">Kandaghat</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            A boutique mountain retreat in the Himalayas — where pine-scented air,
            valley views and warm hospitality come together.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/about", "About Us"],
              ["/rooms", "Rooms & Suites"],
              ["/restaurant", "Restaurant"],
              ["/gallery", "Gallery"],
              ["/attractions", "Attractions"],
              ["/reviews", "Reviews"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[color:var(--gold)] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" /> Village Silhari, NH-5 Kalka-Shimla Road, Kandaghat, Himachal Pradesh 173215</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-1 text-[color:var(--gold)]" /> <a href="tel:+919418021100">+91 94180 21100</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-1 text-[color:var(--gold)]" /> <a href="mailto:stay@woodlandkandaghat.com">stay@woodlandkandaghat.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[color:var(--gold)] text-sm tracking-[0.3em] uppercase mb-5">Newsletter</h4>
          <p className="text-sm text-white/70 mb-4">Mountain stories & seasonal offers — straight to your inbox.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="flex-1 bg-white/10 border border-white/15 rounded-l-full px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus:border-[color:var(--gold)]" />
            <button className="gradient-gold text-[color:var(--forest)] font-semibold text-sm px-5 rounded-r-full">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-5 text-xs text-white/55 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} The Woodland Kandaghat. All rights reserved.</span>
          <span>Crafted in the Himalayas · NH-5 Kandaghat</span>
        </div>
      </div>
    </footer>
  );
}
