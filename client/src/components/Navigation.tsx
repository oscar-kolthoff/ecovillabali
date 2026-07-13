import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentVilla?: "sungai" | "kailash";
}

export default function Navigation({ currentVilla = "sungai" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Pages that should always show scrolled-down styling
  const alwaysScrolledPages = ["/location", "/lifestyle", "/green-school-villa-bali", "/faq", "/inquire-now"];
  const shouldForceScrolled = alwaysScrolledPages.includes(location);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const displayScrolled = isScrolled || shouldForceScrolled;

  // Highlight only the active page's link in yellow/orange; all others follow
  // the readable default (white over the hero, dark once scrolled).
  const linkColor = (href: string) => {
    if (location === href) return displayScrolled ? "text-accent" : "text-secondary";
    return displayScrolled
      ? "text-foreground/80 hover:text-accent"
      : "text-white/90 hover:text-accent";
  };
  const mobileLinkColor = (href: string) =>
    location === href ? "text-accent" : "text-foreground";

  const navLinks = [
    { label: "Location", href: "/location" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Green School Bali", href: "/green-school-villa-bali" },
    { label: "FAQ", href: "/faq" },
    { label: "Inquire Now", href: "/inquire-now" },
  ];

  const villaLinks = [
    { label: "Villa Sungai", href: "/villa-sungai" },
    { label: "Villa Kailash", href: "/villa-kailash" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for anchor links (starting with #)
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        displayScrolled
          ? "bg-background/90 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className={cn(
          "font-serif text-2xl font-bold tracking-tighter transition-colors",
          displayScrolled ? "text-foreground" : "text-white"
        )}>
          Eco Villa Bali
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Villa Links */}
          {villaLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-bold tracking-wide transition-colors",
                linkColor(link.href)
              )}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {link.label}
            </Link>
          ))}

          {/* Page Links */}
          {navLinks.map((link) => {
            const isInquireLink = link.label === "Inquire Now";
            return isInquireLink ? (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full px-6 py-2 font-serif transition-all hover:scale-105 text-sm font-bold tracking-wide",
                  displayScrolled 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  linkColor(link.href)
                )}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={displayScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={displayScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-6">
            {/* Villa Links */}
            {villaLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-lg font-serif font-bold hover:text-accent",
                  mobileLinkColor(link.href)
                )}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Page Links */}
            {navLinks.map((link) => {
              const isInquireLink = link.label === "Inquire Now";
              return isInquireLink ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-lg font-serif font-bold text-primary hover:text-accent"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-lg font-serif font-medium hover:text-accent",
                    mobileLinkColor(link.href)
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
