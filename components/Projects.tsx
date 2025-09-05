"use client";
import Image from "next/image";

export default function Projects() {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/project1.jpg",
      link: "See Project →"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/project2.jpg",
      link: "See Project →"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.",
      image: "/project3.jpg",
      link: "See Project →"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-[0_0_25px] hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{project.link}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
