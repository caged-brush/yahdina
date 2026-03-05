import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-6">
        <a href="/" className="text-white text-2xl font-light tracking-wide">
          Yahdina Chambers
        </a>

        <nav className="flex items-center gap-10 text-white text-lg font-light">
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
      </div>
    </header>
  );
};

export default Header;
