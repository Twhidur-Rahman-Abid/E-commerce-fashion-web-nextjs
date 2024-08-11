import React from "react";

import avatar1 from "/public/assets/images/avatar1.jpg";
import avatar2 from "/public/assets/images/avatar2.jpg";
import avatar3 from "/public/assets/images/avatar3.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div class="mt-10">
      <h2 class="text-2xl font-medium text-dark text-center mb-10">
        What say About us
      </h2>

      <div class="flex flex-col md:flex-row justify-between gap-6">
        <div class="bg-lightPink p-6 space-y-6 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illum aliquam eum maiores praesentium, ducimus, tempore ab deleniti
            ipsa repellendus eius molestias explicabo consequuntur quidem?
          </p>

          <div class="flex gap-4">
            <Image
              src={avatar1}
              class="w-[42px] h-[42px] rounded-full object-cover"
              alt="avatar1"
              placeholder="blur"
            />
            <div class="leading-none flex flex-col justify-between">
              <p class="text-lg leading-sm font-medium">Jessica Ronison</p>
              <small class="text-textDark text-md">
                London, United Kingdom
              </small>
            </div>
          </div>
        </div>
        <div class="bg-lightPink p-6 space-y-6 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illum aliquam eum maiores praesentium, ducimus, tempore ab deleniti
            ipsa repellendus eius molestias explicabo consequuntur quidem?
          </p>

          <div class="flex gap-4">
            <Image
              src={avatar2}
              class="w-[42px] h-[42px] rounded-full object-cover"
              alt="avatar2"
              placeholder="blur"
            />
            <div class="leading-none flex flex-col justify-between">
              <p class="text-lg leading-sm font-medium">Jessica Ronison</p>
              <small class="text-textDark text-md">
                London, United Kingdom
              </small>
            </div>
          </div>
        </div>
        <div class="bg-lightPink p-6 space-y-6 rounded-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illum aliquam eum maiores praesentium, ducimus, tempore ab deleniti
            ipsa repellendus eius molestias explicabo consequuntur quidem?
          </p>

          <div class="flex gap-4">
            <Image
              src={avatar3}
              class="w-[42px] h-[42px] rounded-full object-cover"
              alt="avatar3"
              placeholder="blur"
            />
            <div class="leading-none flex flex-col justify-between">
              <p class="text-lg leading-sm font-medium">Jessica Ronison</p>
              <small class="text-textDark text-md">
                London, United Kingdom
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
