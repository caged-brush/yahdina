"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Heading */}
            <motion.h1
              className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1]"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Your Legal
              <br />
              Success begins
              <br />
              here.
            </motion.h1>

            {/* Button */}
            <Link href="/contact">
              <motion.button
                className="mt-6 sm:mt-8 rounded-full border border-white px-6 py-3 sm:px-8 sm:py-4 text-white text-base sm:text-lg md:text-2xl font-light transition hover:bg-white hover:text-black"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Book Your Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
