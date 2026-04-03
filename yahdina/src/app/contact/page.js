"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#efefef] pt-[150px]">
        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-28">
            {/* Left side */}
            <motion.div
              className="max-w-[560px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[64px] font-light leading-[0.95] tracking-[-0.05em] text-black md:text-[80px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                Contact Us
              </motion.h1>

              <motion.p
                className="mt-12 max-w-[520px] text-[18px] leading-[1.6] text-black/90 md:text-[20px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Need expert legal guidance? Our team is here to help. Whether
                it&apos;s corporate law, dispute resolution, or navigating
                complex legal challenges, we&apos;ve got you covered. Get in
                touch with us today for trusted advice and solutions that work.
              </motion.p>

              <motion.div
                className="mt-10 space-y-1 text-[18px] leading-[1.5] text-black md:text-[20px]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <a
                  href="mailto:talatu.jibril@yahdina.com"
                  className="underline underline-offset-4"
                >
                  talatu.jibril@yahdina.com
                </a>
                <p>+(234)-802-367-6043</p>
              </motion.div>
            </motion.div>

            {/* Right side */}
            <motion.div
              className="max-w-[520px] lg:ml-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <form className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                >
                  <p className="text-[22px] font-light text-black">Name</p>

                  <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-[18px] leading-[1.25] text-black">
                        First Name{" "}
                        <span className="text-black/55">(required)</span>
                      </label>
                      <input
                        type="text"
                        className="mt-10 w-full border-0 border-b border-black/35 bg-transparent pb-2 text-[18px] text-black outline-none transition-colors duration-300 focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-[18px] leading-[1.25] text-black">
                        Last Name{" "}
                        <span className="text-black/55">(required)</span>
                      </label>
                      <input
                        type="text"
                        className="mt-10 w-full border-0 border-b border-black/35 bg-transparent pb-2 text-[18px] text-black outline-none transition-colors duration-300 focus:border-black"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                >
                  <label className="block text-[22px] font-light text-black">
                    Email <span className="text-black/55">(required)</span>
                  </label>
                  <input
                    type="email"
                    className="mt-10 w-full border-0 border-b border-black/35 bg-transparent pb-2 text-[18px] text-black outline-none transition-colors duration-300 focus:border-black"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                >
                  <label className="block text-[22px] font-light text-black">
                    Message <span className="text-black/55">(required)</span>
                  </label>
                  <textarea
                    rows={4}
                    className="mt-10 w-full resize-none border-0 border-b border-black/35 bg-transparent pb-2 text-[18px] text-black outline-none transition-colors duration-300 focus:border-black"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-black px-10 py-5 text-[18px] font-light uppercase tracking-[0.02em] text-black transition hover:bg-black hover:text-white"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
