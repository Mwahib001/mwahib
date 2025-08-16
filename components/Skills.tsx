"use client";
import { useState, useEffect } from "react";

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const skillsData = [
    {
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks. Creating responsive and interactive user interfaces with clean, maintainable code.",
      link: "Hello →"
    },
    {
      title: "Backend Development",
      description: "Proficient in Node.js, Express, Python, and database management. Building scalable APIs and server-side applications with best practices.",
      link: "Hello →"
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development expertise combining frontend and backend technologies. Delivering complete web applications with optimal performance.",
      link: "Hello →"
    }
  ];

  const nextSlide = () => {
    const maxSlides = Math.max(0, skillsData.length - slidesToShow);
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4">
            Skills & Expertise
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Carousel Track */}
          <div className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}>
            {skillsData.map((skill, index) => (
              <div key={index} className={`flex-shrink-0 px-4 ${slidesToShow === 3 ? 'w-1/3' : slidesToShow === 2 ? 'w-1/2' : 'w-full'}`}>
                <div className="bg-gray-900 rounded-xl p-8 h-80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a 
                      href="#" 
                      className="inline-flex items-center text-green-500 hover:text-green-400 font-medium transition-colors"
                    >
                      {skill.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, skillsData.length - slidesToShow + 1) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-500' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
