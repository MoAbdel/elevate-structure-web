import { Building2, Wrench, ClipboardCheck, Hammer, HardHat, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Structural Design",
    description: "Complete structural engineering design for new construction, additions, and renovations. From concept to completion.",
  },
  {
    icon: Wrench,
    title: "Seismic Retrofitting",
    description: "Strengthen existing structures to meet current seismic codes and ensure building safety during earthquakes.",
  },
  {
    icon: ClipboardCheck,
    title: "Structural Inspections",
    description: "Comprehensive building inspections, damage assessments, and condition reports for residential and commercial properties.",
  },
  {
    icon: Hammer,
    title: "Foundation Engineering",
    description: "Expert foundation design and analysis including soil investigations, retaining walls, and foundation repairs.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "On-site engineering support, plan reviews, and construction phase services to ensure proper implementation.",
  },
  {
    icon: FileText,
    title: "Permit Services",
    description: "Full-service permit processing, code compliance review, and coordination with local building departments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block geometric-line mb-4">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial design to final approval, we provide expert structural engineering services tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which service you need? We're here to help.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-accent hover:underline font-medium"
          >
            Contact us for a free consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
