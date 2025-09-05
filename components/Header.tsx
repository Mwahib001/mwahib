"use client";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page reload
      window.history.pushState({}, '', href);
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm shadow-sm border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Name */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold text-foreground font-sans tracking-wider hover:text-primary transition-colors"
          >
            Muhammad Wahib
          </a>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground/90 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/10"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-primary/40"
              >
                Contact me
              </a>
            </div>
            <div className="border-l border-border h-6"></div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-background border-t border-border/50`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t">
            {navigation.map((item) => (
              <a
                key={`mobile-${item.name}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white hover:text-green-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent/10 transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
