import React from "react";
import Image from "next/image";

const PracticeArea = () => {
  const images = [
    { caption: "Corporate and Commercial", image: "corporate.jpg" },
    { caption: "Financial Advisory", image: "finance.jpg" },
    { caption: "Insolvency and Debt Recovery", image: "debt.jpg" },
    { caption: "Property Law", image: "property.jpg" },
    { caption: "Dispute Resolution", image: "resolution.jpg" },
    { caption: "Energy and Natural Resources", image: "corporate.jpg" },
  ];

  return (
    <section className="bg-[#efefef] px-6 py-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-10 text-3xl font-light text-black md:text-5xl">
          Practice Areas
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {images.map((item, index) => (
            <div key={item.caption} className="flex flex-col">
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.caption}
                  fill
                  className={`object-cover ${
                    index === 0 ? "rounded-tl-[90px]" : ""
                  }  ${index === 5 ? "rounded-br-[90px]" : ""}`}
                />
              </div>

              <h2 className="mt-4 text-md font-light text-black underline underline-offset-4 md:text-3xl">
                {item.caption}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;
