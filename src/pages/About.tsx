import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  HardHat,
  Phone,
  ChevronRight,
  Users,
  Home,
  Award,
  Shield,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Ing. Carlos Baro",
      position: "Director General",
      specialty: "Ingeniería Civil",
      experience: "25 años",
      description:
        "Ingeniero civil con amplia experiencia en gestión de proyectos de gran envergadura.",
    },
    {
      name: "Arq. María Fernández",
      position: "Directora de Proyectos",
      specialty: "Arquitectura",
      experience: "18 años",
      description:
        "Arquitecta especializada en diseño sostenible y proyectos residenciales.",
    },
    {
      name: "Agrim. Pedro Sánchez",
      position: "Jefe de Agrimensura",
      specialty: "Agrimensura",
      experience: "22 años",
      description:
        "Agrimensor profesional especializado en mensuras y loteos urbanos.",
    },
    {
      name: "Ing. Ana García",
      position: "Gerente de Obras",
      specialty: "Gestión de Obras",
      experience: "15 años",
      description:
        "Especialista en supervisión y control de calidad en obras civiles.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Calidad",
      description:
        "Utilizamos materiales de primera calidad y seguimos los más altos estándares constructivos en cada proyecto.",
    },
    {
      icon: CheckCircle,
      title: "Confiabilidad",
      description:
        "Cumplimos con los plazos acordados y mantenemos una comunicación transparente con nuestros clientes.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description:
        "Nos comprometemos con cada proyecto como si fuera propio, garantizando resultados excepcionales.",
    },
    {
      icon: Award,
      title: "Excelencia",
      description:
        "Buscamos la perfección en cada detalle, superando las expectativas de nuestros clientes.",
    },
  ];

  const milestones = [
    {
      year: "2001",
      title: "Fundación de la Empresa",
      description:
        "Inicio de actividades con proyectos residenciales en San Juan.",
    },
    {
      year: "2005",
      title: "Primer Proyecto Institucional",
      description:
        "Construcción de edificio educativo que marcó nuestra entrada al sector público.",
    },
    {
      year: "2010",
      title: "Expansión de Servicios",
      description:
        "Incorporación de servicios de agrimensura y desarrollo urbanístico.",
    },
    {
      year: "2015",
      title: "Certificación ISO",
      description:
        "Obtención de certificaciones de calidad y gestión ambiental.",
    },
    {
      year: "2020",
      title: "500 Proyectos Completados",
      description:
        "Alcanzamos el hito de 500 proyectos exitosamente completados.",
    },
    {
      year: "2024",
      title: "Innovación Tecnológica",
      description:
        "Implementación de tecnologías BIM y construcción sustentable.",
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
            <span className="font-medium">Nosotros</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              <Users className="h-4 w-4 mr-2" />
              Conoce Nuestro Equipo
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Más de 20 años construyendo
              <span className="text-secondary block">confianza</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Somos un equipo de profesionales apasionados por la construcción,
              comprometidos con la calidad y la innovación en cada proyecto que
              emprendemos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones constructivas integrales de la más alta
                calidad, contribuyendo al desarrollo urbano sustentable de San
                Juan y mejorando la calidad de vida de nuestros clientes a
                través de proyectos innovadores y responsables.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa constructora líder en la región, reconocida por
                nuestra excelencia, innovación y compromiso con el desarrollo
                sostenible, siendo la primera opción para proyectos de
                construcción civil y agrimensura.
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integridad, responsabilidad, calidad, innovación y respeto por
                el medio ambiente guían cada una de nuestras decisiones y
                acciones en el desarrollo de nuestros proyectos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un recorrido de más de dos décadas construyendo sueños y
              desarrollando la infraestructura de San Juan.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura
              empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesionales altamente calificados con la experiencia y pasión
              necesaria para llevar adelante proyectos exitosos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary/30" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.specialty}
                  </p>
                  <Badge variant="outline" className="mb-4">
                    {member.experience} de experiencia
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Números que nos Respaldan
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Más de dos décadas de trabajo constante se reflejan en estos
              números que demuestran nuestro compromiso y crecimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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
              <h3 className="text-4xl font-bold text-secondary mb-2">50+</h3>
              <p className="text-primary-foreground/80">Profesionales</p>
            </div>

            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">23</h3>
              <p className="text-primary-foreground/80">Años de Experiencia</p>
            </div>

            <div>
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-primary-foreground/80">Satisfacción Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos encontramos estratégicamente ubicados en el corazón de San
              Juan para brindar un mejor servicio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Visitanos en Nuestras Oficinas
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground">
                      San Luis Oeste 566, Consorcio Americo Clavel 2do piso
                    </p>
                    <p className="text-muted-foreground">
                      J5400 San Juan, Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+54 264 511-7015</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      info@baroconstrucciones.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg">
                  <MapPin className="h-5 w-5 mr-2" />
                  Ver en Google Maps
                </Button>
              </div>
            </div>

            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <MapPin className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              ¿Quiere conocer más sobre nosotros?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos siempre disponibles para conversar sobre su proyecto y
              explicarle cómo nuestro equipo puede ayudarle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                Contactar Ahora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Ver Proyectos
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
              © 2025 Baro Construcciones SRL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
