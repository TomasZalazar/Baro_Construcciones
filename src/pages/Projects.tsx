import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  HardHat,
  Phone,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Home,
  Building,
  Factory,
  Banknote,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "SEDE APOPS",
      category: "Institucional",
      location: "San Juan Centro",
      year: "2023",
      description:
        "Construcción de moderno edificio institucional con diseño contemporáneo y funcionalidades de última generación para albergar las oficinas centrales de APOPS.",
      features: [
        "5 Plantas",
        "2,500 m²",
        "Ascensores",
        "Climatización Central",
      ],
      status: "Completado",
      image: "institucional",
    },
    {
      id: 2,
      title: "LOTEOS ADICUS",
      category: "Urbanismo",
      location: "Zona Norte, San Juan",
      year: "2022-2024",
      description:
        "Desarrollo urbanístico integral con infraestructura completa, incluyendo calles pavimentadas, redes de servicios y espacios verdes comunitarios.",
      features: [
        "120 Lotes",
        "Infraestructura completa",
        "Espacios verdes",
        "Seguridad",
      ],
      status: "En Desarrollo",
      image: "urbanismo",
    },
    {
      id: 3,
      title: "PLAZA BOLAÑOS - MEDANO DE ORO",
      category: "Comercial",
      location: "Medano de Oro",
      year: "2023",
      description:
        "Centro comercial moderno con espacios innovadores, diseñado para brindar una experiencia de compra única con arquitectura contemporánea.",
      features: [
        "15 Locales",
        "Estacionamiento",
        "Food Court",
        "Seguridad 24/7",
      ],
      status: "Completado",
      image: "comercial",
    },
  ];

  const allProjects = [
    {
      title: "Edificio Residencial Los Álamos",
      category: "Residencial",
      year: "2023",
      location: "Barrio Concepción",
    },
    {
      title: "Complejo Industrial Zonda",
      category: "Industrial",
      year: "2022",
      location: "Parque Industrial",
    },
    {
      title: "Centro de Salud Rivadavia",
      category: "Institucional",
      year: "2022",
      location: "Rivadavia",
    },
    {
      title: "Barrio Cerrado San Martín",
      category: "Urbanismo",
      year: "2021",
      location: "Capital",
    },
    {
      title: "Oficinas Corporativas Mendoza",
      category: "Comercial",
      year: "2021",
      location: "Rawson",
    },
    {
      title: "Ampliación Hospital Marcial Quiroga",
      category: "Institucional",
      year: "2020",
      location: "Capital",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Proyectos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              <Building className="h-4 w-4 mr-2" />
              Nuestros Proyectos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Construyendo el futuro de
              <span className="text-secondary block">San Juan</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Cada proyecto es una oportunidad para crear espacios que mejoren
              la calidad de vida de las personas y contribuyan al desarrollo de
              nuestra comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce algunos de nuestros proyectos más emblemáticos que
              demuestran nuestro compromiso con la excelencia y la innovación.
            </p>
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge
                      variant={
                        project.status === "Completado"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">
                      Características
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button>
                    <Eye className="h-4 w-4 mr-2" />
                    Ver Detalles
                  </Button>
                </div>

                <div
                  className={`aspect-square rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div
                    className={`h-full w-full bg-gradient-to-br flex items-center justify-center relative
                    ${
                      project.image === "institucional"
                        ? "from-blue-100 to-blue-200"
                        : project.image === "urbanismo"
                          ? "from-green-100 to-green-200"
                          : "from-orange-100 to-orange-200"
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/10"></div>
                    {project.image === "institucional" && (
                      <Building className="h-32 w-32 text-blue-600/40" />
                    )}
                    {project.image === "urbanismo" && (
                      <Home className="h-32 w-32 text-green-600/40" />
                    )}
                    {project.image === "comercial" && (
                      <Factory className="h-32 w-32 text-orange-600/40" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Otros Proyectos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una muestra de la diversidad y calidad de nuestros trabajos a lo
              largo de los años.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6 flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-primary/40" />
                  </div>

                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Ver Proyecto
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">500+</h3>
              <p className="text-primary-foreground/80">
                Proyectos Completados
              </p>
            </div>

            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">1000+</h3>
              <p className="text-primary-foreground/80">
                Familias Beneficiadas
              </p>
            </div>

            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <HardHat className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">50,000</h3>
              <p className="text-primary-foreground/80">m² Construidos</p>
            </div>

            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Banknote className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">$500M</h3>
              <p className="text-primary-foreground/80">Valor en Proyectos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Tiene un proyecto en mente?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conversemos sobre cómo podemos hacer realidad su visión
              constructiva con la calidad y experiencia que nos caracteriza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                Consultar Ahora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Ver Más Proyectos
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Building2 className="h-8 w-8 text-secondary" />
                <div>
                  <h1 className="text-2xl font-bold">BARO</h1>
                  <p className="text-sm text-primary-foreground/80">
                    Construcciones SRL
                  </p>
                </div>
              </Link>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Especialistas en construcciones civiles, agrimensura y proyectos
                arquitectónicos. Más de 20 años construyendo el futuro de San
                Juan.
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
                <li>
                  <Link
                    to="/servicios"
                    className="hover:text-secondary transition-colors"
                  >
                    Obras Civiles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="hover:text-secondary transition-colors"
                  >
                    Agrimensura
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="hover:text-secondary transition-colors"
                  >
                    Refacciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicios"
                    className="hover:text-secondary transition-colors"
                  >
                    Construcciones Provider
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Empresa</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link
                    to="/nosotros"
                    className="hover:text-secondary transition-colors"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    to="/proyectos"
                    className="hover:text-secondary transition-colors"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="hover:text-secondary transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-primary-foreground/20" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Baro Construcciones SRL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
