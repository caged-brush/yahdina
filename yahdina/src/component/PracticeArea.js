"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const PracticeArea = () => {
  const images = [
    { caption: "Corporate and Commercial", image: "corporate.jpg" },
    { caption: "Financial Advisory", image: "finance.jpg" },
    { caption: "Insolvency and Debt Recovery", image: "debt.jpg" },
    { caption: "Property Law", image: "property.jpg" },
    { caption: "Dispute Resolution", image: "resolution.jpg" },
    { caption: "Energy and Natural Resources", image: "energy.jpg" },
  ];

  return (
    <section className="bg-[#f8f6f6] px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mt-20">
          <motion.h2
            className="mb-8 text-[34px] font-light leading-none tracking-[-0.03em] text-black md:text-[56px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Practice Areas
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-x-3 gap-y-10 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={container}
          >
            {images.map((item, index) => (
              <motion.div
                key={item.caption}
                className="flex flex-col"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div
                  className={`relative h-[260px] w-full overflow-hidden md:h-[300px] lg:h-[340px] ${
                    index === 0 ? "rounded-tl-[90px]" : ""
                  } ${index === 5 ? "rounded-br-[90px]" : ""}`}
                >
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

                <span className="mt-3 text-[18px] leading-tight text-black underline underline-offset-4 md:text-[22px]">
                  {item.caption}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-24 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[420px] w-full max-w-[640px] overflow-hidden rounded-[56px] md:h-[520px] lg:h-[600px]">
              <Image
                src="/images/client-centric.jpg"
                alt="Client Centric"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-[560px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            <h1 className="text-[44px] font-light leading-[0.98] tracking-[-0.04em] text-black md:text-[68px] lg:text-[76px]">
              Client-Centric
              <br />
              Excellence
            </h1>

            <p className="mt-6 text-[18px] leading-[1.5] text-black md:mt-8 md:text-[22px] lg:text-[24px]">
              Our cornerstone is our clients. We not only address a myriad of
              corporate and commercial issues but also surpass expectations by
              prioritizing their objectives. This commitment has forged lasting
              partnerships, where we consistently deliver timely, effective, and
              value-driven services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;
