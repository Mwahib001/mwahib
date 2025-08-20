"use client";
import { useRef } from "react";
import skillsData from "../data/skills.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Skills() {
  // Find the Contact section by id for smooth scroll
  const handleContactScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Skills & Expertise
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative px-8 md:px-12" ref={carouselRef}>
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full group"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {skillsData.map((skill, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-gray-900 rounded-xl p-8 min-h-[370px] flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {skill.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                        {skill.description}
                      </p>
                    </div>
                    <div className="pt-2 mt-auto">
                      <a
                        href="#"
                        onClick={handleContactScroll}
                        className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors"
                      >
                        Contact Me →
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="left-0 -translate-x-2 md:-translate-x-4 bg-transparent hover:bg-green-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 border-2 border-white/20 hover:border-transparent" />
            <CarouselNext className="right-0 translate-x-2 md:translate-x-4 bg-transparent hover:bg-green-500/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 border-2 border-white/20 hover:border-transparent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
