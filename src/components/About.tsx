import { Award, Users, Building, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <div className="inline-block geometric-line mb-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Engineering Excellence Since 2003
            </h2>
            <p className="text-lg text-muted-foreground">
              AAA Engineering Design is a trusted structural engineering firm serving California with precision, innovation, and integrity.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded over 20 years ago, AAA Engineering Design has grown from a small local practice to one of California's most trusted structural engineering firms. Our commitment to excellence, attention to detail, and client-focused approach has earned us a reputation for delivering innovative solutions that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in residential and commercial structural design, seismic retrofitting, foundation engineering, and comprehensive inspection services. Our team of licensed professional engineers brings decades of combined experience to every project.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional structural engineering services that ensure the safety, durability, and integrity of every structure we design. We combine technical expertise with practical solutions, making complex engineering accessible and understandable for our clients.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3">Core Values</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Safety and code compliance above all</li>
                  <li>✓ Innovation in structural solutions</li>
                  <li>✓ Transparent communication with clients</li>
                  <li>✓ Commitment to sustainable design</li>
                  <li>✓ Continuous professional development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Licensed Engineers</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Credentials & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div>Professional Engineer (PE) Licensed</div>
              <div className="hidden md:block">•</div>
              <div>California Building Code Certified</div>
              <div className="hidden md:block">•</div>
              <div>SEAOC Member</div>
              <div className="hidden md:block">•</div>
              <div>Fully Insured & Bonded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
