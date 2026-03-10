import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <>
      <div className="grid grid-cols-2  bg-white">
        <div className="flex gap-12 items-center">
          {/* Image side */}
          <div className="relative flex-1 h-[700px] overflow-hidden rounded-br-[120px]">
            <Image
              src="/images/lagos-ikoyi.jpg"
              alt="Lagos bridge"
              fill
              className="object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-gray-800">
              Yahdina Chambers is a preeminent commercial law firm headquartered
              in Nigeria. It is celebrated for providing bespoke legal services
              and solutions to its numerous clients. The firm is also widely
              applauded in Nigeria and globally for its adept handling of
              complex legal issues and business scenarios.
            </p>
          </div>
        </div>
        <div>2</div>
      </div>
    </>
  );
};

export default Info;
