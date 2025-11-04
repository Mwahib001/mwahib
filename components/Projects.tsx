"use client";
import Image from "next/image";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
    >
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
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:shadow-[0_0_25px] hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BLOB_BASE_URL}${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    See Project →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
