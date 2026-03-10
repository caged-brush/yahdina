import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-12 items-center bg-white">
        {/* Image side */}
        <div className="relative flex-1 h-[850px] w-full overflow-hidden rounded-br-[120px]">
          <Image
            src="/images/lagos-ikoyi.jpg"
            alt="Lagos bridge"
            fill
            className="object-cover"
          />
        </div>

        {/* Text side */}
        <div className="max-w-xl">
          <p className="text-2xl leading-[1.5] text-gray-900">
            <span className="font-bold">Yahdina Chambers</span> is a preeminent
            commercial law firm headquartered in Nigeria. It is celebrated for
            providing bespoke legal services and solutions to its numerous
            clients. The firm is also widely applauded in Nigeria and globally
            for its adept handling of complex legal issues and business
            scenarios.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-white gap-12 item-center ">
        <div className="max-w-xl mt-56 ml-20">
          <p className="text-2xl text-gray-900">
            Our accomplished <span className="font-bold">legal team</span> has
            extensive international commercial transaction knowledge and
            practical experience in the dynamic Nigerian business landscape.
            From start-up initiatives and contract negotiations to regulatory
            affairs, investments, and corporate restructuring, our expertise
            spans diverse sectors.
          </p>
        </div>
        <div className="relative flex-1 h-[850px] w-full overflow-hidden rounded-tl-[120px]">
          <Image
            src="/images/ghetto.jpg"
            fill
            className="object-cover"
            alt="Lagos ghetto"
          />
        </div>
      </div>
    </>
  );
};

export default Info;
