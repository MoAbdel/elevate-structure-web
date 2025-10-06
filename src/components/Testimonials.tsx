import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Menlo Park, CA",
    content: "AAA Engineering Design made our home addition project seamless. Their attention to detail and expertise in structural design gave us complete confidence. Highly professional and responsive throughout.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    location: "San Francisco, CA",
    content: "We've worked with AAA on multiple commercial projects. Their engineering solutions are always innovative, cost-effective, and delivered on time. True professionals in every sense.",
    rating: 5,
  },
  {
    name: "Jennifer Martinez",
    role: "General Contractor",
    location: "San Jose, CA",
    content: "As a contractor, I rely on AAA for all my structural engineering needs. Their plans are thorough, code-compliant, and make the permitting process much smoother. Can't recommend them enough.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block geometric-line mb-4">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Building trust through exceptional service and engineering excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-accent/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Licensed Engineers</p>
            <p className="text-xs text-muted-foreground">Professional Certification</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Insured & Bonded</p>
            <p className="text-xs text-muted-foreground">Full Coverage</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">20+ Years</p>
            <p className="text-xs text-muted-foreground">Industry Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
