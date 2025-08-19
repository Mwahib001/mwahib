"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-black py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="w-full overflow-hidden">
            <h1 className="text-xl md:text-2xl text-white mb-2">
              HELLO, I AM
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 break-words">
              MUHAMMAD WAHIB
            </h1>
            <h2 className="text-xl md:text-2xl text-green-500 mb-6">
              I AM Web Developer
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Passionate about creating innovative web solutions and turning ideas into reality. 
              I specialize in building modern, responsive applications that deliver exceptional user experiences.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact
            </button>
          </div>
          {/* Right Side - Visual Content */}
          <div className="relative">
            {/* Main Circle and Image Container */}
            <div className="relative flex justify-center">
              {/* Green Circle Background */}
              <div className="w-96 h-96 bg-green-500 rounded-full flex items-center justify-center">
                {/* Profile Image */}
                <Image
                  src="/wahib.png"
                  alt="Muhammad Wahib"
                  width={820}
                  height={320}
                  className=""
                />
              </div>
            </div>
            
            {/* Experience Cards - Positioned naturally below the circle */}
            <div className="flex justify-center space-x-4">
              {/* First Experience Card */}
              <div className="bg-gray-800 rounded-xl shadow-xl p-4 w-28 h-28 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-white mb-1">6+</h1>
                <p className="text-xs text-gray-300 text-center leading-tight">Years of Experience</p>
              </div>
              
              {/* Second Experience Card */}
              <div className="bg-gray-800 rounded-xl shadow-xl p-4 w-28 h-28 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold text-white mb-1">100+</h1>
                <p className="text-xs text-gray-300 text-center leading-tight">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
