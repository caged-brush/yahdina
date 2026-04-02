import React from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Info from "@/component/Info";
import PracticeArea from "@/component/PracticeArea";
import Footer from "@/component/Footer";

const Page = () => {
  return (
    <main>
      <Header hasHero />
      <Hero />
      <Info />
      <PracticeArea />
      <Footer />
    </main>
  );
};

export default Page;
