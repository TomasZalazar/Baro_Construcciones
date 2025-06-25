import { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const phone = "+54 264 511-7015";
const whatsapp = "https://wa.me/542645117015?text=Hola%20Baro%20Construcciones%2C%20quisiera%20hacer%20una%20consulta";
const email = "info@baroconstrucciones.com";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useSmoothScroll();

  const navLinks = [
    { label: "Inicio", path: "/", sectionId: "hero" },
    { label: "Servicios", path: "/servicios", sectionId: "services-hero" },
    { label: "Proyectos", path: "/proyectos", sectionId: "projects-hero" },
    { label: "Nosotros", path: "/nosotros", sectionId: "about-hero" },
    { label: "Contacto", path: "/contacto", sectionId: "contact-hero" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Topbar integrada */}
      <div className="w-full bg-white text-primary text-xs py-1 px-2 flex items-center justify-center gap-2 shadow-sm md:justify-end md:px-8 border-b border-muted min-h-[28px]">
        <div className="flex items-center gap-2 flex-wrap md:gap-4 md:text-sm">
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1 hover:text-secondary transition-colors min-w-0 md:gap-2"
          >
            <Phone className="h-3 w-3 min-w-[12px] md:h-4 md:w-4" />
            <span className="truncate md:text-base">{phone}</span>
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-secondary transition-colors min-w-0 md:gap-2"
          >
            <MessageCircle className="h-3 w-3 min-w-[12px] md:h-4 md:w-4" />
            <span className="truncate md:text-base">WhatsApp</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 hover:text-secondary transition-colors min-w-0 md:gap-2"
          >
            <Mail className="h-3 w-3 min-w-[12px] md:h-4 md:w-4" />
            <span className="truncate md:text-base">{email}</span>
          </a>
        </div>
      </div>
      {/* Navbar principal */}
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo (scroll suave al inicio) */}
          <button
            className="flex items-center space-x-3 flex-shrink-0 group focus:outline-none cursor-pointer bg-transparent border-0 p-0"
            aria-label="Ir al inicio"
            onClick={() => scrollToSection("hero", "/")}
            tabIndex={0}
          >
            <Building className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
            <div>
              <h1 className="text-2xl font-bold">BARO</h1>
              <p className="text-sm text-primary-foreground/80">
                Construcciones SRL
              </p>
            </div>
          </button>
          {/* Burger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="hover:text-secondary transition-colors font-medium bg-transparent border-0 p-0 cursor-pointer"
                  onClick={() => scrollToSection(link.sectionId, link.path)}
                  tabIndex={0}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          {/* Contact button desktop */}
          <div className="hidden md:flex ml-8">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("about-ubicacion", "/nosotros")}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contactar
            </Button>
          </div>
          {/* Mobile nav vertical drawer mejorado */}
          <div
            className={`fixed inset-0 z-[100] transition-all duration-300 md:hidden ${
              isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            {/* Drawer */}
            <div
              className={`absolute top-0 right-0 h-full w-72 max-w-[90vw] bg-primary shadow-2xl flex flex-col pt-8 px-6 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-primary-foreground"
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg bg-transparent border-0"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setTimeout(
                        () => scrollToSection(link.sectionId, link.path),
                        120
                      );
                    }}
                    tabIndex={0}
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full mt-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(
                      () => scrollToSection("about-ubicacion", "/nosotros"),
                      120
                    );
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
