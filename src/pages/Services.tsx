import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  HardHat,
  Ruler,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Users,
  Wrench,
  Home,
  Building,
  Hammer,
  PaintBucket,
  Cog,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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
            <span className="font-medium">Servicios</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              <HardHat className="h-4 w-4 mr-2" />
              Servicios Profesionales
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Soluciones integrales en
              <span className="text-secondary block">construcción</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Ofrecemos una amplia gama de servicios especializados para cubrir
              todas las necesidades de su proyecto constructivo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {/* Obras Civiles */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Obras Civiles</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Especializados en la construcción de edificios residenciales,
                  comerciales e institucionales. Utilizamos las mejores técnicas
                  constructivas y materiales de primera calidad para garantizar
                  la durabilidad y seguridad de cada proyecto.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Edificios residenciales y condominios</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Construcciones comerciales e industriales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Proyectos institucionales y públicos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Infraestructura civil especializada</span>
                  </div>
                </div>
                <Button>
                  Solicitar Cotización
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Building className="h-32 w-32 text-primary/30" />
              </div>
            </div>

            <Separator />

            {/* Agrimensura */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <Ruler className="h-32 w-32 text-primary/30" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Ruler className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Agrimensura</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Servicios profesionales de medición, relevamiento topográfico
                  y cartografía. Nuestro equipo de agrimensores certificados
                  utiliza tecnología de última generación para brindar
                  resultados precisos y confiables.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Levantamientos topográficos y planialtimétricos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Subdivisiones y loteos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Mensuras y amojonamientos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Certificados de aptitud ambiental</span>
                  </div>
                </div>
                <Button>
                  Consultar Servicios
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Refacciones */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Refacciones</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Transformamos espacios existentes con renovaciones integrales
                  y remodelaciones que combinan funcionalidad, estética y valor
                  agregado. Desde pequeñas reformas hasta renovaciones
                  completas.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Remodelaciones integrales de viviendas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Ampliaciones y modificaciones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Renovación de baños y cocinas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Restauración de fachadas</span>
                  </div>
                </div>
                <Button>
                  Ver Proyectos
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Home className="h-32 w-32 text-primary/30" />
              </div>
            </div>

            <Separator />

            {/* Construcciones Provider */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                <Wrench className="h-32 w-32 text-primary/30" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    Construcciones Provider
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Soluciones especializadas para proyectos industriales y de
                  gran envergadura. Trabajamos como contratistas principales o
                  subcontratistas en obras de infraestructura y construcciones
                  especiales.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Construcciones industriales especializadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Infraestructura vial y sanitaria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Montaje de estructuras metálicas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>Proyectos de energía renovable</span>
                  </div>
                </div>
                <Button>
                  Consultar Proyectos
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Servicios Complementarios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios adicionales para completar integralmente su
              proyecto constructivo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hammer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">Demoliciones</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Demoliciones controladas y limpieza de terrenos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PaintBucket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">
                  Pintura y Acabados
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Pintura profesional y terminaciones de calidad
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">Instalaciones</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Instalaciones eléctricas, sanitarias y de gas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">Asesoramiento</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Consultoría técnica y asesoramiento profesional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seguimos un proceso estructurado que garantiza la calidad y el
              cumplimiento de plazos en cada proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Consulta Inicial</h3>
              <p className="text-muted-foreground">
                Analizamos sus necesidades y realizamos una evaluación
                preliminar del proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Propuesta y Presupuesto
              </h3>
              <p className="text-muted-foreground">
                Elaboramos una propuesta detallada con presupuesto y cronograma
                de trabajo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Ejecución</h3>
              <p className="text-muted-foreground">
                Iniciamos la construcción siguiendo los más altos estándares de
                calidad y seguridad.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4">Entrega Final</h3>
              <p className="text-muted-foreground">
                Realizamos la entrega del proyecto completo con garantía de
                calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Necesita más información sobre nuestros servicios?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Contáctenos para una consulta personalizada y descubra cómo
              podemos ayudarle con su proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                +54 264 511-7015
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5 mr-2" />
                Solicitar Cotización
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
                <li>Obras Civiles</li>
                <li>Agrimensura</li>
                <li>Refacciones</li>
                <li>Construcciones Provider</li>
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

export default Services;
