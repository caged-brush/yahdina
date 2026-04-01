import React from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Info from "@/component/Info";
import PracticeArea from "@/component/PracticeArea";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <Hero />
        <Header />
      </section>
      <Info />
      <PracticeArea />
      <Footer />
    </main>
  );
};

export default page;
