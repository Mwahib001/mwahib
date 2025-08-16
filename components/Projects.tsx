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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors"
                >
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
