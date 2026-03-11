import React from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Info from "@/component/Info";
import PracticeArea from "@/component/PracticeArea";

const page = () => {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
        <Header />
      </section>
      <Info />
      <PracticeArea />
    </main>
  );
};

export default page;
