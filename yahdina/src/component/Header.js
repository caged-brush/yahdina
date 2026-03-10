"use client";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <a
          href="/"
          className="text-white text-lg md:text-2xl font-light tracking-wide"
        >
          Yahdina Chambers
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-white text-base lg:text-lg font-light">
          <a href="#about" className="transition hover:opacity-80">
            About
          </a>
          <a href="#practice" className="transition hover:opacity-80">
            Practice Areas
          </a>
          <a href="#services" className="transition hover:opacity-80">
            Services
          </a>
          <a href="#contact" className="transition hover:opacity-80">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg">
          <nav className="flex flex-col gap-6 px-6 py-6 text-white text-lg font-light">
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#practice" onClick={() => setOpen(false)}>
              Practice Areas
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
