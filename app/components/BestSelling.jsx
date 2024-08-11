import Image from "next/image";
import React from "react";

import c6 from "/public/assets/images/c6.jpg";
import c2 from "/public/assets/images/c2-min.jpg";
import c3 from "/public/assets/images/c3-min.jpg";

const BestSelling = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl md:text-4xl text-dark font-medium">
            Bestseller Products
          </h1>
          <p className="text-md md:text-lg text-dark mt-6">
            Discover your unique style today.
          </p>
        </div>
        <button className="bg-Secondary py-2 px-4 md:px-6 text-dark text-md md:text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] basis-[50%] md:basis-auto">
          Get Started
        </button>
      </div>

      {/* card */}
      <div className="space-y-4 md:space-y-0 md:flex justify-between gap-6 mt-10">
        <div className="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-lg relative overflow-hidden h-[350px] md:h-[450px]">
          <Image
            placeholder="blur"
            src={c6}
            className="w-full h-full object-cover rounded-sm"
            alt="c6"
          />
          <button className="bg-Primary py-2 px-6 text-white text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] ml-6">
            Add To Card
            <i className="w-[80px] text-white ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-lg relative overflow-hidden h-[450px]">
          <Image
            src={c2}
            className="w-full h-full object-cover rounded-sm"
            alt="c2"
            placeholder="blur"
          />
          <button className="bg-Primary py-2 px-6 text-white text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] ml-6">
            Add To Card
            <i className="w-[80px] text-white ri-arrow-right-line"></i>
          </button>
        </div>
        <div className="card basis-1/3 relative hover:border-2 hover:border-r-4 hover:border-b-4 transition-all border-dark rounded-lg relative overflow-hidden h-[450px]">
          <Image
            placeholder="blur"
            src={c3}
            className="w-full h-full object-cover rounded-sm"
            alt="c3"
          />
          <button className="bg-Primary py-2 px-6 text-white text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] ml-6">
            Add To Card
            <i className="w-[80px] text-white ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
