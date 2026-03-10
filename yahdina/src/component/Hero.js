import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vi.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1]">
              Your Legal
              <br />
              Success begins
              <br />
              here.
            </h1>

            <button className="mt-6 sm:mt-8 rounded-full border border-white px-6 py-3 sm:px-8 sm:py-4 text-white text-base sm:text-lg md:text-2xl font-light transition hover:bg-white hover:text-black">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
