import Image from "next/image";
import React from "react";

import hero1 from "/public/assets/images/hero1.jpg";
import hero2 from "/public/assets/images/h2-min.jpg";
import avatar1 from "/public/assets/images/avatar1.jpg";
import avatar2 from "/public/assets/images/avatar2.jpg";
import avatar4 from "/public/assets/images/avatar4.jpg";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-9 grid-rows-6 gap-6 space-y-4 md:space-y-0">
      <div className="w-full h-auto col-span-3 row-span-3 rounded-lg">
        <Image
          src={hero1}
          className="w-full h-full object-cover bg-start rounded-lg"
          alt="Hero 1"
          placeholder="blur"
        />
      </div>
      <div className="w-full h-auto rounded-lg col-span-4 row-span-4 bg-lightPink p-10">
        <div className="text-3xl md:text-5xl leading-none">
          <h2 className="font-medium leading-none flex gap-4">
            Explore
            <div className="flex -space-x-2 rtl:space-x-reverse">
              <Image
                className="w-10 h-10 rounded-full"
                src={avatar1}
                width="100%"
                alt="Avatar 1"
                placeholder="blur"
              />
              <Image
                className="w-10 h-10 border-2 border-white rounded-full object-cover"
                src={avatar2}
                alt=""
              />
              <Image
                className="w-10 h-10 border-2 border-white rounded-full object-cover"
                src={avatar4}
                alt=""
              />
            </div>
          </h2>
          <h2 className="font-medium uppercase">
            Your Fashions <br />
            tunnig
          </h2>
        </div>
        <p className="mt-6 mb-4">
          At our fashion haven, wb believe that fashion is more than just
          attire__it s a from of self-expression
        </p>

        <button className="bg-Primary py-2 px-6 text-white text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px] hover:scale-105 transition-all">
          Shop Now
        </button>
      </div>
      <div className="w-full h-auto col-span-2 row-span-2 rounded-lg bg-lightGreen p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="bg-dark w-[60px] p-[2px] rounded-full">
            <div className="w-[25px] bg-lightGreen p-[1px] rounded-full"></div>
          </div>

          {/* <div className="flex -space-x-2 rtl:space-x-reverse">
            <Image
              className="w-6 h-6 rounded-full"
              src="images/avatar1.jpg"
              alt=""
            />
            <Image
              className="w-6 h-6 border-2 border-white rounded-full object-cover"
              src="images/avatar2.jpg"
              alt=""
            />
            <Image
              className="w-6 h-6 border-2 border-white rounded-full object-cover"
              src="images/avatar3.jpg"
              alt=""
            />
          </div> */}
        </div>

        <h2 className="text-4xl font-medium">2M+</h2>
        <h4 className="text-2xl text-textDark">
          Trusted Users <i className="ri-arrow-right-line ml-2"></i>
        </h4>
      </div>
      <div className="w-full h-auto row-span-4 col-span-2 rounded-lg">
        <Image
          src={hero2}
          className="w-full object-cover rounded-lg h-full"
          alt=""
        />
      </div>
      <div className="w-full h-auto rounded-lg col-span-3 row-span-3 bg-lightPurple p-6">
        <h2 className="text-[40px] leading-none uppercase font-medium text-dark">
          get ready <br />
          for somthing new
        </h2>
        <div className="flex items-center justify-between">
          <div className="bg-white rounded-full w-10 h-10">
            <i className="text-4xl ri-arrow-right-down-line"></i>
          </div>
          <h3 className="text-7xl text-white">*</h3>
        </div>
      </div>
      <div className="w-full h-auto col-span-4 row-span-2 bg-lightYellow rounded-lg p-6 flex justify-between">
        <div className="space-y-4">
          <h3 className="font-medium text-4xl">250k</h3>
          <p className="text-2xl text-dark/7 font-medium">Collection</p>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-4xl">250k</h3>
          <p className="text-2xl text-dark/7 font-medium">Collection</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
