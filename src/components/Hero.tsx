import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
              <span className="text-accent font-semibold">Licensed & Certified Engineers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Engineering Innovation.
              <br />
              <span className="text-accent">Structural Excellence.</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Serving California with precision structural design, comprehensive inspections, and expert engineering solutions for over 20 years.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              Schedule an Appointment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-primary-foreground">20+ Years</h3>
              <p className="text-sm text-primary-foreground/70">Industry Experience</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-primary-foreground">Fully Licensed</h3>
              <p className="text-sm text-primary-foreground/70">Professional Engineers</p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="font-semibold text-primary-foreground">500+ Projects</h3>
              <p className="text-sm text-primary-foreground/70">Successfully Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
