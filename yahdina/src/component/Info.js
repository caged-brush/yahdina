"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Info = () => {
  return (
    <section className="bg-white">
      {/* First block */}
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Image side */}
        <motion.div
          className="relative h-[320px] w-full overflow-hidden rounded-br-[60px] sm:h-[450px] md:h-[650px] md:rounded-br-[120px] lg:h-[850px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/lagos-ikoyi.jpg"
            alt="Lagos bridge"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          className="max-w-xl px-6 sm:px-8 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-xl leading-[1.5] text-gray-900 sm:text-2xl lg:text-3xl">
            <span className="font-bold">Yahdina Chambers</span> is a preeminent
            commercial law firm headquartered in Nigeria. It is celebrated for
            providing bespoke legal services and solutions to its numerous
            clients. The firm is also widely applauded in Nigeria and globally
            for its adept handling of complex legal issues and business
            scenarios.
          </p>
        </motion.div>
      </div>

      {/* Second block */}
      <div className="mt-12 grid grid-cols-1 items-center gap-8 md:mt-0 md:grid-cols-2 md:gap-12">
        {/* Text side */}
        <motion.div
          className="order-2 max-w-xl px-6 sm:px-8 md:order-1 md:ml-20 md:mt-56 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xl leading-[1.5] text-gray-900 sm:text-2xl lg:text-3xl">
            Our accomplished <span className="font-bold">legal team</span> has
            extensive international commercial transaction knowledge and
            practical experience in the dynamic Nigerian business landscape.
            From start-up initiatives and contract negotiations to regulatory
            affairs, investments, and corporate restructuring, our expertise
            spans diverse sectors.
          </p>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="order-1 relative h-[320px] w-full overflow-hidden rounded-tl-[60px] sm:h-[450px] md:order-2 md:h-[650px] md:rounded-tl-[120px] lg:h-[850px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          <Image
            src="/images/ghetto.jpg"
            fill
            className="object-cover"
            alt="Lagos ghetto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
