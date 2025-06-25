import { useState } from "react";
import { Link } from "react-router-dom";
import { Building, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Building className="h-8 w-8 text-secondary" />
          <div>
            <h1 className="text-2xl font-bold">BARO</h1>
            <p className="text-sm text-primary-foreground/80">
              Construcciones SRL
            </p>
          </div>
        </div>
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
            <Link
              to="/"
              className="hover:text-secondary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="hover:text-secondary transition-colors font-medium"
            >
              Servicios
            </Link>
            <Link
              to="/proyectos"
              className="hover:text-secondary transition-colors font-medium"
            >
              Proyectos
            </Link>
            <Link
              to="/nosotros"
              className="hover:text-secondary transition-colors font-medium"
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="hover:text-secondary transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>
        </div>
        {/* Contact button desktop */}
        <div className="hidden md:flex ml-8">
          <Button variant="secondary" size="sm">
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
              <Link
                to="/"
                className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/servicios"
                className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/proyectos"
                className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                to="/nosotros"
                className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                className="py-2 px-4 w-full text-center hover:text-secondary transition-colors font-semibold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
