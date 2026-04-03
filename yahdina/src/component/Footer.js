"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#cbc9c9] px-6 py-16 md:px-12 lg:px-16">
      <motion.div
        className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Left */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-light tracking-[-0.02em] text-black md:text-4xl">
            Yahdina Chambers
          </h2>

          <p className="mt-6 text-lg text-black/80">
            Made with{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Squarespace
            </span>
          </p>
        </motion.div>

        {/* Middle */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-light text-black">Location</h3>

          <p className="mt-6 text-lg leading-relaxed text-black/80">
            1st Floor, 29 Araromi Street,
            <br />
            Onikan, Lagos,
            <br />
            Nigeria
          </p>
        </motion.div>

        {/* Right */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-light text-black">Contact</h3>

          <p className="mt-6 text-lg leading-relaxed text-black/80">
            talatu.jibril@yahdina.com
            <br />
            +(234)-802-367-6043
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
