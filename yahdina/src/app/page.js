import React from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Info from "@/component/Info";

const page = () => {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
        <Header />
      </section>
      <Info />
    </main>
  );
};

export default page;
