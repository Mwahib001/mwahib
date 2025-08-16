"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hello, I am <span className="text-green-600">Muhammad Wahib</span>
            </h1>
            <p className="text-lg text-gray-700">
              I am a <span className="font-semibold">Full Stack Web Developer</span>
            </p>
          </div>

          {/* Right Side - Circle + Image */}
          <div className="relative flex justify-center items-center h-80">
            {/* Green Circle */}
            <div className="absolute w-64 h-64 bg-green-500 rounded-full"></div>
            
            {/* Image above circle */}
            <Image
              src="/profile.png" // 👉 replace with your image path
              alt="Muhammad Wahib"
              width={220}
              height={220}
              className="relative rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
