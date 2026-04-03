"use client";

import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  const data = [
    { caption: "Corporate and M&A", image: "corp.jpg" },
    { caption: "Banking and Finance", image: "money.jpg" },
    { caption: "Commercial Law", image: "comm-law.jpg" },
    { caption: "Admiralty and Maritime Law", image: "maritime.jpg" },
    { caption: "Corporate Governance and Compliance", image: "corp-gov.jpg" },
    { caption: "Energy and Natural Resources", image: "natural.jpg" },
    { caption: "Intellectual Property", image: "intel.jpg" },
    { caption: "Litigation and Dispute Management", image: "litigation.jpg" },
    { caption: "Real Estate", image: "real-estate.jpg" },
    {
      caption: "Sanctions, International Trade and Investment Compliance",
      image: "trade.jpg",
    },
    {
      caption: "Telecommunications, Media and Technology",
      image: "telecommunication.jpg",
    },
    {
      caption: "Wealth, Asset Management and Private Client",
      image: "asset-mgnt.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#ebebeb]">
        {/* Title Section */}
        <section className="w-full bg-[#f5f5f5] pt-32 pb-20">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[56px] font-light tracking-[-0.04em] text-black md:text-[72px] lg:text-[80px]"
            >
              Our Services
            </motion.h2>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full bg-[#ebebeb] pb-20">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-16">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className={`h-[620px] w-full overflow-hidden ${
                    index === 0 ? "rounded-tl-[100px]" : ""
                  } ${index === 2 ? "rounded-tr-[100px]" : ""} ${
                    index === 9 ? "rounded-bl-[100px]" : ""
                  } ${index === 11 ? "rounded-br-[100px]" : ""}`}
                >
                  <Image
                    src={`/images/${item.image}`}
                    width={900}
                    height={1200}
                    alt={item.caption}
                    className="h-full w-full object-cover transition duration-500 ease-out hover:scale-105"
                  />
                </div>

                <p className="mt-4 text-[18px] font-light leading-[1.4] text-black">
                  {item.caption}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-32 flex flex-col items-center justify-center px-6 pb-10 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] font-light tracking-[-0.03em] text-black md:text-[60px] lg:text-[72px]">
              Schedule your appointment
            </h2>

            <button className="mt-8 rounded-full border border-black px-10 py-4 text-[16px] font-light text-black transition hover:bg-black hover:text-white">
              Book now
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
