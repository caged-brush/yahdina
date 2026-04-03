import React from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const Page = () => {
  const columns = [
    [
      {
        title: "Property Law",
        description:
          "With a proven track record, we provide expertise in property consultations, legal document drafting, land documentation perfection, property acquisition, and power of sale over land assets.",
      },
      {
        title: "Maritime",
        description:
          "Committed to the pivotal role of maritime activities, we offer comprehensive legal advisory, transaction support, and litigation services, covering a broad range of maritime-related issues.",
      },
    ],
    [
      {
        title: "Financial Advisory",
        description:
          "Guiding corporations in traditional corporate finance and debt recovery transactions, including mergers and acquisitions, our adept team ensures sound financial strategies for our clients.",
      },
      {
        title: "Insolvency and Debt Recovery",
        description:
          "Our comprehensive insolvency practice covers debt recovery, creditor rights enforcement, asset tracing, and corporate restructuring, ensuring favorable outcomes for our clients.",
      },
      {
        title: "Corporate and Commercial",
        description:
          "We offer comprehensive support in corporate expansion, encompassing foreign investment, banking, corporate finance, and syndicated finance. Our expertise spans strategic planning, transaction structuring, and end-to-end oversight of deals.",
      },
    ],
    [
      {
        title: "Dispute Resolution",
        description:
          "Efficient and budget-conscious, our dispute resolution team navigates litigation, arbitration, mediation, and negotiation, achieving successful resolutions across a spectrum of industries.",
      },
      {
        title: "Energy and National Resources",
        description:
          "Our interdisciplinary team navigates transactional and regulatory matters across the energy and natural resources supply chain, providing innovative solutions to legal, regulatory, and structural challenges.",
      },
    ],
  ];

  return (
    <main className="min-h-screen bg-[#f3f3f3] text-black">
      <Header />

      <section className="mx-auto max-w-[1320px] px-6 pb-24 pt-[150px] md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-x-[44px] gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-[92px]">
              {column.map((area, index) => (
                <article key={index} className="max-w-[360px]">
                  <h2 className="text-[34px] font-light leading-[1.05] tracking-[-0.05em] text-black md:text-[36px]">
                    {area.title}
                  </h2>

                  <p className="mt-[62px] text-[17px] font-light leading-[1.72] tracking-[-0.015em] text-black/92 md:text-[18px]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
