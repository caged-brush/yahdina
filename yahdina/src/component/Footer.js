import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e7e7e7] px-6 py-16 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-light tracking-[-0.02em] text-black md:text-4xl">
            Yahdina Chambers
          </h2>

          <p className="mt-6 text-lg text-black/80">
            Made with{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Squarespace
            </span>
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-2xl font-light text-black">Location</h3>

          <p className="mt-6 text-lg leading-relaxed text-black/80">
            1st Floor, 29 Araromi Street,
            <br />
            Onikan, Lagos,
            <br />
            Nigeria
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-2xl font-light text-black">Contact</h3>

          <p className="mt-6 text-lg leading-relaxed text-black/80">
            talatu.jibril@yahdina.com
            <br />
            +(234)-802-367-6043
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
