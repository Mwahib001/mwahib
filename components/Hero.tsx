"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-background py-12 md:py-20 overflow-x-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="w-full overflow-hidden">
            <h1 className="text-xl md:text-2xl text-foreground mb-2">
              <span className="text-primary">HELLO, I AM</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 break-words">
              MUHAMMAD WAHIB
            </h1>
            <h2 className="text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6">
              I am Final Year Student of BS Software Engineering
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              As a Software Engineer, I bring a strong engineering mindset into
              web development, creating scalable products with clean code,
              modern tools, and thoughtful architecture.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px] hover:shadow-primary/40">
              Contact
            </button>
          </div>
          {/* Right Side - Visual Content */}
          <div className="relative">
            {/* Main Circle and Image Container */}
            <div className="relative flex flex-col items-center">
              {/* Green Circle with Image */}
              <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full overflow-hidden flex items-center justify-center border border-primary/30 shadow-[0_0_30px] shadow-primary/20">
                <Image
                  src="/wahib.png"
                  alt="Muhammad Wahib"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Experience Cards - Positioned below the circle */}
              <div className="mt-6 w-full flex justify-center gap-4">
                {/* First Experience Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-3 w-32 h-24 flex flex-col justify-center items-center hover:border-primary/50 transition-all duration-300">
                  <h1 className="text-2xl font-bold text-foreground mb-1">
                    1+
                  </h1>
                  <p className="text-xs text-muted-foreground text-center leading-tight">
                    Years of Experience
                  </p>
                </div>

                {/* Second Experience Card */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl shadow-lg p-3 w-32 h-24 flex flex-col justify-center items-center hover:border-primary/50 transition-all duration-300">
                  <h1 className="text-2xl font-bold text-foreground mb-1">
                    4+
                  </h1>
                  <p className="text-xs text-muted-foreground text-center leading-tight">
                    Completed Projects of Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
