"use client";
import skillsData from "../data/skills.json";

export default function Skills() {
  // Find the Contact section by id for smooth scroll
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4">
            Skills & Expertise
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px] hover:shadow-primary/20 h-full flex flex-col hover:border-primary/50"
            >
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {skill.description}
                </p>
              </div>
              {/* <div className="pt-2 mt-auto">
                <a
                  href="#"
                  onClick={handleContactScroll}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact Me →</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
