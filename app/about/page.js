import Image from "next/image";
import React from "react";

import about1 from "/public/assets/images/about-1.jpg";
import about2 from "/public/assets/images/about-2.jpg";
import about3 from "/public/assets/images/about-3.jpg";
import about4 from "/public/assets/images/about-4.jpg";

const AboutPage = () => {
  return (
    <div class="px-[5%] m-auto pt-6">
      <div class="my-10 text-center">
        <h2 class="text-xl md:text-2xl font-medium">
          We are here to help you go places in style
        </h2>
        <p class="text-textDark my-4 md:w-[60%] m-auto">
          Our goal is to help you look and feel confident as you take on the
          world, whether it be for a casual weekend getaway or a formal
          occasion. We strive to make fashion accessible to everyone, no matter
          your budget. We are dedicated to curating a wide range of
          high-quality, stylish products that cater to different tastes and
          preferences.
        </p>
        <h4 class="text-textDark mt-6">Jessica Robinson</h4>
        <h5 class="text-sm text-textDark">Jessica Robinson • CEO</h5>
      </div>

      <div class="grid md:grid-cols-4 md:grid-rows-2 gap-6">
        <Image
          class="col-span-2 row-span-2 object-cover bg-center w-full"
          src={about1}
          alt="about1"
          placeholder="blur"
        />

        <Image
          class="col-span-2 object-cover bg-center h-full w-full"
          src={about2}
          alt="about2"
          placeholder="blur"
        />

        <Image
          class="object-cover bg-center h-full w-full"
          src={about3}
          alt="about3"
          placeholder="blur"
        />

        <Image
          class="object-cover bg-center h-full w-full"
          src={about4}
          alt="about4"
          placeholder="blur"
        />
      </div>

      <div class="flex justify-between bg-lightYellow p-6 mt-10 md:p-10 rounded-lg">
        <div class="space-y-2 md:space-y-4">
          <h2 class="text-xl md:text-2xl font-medium">25+</h2>
          <p class="text-sm text-textDark">Years</p>
        </div>
        <div class="space-y-2 md:space-y-4">
          <h2 class="text-xl md:text-2xl font-medium">220+</h2>
          <p class="text-sm text-textDark">Stores</p>
        </div>
        <div class="space-y-2 md:space-y-4">
          <h2 class="text-xl md:text-2xl font-medium">245K+</h2>
          <p class="text-sm text-textDark">Customers</p>
        </div>
        <div class="space-y-2 md:space-y-4">
          <h2 class="text-xl md:text-2xl font-medium">25+</h2>
          <p class="text-sm text-textDark">Awards</p>
        </div>
        <div class="space-y-2 md:space-y-4">
          <h2 class="text-xl md:text-2xl font-medium">99%</h2>
          <p class="text-sm text-textDark">Satisfied</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-10">
        <div>
          <h2 class="text-2xl font-medium">Answers to Your Questions</h2>
          <p class="text-textDark pt-10 pb-12">
            Got questions? Weve got answers. Below are some of the most
            frequently asked questions about Chic Couture. If you can not find
            what you re looking for, feel free to contact us. We are here to
            help!
          </p>
          <i class="text-[300px] text-lightYellow leading-none ri-double-quotes-l"></i>
        </div>
        <div class="space-y-4">
          <details class="p-4 bg-lightPink rounded-lg">
            <summary class="summary-text text-lg md:text-xl font-medium mb-2">
              What is your return policy?
            </summary>
            <p class="text-textDark">
              What is your return policy? We offer a 30-day return policy for
              all unused items with original tags attached. Simply contact our
              customer service to initiate a return and receive a prepaid
              shipping label.
            </p>
          </details>
          <details class="p-4 bg-lightPink rounded-lg">
            <summary class="summary-text text-lg md:text-xl font-medium mb-2">
              How do I track my order?
            </summary>
            <p class="text-textDark">
              What is your return policy? We offer a 30-day return policy for
              all unused items with original tags attached. Simply contact our
              customer service to initiate a return and receive a prepaid
              shipping label.
            </p>
          </details>
          <details class="p-4 bg-lightPink rounded-lg">
            <summary class="summary-text text-lg md:text-xl font-medium mb-2">
              Are your products sustainably made?
            </summary>
            <p class="text-textDark">
              What is your return policy? We offer a 30-day return policy for
              all unused items with original tags attached. Simply contact our
              customer service to initiate a return and receive a prepaid
              shipping label.
            </p>
          </details>
          <details class="p-4 bg-lightPink rounded-lg">
            <summary class="summary-text text-lg md:text-xl font-medium mb-2">
              Do you offer international shipping?
            </summary>
            <p class="text-textDark">
              What is your return policy? We offer a 30-day return policy for
              all unused items with original tags attached. Simply contact our
              customer service to initiate a return and receive a prepaid
              shipping label.
            </p>
          </details>
          <details class="p-4 bg-lightPink rounded-lg">
            <summary class="summary-text text-lg md:text-xl font-medium mb-2">
              How can I find the right size?
            </summary>
            <p class="text-textDark">
              What is your return policy? We offer a 30-day return policy for
              all unused items with original tags attached. Simply contact our
              customer service to initiate a return and receive a prepaid
              shipping label.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
