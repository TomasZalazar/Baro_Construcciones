import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
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
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  // Scroll helpers para anclas
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              <HardHat className="h-4 w-4 mr-2" />
              Más de 7 años construyendo confianza
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Construimos el futuro de la
              <span className="text-secondary block">arquitectura moderna</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl">
              Especialistas en proyectos arquitectónicos, agrimensura y
              construcciones civiles e infraestructura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver Proyectos
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-muted-foreground hover:bg-background-foreground hover:text-muted-foreground"
              >
                <a
                  href="https://wa.me/542645117015"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="flex items-center"
                >
                  <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                  +54 264 511-7015
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Soluciones integrales en construcción
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos servicios especializados que cubren todas las etapas de
              su proyecto de construcción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Obras Civiles</h3>
                <p className="text-muted-foreground mb-4">
                  Construcción de edificios residenciales y comerciales con los
                  más altos estándares de calidad.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  <span className="text-sm font-medium">Más información</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Ruler className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Agrimensura</h3>
                <p className="text-muted-foreground mb-4">
                  Servicios profesionales de medición y levantamiento
                  topográfico para todos sus proyectos.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  <span className="text-sm font-medium">Más información</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Refacciones</h3>
                <p className="text-muted-foreground mb-4">
                  Renovación y remodelación de espacios existentes con técnicas
                  modernas y materiales de calidad.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  <span className="text-sm font-medium">Más información</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Construcciones Provider
                </h3>
                <p className="text-muted-foreground mb-4">
                  Soluciones especializadas en construcción industrial y
                  proyectos de gran envergadura.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:text-secondary transition-colors">
                  <span className="text-sm font-medium">Más información</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="proyectos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Proyectos Destacados
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Nuestros trabajos más recientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada proyecto es único y refleja nuestro compromiso con la
              excelencia y la innovación.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-secondary">Residencial</Badge>
                  <h3 className="text-xl font-bold">SEDE APOPS</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Construcción de edificio institucional con diseño moderno y
                  funcional.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Detalles
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-secondary">Urbanismo</Badge>
                  <h3 className="text-xl font-bold">LOTEOS ADICUS</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Desarrollo urbanístico integral con infraestructura completa.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Detalles
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="mb-2 bg-secondary">Comercial</Badge>
                  <h3 className="text-xl font-bold">PLAZA BOLAÑOS</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Centro comercial moderno en Medano de Oro con espacios
                  innovadores.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ver Detalles
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Ver Todos los Proyectos
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
                ¿Por qué elegirnos?
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Más de 7 años construyendo confianza
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Somos líderes en el sector constructor con un equipo de
                profesionales comprometidos con la excelencia.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Experiencia Comprobada
                    </h3>
                    <p className="text-primary-foreground/80">
                      Más de dos décadas de experiencia en el sector de la
                      construcción en San Juan y región.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Calidad Garantizada
                    </h3>
                    <p className="text-primary-foreground/80">
                      Utilizamos materiales de primera calidad y seguimos los
                      más altos estándares de construcción.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cumplimiento de Plazos
                    </h3>
                    <p className="text-primary-foreground/80">
                      Nos comprometemos a entregar todos nuestros proyectos en
                      tiempo y forma.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-secondary/10 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary">500+</h3>
                    <p className="text-primary-foreground/80">
                      Proyectos Completados
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary">7+</h3>
                    <p className="text-primary-foreground/80">
                      Años de Experiencia
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary">100%</h3>
                    <p className="text-primary-foreground/80">
                      Satisfacción Cliente
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <HardHat className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-secondary">50+</h3>
                    <p className="text-primary-foreground/80">Profesionales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contacto" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Listo para comenzar su proyecto?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctenos para una consulta gratuita y descubra cómo podemos
              hacer realidad su visión constructiva.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                Llamar Ahora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-muted-foreground">+54 264 511-7015</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@baroconstrucciones.com
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-muted-foreground">
                  San Luis Oeste 566, San Juan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
