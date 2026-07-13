import { Facebook, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "@/const";

export default function Footer() {
  const exploreLinks = [
    { label: "Villa Sungai", href: "/villa-sungai" },
    { label: "Villa Kailash", href: "/villa-kailash" },
    { label: "Location", href: "/location" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Villas Near Green School Bali", href: "/green-school-villa-bali" },
    { label: "FAQ", href: "/faq" },
    { label: "Inquire Now", href: "/inquire-now" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-3xl font-bold">Eco Villa Bali</h3>
            <p className="text-primary-foreground/80 max-w-xs leading-relaxed">
              A sanctuary of sustainable luxury in the heart of Bali's cultural landscape. Sold directly by Oscar, the owner: a former resident of Eco Village Sibang and former Green School Bali parent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary shrink-0" />
                <span className="text-primary-foreground/80">
                  Sibang Kaja, Abiansemal,<br />
                  Badung Regency, Bali 80352,<br />
                  Indonesia
                </span>
              </div>
              <a
                href={buildWhatsAppUrl("Hi! I'm interested in the eco villas near Green School Bali.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-secondary shrink-0" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Eco Villa Bali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
