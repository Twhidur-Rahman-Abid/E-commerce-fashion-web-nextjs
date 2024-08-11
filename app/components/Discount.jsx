import Image from "next/image";
import React from "react";

import ima1 from "/public/assets/images/img1 (1) (1).jpg";

const Discount = () => {
  return (
    <div class="bg-lightPink p-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between rounded-lg my-20">
      <div class="basis-1/2 bg-lightPurple rounded-md">
        <Image class="w-[60%] m-auto" src={ima1} alt="" />
      </div>
      <div class="basis-1/2 flex flex-col items-center justify-center text-center">
        <div class="w-[200px] h-[200px] rounded-full bg-white flex flex-col justify-center items-center gap-2">
          <p class="text-xl text-dark/7">DISCOUNT</p>
          <h4 class="text-5xl italic text-Primary text-nowrap">Winter 2024</h4>
          <h5 class="text-xl">
            SALE <span class="font-medium">50%</span>
          </h5>
        </div>

        <div class="flex gap-4 md:gap-10 mt-10 mb-6">
          <div class="flex items-end gap-[2px] md:gap-2">
            <p class="text-xl md:text-5xl leading-none">5</p>
            <p class="text-sm text-textDark leading-none">Day</p>
          </div>
          <div class="flex items-end gap-[2px] md:gap-2">
            <p class="text-xl md:text-5xl leading-none">5</p>
            <p class="text-sm text-textDark leading-none">Day</p>
          </div>
          <div class="flex items-end gap-[2px] md:gap-2">
            <p class="text-xl md:text-5xl leading-none">5</p>
            <p class="text-sm text-textDark leading-none">Day</p>
          </div>
          <div class="flex items-end gap-[2px] md:gap-2">
            <p class="text-xl md:text-5xl leading-none">5</p>
            <p class="text-sm text-textDark leading-none">Day</p>
          </div>
        </div>

        <button class="bg-Primary py-2 px-6 text-white text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]">
          Shop Now <i class="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Discount;
