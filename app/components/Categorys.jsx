import Image from "next/image";
import React from "react";

import m1 from "/public/assets/images/m (1).jpg";
import w1 from "/public/assets/images/w (1).jpg";
import k1 from "/public/assets/images/k.jpg";
import c7 from "/public/assets/images/c7.jpg";

const Categorys = () => {
  return (
    <div class="mt-10">
      <div class="flex justify-between items-start">
        <div class="">
          <h1 class="text-xl md:text-4xl text-dark font-medium">
            Bestseller Products
          </h1>
          <p class="text-md md:text-lg text-dark mt-6">
            Discover your unique style today.
          </p>
        </div>
        <button class="bg-Secondary py-2 px-4 md:px-6 text-dark text-md md:text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] basis-[50%] md:basis-auto">
          Get Started
        </button>
      </div>

      {/* <!-- card --> */}
      <div class="space-y-4 md:space-y-0 md:flex justify-between gap-6 mt-10">
        <div>
          <div class="card hover-shadow transition-all border-dark rounded-full relative overflow-hidden h-[250px] md:h-[350px]">
            <Image
              src={m1}
              class="w-full h-full object-cover rounded-sm"
              alt="m1"
              placeholder="blur"
            />
          </div>
          <h3 class="text-center text-xl font-medium mt-4">Man fashion</h3>
        </div>
        <div>
          <div class="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-full relative overflow-hidden h-[250px] md:h-[350px]">
            <Image
              src={w1}
              class="w-full h-full object-cover rounded-sm"
              alt="w1"
              placeholder="blur"
            />
          </div>
          <h3 class="text-center text-xl font-medium mt-4">Women fashion</h3>
        </div>
        <div>
          <div class="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-full relative overflow-hidden h-[250px] md:h-[350px]">
            <Image
              src={k1}
              class="w-full h-full object-cover rounded-sm"
              alt="k1"
              placeholder="blur"
            />
          </div>
          <h3 class="text-center text-xl font-medium mt-4">Kids fashion</h3>
        </div>
        <div>
          <div class="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-full relative overflow-hidden h-[250px] md:h-[350px]">
            <Image
              src={c7}
              class="w-full h-full object-cover rounded-sm"
              alt="c7"
              placeholder="blur"
            />
          </div>
          <h3 class="text-center text-xl font-medium mt-4">New Arrival</h3>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
