import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "../components/site/Reveal";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import exteriorNight from "../assets/exterior-night.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Woodland Kandaghat | Book Your Stay" },
      { name: "description", content: "Reach The Woodland Kandaghat at +91 94180 21100. Village Silhari, NH-5 Kalka Shimla Road, Kandaghat, Himachal Pradesh 173215." },
      { property: "og:title", content: "Contact — The Woodland Kandaghat" },
      { property: "og:description", content: "Call, WhatsApp or write to us to book your Himalayan stay." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: exteriorNight },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <img src={exteriorNight} alt="Contact" className="absolute inset-0 h-full w-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/70" />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-14 text-white">
          <span className="eyebrow !text-[color:var(--gold)]">Get In Touch</span>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">We’d love to host you</h1>
        </div>
      </section>

      <section className="section-y">
        <div className="container-luxe grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-4">
            {[
              { Icon: MapPin, t: "Address", d: "Village Silhari, NH-5 Kalka Shimla Road, Kandaghat, Himachal Pradesh 173215" },
              { Icon: Phone, t: "Phone", d: "+91 94180 21100", href: "tel:+919418021100" },
              { Icon: Mail, t: "Email", d: "stay@woodlandkandaghat.com", href: "mailto:stay@woodlandkandaghat.com" },
              { Icon: Clock, t: "Reception", d: "Open 24×7 · Check-in 12:00 PM · Check-out 11:00 AM" },
            ].map(({ Icon, t, d, href }) => (
              <div key={t} className="glass-card rounded-2xl p-6 flex gap-4 hover-lift">
                <span className="grid h-12 w-12 place-items-center rounded-full gradient-forest text-[color:var(--gold)] shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">{t}</div>
                  <div className="mt-1 text-[color:var(--forest)] font-medium">
                    {href ? <a href={href}>{d}</a> : d}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="tel:+919418021100" className="flex-1 text-center gradient-gold text-[color:var(--forest)] font-semibold py-3 rounded-full">
                <Phone className="inline h-4 w-4 mr-2" /> Call
              </a>
              <a href="https://wa.me/919418021100" target="_blank" rel="noreferrer" className="flex-1 text-center bg-[#25D366] text-white font-semibold py-3 rounded-full">
                <MessageCircle className="inline h-4 w-4 mr-2" /> WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-card rounded-3xl p-8 grid sm:grid-cols-2 gap-5"
            >
              <h2 className="sm:col-span-2 font-display text-3xl text-[color:var(--forest)]">Send us a message</h2>
              <Field label="Full Name" />
              <Field label="Phone" type="tel" />
              <Field label="Email" type="email" className="sm:col-span-2" />
              <Field label="Check-in" type="date" />
              <Field label="Check-out" type="date" />
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] mb-2">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 focus:outline-none focus:border-[color:var(--gold)]" />
              </div>
              <button className="sm:col-span-2 gradient-forest text-white font-semibold py-3.5 rounded-full hover:opacity-95">
                {sent ? "Thank you — we’ll be in touch!" : "Send Enquiry"}
              </button>
            </form>
          </Reveal>
        </div>

        <div className="container-luxe mt-12">
          <Reveal className="rounded-3xl overflow-hidden shadow-luxe aspect-[16/8]">
            <iframe
              title="The Woodland Kandaghat — Map"
              src="https://www.google.com/maps?q=Kandaghat,+Himachal+Pradesh+173215&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", className = "" }: { label: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] mb-2">{label}</label>
      <input type={type} className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 focus:outline-none focus:border-[color:var(--gold)]" />
    </div>
  );
}
