import { useState } from "react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Commercial Steel Structure",
    category: "Commercial",
    location: "San Francisco, CA",
    image: project1,
    description: "Multi-story commercial building with exposed steel framework and modern design elements.",
  },
  {
    id: 2,
    title: "Modern Residential Design",
    category: "Residential",
    location: "Palo Alto, CA",
    image: project2,
    description: "Contemporary two-story residence with clean architectural lines and large windows.",
  },
  {
    id: 3,
    title: "Foundation & Structural Support",
    category: "Commercial",
    location: "San Jose, CA",
    image: project3,
    description: "Complex foundation system with advanced rebar design and concrete formwork.",
  },
  {
    id: 4,
    title: "Seismic Retrofit Project",
    category: "Retrofit",
    location: "Oakland, CA",
    image: project4,
    description: "Building reinforcement and seismic upgrade for improved structural integrity.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Retrofit"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <div className="inline-block geometric-line mb-4">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing our commitment to structural excellence and innovative engineering solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-accent text-accent-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-accent/90 rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/80 mb-2">{project.location}</p>
                  <p className="text-sm text-primary-foreground/90">{project.description}</p>
                </div>
              </div>

              {/* Static Info Bar */}
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
