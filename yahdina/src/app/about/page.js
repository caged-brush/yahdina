import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Header />

      <main className="bg-[#e7e7e7] px-6 pt-28 pb-10 md:px-12 md:pt-32 md:pb-14 lg:px-16 lg:pt-36 lg:pb-16">
        <section className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-2 lg:gap-20">
          <div className="max-w-[700px] pt-2">
            <h1 className="text-[52px] font-light leading-[0.95] tracking-[-0.04em] text-black md:text-[80px] lg:text-[96px]">
              Who we are
            </h1>

            <p className="mt-10 max-w-[760px] text-[20px] leading-[1.55] text-black md:text-[24px] lg:text-[26px]">
              As a full-service law firm, we are proud to offer comprehensive
              legal services designed to meet the diverse needs of our clients.
              Whether you are an individual seeking guidance on estate planning,
              a startup navigating the complexities of business formation, or a
              multinational corporation facing complex regulatory challenges, we
              have the experience and expertise to guide you every step of the
              way.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-[420px] w-full max-w-[620px] overflow-hidden rounded-[48px] md:h-[560px] lg:h-[710px]">
              <Image
                src="/images/who-we-are.jpg"
                alt="City skyline"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="bg-[#d8d6d6] px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-[42px] font-light tracking-[-0.03em] text-black md:text-[64px] lg:text-[72px]">
            Start Your Appointment
          </h2>

          {/* Button */}
          <button className="mt-10 rounded-full border border-black px-10 py-4 text-[18px] text-black transition-all duration-300 hover:bg-black hover:text-white md:text-[20px]">
            Click Here
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
