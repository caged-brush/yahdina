import React from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";

const page = () => {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
        <Header />
      </section>
    </main>
  );
};

export default page;
