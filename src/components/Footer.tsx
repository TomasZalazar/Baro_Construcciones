import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Building2, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center space-x-3 mb-6">
            <Building2 className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-2xl font-bold">BARO</h1>
              <p className="text-sm text-primary-foreground/80">Construcciones SRL</p>
            </div>
          </Link>
          <p className="text-primary-foreground/80 mb-6 max-w-md">
            Especialistas en construcciones civiles, agrimensura y proyectos arquitectónicos. Más de 7 años construyendo el futuro de San Juan.
          </p>
          <div className="flex space-x-4">
            <Button size="sm" variant="secondary">
              <Phone className="h-4 w-4 mr-2" />
              Contactar
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Servicios</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/servicios" className="hover:text-secondary transition-colors">Obras Civiles</Link></li>
            <li><Link to="/servicios" className="hover:text-secondary transition-colors">Agrimensura</Link></li>
            <li><Link to="/servicios" className="hover:text-secondary transition-colors">Refacciones</Link></li>
            <li><Link to="/servicios" className="hover:text-secondary transition-colors">Construcciones Provider</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Empresa</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            <li><Link to="/nosotros" className="hover:text-secondary transition-colors">Nosotros</Link></li>
            <li><Link to="/proyectos" className="hover:text-secondary transition-colors">Proyectos</Link></li>
            <li><Link to="/contacto" className="hover:text-secondary transition-colors">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <Separator className="my-8 bg-primary-foreground/20" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Baro Construcciones SRL. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
