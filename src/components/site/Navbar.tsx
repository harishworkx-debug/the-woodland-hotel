import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/gallery", label: "Gallery" },
  { to: "/attractions", label: "Attractions" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-5"
          : "bg-white/80 backdrop-blur-xl py-3 shadow-[0_8px_30px_-12px_rgba(15,61,46,0.18)]"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <span
            className={`grid h-10 w-10 place-items-center rounded-full border transition ${
              transparent ? "border-white/50 text-white" : "border-[color:var(--gold)] text-[color:var(--forest)]"
            }`}
          >
            <span className="font-display text-lg font-bold">W</span>
          </span>
          <span
            className={`flex flex-col leading-tight ${
              transparent ? "text-white" : "text-[color:var(--forest)]"
            }`}
          >
            <span className="font-display text-base tracking-[0.25em] uppercase">The Woodland</span>
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-80">Kandaghat</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-[color:var(--foreground)] hover:text-[color:var(--forest)]"
                } ${active ? "text-[color:var(--gold)]!" : ""}`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[color:var(--gold)] transition-all ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919418021100"
            className={`flex items-center gap-2 text-xs font-medium tracking-wide ${
              transparent ? "text-white/90" : "text-[color:var(--forest)]"
            }`}
          >
            <Phone className="h-4 w-4" />
            +91 94180 21100
          </a>
          <Link
            to="/contact"
            className="gradient-gold text-[color:var(--forest)] font-semibold text-sm px-5 py-2.5 rounded-full shadow-luxe hover:scale-[1.04] transition-transform"
          >
            Book Stay
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden grid place-items-center h-10 w-10 rounded-full border ${
            transparent ? "border-white/40 text-white" : "border-[color:var(--border)] text-[color:var(--forest)]"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-luxe pt-4 pb-6 mt-3 glass-card rounded-2xl">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 px-4 rounded-lg text-sm font-medium text-[color:var(--foreground)] hover:bg-[color:var(--beige)] hover:text-[color:var(--forest)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2 px-2">
            <a href="tel:+919418021100" className="flex-1 text-center py-3 rounded-full border border-[color:var(--forest)] text-[color:var(--forest)] text-sm font-semibold">Call</a>
            <Link to="/contact" className="flex-1 text-center py-3 rounded-full gradient-gold text-[color:var(--forest)] text-sm font-semibold">Book Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
