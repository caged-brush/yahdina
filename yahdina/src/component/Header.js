"use client";

import React, { useEffect, useState } from "react";

const Header = ({ hasHero = false }) => {
  const [open, setOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    if (!hasHero) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsOverHero(window.scrollY < heroHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasHero]);

  const transparentMode = hasHero && isOverHero;

  return (
    <header
      className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
        transparentMode
          ? "bg-transparent text-white"
          : "bg-white text-black shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-6">
        <a
          href="/"
          className={`text-lg font-light tracking-wide md:text-2xl ${
            transparentMode ? "text-white" : "text-black"
          }`}
        >
          Yahdina Chambers
        </a>

        <nav
          className={`hidden items-center gap-8 text-base font-light md:flex lg:gap-10 lg:text-lg ${
            transparentMode ? "text-white" : "text-black"
          }`}
        >
          <a href="/about" className="transition hover:opacity-70">
            About
          </a>
          <a href="#practice" className="transition hover:opacity-70">
            Practice Areas
          </a>
          <a href="#services" className="transition hover:opacity-70">
            Services
          </a>
          <a href="#contact" className="transition hover:opacity-70">
            Contact
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${transparentMode ? "text-white" : "text-black"}`}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 ${
                transparentMode ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`block h-0.5 w-6 ${
                transparentMode ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`block h-0.5 w-6 ${
                transparentMode ? "bg-white" : "bg-black"
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div
          className={`md:hidden ${
            transparentMode
              ? "bg-black/40 backdrop-blur-md text-white"
              : "bg-white text-black"
          }`}
        >
          <nav className="flex flex-col gap-6 px-6 py-6 text-lg font-light">
            <a href="/about" onClick={() => setOpen(false)}>
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
