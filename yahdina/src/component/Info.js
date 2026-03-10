import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <section className="bg-white">
      {/* First block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image side */}
        <div className="relative h-[320px] sm:h-[450px] md:h-[650px] lg:h-[850px] w-full overflow-hidden rounded-br-[60px] md:rounded-br-[120px]">
          <Image
            src="/images/lagos-ikoyi.jpg"
            alt="Lagos bridge"
            fill
            className="object-cover"
          />
        </div>

        {/* Text side */}
        <div className="px-6 sm:px-8 md:px-0 max-w-xl">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.5] text-gray-900">
            <span className="font-bold">Yahdina Chambers</span> is a preeminent
            commercial law firm headquartered in Nigeria. It is celebrated for
            providing bespoke legal services and solutions to its numerous
            clients. The firm is also widely applauded in Nigeria and globally
            for its adept handling of complex legal issues and business
            scenarios.
          </p>
        </div>
      </div>

      {/* Second block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mt-12 md:mt-0">
        {/* Text side */}
        <div className="order-2 md:order-1 px-6 sm:px-8 md:px-0 max-w-xl md:ml-20 md:mt-56">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-[1.5] text-gray-900">
            Our accomplished <span className="font-bold">legal team</span> has
            extensive international commercial transaction knowledge and
            practical experience in the dynamic Nigerian business landscape.
            From start-up initiatives and contract negotiations to regulatory
            affairs, investments, and corporate restructuring, our expertise
            spans diverse sectors.
          </p>
        </div>

        {/* Image side */}
        <div className="order-1 md:order-2 relative h-[320px] sm:h-[450px] md:h-[650px] lg:h-[850px] w-full overflow-hidden rounded-tl-[60px] md:rounded-tl-[120px]">
          <Image
            src="/images/ghetto.jpg"
            fill
            className="object-cover"
            alt="Lagos ghetto"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
