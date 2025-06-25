import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Home,
  Send,
  MessageSquare,
  Building,
  HardHat,
  Ruler,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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
            <span className="font-medium">Contacto</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              <MessageSquare className="h-4 w-4 mr-2" />
              Conversemos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hagamos realidad su
              <span className="text-secondary block">proyecto juntos</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Estamos aquí para asesorarle y brindarle la mejor solución
              constructiva para sus necesidades. Contáctenos hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Teléfono</h3>
              <p className="text-muted-foreground mb-4">
                Llámanos directamente para consultas inmediatas
              </p>
              <div className="space-y-2">
                <p className="font-medium text-lg">+54 264 511-7015</p>
                <p className="text-sm text-muted-foreground">
                  Lunes a Viernes: 8:00 - 18:00
                </p>
                <p className="text-sm text-muted-foreground">
                  Sábados: 9:00 - 13:00
                </p>
              </div>
              <Button className="mt-4" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-muted-foreground mb-4">
                Envíanos un mensaje detallado sobre tu proyecto
              </p>
              <div className="space-y-2">
                <p className="font-medium">info@baroconstrucciones.com</p>
                <p className="text-sm text-muted-foreground">
                  presupuestos@baroconstrucciones.com
                </p>
                <p className="text-sm text-muted-foreground">
                  Respuesta en menos de 24 horas
                </p>
              </div>
              <Button variant="outline" className="mt-4" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Enviar Email
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Oficina</h3>
              <p className="text-muted-foreground mb-4">
                Visítanos en nuestras oficinas en San Juan
              </p>
              <div className="space-y-2">
                <p className="font-medium">San Luis Oeste 566</p>
                <p className="text-sm text-muted-foreground">
                  Consorcio Americo Clavel 2do piso
                </p>
                <p className="text-sm text-muted-foreground">
                  J5400 San Juan, Argentina
                </p>
              </div>
              <Button variant="outline" className="mt-4" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                Ver Mapa
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Solicite su Cotización
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Complete el formulario con los detalles de su proyecto y nos
                comunicaremos con usted a la brevedad para brindarle una
                propuesta personalizada.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Respuesta Rápida</p>
                    <p className="text-sm text-muted-foreground">
                      Nos comunicamos en menos de 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <HardHat className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Asesoramiento Profesional</p>
                    <p className="text-sm text-muted-foreground">
                      Evaluación técnica sin compromiso
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Building2 className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Presupuesto Detallado</p>
                    <p className="text-sm text-muted-foreground">
                      Cotización completa y transparente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">
                  Formulario de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input id="firstName" placeholder="Su nombre" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido *</Label>
                      <Input id="lastName" placeholder="Su apellido" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="su@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+54 9 264 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo de Proyecto *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione el tipo de proyecto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="obras-civiles">
                          Obras Civiles
                        </SelectItem>
                        <SelectItem value="agrimensura">Agrimensura</SelectItem>
                        <SelectItem value="refacciones">Refacciones</SelectItem>
                        <SelectItem value="construcciones-provider">
                          Construcciones Provider
                        </SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Presupuesto Estimado</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione rango de presupuesto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bajo">Hasta $10,000,000</SelectItem>
                        <SelectItem value="medio">
                          $10,000,000 - $50,000,000
                        </SelectItem>
                        <SelectItem value="alto">
                          $50,000,000 - $100,000,000
                        </SelectItem>
                        <SelectItem value="muy-alto">
                          Más de $100,000,000
                        </SelectItem>
                        <SelectItem value="no-definido">No definido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Cronograma</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="¿Cuándo desea comenzar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inmediato">
                          Inmediatamente
                        </SelectItem>
                        <SelectItem value="1-mes">En el próximo mes</SelectItem>
                        <SelectItem value="3-meses">En 3 meses</SelectItem>
                        <SelectItem value="6-meses">En 6 meses</SelectItem>
                        <SelectItem value="mas-6-meses">
                          Más de 6 meses
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Ubicación del Proyecto</Label>
                    <Input
                      id="location"
                      placeholder="Ciudad, barrio o dirección aproximada"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Descripción del Proyecto *</Label>
                    <Textarea
                      id="message"
                      placeholder="Describa detalladamente su proyecto, incluyendo tamaño, características especiales, plazos, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Solicitud
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario, acepta que nos comuniquemos con
                    usted para brindarle información sobre nuestros servicios.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Quick Access */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesita información específica?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acceda directamente a información detallada sobre cada uno de
              nuestros servicios especializados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Obras Civiles</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Construcción de edificios residenciales y comerciales
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/servicios">
                  Más Info
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Agrimensura</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Medición y relevamiento topográfico profesional
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/servicios">
                  Más Info
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Refacciones</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Renovación y remodelación de espacios existentes
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/servicios">
                  Más Info
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Construcciones Provider</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Proyectos industriales y de gran envergadura
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/servicios">
                  Más Info
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesita Atención Urgente?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Para emergencias en obras o consultas urgentes, estamos
              disponibles las 24 horas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                Línea de Emergencia: +54 264 511-7015
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 mt-4">
              Disponible 24/7 para emergencias en obra y consultas urgentes
            </p>
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

export default Contact;
