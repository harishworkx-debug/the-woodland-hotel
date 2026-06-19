import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919418021100"
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe animate-float hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919418021100"
        className="grid h-14 w-14 place-items-center rounded-full gradient-gold text-[color:var(--forest)] shadow-luxe hover:scale-110 transition"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
