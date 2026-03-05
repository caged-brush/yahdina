import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/vi.png')" }}
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-6xl md:text-8xl font-light leading-[0.95]">
              Your Legal
              <br />
              Success begins
              <br />
              here.
            </h1>

            <button className="mt-8 rounded-full border border-white px-8 py-4 text-white text-2xl font-light transition hover:bg-white hover:text-black">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
