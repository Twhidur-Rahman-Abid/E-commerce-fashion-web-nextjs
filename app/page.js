import Image from "next/image";
import React from "react";

import Cover from "./components/Cover";
import Hero from "./components/Hero";
import BestSelling from "./components/BestSelling";
import Categorys from "./components/Categorys";
import Discount from "./components/Discount";
import About from "./components/About";

const Home = () => {
  return (
    <div className="px-[5%] m-auto pt-6">
      {
        // hero start
      }

      <Hero />

      {
        // cover
      }
      <BestSelling />
      <Cover />
      <Categorys />
      <Discount />
      <About />
    </div>
  );
};

export default Home;
