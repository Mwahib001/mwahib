"use client";

const techStack = [
  { name: "HTML", logo: "/logos/html.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "TypeScript", logo: "/logos/icons8-typescript-24.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Vue", logo: "/logos/vue.png" },
  { name: "Angular", logo: "/logos/angulaar.png" },
  { name: "Nuxt.js", logo: "/logos/nuxt.png" },
  { name: "Vite", logo: "/logos/icons8-vite-48.png" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "Tailwind CSS", logo: "/logos/icons8-tailwind-css-48.png" },
  { name: "MongoDB", logo: "/logos/mngdb.png" },
  { name: "PostgreSQL", logo: "/logos/icons8-postgres-48.png" },
  { name: "MySQL", logo: "/logos/sql.png" },
  { name: "Supabase", logo: "/logos/icons8-supabase-48.png" },
  { name: "PayloadCMS", logo: "/logos/PayloadIconBlack.svg" },
  { name: "Strapi", logo: "/logos/strapi.svg" },
  { name: "Git", logo: "/logos/git.png" },
  { name: "GitHub", logo: "/logos/github.png" },
  { name: "GitHub Copilot", logo: "/logos/github-copilot-icon.png" },
  { name: "Cursor", logo: "/logos/APP_ICON_3D_DARK.png" },
  { name: "Flutter", logo: "/logos/flutter.png" },
  { name: "Kotlin", logo: "/logos/kotlin.png" },
  { name: "Firebase", logo: "/logos/firebase.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "C++", logo: "/logos/c-.png" },
  { name: "Solidity", logo: "/logos/icons8-solidity-48.png" },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={tech.logo}
                alt={tech.name}
                className={`w-12 h-12 mb-2 object-contain ${["GitHub", "PayloadCMS", "GitHub Copilot"].includes(tech.name) ? "bg-white rounded p-1" : ""}`}
              />
              <p className="text-xs font-medium text-foreground text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}