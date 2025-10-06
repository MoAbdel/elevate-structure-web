import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    preferredDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Success state
    setSubmitted(true);
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-border text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Appointment Request Received!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for choosing AAA Engineering Design. We'll review your request and contact you within 24 hours to confirm your appointment details.
              </p>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-2">What's Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• We'll call or email you to confirm your preferred date and time</li>
                  <li>• Discuss your project needs in detail</li>
                  <li>• Provide preliminary information about our services</li>
                  <li>• Answer any questions you may have</li>
                </ul>
              </div>
              <Button
                variant="outline"
                onClick={() => setSubmitted(false)}
              >
                Schedule Another Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block geometric-line mb-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Book Consultation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss your project needs. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <Card className="md:col-span-2 border-border">
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
                <CardDescription>
                  Tell us about your project and preferred appointment time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleChange("projectType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="structural-design">Structural Design</SelectItem>
                        <SelectItem value="seismic-retrofit">Seismic Retrofitting</SelectItem>
                        <SelectItem value="inspection">Structural Inspection</SelectItem>
                        <SelectItem value="foundation">Foundation Engineering</SelectItem>
                        <SelectItem value="construction-mgmt">Construction Management</SelectItem>
                        <SelectItem value="permits">Permit Services</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date & Time</Label>
                    <Input
                      id="preferredDate"
                      type="datetime-local"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll do our best to accommodate your preference, but will confirm availability
                    </p>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us more about your project, location, timeline, or any specific questions..."
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Response Time</p>
                    <p className="text-muted-foreground">We'll contact you within 24 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Consultation Duration</p>
                    <p className="text-muted-foreground">Initial consultations typically last 30-60 minutes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Availability</p>
                    <p className="text-muted-foreground">Monday - Friday, 8:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-accent/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>During your appointment, we'll:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Review your project requirements</li>
                    <li>• Discuss timeline and budget</li>
                    <li>• Explain our process and services</li>
                    <li>• Answer all your questions</li>
                    <li>• Provide preliminary recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
